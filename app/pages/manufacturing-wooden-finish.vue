<script setup lang="ts">
useSeo({
  title: 'Wood Grain Finished Aluminium Profile',
  titleTemplate: null,
  description: 'Explore our wood grain finished aluminium profiles, blending durability and natural wood aesthetics for enhanced decoration and functionality'
})

const heroBg = '/assets/img/aaa_77792e3c.jpg'

const facts = [
  { num: '01', label: 'Powder coating base' },
  { num: '02', label: 'Wood design transfer' },
  { num: '03', label: 'Natural wood aesthetics' },
  { num: '04', label: 'Enhanced decoration value' },
  { num: '05', label: 'Stable quality finishes' }
]

const paragraphs = [
  'The wood grain finished aluminum profile is a perfect integration of the excellent aluminum properties with the natural appearance of wood. It is a wonderful combination of the state-of-the-art technology and aesthetics.',
  'The products have stable quality, appealing appearance and therefore a higher value of decoration. In this process the profiles are given a powder coating to provide the functional and protective base and then wooden design is transferred onto the coated profiles for the final finish.'
]

const shades = [
  { name: 'Mahogany', img: '/assets/img/wooden-01.jpg' },
  { name: 'Cherry', img: '/assets/img/wooden-03.jpg' },
  { name: 'Cedar', img: '/assets/img/wooden-04.jpg' },
  { name: 'Walnut', img: '/assets/img/wooden-05.jpg' },
  { name: 'Cinnamon', img: '/assets/img/wooden-02.jpg' }
]

const gallery = [
  { src: '/assets/img/aaa_7790-crop-u11816cf24.png', alt: 'Wood grain finished aluminium profile' },
  { src: '/assets/img/img_2207-crop-u42861bb65.png', alt: 'Wood finish profile close-up' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Wooden Finish</div>
    <div class="container">
      <span class="kicker">Step 07 — Surface Treatment</span>
      <h1>Wooden Finish</h1>
      <p class="hero-sub">The wood grain finished aluminum profile is a perfect integration of the excellent aluminum properties with the natural appearance of wood.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Mahogany · Cherry · Cedar</span>
        <span class="mfg-badge">Walnut · Cinnamon</span>
        <span class="mfg-badge">Powder Coated Base</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-wooden-finish" />

  <ManufacturingStory
    label="How wooden finish is applied"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Wood Finish At A Glance"
    :image="gallery[0].src"
    :image-alt="gallery[0].alt"
    :caption="gallery[0].alt"
  >
    <h2 class="mfg-label mfg-label-spaced">Wooden Finish Shades</h2>
    <div class="mfg-swatches">
      <figure v-for="shade in shades" :key="shade.name" class="mfg-swatch">
        <img :src="shade.img" :alt="`${shade.name} wood finish`" loading="lazy">
        <figcaption class="mfg-swatch-cap">{{ shade.name }}</figcaption>
      </figure>
    </div>

    <h2 class="mfg-label mfg-label-spaced">In Production</h2>
    <figure class="mfg-bottom-figure">
      <img :src="gallery[gallery.length - 1].src" :alt="gallery[gallery.length - 1].alt" loading="lazy">
      <figcaption>{{ gallery[gallery.length - 1].alt }}</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-quality-inspection" class="mfg-next-card">
      <div>
        <h3>Next: Quality Inspection</h3>
        <p>BS 1474, ASTM B221, BSTI and AAMA standards verification</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>
