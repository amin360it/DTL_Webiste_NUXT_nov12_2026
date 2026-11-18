# PROGRESS — DTL Website Nuxt Migration

Running log of what was built and changed. Newest entries last.
Project root: `./`

## Session 2026-11-14 — drawer, contact page, news page

### 1. Mobile drawer (`app/components/SiteHeader.vue`)

- **Submenu was too far left.** The drawer's nested dropdown used `margin-left: 34px`, which put the
  submenu text on exactly the same x as the parent label, so the child list read as a sibling row.
  Now the dropdown is a properly nested panel: `margin-left: 52px`, `padding-left: 14px` and a
  `border-left: 1px solid rgba(255,255,255,0.09)` guide line, with the submenu links at
  `padding-left: 10px` (hover `13px`) and `.dd-title` un-indented. Verified at 390 px and 768 px.
- **Drawer closed unexpectedly.** Tapping a section header that was already expanded fell through to
  the `NuxtLink`, navigated to the section landing page and the route watcher then closed the drawer —
  so a user tapping "Products" twice to collapse the accordion lost the whole menu. The mobile
  capture-phase handler (`onMenuCapture`) now always prevents the parent link from navigating and
  toggles the section (`openSection = openSection === name ? '' : name`). The drawer stays open for
  every accordion tap; it still closes on an explicit link navigation, the backdrop, the × button,
  Escape, and resizing past 820 px.

### 2. Contact page (`app/pages/contact.vue`, `app/data/routeContacts.ts`)

Rebuilt to the requested section order:

1. **Where To Reach Us** — two redesigned cards (`.reach-card`): navy gradient header band with icon,
   eyebrow label and area chip; company name, address; landline / mobile / e-mail rows with icon tiles;
   action row with `Call now` (amber), `WhatsApp` and `Directions`.
2. **Find Us** — two map cards pinned to the **exact coordinates from the old site**
   (`DTL_old/https___dhakathaibd.com_/dhakathaibd.com/contact.html`): corporate office
   `23.801066,90.424450`, factory `23.931238,90.311241`, plus the full address under each map and a
   "Get directions" link.
3. **Investor Resources** — the four resource cards (Investor Relations, Corporate Governance,
   Board of Directors, IPO Prospectus PDF).
4. **Customer Services Team** — the 182 source rows (District / Route Name / Mobile Number) turned into
   a smart filtered table: free-text search, **Division → District → Area** cascading selects, active
   filter chips, live "Showing N of 182" count, clear-filters button, call + WhatsApp action buttons,
   and a card layout under 620 px.

`app/data/routeContacts.ts` gained a `division` field for all 62 districts
(`{ district, division, route, phone }`); divisions are listed in canonical order
(Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur, Mymensingh).

### 3. News page (`app/pages/news.vue`)

- The missing **TBS infographic** now renders at the top of the IPO article
  (`/assets/img/p7_info_dhakathai-alcomaxx3404.jpg`, copied from the old site — identical 139,040-byte
  file, already present in `public/assets/img/`).
- The four video cards (fabricators, Channel 24 IAB 2023, Desh TV IAB 2023, Dealer Conference 2022)
  now use the site's `video-thumb` + `VideoModal` pattern instead of raw iframes: clicking a thumbnail
  opens the popup with the matching embed (`f89Qwzayf2U`, `bvIPx5s0mXU`, `8KbnYhiR9So`, `2xIttPr0Xww`).
  Video ids/titles were resolved from the old `news.html` and confirmed against YouTube oEmbed.

### 4. Verification (headless Chrome via CDP)

- Drawer 390 px / 768 px: open, expand Products, re-tap Products → section collapses, drawer stays
  `nav-menu open`, URL unchanged; submenu text nested under the parent label.
- Contact 1280 px / 390 px: sections render in the required order; 182 rows initial; Division=Dhaka →
  69 rows, district list 13; search "mirpur" → 1 row (`Mirpur Model`); maps load with pins.
- News: infographic visible; 4 video thumbs; clicking one opens `#videoModal` with
  `youtube.com/embed/bvIPx5s0mXU` and the correct toolbar title.
- `npm run generate` → exit 0, 74 prerendered routes, `dist/` OK.

## 2026-11-14 — part 2: modals, dark mode, SEO, project pages

### 1. Every image / video opens in a modal

`useLegacyInteractions.ts` keeps a single delegated click listener. It now zooms **any** content
image, not just `[data-lightbox]` wrappers: `zoomableImage()` skips chrome (header/footer/topbar/drawer),
modal internals, buttons, `.tab-btn`, icons under 56 px and `[data-no-zoom]`, and it lets real links
win (card CTAs, PDFs) unless the link is a lightbox trigger or points at an image. Eligible images get
`data-zoomable` + `cursor: zoom-in`. Captions come from `[data-caption]`, `<figcaption>` or `alt`.
YouTube links (`watch`, `youtu.be`, `/embed`, `/shorts`) open the video popup instead of leaving the site.
Click order: video-thumb → lightbox trigger → PDF → tab → YouTube link → image.

### 2. Dark / light theme + header switch + back-to-top

- `app/assets/css/theme.css` (loaded after `main.css`) holds every dark override; `main.css` is untouched.
  Tokens are flipped (`--light`, `--light-2`, `--text`, `--text-light`) plus per-class surface overrides,
  because `--white` doubles as text on navy sections and must not be redefined.
- `app/composables/useTheme.ts` stores the choice in `localStorage['dtl-theme']`; an inline script in
  `nuxt.config.ts` applies it before first paint (system preference when unset), so there is no flash.
- `.theme-toggle` in `SiteHeader.vue` is visible on desktop and mobile (mobile: logo → sun/moon → burger).
- `BackToTop.vue` shows after 480 px of scroll, z-index 900 so it stays under the modals.
- Gotcha found while testing: `:global(html[data-theme='dark'])` inside a scoped SFC compiles onto
  `<html>` itself in this Vue version, setting `display:none` and blanking the site in dark mode.
  All such rules now live in `theme.css`.

### 3. SEO pass

Organization + WebSite JSON-LD moved to `layouts/default.vue` (sitewide); `useSeo` now emits a
WebPage + BreadcrumbList graph per page plus `og:image:width/height`; `nuxt.config.ts` adds
`apple-touch-icon`, light/dark `theme-color`, `author`, `geo.region`, `geo.placename` and a
`preconnect` to `i.ytimg.com`. Built HTML verified: canonical, OG/Twitter, two JSON-LD blocks.

### 4. Rebuilt pages

- `/projects-list` — `app/data/projects.ts` (23 ongoing, 99 from 2018-19, 76 from 2016-17); counted
  tabs, live search, stat cards, empty state.
- `/projects-image` — `app/data/projectGallery.ts` (37 images, place derived from caption); location
  chips (Dhaka 32, Chattogram 3, Other 2), search, count; tiles keep `data-lightbox`.
- `/enlisted-developer` — `app/data/developers.ts`; the 955 source rows (repeated blocks and scraped
  nav/footer text) were cleaned and de-duplicated to 506 companies, with search, A–Z filter and a
  sticky table header.
- `/about` — rebuilt earlier in this session: stats band, full source paragraphs, grouped facility
  cards, figure caption, closing CTA.

### 5. Verification

Headless Chrome (CDP):
- image clicks open `#lightbox` on `/manufacturing`, `/products`, `/products-architectural`, `/news`
  and the About figure (with captions); `.video-thumb` on `/media` still opens `#videoModal` with the
  right embed; product card CTAs still navigate (`/products` → `/products-industrial`).
- dark/light screenshots at 1280 px of home, about, products, contact, news, career, catalogue,
  online catalogue, dealer list, investors relation, projects-image, projects-list, enlisted-developer;
  mobile at 390 px (header with toggle, drawer with nested submenu, gallery) with no horizontal overflow.
- theme toggle persists across reloads; back-to-top hides at top and returns to 0 on click.
- `npm run generate` → exit 0, 74 prerendered routes.

## 2026-11-14 — part 3: Board of Directors page

- Data moved to `app/data/directors.ts` (9 members). Each entry now carries the three highlight
  bullets that exist on the old site but were missing from the port, plus the full bio.
- Page rebuilt as refined alternating profile rows: portrait, role (with an `Independent` chip),
  name, the three highlights and a bio clamped to four lines, with `Read full profile` opening a
  dialog. Above the list: intro copy, 9 / 7 / 2 stat cards and a navy governance card linking to
  `/investors-relation#governance`.
- New modal: local Teleport dialog with `role="dialog"`, `aria-modal`, `aria-labelledby`, Escape and
  backdrop close, body scroll lock, focus moved to the close button, scrollable body and a sticky
  footer; single column under 760 px.
- Fixed the broken portrait for Mr. Sulaiman S. Ajanee (the port referenced
  `09 mr sulaiman s ajaneebe19.jpg`, the real file is `09 mr sulaiman s ajanee - independent directorbe19.jpg`).
- Follow-up polish: the governance card now has a kicker, a three-item "what's inside" list, a soft
  amber corner glow and a single amber CTA row (the old `btn-dark` was navy-on-navy); portraits grew
  from 300 px to 360 px (290 px under 1024) and the dialog portrait from 280 px to 320 px.
- Verified in headless Chrome at 1280 px and 390 px in both themes: 9 rows, 27 highlights, correct
  stat counts, modal open/close + scroll restore, no horizontal overflow, no console exceptions.
  `npm run generate` → exit 0, 74 routes.

## 2026-11-14 — part 4: market-facts cards on Investor Relations

- Replaced the 8-row "Company Financial Highlights" table on `/investors-relation#glance` with an
  eight-card fact grid: amber index (01–08), icon tile, title and the details text unchanged.
- Cards are 2-up above 560 px and 1-up on phones, share the section's reveal animation and lift with
  an amber top bar on hover. Added matching dark-mode rules (`theme.css`).
- Verified: 8 cards, 8 icons, no `<table>` left in the section, 2 columns at 1280 px, no horizontal
  overflow at 1280/390 px, no console errors. `npm run generate` → exit 0, 74 routes.

## 2026-11-14 — part 5: Investor Relations page pass

- Added a jump nav to the hero (IPO documents / Financial highlights / Governance) and gave the three
  anchored sections `scroll-margin-top: 110px` so smooth scrolling no longer hides headings under the
  sticky header.
- Labelled the eight market-fact cards with an `IPO & market parameters` divider row (plus an
  `8 parameters` count) so they read as a separate block from the six financial stat cards.
- Added a closing investor-contact band (navy card, mailto + phone) to end the page instead of the
  document panel; wrapped in a container so it keeps the page gutter, and stacked with full-width
  actions on mobile.
- Verified light/dark at 1280 and 390 px: jump chips 132/158/113 px, scroll margin applied, box
  1225×199 px on desktop and 358 px wide on mobile with the phone wrapping to its own line, no
  horizontal overflow, no console errors. `npm run generate` → exit 0, 74 routes.

## 2026-11-14 — part 6: full investor resource list

- The old site's investor menu had 13 entries; the port only surfaced 3 documents. The Investor
  Resources panel now lists all 13 with a type badge and icon: 3 are real PDFs from
  `public/assets/pdfs/` (Prospectus, Corporate Governance Compliance, Details of Shareholding), the
  rest route to `/news`, `#glance` or `/contact#investor-relations` instead of dead links.
- Panel header gained an item count (`13 items`) beside the heading.
- Verified light/dark at 1280 and 390 px: 13 rows, 13 icons, 0 empty hrefs, 3 PDF links, 3 columns →
  1 on mobile, no horizontal overflow, no console errors. `npm run generate` → exit 0, 74 routes.

## Earlier sessions

See `TODO.md` for the full port history (35 routes, catalogue data 2026, dealer list, modals,
PDF viewer, title/description audit, deployment).
