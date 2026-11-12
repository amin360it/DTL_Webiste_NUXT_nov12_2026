<script setup lang="ts">
useSeo({
  title: 'Anodizing Section',
  description: 'Anodizing section - fully automated anodizing plant with Pulse rectifiers, film thickness 10-15 microns per AAMA standards.'
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Anodizing</div>
    <div class="container">
      <span class="kicker">Anodizing</span>
      <h1>Anodizing Section</h1>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
      <NuxtLink to="/manufacturing-billet-casting">Casting</NuxtLink>
      <NuxtLink to="/manufacturing-extrusion-presses">Extruding</NuxtLink>
      <NuxtLink to="/manufacturing-aging-tempering-oven">Tempering</NuxtLink>
      <NuxtLink to="/manufacturing-anodizing-section" class="active">Anodizing</NuxtLink>
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
          <h2>Aesthetically Pleasing Finishes</h2>
          <p>Anodizing is a process of finishing on aluminium in which the visual appearance of the metal is changed to be aesthetically pleasing. This visual appearance must have colour stability and durability, particularly for exterior use.</p>
          <p>DHAKATHAI ALCOMAXX PLC&rsquo;s new fully automated anodizing plant uses the latest technology with <strong>Pulse rectifiers</strong> to give smooth surface finish with longevity and anodizes the aluminium sections according to the <em>&ldquo;American Architectural Manufacturing Association&rdquo;</em>, providing film thickness of <strong>10-15 microns</strong>.</p>
          <div class="stats" style="grid-template-columns:repeat(3,1fr);margin-top:30px;">
            <div class="stat"><div class="num">10-15</div><div class="label">Microns Film Thickness</div></div>
            <div class="stat"><div class="num">Pulse</div><div class="label">Rectifier Technology</div></div>
            <div class="stat"><div class="num">AAMA</div><div class="label">Standards Compliant</div></div>
          </div>
        </div>
        <img src="/assets/img/anodizing-01-crop-u10966066d.png" alt="Anodized aluminium profiles" style="border-radius:12px;box-shadow:var(--shadow-md);">
      </div>
    </div>
  </section>
</template>
