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

const paragraphs = [
  'Each product is checked by our quality inspectors placed at every finishing line to ensure only those profiles meeting the assured quality is sent to the packaging department.',
  'Our manufacturing is done in accordance with BS - 1474, AS TM - B221, BS - 3987.',
  'The aluminium sections are anodized according to "American Architectural Manufacturing Association" (AAMA). Anodized specification 6 1 1 - 98, Class 1 as follows: . Film thickness - 10-15 microns . Coating Density - 38g/linch'
]

const gallery = [
  { src: '/assets/img/quality-01f0bf.png', alt: 'Quality inspection at every finishing line' },
  { src: '/assets/img/aaa_76802c5f.jpg', alt: 'Testing facility and laboratory equipment' },
  { src: '/assets/img/img_22259ea4.jpg', alt: 'Quality testing in progress' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Quality Inspection</div>
    <div class="container">
      <span class="kicker">Step 08 — Quality Assurance</span>
      <h1>QUALITY INSPECTION</h1>
      <p class="hero-sub">Each product is checked by our quality inspectors placed at every finishing line to ensure only those profiles meeting the assured quality is sent to the packaging department.</p>
      <div class="hero-meta">
        <span class="mfg-badge">BS 1474 Compliant</span>
        <span class="mfg-badge">ASTM B221 / BS 3987</span>
        <span class="mfg-badge">AAMA 611-98 Class 1</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-quality-inspection" />

  <ManufacturingStory
    label="How quality is verified"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Standards At A Glance"
    :image="gallery[0].src"
    :image-alt="gallery[0].alt"
    :caption="gallery[0].alt"
  >
    <h2 class="mfg-label mfg-label-spaced">Anodized Specification</h2>
    <div class="mfg-story-grid">
      <article class="mfg-story-card">
        <span class="mfg-story-num">01</span>
        <ul class="check-list mt-4">
          <li>Film thickness — 10–15 microns</li>
          <li>Coating density — 38 g/l inch</li>
        </ul>
      </article>
    </div>

    <h2 class="mfg-label mfg-label-spaced">Testing Facility</h2>
    <figure class="mfg-bottom-figure">
      <img :src="gallery[gallery.length - 1].src" :alt="gallery[gallery.length - 1].alt" loading="lazy">
      <figcaption>{{ gallery[gallery.length - 1].alt }}</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-packaging" class="mfg-next-card">
      <div>
        <h3>Next: Packaging</h3>
        <p>Poly-wrapped and shrink-wrapped with protective tape</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>
