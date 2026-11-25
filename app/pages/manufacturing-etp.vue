<script setup lang="ts">
useSeo({
  title: 'Effluent Treatment Plant (ETP)',
  description: 'Explore our advanced Effluent Treatment Plant (ETP), ensuring eco-friendly operations by treating wastewater to meet environmental standards.'
})

const heroBg = '/assets/img/img_22043baf.jpg'

const facts = [
  { num: '01', label: 'Zero negative environmental impact' },
  { num: '02', label: 'Full compliance with relevant laws' },
  { num: '03', label: 'Free of contaminants, solid waste, oil & grease' },
  { num: '04', label: 'No acid, alkalis, or toxic materials' },
  { num: '05', label: 'Arsenic & other metals free' },
  { num: '06', label: 'Most modern wastewater treatment plant' }
]

const paragraphs = [
  'DHAKATHAI ALCOMAXX PLC is a very environmental conscious company and ensures that there is no negative effect of our factory on the environment, we take special measures to make sure that no environmentally unacceptable effluence is discarded into the environment.',
  'The water we drain out is always in full compliance with the relevant laws and is free of contaminants, solid waste, oil, grease, acid, alkalis and other toxic materials such as arsenic or other metals. This whole process is possible through our most modern wastewater treatment plant.'
]

const gallery = [
  { src: '/assets/img/aaa_7530-crop-u119754477.png', alt: 'Effluent treatment plant interior' },
  { src: '/assets/img/img_2207-crop-u62118fff8.png', alt: 'ETP treatment process tanks' },
  { src: '/assets/img/img_22043baf.jpg', alt: 'Effluent treatment plant at the factory' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; ETP</div>
    <div class="container">
      <span class="kicker">Protecting Our Environment</span>
      <h1>EFFLUENT TREATMENT PLANT</h1>
      <p class="hero-sub">DHAKATHAI ALCOMAXX PLC is a very environmental conscious company and ensures that there is no negative effect of our factory on the environment, we take special measures to make sure that no environmentally unacceptable effluence is discarded into the environment.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Zero Negative Environmental Impact</span>
        <span class="mfg-badge">Full Legal Compliance</span>
        <span class="mfg-badge">Modern Wastewater Treatment</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-etp" />

  <ManufacturingStory
    label="How wastewater is treated"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Key Environmental Commitments"
    :image="gallery[0].src"
    :image-alt="gallery[0].alt"
    :caption="'Effluent treatment plant at the DHAKATHAI ALCOMAXX factory'"
  >
    <h2 class="mfg-label mfg-label-spaced">Inside The ETP</h2>
    <figure class="mfg-bottom-figure">
      <img :src="gallery[gallery.length - 1].src" :alt="gallery[gallery.length - 1].alt" loading="lazy">
      <figcaption>{{ gallery[gallery.length - 1].alt }}</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-environment" class="mfg-next-card">
      <div>
        <h3>Next: Protecting Our Environment</h3>
        <p>Effluent treatment plant - environmentally conscious wastewater treatment</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>

