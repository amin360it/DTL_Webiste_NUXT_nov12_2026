import { readFileSync } from 'node:fs'

const p = JSON.parse(readFileSync('C:/Users/user/AppData/Local/Temp/opencode/divisions/parsed.json', 'utf8'))
console.log('divisions:', Object.keys(p).join(', '))
for (const [k, v] of Object.entries(p)) {
  console.log(k, '->', v.length, 'dealers; keys:', Object.keys(v[0] || {}).join(','))
  console.log('   sample:', JSON.stringify(v[0]))
}
