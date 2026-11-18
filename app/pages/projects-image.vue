<script setup lang="ts">
import { computed, ref } from 'vue'
import { projectGallery } from '~/data/projectGallery'

useSeo({
  title: 'Project Image Gallery',
  description: 'Project image gallery - landmark projects across Bangladesh built with DHAKATHAI ALCOMAXX PLC aluminium profiles.'
})

const places = ['All', 'Dhaka', 'Chattogram', 'Other'] as const
const place = ref<(typeof places)[number]>('All')
const query = ref('')

const counts = computed(() => {
  const map: Record<string, number> = { All: projectGallery.length }
  for (const p of places) map[p] = p === 'All' ? projectGallery.length : projectGallery.filter((i) => i.place === p).length
  return map
})

const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  return projectGallery.filter((item) => {
    if (place.value !== 'All' && item.place !== place.value) return false
    if (!q) return true
    return (item.caption + ' ' + item.alt).toLowerCase().includes(q)
  })
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/projects">Projects</NuxtLink> &raquo; Project Image</div>
    <div class="container">
      <span class="kicker">Projects</span>
      <h1>Project Image Gallery</h1>
      <p>{{ projectGallery.length }} landmark projects across Bangladesh. Click any image to view it full size.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="pg-toolbar">
        <div class="pg-filters" role="group" aria-label="Filter by location">
          <button
            v-for="p in places"
            :key="p"
            class="pg-chip"
            :class="{ active: place === p }"
            @click="place = p"
          >
            {{ p === 'All' ? 'All Projects' : p }}
            <span>{{ counts[p] }}</span>
          </button>
        </div>
        <label class="pg-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input v-model="query" type="search" placeholder="Search project or location..." aria-label="Search projects">
        </label>
      </div>

      <p class="pg-summary">Showing <strong>{{ results.length }}</strong> of {{ projectGallery.length }} projects</p>

      <div v-if="results.length" class="gallery">
        <button
          v-for="item in results"
          :key="item.src"
          class="gallery-item"
          type="button"
          data-lightbox
          :data-caption="item.caption"
        >
          <img :src="item.src" :alt="item.alt" loading="lazy">
          <div class="cap">{{ item.caption }}</div>
          <span class="pg-place">{{ item.place }}</span>
        </button>
      </div>
      <p v-else class="pg-empty">No projects match your search.</p>

      <p class="pg-cta">
        Looking for a written record? <NuxtLink to="/projects-list">See the full project list</NuxtLink> or
        <NuxtLink to="/projects-video">watch project videos</NuxtLink>.
      </p>
    </div>
  </section>
</template>

<style scoped>
.pg-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.pg-filters { display: flex; gap: 8px; flex-wrap: wrap; }
.pg-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid var(--light-2);
  background: var(--white);
  color: var(--text);
  font-family: var(--font);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}
.pg-chip span {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--light);
  color: var(--text-light);
}
.pg-chip:hover { border-color: var(--accent); color: var(--accent); }
.pg-chip.active { background: var(--primary); border-color: var(--primary); color: var(--white); }
.pg-chip.active span { background: rgba(255, 255, 255, 0.2); color: var(--white); }

.pg-search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
  height: 44px;
  min-width: 280px;
  flex: 0 1 360px;
  border: 1px solid var(--light-2);
  border-radius: 999px;
  background: var(--white);
  color: var(--text-light);
}
.pg-search svg { width: 17px; height: 17px; flex: 0 0 17px; }
.pg-search input {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: 0.92rem;
  color: var(--text);
  outline: none;
}
.pg-search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(5, 166, 75, 0.12); }

.pg-summary { font-size: 0.88rem; color: var(--text-light); margin-bottom: 22px; }
.pg-summary strong { color: var(--primary); }
.gallery-item { border: 0; padding: 0; text-align: left; font: inherit; }
.pg-place {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(7, 20, 38, 0.72);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.pg-empty {
  padding: 46px 20px;
  text-align: center;
  border: 1px dashed var(--light-2);
  border-radius: var(--radius);
  color: var(--text-light);
}
.pg-cta { margin-top: 24px; font-size: 0.9rem; color: var(--text-light); }
.pg-cta a { color: var(--accent-dark); font-weight: 700; }
.pg-cta a:hover { color: var(--accent); }

@media (max-width: 640px) {
  .pg-toolbar { flex-direction: column; align-items: stretch; }
  .pg-search { min-width: 0; flex: 1 1 100%; }
}
</style>
