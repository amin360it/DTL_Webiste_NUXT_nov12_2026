import { divisionDealers } from '../app/data/divisionDealers.ts'

const STOP = new Set(['ROAD', 'MOR', 'BAZAR', 'MATH', 'CHAP', 'ROAD', 'BRIDGE', 'MARKET', 'SUPER', 'MARKET', 'HOSPITAL', 'SCHOOL', 'COLLEGE', 'COMPLEX', 'TOWER', 'MALL', 'PLAZA', 'HALL', 'MOSQUE', 'MASJID', 'CHOWRASTA', 'CHOURASTA', 'GATE', 'NOBINAGAR', 'ROAD'])

const all = new Set()
for (const div of Object.values(divisionDealers)) {
  for (const d of div.dealers) {
    const t = d.address
      .replace(/Contact\s*(Number)?\s*[:\-]?/gi, ' ')
      .replace(/[0-9]{6,}/g, ' ')
      .replace(/[0-9]{4}$/g, ' ')
      .toUpperCase()
    const words = t.split(/[^A-Z&' ]+/).filter(Boolean)
    for (let n = 1; n <= 3; n++) {
      for (let i = 0; i + n <= words.length; i++) {
        const phrase = words.slice(i, i + n).join(' ').replace(/^[-&'\s]+|[-&'\s]+$/g, '')
        if (!phrase) continue
        const lastWord = words[i + n - 1]
        if (STOP.has(lastWord) && n > 1) continue
        all.add(phrase)
      }
    }
  }
}

const list = [...all].sort()
console.log('TOTAL CANDIDATE PHRASES:', list.length)
console.log(list.join('\n'))
