<script setup lang="ts">
import { computed, ref } from 'vue'
import { ongoingProjects, projects2018, projects2016, type Project } from '~/data/projects'

useSeo({
  title: 'Project List',
  description: 'Complete list of DHAKATHAI ALCOMAXX PLC projects - ongoing, 2018-2019 and 2016-2017 completed projects.'
})

const groups = [
  { key: 'ongoing', label: 'Ongoing', note: 'Under construction', items: ongoingProjects },
  { key: '1819', label: 'Completed 2018-2019', note: 'Handed over', items: projects2018 },
  { key: '1617', label: 'Completed 2016-2017', note: 'Handed over', items: projects2016 }
]

const tab = ref('ongoing')
const query = ref('')

const active = computed(() => groups.find((g) => g.key === tab.value) || groups[0])
const total = computed(() => groups.reduce((sum, g) => sum + g.items.length, 0))

const results = computed<Project[]>(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return active.value.items
  return active.value.items.filter((p) => (p.name + ' ' + p.location).toLowerCase().includes(q))
})

function pick(key: string) {
  tab.value = key
  query.value = ''
}
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/projects">Projects</NuxtLink> &raquo; Project List</div>
    <div class="container">
      <span class="kicker">Projects</span>
      <h1>Few List Of Projects</h1>
      <p>From residential buildings to national infrastructure &mdash; {{ total }} projects across Bangladesh.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="pl-stats">
        <div class="pl-stat" v-for="g in groups" :key="g.key">
          <strong>{{ g.items.length }}</strong>
          <span>{{ g.label }}</span>
        </div>
        <div class="pl-stat pl-stat--accent">
          <strong>{{ total }}</strong>
          <span>Total projects listed</span>
        </div>
      </div>

      <div class="tabs" role="tablist">
        <button
          v-for="g in groups"
          :key="g.key"
          class="tab-btn"
          :class="{ active: tab === g.key }"
          role="tab"
          :aria-selected="tab === g.key"
          @click="pick(g.key)"
        >
          {{ g.label }} <span class="pl-count">{{ g.items.length }}</span>
        </button>
      </div>

      <div class="pl-toolbar">
        <label class="pl-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input v-model="query" type="search" placeholder="Search project name or location..." aria-label="Search projects">
        </label>
        <p class="pl-summary">
          <strong>{{ results.length }}</strong> of {{ active.items.length }} {{ active.label.toLowerCase() }} projects
          <span class="pl-note">{{ active.note }}</span>
        </p>
      </div>

      <div v-if="results.length" class="table-wrap pl-table">
        <table class="data">
          <thead>
            <tr><th>#</th><th>Project</th><th>Location</th></tr>
          </thead>
          <tbody>
            <tr v-for="(p, i) in results" :key="p.name + i">
              <td>{{ i + 1 }}</td>
              <td class="pl-name">{{ p.name }}</td>
              <td><span class="pl-place">{{ p.location }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else class="pl-empty">No projects match &ldquo;{{ query }}&rdquo; in {{ active.label.toLowerCase() }}.</p>

      <p class="pl-cta">
        Want to see these projects? <NuxtLink to="/projects-image">Browse the image gallery</NuxtLink> or
        <NuxtLink to="/contact">talk to our team</NuxtLink>.
      </p>
    </div>
  </section>
</template>

<style scoped>
.pl-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}
.pl-stat {
  background: var(--white);
  border: 1px solid var(--light-2);
  border-radius: var(--radius);
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: var(--shadow-sm);
}
.pl-stat strong { font-family: var(--font-head); font-size: 1.7rem; color: var(--primary); line-height: 1.1; }
.pl-stat span { font-size: 0.82rem; color: var(--text-light); }
.pl-stat--accent { background: linear-gradient(135deg, var(--primary-dark), var(--primary)); border-color: transparent; }
.pl-stat--accent strong { color: var(--accent-light); }
.pl-stat--accent span { color: #c3cfdd; }

.pl-count {
  display: inline-block;
  margin-left: 6px;
  padding: 1px 9px;
  border-radius: 999px;
  background: var(--light);
  color: var(--text-light);
  font-size: 0.74rem;
  font-weight: 700;
}
.tab-btn.active .pl-count { background: rgba(0, 0, 0, 0.24); color: #ffffff; }

.pl-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}
.pl-search {
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
.pl-search svg { width: 17px; height: 17px; flex: 0 0 17px; }
.pl-search input {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: 0.92rem;
  color: var(--text);
  outline: none;
}
.pl-search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(5, 166, 75, 0.12); }
.pl-summary { font-size: 0.88rem; color: var(--text-light); }
.pl-summary strong { color: var(--primary); }
.pl-note {
  display: inline-block;
  margin-left: 8px;
  padding: 2px 10px;
  border-radius: 999px;   background: rgba(5, 166, 75, 0.12);
  color: var(--accent-dark);
  font-size: 0.74rem;
  font-weight: 700;
}
.pl-table table.data tbody tr:hover { background: var(--light); }
.pl-name { font-weight: 600; color: var(--text); }
.pl-place {
  display: inline-block;
  padding: 3px 11px;
  border-radius: 999px;
  background: var(--light);
  border: 1px solid var(--light-2);
  font-size: 0.8rem;
  color: var(--text-light);
}
.pl-empty {
  padding: 46px 20px;
  text-align: center;
  border: 1px dashed var(--light-2);
  border-radius: var(--radius);
  color: var(--text-light);
}
.pl-cta { margin-top: 22px; font-size: 0.9rem; color: var(--text-light); }
.pl-cta a { color: var(--accent-dark); font-weight: 700; }
.pl-cta a:hover { color: var(--accent); }

@media (max-width: 900px) {
  .pl-stats { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .pl-stats { grid-template-columns: 1fr; gap: 10px; }
  .pl-search { min-width: 0; flex: 1 1 100%; }
  .pl-toolbar { flex-direction: column; align-items: stretch; }
}
</style>
