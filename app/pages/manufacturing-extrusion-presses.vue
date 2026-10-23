<script setup lang="ts">
useHead({
  title: 'Extrusion Presses',
  meta: [{ name: 'description', content: 'Extrusion presses - six presses with hot log shear technology, billet diameters 3.5 to 7 inches by DHAKATHAI ALCOMAXX PLC.' }]
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Extrusion Presses</div>
    <div class="container">
      <span class="kicker">Extruding</span>
      <h1>Extrusion Presses</h1>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
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
      <div class="grid grid-2" style="align-items:center;">
        <div>
          <h2>Six Presses For Diverse Needs</h2>
          <p>Six presses cater to the most diverse needs of our customers to supply products of various thicknesses as per customer requirements.</p>
          <p>These presses use billet dia sizes of 3.5 inches to 7 inches and use hot log shear technology to get optimal production.</p>
          <div class="stats" style="grid-template-columns:repeat(3,1fr);margin-top:30px;">
            <div class="stat"><div class="num">8</div><div class="label">Extrusion Plants</div></div>
            <div class="stat"><div class="num">3.5-7"</div><div class="label">Billet Diameters</div></div>
            <div class="stat"><div class="num">600-2000</div><div class="label">Press Tonnes</div></div>
          </div>
        </div>
        <img src="/assets/img/standard profiles pictureb1d6.jpg" alt="Extrusion presses" style="border-radius:12px;box-shadow:var(--shadow-md);">
      </div>
    </div>
  </section>
</template>
