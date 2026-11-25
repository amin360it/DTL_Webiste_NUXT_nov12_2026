<script setup lang="ts">
useSeo({
  title: 'Protecting Our Environment',
  description: 'DHAKATHAI ALCOMAXX PLC is a very environmental conscious company and ensures that there is no negative effect of our factory on the environment, we take special measures to make sure that no environmentally unacceptable effluence is discarded into the environment.'
})

const heroBg = '/assets/img/white3980.jpg'

const facts = [
  { num: '01', label: 'Zero negative environmental impact' },
  { num: '02', label: 'Full compliance with relevant laws' },
  { num: '03', label: 'Free of contaminants, solid waste, oil, grease, acid & alkalis' },
  { num: '04', label: 'No toxic materials such as arsenic or other metals' },
  { num: '05', label: 'Most modern wastewater treatment plant' }
]

const paragraphs = [
  'DHAKATHAI ALCOMAXX PLC is a very environmental conscious company and ensures that there is no negative effect of our factory on the environment, we take special measures to make sure that no environmentally unacceptable effluence is discarded into the environment.',
  'The water we drain out is always in full compliance with the relevant laws and is free of contaminants, solid waste, oil, grease, acid, alkalis and other toxic materials such as arsenic or other metals. This whole process is possible through our most modern wastewater treatment plant.'
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Environment</div>
    <div class="container">
      <span class="kicker">Manufacturing — Environment</span>
      <h1>Protecting Our Environment</h1>
      <p class="hero-sub">DHAKATHAI ALCOMAXX PLC is a very environmental conscious company and ensures that there is no negative effect of our factory on the environment.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Zero negative environmental impact</span>
        <span class="mfg-badge">Full compliance with relevant laws</span>
        <span class="mfg-badge">Effluent treatment plant</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-environment" />

  <ManufacturingStory
    label="Our environmental commitment"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Our Commitments"
    :image="heroBg"
    image-alt="Modern ETP wastewater treatment plant"
    caption="Effluent treatment plant"
  >
    <figure class="mfg-bottom-figure">
      <img src="/assets/img/white3980.jpg" alt="Modern ETP wastewater treatment plant" loading="lazy">
      <figcaption>Effluent treatment plant</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-etp" class="mfg-next-card">
      <div>
        <h3>Explore: Effluent Treatment Plant</h3>
        <p>Effluent treatment plant - environmentally conscious wastewater treatment</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>
