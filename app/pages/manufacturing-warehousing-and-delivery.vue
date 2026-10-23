<script setup lang="ts">
useHead({
  title: 'Warehousing & Delivery',
  meta: [{ name: 'description', content: 'Finished goods warehousing and delivery - barcoded inventory and nationwide transporter network by DHAKATHAI ALCOMAXX PLC.' }]
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Warehousing &amp; Delivery</div>
    <div class="container">
      <span class="kicker">Warehousing</span>
      <h1>Warehousing And Delivery</h1>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
      <NuxtLink to="/manufacturing-billet-casting">Casting</NuxtLink>
      <NuxtLink to="/manufacturing-extrusion-presses">Extruding</NuxtLink>
      <NuxtLink to="/manufacturing-aging-tempering-oven">Tempering</NuxtLink>
      <NuxtLink to="/manufacturing-anodizing-section">Anodizing</NuxtLink>
      <NuxtLink to="/manufacturing-powder-coating-plant">Powder Coating</NuxtLink>
      <NuxtLink to="/manufacturing-wooden-finish">Wooden Finish</NuxtLink>
      <NuxtLink to="/manufacturing-quality-inspection">Quality</NuxtLink>
      <NuxtLink to="/manufacturing-packaging">Packaging</NuxtLink>
      <NuxtLink to="/manufacturing-warehousing-and-delivery" class="active">Warehousing</NuxtLink>
      <NuxtLink to="/manufacturing-etp">ETP</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Finished Goods</span>
        <h2>Warehousing &amp; Delivery</h2>
        <p>The wrapped profiles are barcoded and stored in the warehouse, ready for delivery.</p>
      </div>
      <div class="grid grid-2" style="align-items:center;">
        <img src="/assets/img/supplier-truck-icon693d.jpg" alt="Delivery truck" style="border-radius:12px;box-shadow:var(--shadow-md);">
        <div>
          <h2>Quick Delivery Nationwide</h2>
          <p>Our computerized inventory system and a network of transporters with covered and open trucks ensures quick delivery to our customers all over Bangladesh.</p>
          <ul class="check-list mt-4">
            <li>Barcoded inventory tracking</li>
            <li>Computerized inventory system</li>
            <li>Network of covered &amp; open trucks</li>
            <li>Delivery to customers all over Bangladesh</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
