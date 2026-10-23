<script setup lang="ts">
import type { CatalogProduct } from '~/data/catalog'

const props = defineProps<{ product: CatalogProduct }>()

const { openLightbox } = useModal()
const failed = ref(false)

const src = computed(() =>
  props.product.img ? '/assets/img/profiles/' + encodeURIComponent(props.product.img) + '.png' : null
)

function zoom() {
  if (src.value) openLightbox(src.value, props.product.die, props.product.die)
}
</script>

<template>
  <div class="cat-col">
    <div class="cat-card">
      <div
        class="cat-img-holder"
        :class="{ 'cat-zoom': !!src }"
        :data-zoom="src || undefined"
        :data-cap="src ? product.die : undefined"
        :title="src ? 'Click to view' : undefined"
        :tabindex="src ? 0 : undefined"
        :role="src ? 'button' : undefined"
        @click="zoom"
        @keydown.enter="zoom"
      >
        <span class="cat-die-badge">{{ product.die }}</span>
        <img
          v-if="src && !failed"
          class="cat-img"
          :src="src"
          :alt="product.die"
          loading="lazy"
          @error="failed = true"
        >
        <div v-else class="cat-img-ph">{{ product.die }}</div>
      </div>
      <div class="cat-card-body">
        <div class="cat-name">{{ product.name }}</div>
        <div class="cat-sub">{{ product.sub }}</div>
      </div>
    </div>
  </div>
</template>
