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

const paragraphs = [
  'The powder coating plant is the first conveyor robotic coating plant in Bangladesh. This is a process of coating aluminium profile with a Pure Polyester in powder form which is baked to a fluid state to bond it to the metal surface.',
  "Powder coating has many advantages over traditional liquid coating: It's better for the environment, applies thicker without running, and is easy to style with. This gives functional, protective and decorative finishes, allowing for coating the profiles in a limitless range of colours and textures."
]

const gallery = [
  { src: '/assets/img/aaa_77638ed6.jpg', alt: 'First conveyor robotic coating plant in Bangladesh' },
  { src: '/assets/img/img_2212-crop-u102448e5f.png', alt: 'Powder coating conveyor line' },
  { src: '/assets/img/powder coating-01bb4b.png', alt: 'Powder coated aluminium profile finishes' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Powder Coating</div>
    <div class="container">
      <span class="kicker">Step 06 — Surface Treatment</span>
      <h1>Powder Coating</h1>
      <p class="hero-sub">The powder coating plant is the first conveyor robotic coating plant in Bangladesh.</p>
      <div class="hero-meta">
        <span class="mfg-badge">First Robotic Coating Plant in BD</span>
        <span class="mfg-badge">Pure Polyester Coating</span>
        <span class="mfg-badge">Limitless Colours</span>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing-powder-coating-plant" />

  <ManufacturingStory
    label="How powder coating works"
    :paragraphs="paragraphs"
    :facts="facts"
    facts-label="Coating At A Glance"
    :image="gallery[0].src"
    :image-alt="gallery[0].alt"
    :caption="gallery[0].alt"
  >
    <h2 class="mfg-label mfg-label-spaced">Powder Coated Finishes</h2>
    <figure class="mfg-bottom-figure">
      <img :src="gallery[gallery.length - 1].src" :alt="gallery[gallery.length - 1].alt" loading="lazy">
      <figcaption>{{ gallery[gallery.length - 1].alt }}</figcaption>
    </figure>
    <NuxtLink to="/manufacturing-wooden-finish" class="mfg-next-card">
      <div>
        <h3>Next: Wooden Finish</h3>
        <p>Wood grain patterns applied to aluminium surfaces</p>
      </div>
      <span class="mfg-next-arrow" aria-hidden="true">→</span>
    </NuxtLink>
  </ManufacturingStory>
</template>
