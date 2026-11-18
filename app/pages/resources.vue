<script setup lang="ts">
useSeo({
  title: 'Resources',
  description: 'DHAKATHAI ALCOMAXX PLC resources - catalogues, DIE drawings, investor documents, dealer network and company information in one place.'
})

type Resource = { label: string; to: string; desc: string; external?: boolean }
type Group = { title: string; kicker: string; items: Resource[] }

const groups: Group[] = [
  {
    title: 'Products & Catalogues',
    kicker: 'Browse and download',
    items: [
      { label: 'Online Catalogue', to: '/online-catalogue', desc: 'Search 2,110 aluminium profiles by die number, profile name or category.' },
      { label: 'DIE Catalogues & Brochures', to: '/catalogue', desc: '68 detailed profile drawings available as PDF downloads.' },
      { label: 'Full Catalogue (Sep 2026)', to: '/assets/pdfs/dtl-online-catalogue-sep-2026.pdf', desc: 'The complete DHAKATHAI ALCOMAXX PLC weight chart as a single PDF.' },
      { label: 'Product Ranges', to: '/products', desc: 'Architectural, industrial, furniture, hardware, electrical and automotive sections.' }
    ]
  },
  {
    title: 'Investor Documents',
    kicker: 'For shareholders',
    items: [
      { label: 'Investor Relations', to: '/investors-relation', desc: 'IPO documents, financial highlights and market parameters.' },
      { label: 'IPO Prospectus', to: '/assets/pdfs/prospectus-of-dhakathai-alcomaxx-plc.pdf', desc: 'The full prospectus filed for the initial public offering.' },
      { label: 'Corporate Governance', to: '/investors-relation#governance', desc: 'Governance framework, committees and compliance.' },
      { label: 'Board of Directors', to: '/board-of-directors', desc: 'Profiles of the nine members of the board.' }
    ]
  },
  {
    title: 'Sales Network & Partners',
    kicker: 'Where to buy',
    items: [
      { label: "Sales Network & Dealer's List", to: '/dealer-list', desc: 'Authorised dealers across all eight divisions of Bangladesh.' },
      { label: 'Enlisted Developers', to: '/enlisted-developer', desc: 'Developer companies enlisted with DHAKATHAI ALCOMAXX PLC.' },
      { label: 'Customer Services Team', to: '/contact', desc: 'Route-wise contacts for 182 customer service representatives.' }
    ]
  },
  {
    title: 'Company & Media',
    kicker: 'About the company',
    items: [
      { label: 'About Us', to: '/about', desc: 'Our story since 1997, our facilities and our certifications.' },
      { label: 'Manufacturing', to: '/manufacturing', desc: 'From billet casting to warehousing and delivery.' },
      { label: 'Latest News', to: '/news', desc: 'IPO filing, expos, dealer conferences and announcements.' },
      { label: 'Media Gallery', to: '/media', desc: 'Photos and videos from events, expos and the factory.' },
      { label: 'Career', to: '/career', desc: 'Current job openings at DHAKATHAI ALCOMAXX PLC.' }
    ]
  }
]
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Resources</div>
    <div class="container">
      <span class="kicker">Resources</span>
      <h1>Catalogues, Documents &amp; Downloads</h1>
      <p>Every catalogue, DIE drawing, investor document and company resource in one place.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="grid grid-4 res-highlights">
        <NuxtLink class="card res-tile" to="/catalogue">
          <div class="card-body">
            <span class="res-num">01</span>
            <h3>68 PDF Drawings</h3>
            <p>Architectural, hardware, furniture, industrial and electrical profile drawings.</p>
            <span class="res-cta">Open catalogue</span>
          </div>
        </NuxtLink>
        <NuxtLink class="card res-tile" to="/online-catalogue">
          <div class="card-body">
            <span class="res-num">02</span>
            <h3>2,110 Profiles</h3>
            <p>Browse the 2026 weight chart online, filterable by die and category.</p>
            <span class="res-cta">Search profiles</span>
          </div>
        </NuxtLink>
        <NuxtLink class="card res-tile" to="/investors-relation">
          <div class="card-body">
            <span class="res-num">03</span>
            <h3>Investor Centre</h3>
            <p>IPO prospectus, financial highlights and corporate governance.</p>
            <span class="res-cta">Investor relations</span>
          </div>
        </NuxtLink>
        <NuxtLink class="card res-tile" to="/dealer-list">
          <div class="card-body">
            <span class="res-num">04</span>
            <h3>Dealer Network</h3>
            <p>Authorised dealers and contacts in all eight divisions.</p>
            <span class="res-cta">Find a dealer</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="section section-light">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Resource library</span>
        <h2>Everything We Publish</h2>
        <p>Grouped by what you need, with the file or page it lives on.</p>
      </div>
      <div class="grid grid-2 res-groups">
        <div v-for="group in groups" :key="group.title" class="card res-group">
          <div class="card-body">
            <span class="res-kicker">{{ group.kicker }}</span>
            <h3>{{ group.title }}</h3>
            <ul class="res-list">
              <li v-for="item in group.items" :key="item.label">
                <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
                <span>{{ item.desc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="res-help">
        <div>
          <span class="kicker">Need something else?</span>
          <h2>Request a Document</h2>
          <p>If a drawing, certificate or technical data sheet is not listed here, our team can send it to you directly.</p>
        </div>
        <div class="res-help-actions">
          <a class="btn btn-primary" href="mailto:info@dhakathaibd.com">Email Us</a>
          <NuxtLink class="btn btn-dark" to="/contact">Contact Details</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.res-num {
  display: inline-block;
  font-family: var(--font-head);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: var(--accent);
  margin-bottom: 10px;
}
.res-tile {
  display: block;
  color: inherit;
}
.res-tile:hover { color: inherit; }
.res-cta {
  display: inline-block;
  margin-top: 14px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}
.res-kicker {
  display: block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}
.res-group h3 { margin-bottom: 18px; }
.res-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}
.res-list li {
  display: grid;
  gap: 3px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}
.res-list li:last-child { padding-bottom: 0; border-bottom: 0; }
.res-list a { font-weight: 700; }
.res-list span {
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--text-light);
}
.res-help {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  background: var(--primary);
  color: var(--white);
  border-radius: var(--radius-lg);
  padding: 40px 44px;
}
.res-help h2 { color: var(--white); margin: 10px 0 8px; }
.res-help p { color: rgba(242, 242, 242, 0.78); max-width: 560px; margin: 0; }
.res-help-actions { display: flex; gap: 12px; flex-wrap: wrap; }
@media (max-width: 820px) {
  .res-help { padding: 32px 24px; }
}
</style>
