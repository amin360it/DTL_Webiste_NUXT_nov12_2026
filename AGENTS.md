# AI AGENT GUIDANCE — DTL Website Nuxt Migration

## OBJECTIVE

Port the static HTML site at `src/` (35 pages, same content/design/assets/interactions) into a Nuxt 4 SSG project at `.` that generates a `dist/` folder for static hosting.

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
- `app/components/` — SiteHeader.vue, SiteFooter.vue, LightboxModal.vue, PdfModal.vue, VideoModal.vue, BangladeshMap.vue, GradientBackdrop.vue (anime.js gradient layer, home page)
- All page components in `app/pages/` (39 routes; index.vue hero slideshow included; `factory.vue` ported from the orphaned source page; `resources.vue`, `disclaimer.vue` and `privacy-policy.vue` written new — the source has no counterpart)
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
- The static product cards at the top of every `/products-*` page use `app/components/CardPlaceholder.vue` whenever the source has no photo (52 of the 63 cards): a 4:3 `card-img` slot with a dashed frame, generic I-beam and "NO IMAGE", drawn in `currentColor` from `var(--text-light)` so it themes with the page. Each of those five pages also pins card height in scoped CSS (`.section .grid .card` flex column, `h3 { min-height: 2.3em }`, `p { min-height: 3.3em }`, button `margin-top: auto`) so every card is 420 px and the Drawing buttons line up
- Only 66 of the 2,110 profiles carry a drawing image, so most cards fall back to an inline SVG placeholder (dashed frame + generic I-beam + "NO DRAWING") that fills the same 1:1 holder and follows the theme via `var(--light)` / `var(--text-light)`. Card bodies are locked to two title lines (`.cat-name { min-height: 2.6em }`, `.cat-card` is a full-height flex column) so every card in the grid is exactly 305 px tall at 1200 px wide, with or without an image
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

## PROJECT FILE MAP (context for any AI picking this up)

All paths relative to the project root.

| Area | Files |
|---|---|
| Config / meta | `nuxt.config.ts`, `package.json`, `app/app.vue`, `app/error.vue`, `public/robots.txt`, `public/sitemap.xml` |
| Layout / chrome | `app/layouts/default.vue`, `app/components/SiteHeader.vue` (topbar + desktop nav + mobile drawer), `app/components/SiteFooter.vue` |
| Footer | `app/components/SiteFooter.vue` — brand/social, Site Map (13), Products (7), Manufacturing (11 incl. ETP, Packaging, Warehousing & Delivery), Investors (full 13-item menu deep-linked into `/investors-relation#…`), Contact (offices + Factory overview) |
| Modals | `app/components/LightboxModal.vue`, `app/components/PdfModal.vue`, `app/components/VideoModal.vue`, `app/composables/useModal.ts` |
| Composable helpers | `app/composables/useLegacyInteractions.ts` (delegated lightbox / video / tabs / PDF / year + global image zoom), `app/composables/useSeo.ts` (canonical, robots, OG/Twitter, WebPage + Breadcrumb JSON-LD, Organization schema), `app/composables/useTheme.ts` (dark mode state) |
| Styles | `app/assets/css/main.css` (verbatim port of `css/style.css` — do not edit), `app/assets/css/theme.css` (dark-theme overrides — edit this, not main.css), `DESIGN.md` (design system) |
| Theme / chrome helpers | `app/components/BackToTop.vue` (floating scroll-to-top), `.theme-toggle` inside `SiteHeader.vue` |
| Pages (39 routes) | `app/pages/*.vue` — home `index.vue`; `about`, `contact`, `products`, `products-architectural|industrial|furniture|hardware|electrical|others`, `online-catalogue`, `catalogue`, `projects`, `projects-image|list|video`, `manufacturing`, `manufacturing-billet-casting|extrusion-presses|aging-tempering-oven|anodizing-section|powder-coating-plant|wooden-finish|quality-inspection|packaging|warehousing-and-delivery|etp`, `news`, `career`, `investors-relation`, `board-of-directors`, `dealer-list`, `enlisted-developer`, `media`, `factory`, plus `sitemap`, `resources`, `disclaimer`, `privacy-policy` |
| Page data | `app/data/catalog.ts` (2,110 profiles), `app/data/productBuckets.ts`, `app/data/dealers.ts`, `app/data/divisionDealers.ts` (map modal), `app/data/routeContacts.ts` (182 customer-service rows with division), `app/data/projects.ts` (198 projects in 3 groups), `app/data/projectGallery.ts` (37 gallery images with place), `app/data/developers.ts` (506 cleaned, deduped developer companies), `app/data/directors.ts` (9 board members with source highlights + bios) |
| Shared page components | `app/components/ProductProfiles.vue`, `app/components/CatalogCard.vue`, `app/components/BangladeshMap.vue` |
| Data generators | `scripts/build-catalog-data.mjs` (CSV → catalog.ts), `scripts/build-division-data.cjs`, `scripts/build-sitemap.mjs` |
| Build / run / deploy | `dev.bat`, `build.bat`, `deploy.bat`, `scripts/production_Build_with_deploy.bat`, `scripts/run_server.bat`, `scripts/run_server_nginx.bat`, `scripts/static-server.mjs` |
| Static assets | `public/assets/img/` (321 images), `public/assets/pdfs/` (68 PDFs), `public/assets/map-v5/` (BD map SVG + legacy files) |
| Docs / tracking | `AGENTS.md` (this file), `DESIGN.md`, `TODO.md` (status checklist), `progress.md` (session log), `README.md` |
| Outputs | `dist/` (`npm run generate`, Nuxt SSG), `publish/` (deployed copy: `www/`, `nginx-1.31.7/`) |

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
- Accordion: tapping a closed section opens it; tapping an already-open section collapses it **without navigating** (so the drawer never closes on an accordion tap). Note: `preventDefault()` inside a `NuxtLink` `@click` is too late (RouterLink's own handler runs first), so this is handled by a capture-phase listener on the `<ul class="nav-menu">` (`@click.capture`) that matches the `[data-accordion]` attribute on the four section parents, calls `preventDefault()` + `stopPropagation()` and toggles `openSection`; their `@click="closeMenu"` therefore never fires
- Submenu nesting: `.nav-menu .dropdown { padding-left: 14px; border-left: 1px solid rgba(255,255,255,0.09) }` so submenu items stay indented under the parent label (`.dropdown a` padding-left 10px, hover 13px). No `margin-left` — it pushed the submenu 52px right in the mobile drawer
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
| `/3-min` | old site `3-min.html` | `Introduction in 3 Minutes` | `Watch a three-minute introduction to DHAKATHAI ALCOMAXX PLC - our factory, eight extrusion presses and aluminium profile range.` |
| `/resources` | *(no source page)* | `Resources` | `DHAKATHAI ALCOMAXX PLC resources - catalogues, DIE drawings, investor documents, dealer network and company information in one place.` |
| `/disclaimer` | *(no source page)* | `Disclaimer` | `Disclaimer for the DHAKATHAI ALCOMAXX PLC website - information accuracy, product specifications, intellectual property and liability.` |
| `/privacy-policy` | *(no source page)* | `Privacy Policy` | `Privacy policy of DHAKATHAI ALCOMAXX PLC - what information this website collects, how it is used, cookies and your rights.` |

**Total: 39 ported page routes** (including `/`) plus `/sitemap` and `/3-min` — 41 page components in `app/pages/`. `/3-min` is the old Muse site's standalone "Introduction in 3 minutes" video page (the new design only has that video as a home-page modal). The footer's `Resources | Disclaimer | Privacy Policy | Sitemap` line now links to these pages (all four previously pointed at `/` or `/sitemap`).

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
- **Hero intro section** below the slider: `#home-intro` with kicker "Since 1997 • Aluminium Extrusion Leader", H1 "WE ARE THE largest ALUMINIUM extrusion company IN BANGLADESH", paragraph, CTA buttons (About / Products / Manufacturing), and stats bar (8 Presses / 1997 Serving Since / 100% Bangladesh / 64+ Dealers / 20-22% Market Share). Dark navy background via `.hero-intro { background: var(--primary-dark); color: var(--white); }`.
- **Key Features grid**: 4 cards in a row (previously 3) via `.features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }`. 4 cards: Premium Quality (BS 1474, ASTM & BSTI certified), Advanced Manufacturing (8 extrusion presses with hot log shear technology), Nationwide Reach (dealers across all 8 divisions of Bangladesh), Quality Assurance (rigorous testing at every stage of production).
- **Stats section**: numbers 1300+, 500+, 27+, 25 — just static HTML, port verbatim (inside hero-intro stats bar)
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

### `contact.vue` — PAGE STRUCTURE (2026-11-14)
Section order is fixed and must be kept: **Where To Reach Us → Find Us → Investor Resources → Customer Services Team**.

- `app/data/routeContacts.ts` — 182 customer-service rows, type `{ district, division, route, phone }`. The `division` field was added by mapping all 62 districts to the 8 divisions (canonical order: Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur, Mymensingh).
- **Where To Reach Us** — two `.reach-card` blocks (Corporate Office / Factory): gradient navy header band with icon + eyebrow + area chip, address, icon rows for landline/mobile/e-mail, action row (`Call now`, `WhatsApp`, `Directions`). Scoped CSS only; global `.contact-card` is used by the dealer modal and must not be reused here.
- **Find Us** — `.map-card` per office with the exact old-site coordinates (Corporate `23.801066,90.424450`, Factory `23.931238,90.311241`), address and a `google.com/maps/dir` link.
- **Investor Resources** — four `.res-card`s (Investor Relations, Corporate Governance, Board of Directors, IPO Prospectus PDF).
- **Customer Services Team** — search box + cascading Division/District/Area selects + clear button, filter chips, live count, and `.data` table (Area, District, Division, Mobile, Call/WhatsApp). Filters reset child selections when a parent changes; table collapses to cards at ≤620 px.

### Site-wide UX (2026-11-14)

**Image / video modals — every image is clickable.** `useLegacyInteractions.ts` delegates one `document` click listener; it now opens the lightbox for **any content image**, not only `[data-lightbox]` wrappers. Rules in `zoomableImage()`:
- skipped inside `.modal`, `header`, `footer`, `.topbar`, `.drawer`, `.nav-backdrop` (chrome/logo), `[data-no-zoom]`, `button`, `.tab-btn`
- skipped when the image sits inside a link unless that link is `[data-lightbox]` or points at an image file (so card CTAs and PDF links keep working)
- skipped when the intrinsic size is under 56×56 px (icons)
- eligible images get `data-zoomable` + `cursor: zoom-in`; the click opens `openLightbox(img.currentSrc, caption, alt)` where the caption comes from `[data-caption]`, `<figcaption>` or `alt`
- click order: `.video-thumb` → `[data-lightbox]` → `a[href$=".pdf"]` → `.tab-btn` → YouTube links (any `youtube.com/watch`, `youtu.be`, `/embed`, `/shorts` link opens the video modal instead of navigating) → image zoom

**Dark mode.** `app/assets/css/theme.css` is loaded after `main.css` in `nuxt.config.ts`; it never edits `main.css`. Theme is `html[data-theme='light'|'dark']`, set before first paint by the inline script in `nuxt.config.ts` (`localStorage['dtl-theme']`, falling back to `prefers-color-scheme`) and toggled by `useTheme()`. Dark values: page `#0a1220`, surface `#111d2d`, surface-2 `#17263a`, line `#22303f`, text `#e4ebf4`, muted `#a0b3c8`.
- `--white` **must not be redefined** — it is used for text on navy sections. Dark surfaces are overridden per class instead.
- Page-scoped styles that hardcode `var(--white)` / `var(--primary)` are covered in `theme.css` by their class names (`.reach-card`, `.map-card`, `.res-card`, `.fin-card`, `.ipo-card`, `.gov-card`, `.sm-card`, `.cat-card`, `.pl-stat`, `.pg-chip`, `.ed-letter`, …). **When adding a light-surface class in a page, add its dark counterpart to `theme.css`.**
- Never use `:global(html[data-theme='dark'])` in a scoped SFC: this Vue version compiles it onto `<html>` itself and collapses the page (`display:none`). Put such rules in `theme.css`.
- The header is translucent white in light mode, so dark mode overrides `.header`, `.dropdown`, `.nav-menu a`, `.nav-toggle span` and `.brand-text`.

**Back to top.** `app/components/BackToTop.vue` is mounted in `layouts/default.vue`; shows after 480 px of scroll, `z-index: 900` (below the 2000 modals).

**Theme switch.** `.theme-toggle` sits last inside `.header .nav`, so it is visible on desktop and mobile (mobile order is logo → toggle → burger). Sun/moon icons swap purely in CSS (`theme.css`), so there is no hydration flicker.

### `projects-list.vue`, `projects-image.vue`, `enlisted-developer.vue` (2026-11-14)
- `projects-list` — data in `app/data/projects.ts` (23 ongoing, 99 completed 2018-2019, 76 completed 2016-2017 = 198). Tabs show counts, a live search filters the active group, plus stat cards and an empty state.
- `projects-image` — data in `app/data/projectGallery.ts` (37 images, `place` derived from the caption: Dhaka 32, Chattogram 3, Other 2). Location chips + search + count; each tile stays a `[data-lightbox]` button so the lightbox opens with its caption.
- `enlisted-developer` — data in `app/data/developers.ts`. The 955 source rows included repeated blocks plus ~19 scraped nav/footer lines, so the list is cleaned and de-duplicated to **506** companies; search + A-Z filter (with counts) + sticky header.

### `investors-relation.vue` — page structure (2026-11-14)

- Hero carries a jump nav (`.ir-jump`: IPO documents / Financial highlights / Governance); `#ipo`, `#glance`, `#governance` each set `scroll-margin-top: 110px` so smooth-scroll anchors clear the sticky header.
- Order: IPO documents (3 cards) → `#glance` financial stat cards + `mf-head` ("IPO & market parameters") over the 8-card fact grid → `#governance` cards + Investor Resources panel → navy contact band (`.ir-box`: mailto + phone).
- The Investor Resources panel lists all **13** entries of the original site's investor menu (`investorResources` in the page script): Prospectus, IPO Application Result, IPO Fund Utilization, Financial Report, Price Sensitive Information, Corporate Governance Compliance, Directors Report, Annual Report, Details of Shareholding, EGM, AGM, Dividend, Investors Contact. Only three of these exist as files in `public/assets/pdfs/` (prospectus, share distribution, catalogue) so those are the `PDF` rows; the rest carry a type badge (`Announcement`, `Highlights`, `Contact`) and link to the real page/section (`/news`, `#glance`, `/contact#investor-relations`) rather than inventing documents. Type is chosen per entry via an inline SVG icon string.
- The contact band is wrapped in a `.container` (not `container ir-box` on one element) so the card keeps the page gutter on phones; below 900 px it becomes a column with `width: 100%` actions.
- `#disclosures` (added after `#governance`, before the contact band) carries the ten investor-menu items that have no document file yet (`Annual Report`, `Financial Report`, `Directors Report`, `Dividend`, `AGM`, `EGM`, `Details of Shareholding`, `Price Sensitive Information`, `IPO Application Result`, `IPO Fund Utilization`) as `.mf-card` rows with a stable `id` each (`#annual-report`, `#dividend`, `#agm`, `#egm`, …). Each row has a `gov-link` action that points at the real destination (a page, a PDF, or a section anchor), and the section closes with an `.ir-note` giving the investors e-mail/phone. Copy describes what each disclosure covers — no figures or documents are invented. The `investorResources` list and the footer's Investors column both deep-link to these ids. `.ir-disc-grid` is forced back to one column at ≤620 px (paragraph cards are unreadable two-up on a phone) and `.ir-disc .mf-index` is hidden there to stop the number colliding with a wrapped title.

### `investors-relation.vue` — market facts (2026-11-14)

`/investors-relation#glance` carries the six animated financial stat cards and, below them, the eight IPO/market parameters (`IPO Fund Utilization` … `Employment`) that were previously a static table. They are now an 8-card fact grid (`marketFacts` in the page script, inline SVG icon per item): two columns above 560 px, one below, each card with an amber index (01–08), icon tile, title and the details text verbatim from the old table. Cards share the section reveal via `finInView`, and dark-mode styling is covered by `.mf-card` / `.mf-body h3` in `theme.css`. No table remains in that section.

### `board-of-directors.vue` (2026-11-14)

The old page was a long text list (no photos) with three highlight facts per director; the rebuilt page keeps that information but presents it as refined profile rows.
- `app/data/directors.ts` — `{ name, role, group: 'Sponsor'|'Independent', img, highlights: string[3], bio }`, 9 entries. Highlights are the three bullets from the old page verbatim.
- Layout: intro + stat cards (9 / 7 / 2) beside a navy governance card (kicker, intro, a three-line "what's inside" list and amber Corporate Governance CTA + investor-resources link), then alternating rows (portrait 360 px + role, name, highlights, bio clamped to 4 lines, `Read full profile`). Rows flip sides on odd indexes and stack under 760 px.
- Modal: local `Teleport` dialog (`role="dialog"`, `aria-modal`, `aria-labelledby`), opened from the portrait or the button, closed by ×, backdrop, Escape or the footer Close button. It locks body scroll, focuses the close button on open, and uses `grid-template-columns: 320px 1fr` (single column on mobile). Full bio lives here; the on-page copy is clamped.
- Dark-mode classes used by this page (`.bd-stat`, `.bd-tag`, `.bd-dialog`, `.bd-dialog-head`, `.bd-dialog-foot`, `.bd-close`) are covered in `theme.css`.
- Portrait asset for Mr. Sulaiman S. Ajanee is `/assets/img/09 mr sulaiman s ajanee - independent directorbe19.jpg` — the older build pointed at a non-existent `…ajaneebe19.jpg`.

### `news.vue` — PAGE STRUCTURE (2026-11-14)
- Two-column layout: IPO feature article on the left with the TBS infographic (`/assets/img/p7_info_dhakathai-alcomaxx3404.jpg`) directly under the "Infographic: TBS" line, video cards on the right.
- Video cards use the shared `video-thumb` button + `VideoModal` (`useModal().openVideo`), ids: `f89Qwzayf2U` (fabricators), `bvIPx5s0mXU` (Channel 24, IAB 2023), `8KbnYhiR9So` (Desh TV, IAB 2023), `2xIttPr0Xww` (Dealer Conference 2022). Thumbnails come from `https://i.ytimg.com/vi/<id>/hqdefault.jpg`.

### Home page: animated gradient sections + chrome (2026-11-18)

**Dependency:** `animejs` (v4.5.0) was added to `dependencies` — this is the one deliberate exception to the "do not install new packages" rule, requested by the owner. It is imported only via dynamic `import('animejs')` inside `onMounted`, so it never runs during prerender.

**`app/components/GradientBackdrop.vue`** — absolutely positioned gradient layer (`inset: 0`, `pointer-events: none`, `contain: paint`) placed as the first child of a section. It paints a three-stop palette gradient plus five animated layers, all driven by anime.js (`loop: true`):
- three blurred `.grad-orb` spans — `translateX` ±190 px, `translateY` ±120–150 px, `scale` 1→1.18/0.86, `opacity` 0.5→0.85/0.35, 3.6 s, `stagger(280)`, `alternate`, `inOutSine`
- `.grad-bands` — a subtle repeating diagonal stripe layer travelling 180 px over 5 s (linear loop)
- `.grad-sweep` — a wide diagonal light band easing ±16 % over 4.8 s
- `.grad-sheen` — a huge conic gradient rotating 360° over 14 s
`prefers-reduced-motion` does **not** disable it (the owner wants the motion everywhere); it slows everything 2.6× and halves the travel. Animations are paused in `onBeforeUnmount`.
- Palette used (matches `theme.css` `:root`): `#0d0d0d` `--primary`, `#404040` `--primary-light`, `#05a64b` accent, `#037334` accent-dark, `#f2f2f2` light. Do **not** reintroduce the old navy `#0b1f3a` / amber `#e0862b` values in new work.
- Applied to the three dark home bands: `.hero-intro`, `.section-video`, `.section-primary` (each marked `anim-gradient`, `position: relative; overflow: hidden`) and inside the newsletter card. `index.vue` scoped CSS keeps content above the layer with `.anim-gradient > :not(.grad-backdrop) { position: relative; z-index: 1 }` (a `z-index: -1` layer would paint behind the section background).
- Verification note: headless screenshot `--virtual-time-budget` does not advance rAF reliably, so it always looks frozen. Drive Chrome with `--remote-debugging-port` and read `getComputedStyle(orb).transform` twice a second apart instead — the matrix must change.

**Home hero caption** — was a translucent white pill (`rgba(255,255,255,0.1)`) that was invisible over bright slides and never reacted to the theme. Now `rgba(13, 13, 13, 0.78)` with a soft shadow (light mode) and `rgba(0, 0, 0, 0.9)` via `html[data-theme='dark'] .hero-caption` in `theme.css`. The caption text is `currentSlide.name` (derived from the image file names) and `See detail` opens the lightbox with the slide's `detail` text.

**"Certified By" strip (`index.vue`)** — `.cert-label` is restyled in the page's scoped CSS as a section head: accent-coloured, letter-spaced, amber/green dot before, 56 px gradient rule beneath, logos centred on their own row; the `.cert-strip` light panel background is removed.

**Feature / quality cards (`index.vue`)** — `.features-grid .feature-card` and `.quality-feature` are left-aligned panels: accent-tinted 54/46 px icon tile with an inline SVG glyph (the emoji were replaced), an accent top rule (vertical for `.quality-feature`) that grows to full width on hover, a corner glow, and a lift + icon tilt on hover. The rule's gradient animates (`card-rule-x` / `card-rule-y`, 2.6 s) while hovered. Cards also fade up on scroll via a page-level `IntersectionObserver` that adds `.is-reveal` then `.is-in` (opacity + `translate`, 80 ms stagger; `translate` is used instead of `transform` so the hover lift still works). Icon SVGs stay `width: 24px; height: 24px`.

**Newsletter (`index.vue`)** — rebuilt as a full-width light section holding a single dark `.nl-card` (max 1120 px, 26 px radius, grid `1.1fr 1fr`) with its own `GradientBackdrop`; the form is now an inline pill (translucent track, pill input, gradient pill button). Two gotchas: `main.css` styles `.newsletter` as a two-column grid with a radius/shadow, so the scoped block resets `display`, `grid-template-columns`, `border-radius`, `box-shadow` and `margin-top`; and headless checks showed `overflow-x` could leak — `.site` is `overflow-x: clip` in `theme.css` (not `hidden`, which would break the sticky header).

**Dark-band body copy** — `.section-head p` inherits `--text-light` (`#5c5c5c` in light mode), which was unreadable on the near-black bands. `theme.css` now sets `.section-primary .section-head p, .section-video .section-head p { color: rgba(242, 242, 242, 0.78) }` so copy such as the Manufacturing Process intro reads correctly in both themes.

**Toggle pills / tabs / chips (2026-11-18)** — `.tab-btn.active`, `.pill.active`, `.cat-view-pill.active` and `.subnav a.active` are filled with `--accent-dark` (`#037334`), not `--accent`. Reason: `main.css` keeps `.tab-btn.active { background: var(--white) }` while an earlier `theme.css` rule forced `color: #ffffff`, so the light theme rendered white text on a white pill; and white on `--accent` (`#05a64b`) is only **3.2:1**. White on `#037334` is 6.5:1, so it is the only palette value that works as a fill for normal-size labels. Counts inside an active pill (`.pill-count`, `.pl-count`) use `rgba(0,0,0,0.24)` + white; `.projects-list`'s own `.tab-btn.active .pl-count` was updated to match (page CSS, not `main.css`).
- `.cat-chip` (online catalogue) is `--accent-dark` text on `rgba(3,115,52,.07)` in light and `--accent-light` on `rgba(5,166,75,.18)` in dark; accent-on-pale-green was 2.99:1 before.
- Dark theme: `.pl-note`, `.map-head .map-pin` and `.dealer-summary .chip` switch to `--accent-light` (they were `--accent-dark`, ~2.7–2.9:1 on dark), and `.dealer-table .area-tag` becomes light text on `rgba(255,255,255,.08)` (was `#0d0d0d` on near-black, 1.05:1).
- Note when overriding page-scoped classes from `theme.css`: a scoped rule like `.map-head .map-pin[data-v-x]` is (0,3,0), so a plain `html[data-theme='dark'] .map-pin` (0,2,1) loses — repeat the parent class (`.map-head .map-pin`) to win. Page-scoped rules with three selectors (e.g. `.tab-btn.active .pl-count`) also beat `html[data-theme]` overrides and must be edited in the page.
- Verified with a CDP contrast audit over 16 routes × 2 themes (computed colour vs composited background, WCAG AA thresholds); the only remaining report is `.reach-chip` on `/contact`, a false positive because it sits on a gradient the audit reads as white.

### `resources.vue`, `disclaimer.vue`, `privacy-policy.vue` (2026-11-18)

These three footer pages had **no source counterpart** on the old site (they were `href="#"`-style placeholders), so they are newly written in the site's design language rather than ported.
- `/resources` — four highlight tiles (68 PDFs, 2,110 profiles, investor centre, dealer network) plus a four-group resource library (Products & Catalogues, Investor Documents, Sales Network & Partners, Company & Media) and a "Request a document" CTA band. Every link points at a page or PDF that actually exists; the two PDFs are `/assets/pdfs/dtl-online-catalogue-sep-2026.pdf` and `/assets/pdfs/prospectus-of-dhakathai-alcomaxx-plc.pdf`.
- `/disclaimer` and `/privacy-policy` — prose on a `.card` (`.legal` max-width 940 px), headings/paragraphs styled with tokens only so dark mode needs no extra rules. Privacy text matches actual behaviour: one `localStorage` key (`dtl-theme`), no tracking cookies, YouTube only sets cookies after a video is opened.
- `SiteFooter.vue` now links `/resources`, `/disclaimer`, `/privacy-policy`; `sitemap.vue` gained a `Resources & Legal` group (07) and `Sitemap` moved there from `Company & Network`.

### `about.vue` — refinement (2026-11-18)

Content was checked against the live old site (`dhakathaibd.com/about.html`) — all copy was already present, so only structure changed:
- Hero gained a pill jump nav (`#who-we-are`, `#strengths`, `#vision`, `#credentials`); those ids carry `scroll-margin-top: 110px`.
- "What We Produce" / "Who We Serve" moved into `.about-pillar` blocks (accent left rule) inside the intro column instead of bare `<h3>`s.
- Credentials grid is `grid-4` with an added `ISO 9001:2015` card, followed by an `.about-certs` white plate with `cert-1/2/3` and `cert-sms-demag` logos.
- `html[data-theme='dark'] .about-sub { color: #f2f2f2 }` added to `theme.css` (the heading used `--primary`, which is near-black in dark mode).

---

## PORTING WORKFLOW (recommended order)

1. **Verify npm install completed**: `Test-Path 'node_modules/.package-lock.json'`
   - If false, run: `npm install`

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
    npm run generate
    ```
    - Should produce 39 routes in `dist/`
    - Start a local server on port 8124: `npx serve dist -p 8124` (or `npm run preview`)
    - Smoke-test: navigate all 39 routes, check drawer, check modals

---

## VERIFICATION CHECKLIST

After completing all pages:
- [ ] `npm run generate` succeeds with 0 errors
- [ ] 39 route `index.html` files in `dist/` (plus `200.html`, `404.html`; 44 `.html` in total — the stray `02 furniture - office partition profile (3.html` 404 page is copied verbatim from the source archive; `public/assets/map-v5/` was removed as orphaned)
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

All source files are at: `src/` (same directory as this file).

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
- Don't install any new packages (no Tailwind, no UI lib, no YT API client). The only exception is `animejs`, added 2026-11-18 for the home-page gradient backdrops
- Don't change CSS class names
- Don't modify `app/assets/css/main.css`
- Don't add comments to code
- Don't use `target="_blank"` on internal NuxtLinks (only on external links and PDFs)
- Don't leave any `href="X.html"` unconverted
- Don't skip the `<script setup>` useHead block on any page

---

## QUICK REFERENCE: npm commands

```bash# Install deps (if not done)
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

---

## DESIGN SYSTEM (read before touching UI)

`DESIGN.md` is the design, UI/UX and accessibility guide for this project: colour tokens,
typography, spacing/radius/shadow scale, component catalogue, responsive breakpoints,
interaction rules, accessibility checklist, SEO conventions and a page scaffold template.

Any agent or developer editing layout, components or styles must read `DESIGN.md` first and
follow it. In short:

- `app/assets/css/main.css` is the single source of design truth - **do not edit it**.
- Reuse existing classes (`.section`, `.section-head`, `.kicker`, `.grid`, `.card`, `.btn`, `.page-hero`, `.table-wrap`) before writing new CSS.
- New page-local CSS goes in `<style scoped>` and uses the `:root` tokens only.
- Navy (`--primary`) is structure, amber (`--accent`) is action; never use amber for small text on white.
- Every page: `.page-hero` with one `<h1>`, then `.section` blocks; no client-only content that must be crawlable.
