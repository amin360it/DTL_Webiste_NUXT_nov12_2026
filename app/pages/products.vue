<script setup lang="ts">
useSeo({
  title: 'Products',
  description: 'Explore the full product range of DHAKATHAI ALCOMAXX PLC - architectural, industrial, furniture, hardware, electrical and automobile aluminium profiles.'
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Products</div>
    <div class="container">
      <span class="kicker">Products</span>
      <h1>Aluminium Profiles For Every Application</h1>
      <p>Comprehensive aluminium profiles tailored for windows, doors, LED lighting, ladders, pipes, curtain walls and much more - with premium finishes in anodized, powder coated and wood grain textures.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="grid grid-3">
        <div class="card">
          <div class="card-img"><img src="/assets/img/sliding-patio-doors-crop-u79740a29.png" alt="Architectural aluminium profiles"></div>
          <div class="card-body">
            <h3>Architectural Profiles</h3>
            <p>Sliding &amp; fixed frames, stick wall systems, semi-unitized series, curtain walls, doors, windows, louvers and structural angles.</p>
            <NuxtLink to="/products-architectural" class="btn btn-dark mt-2">View Range</NuxtLink>
          </div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/industrial-profile-icon6986.png" alt="Industrial aluminium profiles"></div>
          <div class="card-body">
            <h3>Industrial Profiles</h3>
            <p>In-house die facility, 7 extrusion press machines from 600-2000 tones, wall thickness from 0.45mm, cross sections up to 10&rdquo;.</p>
            <NuxtLink to="/products-industrial" class="btn btn-dark mt-2">View Range</NuxtLink>
          </div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/img_16890871.jpg" alt="Furniture aluminium profiles"></div>
          <div class="card-body">
            <h3>Furniture &amp; Office Partition</h3>
            <p>Office furniture, office partition, shower sections, vertical &amp; roller blind profiles and home furniture systems.</p>
            <NuxtLink to="/products-furniture" class="btn btn-dark mt-2">View Range</NuxtLink>
          </div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/hardware9278.jpg" alt="Hardware aluminium profiles"></div>
          <div class="card-body">
            <h3>Hardware &amp; Bazaar</h3>
            <p>Bazar sections, round &amp; corrugated pipes, ceiling tee, tower bolts, angles, unequal angles, U's, I beams and showcases.</p>
            <NuxtLink to="/products-hardware" class="btn btn-dark mt-2">View Range</NuxtLink>
          </div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/orgsize_174t8-led-tube-light-1200mm-3528-smdjpgfdc4.gif" alt="Electrical aluminium profiles"></div>
          <div class="card-body">
            <h3>Electrical</h3>
            <p>General heatsinks, LED light profiles, connectors, busbar, flat bar &amp; rod, and solar structure profiles.</p>
            <NuxtLink to="/products-electrical" class="btn btn-dark mt-2">View Range</NuxtLink>
          </div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/toyota_coaster-500x500c0f4.jpg" alt="Automobile aluminium profiles"></div>
          <div class="card-body">
            <h3>Automobile &amp; Railway</h3>
            <p>Coaster, decorative, railways, customized profiles and other special sections for transportation applications.</p>
            <NuxtLink to="/products-others" class="btn btn-dark mt-2">View Range</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-light">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Catalogue</span>
        <h2>Download Catalogues &amp; Brochures</h2>
        <p>Browse detailed drawings and specifications of our complete profile range.</p>
      </div>
      <div class="grid grid-3">
        <div class="card">
          <div class="card-img"><img src="/assets/img/dtl-catalog-2024-cover2b4d.png" alt="DTL Online Catalogue"></div>
          <div class="card-body">
            <h3>Dhakathai Alcomaxx PLC - Online Catalogue</h3>
            <p>Complete product catalogue (Sep 2026 edition).</p>
            <a href="/assets/pdfs/dtl-online-catalogue-sep-2026.pdf" class="btn btn-primary mt-2" target="_blank" rel="noopener">Download PDF</a>
          </div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/standard profiles pictureb1d6.jpg" alt="Architectural profile catalogue"></div>
          <div class="card-body">
            <h3>Individual Profile Drawings</h3>
            <p>65+ individual profile PDFs - windows, doors, stick walls, semi-unitized, hardware, furniture, electrical and more.</p>
            <NuxtLink to="/catalogue" class="btn btn-dark mt-2">Browse All Drawings</NuxtLink>
          </div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/dtl-new-plc-logo-2024---rgb-final-for-website29e1.png" alt="DTL prospectus"></div>
          <div class="card-body">
            <h3>IPO Prospectus</h3>
            <p>Draft prospectus and share distribution documents for investors.</p>
            <NuxtLink to="/investors-relation" class="btn btn-dark mt-2">Investor Documents</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 1024px) {
  .grid.grid-3 { grid-template-columns: 1fr; }
}
@media (max-width: 620px) {
  .grid.grid-3 > * { padding: 0 10px; }
}
</style>
