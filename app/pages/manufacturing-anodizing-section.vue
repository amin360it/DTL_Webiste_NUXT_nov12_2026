<script setup lang="ts">
useSeo({
  title: 'Anodizing Section',
  description: 'Know our automated anodizing plant offering smooth, durable finishes with 10-15 microns thickness for long-lasting, aesthetically pleasing aluminium profiles'
})

const heroBg = '/assets/img/aaa_766825653.jpg'

const facts = [
  { num: '01', label: 'Fully automated plant' },
  { num: '02', label: 'Pulse rectifiers' },
  { num: '03', label: 'AAMA standard compliance' },
  { num: '04', label: '10–15 micron film thickness' },
  { num: '05', label: 'Colour stability & durability' }
]

const gallery = [
  { src: '/assets/img/aaa_7634-crop-u11783064d.png', alt: 'Fully automated anodizing plant with Pulse rectifiers' },
  { src: '/assets/img/aaa_7668ece3.jpg', alt: 'Anodizing tank line' },
  { src: '/assets/img/anodizing-01-crop-u10966066d.png', alt: 'Anodized aluminium profile finish sample' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" style="background-image: url('/assets/img/aaa_766825653.jpg');"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Anodizing</div>
    <div class="container">
      <span class="kicker">Step 05 — Surface Treatment</span>
      <h1>Anodizing</h1>
      <p class="hero-sub">A fully automated anodizing plant with Pulse rectifiers — delivering smooth, durable, colour-stable finishes that stand up to exterior use.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Fully Automated Plant</span>
        <span class="mfg-badge">Pulse Rectifiers</span>
        <span class="mfg-badge">AAMA 611-98 Class 1</span>
      </div>
    </div>
  </section>

  <div class="mfg-subnav">
    <div class="container">
      <NuxtLink to="/manufacturing">Overview</NuxtLink>
      <NuxtLink to="/manufacturing-billet-casting">Casting</NuxtLink>
      <NuxtLink to="/manufacturing-extrusion-presses">Extruding</NuxtLink>
      <NuxtLink to="/manufacturing-aging-tempering-oven">Tempering</NuxtLink>
      <NuxtLink to="/manufacturing-anodizing-section" class="active">Anodizing</NuxtLink>
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
          <span class="kicker">Anodizing Section</span>
          <p>Anodizing is a finishing process on aluminium in which the visual appearance of the metal is changed to be aesthetically pleasing. This finish must have colour stability and durability — particularly for exterior use.</p>
          <p>DHAKATHAI ALCOMAXX PLC's new fully automated anodizing plant uses the latest technology with Pulse rectifiers to give a smooth surface finish with longevity, and anodizes the aluminium sections according to the American Architectural Manufacturing Association (AAMA).</p>
          <p>The result is a hard, corrosion-resistant oxide layer with a film thickness of 10–15 microns — providing both the protective performance and the refined look that architectural and industrial profiles demand.</p>
          <div class="mfg-facts">
            <div v-for="f in facts" :key="f.num" class="mfg-fact">
              <span class="mfg-fact-num">{{ f.num }}</span>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="mfg-figure">
          <picture>
            <source media="(min-width: 768px)" srcset="/assets/img/aaa_7634-crop-u11783064d.png">
            <img src="/assets/img/aaa_7634-crop-u11783064d.png" alt="Fully automated anodizing plant with Pulse rectifiers" loading="lazy">
          </picture>
          <figcaption class="mfg-cap">Fully automated anodizing plant with Pulse rectifiers</figcaption>
        </div>
      </div>

      <h2 class="mfg-label">Anodized Coated Finishes</h2>
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
