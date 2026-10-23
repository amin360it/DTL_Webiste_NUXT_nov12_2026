const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const src = process.argv[2] || 'C:/Users/user/AppData/Local/Temp/opencode/divisions/parsed.json'

const DIVISION_PRIMARY = {
  rangpur: 'Rangpur',
  rajshahi: 'Rajshahi',
  mymensingh: 'Mymensingh',
  sylhet: 'Sylhet',
  dhaka: 'Dhaka',
  khulna: 'Khulna',
  barisal: 'Barishal',
  chittagong: 'Chattogram'
}

const ALIASES = {
  'BARISAL': 'Barisal', 'B BARIA': 'Barisal', 'B-BARIA': 'Barisal', 'B.BARIA': 'Barisal',
  'BARIYA': 'Barisal',
  'CHAPAINAWABGANJ': 'Chapainawabganj', 'CHAPAI NAWABGANJ': 'Chapainawabganj',
  'CHATTAGONG': 'Chattogram', 'CHITTAGONG': 'Chattogram', 'CHATTAGRAM': 'Chattogram',
  'CHITTOGRAM': 'Chattogram', 'CHATTOGRAM': 'Chattogram', 'CTG': 'Chattogram',
  "COX'S BAZAR": "Cox's Bazar", "COX'BAZAR": "Cox's Bazar", 'COX BAZAR': "Cox's Bazar",
  'COXS BAZAR': "Cox's Bazar",
  'COMILLA': 'Cumilla', 'CUMILA': 'Cumilla',
  'GAZIPURA': 'Gazipur', 'JESSORE': 'Jashore', 'JHALAKATHI': 'Jhalokati',
  'KHAGRACHARI': 'Khagrachhari', 'KUSTIA': 'Kushtia',
  'LAXMIPUR': 'Lakshmipur', 'LAKSHMIPUR': 'Lakshmipur',
  'MANIKGANJ': 'Manikganj', 'MANIKGONJ': 'Manikganj', 'MAULVIBAZAR': 'Moulvibazar',
  'MUNSHIGANJ': 'Munshiganj', 'MUNSHIGONJ': 'Munshiganj', 'NARAYANGONJ': 'Narayanganj',
  'NORSINGDI': 'Narsingdi', 'NARSHINGDI': 'Narsingdi', 'BOGRA': 'Bogura',
  'KAMRANGIR CHAR': 'Kamrangirchar', 'JATTRABARI': 'Jattrabari',
  'DARUS SALAM': 'Darus Salam', 'UTTARA EAST': 'Uttara', 'UTTARA WEST': 'Uttara',
  'PALLABI EAST': 'Pallabi', 'MIRPUR MODEL': 'Mirpur', 'KERANIGANJ 2': 'Keraniganj',
  'SAVAR 2': 'Savar', 'PALTAN 2': 'Paltan', 'KERANIGONJ': 'Keraniganj',
  'CHATKHIL': 'Chatkhil', 'NOBABGANJ': 'Nawabganj', 'NOBINAGAR': 'Nobinagar',
  'BOKUITALA': 'Bokutia', 'BOKUTIA': 'Bokutia', 'BISSHOROAD': 'Mirpur',
  'BISHWOROAD': 'Mirpur', 'HAJIGONJ': 'Chandpur', 'HAJIGANJ': 'Haziganj',
  'KHILGAON CHOWRASTA': 'Khilgaon', 'SOUTH TENGRA DEMRA': 'Demra',
  'SOUTH BANASREE': 'Banasree', 'SOUTH BANASHREE': 'Banasree', 'MIDDLE BADDA': 'Badda',
  'UTTAR BADDA': 'Badda', 'UPTOWN BADDA': 'Badda', 'DHAKA CANTONMENT': 'Cantonment',
  'DHAKA UDDAN': 'Mohammadpur', 'SOUTH KUTUBKHALI': 'Jattrabari',
  'SOUTH JATRABARI': 'Jattrabari', 'WEST JATRABARI': 'Jattrabari', 'JURAIN EAST': 'Jurain',
  'ASHRAFABAD': 'Kamrangirchar', 'SOUTH KERANIGANJ': 'Keraniganj', 'SOUTH MATUAIL': 'Matuail',
  'MIRPUR MAZAR ROAD': 'Mirpur', 'MIRPUR 1': 'Mirpur', 'MIRPUR 10': 'Mirpur',
  'MIRPUR 11': 'Mirpur', 'MIRPUR 12': 'Mirpur', 'GULSHAN 2': 'Gulshan',
  'GULSHAN 1': 'Gulshan', 'GAZI KHALI': 'Azi Khali', 'SHONIR AKHRA': 'Shonir Akhra',
  'FAKIRAPOOL': 'Fakeerpool', 'FAZIRPOOL': 'Fakeerpool', 'TEJGAON': 'Tejgaon',
  'FIRMGATE': 'Firmgate', 'NAWABPUR': 'Nawabpur', 'HATIRPOOL': 'Hatirpool',
  'BIJOYNAGAR': 'Bijoynagar', 'UTTARKHAN': 'Uttarkhan', 'AMTOLI': 'Amtoli',
  'MOHAKHALI': 'Mohakhali', 'GABTOLI': 'Gabtoli', 'MALIBAG': 'Malibag',
  'MATUAIL': 'Matuail', 'BANASHREE': 'Banasree', 'KAKOLI': 'Banani',
  'HASNABAD': 'Keraniganj', 'KHOLAMORA': 'Keraniganj', 'JOYNAGAR': 'Keraniganj',
  'ATIBAZAR': 'Keraniganj', 'TIKKAPARA': 'Mohammadpur', 'MERADIA': 'Khilgaon',
  'TRIMOHONI': 'Khilgaon', 'KONAPARA': 'Demra', 'SHAKH PARA': 'Jattrabari',
  'BALUGHAT': 'Cantonment', 'NEW AIRPORT ROAD': 'Banani', 'CHAND UDDAN': 'Mohammadpur',
  'BERIBADH': 'Mohammadpur', 'NAABINAGAR HOUSING': 'Mohammadpur',
  'NAABINAGAR': 'Mohammadpur', 'MOHAMMADPUR': 'Mohammadpur',
  'DAKHIN KHAN': 'Dakhin Khan', 'BIR UTTAM ZIAUR RAHMAN SARAK': 'Banani',
  'UTTAR POTENGA': 'Patenga', 'AGRABAD': 'Agrabad', 'AGABAD': 'Agrabad',
  'HAZIPIPARA': 'Chattogram', 'CHANDGOAN': 'Chandgaon', 'FATIKCHARI': 'Fatikchhari',
  'HALISAHAR': 'Halishahar', 'SOUTH HALISAHAR': 'Halishahar',
  'AK KHAN GATE AKBARSHAH': 'Akbar Shah', 'JAKIR HUSSAIN ROAD': 'Akbar Shah',
  'KASHIPUR': 'Barishal', 'LALMOHON': 'Bhola', 'BODDHO PARA': 'Barishal',
  'BODDHOPARA': 'Barishal', 'BROWN COMPOUND ROAD': 'Barishal', 'DULARHAT': 'Bhola',
  'CHARFESSION': 'Bhola', 'GOALCHAMOT': 'Faridpur', 'MALIGRAM BAZAR': 'Faridpur',
  'BETGRAM': 'Gopalganj', 'MUKSUDPUR': 'Gopalganj', 'JELA PARISAD MARKET': 'Gopalganj',
  'SHADHINOTA CHATTAR': 'Madaripur', 'DAMUDYA': 'Shariatpur', 'BAROYARHAT': 'Chattogram',
  'MIRSARAI': 'Chattogram', 'FATIKCHHARI': 'Fatikchhari', 'BEGUMGONJ': 'Begumganj',
  'SENBAG': 'Senbagh', 'RAIPURA': 'Raipur', 'RAIPUR': 'Raipur', 'MONOHARDI': 'Monohardi',
  'AKHALIA': 'Akhalia', 'SHAISTAGANJ': 'Sayestaganj', 'MADHABPUR': 'Madhabpur',
  'KULAURA': 'Kulaura', 'SREEMANGAL': 'Sreemangal', 'BARLEKHA': 'Barlekha',
  'SHIBGANJ': 'Shibganj', 'ISHWARDI': 'Ishwardi', 'SANTHIA': 'Santhia',
  'KANAI KHALI': 'Natore', 'KANAIGHAT': 'Manikganj', 'GOLAPGANJ': 'Golapganj',
  'GOPALGANJ SADAR': 'Gopalganj', 'SIRAJGANJ SADAR': 'Sirajganj',
  'NAGESHWARI': 'Nageshwari', 'ROWMARI': 'Raomari', 'ULIPUR': 'Ulipur',
  'HAKIMPUR': 'Hakimpur', 'BIRAMPUR': 'Birampur', 'SAIDPUR': 'Saidpur',
  'SHIBCHOR': 'Shibchar', 'SHIBCHAR': 'Shibchar', 'MIRZAPUR': 'Mirzapur',
  'GHATAIL': 'Ghatail', 'MELANDHA': 'Melandaha', 'ISLAMPUR': 'Islampur',
  'FULBARIA': 'Fulbaria', 'GAFARGAON': 'Gafargaon', 'BHALUKA': 'Bhaluka',
  'PHULPUR': 'Phulpur', 'KURPAR': 'Netrokona', 'PAKUNDIA': 'Pakundia',
  'BAJITPUR': 'Kishoreganj', 'RATHKHOLA': 'Kishoreganj', 'PANIRTANKY': 'Kishoreganj',
  'KATIADI': 'Katiadi', 'BHAIRAB': 'Bhairab', 'BOKAINAGAR': 'Bokainagar',
  'KALIAKOIR': 'Kaliakair', 'KALIAKAIR': 'Kaliakair', 'MAWNA CHOURASTA': 'Mawna Chourasta',
  'SREEPUR': 'Sreepur', 'SREENAGAR': 'Sreenagar', 'GOJARIA': 'Gazaria',
  'ARAIHAZAR': 'Araihazar', 'CHOWDHURY BARI': 'Gazipur',
  'CHANDANA CHOWRASTA': 'Gazipur', 'DAUDKANDI': 'Daudkandi', 'GOURIPUR BAZAR': 'Daudkandi',
  'BRAHMANPARA': 'Brahmanpara', 'CHANDINA': 'Chandina', 'CHAUDDAGRAM': 'Chauddagram',
  'CHOUDDAGRAM': 'Chauddagram', 'LALMAI': 'Lalmai', 'MURADNAGAR': 'Muradnagar',
  'KOTBARI': 'Kotbari Road', 'KHANBARI': 'Chandina', 'SENA BAZAR': 'Noakhali',
  'MAIJDEE': 'Noakhali', 'SONAIMURI': 'Noakhali', 'KOCHUA ROAD': 'Chandpur',
  'RAJGONG': 'Shariatpur', 'DASHMINA': 'Dashmina', 'BAUPHAL': 'Bauphal',
  'KALAPARA': 'Kalapara', 'BARGUNA SADAR': 'Barguna', 'CUMILLA ADARSHA SADAR': 'Cumilla',
  'CHAPAINABAWABGANJ': 'Chapainawabganj', 'SHAH MOKHDUM': 'Shah Mokhdum Thana',
  'BOALIA': 'Boalia Thana', 'RAJPARA': 'Rajpara Thana', 'KOTBARI ROAD': 'Kotbari Road',
  'SUNAMGONJ ROAD': 'Sunamganj', 'BANCHARAMPUR': 'Bancharampur', 'SREERAMPUR': 'Sreerampur',
  'BHARABAD': 'Sreerampur', 'UTTARA MODEL TOWN': 'Uttara',
  'NOBABGANJ BAZAR': 'Nawabganj', 'SHAHPUR': 'Tangail', 'DHAKA ROAD TANGAIL': 'Tangail',
  'KONABARI': 'Gazipur', 'TONGI': 'Gazipur', 'SHATIS': 'Gazipur',
  'BASHUNDHARA': 'Bashundhara', 'PULABI': 'Pallabi'
}

const EXTRA_AREAS = [
  'Azi Khali', 'Amtoli', 'Banasree', 'Banashree', 'Bijoynagar', 'Bishworoad',
  'Fakeerpool', 'Firmgate', 'Gabtoli', 'Hatirpool', 'Jurain', 'Khilkhet', 'Malibag',
  'Matuail', 'Mirpur', 'Mohakhali', 'Mohammadpur', 'Nawabpur', 'Nawabganj',
  'Shonir Akhra', 'Tejgaon', 'Uttarkhan', 'Vatara', 'Kamrangirchar', 'Keraniganj', 'Savar',
  'Demra', 'Badda', 'Banani', 'Cantonment', 'Gulshan', 'Turag', 'Dohar', 'Sayedabad',
  'Khilgaon', 'Pallabi', 'Paltan', 'Uttara', 'New Market', 'Dhanmondi', 'Lalbagh', 'Wari',
  'Bangshal', 'Kodomtali', 'Dakhin Khan', 'Darus Salam', 'Kafrul', 'Ramna', 'Shantinagar',
  'Hazaribagh', 'Kalabagan', 'Agrabad', 'Panchlaish', 'Golapganj', 'Shyamoli', 'Adabor',
  'Mouchak', 'Konabari', 'Dholaikhal', 'Nilpara', 'Green Road', 'Bashundhara',
  'Mirzapur', 'Ghatail', 'Melandaha', 'Islampur', 'Fulbaria', 'Gafargaon', 'Bhaluka',
  'Phulpur', 'Netrokona', 'Pakundia', 'Kishoreganj', 'Bhairab', 'Katiadi', 'Bokainagar',
  'Kaliakair', 'Mawna Chourasta', 'Sreepur', 'Sreenagar', 'Gazaria', 'Gojaria',
  'Araihazar', 'Bandar', 'Daudkandi', 'Brahmanpara', 'Chandina', 'Chauddagram', 'Lalmai',
  'Muradnagar', 'Kotbari Road', 'Khanbari', 'Begumganj', 'Senbagh', 'Maijdee', 'Sonaimuri',
  'Haziganj', 'Chatkhil', 'Kalaikhuri', 'Bokutia', 'Doulatpur', 'Daulatpur', 'Rupsha',
  'Batiaghata', 'Digholia', 'Lohagora', 'Dolaudire', 'Nijamduali', 'Gollamari',
  'Sreerampur', 'Sonadanga', 'Moheshpur', 'Arappur', 'Khaliajuri', 'Shahjibazar',
  'Bishwanath', 'Kanaighat', 'Beanibazar', 'Barlekha', 'Kalmakanda', 'Chhatak',
  'Durgapur', 'Tahirpur', 'Dowlamukhi', 'Phulbari', 'Aitmar', 'Akhalia', 'Sayestaganj',
  'Madhabpur', 'Kulaura', 'Sreemangal', 'Akhaura', 'Bancharampur', 'Kasba',
  'Fatikchhari', 'Mirsharai', 'Pahartali', 'Chandgaon', 'Bakolia', 'Bandarban',
  'Dohazari', 'Chandanaish', 'Rangunia', 'Ramu', 'Bauphal', 'Dashmina', 'Kalapara',
  'Patuakhali', 'Kashipur', 'Lalmohan', 'Dularhat', 'Charfession', 'Goalchamot',
  'Maligram', 'Damudya', 'Betgram', 'Muksudpur', 'Shibganj', 'Ishwardi', 'Santhia',
  'Boro Horispur', 'Ghorashal', 'Ahmadbari', 'Nageshwari', 'Raomari', 'Rowmari', 'Ulipur',
  'Hakimpur', 'Birampur', 'Saidpur', 'Gaibandha', 'Palashbari', 'Lalmonirhat',
  'Joypurhat', 'Natore', 'Naogaon', 'Thakurgaon', 'Panchagarh', 'Nilphamari', 'Dinajpur',
  'Kurigram', 'Rangpur', 'Bogura', 'Chapainawabganj', 'Pabna', 'Sirajganj', 'Rajshahi',
  'Mymensingh', 'Jamalpur', 'Sherpur', 'Tangail', 'Gazipur', 'Faridpur', 'Gopalganj',
  'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur',
  'Chandpur', 'Cumilla', 'Feni', 'Chhagalnaiya', 'Khagrachhari', 'Rangamati', 'Noakhali',
  "Cox's Bazar", 'Chattogram', 'Brahmanbaria', 'Barisal', 'Bagerhat', 'Barishal', 'Bhola',
  'Barguna', 'Jhalokati', 'Pirojpur', 'Chuadanga', 'Jashore', 'Jhenaidah', 'Khulna',
  'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira', 'Habiganj', 'Moulvibazar',
  'Sunamganj', 'Sylhet', 'Jhalakathi', 'Subanighat', 'Upashahar', 'Osmani Nagar',
  'Ambarkhana', 'Zindabazar', 'Shahjalal', 'Patenga', 'Akbar Shah', 'Halishahar'
]

const STRIP_WORDS = ['Sadar', 'Thana', 'Upazila', 'Adarsha', 'Model', 'Road']

function normalizeKey(s) {
  return s.toUpperCase().replace(/[^A-Z0-9&' ]+/g, ' ').replace(/\s+/g, ' ').trim()
}

function cleanLabel(region) {
  let label = region
  let prev
  do {
    prev = label
    for (const w of STRIP_WORDS) label = label.replace(new RegExp('\\s+' + w + '\\b', 'gi'), '')
    label = label.replace(/\s+\d+$/, '').trim()
  } while (label !== prev && label.length > 2)
  return label
}

function readTaxonomy() {
  const file = path.join(root, 'app', 'data', 'dealers.ts')
  const text = fs.readFileSync(file, 'utf8')
  const re = /\{ d: "([^"]+)", r: "([^"]+)", m: "([^"]+)" \}/g
  let m
  const districts = new Set()
  const regions = new Map()
  while ((m = re.exec(text))) {
    districts.add(m[1])
    if (!regions.has(m[1])) regions.set(m[1], new Set())
    regions.get(m[1]).add(cleanLabel(m[2]))
  }
  return { districts: [...districts], regions }
}

function buildDictionary() {
  const tax = readTaxonomy()
  const map = new Map()
  const add = (pattern, label, overwrite) => {
    const key = normalizeKey(pattern)
    if (!key || key.length < 3) return
    if (!map.has(key) || overwrite) map.set(key, label)
  }
  for (const d of tax.districts) add(d, d, false)
  for (const regions of tax.regions.values()) for (const r of regions) add(r, r, false)
  for (const e of EXTRA_AREAS) add(e, e, false)
  for (const [pattern, label] of Object.entries(ALIASES)) add(pattern, label, true)
  return { map, tax }
}

function normalizeAddress(address) {
  let t = String(address || '')
  t = t.replace(/contact\s*(number)?\s*[:\-]?/gi, ' | ')
  t = t.split('|')[0]
  t = t.replace(/-\s*\d{4}\b/g, ' ')
  t = t.replace(/\s\d{4}\s*$/, ' ')
  t = t.replace(/\b\d{9,}\b/g, ' ')
  t = t.toUpperCase()
  t = t.replace(/[^A-Z0-9&' ]+/g, ' ')
  t = t.replace(/\s+/g, ' ').trim()
  return ' ' + t + ' '
}

function findHits(text, map) {
  const hits = []
  for (const [pattern, label] of map) {
    let from = 0
    for (;;) {
      const idx = text.indexOf(' ' + pattern + ' ', from)
      if (idx < 0) break
      hits.push({ start: idx, label, pattern })
      from = idx + 1
    }
  }
  hits.sort((a, b) => (a.start - b.start) || (a.pattern.length - b.pattern.length))
  return hits
}

function extractArea(address, dict, division) {
  const primary = DIVISION_PRIMARY[division] || ''
  const text = normalizeAddress(address)
  const hits = findHits(text, dict.map)
  if (!hits.length) return primary
  const last = hits[hits.length - 1]
  if (last.label !== primary) return last.label
  const regions = dict.tax.regions.get(primary) || new Set()
  for (let i = hits.length - 2; i >= 0; i--) {
    const h = hits[i]
    if (h.label !== primary && regions.has(h.label)) return h.label
  }
  return primary
}

const data = JSON.parse(fs.readFileSync(src, 'utf8'))
const dict = buildDictionary()
const labels = {
  barisal: 'Barisal', chittagong: 'Chittagong', dhaka: 'Dhaka', khulna: 'Khulna',
  mymensingh: 'Mymensingh', rajshahi: 'Rajshahi', rangpur: 'Rangpur', sylhet: 'Sylhet'
}
const keys = ['rangpur', 'rajshahi', 'mymensingh', 'sylhet', 'dhaka', 'khulna', 'barisal', 'chittagong']
const esc = s => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, ' ').trim()

let out = 'export type DivisionDealer = { customer: string; person: string; address: string; phone: string; area: string }\n'
out += 'export type DivisionData = { label: string; dealers: DivisionDealer[] }\n\n'
out += 'export const divisionDealers: Record<string, DivisionData> = {\n'

let total = 0
for (const k of keys) {
  const list = data[k] || []
  out += `  "${k}": {\n    label: "${labels[k]}",\n    dealers: [\n`
  for (const d of list) {
    const area = extractArea(d.address, dict, k)
    out += `      { customer: "${esc(d.customer)}", person: "${esc(d.person)}", address: "${esc(d.address)}", phone: "${esc(d.phone)}", area: "${esc(area)}" },\n`
  }
  out += '    ]\n  },\n'
  total += list.length
}
out += '}\n'

const dest = path.join(root, 'app', 'data', 'divisionDealers.ts')
fs.writeFileSync(dest, out, 'utf8')
console.log('wrote', dest, total, 'dealers with areas')
