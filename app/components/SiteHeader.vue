<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)
const openSection = ref('')
const scrolled = ref(false)

const pageName = computed(() => (route.path === '/' ? 'index.html' : route.path.replace(/^\//, '') + '.html'))

const sectionPaths: Record<string, string[]> = {
  products: ['products-architectural', 'products-industrial', 'products-furniture', 'products-hardware', 'products-electrical', 'products-others', 'online-catalogue', 'catalogue'],
  projects: ['projects-image', 'projects-list', 'projects-video'],
  manufacturing: ['manufacturing-billet-casting', 'manufacturing-extrusion-presses', 'manufacturing-aging-tempering-oven', 'manufacturing-anodizing-section', 'manufacturing-powder-coating-plant', 'manufacturing-wooden-finish', 'manufacturing-quality-inspection', 'manufacturing-packaging', 'manufacturing-warehousing-and-delivery', 'manufacturing-etp'],
  investors: ['board-of-directors']
}

function isActive(to: string) {
  if (to === '/') return route.path === '/'
  return route.path === to
}

function sectionHasPage(section: string) {
  return (sectionPaths[section] || []).some((p) => pageName.value === p + '.html')
}

watch(pageName, () => {
  for (const s of Object.keys(sectionPaths)) {
    if (sectionHasPage(s)) {
      openSection.value = s
      return
    }
  }
  openSection.value = ''
}, { immediate: true })

function onMenuCapture(e: MouseEvent) {
  if (window.innerWidth > 820) return
  const el = (e.target as HTMLElement | null)?.closest('[data-accordion]') as HTMLElement | null
  if (!el) return
  const name = el.getAttribute('data-accordion') || ''
  if (openSection.value !== name) {
    e.preventDefault()
    e.stopPropagation()
    openSection.value = name
  }
}

function openMenu() {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    const close = document.querySelector('.drawer-close') as HTMLButtonElement | null
    close?.focus()
  })
}

function closeMenu() {
  isOpen.value = false
  document.body.style.overflow = ''
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMenu()
}

function onResize() {
  if (window.innerWidth > 820) {
    if (isOpen.value) closeMenu()
    openSection.value = ''
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', onScroll)
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <div class="topbar">
      <div class="container">
        <div class="topbar-left">
          <span>&#9742; +88 01708-814972</span>
          <a href="mailto:info@dhakathaibd.com">&#9993; info@dhakathaibd.com</a>
        </div>
        <div class="topbar-right">
          <NuxtLink to="/news">Latest news</NuxtLink>
          <NuxtLink to="/catalogue">DIE Catalogues &amp; Brochures</NuxtLink>
          <NuxtLink to="/career">Career</NuxtLink>
          <NuxtLink to="/dealer-list">Dealer's List</NuxtLink>
          <NuxtLink to="/enlisted-developer">Enlisted Developers</NuxtLink>
          <NuxtLink to="/media">Media</NuxtLink>
        </div>
      </div>
    </div>

    <header class="header" :class="{ scrolled }">
      <div class="container nav">
        <NuxtLink class="brand" to="/">
          <img src="/assets/img/dtl_logo.png" alt="DHAKATHAI ALCOMAXX PLC logo">
        </NuxtLink>
        <button class="nav-toggle" :class="{ open: isOpen }" :aria-expanded="String(isOpen)" aria-controls="navMenu" aria-label="Menu" @click="isOpen ? closeMenu() : openMenu()">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-backdrop" :class="{ show: isOpen }" aria-hidden="true" @click="closeMenu"></div>
        <ul class="nav-menu" :class="{ open: isOpen }" id="navMenu" @click.capture="onMenuCapture">
          <li class="drawer-head">
            <NuxtLink class="drawer-brand" to="/" @click="closeMenu">
              <img src="/assets/img/dtl_logo.png" alt="DHAKATHAI ALCOMAXX PLC">
            </NuxtLink>
            <button class="drawer-close" aria-label="Close menu" @click="closeMenu">&times;</button>
          </li>
          <li class="drawer-label"><span>Main Menu</span></li>

          <li :class="{ active: isActive('/') }">
            <NuxtLink to="/" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span class="nav-label">Home</span>
            </NuxtLink>
          </li>
          <li :class="{ active: isActive('/about') }">
            <NuxtLink to="/about" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span class="nav-label">About</span>
            </NuxtLink>
          </li>

          <li class="has-dd" :class="{ open: openSection === 'products' }">
            <NuxtLink to="/products" data-accordion="products" :aria-expanded="String(openSection === 'products')" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              <span class="nav-label">Products</span><span class="dd-caret"></span>
            </NuxtLink>
            <div class="dropdown"><div class="dd-inner">
              <div class="dd-title">Product Categories</div>
              <NuxtLink to="/products-architectural" @click="closeMenu">Architectural Profiles</NuxtLink>
              <NuxtLink to="/products-industrial" @click="closeMenu">Industrial Profiles</NuxtLink>
              <NuxtLink to="/products-furniture" @click="closeMenu">Furniture &amp; Office Partition</NuxtLink>
              <NuxtLink to="/products-hardware" @click="closeMenu">Hardware &amp; Bazaar</NuxtLink>
              <NuxtLink to="/products-electrical" @click="closeMenu">Electrical</NuxtLink>
              <NuxtLink to="/products-others" @click="closeMenu">Automobile &amp; Railway</NuxtLink>
              <NuxtLink to="/online-catalogue" @click="closeMenu">Online Catalogue (Browse All Profiles)</NuxtLink>
              <NuxtLink to="/catalogue" @click="closeMenu">Catalogue &amp; Downloads</NuxtLink>
            </div></div>
          </li>

          <li class="has-dd" :class="{ open: openSection === 'projects' }">
            <NuxtLink to="/projects" data-accordion="projects" :aria-expanded="String(openSection === 'projects')" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/><path d="M2 21h20"/></svg>
              <span class="nav-label">Projects</span><span class="dd-caret"></span>
            </NuxtLink>
            <div class="dropdown"><div class="dd-inner">
              <NuxtLink to="/projects-image" @click="closeMenu">Project Image</NuxtLink>
              <NuxtLink to="/projects-list" @click="closeMenu">Project List</NuxtLink>
              <NuxtLink to="/projects-video" @click="closeMenu">Project Video</NuxtLink>
            </div></div>
          </li>

          <li class="has-dd" :class="{ open: openSection === 'manufacturing' }">
            <NuxtLink to="/manufacturing" data-accordion="manufacturing" :aria-expanded="String(openSection === 'manufacturing')" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 20h20"/><path d="M4 20v-9l6 5v-5l6 5V4h4v16"/></svg>
              <span class="nav-label">Manufacturing</span><span class="dd-caret"></span>
            </NuxtLink>
            <div class="dropdown"><div class="dd-inner">
              <NuxtLink to="/manufacturing-billet-casting" @click="closeMenu">Billet Casting</NuxtLink>
              <NuxtLink to="/manufacturing-extrusion-presses" @click="closeMenu">Extrusion Presses</NuxtLink>
              <NuxtLink to="/manufacturing-aging-tempering-oven" @click="closeMenu">Aging Tempering Oven</NuxtLink>
              <NuxtLink to="/manufacturing-anodizing-section" @click="closeMenu">Anodizing</NuxtLink>
              <NuxtLink to="/manufacturing-powder-coating-plant" @click="closeMenu">Powder Coating Plant</NuxtLink>
              <NuxtLink to="/manufacturing-wooden-finish" @click="closeMenu">Wooden Finish</NuxtLink>
              <NuxtLink to="/manufacturing-etp" @click="closeMenu">ETP</NuxtLink>
              <NuxtLink to="/manufacturing-quality-inspection" @click="closeMenu">Quality Inspection</NuxtLink>
              <NuxtLink to="/manufacturing-packaging" @click="closeMenu">Packaging</NuxtLink>
              <NuxtLink to="/manufacturing-warehousing-and-delivery" @click="closeMenu">Warehousing &amp; Delivery</NuxtLink>
            </div></div>
          </li>

          <li class="has-dd" :class="{ open: openSection === 'investors' }">
            <NuxtLink to="/investors-relation" data-accordion="investors" :aria-expanded="String(openSection === 'investors')" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              <span class="nav-label">Investors</span><span class="dd-caret"></span>
            </NuxtLink>
            <div class="dropdown"><div class="dd-inner">
              <NuxtLink to="/investors-relation" @click="closeMenu">IPO Prospectus</NuxtLink>
              <NuxtLink to="/board-of-directors" @click="closeMenu">Board of Directors</NuxtLink>
              <NuxtLink to="/investors-relation#governance" @click="closeMenu">Corporate Governance</NuxtLink>
            </div></div>
          </li>

          <li :class="{ active: isActive('/contact') }">
            <NuxtLink to="/contact" class="nav-cta" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span class="nav-label">Contact Us</span>
            </NuxtLink>
          </li>

          <li class="mobile-top-links">
            <div class="mtl-title">Quick Links</div>
            <NuxtLink to="/news" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6z"/></svg>
              <span>Latest news</span>
            </NuxtLink>
            <NuxtLink to="/catalogue" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <span>DIE Catalogues &amp; Brochures</span>
            </NuxtLink>
            <NuxtLink to="/career" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              <span>Career</span>
            </NuxtLink>
            <NuxtLink to="/dealer-list" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Dealer's List</span>
            </NuxtLink>
            <NuxtLink to="/enlisted-developer" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1"/></svg>
              <span>Enlisted Developers</span>
            </NuxtLink>
            <NuxtLink to="/media" @click="closeMenu">
              <svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 9l5 3-5 3z"/></svg>
              <span>Media</span>
            </NuxtLink>
            <div class="mtl-contact">
              <span>&#9742; +88 01708-814972</span>
              <a href="mailto:info@dhakathaibd.com">&#9993; info@dhakathaibd.com</a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
