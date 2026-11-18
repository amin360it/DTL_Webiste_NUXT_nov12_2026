<script setup lang="ts">
import type { CatalogProduct } from '~/data/catalog'

useSeo({
  title: 'Online Catalogue',
  description: 'Browse DHAKATHAI ALCOMAXX PLC aluminium profiles - search by die number, profile name or category with product images and specifications.'
})

const { catalog } = await import('~/data/catalog')

const SUB_CHUNK = 60
const FLAT_CHUNK = 200

const searchQuery = ref('')
const currentView = ref<'cat' | 'subs' | 'flat'>('cat')
const openCategories = ref<Set<string>>(new Set(catalog.categories.length ? [catalog.categories[0].name] : []))
const renderedCategories = ref<Set<string>>(new Set(catalog.categories.length ? [catalog.categories[0].name] : []))
const flatLimit = ref(FLAT_CHUNK)
const subLimits = ref<Record<string, number>>({})

const query = computed(() => searchQuery.value.trim().toLowerCase())

function matches(p: CatalogProduct) {
  if (!query.value) return true
  return (p.name + ' ' + p.die + ' ' + p.id + ' ' + p.cat + ' ' + p.sub).toLowerCase().includes(query.value)
}

function categoryProducts(name: string) {
  return catalog.products.filter(p => p.cat === name && matches(p))
}

function categoryVisible(name: string) {
  if (name.toLowerCase().includes(query.value)) return true
  return categoryProducts(name).length > 0
}

const subsCategories = computed(() =>
  catalog.categories
    .filter(c => categoryVisible(c.name))
    .map(c => ({ name: c.name, count: c.count, letter: c.name.charAt(0) }))
)

function subsFor(name: string) {
  const out: { name: string; products: CatalogProduct[] }[] = []
  const index: Record<string, number> = {}
  for (const p of catalog.products) {
    if (p.cat !== name || !matches(p)) continue
    if (index[p.sub] === undefined) {
      index[p.sub] = out.length
      out.push({ name: p.sub, products: [] })
    }
    out[index[p.sub]].products.push(p)
  }
  return out
}

const flatProducts = computed(() => catalog.products.filter(p => matches(p)))
const flatSlice = computed(() => flatProducts.value.slice(0, flatLimit.value))

function subKey(catName: string, subName: string) {
  return catName + '|' + subName
}

function subLimit(catName: string, subName: string) {
  return subLimits.value[subKey(catName, subName)] || SUB_CHUNK
}

function subRemaining(catName: string, subName: string, total: number) {
  return Math.max(0, total - subLimit(catName, subName))
}

function loadMoreSub(catName: string, subName: string) {
  subLimits.value = {
    ...subLimits.value,
    [subKey(catName, subName)]: subLimit(catName, subName) + SUB_CHUNK
  }
}

function isCategoryOpen(name: string) {
  return openCategories.value.has(name)
}

function isCategoryRendered(name: string) {
  return renderedCategories.value.has(name)
}

function toggleCategory(name: string) {
  const open = new Set(openCategories.value)
  const rendered = new Set(renderedCategories.value)
  if (open.has(name)) {
    open.delete(name)
  } else {
    open.add(name)
    rendered.add(name)
  }
  openCategories.value = open
  renderedCategories.value = rendered
}

function switchView(view: 'cat' | 'subs' | 'flat') {
  currentView.value = view
  if (view === 'flat') flatLimit.value = FLAT_CHUNK
}

function loadMoreFlat() {
  flatLimit.value += FLAT_CHUNK
}

function goToCategory(name: string) {
  currentView.value = 'cat'
  const open = new Set(openCategories.value)
  const rendered = new Set(renderedCategories.value)
  open.add(name)
  rendered.add(name)
  openCategories.value = open
  renderedCategories.value = rendered
  nextTick(() => {
    for (const item of Array.from(document.querySelectorAll('.cat-acc-item'))) {
      if (item.getAttribute('data-cat') === name) {
        item.scrollIntoView({ behavior: 'smooth', block: 'start' })
        break
      }
    }
  })
}

watch(searchQuery, () => {
  flatLimit.value = FLAT_CHUNK
  subLimits.value = {}
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Catalogue</div>
    <div class="container">
      <span class="kicker">Online Catalogue</span>
      <h1>Aluminium Profile Catalogue</h1>
      <p>Browse all aluminium profiles by die number, name or category.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">

      <div class="cat-toolbar">
        <div class="cat-search">
          <input type="search" id="cat-filter" v-model="searchQuery" class="form-control" placeholder="Filter by die number, name, item ID or category...">
        </div>
        <div class="cat-view-pills" role="group" aria-label="View type">
          <button type="button" class="cat-view-pill" :class="{ active: currentView === 'cat' }" data-view="cat" @click="switchView('cat')">Category</button>
          <button type="button" class="cat-view-pill" :class="{ active: currentView === 'subs' }" data-view="subs" @click="switchView('subs')">Categories Only</button>
          <button type="button" class="cat-view-pill" :class="{ active: currentView === 'flat' }" data-view="flat" @click="switchView('flat')">Flat List</button>
        </div>
      </div>

      <div id="view-cat" :class="{ 'd-none': currentView !== 'cat' }">
        <div id="cat-accordion">
          <div
            v-for="cat in catalog.categories"
            :key="cat.name"
            class="cat-acc-item"
            :data-cat="cat.name"
            :style="categoryVisible(cat.name) ? undefined : { display: 'none' }"
          >
            <button
              class="cat-acc-btn"
              :class="{ collapsed: !isCategoryOpen(cat.name) }"
              type="button"
              :aria-expanded="String(isCategoryOpen(cat.name))"
              @click="toggleCategory(cat.name)"
            >
              <span class="cat-acc-title">{{ cat.name }}</span>
              <span class="cat-acc-count">{{ cat.count }}</span>
              <span class="cat-acc-arrow"></span>
            </button>
            <div class="cat-acc-body" :style="isCategoryOpen(cat.name) ? { display: 'block' } : undefined">
              <div class="cat-grid" data-grid>
                <template v-if="isCategoryRendered(cat.name)">
                  <div v-for="sub in subsFor(cat.name)" :key="sub.name" class="cat-sub-block">
                    <div class="cat-sub-head"><span class="cat-chip">{{ sub.name }}</span><span class="cat-chip-count">{{ sub.products.length }}</span></div>
                    <div class="cat-grid">
                      <CatalogCard v-for="p in sub.products.slice(0, subLimit(cat.name, sub.name))" :key="p.id" :product="p" />
                    </div>
                    <div v-if="subRemaining(cat.name, sub.name, sub.products.length) > 0" class="cat-more">
                      <button type="button" class="btn btn-dark" @click="loadMoreSub(cat.name, sub.name)">Load more ({{ subRemaining(cat.name, sub.name, sub.products.length) }} remaining)</button>
                    </div>
                  </div>
                  <div v-if="subsFor(cat.name).length === 0" class="cat-empty">No profiles in this category.</div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="view-subs" :class="{ 'd-none': currentView !== 'subs' }">
        <div class="cat-grid cat-grid-subs" id="subs-grid">
          <div v-for="cat in subsCategories" :key="cat.name" class="cat-col cat-col-subs">
            <a class="cat-quick" href="#cat-accordion" :data-goto="cat.name" @click.prevent="goToCategory(cat.name)">
              <span class="cat-q-icon">{{ cat.letter }}</span>
              <span class="cat-q-body">
                <span class="cat-q-name">{{ cat.name }}</span>
                <span class="cat-q-count">{{ cat.count }} profiles</span>
              </span>
            </a>
          </div>
          <div v-if="subsCategories.length === 0" class="cat-empty">No categories found.</div>
        </div>
      </div>

      <div id="view-flat" :class="{ 'd-none': currentView !== 'flat' }">
        <div class="cat-grid" id="flat-grid">
          <CatalogCard v-for="p in flatSlice" :key="p.id" :product="p" />
          <div v-if="flatSlice.length === 0" class="cat-empty">No profiles found.</div>
        </div>
        <div class="cat-more" id="flat-more-wrap" :class="{ 'd-none': flatLimit >= flatProducts.length }">
          <button type="button" class="btn btn-dark" id="flat-more" @click="loadMoreFlat">Load more</button>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@media (max-width: 1024px) {
  .cat-acc-body .cat-grid { grid-template-columns: 1fr !important; }
  .cat-sub-block { margin: 20px 0; }
}
@media (max-width: 620px) {
  .cat-acc-body { padding: 0 10px; }
}
</style>