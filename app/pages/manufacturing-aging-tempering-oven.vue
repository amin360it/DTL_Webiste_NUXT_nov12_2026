<script setup lang="ts">
useSeo({
  title: 'Aging Tempering Oven',
  description: 'Explore our PLC-controlled aging tempering ovens, ensuring precise temperature stabilization and hardness up to 15 Webster.'
})

const heroBg = '/assets/img/aaa_7576-crop-u103406e33.png'

const facts = [
  { num: '01', label: 'PLC controlled sensors' },
  { num: '02', label: 'Centrifugal aerodynamic system' },
  { num: '03', label: 'Up to 15 Webster hardness' },
  { num: '04', label: 'Precise temperature stabilization' },
  { num: '05', label: 'Uniform heat distribution' }
]

const paragraphs = [
  'The ovens are equipped with PLC controlled sensors, using the centrifugal aerodynamic system provide temperature stabilization for hardness up to 15 Webster.'
]

const gallery = [
  { src: '/assets/img/aaa_7583-crop-u1174570bd.png', alt: 'Aging tempering oven interior' },
  { src: '/assets/img/aaa_7583-crop-u1174570bd.png', alt: 'Tempering oven control panel' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Aging Tempering Oven</div>
    <div class="container">
      <span class="kicker">Step 04 — Heat Treatment</span>
      <h1>Tempering</h1>
      <p class="hero-sub">The ovens are equipped with PLC controlled sensors, using the centrifugal aerodynamic system provide temperature stabilization for hardness up to 15 Webster.</p>
      <div class="hero-meta">
        <span class="mfg-badge">PLC Controlled Sensors</span>
        <span class="mfg-badge">Centrifugal Aerodynamic System</span>
        <span class="mfg-badge">Up to 15 Webster</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-aging-tempering-oven" />

  <ManufacturingStory
    label="How tempering works"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Heat Treatment At A Glance"
    :image="gallery[0].src"
    :image-alt="gallery[0].alt"
    :caption="gallery[0].alt"
  >
    <h2 class="mfg-label mfg-label-spaced">The Tempering Floor</h2>
    <figure class="mfg-bottom-figure">
      <img :src="gallery[gallery.length - 1].src" :alt="gallery[gallery.length - 1].alt" loading="lazy">
      <figcaption>{{ gallery[gallery.length - 1].alt }}</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-anodizing-section" class="mfg-next-card">
      <div>
        <h3>Next: Anodizing</h3>
        <p>Electrolytic passivation to increase corrosion resistance and finish</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>
