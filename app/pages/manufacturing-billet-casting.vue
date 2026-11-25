<script setup lang="ts">
useSeo({
  title: 'Billet Casting',
  description: 'Know our billet casting process using continuous casting with hot top technology, ensuring high-quality billets through energy-efficient, eco-friendly methods.'
})

const heroBg = '/assets/img/img_1484-crop-u9463b5ab.png'

const facts = [
  { num: '01', label: 'Continuous casting' },
  { num: '02', label: 'Hot top technology' },
  { num: '03', label: 'Imported ingots' },
  { num: '04', label: 'Heat-regenerating burner' },
  { num: '05', label: 'Proper homogenization' },
  { num: '06', label: 'Blemish-free quality' }
]

const paragraphs = [
  'A continuous casting billet furnace with hot top technology furnace; we use imported ingots to produce billets of various diameters.',
  'This latest casting technology is linked to the eco-friendly heat regenerating burner system to enhance energy conservation and to ensure proper homogenization of the billet thus guaranteeing the best quality products without any blemishes.'
]

const gallery = [
  { src: '/assets/img/img_1491-crop-u13435cf87.png', alt: 'Continuous casting billet furnace with hot top technology' },
  { src: '/assets/img/img_1689-crop-u6212503cb.png', alt: 'Billet casting furnace interior' },
  { src: '/assets/img/img_1690-crop-u42859197d.png', alt: 'Casting process close-up' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Billet Casting</div>
    <div class="container">
      <span class="kicker">Step 01–02 — Raw Material</span>
      <h1>Billet Casting</h1>
      <p class="hero-sub">A continuous casting billet furnace with hot top technology furnace; we use imported ingots to produce billets of various diameters.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Continuous casting furnace</span>
        <span class="mfg-badge">Hot top technology</span>
        <span class="mfg-badge">Eco-friendly burners</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-billet-casting" />

  <ManufacturingStory
    label="How billets are made"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Casting At A Glance"
    :image="gallery[0].src"
    :image-alt="gallery[0].alt"
    :caption="gallery[0].alt"
  >
    <h2 class="mfg-label mfg-label-spaced">The Casting Floor</h2>
    <figure class="mfg-bottom-figure">
      <img :src="gallery[gallery.length - 1].src" :alt="gallery[gallery.length - 1].alt" loading="lazy">
      <figcaption>{{ gallery[gallery.length - 1].alt }}</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-extrusion-presses" class="mfg-next-card">
      <div>
        <h3>Next: Extrusion Presses</h3>
        <p>Billets forced through die to create aluminium profile</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>
