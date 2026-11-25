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

const paragraphs = [
  'Anodizing is a process of finishing on aluminium in which the visual appearance of the metal is changed to be aesthetically pleasing. This visual appearance must have colour stability and durability, particularly for exterior use.',
  'DHAKATHAI ALCOMAXX PLC\'s new fully automated anodizing plant uses the latest technology with Pulse rectifiers to give smooth surface finish with longevity and anodizes the aluminium sections according to the "American Architectural Manufacturing Association"; providing Film Thickness of 10 -15 M of Microns.'
]

const gallery = [
  { src: '/assets/img/aaa_7634-crop-u11783064d.png', alt: 'Fully automated anodizing plant with Pulse rectifiers' },
  { src: '/assets/img/aaa_7668ece3.jpg', alt: 'Anodizing tank line' },
  { src: '/assets/img/anodizing-01-crop-u10966066d.png', alt: 'Anodized aluminium profile finish sample' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Anodizing</div>
    <div class="container">
      <span class="kicker">Step 05 — Surface Treatment</span>
      <h1>Anodizing</h1>
      <p class="hero-sub">Anodizing is a process of finishing on aluminium in which the visual appearance of the metal is changed to be aesthetically pleasing. This visual appearance must have colour stability and durability, particularly for exterior use.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Fully Automated Plant</span>
        <span class="mfg-badge">Pulse Rectifiers</span>
        <span class="mfg-badge">AAMA 611-98 Class 1</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-anodizing-section" />

  <ManufacturingStory
    label="How anodizing protects aluminium"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Anodizing At A Glance"
    :image="gallery[0].src"
    :image-alt="gallery[0].alt"
    :caption="gallery[0].alt"
  >
    <h2 class="mfg-label mfg-label-spaced">Anodized Coated Finishes</h2>
    <figure class="mfg-bottom-figure mfg-bottom-figure--fit">
      <img :src="gallery[gallery.length - 1].src" :alt="gallery[gallery.length - 1].alt" loading="lazy">
      <figcaption>{{ gallery[gallery.length - 1].alt }}</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-powder-coating-plant" class="mfg-next-card">
      <div>
        <h3>Next: Powder Coating</h3>
        <p>Electrostatic powder coating for durable finish in multiple colors</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>
