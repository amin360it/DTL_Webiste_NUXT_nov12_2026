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

const gallery = [
  { src: '/assets/img/img_1491.jpg', alt: 'Continuous casting billet furnace with hot top technology' },
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
      <p class="hero-sub">The foundation of every profile — where imported aluminium ingots become precision billets, ready for extrusion.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Continuous casting furnace</span>
        <span class="mfg-badge">Hot top technology</span>
        <span class="mfg-badge">Eco-friendly burners</span>
      </div>
    </div>
  </section>

  <div class="mfg-subnav">
    <div class="container">
      <NuxtLink to="/manufacturing">Overview</NuxtLink>
      <NuxtLink to="/manufacturing-billet-casting" class="active">Casting</NuxtLink>
      <NuxtLink to="/manufacturing-extrusion-presses">Extruding</NuxtLink>
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
          <span class="kicker">Billet Casting Section</span>
          <p>A continuous casting billet furnace with hot top technology — we use imported ingots to produce billets of various diameters, the raw material for every profile we extrude.</p>
          <p>This latest casting technology is linked to the eco-friendly heat-regenerating burner system to enhance energy conservation and to ensure proper homogenization of the billet — guaranteeing the best quality products without any blemishes.</p>
          <p>The hot top technology minimizes oxidation and segregation during solidification, producing dense, uniform billets with consistent mechanical properties. Every billet that leaves this section meets the tight dimensional tolerances required by our extrusion presses downstream.</p>
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

      <h2 class="mfg-label">The Casting Floor</h2>
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
