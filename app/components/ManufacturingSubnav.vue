<script setup lang="ts">
defineProps<{ active: string }>()

const links = [
  { label: 'Overview', to: '/manufacturing' },
  { label: 'Casting', to: '/manufacturing-billet-casting' },
  { label: 'Extruding', to: '/manufacturing-extrusion-presses' },
  { label: 'Tempering', to: '/manufacturing-aging-tempering-oven' },
  { label: 'Anodizing', to: '/manufacturing-anodizing-section' },
  { label: 'Powder Coating', to: '/manufacturing-powder-coating-plant' },
  { label: 'Wooden Finish', to: '/manufacturing-wooden-finish' },
  { label: 'Quality', to: '/manufacturing-quality-inspection' },
  { label: 'Packaging', to: '/manufacturing-packaging' },
  { label: 'Warehousing', to: '/manufacturing-warehousing-and-delivery' },
  { label: 'ETP', to: '/manufacturing-etp' },
  { label: 'Environment', to: '/manufacturing-environment' }
]
</script>

<template>
  <div class="mfg-subnav">
    <div class="container">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="{ active: active === link.to }">{{ link.label }}</NuxtLink>
    </div>
  </div>
</template>
