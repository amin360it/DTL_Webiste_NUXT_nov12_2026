<script setup lang="ts">
useSeo({
  title: 'Manufacturing',
  description: 'DHAKATHAI ALCOMAXX PLC manufacturing - casting, extruding, tempering, anodizing, powder coating, wooden finish, quality inspection, packaging and warehousing.'
})

const flowSteps = [
  { num: '01', label: 'Ingot &amp; Furnace', sub: 'Billet Casting', to: '/manufacturing-billet-casting' },
  { num: '02', label: 'Casting (Billet)', sub: 'Billet Casting', to: '/manufacturing-billet-casting' },
  { num: '03', label: 'Extruding', sub: 'Extrusion Presses', to: '/manufacturing-extrusion-presses', featured: true },
  { num: '04', label: 'Tempering', sub: 'Aging Tempering', to: '/manufacturing-aging-tempering-oven' },
  { num: '05', label: 'Anodizing', sub: 'Surface Treatment', to: '/manufacturing-anodizing-section' },
  { num: '06', label: 'Powder Coating', sub: 'Surface Treatment', to: '/manufacturing-powder-coating-plant' },
  { num: '07', label: 'Wooden Finish', sub: 'Surface Treatment', to: '/manufacturing-wooden-finish' },
  { num: '08', label: 'Quality Inspection', sub: 'Quality Control', to: '/manufacturing-quality-inspection' },
  { num: '09', label: 'Packaging', sub: 'Finishing', to: '/manufacturing-packaging' },
  { num: '10', label: 'Warehousing', sub: 'Logistics', to: '/manufacturing-warehousing-and-delivery' },
  { num: 'ETP', label: 'Environment', sub: 'ETP', to: '/manufacturing-etp' },
  { num: 'VID', label: 'Video', sub: 'Watch', to: '/manufacturing', video: true, featured: true }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" style="background-image: url('/assets/img/work_flow_en.jpg');"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Manufacturing</div>
    <div class="container">
      <span class="kicker">Manufacturing</span>
      <h1>From Ingot To Finished Profile</h1>
      <p class="hero-sub">Complete vertically integrated aluminium manufacturing - the only company in Bangladesh covering every stage of the process in-house.</p>
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
          10 Process Stages
        </span>
      </div>
    </div>
  </section>

  <div class="mfg-subnav">
    <div class="container">
      <NuxtLink to="/manufacturing" class="">Overview</NuxtLink>
      <NuxtLink to="/manufacturing-billet-casting" class="">Casting</NuxtLink>
      <NuxtLink to="/manufacturing-extrusion-presses" class="">Extruding</NuxtLink>
      <NuxtLink to="/manufacturing-aging-tempering-oven" class="">Tempering</NuxtLink>
      <NuxtLink to="/manufacturing-anodizing-section" class="">Anodizing</NuxtLink>
      <NuxtLink to="/manufacturing-powder-coating-plant" class="">Powder Coating</NuxtLink>
      <NuxtLink to="/manufacturing-wooden-finish" class="">Wooden Finish</NuxtLink>
      <NuxtLink to="/manufacturing-quality-inspection" class="">Quality</NuxtLink>
      <NuxtLink to="/manufacturing-packaging" class="">Packaging</NuxtLink>
      <NuxtLink to="/manufacturing-warehousing-and-delivery" class="">Warehousing</NuxtLink>
      <NuxtLink to="/manufacturing-etp" class="">ETP</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="mfg-section-head">
        <span class="kicker">The Process</span>
        <h2>Manufacturing Process Flow</h2>
        <p>Every stage is executed with precision in our Ashulia factory — from billet casting to nationwide delivery, all under one roof.</p>
      </div>
      <div class="mfg-flow">
        <NuxtLink v-for="(step, i) in flowSteps" :key="i" :to="step.to" :class="['mfg-flow-step', { featured: step.featured }]">
          <span class="step-num">{{ step.num }}</span>
          <span class="step-label">{{ step.label }}</span>
          <span class="step-link-label">{{ step.video ? '▶ Watch' : 'Learn More' }}</span>
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
        <p>Ten specialized units working in sequence — from raw ingot to finished, packaged profile delivered across Bangladesh.</p>
      </div>
      <div class="mfg-units">
        <NuxtLink to="/manufacturing-billet-casting" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/processing v4a8ba.jpg" alt="Billet casting furnace">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 01–02</span></div>
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
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 03</span></div>
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
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 04</span></div>
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
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 05</span></div>
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
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 06</span></div>
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
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 07</span></div>
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
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 08</span></div>
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
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 09</span></div>
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
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Step 10</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Warehousing &amp; Delivery</h3>
            <p>Barcoded inventory stored in our warehouse, ready for delivery. A computerized inventory system and a network of transporters with covered and open trucks ensures quick delivery nationwide.</p>
            <span class="mfg-cta">Warehousing &amp; Delivery</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/manufacturing-etp" class="mfg-unit-card">
          <div class="mfg-unit-img">
            <img src="/assets/img/white3980.jpg" alt="Effluent treatment plant">
            <div class="mfg-unit-overlay"><span class="mfg-unit-tag">Environment</span></div>
          </div>
          <div class="mfg-unit-body">
            <h3>Effluent Treatment Plant</h3>
            <p>An environmentally conscious company ensuring no negative effect on the environment. Our modern wastewater treatment plant ensures discharge fully compliant with relevant laws — free of contaminants, oil, grease, acid, alkalis and toxic materials.</p>
            <span class="mfg-cta">ETP</span>
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
      <NuxtLink class="mfg-video-cta" :to="{ path: '/manufacturing', query: { v: '1' } }" @click.prevent="{}">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
        Play Manufacturing Video
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
/* scoped spacer — all visual styling is in manufacturing.css */
.mfg-hero .mfg-hero-bg {
  background-image: url('/assets/img/work_flow_en.jpg');
}
</style>