<script setup lang="ts">
useSeo({
  title: 'Warehousing & Delivery',
  description: 'Quick and reliable delivery across Bangladesh with barcoded inventory and efficient storage for all your aluminium profiles.'
})

const heroBg = '/assets/img/aaa_2977-topaz-sharpen-color-upscale-2x-bluecb78.jpg'

const facts = [
  { num: '01', label: 'Barcoded inventory' },
  { num: '02', label: 'Computerized storage' },
  { num: '03', label: 'Covered & open trucks' },
  { num: '04', label: 'Nationwide network' },
  { num: '05', label: 'Quick nationwide delivery' }
]

const paragraphs = [
  'The wrapped profiles are; Barcoded and stored in the warehouse, ready for delivery.',
  'Our computerized inventory system and a network of transporters with covered and open trucks ensures quick delivery to our customers all over Bangladesh.'
]

const gallery = [
  { src: '/assets/img/aaa_7697-crop-u11877caad.png', alt: 'Finished goods warehousing and delivery' },
  { src: '/assets/img/supplier-truck-icon693d.jpg', alt: 'Transport fleet covering Bangladesh' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Warehousing &amp; Delivery</div>
    <div class="container">
      <span class="kicker">Step 10 — Logistics</span>
      <h1>Warehousing &amp; Delivery</h1>
      <p class="hero-sub">The wrapped profiles are; Barcoded and stored in the warehouse, ready for delivery.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Barcoded Inventory</span>
        <span class="mfg-badge">Computerized System</span>
        <span class="mfg-badge">Nationwide Coverage</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-warehousing-and-delivery" />

  <ManufacturingStory
    label="From warehouse to site"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Delivery At A Glance"
    :image="gallery[0].src"
    :image-alt="gallery[0].alt"
    :caption="gallery[0].alt"
  >
    <h2 class="mfg-label mfg-label-spaced">The Warehouse Floor</h2>
    <figure class="mfg-bottom-figure">
      <img :src="gallery[gallery.length - 1].src" :alt="gallery[gallery.length - 1].alt" loading="lazy">
      <figcaption>{{ gallery[gallery.length - 1].alt }}</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-etp" class="mfg-next-card">
      <div>
        <h3>Next: Effluent Treatment Plant</h3>
        <p>Effluent treatment plant - environmentally conscious wastewater treatment</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>
