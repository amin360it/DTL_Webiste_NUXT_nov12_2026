<script setup lang="ts">
useSeo({
  title: 'Powder Coating Plant',
  description: 'Powder coating plant - the first conveyor robotic coating plant in Bangladesh using Pure Polyester powder coating.'
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Powder Coating</div>
    <div class="container">
      <span class="kicker">Powder Coating</span>
      <h1>Powder Coating Plant</h1>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
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
      <div class="grid grid-2" style="align-items:center;">
        <div>
          <h2>First Robotic Coating Plant in Bangladesh</h2>
          <p>The powder coating plant is the <strong>first conveyor robotic coating plant in Bangladesh</strong>. This is a process of coating aluminium profile with a Pure Polyester in powder form which is baked to a fluid state to bond it to the metal surface.</p>
          <p>Powder coating has many advantages over traditional liquid coating: It's better for the environment, applies thicker without running, and is easy to style with. This gives functional, protective and decorative finishes, allowing for coating the profiles in a <strong>limitless range of colours and textures</strong>.</p>
          <ul class="check-list mt-4">
            <li>Environmentally better than liquid coating</li>
            <li>Applies thicker without running</li>
            <li>Limitless colours and textures</li>
            <li>Functional, protective &amp; decorative finishes</li>
          </ul>
        </div>
        <img src="/assets/img/powder coating-01bb4b.png" alt="Powder coated profiles" style="border-radius:12px;box-shadow:var(--shadow-md);">
      </div>
    </div>
  </section>
</template>
