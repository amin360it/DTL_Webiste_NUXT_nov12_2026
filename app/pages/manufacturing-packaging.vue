<script setup lang="ts">
useSeo({
  title: 'Standard Packaging',
  description: 'Quality packaging for aluminium profiles, with poly wrap and shrink wrap for secure delivery.'
})

const heroBg = '/assets/img/aaa_755065d4.jpg'

const facts = [
  { num: '01', label: 'Standard poly wrap' },
  { num: '02', label: 'Premium shrink wrap' },
  { num: '03', label: 'Protective tape' },
  { num: '04', label: 'Quality-checked packing' },
  { num: '05', label: 'Secure for transport' }
]

const paragraphs = [
  'Our products are supplied, packed in Standard quality in poly wrapped form and Premium quality in shrink wrapped poly with protective tape package'
]

const gallery = [
  { src: '/assets/img/_dsc0859-crop-u1185860f8.png', alt: 'Poly-wrapped and shrink-wrapped packaging with protective tape' },
  { src: '/assets/img/optim structural hollow sections5dc4.jpg', alt: 'Packaged aluminium profile bundles' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Packaging</div>
    <div class="container">
      <span class="kicker">Step 09 — Finishing</span>
      <h1>PACKAGING</h1>
      <p class="hero-sub">Our products are supplied, packed in Standard quality in poly wrapped form and Premium quality in shrink wrapped poly with protective tape package</p>
      <div class="hero-meta">
        <span class="mfg-badge">Standard Poly Wrap</span>
        <span class="mfg-badge">Premium Shrink Wrap</span>
        <span class="mfg-badge">Protective Tape</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-packaging" />

  <ManufacturingStory
    label="How profiles are packed"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Packaging At A Glance"
    :image="gallery[0].src"
    :image-alt="gallery[0].alt"
    :caption="gallery[0].alt"
  >
    <h2 class="mfg-label mfg-label-spaced">Packed &amp; Ready</h2>
    <figure class="mfg-bottom-figure">
      <img :src="gallery[gallery.length - 1].src" :alt="gallery[gallery.length - 1].alt" loading="lazy">
      <figcaption>{{ gallery[gallery.length - 1].alt }}</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-warehousing-and-delivery" class="mfg-next-card">
      <div>
        <h3>Next: Warehousing &amp; Delivery</h3>
        <p>Bar-coded inventory and nationwide transporter network</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>
