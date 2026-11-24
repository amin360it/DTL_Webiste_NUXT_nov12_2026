<script setup lang="ts">
useSeo({
  title: 'Powder Coating Plant',
  description: "Our Bangladesh's first conveyor robotic powder coating plant, offers eco-friendly, durable, and decorative finishes in a limitless range of colours and textures"
})

const heroBg = '/assets/img/aaa_7718-crop-u113224f05.png'

const facts = [
  { num: '01', label: 'First in Bangladesh' },
  { num: '02', label: 'Conveyor robotic system' },
  { num: '03', label: 'Pure Polyester powder' },
  { num: '04', label: 'Eco-friendly process' },
  { num: '05', label: 'Limitless colours & textures' }
]

const gallery = [
  { src: '/assets/img/aaa_77638ed6.jpg', alt: 'First conveyor robotic coating plant in Bangladesh' },
  { src: '/assets/img/img_2212-crop-u102448e5f.png', alt: 'Powder coating conveyor line' },
  { src: '/assets/img/powder coating-01bb4b.png', alt: 'Powder coated aluminium profile finishes' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" style="background-image: url('/assets/img/aaa_7718-crop-u113224f05.png');"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Powder Coating</div>
    <div class="container">
      <span class="kicker">Step 06 — Surface Treatment</span>
      <h1>Powder Coating</h1>
      <p class="hero-sub">Bangladesh's first conveyor robotic powder coating plant — eco-friendly, durable, decorative finishes in a limitless range of colours and textures.</p>
      <div class="hero-meta">
        <span class="mfg-badge">First Robotic Coating Plant in BD</span>
        <span class="mfg-badge">Pure Polyester Coating</span>
        <span class="mfg-badge">Limitless Colours</span>
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
      <NuxtLink to="/manufacturing-powder-coating-plant" class="active">Powder Coating</NuxtLink>
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
          <span class="kicker">Powder Coating Plant</span>
          <p>The powder coating plant is the first conveyor robotic coating plant in Bangladesh. It is a process of coating an aluminium profile with Pure Polyester in powder form, which is baked to a fluid state to bond it to the metal surface.</p>
          <p>Powder coating has many advantages over traditional liquid coating: it is better for the environment, applies thicker without running, and is easy to style. This gives functional, protective and decorative finishes — allowing the profiles to be coated in a limitless range of colours and textures.</p>
          <p>The robotic conveyor system moves profiles through pre-treatment, powder application and curing with precision and repeatability — ensuring every metre of extrusion carries the same high-quality finish, whether it is a single architectural section or a production run of thousands.</p>
          <div class="mfg-facts">
            <div v-for="f in facts" :key="f.num" class="mfg-fact">
              <span class="mfg-fact-num">{{ f.num }}</span>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="mfg-figure">
          <picture>
            <source media="(min-width: 768px)" srcset="/assets/img/aaa_77638ed6.jpg">
            <img src="/assets/img/aaa_77638ed6.jpg" alt="First conveyor robotic coating plant in Bangladesh" loading="lazy">
          </picture>
          <figcaption class="mfg-cap">First conveyor robotic coating plant in Bangladesh</figcaption>
        </div>
      </div>

      <h2 class="mfg-label">Powder Coated Finishes</h2>
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
