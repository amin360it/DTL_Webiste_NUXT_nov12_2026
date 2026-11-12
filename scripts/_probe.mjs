import { spawn } from 'node:child_process'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const PORT = 9411
const URL_TARGET = 'http://localhost:3000/contact'
const widths = [320, 360, 375, 414, 480, 574, 640, 720, 768, 820, 900]

const dir = mkdtempSync(join(tmpdir(), 'cdp-'))
const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${dir}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function waitPort() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/version`)
      if (r.ok) return (await r.json()).webSocketDebuggerUrl
    } catch {}
    await sleep(250)
  }
  throw new Error('chrome did not start')
}

const browserWs = await waitPort()
const created = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' }).then((r) => r.json())
const ws = new WebSocket(created.webSocketDebuggerUrl)
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej })

let id = 0
const pending = new Map()
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data)
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id)
    pending.delete(msg.id)
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result)
  }
}
function send(method, params = {}) {
  const mid = ++id
  ws.send(JSON.stringify({ id: mid, method, params }))
  return new Promise((resolve, reject) => pending.set(mid, { resolve, reject }))
}
async function evaluate(expression) {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + ' ' + (r.result?.description || ''))
  return r.result.value
}

await send('Page.enable')
await send('Runtime.enable')

const probe = `(() => {
  const q = (s) => document.querySelector(s)
  const rect = (el) => { if (!el) return null; const r = el.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), right: Math.round(r.right) } }
  const hdr = q('.header')
  const hs = getComputedStyle(hdr)
  const menu = q('.nav-menu')
  const ms = getComputedStyle(menu)
  const head = q('.drawer-head')
  const close = q('.drawer-close')
  const brand = q('.drawer-brand')
  const mr = menu.getBoundingClientRect()
  const outside = []
  document.querySelectorAll('.nav-menu *, .nav-backdrop, .header .container > *').forEach((el) => {
    const r = el.getBoundingClientRect()
    if (r.width === 0 || r.height === 0) return
    if (r.right > mr.right + 1 || r.left < mr.left - 1) {
      outside.push((el.className || el.tagName) + ' ' + Math.round(r.left) + '-' + Math.round(r.right))
    }
  })
  return {
    vw: window.innerWidth,
    vh: window.innerHeight,
    docScrollW: document.documentElement.scrollWidth,
    bodyScrollW: document.body.scrollWidth,
    header: rect(hdr),
    headerPos: hs.position,
    headerZ: hs.zIndex,
    headerFilter: hs.filter + '|' + hs.backdropFilter + '|' + hs.transform + '|' + hs.contain + '|' + hs.willChange,
    menu: rect(menu),
    menuPos: ms.position,
    menuOverflow: ms.overflowX + '/' + ms.overflowY,
    menuScroll: menu.scrollWidth + '/' + menu.clientWidth + '/' + menu.scrollHeight + '/' + menu.clientHeight,
    menuPad: ms.padding,
    head: rect(head),
    headScrollW: head ? head.scrollWidth + '/' + head.clientWidth : null,
    close: rect(close),
    closeOpacity: close ? getComputedStyle(close).display + '/' + getComputedStyle(close).visibility : null,
    brand: rect(brand),
    brandText: rect(q('.drawer-brand span')),
    toggle: rect(q('.nav-toggle')),
    backdrop: rect(q('.nav-backdrop')),
    bodyOverflow: document.body.style.overflow + '|' + getComputedStyle(document.body).overflow,
    outside: outside.slice(0, 8),
    outsideCount: outside.length
  }
})()`

const out = []
for (const w of widths) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: 800, deviceScaleFactor: 1, mobile: false })
  await send('Page.navigate', { url: URL_TARGET })
  let ready = false
  for (let i = 0; i < 80; i++) {
    try {
      ready = await evaluate(`!!document.querySelector('.nav-toggle') && document.readyState === 'complete'`)
      if (ready) break
    } catch {}
    await sleep(250)
  }
  if (!ready) { out.push({ vw: w, error: 'not ready' }); continue }
  await sleep(300)
  await evaluate(`window.scrollTo(0, 300)`)
  if (w <= 820) {
    await evaluate(`document.querySelector('.nav-toggle').click()`)
    await sleep(700)
  }
  const data = await evaluate(probe)
  out.push(data)
}

console.log(JSON.stringify(out, null, 1))

ws.close()
chrome.kill()
process.exit(0)
