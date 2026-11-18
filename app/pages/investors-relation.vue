<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

useSeo({
  title: 'Investor Relations',
  description: 'Investor relations - IPO prospectus, share distribution and corporate governance of DHAKATHAI ALCOMAXX PLC.'
})

const financials = [
  { prefix: 'Tk', value: 30, decimals: 0, suffix: 'cr', label: 'IPO Raising Target', note: 'Tk30 crore raised for expansion' },
  { value: 3, decimals: 0, suffix: 'cr', prefix: '', label: 'Shares to Issue', note: 'Fixed price method' },
  { prefix: 'Tk', value: 213.96, decimals: 2, suffix: 'cr', label: 'Revenue (Jul-Dec 2023)', note: 'Reported in the IPO application' },
  { prefix: 'Tk', value: 7.35, decimals: 2, suffix: 'cr', label: 'Net Profit After Tax', note: 'July-December 2023' },
  { prefix: 'Tk', value: 0.55, decimals: 2, suffix: '', label: 'EPS', note: 'Earnings per share' },
  { prefix: 'Tk', value: 11.32, decimals: 2, suffix: '', label: 'NAV Per Share', note: 'Net asset value per share' }
]

const ipoDocs = [
  {
    tag: 'IPO Document',
    title: 'Draft Prospectus of IPO',
    desc: 'Full draft prospectus submitted to the Bangladesh Securities and Exchange Commission (BSEC).',
    file: '/assets/pdfs/prospectus-of-dhakathai-alcomaxx-plc.pdf',
    size: '18.6 MB',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg>'
  },
  {
    tag: 'Shareholding',
    title: 'List of Share Distribution',
    desc: 'Share distribution to the employees and others.',
    file: '/assets/pdfs/list-of-share-distribution-to-the-employees-and-others.pdf',
    size: '0.3 MB',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  {
    tag: 'Catalogue',
    title: 'Online Catalogue',
    desc: 'Complete product catalogue (Sep 2026 edition).',
    file: '/assets/pdfs/dtl-online-catalogue-sep-2026.pdf',
    size: '10.1 MB',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'
  }
]

const marketFacts = [
  {
    title: 'IPO Fund Utilization',
    details: 'Tk19 crore for expansion, Tk5 crore working capital, Tk4.71 crore loan repayment, Tk1.28 crore IPO expenses',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15h3v4H7zM13 9h3v10h-3zM19 5h0"/><circle cx="19" cy="5" r="1"/></svg>'
  },
  {
    title: 'Issue Method',
    details: 'Fixed price method - 3 crore shares',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/></svg>'
  },
  {
    title: 'Issue Manager',
    details: 'Prime Bank Investment Limited',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 12h2M13 12h2M9 16h2M13 16h2"/></svg>'
  },
  {
    title: 'Market Share',
    details: 'Approximately 20% - 22% of the local aluminium profiles market',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 15.9A10 10 0 1 1 8.1 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>'
  },
  {
    title: 'Market Demand',
    details: 'Nearly 60,000 tonnes of aluminium profiles annually, growing 15% - 20% per year',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>'
  },
  {
    title: 'Local Supply',
    details: '10 local companies satisfy 90% of domestic demand; remaining 10% imported from China',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h13v13H1zM14 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>'
  },
  {
    title: 'Industry Investment',
    details: "Approximately Tk1,000 crore invested in Bangladesh's aluminium extrusion sector",
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 12h20"/></svg>'
  },
  {
    title: 'Employment',
    details: 'Approximately 30,000 people employed by the sector',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  }
]

const docIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>'
const chartIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>'
const newsIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-8v18l-18-8v-2z"/><path d="M7 12v7a2 2 0 0 0 4 0v-5"/></svg>'
const boardIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 11h1m4 0h1M9 15h1m4 0h1"/></svg>'
const calendarIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/></svg>'
const moneyIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.01M18 12h.01"/></svg>'
const mailIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'

const investorResources = [
  { name: 'Prospectus', type: 'PDF', href: '/assets/pdfs/prospectus-of-dhakathai-alcomaxx-plc.pdf', icon: docIcon, file: true },
  { name: 'IPO Application Result', type: 'Announcement', href: '/news', icon: newsIcon },
  { name: 'IPO Fund Utilization', type: 'Highlights', href: '#glance', icon: chartIcon },
  { name: 'Financial Report', type: 'Highlights', href: '#glance', icon: chartIcon },
  { name: 'Price Sensitive Information', type: 'Announcement', href: '/news', icon: newsIcon },
  { name: 'Corporate Governance Compliance', type: 'PDF', href: '/assets/pdfs/prospectus-of-dhakathai-alcomaxx-plc.pdf', icon: boardIcon, file: true },
  { name: 'Directors Report', type: 'Announcement', href: '/news', icon: newsIcon },
  { name: 'Annual Report', type: 'Announcement', href: '/news', icon: newsIcon },
  { name: 'Details of Shareholding', type: 'PDF', href: '/assets/pdfs/list-of-share-distribution-to-the-employees-and-others.pdf', icon: docIcon, file: true },
  { name: 'Extraordinary General Meeting', type: 'Announcement', href: '/news', icon: calendarIcon },
  { name: 'Annual General Meeting', type: 'Announcement', href: '/news', icon: calendarIcon },
  { name: 'Dividend', type: 'Announcement', href: '/news', icon: moneyIcon },
  { name: 'Investors Contact', type: 'Contact', href: '/contact#investor-relations', icon: mailIcon }
]

const govGrid = ref<HTMLElement | null>(null)
const govInView = ref(false)

const grid = ref<HTMLElement | null>(null)
const finInView = ref(false)
const finDisplay = ref(financials.map((f) => f.value))
let observer: IntersectionObserver | null = null
let frame = 0

const format = (v: number, decimals: number) =>
  v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const shown = computed(() => finDisplay.value.map((v, i) => format(v, financials[i].decimals)))

function countUp() {
  const duration = 1400
  finDisplay.value = financials.map(() => 0)
  const start = performance.now()
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - p, 3)
    finDisplay.value = financials.map((f) => f.value * eased)
    if (p < 1) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!grid.value) return
  if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finInView.value = true
    return
  }
  observer = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      finInView.value = true
      countUp()
      observer?.disconnect()
    }
  }, { threshold: 0.25 })
  observer.observe(grid.value)
})

onMounted(() => {
  if (!govGrid.value) return
  if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    govInView.value = true
    return
  }
  const govObserver = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      govInView.value = true
      govObserver.disconnect()
    }
  }, { threshold: 0.15 })
  govObserver.observe(govGrid.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Investors Relation</div>
    <div class="container">
      <span class="kicker">Investor Relations</span>
      <h1>Financial Insights &amp; Governance</h1>
      <p>Transparent corporate governance, IPO documents and investor information.</p>
      <nav class="ir-jump" aria-label="Investor relations sections">
        <a href="#ipo">IPO documents</a>
        <a href="#glance">Financial highlights</a>
        <a href="#governance">Governance</a>
      </nav>
    </div>
  </section>

  <section id="ipo" class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">IPO Documents</span>
        <h2>Initial Public Offering</h2>
        <p>Dhakathai Alcomaxx PLC has filed for raising Tk30 crore through an IPO to expand its business and meet growing demand.</p>
      </div>
      <div class="ipo-grid">
        <article v-for="doc in ipoDocs" :key="doc.title" class="ipo-card">
          <div class="ipo-head">
            <div class="ipo-icon" v-html="doc.icon" />
            <div>
              <span class="ipo-tag">{{ doc.tag }}</span>
              <h3>{{ doc.title }}</h3>
            </div>
          </div>
          <p class="ipo-desc">{{ doc.desc }}</p>
          <div class="ipo-meta">
            <span>PDF</span>
            <span class="ipo-dot" aria-hidden="true"></span>
            <span>{{ doc.size }}</span>
          </div>
          <div class="ipo-actions">
            <a class="btn btn-primary" :href="doc.file" target="_blank" rel="noopener">Download</a>
            <a class="ipo-view" :href="doc.file" target="_blank" rel="noopener">View online &#8250;</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-light" id="glance">
    <div class="container">
      <div class="section-head">
        <span class="kicker">At A Glance</span>
        <h2>Company Financial Highlights</h2>
        <p>Reported figures from the IPO application (July-December 2023 vs 2022).</p>
      </div>
      <div ref="grid" class="fin-grid" :class="{ 'fin-in': finInView }">
        <article
          v-for="(f, i) in financials"
          :key="f.label"
          class="fin-card"
          :style="{ transitionDelay: (i * 90) + 'ms' }"
        >
          <span class="fin-index">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="fin-num">
            <span v-if="f.prefix" class="fin-affix">{{ f.prefix }}</span>{{ shown[i] }}<span v-if="f.suffix" class="fin-suffix">{{ f.suffix }}</span>
          </div>
          <h3 class="fin-label">{{ f.label }}</h3>
          <p class="fin-note">{{ f.note }}</p>
          <span class="fin-bar" aria-hidden="true"></span>
        </article>
      </div>
      <div class="mf-head">
        <h3>IPO &amp; market parameters</h3>
        <span>{{ marketFacts.length }} parameters</span>
      </div>
      <div class="mf-grid" :class="{ 'is-in': finInView }">
        <article
          v-for="(f, i) in marketFacts"
          :key="f.title"
          class="mf-card"
          :style="{ transitionDelay: (i * 70) + 'ms' }"
        >
          <div class="mf-icon" v-html="f.icon" />
          <div class="mf-body">
            <span class="mf-index">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ f.title }}</h3>
            <p>{{ f.details }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section" id="governance">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Corporate Governance</span>
        <h2>Governance &amp; Investor Resources</h2>
      </div>
      <div ref="govGrid" class="gov-grid" :class="{ 'is-in': govInView }">
        <article class="gov-card" style="--i: 0">
          <span class="gov-index">01</span>
          <div class="gov-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 11h1m4 0h1M9 15h1m4 0h1"/></svg></div>
          <h3>Corporate Governance Compliance</h3>
          <p>Committed to best practices in corporate governance.</p>
          <a class="gov-link" href="/assets/pdfs/prospectus-of-dhakathai-alcomaxx-plc.pdf" target="_blank" rel="noopener">
            <span>View Prospectus</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </article>
        <article class="gov-card" style="--i: 1">
          <span class="gov-index">02</span>
          <div class="gov-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></div>
          <h3>Financial Reports</h3>
          <p>Annual reports, directors report and financial disclosures.</p>
          <a class="gov-link" href="#glance">
            <span>Financial Highlights</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </article>
        <article class="gov-card" style="--i: 2">
          <span class="gov-index">03</span>
          <div class="gov-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg></div>
          <h3>Board of Directors</h3>
          <p>Meet our experienced leadership team.</p>
          <NuxtLink class="gov-link" to="/board-of-directors">
            <span>View Board</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </NuxtLink>
        </article>
        <article class="gov-card" style="--i: 3">
          <span class="gov-index">04</span>
          <div class="gov-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.2H22l-6 4.5 2.3 7.3-6.3-4.6-6.3 4.6L8 13.7 2 9.2h7.6z"/></svg></div>
          <h3>IPO Application Result</h3>
          <p>Results and announcements for applicants.</p>
          <NuxtLink class="gov-link" to="/news">
            <span>IPO Announcement</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </NuxtLink>
        </article>
        <article class="gov-card" style="--i: 4">
          <span class="gov-index">05</span>
          <div class="gov-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <h3>Dividend &amp; Meetings</h3>
          <p>Annual &amp; extraordinary general meetings, dividends and AGM announcements.</p>
          <NuxtLink class="gov-link" to="/news">
            <span>Company Announcements</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </NuxtLink>
        </article>
        <article class="gov-card" style="--i: 5">
          <span class="gov-index">06</span>
          <div class="gov-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7z"/><path d="M12 8v5M12 16h.01"/></svg></div>
          <h3>Price Sensitive Information</h3>
          <p>Timely disclosure of price sensitive information.</p>
          <NuxtLink class="gov-link" to="/contact#investor-relations">
            <span>Investors Contact</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </NuxtLink>
        </article>
      </div>
      <div class="gov-docs">
        <div class="gov-docs-head">
          <div>
            <span class="gov-docs-kicker">Resources</span>
            <h3>Investor Resources</h3>
          </div>
          <span class="gov-docs-count">{{ investorResources.length }} items</span>
        </div>
        <ul>
          <li v-for="r in investorResources" :key="r.name">
            <a v-if="r.file" :href="r.href" target="_blank" rel="noopener">
              <span class="gov-doc-icon" v-html="r.icon" />
              <span class="gov-doc-name">{{ r.name }}<em>{{ r.type }}</em></span>
            </a>
            <NuxtLink v-else :to="r.href">
              <span class="gov-doc-icon" v-html="r.icon" />
              <span class="gov-doc-name">{{ r.name }}<em>{{ r.type }}</em></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section ir-contact">
    <div class="container">
      <div class="ir-box">
        <div>
          <span class="kicker">Investor Contact</span>
          <h2>Questions about the IPO or our filings?</h2>
          <p>Reach us for shareholding, dividend and disclosure queries.</p>
        </div>
        <div class="ir-box-actions">
          <a class="btn btn-primary" href="mailto:info@dhakathaibd.com">Email investors</a>
          <a class="ir-tel" href="tel:+8801708814972">+88 01708-814972</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fin-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
  margin-top: 44px;
}
.fin-card {
  position: relative;
  background: var(--white);
  border: 1px solid rgba(11, 31, 58, 0.07);
  border-radius: var(--radius-lg);
  padding: 34px 30px 30px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}
.fin-in .fin-card {
  opacity: 1;
  transform: none;
}
.fin-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;   background: radial-gradient(circle at 88% 0%, rgba(5, 166, 75, 0.1), transparent 62%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.fin-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);   border-color: rgba(5, 166, 75, 0.32);
}
.fin-card:hover::after { opacity: 1; }

.fin-index {
  position: absolute;
  top: 22px;
  right: 24px;
  font-family: var(--font-head);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--silver);
  transition: color 0.35s ease;
}
.fin-card:hover .fin-index { color: var(--accent); }

.fin-num {
  font-family: var(--font-head);
  font-size: clamp(1.9rem, 3.2vw, 2.65rem);
  font-weight: 800;
  line-height: 1.05;
  color: var(--primary);
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}
.fin-affix {
  font-size: 0.52em;
  font-weight: 700;
  margin-right: 2px;
  color: var(--accent);
  vertical-align: 0.22em;
}
.fin-suffix {
  font-size: 0.52em;
  font-weight: 700;
  margin-left: 2px;
  color: var(--text-light);
  letter-spacing: 0.02em;
}
.fin-label {
  margin: 14px 0 0;
  font-family: var(--font-head);
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary);
  line-height: 1.35;
}
.fin-note {
  margin: 8px 0 0;
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.55;
}
.fin-bar {
  display: block;
  margin-top: 22px;
  height: 4px;
  width: 34px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.fin-card:hover .fin-bar { width: 74px; }

#ipo,
#glance,
#governance { scroll-margin-top: 110px; }

.ir-jump { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.ir-jump a {
  display: inline-flex;
  align-items: center;
  padding: 9px 17px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(255, 255, 255, 0.07);
  color: #e8eff7;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}
.ir-jump a:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  transform: translateY(-2px);
}

.mf-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-top: 44px;
  padding: 30px 0 18px;
  border-top: 1px solid rgba(11, 31, 58, 0.09);
}
.mf-head h3 {
  margin: 0;
  font-family: var(--font-head);
  font-size: 1.05rem;
  color: var(--primary);
}
.mf-head span {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--silver);
}

.mf-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 0;
}
.mf-card {
  position: relative;
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 16px;
  align-items: start;
  padding: 22px 24px;
  background: var(--white);
  border: 1px solid rgba(11, 31, 58, 0.08);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s ease, border-color 0.35s ease;
}
.mf-grid.is-in .mf-card { opacity: 1; transform: none; }
.mf-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.mf-card:hover {
  transition-delay: 0ms;
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);   border-color: rgba(5, 166, 75, 0.3);
}
.mf-card:hover::before { transform: scaleX(1); }
.mf-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: var(--accent);   background: rgba(5, 166, 75, 0.1);
  transition: var(--transition);
}
.mf-card:hover .mf-icon { color: var(--white); background: var(--accent); }
.mf-body { min-width: 0; }
.mf-index {
  position: absolute;
  top: 18px;
  right: 20px;
  font-family: var(--font-head);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--silver);
}
.mf-body h3 {
  margin: 0;
  padding-right: 34px;
  font-family: var(--font-head);
  font-size: 0.98rem;
  line-height: 1.4;
  color: var(--primary);
}
.mf-body p {
  margin: 6px 0 0;
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-light);
}

.ipo-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 40px;
}
.ipo-card {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid rgba(11, 31, 58, 0.08);
  border-radius: var(--radius-lg);
  padding: 28px 26px 24px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}
.ipo-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);   border-color: rgba(5, 166, 75, 0.28);
}
.ipo-head {
  display: flex;
  align-items: center;
  gap: 14px;
}
.ipo-icon {
  flex: 0 0 auto;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  color: var(--accent);   background: rgba(5, 166, 75, 0.1);
}
.ipo-tag {
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--text-light);
}
.ipo-card h3 {
  margin: 4px 0 0;
  font-family: var(--font-head);
  font-size: 1.06rem;
  line-height: 1.35;
  color: var(--primary);
}
.ipo-desc {
  flex: 1 1 auto;
  margin: 16px 0 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-light);
}
.ipo-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--silver);
}
.ipo-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--silver);
}
.ipo-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid var(--light-2);
}
.ipo-view {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
  white-space: nowrap;
}
.ipo-view:hover { color: var(--accent); }

.gov-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 40px;
}
.gov-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--white);
  border: 1px solid rgba(11, 31, 58, 0.08);
  border-radius: var(--radius-lg);
  padding: 30px 28px 26px;
  box-shadow: var(--shadow-sm);
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  transition-delay: calc(var(--i) * 70ms);
}
.gov-grid.is-in .gov-card {
  opacity: 1;
  transform: none;
}
.gov-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.gov-card:hover {
  transition-delay: 0ms;
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);   border-color: rgba(5, 166, 75, 0.3);
}
.gov-card:hover::before { transform: scaleX(1); }
.gov-index {
  position: absolute;
  top: 18px;
  right: 22px;
  font-family: var(--font-head);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(11, 31, 58, 0.16);
  transition: var(--transition);
}
.gov-card:hover .gov-index { color: var(--accent); }
.gov-icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  color: var(--accent);   background: rgba(5, 166, 75, 0.1);
  transition: var(--transition);
}
.gov-card:hover .gov-icon {
  color: var(--white);
  background: var(--accent);
  transform: rotate(-6deg);
}
.gov-card h3 {
  margin: 20px 0 0;
  font-family: var(--font-head);
  font-size: 1.06rem;
  line-height: 1.4;
  color: var(--primary);
  padding-right: 26px;
}
.gov-card p {
  flex: 1 1 auto;
  margin: 10px 0 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-light);
}
.gov-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--light-2);
  font-family: var(--font-head);
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition);
}
.gov-link svg {
  flex: 0 0 auto;
  color: var(--accent);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.gov-link:hover { color: var(--accent); }
.gov-link:hover svg { transform: translateX(5px); }
.gov-docs {
  margin-top: 34px;
  background: var(--light);
  border: 1px solid rgba(11, 31, 58, 0.07);
  border-radius: var(--radius-lg);
  padding: 28px 30px;
}
.gov-docs-kicker {
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
}
.gov-docs-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}
.gov-docs-count {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--silver);
  white-space: nowrap;
}
.gov-docs h3 {
  margin: 6px 0 0;
  font-family: var(--font-head);
  font-size: 1.1rem;
  color: var(--primary);
}
.gov-docs ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
.gov-docs a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  background: var(--white);
  border: 1px solid var(--light-2);
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition);
}
.gov-docs a:hover {   border-color: rgba(5, 166, 75, 0.4);
  box-shadow: var(--shadow-sm);
  transform: translateY(-2px);
}
.gov-doc-icon {
  flex: 0 0 auto;
  color: var(--accent);
  display: grid;
  place-items: center;
}
.gov-doc-name {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.35;
  word-break: break-word;
}
.gov-doc-name em {
  font-style: normal;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--silver);
}

.ir-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 34px;
  padding: 42px 44px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  color: var(--white);
  box-shadow: var(--shadow-lg);
}
.ir-box h2 { color: var(--white); margin: 8px 0 10px; }
.ir-box p { margin: 0; color: #c3cfdd; max-width: 54ch; }
.ir-box .kicker { color: var(--accent-light); }
.ir-box-actions { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.ir-tel {
  color: var(--accent-light);
  font-family: var(--font-head);
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}
.ir-tel:hover { color: var(--white); }

@media (max-width: 900px) {
  .fin-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
  .ipo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-top: 32px; }
  .gov-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-top: 32px; }
  .mf-grid { gap: 16px; }
  .ir-box { flex-direction: column; align-items: flex-start; padding: 32px; }
  .ir-box-actions { width: 100%; gap: 14px; }
  .gov-docs ul { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 560px) {
  .fin-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 32px; }
  .fin-card { padding: 26px 22px 24px; }
  .fin-index { top: 18px; right: 20px; }
  .gov-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 28px; }
  .mf-head { margin-top: 34px; padding: 24px 0 14px; }
  .mf-grid { grid-template-columns: 1fr; gap: 14px; margin-top: 0; }
  .mf-card { padding: 20px; grid-template-columns: 40px 1fr; gap: 14px; }
  .mf-icon { width: 40px; height: 40px; }
  .gov-card { padding: 26px 22px 22px; }
  .gov-docs { padding: 24px 20px; border-radius: var(--radius); }
  .ipo-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 28px; }
  .ipo-card { padding: 24px 20px 20px; }
  .gov-docs { padding: 22px 20px; }
  .gov-docs ul { grid-template-columns: 1fr; gap: 10px; }
}
@media (prefers-reduced-motion: reduce) {
  .fin-card,
  .fin-bar,
  .mf-card {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
</style>
