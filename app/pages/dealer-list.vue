<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { divisionDealers } from '~/data/divisionDealers'
import BangladeshMap from '~/components/BangladeshMap.vue'

useSeo({
  title: "Sales Network & Dealer's List",
  description: "Authorized dealers across Bangladesh - complete dealer's list organized by district with contact numbers."
})

const activeDivision = ref('')
const activeArea = ref('')
const searchQuery = ref('')

const divisionLabels: Record<string, string> = {
  rangpur: 'Rangpur',
  rajshahi: 'Rajshahi',
  mymensingh: 'Mymensingh',
  sylhet: 'Sylhet',
  dhaka: 'Dhaka',
  khulna: 'Khulna',
  barisal: 'Barisal',
  chittagong: 'Chittagong'
}

const allDealers = computed(() => Object.values(divisionDealers).flatMap(d => d.dealers))
const hasDivision = computed(() => !!activeDivision.value)

const divisionList = computed(() =>
  Object.keys(divisionDealers).map(key => ({
    key,
    label: divisionLabels[key] || divisionDealers[key].label,
    count: divisionDealers[key].dealers.length
  }))
)

const divisionDealerList = computed(() =>
  activeDivision.value ? divisionDealers[activeDivision.value]?.dealers || [] : []
)

const areaList = computed(() => {
  const counts = new Map<string, number>()
  for (const d of divisionDealerList.value) {
    const area = d.area || 'Others'
    counts.set(area, (counts.get(area) || 0) + 1)
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([area, count]) => ({ area, count }))
})

const filteredDealers = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  const scope = hasDivision.value ? divisionDealerList.value : allDealers.value
  return scope.filter(d => {
    if (activeArea.value && (d.area || 'Others') !== activeArea.value) return false
    if (q && !(d.customer + ' ' + d.person + ' ' + d.address + ' ' + d.phone).toLowerCase().includes(q)) return false
    return true
  })
})

const totalInScope = computed(() => divisionDealerList.value.length)

function selectDivision(key: string) {
  activeDivision.value = key
  activeArea.value = ''
  searchQuery.value = ''
}

function selectArea(area: string) {
  activeArea.value = activeArea.value === area ? '' : area
}

function clearDivision() {
  activeDivision.value = ''
  activeArea.value = ''
  searchQuery.value = ''
}

function clearArea() {
  activeArea.value = ''
}

function digits(v: string) {
  return v.replace(/\D/g, '')
}
function telLink(v: string) {
  const d = digits(v)
  return d.length >= 10 ? 'tel:' + d : ''
}
function waLink(v: string) {
  const d = digits(v)
  if (d.length < 10) return ''
  if (d.startsWith('880')) return 'https://wa.me/' + d
  if (d.startsWith('0')) return 'https://wa.me/880' + d.slice(1)
  return 'https://wa.me/880' + d
}

function onMapMessage(e: MessageEvent) {
  const d = e.data as any
  if (d && d.type === 'dtl-division') selectDivision(d.key)
}

onMounted(() => {
  window.addEventListener('message', onMapMessage)
})
onBeforeUnmount(() => {
  window.removeEventListener('message', onMapMessage)
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Dealer's List</div>
    <div class="container">
      <span class="kicker">Sales Network</span>
      <h1>Sales Network &amp; Dealer's List</h1>
      <p>Our well integrated dealership network is strategically located throughout Bangladesh. Choose a division to find your nearest dealer.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">

      <div class="map-section" style="margin-bottom: 32px;">
        <p style="text-align:center;font-size:0.9rem;color:var(--text-light);margin:0 0 14px;">Click a division on the map to see its agents, dealers &amp; contacts.</p>
        <BangladeshMap @division-click="selectDivision" />
      </div>

      <div class="filter-block">
        <div class="filter-label">Division</div>
        <div class="pill-row" id="divisionFilters">
          <button class="pill" :class="{ active: !hasDivision }" @click="clearDivision">
            All Divisions <span class="pill-count">{{ allDealers.length }}</span>
          </button>
          <button
            v-for="d in divisionList"
            :key="d.key"
            class="pill"
            :class="{ active: activeDivision === d.key }"
            @click="selectDivision(d.key)"
          >{{ d.label }} <span class="pill-count">{{ d.count }}</span></button>
        </div>
      </div>

      <div v-if="hasDivision" class="filter-block">
        <div class="filter-label">Area</div>
        <div class="pill-row" id="areaFilters">
          <button class="pill" :class="{ active: !activeArea }" @click="clearArea">
            All Areas <span class="pill-count">{{ totalInScope }}</span>
          </button>
          <button
            v-for="a in areaList"
            :key="a.area"
            class="pill"
            :class="{ active: activeArea === a.area }"
            @click="selectArea(a.area)"
          >{{ a.area }} <span class="pill-count">{{ a.count }}</span></button>
        </div>
      </div>

      <div class="dealer-search-row">
        <label class="dealer-search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" id="dealerSearch" v-model="searchQuery" placeholder="Search by customer, person, address or phone..." />
        </label>
      </div>

      <div class="dealer-summary" id="dealerCount">
        <template v-if="hasDivision">
          <span>Showing <b>{{ filteredDealers.length }}</b> of <b>{{ totalInScope }}</b> contacts in <b>{{ divisionLabels[activeDivision] }}</b></span>
          <span v-if="activeArea" class="chip">{{ activeArea }} <button aria-label="Clear area" @click="clearArea">&times;</button></span>
        </template>
        <template v-else>
          <span>All <b>{{ allDealers.length }}</b> contacts across <b>8</b> divisions</span>
          <span class="chip">Select a division to filter by area</span>
        </template>
      </div>

      <div class="table-wrap">
        <table class="dealer-table" id="dealerTable">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Contact Person</th>
              <th>Address</th>
              <th class="num">Mobile Number</th>
              <th style="width:150px;">Action</th>
            </tr>
          </thead>
          <tbody id="dealerBody">
            <tr v-for="(d, i) in filteredDealers" :key="i" class="dealer-row">
              <td>
                <span class="area-tag">{{ d.area || 'Others' }}</span>
                <b>{{ d.customer }}</b>
              </td>
              <td>{{ d.person }}</td>
              <td class="addr">{{ d.address }}</td>
              <td class="num">{{ d.phone }}</td>
              <td>
                <div class="actions">
                  <a v-if="telLink(d.phone)" :href="telLink(d.phone)" class="btn-call-sm">&#9742; Call</a>
                  <a v-if="waLink(d.phone)" :href="waLink(d.phone)" target="_blank" rel="noopener" class="btn-whatsapp-sm">WhatsApp</a>
                </div>
              </td>
            </tr>
            <tr v-if="!filteredDealers.length">
              <td colspan="5" style="text-align:center;padding:40px 16px;color:var(--text-light);">
                No contacts found for the selected filters.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</template>

<style scoped>
@media (max-width: 1024px) {
  .dealer-table th, .dealer-table td {
    padding: 8px 4px;
    font-size: 0.78rem;
  }
  .dealer-table thead th { font-size: 0.85rem; }
}
@media (max-width: 620px) {
  .dealer-table thead { display: none; }
  .dealer-table tbody tr { display: block; margin-bottom: 12px; border-bottom: 1px solid var(--light-2); }
  .dealer-table td { display: table-cell; width: auto; }
  .dealer-table td:first-child { font-weight: bold; }
}
</style>