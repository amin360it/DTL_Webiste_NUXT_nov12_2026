<script setup lang="ts">
useHead({
  title: 'Aging Tempering Oven',
  meta: [{ name: 'description', content: 'Aging tempering oven - PLC controlled sensors with centrifugal aerodynamic system providing hardness up to 15 Webster.' }]
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Aging Tempering Oven</div>
    <div class="container">
      <span class="kicker">Tempering</span>
      <h1>Aging Tempering Oven</h1>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
      <NuxtLink to="/manufacturing-billet-casting">Casting</NuxtLink>
      <NuxtLink to="/manufacturing-extrusion-presses">Extruding</NuxtLink>
      <NuxtLink to="/manufacturing-aging-tempering-oven" class="active">Tempering</NuxtLink>
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
      <div class="grid grid-2" style="align-items:center;">
        <div>
          <h2>Precision Tempering</h2>
          <p>The ovens are equipped with PLC controlled sensors, using the centrifugal aerodynamic system provide temperature stabilization for hardness up to <strong>15 Webster</strong>.</p>
          <ul class="check-list mt-4">
            <li>PLC controlled sensors</li>
            <li>Centrifugal aerodynamic system</li>
            <li>Temperature stabilization</li>
            <li>Hardness up to 15 Webster standard</li>
          </ul>
        </div>
        <img src="/assets/img/processing v4402x214871c.jpg" alt="Aging tempering oven" style="border-radius:12px;box-shadow:var(--shadow-md);">
      </div>
    </div>
  </section>
</template>
