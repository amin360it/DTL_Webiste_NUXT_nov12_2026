<script setup lang="ts">
useHead({
  title: 'Furniture Aluminium Profiles',
  meta: [{ name: 'description', content: 'Furniture aluminium profiles - office furniture, office partition, shower, vertical blind and roller blind systems by DHAKATHAI ALCOMAXX PLC.' }]
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/products">Products</NuxtLink> &raquo; Furniture</div>
    <div class="container">
      <span class="kicker">Products</span>
      <h1>Furniture, Blinds &amp; Partition</h1>
      <p>Elegant aluminium profiles for office furniture, partitions, blinds and shower systems.</p>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
      <NuxtLink to="/products-architectural">Architectural</NuxtLink>
      <NuxtLink to="/products-industrial">Industrial</NuxtLink>
      <NuxtLink to="/products-furniture" class="active">Furniture</NuxtLink>
      <NuxtLink to="/products-hardware">Hardware &amp; Bazaar</NuxtLink>
      <NuxtLink to="/products-electrical">Electrical</NuxtLink>
      <NuxtLink to="/products-others">Automobile &amp; Railway</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="grid grid-2" style="align-items:center;">
        <img :src="'/assets/img/02 furniture - office partition profile (3.html'" alt="Office partition" onerror="this.style.display='none'">
        <div>
          <span class="kicker">Furniture &amp; Partition</span>
          <h2>Modern Workspace Solutions</h2>
          <p>Our furniture and partition profiles combine elegant design with aluminium's strength and durability, creating modern workspaces, stylish blinds and functional shower systems.</p>
          <ul class="check-list">
            <li>Office furniture systems</li>
            <li>Office partition profiles</li>
            <li>Shower sections</li>
            <li>Vertical blind profiles</li>
            <li>Roller blind profiles</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-light">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Categories</span>
        <h2>Furniture Profile Range</h2>
      </div>
      <div class="grid grid-4">
        <div class="card">
          <div class="card-img"><img src="/assets/img/img_16890871.jpg" alt="Office furniture"></div>
          <div class="card-body"><h3>Office Furniture</h3><p>Desk, cabinet and workstation profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/46-01-office-furniture.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/aluminum-portable-exhibition-stand-display-modular-showcase-cabinet-gc-cdc-9b57.jpg" alt="Office partition"></div>
          <div class="card-body"><h3>Office Partition</h3><p>Modular partition systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/46-02-office-partition.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/aluminium-venetian-blinds-01-crop-u835124b1.png" alt="Vertical blind"></div>
          <div class="card-body"><h3>Vertical &amp; Roller Blind</h3><p>Blind rail and control profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/51-vertical---roller-blind.pdf" target="_blank">Drawing</a></div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/img_1491-crop-u13435cf87.png" alt="Bathroom shelf"></div>
          <div class="card-body"><h3>Bathroom Shelf &amp; Shower</h3><p>Bathroom and shower profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/49-bathroom-shelf.pdf" target="_blank">Drawing</a></div>
        </div>
      </div>
    </div>
  </section>

  <ProductProfiles
    bucket="furniture"
    title="Furniture &amp; Office Partition Profiles"
    intro="Office partitions, wardrobes, vertical &amp; roller blinds and bathroom profiles."
  />
</template>
