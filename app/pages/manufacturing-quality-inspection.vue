<script setup lang="ts">
useSeo({
  title: 'Quality Inspection for Premium Aluminium Profiles',
  titleTemplate: null,
  description: 'Learn about our strict quality inspection process, ensuring profiles meet industry standards like BS-1474 and AAMA, with anodized coatings of 10-15 microns.'
})

const heroBg = '/assets/img/dscf1358_1422c.jpg'

const facts = [
  { num: '01', label: 'BS 1474 / ASTM B221' },
  { num: '02', label: 'AAMA 611-98 Class 1' },
  { num: '03', label: '10–15 micron film' },
  { num: '04', label: 'Inspectors at every line' },
  { num: '05', label: 'BS 3987 / ASTM standards' }
]

const gallery = [
  { src: '/assets/img/quality-01f0bf.png', alt: 'Quality inspection at every finishing line' },
  { src: '/assets/img/aaa_76802c5f.jpg', alt: 'Testing facility and laboratory equipment' },
  { src: '/assets/img/img_22259ea4.jpg', alt: 'Quality testing in progress' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" style="background-image: url('/assets/img/dscf1358_1422c.jpg');"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Quality Inspection</div>
    <div class="container">
      <span class="kicker">Step 08 — Quality Assurance</span>
      <h1>QUALITY INSPECTION</h1>
      <p class="hero-sub">Every profile is inspected at every finishing line — meeting BS 1474, ASTM B221, BS 3987 and AAMA 611-98 Class 1 standards.</p>
      <div class="hero-meta">
        <span class="mfg-badge">BS 1474 Compliant</span>
        <span class="mfg-badge">ASTM B221 / BS 3987</span>
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
      <NuxtLink to="/manufacturing-anodizing-section">Anodizing</NuxtLink>
      <NuxtLink to="/manufacturing-powder-coating-plant">Powder Coating</NuxtLink>
      <NuxtLink to="/manufacturing-wooden-finish">Wooden Finish</NuxtLink>
      <NuxtLink to="/manufacturing-quality-inspection" class="active">Quality</NuxtLink>
      <NuxtLink to="/manufacturing-packaging">Packaging</NuxtLink>
      <NuxtLink to="/manufacturing-warehousing-and-delivery">Warehousing</NuxtLink>
      <NuxtLink to="/manufacturing-etp">ETP</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="mfg-page-body">
        <div class="mfg-copy">
          <span class="kicker">Quality Inspection</span>
          <p>Each product is checked by our quality inspectors placed at every finishing line to ensure only those profiles meeting the assured quality are sent to the packaging department.</p>
          <p>Our manufacturing is done in accordance with BS 1474, ASTM B221 and BS 3987 — the international standards that define aluminium extrusion quality across the industry.</p>
          <p>The aluminium sections are anodized according to the American Architectural Manufacturing Association (AAMA). Anodized specification AAMA 611-98, Class 1, as follows:</p>
          <ul class="check-list mt-4">
            <li>Film thickness — 10–15 microns</li>
            <li>Coating density — 38 g/l inch</li>
          </ul>
          <p style="margin-top:16px;">A dedicated, passionate, and powerful team ensures every profile that leaves our factory carries the DHAKATHAI ALCOMAXX PLC name with pride.</p>
          <div class="mfg-facts">
            <div v-for="f in facts" :key="f.num" class="mfg-fact">
              <span class="mfg-fact-num">{{ f.num }}</span>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="mfg-figure">
          <picture>
            <source media="(min-width: 768px)" srcset="/assets/img/quality-01f0bf.png">
            <img src="/assets/img/quality-01f0bf.png" alt="Quality inspection at every finishing line" loading="lazy">
          </picture>
          <figcaption class="mfg-cap">Quality inspection at every finishing line</figcaption>
        </div>
      </div>

      <h2 class="mfg-label">Testing Facility</h2>
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
