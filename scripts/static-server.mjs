import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { extname, join, normalize, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = fileURLToPath(new URL('.', import.meta.url))
const root = resolve(scriptDir, '..', 'publish', 'www')
const port = Number(process.env.PORT || 80)
const host = process.env.HOST || '0.0.0.0'

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.zip': 'application/zip',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject'
}

function safeJoin(base, target) {
  const p = normalize(join(base, target))
  if (p !== base && !p.startsWith(base + sep)) return null
  return p
}

function resolveFile(pathname) {
  const decoded = decodeURIComponent(pathname)
  const target = safeJoin(root, decoded)
  if (!target) return null
  if (!existsSync(target)) return null
  const st = statSync(target)
  if (st.isFile()) return target
  if (st.isDirectory()) {
    const idx = join(target, 'index.html')
    if (existsSync(idx) && statSync(idx).isFile()) return idx
  }
  return null
}

function send(res, status, file, extraHeaders = {}) {
  const type = mime[extname(file).toLowerCase()] || 'application/octet-stream'
  const stat = statSync(file)
  res.writeHead(status, {
    'Content-Type': type,
    'Content-Length': stat.size,
    'Cache-Control': 'no-cache',
    ...extraHeaders
  })
  createReadStream(file).pipe(res)
}

const server = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')
  const pathname = url.pathname

  let file = resolveFile(pathname)
  if (file) {
    send(res, 200, file)
    return
  }

  if (!extname(pathname)) {
    const asHtml = resolveFile(pathname + '.html')
    if (asHtml) {
      send(res, 200, asHtml)
      return
    }
  }

  const notFound = join(root, '404.html')
  if (existsSync(notFound)) {
    send(res, 404, notFound)
    return
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('404 Not Found')
})

server.on('error', (err) => {
  if (err.code === 'EACCES') {
    console.error(`ERROR: Port ${port} requires Administrator rights.`)
    console.error('       Try: scripts\\run_server.bat  (right-click -> Run as administrator)')
    console.error('       Or set a different port:  set PORT=8080 && scripts\\run_server.bat')
  } else {
    console.error('ERROR: Server failed to start -', err.message)
  }
  process.exit(1)
})

server.listen(port, host, () => {
  console.log('========================================')
  console.log(` DTL Website - serving on http://localhost:${port}`)
  console.log(` Root: ${root}`)
  console.log('========================================')
  console.log(' Keep this window open.')
  console.log(' Closing this window WILL stop the server.')
  console.log(' Press Ctrl+C to stop.')
  console.log('')
})

function shutdown() {
  console.log('\nServer stopped.')
  server.close(() => process.exit(0))
  setTimeout(() => process.exit(0), 1000).unref()
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
process.on('exit', () => {})
