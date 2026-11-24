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

const gallery = [
  { src: '/assets/img/_dsc0859-crop-u1185860f8.png', alt: 'Poly-wrapped and shrink-wrapped packaging with protective tape' },
  { src: '/assets/img/optim structural hollow sections5dc4.jpg', alt: 'Packaged aluminium profile bundles' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" style="background-image: url('/assets/img/aaa_755065d4.jpg');"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Packaging</div>
    <div class="container">
      <span class="kicker">Step 09 — Finishing</span>
      <h1>PACKAGING</h1>
      <p class="hero-sub">Quality packaging that protects every profile — standard poly wrap for everyday orders, premium shrink wrap with protective tape for high-value shipments.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Standard Poly Wrap</span>
        <span class="mfg-badge">Premium Shrink Wrap</span>
        <span class="mfg-badge">Protective Tape</span>
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
      <NuxtLink to="/manufacturing-wooden-finish">Wooden Finish</NuxtLink>
      <NuxtLink to="/manufacturing-quality-inspection">Quality</NuxtLink>
      <NuxtLink to="/manufacturing-packaging" class="active">Packaging</NuxtLink>
      <NuxtLink to="/manufacturing-warehousing-and-delivery">Warehousing</NuxtLink>
      <NuxtLink to="/manufacturing-etp">ETP</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="mfg-page-body">
        <div class="mfg-copy">
          <span class="kicker">Standard Packaging</span>
          <p>Our products are supplied, packed in standard quality in poly-wrapped form, and in premium quality in shrink-wrapped poly with protective tape packaging.</p>
          <p>Every profile is carefully handled and packed by our trained team to ensure it arrives at the customer's site in the same condition it left the factory floor — clean, protected and ready for installation.</p>
          <p>The standard poly-wrapped packaging suits bulk architectural and industrial profile orders, while the premium shrink-wrapped option with protective tape is reserved for high-value, delicate or long-length profiles where extra protection during transit is essential.</p>
          <div class="mfg-facts">
            <div v-for="f in facts" :key="f.num" class="mfg-fact">
              <span class="mfg-fact-num">{{ f.num }}</span>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="mfg-figure">
          <picture>
            <source media="(min-width: 768px)" srcset="/assets/img/_dsc0859-crop-u1185860f8.png">
            <img src="/assets/img/_dsc0859-crop-u1185860f8.png" alt="Poly-wrapped and shrink-wrapped packaging with protective tape" loading="lazy">
          </picture>
          <figcaption class="mfg-cap">Poly-wrapped and shrink-wrapped packaging with protective tape</figcaption>
        </div>
      </div>

      <h2 class="mfg-label">Packed & Ready</h2>
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
