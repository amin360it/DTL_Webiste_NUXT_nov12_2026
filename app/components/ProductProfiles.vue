<script setup lang="ts">
import type { CatalogProduct } from '~/data/catalog'
import { bucketsOf, type Bucket } from '~/data/productBuckets'

const props = defineProps<{
  bucket: Bucket
  title: string
  intro?: string
}>()

const { openLightbox } = useModal()
const { catalog } = await import('~/data/catalog')

const CHUNK = 48
const limit = ref(CHUNK)
const failed = ref<Set<string>>(new Set())

const all = computed(() => {
  const seen = new Set<string>()
  const out: CatalogProduct[] = []
  for (const p of catalog.products) {
    if (seen.has(p.die)) continue
    if (!bucketsOf(p).includes(props.bucket)) continue
    seen.add(p.die)
    out.push(p)
  }
  return out
})
const shown = computed(() => all.value.slice(0, limit.value))
const hasMore = computed(() => all.value.length > limit.value)

function profileImg(p: CatalogProduct) {
  return p.img ? '/assets/img/profiles/' + encodeURIComponent(p.img) + '.png' : null
}

function onImgError(id: string) {
  const next = new Set(failed.value)
  next.add(id)
  failed.value = next
}

function onHolderClick(p: CatalogProduct) {
  const src = profileImg(p)
  if (src) openLightbox(src, p.die, p.die)
}
</script>

<template>
  <section v-if="all.length" class="section section-light">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Profile Database</span>
        <h2>{{ title }}</h2>
        <p>{{ intro }} Browse {{ all.length }} profiles in this range; click a card to view the drawing.</p>
      </div>

      <div class="cat-grid">
        <div v-for="p in shown" :key="p.id" class="cat-col">
          <div class="cat-card">
            <div
              class="cat-img-holder"
              :class="{ 'cat-zoom': !!profileImg(p) }"
              :tabindex="profileImg(p) ? 0 : undefined"
              :role="profileImg(p) ? 'button' : undefined"
              :title="profileImg(p) ? 'Click to view' : undefined"
              @click="onHolderClick(p)"
              @keydown.enter="onHolderClick(p)"
            >
              <span class="cat-die-badge">{{ p.die }}</span>
              <img
                v-if="p.img && !failed.has(p.id)"
                class="cat-img"
                :src="profileImg(p)!"
                :alt="p.die"
                loading="lazy"
                @error="onImgError(p.id)"
              >
              <svg v-else class="cat-ph" viewBox="0 0 160 160" aria-hidden="true" focusable="false">
                <rect x="3" y="3" width="154" height="154" rx="12" fill="var(--light)" stroke="var(--light-2)" stroke-width="1.5" stroke-dasharray="7 7" />
                <g fill="none" stroke="var(--text-light)" stroke-opacity="0.6" stroke-width="2.5" stroke-linejoin="round">
                  <rect x="52" y="38" width="56" height="11" rx="2" />
                  <rect x="52" y="111" width="56" height="11" rx="2" />
                  <rect x="74" y="49" width="12" height="62" />
                </g>
                <text x="80" y="142" text-anchor="middle" font-size="9" font-weight="700" letter-spacing="1.5" fill="var(--text-light)">NO DRAWING</text>
              </svg>
            </div>
            <div class="cat-card-body">
              <div class="cat-name">{{ p.name }}</div>
              <div class="cat-sub">{{ p.sub }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="hasMore" class="cat-more">
        <button type="button" class="btn btn-dark" @click="limit += CHUNK">Load more ({{ all.length - limit }} remaining)</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cat-col { height: 100%; }
.cat-card { display: flex; flex-direction: column; height: 100%; }
.cat-card-body { flex: 1 1 auto; }
.cat-name { min-height: 2.6em; }
.cat-ph { display: block; width: 100%; height: 100%; }
</style>
