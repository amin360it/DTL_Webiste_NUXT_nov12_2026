<script setup lang="ts">
import { routeContacts } from '~/data/routeContacts'

useSeo({
  title: 'Contact US',
  description: 'Contact DHAKATHAI ALCOMAXX PLC - corporate office in Baridhara, Dhaka and factory in Ashulia, Savar.'
})

const offices = [
  {
    key: 'corporate',
    label: 'Registered Head Office',
    name: 'Corporate Office',
    area: 'Baridhara, Dhaka',
    address: ['Elite Rowshan Villa, Apartment No A-2,', 'Plot-03, Road No 9/A, Block-J,', 'Baridhara, Dhaka.'],
    landline: '+88-02-9882666, +88-02-8818745',
    mobile: '+88-01708-814972',
    email: 'info@dhakathaibd.com',
    coords: '23.801066,90.424450'
  },
  {
    key: 'factory',
    label: 'Production Plant',
    name: 'Factory',
    area: 'Ashulia, Savar, Dhaka',
    address: ['Burirpara, East Norshinghpur,', 'Ashulia, Savar,', 'Dhaka.'],
    landline: '+88-02-9882666, +88-02-8818745',
    mobile: '+88-01708-814972',
    email: 'info@dhakathaibd.com',
    coords: '23.931238,90.311241'
  }
]

function mapSrc(coords: string, zoom: number) {
  return `https://maps.google.com/maps?q=${coords}&z=${zoom}&output=embed`
}

function mapDirections(coords: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${coords}`
}

function digits(phone: string) {
  return phone.replace(/[^0-9]/g, '')
}

function telHref(phone: string) {
  return 'tel:+88' + digits(phone)
}

function whatsappHref(phone: string) {
  const n = digits(phone).replace(/^0+/, '')
  return 'https://wa.me/880' + n
}

const divisionOrder = ['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh']

const query = ref('')
const division = ref('')
const district = ref('')
const area = ref('')

const divisions = computed(() => {
  const found = new Set(routeContacts.map((r) => r.division))
  return divisionOrder.filter((d) => found.has(d))
})

const districts = computed(() => {
  const set = new Set(
    routeContacts.filter((r) => !division.value || r.division === division.value).map((r) => r.district)
  )
  return [...set].sort((a, b) => a.localeCompare(b))
})

const areas = computed(() => {
  const set = new Set(
    routeContacts
      .filter((r) => (!division.value || r.division === division.value) && (!district.value || r.district === district.value))
      .map((r) => r.route)
  )
  return [...set].sort((a, b) => a.localeCompare(b))
})

watch(division, () => {
  if (district.value && !districts.value.includes(district.value)) district.value = ''
})
watch([division, district], () => {
  if (area.value && !areas.value.includes(area.value)) area.value = ''
})

const hasFilters = computed(() => Boolean(query.value || division.value || district.value || area.value))

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return routeContacts.filter((row) => {
    if (division.value && row.division !== division.value) return false
    if (district.value && row.district !== district.value) return false
    if (area.value && row.route !== area.value) return false
    if (!q) return true
    return `${row.route} ${row.district} ${row.division} ${row.phone}`.toLowerCase().includes(q)
  })
})

function resetFilters() {
  query.value = ''
  division.value = ''
  district.value = ''
  area.value = ''
}
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Find Us</div>
    <div class="container">
      <span class="kicker">Let's Talk</span>
      <h1>WE ARE THERE AT EVERY STAGE OF YOUR DREAM.</h1>
      <p>Reach our corporate office, factory or investor relations desk - we're ready to serve you.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Contact Directory</span>
        <h2>Where To Reach Us</h2>
        <p>Two locations handle everything: corporate enquiries at Baridhara and plant operations at Ashulia.</p>
      </div>

      <div class="reach-grid">
        <article v-for="office in offices" :key="office.key" class="reach-card">
          <div class="reach-band">
            <span class="reach-icon">
              <svg v-if="office.key === 'corporate'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/><path d="M9 10h.01M15 10h.01"/></svg>
              <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V9l6 5V9l6 5V4h4v16"/></svg>
            </span>
            <div class="reach-band-text">
              <span class="reach-eyebrow">{{ office.label }}</span>
              <h3>{{ office.name }}</h3>
            </div>
            <span class="reach-chip">{{ office.area }}</span>
          </div>

          <div class="reach-body">
            <p class="reach-company">DHAKATHAI ALCOMAXX PLC</p>
            <p class="reach-addr">
              <span v-for="(line, i) in office.address" :key="i">{{ line }}<br v-if="i < office.address.length - 1"></span>
            </p>

            <ul class="reach-rows">
              <li>
                <span class="reach-row-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
                <span class="reach-row-text">
                  <span class="reach-row-label">Landline</span>
                  <span>{{ office.landline }}</span>
                </span>
              </li>
              <li>
                <span class="reach-row-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg></span>
                <span class="reach-row-text">
                  <span class="reach-row-label">Mobile</span>
                  <a :href="telHref(office.mobile)">{{ office.mobile }}</a>
                </span>
              </li>
              <li>
                <span class="reach-row-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg></span>
                <span class="reach-row-text">
                  <span class="reach-row-label">E-mail</span>
                  <a :href="`mailto:${office.email}`">{{ office.email }}</a>
                </span>
              </li>
            </ul>

            <div class="reach-actions">
              <a class="reach-btn reach-btn--primary" :href="`tel:+88${digits(office.mobile)}`">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call now
              </a>
              <a class="reach-btn" :href="whatsappHref(office.mobile)" target="_blank" rel="noopener">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.6-5.9c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.9 1-.3.2-.6.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.6c-.1-.3 0-.4.1-.5l.4-.5.3-.5v-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1 2.6 11 11 0 0 0 4.3 3.8c1.6.6 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3z"/></svg>
                WhatsApp
              </a>
              <a class="reach-btn" :href="mapDirections(office.coords)" target="_blank" rel="noopener">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                Directions
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section map-section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">On The Map</span>
        <h2>Find Us</h2>
        <p>Corporate office in Baridhara and factory at Ashulia, Savar - pinned below for navigation.</p>
      </div>
      <div class="map-grid">
        <div v-for="office in offices" :key="office.key" class="map-card">
          <div class="map-head">
            <div>
              <h3>{{ office.name }}</h3>
              <span>{{ office.area }}</span>
            </div>
            <span class="map-pin">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ office.coords }}
            </span>
          </div>
          <iframe
            :title="`DHAKATHAI ALCOMAXX PLC ${office.name} location map`"
            :src="mapSrc(office.coords, office.key === 'corporate' ? 15 : 14)"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
          <div class="map-foot">
            <p class="map-addr">{{ office.address.join(' ') }}</p>
            <a class="map-cta" :href="mapDirections(office.coords)" target="_blank" rel="noopener">
              Get directions
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="investor-relations" class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">For Shareholders</span>
        <h2>Investor Resources</h2>
        <p>Governance disclosures, board information and the documents filed with the regulator.</p>
      </div>
      <div class="grid grid-4">
        <NuxtLink class="res-card" to="/investors-relation">
          <span class="res-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></span>
          <h3>Investor Relations</h3>
          <p>IPO documents, share distribution and financial highlights.</p>
          <span class="res-cta">Open<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </NuxtLink>
        <NuxtLink class="res-card" to="/investors-relation#governance">
          <span class="res-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 11h1m4 0h1M9 15h1m4 0h1"/></svg></span>
          <h3>Corporate Governance</h3>
          <p>Governance compliance, disclosures and company announcements.</p>
          <span class="res-cta">View<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </NuxtLink>
        <NuxtLink class="res-card" to="/board-of-directors">
          <span class="res-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg></span>
          <h3>Board of Directors</h3>
          <p>Profiles of the leadership team guiding the company.</p>
          <span class="res-cta">Meet the board<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </NuxtLink>
        <a class="res-card" href="/assets/pdfs/prospectus-of-dhakathai-alcomaxx-plc.pdf" target="_blank" rel="noopener">
          <span class="res-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg></span>
          <h3>IPO Prospectus</h3>
          <p>Draft prospectus submitted to the regulator (PDF).</p>
          <span class="res-cta">Download<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>
      </div>
    </div>
  </section>

  <section class="section cs-section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Nationwide Network</span>
        <h2>Customer Services Team</h2>
        <p>Route-wise mobile numbers across Bangladesh &mdash; filter by division, district or area and call the contact covering your zone directly.</p>
      </div>

      <div class="cs-filters">
        <label class="cs-search">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input v-model="query" type="search" placeholder="Search area, district or mobile number" aria-label="Search customer services team">
        </label>
        <label class="cs-field">
          <span>Division</span>
          <select v-model="division">
            <option value="">All divisions</option>
            <option v-for="d in divisions" :key="d" :value="d">{{ d }}</option>
          </select>
        </label>
        <label class="cs-field">
          <span>District</span>
          <select v-model="district">
            <option value="">All districts</option>
            <option v-for="d in districts" :key="d" :value="d">{{ d }}</option>
          </select>
        </label>
        <label class="cs-field">
          <span>Area</span>
          <select v-model="area">
            <option value="">All areas</option>
            <option v-for="a in areas" :key="a" :value="a">{{ a }}</option>
          </select>
        </label>
        <button v-if="hasFilters" type="button" class="cs-reset" @click="resetFilters">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          Clear
        </button>
      </div>

      <div class="cs-summary">
        <p>
          Showing <strong>{{ filtered.length }}</strong> of {{ routeContacts.length }} service contacts
        </p>
        <p v-if="hasFilters" class="cs-chips">
          <span v-if="division" class="cs-chip">{{ division }}</span>
          <span v-if="district" class="cs-chip">{{ district }}</span>
          <span v-if="area" class="cs-chip">{{ area }}</span>
          <span v-if="query" class="cs-chip">&ldquo;{{ query }}&rdquo;</span>
        </p>
      </div>

      <div class="table-wrap route-table">
        <table class="data route-contacts">
          <thead>
            <tr>
              <th>Area</th>
              <th>District</th>
              <th>Division</th>
              <th>Mobile Number</th>
              <th class="cs-actions-col">Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in filtered" :key="row.district + '-' + row.route + '-' + i">
              <td class="area">{{ row.route }}</td>
              <td class="district">{{ row.district }}</td>
              <td class="division">{{ row.division }}</td>
              <td class="phone"><a :href="telHref(row.phone)">{{ row.phone }}</a></td>
              <td class="cs-actions-col">
                <span class="cs-actions">
                  <a class="cs-act cs-act--call" :href="telHref(row.phone)" aria-label="Call" title="Call">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </a>
                  <a class="cs-act cs-act--wa" :href="whatsappHref(row.phone)" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20z"/></svg>
                  </a>
                </span>
              </td>
            </tr>
            <tr v-if="!filtered.length">
              <td colspan="5" class="cs-empty">
                No service contact matches these filters.
                <button type="button" class="cs-reset cs-reset--inline" @click="resetFilters">Clear filters</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Where To Reach Us ---------- */
.reach-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
}
.reach-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(11, 31, 58, 0.08);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}
.reach-card:hover {
  transform: translateY(-4px);   border-color: rgba(5, 166, 75, 0.35);
  box-shadow: var(--shadow-lg);
}
.reach-band {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 22px 26px;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 55%, var(--primary-light) 100%);
  color: var(--white);
}
.reach-icon {
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(245, 179, 107, 0.16);
  border: 1px solid rgba(245, 179, 107, 0.34);
  color: var(--accent-light);
}
.reach-band-text { flex: 1; min-width: 0; }
.reach-eyebrow {
  display: block;
  font-size: 0.64rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-light);
  font-weight: 700;
}
.reach-band h3 {
  margin: 2px 0 0;
  font-size: 1.22rem;
  color: var(--white);
  line-height: 1.2;
}
.reach-chip {
  flex-shrink: 0;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #dbe6f2;
}
.reach-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px 26px 26px;
}
.reach-company {
  font-family: var(--font-head);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-dark);
  margin-bottom: 8px;
}
.reach-addr {
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.7;
}
.reach-rows {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 18px 0 22px;
  padding: 18px 0 0;
  border-top: 1px dashed var(--light-2);
}
.reach-rows li { display: flex; align-items: flex-start; gap: 12px; }
.reach-row-ico {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: var(--light);
  color: var(--primary);
}
.reach-row-text { display: flex; flex-direction: column; min-width: 0; }
.reach-row-label {
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-light);
  font-weight: 700;
}
.reach-row-text span:not(.reach-row-label),
.reach-row-text a { font-size: 0.92rem; color: var(--text); font-weight: 600; word-break: break-word; }
.reach-row-text a:hover { color: var(--accent-dark); }
.reach-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
}
.reach-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid var(--light-2);
  background: var(--white);
  font-family: var(--font-head);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--primary);
  transition: var(--transition);
}
.reach-btn:hover {
  border-color: var(--accent);
  color: var(--accent-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}
.reach-btn--primary {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
  border-color: transparent;
  color: var(--white);   box-shadow: 0 6px 16px rgba(5, 166, 75, 0.28);
}
.reach-btn--primary:hover { color: var(--white); }

/* ---------- Find Us ---------- */
.map-section { background: var(--light); }
.map-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
}
.map-card {
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(11, 31, 58, 0.08);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}
.map-card:hover { box-shadow: var(--shadow-md); }
.map-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 22px;
  border-bottom: 1px solid rgba(11, 31, 58, 0.07);
}
.map-head h3 { margin: 0; font-size: 1.02rem; color: var(--primary); }
.map-head span { display: block; font-size: 0.82rem; color: var(--text-light); }
.map-head .map-pin {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 5px 10px;
  border-radius: 999px;   background: rgba(5, 166, 75, 0.1);
  color: var(--accent-dark);
  font-size: 0.7rem;
  font-weight: 700;
  white-space: nowrap;
}
.map-card iframe {
  display: block;
  width: 100%;
  height: 320px;
  border: 0;
}
.map-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 16px 22px;
}
.map-addr { color: var(--text-light); font-size: 0.85rem; line-height: 1.6; max-width: 60%; }
.map-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-head);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent-dark);
  white-space: nowrap;
}
.map-cta:hover { color: var(--accent); }
.map-cta svg { transition: var(--transition); }
.map-cta:hover svg { transform: translateX(3px); }

/* ---------- Investor Resources ---------- */
.res-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 28px 24px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(11, 31, 58, 0.07);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}
.res-card:hover {
  transform: translateY(-6px);   border-color: rgba(5, 166, 75, 0.3);
  box-shadow: var(--shadow-lg);
}
.res-icon {
  width: 52px;
  height: 52px;
  margin-bottom: 8px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-light));
  color: var(--accent-light);
}
.res-card h3 { font-size: 1.05rem; color: var(--primary); margin: 0; }
.res-card p { color: var(--text-light); font-size: 0.9rem; line-height: 1.6; margin: 0; flex: 1; }
.res-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  font-family: var(--font-head);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
}
.res-card:hover .res-cta { color: var(--accent-dark); }
.res-card:hover .res-cta svg { transform: translateX(3px); }
.res-cta svg { transition: var(--transition); }

/* ---------- Customer Services Team ---------- */
.cs-section { background: var(--light); }
.cs-filters {
  display: grid;
  grid-template-columns: minmax(240px, 1.6fr) repeat(3, minmax(150px, 1fr)) auto;
  gap: 12px;
  align-items: end;
  padding: 18px;
  border-radius: var(--radius);
  background: var(--white);
  border: 1px solid rgba(11, 31, 58, 0.07);
  box-shadow: var(--shadow-sm);
}
.cs-search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
  height: 46px;
  border-radius: 999px;
  border: 1px solid var(--light-2);
  background: var(--light);
  color: var(--text-light);
}
.cs-search input {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: 0.92rem;
  color: var(--text);
  outline: none;
}
.cs-search input::placeholder { color: var(--text-light); }
.cs-search:focus-within {
  border-color: var(--primary-light);
  background: var(--white);
  box-shadow: 0 0 0 3px rgba(15, 42, 67, 0.1);
  color: var(--primary);
}
.cs-field { display: flex; flex-direction: column; gap: 5px; }
.cs-field > span {
  font-size: 0.64rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-light);
  font-weight: 700;
  padding-left: 4px;
}
.cs-field select {
  height: 46px;
  padding: 0 34px 0 14px;
  border-radius: 12px;
  border: 1px solid var(--light-2);
  background: var(--white) url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230b1f3a' stroke-width='3' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 13px center;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  appearance: none;
  cursor: pointer;
  transition: var(--transition);
}
.cs-field select:focus {
  outline: none;
  border-color: var(--primary-light);
  box-shadow: 0 0 0 3px rgba(15, 42, 67, 0.1);
}
.cs-reset {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 46px;
  padding: 0 18px;
  border-radius: 999px;   border: 1px solid rgba(5, 166, 75, 0.35);
  background: rgba(5, 166, 75, 0.1);
  color: var(--accent-dark);
  font-family: var(--font-head);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--transition);
}
.cs-reset:hover { background: var(--accent); border-color: var(--accent); color: var(--white); }
.cs-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin: 16px 0 12px;
  font-size: 0.88rem;
  color: var(--text-light);
}
.cs-summary strong { color: var(--primary); }
.cs-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.cs-chip {
  display: inline-flex;
  padding: 3px 11px;
  border-radius: 999px;
  background: var(--white);
  border: 1px solid var(--light-2);
  color: var(--primary);
  font-size: 0.76rem;
  font-weight: 600;
}
.route-table { max-height: 720px; overflow-y: auto; }
.route-contacts { table-layout: fixed; min-width: 700px; }
.route-contacts th:first-child,
.route-contacts td.area { width: 30%; }
.route-contacts td { padding: 11px 16px; }
.route-contacts td.area { font-weight: 700; color: var(--primary); }
.route-contacts td.district { color: var(--text); }
.route-contacts td.division { color: var(--text-light); font-size: 0.86rem; }
.route-contacts td.phone { white-space: nowrap; }
.route-contacts td.phone a { color: var(--accent-dark); font-weight: 700; letter-spacing: 0.01em; }
.route-contacts td.phone a:hover { color: var(--accent); }
.route-contacts thead th { position: sticky; top: 0; z-index: 1; }
.cs-actions-col { width: 116px; }
.cs-actions { display: inline-flex; gap: 6px; }
.cs-act {
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  border: 1px solid var(--light-2);
  background: var(--light);
  color: var(--primary);
  transition: var(--transition);
}
.cs-act--call:hover { background: var(--primary); border-color: var(--primary); color: var(--white); }
.cs-act--wa:hover { background: #25d366; border-color: #25d366; color: var(--white); }
.cs-empty { text-align: center; padding: 46px 16px; color: var(--text-light); }
.cs-reset--inline {
  height: auto;
  margin-left: 8px;
  padding: 4px 12px;
  font-size: 0.7rem;
  vertical-align: middle;
}
#investor-relations { scroll-margin-top: 110px; }

@media (max-width: 1100px) {
  .cs-filters { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .cs-search { grid-column: 1 / -1; }
  .cs-reset { grid-column: 1 / -1; justify-self: start; }
}
@media (max-width: 900px) {
  .reach-grid,
  .map-grid { grid-template-columns: 1fr; }
  .reach-chip { display: none; }
  .map-addr { max-width: 100%; }
}
@media (max-width: 620px) {
  .reach-band { padding: 18px 20px; }
  .reach-body { padding: 20px; }
  .reach-actions .reach-btn { flex: 1 1 auto; justify-content: center; }
  .cs-filters { grid-template-columns: 1fr; }
  .route-contacts { min-width: 0; }
  .route-contacts thead { display: none; }
  .route-contacts tbody tr {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2px 12px;
    align-items: center;
    padding: 14px 16px;
    border-bottom: 1px solid var(--light-2);
  }
  .route-contacts td,
  .route-contacts td.area,
  .route-contacts td.district,
  .route-contacts td.division,
  .route-contacts td.phone { width: auto; padding: 0; border: 0; }
  .route-contacts td.area { font-size: 0.95rem; }
  .route-contacts td.district { font-size: 0.8rem; color: var(--text-light); }
  .route-contacts td.division { display: none; }
  .route-contacts td.phone { grid-column: 1; font-size: 0.88rem; }
  .route-contacts td.cs-actions-col { grid-column: 2; grid-row: 1 / span 3; width: auto; }
  .route-contacts td.cs-empty { display: block; grid-column: 1 / -1; text-align: center; }
  .route-table { max-height: 560px; }
}
</style>
