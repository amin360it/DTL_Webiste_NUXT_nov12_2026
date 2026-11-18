<script setup lang="ts">
useSeo({
  title: 'Electrical Aluminium Profiles',
  description: 'Electrical aluminium profiles - general heatsink, LED light profiles, connectors, busbar, flat bar, rod and solar structure profiles.'
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/products">Products</NuxtLink> &raquo; Electrical</div>
    <div class="container">
      <span class="kicker">Products</span>
      <h1>Electrical Profiles</h1>
      <p>High-conductivity aluminium profiles for LED lighting, heatsinks, busbars and solar structures.</p>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
      <NuxtLink to="/products-architectural">Architectural</NuxtLink>
      <NuxtLink to="/products-industrial">Industrial</NuxtLink>
      <NuxtLink to="/products-furniture">Furniture</NuxtLink>
      <NuxtLink to="/products-hardware">Hardware &amp; Bazaar</NuxtLink>
      <NuxtLink to="/products-electrical" class="active">Electrical</NuxtLink>
      <NuxtLink to="/products-others">Automobile &amp; Railway</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Electrical</span>
        <h2>Electrical Profile Range</h2>
        <p>Profiles manufactured to exacting electrical conductivity quality standards.</p>
      </div>
      <div class="grid grid-4">
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>General Heatsink</h3><p>Thermal management profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/59-general-heatsink.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>LED Light Profiles</h3><p>LED housing &amp; diffuser channels.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/60-led-light-profiles.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Connector</h3><p>Electrical connector sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/61-connector.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Busbar, Flat Bar &amp; Rod</h3><p>Conductors &amp; distribution bars.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/62-busbar,-flat-bar---rod.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Solar Structure Profiles</h3><p>Solar panel mounting structures.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/63-solar-structure-profiles.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/orgsize_174t8-led-tube-light-1200mm-3528-smdjpgfdc4.gif" alt="LED light profiles"></div>
          <div class="card-body"><h3>LED Lights</h3><p>Complete LED lighting sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/60-led-light-profiles.pdf" target="_blank">Drawing</a></div>
        </div>
      </div>
    </div>
  </section>

  <ProductProfiles
    bucket="electrical"
    title="Electrical Profile Database"
    intro="LED, busbar, solar and heat-sink sections."
  />
</template>

<style scoped>
.section .grid .card { display: flex; flex-direction: column; }
.section .grid .card-body { display: flex; flex-direction: column; flex: 1; }
.section .grid .card-body h3 { min-height: 2.3em; }
.section .grid .card-body p { min-height: 3.3em; }
.section .grid .card-body .btn { margin-top: auto; }
@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: 1fr 1fr !important; }
}
@media (max-width: 620px) {
  .grid-4 { grid-template-columns: 1fr !important; }
}
</style>