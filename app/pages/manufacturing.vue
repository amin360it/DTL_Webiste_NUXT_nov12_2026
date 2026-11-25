<script setup lang="ts">
useSeo({
  title: 'Manufacturing',
  description: 'DHAKATHAI ALCOMAXX PLC manufacturing - casting, extruding, tempering, anodizing, powder coating, wooden finish, quality inspection, packaging and warehousing.'
})

const { openVideo } = useModal()

const processCards = [
  { num: '01', title: 'Casting', desc: 'Molten aluminium is cast into ingots - the raw material for extrusion', to: '/manufacturing-billet-casting', page: 'Billet casting' },
  { num: '02', title: 'Ingot', desc: 'Primary aluminium cast into standard ingot sizes for processing', to: '/manufacturing-billet-casting', page: 'Billet casting' },
  { num: '03', title: 'Furnace', desc: 'Ingots are heated in furnaces to optimal extrusion temperature', to: '/manufacturing-billet-casting', page: 'Billet casting' },
  { num: '04', title: 'Billet', desc: 'Heated ingots cut into billets ready for extrusion press', to: '/manufacturing-billet-casting', page: 'Billet casting' },
  { num: '05', title: 'Extruding', desc: 'Billets forced through die to create aluminium profile', to: '/manufacturing-extrusion-presses', page: 'Extrusion presses' },
  { num: '06', title: 'Profile', desc: 'Extruded aluminium profiles cut to length and finished', to: '/manufacturing-extrusion-presses', page: 'Extrusion presses' },
  { num: '07', title: 'Tempering', desc: 'PLC controlled sensors with centrifugal aerodynamic system', to: '/manufacturing-aging-tempering-oven', page: 'Aging tempering oven' },
  { num: '08', title: 'Surface Treatment', desc: 'Anodizing, powder coating, and wooden finish applied for protection and aesthetics', to: '/manufacturing-anodizing-section', page: 'Anodizing section' },
  { num: '09', title: 'Anodizing', desc: 'Electrolytic passivation to increase corrosion resistance and finish', to: '/manufacturing-anodizing-section', page: 'Anodizing section' },
  { num: '10', title: 'Powder Coating', desc: 'Electrostatic powder coating for durable finish in multiple colors', to: '/manufacturing-powder-coating-plant', page: 'Powder coating plant' },
  { num: '11', title: 'Wooden Finish', desc: 'Wood grain patterns applied to aluminium surfaces', to: '/manufacturing-wooden-finish', page: 'Wooden finish' },
  { num: '12', title: 'Quality Inspection', desc: 'BS 1474, ASTM B221, BSTI and AAMA standards verification', to: '/manufacturing-quality-inspection', page: 'Quality inspection' },
  { num: '13', title: 'Packaging', desc: 'Poly-wrapped and shrink-wrapped with protective tape', to: '/manufacturing-packaging', page: 'Packaging' },
  { num: '14', title: 'Warehousing', desc: 'Bar-coded inventory and nationwide transporter network', to: '/manufacturing-warehousing-and-delivery', page: 'Warehousing & delivery' },
  { num: '15', title: 'ETP', desc: 'Effluent treatment plant - environmentally conscious wastewater treatment', to: '/manufacturing-etp', page: 'Effluent treatment plant' },
  { num: '16', title: 'Environment', desc: 'Effluent treatment plant', to: '/manufacturing-environment', page: 'Protecting our environment' }
]

const videos = [
  { id: '3kjoNHvzNrU', title: 'DHAKATHAI ALCOMAXX PLC - Manufacturing Process', label: 'Play Manufacturing Video' },
  { id: 'i0f2fi61ow0', title: 'DHAKATHAI ALCOMAXX PLC - Introduction in 3 Minutes', label: 'Company in 3 Minutes' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" style="background-image: url('/assets/img/work_flow_en.jpg');"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Manufacturing</div>
    <div class="container">
      <span class="kicker">Manufacturing</span>
      <h1>Manufacturer Of Quality Aluminium Profiles</h1>
      <p class="hero-sub">Casting · Ingot · Furnace · Billet · Extruding · Profile · Tempering · Surface Treatment · Anodizing · Powder Coating · Wooden Finish · Quality Inspection · Packaging · Warehousing · ETP</p>
      <div class="hero-meta">
        <span class="mfg-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          1997 — Serving Bangladesh Since
        </span>
        <span class="mfg-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          8 Extrusion Presses
        </span>
        <span class="mfg-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18M9 21V9"></path></svg>
          16 Process Stages
        </span>
        <button class="mfg-hero-video" @click="openVideo(videos[0].id, videos[0].title)">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>
          Watch the process
        </button>
      </div>
    </div>
  </section>

  <ManufacturingSubnav active="/manufacturing" />

  <section class="section">
    <div class="container">
      <div class="mfg-section-head">
        <span class="kicker">The Process</span>
        <h2>Manufacturing Process Flow</h2>
        <p>Every stage is executed with precision in our Ashulia factory — from billet casting to nationwide delivery, all under one roof.</p>
      </div>

      <figure class="mfg-flow-chart">
        <img src="/assets/img/aluminium-extrusion-flow-chart.webp" alt="Aluminium extrusion manufacturing process flow" loading="lazy">
        <figcaption>From raw aluminium to finished profile — the stages behind every extrusion.</figcaption>
      </figure>

      <div class="mfg-card-grid">
        <NuxtLink v-for="step in processCards" :key="step.num" :to="step.to" class="mfg-card">
          <span class="mfg-card-num" :data-odd="Number(step.num) % 2 === 1">
            <span class="mfg-card-num-inner">{{ step.num }}</span>
          </span>
          <h3 class="mfg-card-title" :title="step.title">{{ step.title }}</h3>
          <p class="mfg-card-desc" :title="step.desc">{{ step.desc }}</p>
          <span class="mfg-card-target">{{ step.page }}</span>
          <span class="mfg-card-stripe" aria-hidden="true"></span>
        </NuxtLink>
      </div>

      <div class="mfg-stats" style="margin-top: 48px;">
        <div class="mfg-stat">
          <span class="mfg-stat-num">1,300+</span>
          <span class="mfg-stat-label">Profiles in Catalogue</span>
        </div>
        <div class="mfg-stat">
          <span class="mfg-stat-num">2,110</span>
          <span class="mfg-stat-label">Product Lines (2026)</span>
        </div>
        <div class="mfg-stat">
          <span class="mfg-stat-num">64+</span>
          <span class="mfg-stat-label">Dealers Nationwide</span>
        </div>
        <div class="mfg-stat">
          <span class="mfg-stat-num">20–22%</span>
          <span class="mfg-stat-label">Bangladesh Market Share</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="mfg-section-head">
        <span class="kicker">Manufacturing Units</span>
        <h2>Explore Each Unit</h2>
        <p>Eleven specialized units working in sequence — from raw ingot to finished, packaged profile delivered across Bangladesh.</p>
      </div>
      <div class="mfg-units">
        <NuxtLink to="/manufacturing-billet-casting" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/processing v4a8ba.jpg" alt="Billet casting furnace">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 01–04</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Billet Casting Section</h3>
            <p>Continuous casting billet furnace with hot top technology. We use imported ingots to produce billets of various diameters — the foundation of every profile we make.</p>
            <span class="mfg-cta">Billet Casting</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-extrusion-presses" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/standard profiles pictureb1d6.jpg" alt="Extrusion presses">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 05–06</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Extrusion Presses</h3>
            <p>Six presses serving the most diverse customer needs. Billets of 3.5" to 7" diameter are pushed through dies using hot log shear technology for optimal production.</p>
            <span class="mfg-cta">Extrusion Presses</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-aging-tempering-oven" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/processing v4402x214871c.jpg" alt="Aging tempering oven">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 07</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Aging Tempering Oven</h3>
            <p>PLC-controlled sensors with a centrifugal aerodynamic system providing temperature stabilization and hardness up to 15 Webster — precision heat treatment for every profile.</p>
            <span class="mfg-cta">Aging Tempering</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-anodizing-section" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/anodizing-01-crop-u10966066d.png" alt="Anodizing section">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 09</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Anodizing Section</h3>
            <p>A fully automated plant with Pulse rectifiers giving a smooth surface finish with longevity. Anodized to AAMA standards with a film thickness of 10–15 microns.</p>
            <span class="mfg-cta">Anodizing</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-powder-coating-plant" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/powder coating-01bb4b.png" alt="Powder coating plant">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 10</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Powder Coating Plant</h3>
            <p>Bangladesh's first conveyor robotic coating plant. Pure Polyester powder coating baked to bond to the metal — functional, protective and decorative finishes in a limitless range of colours and textures.</p>
            <span class="mfg-cta">Powder Coating</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-wooden-finish" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/aaa_7790-crop-u11816cf24.png" alt="Wooden finish">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 11</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Wooden Finish</h3>
            <p>A perfect integration of aluminium's excellent properties with the natural appearance of wood — a wonderful combination of state-of-the-art technology and aesthetics. Available in Mahogany, Cherry, Cedar, Walnut and Cinnamon.</p>
            <span class="mfg-cta">Wooden Finish</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-quality-inspection" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/quality-01f0bf.png" alt="Quality inspection">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 12</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Quality Inspection</h3>
            <p>Quality inspectors at every finishing line ensure only profiles meeting the assured quality reach the packaging department. Manufactured to BS 1474, ASTM B221, BS 3987 and AAMA 611-98 Class 1.</p>
            <span class="mfg-cta">Quality Inspection</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-packaging" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/optim structural hollow sections5dc4.jpg" alt="Packaging">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 13</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Packaging</h3>
            <p>Standard poly-wrapped and premium shrink-wrapped packaging with protective tape. Every profile is carefully packed to arrive in perfect condition.</p>
            <span class="mfg-cta">Packaging</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-warehousing-and-delivery" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/supplier-truck-icon693d.jpg" alt="Warehousing and delivery">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 14</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Warehousing &amp; Delivery</h3>
            <p>Barcoded inventory stored in our warehouse, ready for delivery. A computerized inventory system and a network of transporters with covered and open trucks ensures quick delivery nationwide.</p>
            <span class="mfg-cta">Warehousing &amp; Delivery</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-etp" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/aaa_7530-crop-u119754477.png" alt="Effluent treatment plant">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 15</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Effluent Treatment Plant</h3>
            <p>Effluent treatment plant - environmentally conscious wastewater treatment</p>
            <span class="mfg-cta">ETP</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-environment" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/white3980.jpg" alt="Protecting our environment">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 16</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Protecting Our Environment</h3>
            <p>Effluent treatment plant</p>
            <span class="mfg-cta">Environment</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="mfg-video-section">
    <div class="container" style="position:relative;z-index:1;">
      <span class="kicker">Manufacturing Video</span>
      <h2>Watch Our Factory In Action</h2>
      <p>See the complete process — from billet casting to finished profile — inside the DHAKATHAI ALCOMAXX PLC factory in Ashulia.</p>
      <div class="mfg-video-actions">
        <button v-for="video in videos" :key="video.id" class="mfg-video-cta" :class="{ secondary: video !== videos[0] }" @click="openVideo(video.id, video.title)">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>
          {{ video.label }}
        </button>
      </div>
    </div>
  </section>
</template>
