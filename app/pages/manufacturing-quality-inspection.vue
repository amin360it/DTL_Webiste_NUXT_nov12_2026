<script setup lang="ts">
useHead({
  title: 'Quality Inspection',
  meta: [{ name: 'description', content: 'Quality inspection for premium aluminium profiles - BS 1474, ASTM B221, BS 3987 and AAMA 611-98 Class 1 standards.' }]
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Quality Inspection</div>
    <div class="container">
      <span class="kicker">Quality</span>
      <h1>Quality Inspection</h1>
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
      <NuxtLink to="/manufacturing-quality-inspection" class="active">Quality</NuxtLink>
      <NuxtLink to="/manufacturing-packaging">Packaging</NuxtLink>
      <NuxtLink to="/manufacturing-warehousing-and-delivery">Warehousing</NuxtLink>
      <NuxtLink to="/manufacturing-etp">ETP</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="grid grid-2" style="align-items:center;">
        <div>
          <h2>A Dedicated, Passionate &amp; Powerful Team</h2>
          <p>Each product is checked by our quality inspectors placed at every finishing line to ensure only those profiles meeting the assured quality is sent to the packaging department.</p>
          <p>Our manufacturing is done in accordance with <strong>BS-1474, ASTM-B221, BS-3987</strong>.</p>
          <p>The aluminium sections are anodized according to <em>&ldquo;American Architectural Manufacturing Association&rdquo;</em> (AAMA). Anodized specification 611-98, Class 1 as follows:</p>
          <ul class="check-list mt-4">
            <li>Film thickness - 10-15 microns</li>
            <li>Coating Density - 38g/linch</li>
          </ul>
        </div>
        <div>
          <img src="/assets/img/quality-01f0bf.png" alt="Quality inspection" style="border-radius:12px;box-shadow:var(--shadow-md);width:100%;">
          <div class="card mt-4">
            <div class="card-body">
              <h3>Testing Facility</h3>
              <p>Every finishing line is manned by dedicated quality inspectors backed by a modern testing facility that verifies hardness, film thickness and coating density against international standards.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="stats" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr));">
        <div class="stat"><div class="num">BS 1474</div><div class="label">Manufacturing Standard</div></div>
        <div class="stat"><div class="num">ASTM B221</div><div class="label">Manufacturing Standard</div></div>
        <div class="stat"><div class="num">BS 3987</div><div class="label">Manufacturing Standard</div></div>
        <div class="stat"><div class="num">AAMA 611-98</div><div class="label">Anodizing Specification</div></div>
        <div class="stat"><div class="num">38g</div><div class="label">Coating Density</div></div>
      </div>
    </div>
  </section>
</template>
