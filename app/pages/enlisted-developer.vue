<script setup lang="ts">
import { computed, ref } from 'vue'
import { developers } from '~/data/developers'

useSeo({
  title: 'Enlisted Developers',
  description: 'List of enlisted developer companies partnered with DHAKATHAI ALCOMAXX PLC.'
})

const query = ref('')
const letter = ref('All')

function initialOf(name: string) {
  const c = name.trim().charAt(0).toUpperCase()
  return c >= 'A' && c <= 'Z' ? c : '#'
}

const letters = computed(() => {
  const map = new Map<string, number>()
  for (const name of developers) {
    const key = initialOf(name)
    map.set(key, (map.get(key) || 0) + 1)
  }
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([key, count]) => ({ key, count }))
})

const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  return developers.filter((name) => {
    if (letter.value !== 'All' && initialOf(name) !== letter.value) return false
    return !q || name.toLowerCase().includes(q)
  })
})

function reset() {
  query.value = ''
  letter.value = 'All'
}
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Enlisted Developers</div>
    <div class="container">
      <span class="kicker">Partners</span>
      <h1>Enlisted Developer Companies</h1>
      <p>{{ developers.length }} developer companies and consultancies partner with us across Bangladesh.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="ed-toolbar">
        <label class="ed-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input v-model="query" type="search" placeholder="Search company name..." aria-label="Search developer companies">
        </label>
        <p class="ed-summary">
          Showing <strong>{{ results.length }}</strong> of {{ developers.length }} companies
          <button v-if="query || letter !== 'All'" class="ed-reset" type="button" @click="reset">Clear filters</button>
        </p>
      </div>

      <div class="ed-letters" role="group" aria-label="Filter by first letter">
        <button class="ed-letter" :class="{ active: letter === 'All' }" @click="letter = 'All'">All</button>
        <button
          v-for="l in letters"
          :key="l.key"
          class="ed-letter"
          :class="{ active: letter === l.key }"
          :aria-label="`Companies starting with ${l.key}`"
          @click="letter = l.key"
        >
          {{ l.key }}<span>{{ l.count }}</span>
        </button>
      </div>

      <div v-if="results.length" class="table-wrap ed-table">
        <table class="data">
          <thead>
            <tr><th class="ed-num">#</th><th>Name Of Company</th></tr>
          </thead>
          <tbody>
            <tr v-for="(name, i) in results" :key="name + i">
              <td class="ed-num">{{ i + 1 }}</td>
              <td class="ed-name">{{ name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else class="ed-empty">
        No developer companies match your filters.
        <button type="button" @click="reset">Clear filters</button>
      </p>

      <p class="ed-cta">
        Not on the list? <NuxtLink to="/dealer-list">Find your nearest dealer</NuxtLink> or
        <NuxtLink to="/contact">contact our sales team</NuxtLink>.
      </p>
    </div>
  </section>
</template>

<style scoped>
.ed-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.ed-search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
  height: 46px;
  min-width: 300px;
  flex: 0 1 420px;
  border: 1px solid var(--light-2);
  border-radius: 999px;
  background: var(--white);
  color: var(--text-light);
}
.ed-search svg { width: 17px; height: 17px; flex: 0 0 17px; }
.ed-search input {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: 0.92rem;
  color: var(--text);
  outline: none;
}
.ed-search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(5, 166, 75, 0.12); }
.ed-summary { font-size: 0.88rem; color: var(--text-light); }
.ed-summary strong { color: var(--primary); }
.ed-reset {
  margin-left: 8px;
  border: 1px solid var(--light-2);
  background: var(--white);
  color: var(--text);
  border-radius: 999px;
  padding: 4px 12px;
  font-family: var(--font);
  font-size: 0.76rem;
  font-weight: 600;
  cursor: pointer;
}
.ed-reset:hover { border-color: var(--accent); color: var(--accent); }

.ed-letters { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
.ed-letter {
  min-width: 36px;
  height: 34px;
  padding: 0 9px;
  border-radius: 9px;
  border: 1px solid var(--light-2);
  background: var(--white);
  color: var(--text);
  font-family: var(--font-head);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: var(--transition);
}
.ed-letter span { font-size: 0.64rem; font-weight: 600; color: var(--text-light); }
.ed-letter:hover { border-color: var(--accent); color: var(--accent); }
.ed-letter.active { background: var(--primary); border-color: var(--primary); color: var(--white); }
.ed-letter.active span { color: rgba(255, 255, 255, 0.7); }

.ed-table { max-height: 720px; overflow-y: auto; }
.ed-table thead th { position: sticky; top: 0; z-index: 1; }
.ed-num { width: 72px; color: var(--text-light); }
.ed-name { font-weight: 600; color: var(--text); }
.ed-table table.data tbody tr:hover { background: var(--light); }

.ed-empty {
  padding: 46px 20px;
  text-align: center;
  border: 1px dashed var(--light-2);
  border-radius: var(--radius);
  color: var(--text-light);
}
.ed-empty button {
  margin-left: 8px;
  border: 0;
  background: none;
  color: var(--accent-dark);
  font-family: var(--font);
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
}
.ed-cta { margin-top: 22px; font-size: 0.9rem; color: var(--text-light); }
.ed-cta a { color: var(--accent-dark); font-weight: 700; }
.ed-cta a:hover { color: var(--accent); }

@media (max-width: 640px) {
  .ed-search { min-width: 0; flex: 1 1 100%; }
  .ed-toolbar { flex-direction: column; align-items: stretch; }
}
</style>
