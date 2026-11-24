<script setup lang="ts">
useSeo({
  title: 'Effluent Treatment Plant (ETP)',
  description: 'Explore our advanced Effluent Treatment Plant (ETP), ensuring eco-friendly operations by treating wastewater to meet environmental standards.'
})

const heroBg = '/assets/img/img_22043baf.jpg'

const facts = [
  { num: '01', label: 'Zero negative environmental impact' },
  { num: '02', label: 'Full compliance with relevant laws' },
  { num: '03', label: 'Free of contaminants, solid waste, oil & grease' },
  { num: '04', label: 'No acid, alkalis, or toxic materials' },
  { num: '05', label: 'Arsenic & other metals free' },
  { num: '06', label: 'Most modern wastewater treatment plant' }
]

const gallery = [
  { src: '/assets/img/aaa_7530-crop-u119754477.png', alt: 'Effluent treatment plant interior' },
  { src: '/assets/img/img_2207-crop-u62118fff8.png', alt: 'ETP treatment process tanks' },
  { src: '/assets/img/white3980.jpg', alt: 'Modern ETP wastewater treatment plant' }
]
</script>

<template>
  <section class="page-hero mfg-hero">
    <div class="mfg-hero-bg" :style="`background-image: url('${heroBg}')`"></div>
    <div class="mfg-hero-overlay"></div>
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/manufacturing">Manufacturing</NuxtLink> &raquo; ETP</div>
    <div class="container">
      <span class="kicker">Protecting Our Environment</span>
      <h1>EFFLUENT TREATMENT PLANT</h1>
      <p class="hero-sub">DHAKATHAI ALCOMAXX PLC is a very environmentally conscious company — we ensure there is no negative effect of our factory on the environment, taking special measures so no environmentally unacceptable effluence is discarded.</p>
      <div class="hero-meta">
        <span class="mfg-badge">Zero Negative Environmental Impact</span>
        <span class="mfg-badge">Full Legal Compliance</span>
        <span class="mfg-badge">Modern Wastewater Treatment</span>
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
      <NuxtLink to="/manufacturing-warehousing-and-delivery">Warehousing</NuxtLink>
      <NuxtLink to="/manufacturing-etp" class="active">ETP</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="mfg-page-body">
        <div class="mfg-copy">
          <span class="kicker">Effluent Treatment Plant (ETP)</span>
          <p>DHAKATHAI ALCOMAXX PLC is a very environmentally conscious company and ensures that there is no negative effect of our factory on the environment. We take special measures to make sure that no environmentally unacceptable effluence is discarded into the environment.</p>
          <p>The water we drain out is always in full compliance with the relevant laws and is free of contaminants, solid waste, oil, grease, acid, alkalis and other toxic materials such as arsenic or other metals. This whole process is possible through our most modern wastewater treatment plant.</p>
          <p>Every stage of aluminium manufacturing — casting, extrusion, anodizing and powder coating — generates process water that must be managed responsibly. Our ETP treats this water through a sequence of physical, chemical and filtration stages, ensuring that only clean, fully compliant water leaves the factory premises.</p>
          <div class="mfg-facts">
            <div v-for="f in facts" :key="f.num" class="mfg-fact">
              <span class="mfg-fact-num">{{ f.num }}</span>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="mfg-figure">
          <picture>
            <source media="(min-width: 768px)" srcset="/assets/img/aaa_7530-crop-u119754477.png">
            <img src="/assets/img/aaa_7530-crop-u119754477.png" alt="Effluent treatment plant at the DHAKATHAI ALCOMAXX factory" loading="lazy">
          </picture>
          <figcaption class="mfg-cap">Effluent treatment plant at the DHAKATHAI ALCOMAXX factory</figcaption>
        </div>
      </div>

      <h2 class="mfg-label">Key Environmental Commitments</h2>
      <div class="mfg-strip">
        <ul>
          <li v-for="img in gallery.slice(1)" :key="img.src">
            <img :src="img.src" :alt="img.alt" loading="lazy">
          </li>
        </ul>
      </div>

      <div class="mfg-grid mt-4">
        <div class="mfg-grid-item" v-for="(f, i) in facts" :key="f.num">
          <span class="mfg-grid-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <span>{{ f.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mfg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 24px;
}
.mfg-grid-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--text);
}
.mfg-grid-num {
  flex: 0 0 40px;
  height: 40px;
  background: var(--accent);
  color: #0d0d0d;
  font-weight: 700;
  font-size: .9rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
