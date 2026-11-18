<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { BaseTree, OpenIcon } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'

useSeo({
  title: 'Sitemap',
  description: 'Complete sitemap of DHAKATHAI ALCOMAXX PLC - browse every page of the website organized by section.'
})

type Node = { label: string; to?: string; num?: string; children?: Node[] }

const nodes: Node[] = [
  {
    label: 'Main',
    to: '/',
    num: '01',
    children: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Latest News', to: '/news' },
      { label: 'Career', to: '/career' },
      { label: 'Media Gallery', to: '/media' }
    ]
  },
  {
    label: 'Products',
    to: '/products',
    num: '02',
    children: [
      { label: 'Products Overview', to: '/products' },
      { label: 'Architectural Aluminium Profiles', to: '/products-architectural' },
      { label: 'Industrial Aluminium Profiles', to: '/products-industrial' },
      { label: 'Furniture Aluminium Profiles', to: '/products-furniture' },
      { label: 'Hardware Aluminium Profiles', to: '/products-hardware' },
      { label: 'Electrical Aluminium Profiles', to: '/products-electrical' },
      { label: 'Automotive & Railway Profiles', to: '/products-others' },
      { label: 'Online Catalogue', to: '/online-catalogue' },
      { label: 'Product Catalogue & Downloads', to: '/catalogue' }
    ]
  },
  {
    label: 'Manufacturing',
    to: '/manufacturing',
    num: '03',
    children: [
      { label: 'Manufacturing Overview', to: '/manufacturing' },
      { label: 'Billet Casting', to: '/manufacturing-billet-casting' },
      { label: 'Extrusion Presses', to: '/manufacturing-extrusion-presses' },
      { label: 'Aging Tempering Oven', to: '/manufacturing-aging-tempering-oven' },
      { label: 'Anodizing Section', to: '/manufacturing-anodizing-section' },
      { label: 'Powder Coating Plant', to: '/manufacturing-powder-coating-plant' },
      { label: 'Wooden Finish', to: '/manufacturing-wooden-finish' },
      { label: 'Effluent Treatment Plant (ETP)', to: '/manufacturing-etp' },
      { label: 'Quality Inspection', to: '/manufacturing-quality-inspection' },
      { label: 'Packaging', to: '/manufacturing-packaging' },
      { label: 'Warehousing & Delivery', to: '/manufacturing-warehousing-and-delivery' }
    ]
  },
  {
    label: 'Projects',
    to: '/projects',
    num: '04',
    children: [
      { label: 'Projects Showcase', to: '/projects' },
      { label: 'Project Image Gallery', to: '/projects-image' },
      { label: 'Project List', to: '/projects-list' },
      { label: 'Project Video', to: '/projects-video' }
    ]
  },
  {
    label: 'Investors',
    to: '/investors-relation',
    num: '05',
    children: [
      { label: 'Investor Relations', to: '/investors-relation' },
      { label: 'Board of Directors', to: '/board-of-directors' }
    ]
  },
  {
    label: 'Company & Network',
    num: '06',
    children: [
      { label: "Sales Network & Dealer's List", to: '/dealer-list' },
      { label: 'Enlisted Developers', to: '/enlisted-developer' },
      { label: 'Factory', to: '/factory' }
    ]
  },
  {
    label: 'Resources & Legal',
    to: '/resources',
    num: '07',
    children: [
      { label: 'Resources', to: '/resources' },
      { label: 'Disclaimer', to: '/disclaimer' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Sitemap', to: '/sitemap' }
    ]
  }
]

const treeRef = ref<any>(null)
const treeReady = ref(false)
const totalPages = computed(() => nodes.reduce((n, g) => n + (g.children?.length || 0), 0))

onMounted(() => {
  treeReady.value = true
})

function toggle(stat: any) {
  stat.open = !stat.open
}

function expandAll() {
  treeRef.value?.openAll()
}

function collapseAll() {
  treeRef.value?.closeAll()
}
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Sitemap</div>
    <div class="container">
      <span class="kicker">Site Index</span>
      <h1>Everything, One Page</h1>
      <p>All {{ totalPages }} pages of DHAKATHAI ALCOMAXX PLC, organized by section.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="sm-bar">
        <p class="sm-hint">{{ nodes.length }} sections &middot; {{ totalPages }} pages</p>
        <div class="sm-controls">
          <button class="sm-ctrl" type="button" @click="expandAll">Expand all</button>
          <button class="sm-ctrl" type="button" @click="collapseAll">Collapse all</button>
        </div>
      </div>

      <div v-show="!treeReady" class="sm-card sm-static">
        <div v-for="group in nodes" :key="group.label">
          <div class="sm-branch">
            <span class="sm-caret"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg></span>
            <span class="sm-count">{{ group.num }}</span>
            <span class="sm-label">{{ group.label }}</span>
            <span class="sm-badge">{{ group.children?.length || 0 }}</span>
            <NuxtLink v-if="group.to" class="sm-open" :to="group.to">Open section</NuxtLink>
          </div>
          <div class="sm-children">
            <div v-for="child in group.children" :key="child.to" class="sm-leaf">
              <NuxtLink class="sm-link" :to="child.to">{{ child.label }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div v-if="treeReady" class="sm-card sm-js">
        <BaseTree
          ref="treeRef"
          :model-value="nodes"
          text-key="label"
          children-key="children"
          :indent="26"
          :default-open="true"
          :tree-line="true"
          :tree-line-offset="11"
          aria-label="Website sitemap"
        >
          <template #default="{ node, stat }">
            <div v-if="node.children" class="sm-branch" @click="toggle(stat)">
              <span class="sm-caret"><OpenIcon :open="!!stat.open" /></span>
              <span class="sm-count">{{ node.num }}</span>
              <span class="sm-label">{{ node.label }}</span>
              <span class="sm-badge">{{ node.children.length }}</span>
              <NuxtLink v-if="node.to" class="sm-open" :to="node.to" @click.stop>Open section</NuxtLink>
            </div>
            <div v-else class="sm-leaf">
              <NuxtLink class="sm-link" :to="node.to">{{ node.label }}</NuxtLink>
            </div>
          </template>
        </BaseTree>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sm-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
}
.sm-hint {
  margin: 0;
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-light);
}
.sm-controls { display: flex; gap: 10px; }
.sm-ctrl {
  font-family: var(--font-head);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--light-2);
  background: var(--white);
  color: var(--primary);
  cursor: pointer;
  transition: var(--transition);
}
.sm-ctrl:hover {   border-color: rgba(5, 166, 75, 0.45);
  color: var(--accent);
}
.sm-card {
  background: var(--white);
  border: 1px solid rgba(11, 31, 58, 0.08);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 12px 20px 20px;
  font-family: var(--font-head);
  overflow-x: auto;
}
.sm-card :deep(.he-tree) { min-width: 0; }
.sm-card :deep(.tree-node) { border-radius: 12px; }
.sm-card :deep(.tree-line) { background-color: var(--light-2); }
.sm-card :deep(.he-tree__open-icon) {
  color: inherit;
  display: block;
  line-height: 1;
}
.sm-branch {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 10px;
  cursor: pointer;
  user-select: none;
  border-radius: 12px;
}
.sm-branch:hover { background: rgba(11, 31, 58, 0.025); }
.sm-children {
  padding: 0 0 10px 40px;
}
.sm-static .sm-children { position: relative; }
.sm-static .sm-children::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 18px;
  left: 24px;
  width: 1px;
  background: var(--light-2);
}
.sm-static .sm-leaf { position: relative; padding-left: 18px; }
.sm-static .sm-leaf::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 10px;
  height: 1px;
  background: var(--light-2);
}
.sm-branch:hover .sm-label { color: var(--accent); }
.sm-caret {
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 16px;
  color: var(--accent);   background: rgba(5, 166, 75, 0.1);
  transition: var(--transition);
}
.sm-branch:hover .sm-caret { background: rgba(5, 166, 75, 0.18); }
.sm-count {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--silver);
}
.sm-label {
  font-size: 1.04rem;
  font-weight: 700;
  color: var(--primary);
  transition: var(--transition);
  overflow-wrap: anywhere;
}
.sm-badge {
  flex: 0 0 auto;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  color: var(--text-light);
  background: var(--light);
}
.sm-open {
  margin-left: auto;
  flex: 0 0 auto;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  white-space: nowrap;
}
.sm-open:hover { text-decoration: underline; }
.sm-leaf { padding: 3px 0; }
.sm-js .sm-leaf::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 10px;
  border-radius: 50%;
  background: var(--silver);
  vertical-align: middle;
  transition: var(--transition);
}
.sm-js .sm-leaf:hover::before { background: var(--accent); }
.sm-link {
  display: inline-block;
  font-size: 0.93rem;
  color: var(--text-light);
  text-decoration: none;
  padding: 4px 0;
  overflow-wrap: anywhere;
  transition: var(--transition);
}
.sm-link:hover {
  color: var(--accent);
  transform: translateX(3px);
}
@media (max-width: 700px) {
  .sm-card { padding: 8px 14px 16px; }
  .sm-branch { gap: 10px; padding: 12px 6px; }
  .sm-label { font-size: 0.98rem; }
  .sm-open { display: none; }
  .sm-link { font-size: 0.9rem; }
}
@media (max-width: 420px) {
  .sm-count { display: none; }
  .sm-caret { width: 24px; height: 24px; font-size: 14px; }
}
</style>
