<script setup lang="ts">
useSeo({
  title: 'Extrusion Presses',
  description: 'Learn about our extrusion presses, offering diverse products with thicknesses tailored to customer needs, using billet sizes from 3.5 to 7 inches for optimal production'
})

const heroBg = '/assets/img/aaa_7573-crop-u9498a8ed.png'

const facts = [
  { num: '01', label: 'Six extrusion presses' },
  { num: '02', label: '3.5" – 7" billet sizes' },
  { num: '03', label: 'Hot log shear technology' },
  { num: '04', label: 'Diverse thickness range' },
  { num: '05', label: 'Optimal production rate' }
]

const paragraphs = [
  'Six presses to cater to the most diverse needs of our customers to supply products of various thicknesses as per customer requirements.',
  'These presses use billet dia sizes of 3.5 inches to 7 inches and use hot log shear technology to get optimal production.'
]

const gallery = [
  { src: '/assets/img/img_1539-crop-u99126be7.png', alt: 'Extrusion press in operation' },
  { src: '/assets/img/img_2210-crop-u84010ac1.png', alt: 'Extrusion line close-up' },
  { src: '/assets/img/img_1690-crop-u621168e56.png', alt: 'Extruded profile emerging from die' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Extrusion Presses</div>
    <div class="container">
      <span class="kicker">Step 03 — The Heart of Production</span>
      <h1>Extruding</h1>
      <p class="hero-sub">Six presses to cater to the most diverse needs of our customers to supply products of various thicknesses as per customer requirements.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Six Extrusion Presses</span>
        <span class="mfg-badge">3.5" – 7" Billet Diameters</span>
        <span class="mfg-badge">Hot Log Shear Technology</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-extrusion-presses" />

  <ManufacturingStory
    label="How profiles are extruded"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Press Room At A Glance"
    :image="gallery[0].src"
    :image-alt="gallery[0].alt"
    :caption="gallery[0].alt"
  >
    <h2 class="mfg-label mfg-label-spaced">The Extrusion Line</h2>
    <figure class="mfg-bottom-figure">
      <img :src="gallery[gallery.length - 1].src" :alt="gallery[gallery.length - 1].alt" loading="lazy">
      <figcaption>{{ gallery[gallery.length - 1].alt }}</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-aging-tempering-oven" class="mfg-next-card">
      <div>
        <h3>Next: Tempering</h3>
        <p>PLC controlled sensors with centrifugal aerodynamic system</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>
