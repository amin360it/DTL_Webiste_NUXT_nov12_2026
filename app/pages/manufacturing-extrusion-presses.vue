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

const gallery = [
  { src: '/assets/img/img_1539-crop-u99126be7.png', alt: 'Extrusion press in operation' },
  { src: '/assets/img/img_2210.jpg', alt: 'Extrusion line close-up' },
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
      <p class="hero-sub">Six powerful presses convert aluminium billets into precise profiles — the core of DHAKATHAI ALCOMAXX PLC's manufacturing capability.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Six Extrusion Presses</span>
        <span class="mfg-badge">3.5" – 7" Billet Diameters</span>
        <span class="mfg-badge">Hot Log Shear Technology</span>
      </div>
    </div>
  </section>

  <div class="mfg-subnav">
    <div class="container">
      <NuxtLink to="/manufacturing">Overview</NuxtLink>
      <NuxtLink to="/manufacturing-billet-casting">Casting</NuxtLink>
      <NuxtLink to="/manufacturing-extrusion-presses" class="active">Extruding</NuxtLink>
      <NuxtLink to="/manufacturing-aging-tempering-oven">Tempering</NuxtLink>
      <NuxtLink to="/manufacturing-anodizing-section">Anodizing</NuxtLink>
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
          <span class="kicker">Extrusion Presses</span>
          <p>Six presses cater to the most diverse needs of our customers, supplying products of various thicknesses as per customer requirements.</p>
          <p>These presses use billet diameter sizes of 3.5 inches to 7 inches and hot log shear technology to achieve optimal production. The hot log shear cuts the heated billet cleanly before extrusion, ensuring each shot starts with a perfectly prepared charge — improving surface quality and dimensional accuracy.</p>
          <p>With six presses operating in parallel, DHAKATHAI ALCOMAXX PLC handles everything from small architectural sections to heavy industrial profiles, serving the full spectrum of customer demands across Bangladesh.</p>
          <div class="mfg-facts">
            <div v-for="f in facts" :key="f.num" class="mfg-fact">
              <span class="mfg-fact-num">{{ f.num }}</span>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="mfg-figure">
          <picture>
            <source media="(min-width: 768px)" :srcset="gallery[0].src">
            <img :src="gallery[0].src" :alt="gallery[0].alt" loading="lazy">
          </picture>
          <figcaption class="mfg-cap">{{ gallery[0].alt }}</figcaption>
        </div>
      </div>

      <h2 class="mfg-label">The Extrusion Line</h2>
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
