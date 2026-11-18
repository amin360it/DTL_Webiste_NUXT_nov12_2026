# TODO — DTL Website Nuxt Migration

Status of the static-HTML → Nuxt 4 SSG port. Source in `src/`.

## Done

- [x] `package.json` — Nuxt 4.5.2, Vue 3.5.41, vue-router 5.2.0
- [x] `nuxt.config.ts` — head config (default `title: 'Page Not Found'` + titleTemplate `'%s | DHAKATHAI ALCOMAXX PLC'`), CSS, `nitro.output.publicDir = 'dist'`
- [x] `app/app.vue`
- [x] `app/assets/css/main.css` — ported verbatim from `css/style.css` (3 rule drifts `.nav`/`.dd-caret`/`.check-list` were found and reverted so it is now byte-for-byte identical to the source at rule level)
- [x] `public/assets/img/` — 321 images
- [x] `public/assets/pdfs/` — 68 PDFs
- [x] `app/composables/useModal.ts` — lightbox/pdf/video modal state
- [x] `app/composables/useLegacyInteractions.ts` — tabs, lightbox, video, PDF interception, year injection
- [x] `app/components/SiteHeader.vue` — topbar + nav + mobile drawer (accordion)
- [x] `app/components/SiteFooter.vue`
- [x] `app/components/LightboxModal.vue`, `PdfModal.vue`, `VideoModal.vue`
- [x] `app/layouts/default.vue`
- [x] All 35 page components in `app/pages/` (including `index.vue` hero slideshow and `factory.vue`); build prerenders all routes to `dist/`
- [x] `app/data/catalog.ts` + `app/pages/online-catalogue.vue` — Vue rewrite of catalogue.js
- [x] `app/data/dealers.ts` + `app/pages/dealer-list.vue` — Vue rewrite of dealers.js
- [x] No leftover `href="X.html"` internal links (all converted to NuxtLink)
- [x] Build/dev/deploy scripts at project root (.bat)
- [x] Fixed modal display bug: all three modals toggled `is-open` (no such CSS rule) instead of `open` (`.modal.open{display:flex}`), and were missing the ids the CSS targets (`#lightbox`, `#pdfModal`, `#videoModal`). Lightbox / PDF / video popups never appeared before this.
- [x] Home page `index.vue` "Play Video" button now opens the intro-video popup (`i0f2fi61ow0`) instead of linking to `/media`
- [x] `projects-list.vue` tab panels given unique ids (`tab-ongoing` / `tab-1819` / `tab-1617`) — previously all three shared one id
- [x] `app/error.vue` added (client-rendered 404 UI) + app-level default `title: 'Page Not Found'`; `dist/404.html` / `dist/200.html` now carry `<title>Page Not Found | DHAKATHAI ALCOMAXX PLC</title>` (previously `<title>| DHAKATHAI ALCOMAXX PLC</title>`).
- [x] PDF popup viewer wired up — it was dead code (`openPdf()` was never called). A delegated `document` click listener in `useLegacyInteractions.ts` now intercepts every `a[href$=".pdf"]` and opens `#pdfModal` on desktop / a new tab on mobile, matching the original `main.js` (which bound `document.querySelectorAll('a[href$=".pdf"]')`). Modal-internal links are excluded via `!closest('.modal')`.
- [x] All three modals now close on backdrop click via `@click.self`, matching the original `if (e.target === modal) close()` for lightbox / PDF / video.
- [x] Mobile accordion fixed: tapping a closed section expands it **without** navigating; tapping an already-open section navigates and closes the drawer. Implemented with a capture-phase listener on `<ul class="nav-menu">` matching a `[data-accordion]` attribute, because `preventDefault()` inside a `NuxtLink` `@click` runs after RouterLink's own navigation handler. Resizing up to desktop now also clears `openSection` (as the original did).
- [x] Lightbox root id corrected to `lightbox` (the original footer markup) instead of `lightboxModal`.
- [x] Header/scale audit vs. the source `main.js` + `css/style.css`: `.nav-toggle.open`, `.nav-backdrop.show`, `.nav-menu.open`, `.has-dd.open`, `.header.scrolled`, `.tab-btn.active`, `data-year` all match.
- [x] Doc fixes in `AGENTS.md` / `TODO.md`: source path `src/...` → `.`, stale `serve-site.js` reference replaced with `npx serve dist -p 8124`
- [x] **Full title/description audit against the source** (all 35 pages compared byte-for-byte after HTML-entity decoding). This caught real bugs: **14 pages had wrong `<title>`** because an earlier AGENTS route-table paraphrased them (`Architectural Profiles` should be `Architectural Aluminium Profiles`, etc.) and **`/` had no meta description at all**. All 15 fixed; the audit now reports **35/35 exact matches** for both title and description.
- [x] `/dealer-list` title + description corrected to the source values (`Sales Network & Dealer's List` / *Authorized dealers across Bangladesh …*).
- [x] **`/factory` page ported** (`app/pages/factory.vue`). The source ships `factory.html` (real page: hero, factory photo, `check-list`, 4-image `data-lightbox` gallery) but **no page, nav item or footer link points to it** — it is orphaned in the source. Ported for completeness and left unlinked, exactly as the source has it. Source page count was always 35 (the older AGENTS table listed only 34).
- [x] Source-structure finding documented: the source root holds **35 full pages** (header/footer/scripts inlined) while `pages\` holds **32 fragments** (title + meta + body only). Both carry identical titles/descriptions. `index.html`, `about.html`, `board-of-directors.html` have no `pages\` counterpart.
- [x] Footer year switched to the source's `data-year` markup (`<span data-year>2026</span>`) so `useLegacyInteractions` updates it at runtime via `new Date().getFullYear()` — matching the original `main.js`. Previously a build-time Vue ref baked the year in (and the `data-year` wiring matched nothing). The now-unused `ref` import/script block was removed from `SiteFooter.vue`.
- [x] Static link audit: **177 distinct `/assets/…` references** across `app/` all resolve to real files in `public/` (0 missing images or PDFs).

## 2026 Data Update

- [x] `Data/MASTER_WEIGHT_CHART_2026.csv` (2,110 rows, Latin-1) is the new master source
- [x] `build-catalog-data.mjs` — regenerates `app/data/catalog.ts` from the CSV (idempotent; preserves the die→image map from the current catalog)
- [x] `app/data/catalog.ts` — regenerated: 2,110 products, 39 categories, 66 linked profile images; fields `id/die/name/cat/sub/img` unchanged
- [x] Blank Category/Sub Category rows grouped by CSV **Brand Name** (Maxx, Corporate, DALCO, Stick Wall, Premier, …)
- [x] `public/assets/pdfs/dtl-online-catalogue-sep-2026.pdf` — new full catalogue
- [x] Main catalogue links updated to Sep 2026 on `/catalogue`, `/products`, `/investors-relation`
- [x] Old `dhakathai-alcomaxx-plc---online-catalogue---feb-2025.pdf` removed from `public/assets/pdfs/` (no longer referenced; 68 PDFs shipped)
- [x] `app/data/productBuckets.ts` — maps CSV brand-categories to the six application buckets used by the `/products-*` pages
- [x] `app/components/ProductProfiles.vue` — CSV-driven "Profile Database" card grid (photo, die, name, sub, "Show Drawing" lightbox; deduped by die; "Load more") reusing the online-catalogue `cat-*` CSS
- [x] Profile section added to `/products-architectural` (1,244), `/products-industrial` (307), `/products-furniture` (144), `/products-hardware` (95), `/products-electrical` (119), `/products-others` (16)

## Session 2026-11-14 — drawer, contact, news

- [x] `app/components/SiteHeader.vue` — mobile drawer submenu re-nested for readability: `.dropdown` `margin-left: 52px` + `padding-left: 14px` + a left guide line, submenu links `padding-left: 10px` (hover 13px). Items no longer sit level with (and left of) the parent label.
- [x] `app/components/SiteHeader.vue` — drawer no longer closes on accordion taps: `onMenuCapture` now always blocks the parent `NuxtLink` and toggles the section, instead of navigating to the section landing page (which closed the whole drawer via the route watcher).
- [x] `app/data/routeContacts.ts` — added a `division` field to all 182 rows (62 districts mapped to the 8 divisions); type is now `{ district, division, route, phone }`.
- [x] `app/pages/contact.vue` — rebuilt in the fixed order **Where To Reach Us → Find Us → Investor Resources → Customer Services Team**. New `.reach-card` design (gradient header band, icon rows, Call/WhatsApp/Directions actions); map pins use the old site's exact coordinates (`23.801066,90.424450` / `23.931238,90.311241`); Customer Services table has search + Division→District→Area filters, chips, live count, Call/WhatsApp actions and a mobile card layout.
- [x] `app/pages/news.vue` — restored the TBS infographic (`/assets/img/p7_info_dhakathai-alcomaxx3404.jpg`) and rebuilt the four video cards as `video-thumb` popups that open `VideoModal` (`f89Qwzayf2U`, `bvIPx5s0mXU`, `8KbnYhiR9So`, `2xIttPr0Xww`).
- [x] `progress.md` added (session log) and `AGENTS.md` updated with the contact/news page specs plus a project file map.
- [x] Verified in headless Chrome: drawer at 390/768 px (expand, re-tap collapses, drawer stays open), contact filters (182 → 69 for Dhaka → 1 for "mirpur"), news video popup, `npm run generate` exit 0 (74 routes).

## Session 2026-11-14 (part 2) — modals, dark mode, top button, SEO, 3 pages

- [x] **All images now open in the lightbox.** `useLegacyInteractions.ts` gained a `zoomableImage()` guard (skips chrome, links, buttons, <56px icons, `[data-no-zoom]`) and marks matches with `data-zoomable` + `cursor: zoom-in`. Captions come from `[data-caption]`, `<figcaption>` or `alt`. All YouTube links now open the video modal too.
- [x] **Full dark mode** via `app/assets/css/theme.css` (loaded after `main.css`; `main.css` untouched) + `app/composables/useTheme.ts` + pre-paint inline script in `nuxt.config.ts` (localStorage `dtl-theme`, system preference fallback).
- [x] **Theme switch in the header**, visible on desktop and mobile (logo → sun/moon → burger); sun/moon swap in CSS to avoid hydration flash.
- [x] **Floating back-to-top button** (`app/components/BackToTop.vue`, shows past 480 px scroll, z-index 900).
- [x] **SEO pass**: sitewide Organization + WebSite JSON-LD moved into `layouts/default.vue`, per-page WebPage + BreadcrumbList JSON-LD in `useSeo`, `og:image:width/height`, `apple-touch-icon`, `theme-color` (light/dark), `author`, `geo.*`, `preconnect` to i.ytimg.com.
- [x] **`/projects-list`** rebuilt: data in `app/data/projects.ts` (198 projects), counted tabs, live search, stat cards, empty state.
- [x] **`/projects-image`** rebuilt: data in `app/data/projectGallery.ts` (37 images with `place`), location chips + search + count, tiles still open the lightbox.
- [x] **`/enlisted-developer`** rebuilt: data in `app/data/developers.ts` — source's 955 rows (repeated blocks + ~19 scraped nav/footer lines) cleaned and de-duplicated to 506 companies, with search, A-Z filter and sticky header.
- [x] **`/board-of-directors`** rebuilt from the old page: `app/data/directors.ts` (9 members, each with the old site's three highlight bullets + full bio). Alternating profile rows with portraits, role/independent chips, bio clamped to 4 lines and a `Read full profile` dialog (role=dialog, Escape/backdrop close, scroll lock, focus on open, responsive). Intro stats 9 / 7 / 2 and a governance aside; fixed the broken Sulaiman Ajanee portrait path.
- [x] Verified: lightbox on manufacturing/products/profiles/news/About figure; video thumb still opens the video modal (not the lightbox); nav CTAs unaffected; dark + light screenshots of home, about, products, contact, news, catalogue, online catalogue, dealer list, investors, projects pages at 1280 and 390 px; theme persists on reload; back-to-top appears/scrolls; `npm run generate` exit 0, 74 routes, canonical + OG + 2 JSON-LD blocks in the built HTML.
- [x] Board page verified at 1280 px and 390 px in light + dark: 9 rows, 27 highlights, stat counts, modal opens from portrait and button, Escape closes and restores scroll, no horizontal overflow, no console exceptions.

## Known issues (pre-existing in the source, left verbatim)

- `/products-furniture` has one broken `<img src="/assets/img/02 furniture - office partition profile (3.html">` (with `onerror="this.style.display='none'"`). The **source archive itself** ships that 796-byte 404 page in place of an image, the live site 404s the path, every filename variant 404s, and there is no Wayback snapshot — so it is **not recoverable**. Kept exactly as the source has it; the slot renders empty (as it does on the source site). If the real photo is ever supplied it can simply be dropped in at that path.
- Video popups keep the source's `autoplay=0` embed URL (`videoEmbedUrl()` in `useModal.ts`) so the media / project-video players match the original `main.js`. The home "Play Video" button now opens the intro popup (`i0f2fi61ow0`) as requested — the player is loaded and ready, and one click on YouTube's ▶ starts playback. Change `autoplay=0` → `1` in `videoEmbedUrl()` if autoplay-on-open is preferred.

## Remaining

- [x] `npm install` — `node_modules/` installed
- [x] `app/pages/dealer-list.vue` — rewritten to match `pages\dealer-list.html` exactly: dropped the `DTL_old`-derived hero image/map iframe/"Dealer Phone Directory" block and `<style scoped>`; now `.page-hero` with crumbs/kicker/h1 `Sales Network & Dealer's List`/full p, `.card > .card-body > .dealer-filters#dealerFilters` + `input#dealerSearch`, `.table-wrap > table.data#dealerTable` + `tbody#dealerBody` (rows `class="dealer-row"` `:data-district`), `<p class="text-light-c mt-4" id="dealerCount">`. Removed the invented `divisionMap`/`route.query.division` logic. `app/data/dealers.ts` verified byte-identical to source `js/dealers.js` (182 entries, 0 mismatches).
- [x] `app/pages/enlisted-developer.vue` — all 955 data rows appended (956 `<tr>` total), matching the source exactly (including the ~149 scraped locality/nav/footer rows), per the AGENTS precedent of keeping source defects verbatim.
- [x] `app/pages/online-catalogue.vue` — rewritten: sub-blocks nested inside `.cat-acc-body > .cat-grid[data-grid]` (matching the source's narrow-column layout, 220px sub-blocks); `.cat-acc-body` display driven by an inline `{display:block}` binding instead of `v-show` (so closed bodies are actually hidden — `v-show` could not override the CSS `display:none`); first category open on SSR; category count shows the total; empty-state text "No profiles in this category."; Load-more button shows only when `remaining > 0` with the correct label; source `data-*`/`id`/`d-none` attributes added. Extracted a reusable `app/components/CatalogCard.vue` (local `failed` ref for the image-placeholder fallback).
- [x] `app/assets/css/main.css` restored to be an exact copy of `css/style.css` (3 drifted rules reverted: `.nav` padding 14px 0 → 5px 5px — header 82px → 64px; `.dd-caret` regained `MARGIN-LEFT: 5PX`; `.check-list li::before` content restored to the source's double-encoded mojibake `âœ”`). Rule-level diff now 0.
- [x] Home page "Play Video" button `href` corrected from `#` to `/media` (keeping `@click.prevent` popup behaviour), matching the source's `href="media.html"`.
- [x] `public/assets/map-v5/` (orphaned after the dealer-list rewrite) removed — it was never part of the source archive.
- [x] `app/pages/contact.vue` title capitalisation corrected (`Contact Us` → `Contact US`).
- [x] Title/description audit: 35/35 pages exact (the 3 remaining mismatches are unhead HTML-encoding `&`/`'` in titles vs the source's bare chars — render identically).
- [x] Heading audit: all diffs resolved except the intentional `Profile Database` headings on the 6 `/products-*` pages.
- [x] Image audit: 0 real defects (only leading-`/` normalisation + `&` vs `&amp;` encoding artifacts).
- [x] Case-sensitive text audit: 11 diffs, all intentional (Feb→Sep 2026 PDF, dealer-list/enlisted-developer prerendered rows, online-catalogue prerendered cards, products-* Profile Database sections).
- [x] Interactive smoke-test (headless Chrome): drawer open/close (toggle/backdrop/X), mobile accordion expand/collapse + auto-expand current page section, lightbox on `/projects-image`, video popup on `/media` (autoplay=0), PDF modal on `/catalogue` (desktop), dealer district filter + search, all three catalogue views + search + Load more (60→120 verified), footer year 2026.
- [x] `npm run generate` succeeds (72 prerendered routes, 0 errors); `dist/` has 38 `.html` files (35 routes + 200.html + 404.html; map-v5 embed and its dir removed).
- [x] `npm install` — `node_modules/` installed
- [x] `npm run generate` — build succeeded (**72 prerendered routes**); `dist/` generated with **35 page routes** + assets; every page title + description verified identical to the source (3 remaining title mismatches are unhead HTML-encoding artifacts: `&`/`'` → `&amp;`/`&#x27;`, render identically)
- [x] First deployment → `publish/` (528 files, 111 MB; `robocopy /e /mir`)
- [x] Set deploy target in `deploy.bat` arg or `DTL_DEPLOY_TARGET` env var (optional, for future redeploys)

## Commands

```powershell
# Install deps (required first)
npm install

# Dev server (http://localhost:3000)
dev.bat

# Static build → dist/
build.bat

# Build + copy dist/ to deploy target
deploy.bat "path\to\hosting"
```
