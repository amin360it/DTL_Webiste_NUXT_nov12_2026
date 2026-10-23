import { readFileSync } from 'node:fs'

const s = readFileSync('app/data/dealers.ts', 'utf8')
const re = /\{ d: "([^"]+)", r: "([^"]+)", m: "([^"]+)" \}/g
let m
const d = new Map()
while ((m = re.exec(s))) {
  if (!d.has(m[1])) d.set(m[1], [])
  d.get(m[1]).push(m[2])
}
console.log('DISTRICTS:', d.size)
for (const [k, v] of [...d].sort()) {
  console.log('  ' + k + ' (' + v.length + ') : ' + v.join(' | '))
}
