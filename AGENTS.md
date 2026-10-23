# AI AGENT GUIDANCE — DTL Website Nuxt Migration

## OBJECTIVE

Port the static HTML site at `D:\__WORKING_Project\DTL_Webiste\DTL_new_website\` (35 pages, same content/design/assets/interactions) into a Nuxt 4 SSG project at `D:\__WORKING_Project\DTL_Webiste_NUXT` that generates a `dist/` folder for static hosting.

**The output must be an EXACT copy** — same content, same CSS, same design, same interactions. No visual changes.

---

## ARCHITECTURE

- **Framework**: Nuxt 4 (4.5.2) with TypeScript, `<script setup>` components
- **Build**: `npm run generate` → `dist/` (static SSG via Nitro preset)
- **No UI library** — port the existing `css/style.css` verbatim
- **No YouTube API** — plain iframe embeds for video popups
- **Layout**: Single `default.vue` layout wraps all pages (header + footer + modals)
- **Interactivity**: Vue reactivity replaces vanilla JS (tabs, lightbox, video popup, mobile drawer, accordion nav, dealer filter, online catalogue)

---

## CURRENT STATE (what exists already)

See `TODO.md` for the live status checklist.

### Done
- `package.json` — Nuxt 4.5.2, Vue 3.5.41, vue-router 5.2.0 (+ `deploy` npm script)
- `nuxt.config.ts` — head config, CSS path, titleTemplate
- `app/app.vue`, `app/layouts/default.vue`, `app/error.vue`
- `app/assets/css/main.css` — ported from `css/style.css` (all 500/500 braces)
- `public/assets/img/` — 321 images; `public/assets/pdfs/` — 68 PDFs
- `app/composables/useModal.ts`, `app/composables/useLegacyInteractions.ts`
- `app/components/` — SiteHeader.vue, SiteFooter.vue, LightboxModal.vue, PdfModal.vue, VideoModal.vue, BangladeshMap.vue
- All 35 page components in `app/pages/` (index.vue hero slideshow included; `factory.vue` ported from the orphaned source page)
- `scripts/` — `dev.bat`, `build.bat`, `deploy.bat`
- `app/data/catalog.ts` + `app/pages/online-catalogue.vue` (Vue rewrite of catalogue.js)
- `app/data/dealers.ts` + `app/data/divisionDealers.ts` + `app/pages/dealer-list.vue` (Vue rewrite of dealers.js + division map modal)
- `scripts/build-catalog-data.mjs` — regenerates `app/data/catalog.ts` from `Data/MASTER_WEIGHT_CHART_2026.csv`
- `scripts/build-division-data.cjs` — regenerates `app/data/divisionDealers.ts` from parsed division data

### 2026 Data Update (Jul 2026)
- Source of truth for the online catalogue is now `Data/MASTER_WEIGHT_CHART_2026.csv` (2,110 rows; **Latin-1** encoded, `°` = single byte `0xB0`)
- `app/data/catalog.ts` regenerated from that CSV: 2,110 products, 39 categories, 66 linked profile images. Product shape is unchanged: `{ id, die, name, cat, sub, img }`
- Rows with a blank Category/Sub Category are grouped by the CSV **Brand Name** (`cat = Category || Brand Name`, `sub = Sub Category || cat`)
- `id` scheme kept from the old data: `die.toLowerCase().replace('.', '-') + '@' + length` (deduped)
- Profile images are preserved by carrying the die→image map over from the previous `catalog.ts` (a backup of which is at `Data/catalog.ts.bak-2026-08-02`)
- Regenerate any time with: `node scripts/build-catalog-data.mjs`
- Full catalogue PDF is `public/assets/pdfs/dtl-online-catalogue-sep-2026.pdf`, linked on `/catalogue`, `/products`, `/investors-relation`. The old `…---feb-2025.pdf` has been deleted (it was left unreferenced)
- The `/products-*` application pages also show a CSV-driven **Profile Database** section via `app/components/ProductProfiles.vue`, filtered by `app/data/productBuckets.ts` (CSV brand-categories → application bucket, with a keyword fallback for the client-organised `Corporate` category). Profiles are deduped by die; no weights are shown
- `/products` (the overview page) is intentionally left as static marketing content

### NOT done
- Set deploy target and first deployment (`scripts\deploy.bat "path"` or `DTL_DEPLOY_TARGET` env var)

### Known deviations / unfixable source issues
- `/products-furniture` has a broken `<img src="/assets/img/02 furniture - office partition profile (3.html">` (with `onerror` hiding it). This is **pre-existing in the source archive** (`DTL_new_website\assets\img\` contains that 796-byte 404 page, not an image) and is **not recoverable**: the live site 404s the path, all filename variants 404, and there is no Wayback snapshot. Kept verbatim so the port stays an exact copy — the slot renders empty, exactly as the source does.
- Video popups use the original `autoplay=0` embed URL (`videoEmbedUrl()` in `useModal.ts`), matching the source `main.js` for the media / project-video popups. The home "Play Video" button opens the intro popup (`i0f2fi61ow0`) with the player ready; a second click on YouTube's ▶ starts playback.
- `main.css` was restored to be an exact copy of `css/style.css` (rule-level diff 0): three rules had drifted in the port — `.nav` padding `14px 0` → `5px 5px` (header height 82px → 64px, matching the source), `.dd-caret` had lost `MARGIN-LEFT: 5PX`, and `.check-list li::before` had been "fixed" from the source's double-encoded mojibake `âœ”` to `\2714`. All three reverted so the port is an exact copy.
- `/online-catalogue` keeps the source's nested accordion layout (`.cat-acc-body > .cat-grid[data-grid] > .cat-sub-block > .cat-grid`), so each sub-category renders as a narrow ~220px column with cards stacked one-per-row. With the 2026 CSV this makes large sub-categories (e.g. 187 products in "Corporate / Corporate") very tall — inherent to the source design + the new data, not a port defect. The `.cat-acc-body` display is now driven by an inline `{display:block}` binding (the CSS rule `.cat-acc-body { display: none }` could not be overridden by the port's earlier `v-show`).
- `/enlisted-developer` carries all 955 source rows verbatim, including the ~149 scraped locality/nav/footer rows, per the source-defects-kept-verbatim precedent.
- `public/assets/map-v5/` contains the interactive BD divisions map: `bd_div_en.svg` (source in `Data/BD-MAP-SVG/`, copied into `public/`) plus the legacy Adobe Animate `Map v4.*` files. The dealer-list page now renders `BangladeshMap.vue` — clicking any of the 8 division areas (`Rongpur`, `Rajshahi`, `Khulna`, `Barisal`, `Chittagong`, `Sylhet`, `Mymensingh`, `Dhaka`) emits `division-click` which opens a scrollable modal (`divisionModal`) listing that division's agents/dealers (customer, person, address, phone with Call/WhatsApp links) plus "Other Contacts" (sales phone, WhatsApp, email). Data lives in `app/data/divisionDealers.ts` (290 contacts keyed by division). SVG area shapes are unmodified; only a hover line-style (`filter: brightness()`) is added via scoped CSS.

### Notes on nuxt.config.ts
- `nitro.output.publicDir = 'dist'` so `npm run generate` outputs the static site to `dist/` (Nuxt 4 default would be `.output/public`)
- `titleTemplate: '%s | DHAKATHAI ALCOMAXX PLC'` — string form; the function form was not applied by unhead during prerender
- `title: 'Page Not Found'` — app-level default title. Every page sets its own `useHead({ title })` so this only surfaces on the client-rendered SPA fallback shells `dist/200.html` and `dist/404.html`, which otherwise render an empty `<title>| DHAKATHAI ALCOMAXX PLC</title>`. `app/error.vue` supplies the matching 404 UI (rendered client-side when a route does not match)
- `index.vue` overrides with `titleTemplate: null` + full title

---

## KEY RULES

### Link Conversion (HTML → Vue)
| Old HTML | New Vue |
|---|---|
| `href="index.html"` | `to="/"` |
| `href="about.html"` | `to="/about"` |
| `href="products-architectural.html"` | `to="/products-architectural"` |
| `href="investors-relation.html#governance"` | `to="/investors-relation#governance"` |
| `href="mailto:info@dhakathaibd.com"` | Keep as `<a href="mailto:...">` |
| `href="#"` (footer) | Keep as `<a href="#">` |
| `href="assets/pdfs/..."` | `href="/assets/pdfs/..."` (add leading `/`) |
| `src="assets/img/..."` | `src="/assets/img/..."` (add leading `/`) |

### Meta Tags
Each source page has `<title>` and `<meta name="description">` in lines 1-2. Extract into:
```vue
<script setup lang="ts">
useHead({
  title: 'Page Title',
  meta: [{ name: 'description', content: 'Description text' }]
})
</script>
```
The global `nuxt.config.ts` titleTemplate appends ` | DHAKATHAI ALCOMAXX PLC` automatically.
**Exception**: `index.vue` uses full title and overrides titleTemplate:
```ts
useHead({
  title: 'DHAKATHAI ALCOMAXX PLC - Best Aluminum Company in Bangladesh',
  titleTemplate: null
})
```

### Strip from Page Content
- Remove the opening `<body class="...">` tag and the closing `</body>` and `</html>` tags
- Remove `<div class="topbar">...</div>` (header partial content — handled by SiteHeader)
- Remove `<header class="header">...</header>` (handled by SiteHeader)
- Remove `<script src="js/main.js"></script>` and any other script tags
- Remove `<!--Google Analytics-->` comment block
- Remove closing `</div><!-- /.site -->` if present

### Keep in Page Content
- Everything from the first `<section>` or `<div class="page-...">` or hero block after `</header>` up to `<footer`

---

## COMPONENT SPECS

### `app/layouts/default.vue`
```vue
<script setup lang="ts">
import { useModal } from '~/composables/useModal'
import { wirePageInteractions } from '~/composables/useLegacyInteractions'
import { watch, onMounted } from 'vue'

const { state } = useModal()
const route = useRoute()

// Scroll lock when any modal is open
watch(() => state.lightbox.open || state.pdf.open || state.video.open, (anyOpen) => {
  document.body.style.overflow = anyOpen ? 'hidden' : ''
})

// Wire page interactions on route change
onMounted(() => wirePageInteractions())
watch(() => route.fullPath, () => nextTick(() => wirePageInteractions()))

// Close modals on Escape
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    state.lightbox.open = false
    state.pdf.open = false
    state.video.open = false
  }
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="site">
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
    <LightboxModal />
    <PdfModal />
    <VideoModal />
  </div>
</template>
```

### `app/components/SiteFooter.vue`
Port `partials/footer.html` verbatim:
- Replace `{{BASE}}` with `/` where present
- Replace `href="X.html"` with `<NuxtLink to="/X">`
- Replace `src="assets/img/..."` with `src="/assets/img/..."`
- Replace `<script>` tag content — year becomes `{{ new Date().getFullYear() }}` or keep `data-year` attribute (wired by useLegacyInteractions)
- Keep `<a href="#">` links as-is
- Keep `<a href="mailto:...">` as-is
- Keep social links as `<a href="..." target="_blank">`
- **Include the modals** (lightbox, PDF, video) at the bottom of the footer template, OR put them in default.vue layout
- The footer.html contains `<div class="modal" id="lightbox">`, `<div class="modal" id="pdfModal">`, `<div class="modal" id="videoModal">` — port these as the modal components (LightboxModal, PdfModal, VideoModal)

### Modal Components

**Required root markup** (CSS in `main.css` depends on it): `<div id="lightbox|pdfModal|videoModal" class="modal" :class="{ open: state.….open }" @click.self="close…">`. The `open` class drives `display:flex` (there is **no** `.is-open` rule), and the id scopes `#pdfModal .modal-box` / `#pdfModal .pdf-toolbar` / `#videoModal .modal-box` / `#videoModal .video-toolbar` / `#videoModal .video-frame`. All three use `<Teleport to="body">`. Everything else in the original footer markup (`.modal-cap`, `.modal-actions`, `#lbDownload`, `#pdfDl`, `#pdfOpen`, `#videoOpen`) is kept via Vue bindings; the original ids are only needed by the old vanilla JS, so the port omits them.

**Backdrop click closes**: the original `main.js` closes each modal with `if (e.target === modal) close()`, so all three roots carry `@click.self="closeLightbox()"` / `closePdf()` / `closeVideo()`. The lightbox's `.modal-close` button is a *direct child* of `.modal`, so `@click.self` does not interfere with it.

**PDF popup viewer**: the original `main.js` binds `document.querySelectorAll('a[href$=".pdf"]')` and shows every PDF link in `#pdfModal` (desktop) or opens it in a new tab (mobile). The port reproduces this with one delegated `document` click listener in `useLegacyInteractions.ts` (so it also covers links rendered after client-side navigation). The modal's own `Download` / `Open in new tab` links are excluded via `!pdfLink.closest('.modal')`.

**LightboxModal.vue**:
- Dark overlay, centered image + caption + download link
- Binds to `useModal().state.lightbox`
- Close button (×) calls `closeLightbox()`
- `<Teleport to="body">` to render outside layout

**PdfModal.vue**:
- Dark overlay, header with title + download link + open-new-tab link
- `<iframe>` with `src` = state.pdf.src (only when open, empty string otherwise)
- Close button calls `closePdf()`
- `<Teleport to="body">`

**VideoModal.vue**:
- Dark overlay, header with title
- `<iframe>` with src = `videoEmbedUrl(state.video.id)` (only when open)
- "Open on YouTube" link = `https://www.youtube.com/watch?v=${state.video.id}`
- Close button calls `closeVideo()`
- `<Teleport to="body">`

### `app/components/SiteHeader.vue` — FULL REWRITE SPEC

This is the most complex component. Port `partials/header.html` with these behaviors:

**State**:
- `isOpen` (boolean) — mobile drawer open/closed
- `openSection` (string) — which dropdown section is open in accordion mode ('products'|'projects'|'manufacturing'|'investors'|'')
- `scrolled` (boolean) — header scroll shadow (window.scrollY > 10)

**Nav structure** (use `<NuxtLink>` for all internal links):
- Home (`/`)
- About (`/about`)
- Products → dropdown: Architectural, Industrial, Furniture, Hardware, Electrical, Others, Online Catalogue, Catalogue & Downloads
- Projects → dropdown: Project Image, Project List, Project Video
- Manufacturing → dropdown: Billet Casting, Extrusion Presses, Aging Tempering Oven, Anodizing, Powder Coating, Wooden Finish, ETP, Quality Inspection, Packaging, Warehousing & Delivery
- Investors → dropdown: IPO Prospectus, Board of Directors, Corporate Governance (`/investors-relation#governance`)
- Contact Us (`.nav-cta`)

**Topbar** (above header):
- Left: phone + email
- Right: Latest news, DIE Catalogues & Brochures, Career, Dealer's List, Enlisted Developers, Media

**Mobile drawer** (≤820px):
- `.nav-backdrop` overlay when open
- `.drawer-head` with logo + close button
- `.drawer-label` "Main Menu"
- Accordion: tapping a closed section opens it; tapping an already-open section navigates (the `<NuxtLink>` handles navigation). Note: `preventDefault()` inside a `NuxtLink` `@click` is too late (RouterLink's own handler runs first), so the closed case is handled by a capture-phase listener on the `<ul class="nav-menu">` (`@click.capture`) that matches the `[data-accordion]` attribute on the four section parents, calls `preventDefault()` + `stopPropagation()` and sets `openSection`; their `@click="closeMenu"` therefore only runs in the "already open → navigate" case
- `.mobile-top-links` at bottom with Quick Links (duplicates topbar links)
- Auto-expand section containing current page on load
- `<NuxtLink @click="closeMenu">` on all drawer links
- `aria-expanded` on accordion parent links
- Escape key closes drawer
- `window.resize > 820` closes drawer and clears `openSection` (mirrors the original's "clear stale state when resizing up to desktop")

**SVG icons**: Each nav item has an inline SVG icon. Port them verbatim from header.html.

**CSS classes**: `active` on exact-match current page link. `open` on accordion-expanded section. `has-dd` on dropdown parents. `scrolled` on header when scrolled.

---

## 35 PAGES — ROUTE MAP

Each row: route → source file → `useHead({ title })` → `meta description`.

The source `<title>` **already contains** the ` | DHAKATHAI ALCOMAXX PLC` suffix; the value in the Title column is the part you pass to `useHead`, and `nuxt.config.ts`'s `titleTemplate` appends the suffix. `index.vue` is the exception (it sets `titleTemplate: null` and uses the full title verbatim).

> **Always read `<title>` + `<meta name="description">` straight from the source page and use them verbatim.** An earlier revision of this table paraphrased the titles, which produced **14 wrong page titles** in the build (all since fixed). The titles below are taken directly from the source files.

| Route | Source File | Title (`useHead`) | Description |
|---|---|---|---|
| `/` | `index.html` | *(full title; `titleTemplate: null`)* `DHAKATHAI ALCOMAXX PLC - Best Aluminum Company in Bangladesh` | `DHAKATHAI ALCOMAXX PLC - Bangladesh's largest aluminium extrusion company. Manufacturer of quality aluminium profiles since 1997.` |
| `/about` | `about.html` | `About Us` | `Learn about DHAKATHAI ALCOMAXX PLC - Bangladesh's largest aluminium extrusion manufacturer since 1997.` |
| `/contact` | `pages\contact.html` | `Contact US` | `Contact DHAKATHAI ALCOMAXX PLC - corporate office in Baridhara, Dhaka and factory in Ashulia, Savar.` |
| `/products` | `pages\products.html` | `Products` | `Explore the full product range of DHAKATHAI ALCOMAXX PLC - architectural, industrial, furniture, hardware, electrical and automobile aluminium profiles.` |
| `/products-architectural` | `pages\products-architectural.html` | `Architectural Aluminium Profiles` | `Architectural aluminium profiles - sliding frames, fixed frames, stick wall systems, semi-unitized series, doors, windows and curtain walls by DHAKATHAI ALCOMAXX PLC.` |
| `/products-industrial` | `pages\products-industrial.html` | `Industrial Aluminium Profiles` | `Industrial aluminium profiles - automobile section, textile, ladder, signboard, bathroom shelf, AC ducting, heat sinks, busbars and more.` |
| `/products-furniture` | `pages\products-furniture.html` | `Furniture Aluminium Profiles` | `Furniture aluminium profiles - office furniture, office partition, shower, vertical blind and roller blind systems by DHAKATHAI ALCOMAXX PLC.` |
| `/products-hardware` | `pages\products-hardware.html` | `Hardware Aluminium Profiles` | `Hardware and bazaar aluminium profiles - bazar section, round & corrugated pipe, ceiling tee, tower bolt, angles, U channels, I beams and showcases.` |
| `/products-electrical` | `pages\products-electrical.html` | `Electrical Aluminium Profiles` | `Electrical aluminium profiles - general heatsink, LED light profiles, connectors, busbar, flat bar, rod and solar structure profiles.` |
| `/products-others` | `pages\products-others.html` | `Automotive & Railway Aluminium Profiles` | `Automobile and railway aluminium profiles - coaster, decorative, railways, stair nosing and customized profiles by DHAKATHAI ALCOMAXX PLC.` |
| `/online-catalogue` | `pages\online-catalogue.html` | `Online Catalogue` | `Browse DHAKATHAI ALCOMAXX PLC aluminium profiles - search by die number, profile name or category with product images and specifications.` |
| `/catalogue` | `pages\catalogue.html` | `Product Catalogue` | `Download DHAKATHAI ALCOMAXX PLC product catalogues and detailed profile drawings - architectural, hardware, furniture, industrial and electrical profiles.` |
| `/projects` | `pages\projects.html` | `Projects Showcase` | `Projects showcase - image gallery, project list and videos of DHAKATHAI ALCOMAXX PLC landmark projects across Bangladesh.` |
| `/projects-image` | `pages\projects-image.html` | `Project Image Gallery` | `Project image gallery - landmark projects across Bangladesh built with DHAKATHAI ALCOMAXX PLC aluminium profiles.` |
| `/projects-list` | `pages\projects-list.html` | `Project List` | `Complete list of DHAKATHAI ALCOMAXX PLC projects - ongoing, 2018-2019 and 2016-2017 completed projects.` |
| `/projects-video` | `pages\projects-video.html` | `Project Video` | `Project videos of DHAKATHAI ALCOMAXX PLC landmark projects and manufacturing.` |
| `/manufacturing` | `pages\manufacturing.html` | `Manufacturing` | `DHAKATHAI ALCOMAXX PLC manufacturing - casting, extruding, tempering, anodizing, powder coating, wooden finish, quality inspection, packaging and warehousing.` |
| `/manufacturing-billet-casting` | `pages\manufacturing-billet-casting.html` | `Billet Casting` | `Billet casting section - continuous casting billet furnace with hot top technology by DHAKATHAI ALCOMAXX PLC.` |
| `/manufacturing-extrusion-presses` | `pages\manufacturing-extrusion-presses.html` | `Extrusion Presses` | `Extrusion presses - six presses with hot log shear technology, billet diameters 3.5 to 7 inches by DHAKATHAI ALCOMAXX PLC.` |
| `/manufacturing-aging-tempering-oven` | `pages\manufacturing-aging-tempering-oven.html` | `Aging Tempering Oven` | `Aging tempering oven - PLC controlled sensors with centrifugal aerodynamic system providing hardness up to 15 Webster.` |
| `/manufacturing-anodizing-section` | `pages\manufacturing-anodizing-section.html` | `Anodizing Section` | `Anodizing section - fully automated anodizing plant with Pulse rectifiers, film thickness 10-15 microns per AAMA standards.` |
| `/manufacturing-powder-coating-plant` | `pages\manufacturing-powder-coating-plant.html` | `Powder Coating Plant` | `Powder coating plant - the first conveyor robotic coating plant in Bangladesh using Pure Polyester powder coating.` |
| `/manufacturing-wooden-finish` | `pages\manufacturing-wooden-finish.html` | `Wooden Finish` | `Wood grain finished aluminium profiles - Mahogany, Cherry, Cedar, Walnut and Cinnamon wood finishes by DHAKATHAI ALCOMAXX PLC.` |
| `/manufacturing-quality-inspection` | `pages\manufacturing-quality-inspection.html` | `Quality Inspection` | `Quality inspection for premium aluminium profiles - BS 1474, ASTM B221, BS 3987 and AAMA 611-98 Class 1 standards.` |
| `/manufacturing-packaging` | `pages\manufacturing-packaging.html` | `Packaging` | `Standard packaging - quality poly-wrapped and premium shrink-wrapped packaging with protective tape by DHAKATHAI ALCOMAXX PLC.` |
| `/manufacturing-warehousing-and-delivery` | `pages\manufacturing-warehousing-and-delivery.html` | `Warehousing & Delivery` | `Finished goods warehousing and delivery - barcoded inventory and nationwide transporter network by DHAKATHAI ALCOMAXX PLC.` |
| `/manufacturing-etp` | `pages\manufacturing-etp.html` | `Effluent Treatment Plant (ETP)` | `Effluent treatment plant - environmentally conscious wastewater treatment ensuring no negative environmental impact by DHAKATHAI ALCOMAXX PLC.` |
| `/news` | `pages\news.html` | `Latest News` | `Latest news from DHAKATHAI ALCOMAXX PLC - IPO filing, expos, dealer conferences and company announcements.` |
| `/career` | `pages\career.html` | `Career` | `Join DHAKATHAI ALCOMAXX PLC team - current job openings including Managing Director/CEO, CFO, Head of Operations, MIS Manager and more.` |
| `/investors-relation` | `pages\investors-relation.html` | `Investor Relations` | `Investor relations - IPO prospectus, share distribution and corporate governance of DHAKATHAI ALCOMAXX PLC.` |
| `/board-of-directors` | `board-of-directors.html` | `Board of Directors` | `Meet the Board of Directors of DHAKATHAI ALCOMAXX PLC - experienced leaders of the aluminium industry.` |
| `/dealer-list` | `pages\dealer-list.html` | `Sales Network & Dealer's List` | `Authorized dealers across Bangladesh - complete dealer's list organized by district with contact numbers.` |
| `/enlisted-developer` | `pages\enlisted-developer.html` | `Enlisted Developers` | `List of enlisted developer companies partnered with DHAKATHAI ALCOMAXX PLC.` |
| `/media` | `pages\media.html` | `Media Gallery` | `Media gallery - photos and videos of DHAKATHAI ALCOMAXX PLC events, expos and factory activities.` |
| `/factory` | `pages\factory.html` | `Factory` | `DHAKATHAI ALCOMAXX PLC factory - Burirpara, East Norshinghpur, Ashulia, Savar, Dhaka.` |

**Total: 35 routes** (including `/`)

`/factory` is **orphaned in the source** — no page, nav item or footer link points to `factory.html` — but it is a real, fully-built source page (title, meta, images, gallery), so it is ported for completeness and left unlinked, exactly as the source has it.

---

## SPECIAL PAGES

### `index.vue` (Home)
- Strip inline topbar/header/footer from standalone `index.html`
- **Hero slideshow**: 3 slides with interval-based auto-advance
  ```vue
  <script setup>
  useHead({ title: 'DHAKATHAI ALCOMAXX PLC - Best Aluminum Company in Bangladesh', titleTemplate: null })
  const heroIndex = ref(0)
  const slides = [
    { bg: '/assets/img/01 radison bay view hotel-crop-u454039533.png', tag: 'New Hero Tag', title: 'New Hero Title', desc: 'New Hero Description' },
    { bg: '/assets/img/exterior_1024x550feae.jpg', tag: 'New Hero Tag', title: 'New Hero Title', desc: 'New Hero Description' },
    { bg: '/assets/img/01 radison bay view hotel-crop-u309729533.png', tag: 'New Hero Tag', title: 'New Hero Title', desc: 'New Hero Description' }
  ]
  let interval: ReturnType<typeof setInterval>
  onMounted(() => { interval = setInterval(() => { heroIndex.value = (heroIndex.value + 1) % slides.length }, 6000) })
  onBeforeUnmount(() => clearInterval(interval))
  </script>
  ```
  - Replace the 3 inline hero `<section>` blocks with `v-for` over slides array, binding `:class="{ active: i === heroIndex }"` and dynamic `:style` for background image
- **Stats section**: numbers 1300+, 500+, 27+, 25 — just static HTML, port verbatim
- **Featured profiles**: 3-card grid with profile images — port verbatim
- **Quote slider**: port the `<ul class="slides">` as-is (CSS-only? or JS?) — check if old site has JS for it; if so, add simple interval
- Keep all other sections (certifications, projects teaser, media-teaser, contact band, dealer banner) verbatim

### `online-catalogue.vue` — FULL VUE REWRITE
The original `online-catalogue.html` loads `catalog-data.js` (613 KB, defines `window.catalog`) + `catalogue.js` (9.9 KB, UI logic). Rewrite as pure Vue:

**Data file**: Create `app/data/catalog.ts` by copying `DTL_new_website\js\catalog-data.js` and wrapping it:
```ts
export type CatalogItem = { model: string; product: string; image: string; desc: string }
export const catalog: CatalogItem[] = [ /* paste array from catalog-data.js */ ]
```
Import dynamically: `const { catalog } = await import('~/data/catalog')` (lazy-loaded, 613 KB chunk)

**Component logic** (from catalogue.js):
- Category tabs (data-cat buttons): filter visible profiles by `product` field prefix or category mapping
- Search box: filter by model number
- Profile cards: image + model name + "Download" link (to `/assets/pdfs/...`) + "Show Drawing" button
- "Show Drawing" opens a lightbox (useModal.openLightbox) with the profile image
- "Download PDF" opens a new tab to the PDF file
- No of profiles counter
- Category filter data from the `data-cat` attributes in the HTML — extract the category→product mapping

**Read `catalogue.js` and `catalogue.html` fully** to understand the exact UI and behavior before rewriting.

### `dealer-list.vue` — VUE REWRITE
The original `dealer-list.html` loads `dealers.js` (10.3 KB) which contains data + filter logic.

**Data file**: Create `app/data/dealers.ts` — extract the dealer data array from `dealers.js` and export it with types.

**Component logic**:
- Division selector dropdown → filters by division
- District selector dropdown → filters by district (within selected division)
- Table/list of dealers: name, address, phone — filtered by selection
- Search/keyword filter if present in dealers.js

**Read `dealers.js` fully** to understand data structure and filter logic before rewriting.

---

## PORTING WORKFLOW (recommended order)

1. **Verify npm install completed**: `Test-Path 'D:\__WORKING_Project\DTL_Webiste_NUXT\node_modules\.package-lock.json'`
   - If false, run: `cd 'D:\__WORKING_Project\DTL_Webiste_NUXT'; npm install`

2. **Rewrite `app/components/SiteHeader.vue`** — fresh file, follow the spec above. Read `DTL_new_website\partials/header.html` for exact markup and SVG icons.

3. **Create `app/components/SiteFooter.vue`** — read `DTL_new_website\partials/footer.html`, port with link conversions.

4. **Create modal components**: `LightboxModal.vue`, `PdfModal.vue`, `VideoModal.vue` — follow specs above. All use `<Teleport to="body">`.

5. **Create `app/layouts/default.vue`** — follow spec above.

6. **Port 33 standard pages** (all except index, online-catalogue, dealer-list):
   - Read each source HTML from `DTL_new_website\pages\*.html`
   - Extract `<title>` and `<meta description>` for useHead
   - Strip header/footer/script tags
   - Convert `.html` links → NuxtLink `to="/route"`
   - Add leading `/` to asset paths
   - Wrap in `<template>` with `<script setup>` useHead block

7. **Create `app/pages/index.vue`** — special handling (hero slideshow, strip standalone header/footer)

8. **Create `app/data/catalog.ts`** + **`app/pages/online-catalogue.vue`** — Vue rewrite of catalogue.js

9. **Create `app/data/dealers.ts`** + **`app/pages/dealer-list.vue`** — Vue rewrite of dealers.js

10. **Build and verify**:
    ```bash
    cd D:\__WORKING_Project\DTL_Webiste_NUXT
    npm run generate
    ```
    - Should produce 35 routes in `dist/`
    - Start a local server on port 8124: `npx serve dist -p 8124` (or `npm run preview`)
    - Smoke-test: navigate all 35 routes, check drawer, check modals

---

## VERIFICATION CHECKLIST

After completing all pages:
- [ ] `npm run generate` succeeds with 0 errors
- [ ] 35 route `index.html` files in `dist/` (plus `200.html`, `404.html`; 38 `.html` in total — the stray `02 furniture - office partition profile (3.html` 404 page is copied verbatim from the source archive; `public/assets/map-v5/` was removed as orphaned)
- [ ] Every page `<title>` + `<meta name="description">` is byte-for-byte the source page's value (the source title already carries the ` | DHAKATHAI ALCOMAXX PLC` suffix; the page's `useHead` passes the part before it)
- [ ] No leftover `href="X.html"` — grep for `.html"` in `app/` directory
- [ ] No leftover `src="assets/` without leading `/` — grep for `src="assets/` (should be `src="/assets/`)
- [ ] Drawer opens/closes on mobile viewport
- [ ] Accordion sections expand/collapse
- [ ] Current page section auto-expands in drawer
- [ ] Lightbox opens on projects-image page image clicks
- [ ] Video popup opens on media page video clicks
- [ ] PDF modal opens on catalogue page "Open Drawing" clicks
- [ ] Dealer filter works on dealer-list page
- [ ] Online catalogue search/filter works
- [ ] Footer year shows 2026
- [ ] All 66 catalogue PDF downloads work
- [ ] All 68 PDF files accessible at `/assets/pdfs/...`

---

## SOURCE FILE LOCATIONS

All source files are at: `D:\__WORKING_Project\DTL_Webiste\DTL_new_website\`

| Source | Path |
|---|---|
| HTML pages (content fragments) | `pages\*.html` (32 files — **title + meta + body only**, no header/footer/scripts: this is the set the port reads) |
| Full standalone pages | `*.html` at the source root (35 files — the same pages with the header/footer/scripts inlined) |
| Root-only pages | `index.html`, `about.html`, `board-of-directors.html` (no `pages\` counterpart) |
| Orphaned page | `pages\factory.html` (+ root `factory.html`) — a real, built page that **nothing links to**; ported as `/factory`, left unlinked |
| Header partial | `partials\header.html` |
| Footer partial | `partials\footer.html` |
| Main CSS | `css\style.css` (already copied to `app\assets\css\main.css`) |
| Main JS | `js\main.js` (reference for interaction logic — do NOT copy, rewrite as Vue) |
| Catalogue JS | `js\catalogue.js` (rewrite logic as Vue component) |
| Catalogue Data | `js\catalog-data.js` (613 KB, port as `app\data\catalog.ts`) |
| Dealers JS | `js\dealers.js` (10.3 KB, rewrite as Vue component + `app\data\dealers.ts`) |
| Images | `assets\img\` (already copied to `public\assets\img\`) |
| PDFs | `assets\pdfs\` (already copied to `public\assets\pdfs\`) |

> Note: the source root and `pages\` carry **identical** `<title>`/`<meta name="description">` for every page (verified). The root copies are the full pages; the `pages\` copies are the header/footer-free fragments. Read either for meta, but read `pages\*.html` for the body content so you don't have to strip the header/footer.

---

## DO / DON'T

### DO
- Port content exactly — no rewording, no redesign
- Use `<script setup lang="ts">` for all components
- Use `useHead()` for page-level meta on every page
- Use `NuxtLink` for all internal navigation
- Add leading `/` to all asset paths (`src="/assets/img/..."`, `href="/assets/pdfs/..."`)
- Use `<Teleport to="body">` for modal components
- Lazy-load the 613 KB catalog data with dynamic import
- Test `npm run generate` after completing all pages

### DON'T
- Don't install any new packages (no Tailwind, no UI lib, no YT API client)
- Don't change CSS class names
- Don't modify `app/assets/css/main.css`
- Don't add comments to code
- Don't use `target="_blank"` on internal NuxtLinks (only on external links and PDFs)
- Don't leave any `href="X.html"` unconverted
- Don't skip the `<script setup>` useHead block on any page

---

## QUICK REFERENCE: npm commands

```bash
cd D:\__WORKING_Project\DTL_Webiste_NUXT

# Install deps (if not done)
npm install

# Dev server
npm run dev

# Static build
npm run generate

# Preview built site
npm run preview

# Check build output
Get-ChildItem dist -Recurse -Filter "*.html" | Measure-Object
```
