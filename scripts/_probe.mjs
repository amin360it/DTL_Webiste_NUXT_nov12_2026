import { spawn } from 'node:child_process'
import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const PORT = 9412
const URL_TARGET = 'http://localhost:3000/contact'
const widths = [320, 360, 375, 390, 414, 480, 574, 640, 720, 768, 800, 820, 821, 850, 900, 1000, 1024, 1080, 1150, 1200, 1280, 1440]

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
  for (let i = 0; i < 80; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/version`)
      if (r.ok) return (await r.json()).webSocketDebuggerUrl
    } catch {}
    await sleep(250)
  }
  throw new Error('chrome did not start')
}

await waitPort()
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
const js = (s) => JSON.stringify(s)

const probe = `(() => {
  const q = (s) => document.querySelector(s)
  const rect = (el) => { if (!el) return null; const r = el.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), right: Math.round(r.right) } }
  const menu = q('.nav-menu')
  const mr = menu.getBoundingClientRect()
  const cs = getComputedStyle(menu)
  const outside = []
  if (cs.position === 'fixed') {
    document.querySelectorAll('.nav-menu li, .nav-menu li a, .nav-menu .dropdown, .nav-menu .dd-inner, .drawer-head, .drawer-brand, .drawer-close').forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) return
      if (r.right > mr.right + 1 || r.left < mr.left - 1) outside.push((el.className || el.tagName) + ':' + Math.round(r.left) + '-' + Math.round(r.right))
    })
  }
  const drop = q('.has-dd .dropdown')
  return {
    vw: window.innerWidth,
    docScrollW: document.documentElement.scrollWidth,
    bodyOverflow: getComputedStyle(document.body).overflow,
    menuClass: menu.className,
    menuPos: cs.position,
    menu: rect(menu),
    menuScroll: menu.scrollWidth + '/' + menu.clientWidth + '/' + menu.scrollHeight + '/' + menu.clientHeight,
    head: rect(q('.drawer-head')),
    headScroll: q('.drawer-head') ? q('.drawer-head').scrollWidth + '/' + q('.drawer-head').clientWidth : null,
    close: rect(q('.drawer-close')),
    brand: rect(q('.drawer-brand')),
    brandStrong: rect(q('.drawer-brand strong')),
    brandSmall: rect(q('.drawer-brand small')),
    toggle: rect(q('.nav-toggle')),
    toggleVis: q('.nav-toggle') ? getComputedStyle(q('.nav-toggle')).visibility : null,
    backdrop: rect(q('.nav-backdrop')),
    backdropVis: q('.nav-backdrop') ? getComputedStyle(q('.nav-backdrop')).visibility : null,
    dropPos: drop ? getComputedStyle(drop).position : null,
    dropTransform: drop ? getComputedStyle(drop).transform : null,
    dropRect: rect(drop),
    navScroll: q('.nav-menu').scrollWidth + '/' + q('.nav-menu').clientWidth,
    brandTextDisplay: q('.brand-text') ? getComputedStyle(q('.brand-text')).display : null,
    outsideCount: outside.length,
    outside: outside.slice(0, 6)
  }
})()`

const results = []
const shots = []
for (const w of widths) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: 800, deviceScaleFactor: 1, mobile: false })
  await send('Page.navigate', { url: URL_TARGET })
  let ready = false
  for (let i = 0; i < 100; i++) {
    try {
      ready = await evaluate(`!!document.querySelector('.nav-toggle') && document.readyState === 'complete'`)
      if (ready) break
    } catch {}
    await sleep(250)
  }
  if (!ready) { results.push({ vw: w, error: 'not ready' }); continue }
  await sleep(400)
  await evaluate(`window.scrollTo(0, 300)`)
  await sleep(150)
  if (w <= 820) {
    for (let i = 0; i < 12; i++) {
      const open = await evaluate(`document.querySelector('.nav-menu').classList.contains('open')`)
      if (open) break
      await evaluate(`document.querySelector('.nav-toggle').click()`)
      await sleep(350)
    }
  }
  const data = await evaluate(probe)
  data.vw = w
  results.push(data)
  if ([320, 375, 414, 574, 768, 820].includes(w)) {
    const shot = await send('Page.captureScreenshot', { format: 'png' })
    const file = `scripts/_shot-${w}.png`
    writeFileSync(file, Buffer.from(shot.data, 'base64'))
    shots.push(file)
  }
}

writeFileSync('scripts/_probe2.json', JSON.stringify(results, null, 1))
console.log('shots:', shots.join(' '))

ws.close()
chrome.kill()
process.exit(0)
