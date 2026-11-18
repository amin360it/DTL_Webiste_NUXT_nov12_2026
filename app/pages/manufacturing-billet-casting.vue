<script setup lang="ts">
useSeo({
  title: 'Billet Casting',
  description: 'Billet casting section - continuous casting billet furnace with hot top technology by DHAKATHAI ALCOMAXX PLC.'
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Billet Casting</div>
    <div class="container">
      <span class="kicker">Casting</span>
      <h1>Billet Casting Section</h1>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
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
      <div class="grid grid-2" style="align-items:center;">
        <div>
          <h2>A Continuous Casting Billet Furnace</h2>
          <p>A continuous casting billet furnace with hot top technology furnace; we use imported ingots to produce billets of various diameters.</p>
          <p>This latest casting technology is linked to the eco-friendly heat regenerating burner system to enhance energy conservation and to ensure proper homogenization of the billet thus guaranteeing the best quality products without any blemishes.</p>
          <ul class="check-list mt-4">
            <li>Hot top technology for prime quality billets</li>
            <li>Imported primary quality ingots</li>
            <li>Various billet diameters produced</li>
            <li>Eco-friendly heat regenerating burner system</li>
            <li>Proper homogenization - blemish-free products</li>
          </ul>
        </div>
        <img src="/assets/img/processing v4a8ba.jpg" alt="Billet casting furnace" style="border-radius:12px;box-shadow:var(--shadow-md);">
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 1024px) {
  .grid-2 { grid-template-columns: 1fr !important; }
}
</style>