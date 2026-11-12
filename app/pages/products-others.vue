<script setup lang="ts">
useSeo({
  title: 'Automotive & Railway Aluminium Profiles',
  description: 'Automobile and railway aluminium profiles - coaster, decorative, railways, stair nosing and customized profiles by DHAKATHAI ALCOMAXX PLC.'
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/products">Products</NuxtLink> &raquo; Others</div>
    <div class="container">
      <span class="kicker">Products</span>
      <h1>Automobile &amp; Railway Profiles</h1>
      <p>Specialized profiles for transportation and customized applications.</p>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
      <NuxtLink to="/products-architectural">Architectural</NuxtLink>
      <NuxtLink to="/products-industrial">Industrial</NuxtLink>
      <NuxtLink to="/products-furniture">Furniture</NuxtLink>
      <NuxtLink to="/products-hardware">Hardware &amp; Bazaar</NuxtLink>
      <NuxtLink to="/products-electrical">Electrical</NuxtLink>
      <NuxtLink to="/products-others" class="active">Automobile &amp; Railway</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Others</span>
        <h2>Specialized Profile Range</h2>
      </div>
      <div class="grid grid-4">
        <div class="card">
          <div class="card-img"><img src="/assets/img/toyota_coaster-500x500c0f4.jpg" alt="Coaster profiles"></div>
          <div class="card-body"><h3>Coaster</h3><p>Vehicle trim profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/53-automobile-section.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <div class="card-body"><h3>Decorative</h3><p>Decorative trims &amp; sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/65-others.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <div class="card-body"><h3>Railways</h3><p>Railway component profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/65-others.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <div class="card-body"><h3>Stair Nosing</h3><p>Stair edge sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/57-stair-nosing.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <div class="card-body"><h3>Customized Profile</h3><p>Custom-designed profiles per drawing.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/64-customized-profile.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/tata-cng-hybrid-bus-29383.jpg" alt="Automobile profiles"></div>
          <div class="card-body"><h3>Automobile Section</h3><p>Bus &amp; vehicle body profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/53-automobile-section.pdf" target="_blank">Drawing</a></div>
        </div>
      </div>
    </div>
  </section>

  <ProductProfiles
    bucket="automobile"
    title="Automobile &amp; Railway Profiles"
    intro="Sections for buses, coasters, railway and other vehicles."
  />
</template>
