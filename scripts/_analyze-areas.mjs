import { readFileSync } from 'node:fs'
import { divisionDealers } from '../app/data/divisionDealers.ts'

function extractDistrict(address) {
  let clean = address.split(/[.](?=Contact|contact)|Contact|contact/i)[0]
  const parts = clean.split(',').map(p => p.trim()).filter(p => p.length > 0)
  if (parts.length === 0) return ''
  let last = parts[parts.length - 1]
  last = last.replace(/\.$/, '').trim()
  return last
}

for (const [key, div] of Object.entries(divisionDealers)) {
  const counts = new Map()
  for (const d of div.dealers) {
    const a = extractDistrict(d.address)
    counts.set(a, (counts.get(a) || 0) + 1)
  }
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1])
  console.log(`\n### ${key} (${div.label}) - ${div.dealers.length} dealers, ${sorted.length} areas`)
  console.log(sorted.map(([a, n]) => `   ${n}x ${a}`).join('\n'))
}
