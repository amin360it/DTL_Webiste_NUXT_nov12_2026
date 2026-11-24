<script setup lang="ts">
useSeo({
  title: 'Hardware Aluminium Profiles',
  description: 'Hardware and bazaar aluminium profiles - bazar section, round & corrugated pipe, ceiling tee, tower bolt, angles, U channels, I beams and showcases.'
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/products">Products</NuxtLink> &raquo; Hardware</div>
    <div class="container">
      <span class="kicker">Products</span>
      <h1>Hardware &amp; Bazaar</h1>
      <p>Versatile hardware profiles for bazar construction, fabrication and everyday applications.</p>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
      <NuxtLink to="/products-architectural">Architectural</NuxtLink>
      <NuxtLink to="/products-industrial">Industrial</NuxtLink>
      <NuxtLink to="/products-furniture">Furniture</NuxtLink>
      <NuxtLink to="/products-hardware" class="active">Hardware &amp; Bazaar</NuxtLink>
      <NuxtLink to="/products-electrical">Electrical</NuxtLink>
      <NuxtLink to="/products-others">Automobile &amp; Railway</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Hardware &amp; Bazaar</span>
        <h2>Hardware Profile Range</h2>
      </div>
      <div class="grid grid-4">
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Bazar Section</h3><p>Market construction sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/45-bazar-section.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Round &amp; Corrugated Pipe</h3><p>Round &amp; corrugated pipes.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/44-round---corrugated-pipe.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Ceiling Tee</h3><p>Ceiling grid systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/55-t-section.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Tower Bolt</h3><p>Security bolt sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/56-tower-bolt.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card"><CardPlaceholder /><div class="card-body"><h3>Sandwich Panel Fittings</h3><p>Panel connection systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/58-sandwich-panel-fittings.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Angles</h3><p>Equal &amp; unequal angles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/21-angles.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Unequal Angles</h3><p>Unequal angle sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/21-angles.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Unequal U&rsquo;s</h3><p>Unequal U channels.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/22-u-channel.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>I Beam</h3><p>I beam structural sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/23-box.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>E Channels</h3><p>E channel sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/22-u-channel.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>Showcase</h3><p>Showcase display profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/45-bazar-section.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <CardPlaceholder />
          <div class="card-body"><h3>U&rsquo;s</h3><p>Standard U channels.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/22-u-channel.pdf" target="_blank">Drawing</a></div>
        </div>
      </div>
    </div>
  </section>

  <ProductProfiles
    bucket="hardware"
    title="Hardware &amp; Bazaar Profiles"
    intro="Bazaar fittings, tower bolts, handles, locks and connectors."
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