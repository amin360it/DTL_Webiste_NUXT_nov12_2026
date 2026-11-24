<script setup lang="ts">
useSeo({
  title: 'Warehousing & Delivery',
  description: 'Quick and reliable delivery across Bangladesh with barcoded inventory and efficient storage for all your aluminium profiles.'
})

const heroBg = '/assets/img/aaa_2977-topaz-sharpen-color-upscale-2x-bluecb78.jpg'

const facts = [
  { num: '01', label: 'Barcoded inventory' },
  { num: '02', label: 'Computerized storage' },
  { num: '03', label: 'Covered & open trucks' },
  { num: '04', label: 'Nationwide network' },
  { num: '05', label: 'Quick nationwide delivery' }
]

const gallery = [
  { src: '/assets/img/aaa_7697-crop-u11877caad.png', alt: 'Finished goods warehousing and delivery' },
  { src: '/assets/img/supplier-truck-icon693d.jpg', alt: 'Transport fleet covering Bangladesh' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" style="background-image: url('/assets/img/aaa_2977-topaz-sharpen-color-upscale-2x-bluecb78.jpg');"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; Warehousing &amp; Delivery</div>
    <div class="container">
      <span class="kicker">Step 10 — Logistics</span>
      <h1>Warehousing &amp; Delivery</h1>
      <p class="hero-sub">Barcoded inventory in our warehouse, a computerized system managing stock, and a network of transporters reaching every corner of Bangladesh.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Barcoded Inventory</span>
        <span class="mfg-badge">Computerized System</span>
        <span class="mfg-badge">Nationwide Coverage</span>
      </div>
    </div>
  </section>

  <div class="mfg-subnav">
    <div class="container">
      <NuxtLink to="/manufacturing">Overview</NuxtLink>
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
      <div class="mfg-page-body">
        <div class="mfg-copy">
          <span class="kicker">Finished Goods Warehousing and Delivery</span>
          <p>The wrapped profiles are barcoded and stored in the warehouse, ready for delivery.</p>
          <p>Our computerized inventory system and a network of transporters with covered and open trucks ensures quick delivery to our customers all over Bangladesh.</p>
          <p>Every profile carries a unique barcode the moment it leaves the packaging line — scanned into our system so we always know exactly what is in stock, where it is located, and when it was dispatched. This means accurate quotations, faster order fulfilment and complete traceability from factory to customer site.</p>
          <p>Our transporter network covers every division of Bangladesh — Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur and Mymensingh — with both covered trucks for sensitive profiles and open trucks for standard shipments.</p>
          <div class="mfg-facts">
            <div v-for="f in facts" :key="f.num" class="mfg-fact">
              <span class="mfg-fact-num">{{ f.num }}</span>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="mfg-figure">
          <picture>
            <source media="(min-width: 768px)" srcset="/assets/img/aaa_7697-crop-u11877caad.png">
            <img src="/assets/img/aaa_7697-crop-u11877caad.png" alt="Finished goods warehousing and delivery" loading="lazy">
          </picture>
          <figcaption class="mfg-cap">Finished goods warehousing and delivery</figcaption>
        </div>
      </div>

      <h2 class="mfg-label">The Warehouse Floor</h2>
      <div class="mfg-strip">
        <ul>
          <li v-for="img in gallery.slice(1)" :key="img.src">
            <img :src="img.src" :alt="img.alt" loading="lazy">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
