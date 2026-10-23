# DHAKATHAI ALCOMAXX PLC — Website (Nuxt 4 SSG)

Static-site port of the DHAKATHAI ALCOMAXX PLC website built with **Nuxt 4.5.2** + **Vue 3.5.41**. Generates a `dist/` folder for static hosting via `npm run generate`.

> **Constraint:** This is an exact-content port of the legacy static HTML site — same pages, same CSS (`app/assets/css/main.css` is a verbatim copy of the source `css/style.css`), same images/assets, same interactions rewritten in Vue reactivity. No UI library, no Tailwind, no YouTube API client.

---

## Prerequisites

- **Node.js** 18+ (recommend 20 LTS)
- **npm** (bundled with Node)

---

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd DTL_Webiste_NUXT
npm install
```

> `package.json` uses `"type": "module"`. All helper scripts are `.cjs` / `.mjs` accordingly.

---

## Project Scripts

All scripts run from the project root:

| Script | Command | Description |
|--------|---------|-------------|
| **Dev server** | `npm run dev` (or `scripts\dev.bat`) | Starts Vite dev server at `http://localhost:3000` with hot reload |
| **Static build** | `npm run generate` (or `scripts\build.bat`) | SSG build via Nitro → `dist/` (72 prerendered routes, 35 pages) |
| **Preview** | `npm run preview` | Serve `dist/` locally to verify the production build |
| **Deploy** | `npm run deploy` (or `scripts\deploy.bat "path"`) | Builds `dist/` and mirrors it to a deploy target (see below) |
| **Regenerate catalogue data** | `node scripts\build-catalog-data.mjs` | Rebuilds `app/data/catalog.ts` from `Data/MASTER_WEIGHT_CHART_2026.csv` |
| **Regenerate division data** | `node scripts\build-division-data.cjs` | Rebuilds `app/data/divisionDealers.ts` from parsed division data |

### PowerShell (Windows)

```powershell
# Install
npm install

# Dev (localhost:3000)
npm run dev

# Static build → dist/
npm run generate

# Preview dist/
npm run preview

# Deploy to a target folder
npm run deploy "D:\path\to\hosting"
```

Or use the batch wrappers:
```
scripts\dev.bat
scripts\build.bat
scripts\deploy.bat "D:\path\to\hosting"
```

### Deploy target

`scripts\deploy.bat` accepts an optional path argument; otherwise it reads the `DTL_DEPLOY_TARGET` environment variable:

```cmd
scripts\deploy.bat "D:\path\to\hosting"
setx DTL_DEPLOY_TARGET "D:\path\to\hosting"
scripts\deploy.bat
```

It runs `scripts\build.bat` first, then `robocopy dist\ "%DEST%" /e /mir`.

---

## Project Structure

```
DTL_Webiste_NUXT/
├── app/
│   ├── app.vue                  # Root component
│   ├── layouts/
│   │   └── default.vue          # Single layout: header + slot + footer + modals
│   ├── pages/                   # 35 Nuxt pages (index, about, products-*, dealer-list, etc.)
│   ├── components/
│   │   ├── SiteHeader.vue       # Topbar + desktop/mobile nav with accordion dropdowns
│   │   ├── SiteFooter.vue
│   │   ├── LightboxModal.vue
│   │   ├── PdfModal.vue
│   │   ├── VideoModal.vue
│   │   └── BangladeshMap.vue    # Clickable SVG division map → dealer modal
│   ├── composables/
│   │   ├── useModal.ts          # Modal state (lightbox/pdf/video) + scroll lock
│   │   └── useLegacyInteractions.ts
│   ├── data/
│   │   ├── catalog.ts           # 2,110 products (CSV-derived)
│   │   ├── dealers.ts           # 182 dealer routes by district
│   │   ├── divisionDealers.ts   # 290 agents/dealers keyed by the 8 divisions
│   │   └── productBuckets.ts
│   └── assets/css/main.css      # Verbomatic port of source css/style.css
├── public/
│   ├── assets/img/              # 321 images
│   ├── assets/pdf/              # 68 PDFs
│   └── assets/map-v5/           # BD divisions SVG + legacy Animate map files
├── build-catalog-data.mjs
├── build-division-data.cjs
├── dev.bat / build.bat / deploy.bat
├── nuxt.config.ts               # SSG config (output.publicDir = 'dist')
├── package.json
└── README.md
```

---

## Deployment (Static Hosting)

1. Run `npm run generate` → produces `dist/` (Nitro static preset, `output.publicDir = 'dist'`).
2. Upload the entire `dist/` contents to any static host (Apache, Nginx, Netlify, Vercel, GitHub Pages, etc.).
3. No server-side processes required — pure HTML/CSS/JS.

For GitHub Pages, use the `dist/` folder as the publish source (or a GitHub Action that runs `npm install && npm run generate` and deploys `dist/`).

---

## GitHub

Clone:

```bash
git clone https://github.com/<owner>/<repo>.git
```

Push changes:

```bash
git add .
git commit -m "feat: describe your change"
git push
```

Do **not** commit `node_modules/`, `.nuxt/`, or `dist/` — they are generated locally / in CI.

---

## Key Notes

- **No new packages** — runtime dependencies are only `nuxt`, `vue`, `vue-router`.
- **No Tailwind or UI library** — all styling is in `app/assets/css/main.css` (exact copy of the legacy `css/style.css`; class names must not be changed).
- **Page meta** — every page sets its own `useHead({ title, meta })`; `nuxt.config.ts` appends ` | DHAKATHAI ALCOMAXX PLC` via `titleTemplate`.
- **Links** — internal navigation uses `<NuxtLink to="/route">`; asset paths carry a leading `/` (e.g. `src="/assets/img/..."`).
- **Modals** — lightbox / PDF / video use `<Teleport to="body">` and the `.modal` / `.modal.open` classes from `main.css`.
- **Dealer map** — click any of the 8 Bangladesh divisions on the SVG map (`/dealer-list`) to open a scrollable modal listing that division's agents/dealers with Call/WhatsApp links plus "Other Contacts."
