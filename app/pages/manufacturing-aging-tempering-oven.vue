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
      <p class="hero-sub">Precision heat treatment that gives every extruded profile its final mechanical properties — hardness, strength and dimensional stability.</p>
      <div class="hero-meta">
        <span class="mfg-badge">PLC Controlled Sensors</span>
        <span class="mfg-badge">Centrifugal Aerodynamic System</span>
        <span class="mfg-badge">Up to 15 Webster</span>
      </div>
    </div>
  </section>

  <div class="mfg-subnav">
    <div class="container">
      <NuxtLink to="/manufacturing">Overview</NuxtLink>
      <NuxtLink to="/manufacturing-billet-casting">Casting</NuxtLink>
      <NuxtLink to="/manufacturing-extrusion-presses">Extruding</NuxtLink>
      <NuxtLink to="/manufacturing-aging-tempering-oven" class="active">Tempering</NuxtLink>
      <NuxtLink to="/manufacturing-anodizing-section">Anodizing</NuxtLink>
      <NuxtLink to="/manufacturing-powder-coating-plant">Powder Coating</NuxtLink>
      <NuxtLink to="/manufacturing-wooden-finish">Wooden Finish</NuxtLink>
      <NuxtLink to="/manufacturing-quality-inspection">Quality</NuxtLink>
      <NuxtLink to="/manufacturing-packaging">Packaging</NuxtLink>
      <NuxtLink to="/manufacturing-warehousing-and-delivery">Warehousing</NuxtLink>
      <NuxtLink to="/manufacturing-etp">ETP</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="mfg-page-body">
        <div class="mfg-copy">
          <span class="kicker">Aging Tempering Oven</span>
          <p>The ovens are equipped with PLC controlled sensors; using the centrifugal aerodynamic system, they provide temperature stabilization for hardness up to 15 Webster.</p>
          <p>Every extruded profile passes through this heat treatment stage. The PLC-controlled environment ensures each batch receives exactly the temperature profile and dwell time required for its alloy and dimensions — delivering consistent, repeatable mechanical properties batch after batch.</p>
          <p>The centrifugal aerodynamic system distributes heated air evenly throughout the oven chamber, eliminating cold spots and ensuring uniform properties across every metre of extrusion — critical for long architectural profiles where consistency matters.</p>
          <div class="mfg-facts">
            <div v-for="f in facts" :key="f.num" class="mfg-fact">
              <span class="mfg-fact-num">{{ f.num }}</span>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="mfg-figure">
          <picture>
            <source media="(min-width: 768px)" :srcset="gallery[0].src">
            <img :src="gallery[0].src" :alt="gallery[0].alt" loading="lazy">
          </picture>
          <figcaption class="mfg-cap">{{ gallery[0].alt }}</figcaption>
        </div>
      </div>

      <h2 class="mfg-label">The Tempering Floor</h2>
      <div class="mfg-strip">
        <ul>
          <li v-for="img in gallery.slice(1)" :key="img.src">
            <img :src="img.src" :alt="img.alt" loading="lazy">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
