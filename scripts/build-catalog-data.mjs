import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const csvPath = path.join(root, 'Data', 'MASTER_WEIGHT_CHART_2026.csv')
const catalogPath = path.join(root, 'app', 'data', 'catalog.ts')

function parseCsv(text) {
  const rows = []
  let field = ''
  let row = []
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++ } else { inQuotes = false }
      } else field += c
    } else {
      if (c === '"') inQuotes = true
      else if (c === ',') { row.push(field); field = '' }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = '' }
      else if (c === '\r') { /* skip */ }
      else field += c
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row) }
  return rows
}

const raw = fs.readFileSync(csvPath)
const text = new TextDecoder('latin1').decode(raw)
const all = parseCsv(text).filter(r => r.some(f => f.trim() !== ''))
const header = all[0].map(h => h.trim())
const col = name => header.indexOf(name)

const iCat = col('Category')
const iSub = col('Sub Category')
const iDie = col('Die Name')
const iName = col('Profile Name')
const iBrand = col('Brand Name')
const iLen = col('Length')
for (const [label, idx] of [['Category', iCat], ['Sub Category', iSub], ['Die Name', iDie], ['Profile Name', iName], ['Brand Name', iBrand], ['Length', iLen]]) {
  if (idx === -1) throw new Error('Missing column: ' + label)
}

const clean = s => (s || '').replace(/\s+/g, ' ').trim()

const oldTs = fs.readFileSync(catalogPath, 'utf8')
const imgByDie = {}
const re = /\{[^{}]*?"die":\s*"([^"]+)"[^{}]*?"img":\s*(?:"([^"]+)"|null)[^{}]*?\}/g
let m
while ((m = re.exec(oldTs)) !== null) {
  if (m[2]) imgByDie[m[1]] = m[2]
}

const seenIds = new Set()
function makeId(die, len) {
  const base = die.toLowerCase().replace(/\./g, '-') + '@' + clean(len).toLowerCase().replace(/\./g, '-')
  let id = base
  let n = 2
  while (seenIds.has(id)) { id = base + '-' + n++ }
  seenIds.add(id)
  return id
}

const products = []
const catOrder = []
const catIndex = new Map()

for (let r = 1; r < all.length; r++) {
  const row = all[r]
  const die = clean(row[iDie])
  if (!die) continue
  const name = clean(row[iName])
  const brand = clean(row[iBrand])
  const cat = clean(row[iCat]) || brand || 'Others'
  const sub = clean(row[iSub]) || cat
  const img = imgByDie[die] || null
  products.push({ id: makeId(die, row[iLen]), die, name, cat, sub, img })

  if (!catIndex.has(cat)) {
    catIndex.set(cat, { name: cat, count: 0, subs: [], subIndex: new Map() })
    catOrder.push(cat)
  }
  const c = catIndex.get(cat)
  c.count++
  if (!c.subIndex.has(sub)) {
    c.subIndex.set(sub, { id: sub, name: sub, count: 0 })
    c.subs.push(c.subIndex.get(sub))
  }
  c.subIndex.get(sub).count++
}

const categories = catOrder.map(name => {
  const c = catIndex.get(name)
  return { id: c.name, name: c.name, count: c.count, subs: c.subs }
})

const esc = s => s.replace(/[^\x20-\x7E]/g, ch => '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0'))
const q = s => '"' + esc(String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')) + '"'

const lines = []
lines.push('export type CatalogProduct = { id: string; die: string; name: string; cat: string; sub: string; img: string | null }')
lines.push('export type CatalogSubcategory = { id: string; name: string; count: number }')
lines.push('export type CatalogCategory = { id: string; name: string; count: number; subs: CatalogSubcategory[] }')
lines.push('export type CatalogData = { generated: string; products: CatalogProduct[]; categories: CatalogCategory[] }')
lines.push('')
lines.push('export const catalog: CatalogData = {')
lines.push('  generated: ' + q('2026-10-10') + ',')
lines.push('  products: [')
for (const p of products) {
  lines.push(`    { id: ${q(p.id)}, die: ${q(p.die)}, name: ${q(p.name)}, cat: ${q(p.cat)}, sub: ${q(p.sub)}, img: ${p.img ? q(p.img) : 'null'} },`)
}
lines.push('  ],')
lines.push('  categories: [')
for (const c of categories) {
  lines.push(`    { id: ${q(c.id)}, name: ${q(c.name)}, count: ${c.count}, subs: [`)
  for (const s of c.subs) lines.push(`      { id: ${q(s.id)}, name: ${q(s.name)}, count: ${s.count} },`)
  lines.push('    ] },')
}
lines.push('  ]')
lines.push('}')
lines.push('')

fs.writeFileSync(catalogPath, lines.join('\n'), 'utf8')

const imgCount = products.filter(p => p.img).length
console.log('Wrote ' + catalogPath)
console.log('products: ' + products.length)
console.log('categories: ' + categories.length)
console.log('products with image: ' + imgCount)
console.log('die->img map entries: ' + Object.keys(imgByDie).length)
console.log('sample cats: ' + categories.slice(0, 12).map(c => c.name + '(' + c.count + ')').join(', '))
