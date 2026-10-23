import { divisionDealers } from '../app/data/divisionDealers.ts'

function parts(address) {
  let clean = address.replace(/Contact\s*(Number)?\s*[:\-]?/gi, '|').split('|')[0]
  const segs = clean.split('.').map(s => s.trim()).filter(Boolean)
  const seg = segs.length ? segs[segs.length - 1] : clean
  return seg.split(',').map(p => p.trim()).filter(Boolean)
}

for (const [key, div] of Object.entries(divisionDealers)) {
  console.log(`\n===== ${key} =====`)
  for (const d of div.dealers) {
    const p = parts(d.address)
    const last = p[p.length - 1] || ''
    const prev = p.length > 1 ? p[p.length - 2] : ''
    console.log(`LAST=${last}   PREV=${prev}   :: ${d.address}`)
  }
}
