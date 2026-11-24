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
    <div class="mfg-hero-bg" style="background-image: url('/assets/img/aaa_77792e3c.jpg');"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Wooden Finish</div>
    <div class="container">
      <span class="kicker">Step 07 — Surface Treatment</span>
      <h1>Wooden Finish</h1>
      <p class="hero-sub">The perfect blend of aluminium's strength and the natural warmth of wood — five timeless finishes for interior and exterior applications.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Mahogany · Cherry · Cedar</span>
        <span class="mfg-badge">Walnut · Cinnamon</span>
        <span class="mfg-badge">Powder Coated Base</span>
      </div>
    </div>
  </section>

  <div class="mfg-subnav">
    <div class="container">
      <NuxtLink to="/manufacturing">Overview</NuxtLink>
      <NuxtLink to="/manufacturing-billet-casting">Casting</NuxtLink>
      <NuxtLink to="/manufacturing-extrusion-presses">Extruding</NuxtLink>
      <NuxtLink to="/manufacturing-aging-tempering-oven">Tempering</NuxtLink>
      <NuxtLink to="/manufacturing-anodizing-section">Anodizing</NuxtLink>
      <NuxtLink to="/manufacturing-powder-coating-plant">Powder Coating</NuxtLink>
      <NuxtLink to="/manufacturing-wooden-finish" class="active">Wooden Finish</NuxtLink>
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
          <span class="kicker">Wooden Finish</span>
          <p>The wood grain finished aluminium profile is a perfect integration of the excellent aluminium properties with the natural appearance of wood — a wonderful combination of state-of-the-art technology and aesthetics.</p>
          <p>The products have stable quality, an appealing appearance, and therefore a higher value of decoration. In this process, the profiles are given a powder coating to provide a functional and protective base, and then the wooden design is transferred onto the coated profiles for the final finish.</p>
          <p>The result is a profile that carries the durability, lightness and weather resistance of aluminium with the warmth and character of natural timber — without the maintenance worries of real wood. Ideal for window frames, doors, cladding and interior architectural elements.</p>
          <div class="mfg-facts">
            <div v-for="f in facts" :key="f.num" class="mfg-fact">
              <span class="mfg-fact-num">{{ f.num }}</span>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="mfg-figure">
          <picture>
            <source media="(min-width: 768px)" srcset="/assets/img/aaa_7790-crop-u11816cf24.png">
            <img src="/assets/img/aaa_7790-crop-u11816cf24.png" alt="Wood grain finished aluminium profile" loading="lazy">
          </picture>
          <figcaption class="mfg-cap">Wood grain finished aluminium profile</figcaption>
        </div>
      </div>

      <h2 class="mfg-label">Wooden Finish Shades</h2>
      <div class="mfg-swatches">
        <figure v-for="shade in shades" :key="shade.name" class="mfg-swatch">
          <picture>
            <source media="(min-width: 768px)" :srcset="shade.img">
            <img :src="shade.img" :alt="`${shade.name} wood finish`" loading="lazy">
          </picture>
          <figcaption class="mfg-swatch-cap">{{ shade.name }}</figcaption>
        </figure>
      </div>

      <h2 class="mfg-label" style="margin-top:40px;">In Production</h2>
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
