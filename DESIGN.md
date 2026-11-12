# DTL DESIGN SYSTEM & UI GUIDE

Reference for any AI agent or developer editing the DHAKATHAI ALCOMAXX PLC Nuxt site.
The rule above all others: **this site is a port of a fixed design**. Reuse what exists
instead of inventing new styles. New CSS is only allowed where no existing class fits,
and then it must use the tokens below.

Files this guide describes:

| File | Role |
| --- | --- |
| `app/assets/css/main.css` | The entire design system, ported verbatim from the source site (`css/style.css`). **Do not edit it.** |
| `app/layouts/default.vue` | Site shell: header, main slot, footer, three modals |
| `app/components/SiteHeader.vue`, `SiteFooter.vue` | Global chrome |
| `app/composables/useSeo.ts` | Page meta helper (title, description, canonical, OG/Twitter, JSON-LD) |
| `app/pages/*.vue` | One file per route; page-scoped styles live in `<style scoped>` only |

---

## 1. COLOUR SCHEMA

All colours are CSS custom properties declared once in `:root` (`main.css` lines 3-27).
Never hard-code a hex value if a token covers it.

| Token | Hex | Role |
| --- | --- | --- |
| `--primary` | `#0b1f3a` | Deep navy. Headings, dark card text, page-hero background |
| `--primary-dark` | `#071426` | Darkest navy. Topbar, footer, `.btn-dark`, `.section-primary`, overlays |
| `--primary-light` | `#16325c` | Mid navy. Link colour, dark hover states |
| `--accent` | `#e0862b` | Aluminium/amber brand accent. Kickers, icons, primary CTA gradient, hover colour |
| `--accent-light` | `#f5b36b` | Light amber. Kicker dot, dark-background accent text, gradient highlight |
| `--accent-dark` | `#b96a1a` | Deep amber. Gradient end stop of `.btn-primary` |
| `--silver` | `#c8ced6` | Metal grey. Muted bullets, small labels |
| `--light` | `#f4f6f9` | Section tint (`.section-light`), `.btn-light` |
| `--light-2` | `#e9edf3` | Borders, dividers, table lines |
| `--text` | `#1f2a39` | Body copy on light backgrounds |
| `--text-light` | `#64748b` | Secondary copy, captions, `/text-light-c` |
| `--white` | `#ffffff` | Cards, page background |

Semantic usage rules:

- **Navy = structure, amber = action.** Navy backgrounds for hero/topbar/footer/primary cards; amber only for CTAs, kickers, icon chips and hover accents.
- Amber on white fails WCAG AA for small text (~2.6:1). Use amber for large/bold text, icons, borders or on navy backgrounds — never for body paragraphs.
- Body text is `--text`; anything secondary is `--text-light`. Do not introduce grey others than these.
- Tinted amber surfaces use `rgba(224, 134, 43, 0.1)` to `0.18` (icon chips, hovers).
- Hairline borders on white: `1px solid rgba(11, 31, 58, 0.08)`.

---

## 2. TYPOGRAPHY

| Token | Stack | Used for |
| --- | --- | --- |
| `--font` | `"Inter", "Segoe UI", Arial, sans-serif` | Body, UI, tables, forms |
| `--font-head` | `"Poppins", "Segoe UI", Arial, sans-serif` | All headings, buttons, kickers, card titles |

Base: `16px` / `line-height: 1.65`, body colour `--text`.
Headings `h1-h5`: Poppins, `--primary`, `line-height: 1.25`.

| Element | Size | Notes |
| --- | --- | --- |
| `.page-hero h1` | `clamp(1.9rem, 3.6vw, 2.8rem)`, weight 800 | White on navy |
| `.section-head h2` | `clamp(2rem, 4vw, 3rem)`, weight 800, `letter-spacing: -0.02em` | Centred |
| `.card-body h3` | ~1.15rem, weight 700 | Card titles |
| `.kicker` | `0.75rem`, weight 800, `letter-spacing: 0.18em`, uppercase | Always above a heading, amber, with a dot |
| Body / lead | `1rem`, `.section-head p` is `1.05rem` | `--text-light` |
| Small / caption | `0.85rem`-`0.92rem` | Topbar, table notes, counts |

Copy voice: sentence case for prose, ALL CAPS only for the hero headline and kickers.
Numbers and figures stay in the same sentence case ("1,300+ profiles").

---

## 3. SPACING, RADIUS, ELEVATION, MOTION

```css
--radius-sm: 10px;   --radius: 16px;   --radius-lg: 24px;
--shadow-sm: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.06);
--shadow-md: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
--shadow-lg: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
--shadow-xl: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

- Container: `max-width: 1400px`, `padding: 0 20px` (`0 16px` below 1024px).
- Section rhythm: `100px` vertical padding; `70px` ≤1024px; `60px` ≤820px.
- Page hero: `90px 0 60px`; `60px 0 40px` ≤820px.
- Grid gap: `28px` (`.grid`), `24px` (`.contact-cards`), `16px` (`.stats` on mobile).
- Cards: `--radius` (16px), `--shadow-sm`, lift to `--shadow-md` + `translateY(-4px)` on hover; images inside scale to `1.07` over 0.4s.
- Buttons: pill (`999px`), `12px 28px` padding, weight 700, `0.9rem`.
- Hover motion is always a small lift (`-2px` / `-3px`), never a colour inversion except `.btn-outline`.
- Respect `prefers-reduced-motion` — `main.css` already disables drawer/dropdown animation there; new motion must do the same.

---

## 4. LAYOUT PRIMITIVES

| Class | Purpose |
| --- | --- |
| `.container` | Centred max-width wrapper, required inside every `<section>` |
| `.section` | Standard vertical rhythm; add `.section-light` for tint, `.section-primary` for navy |
| `.section-head` | Centred block: `.kicker` + `<h2>` + `<p>`; renders a 60×4px amber rule underneath |
| `.page-hero` | Navy header band with `.crumbs` (`Home » Page`), `.kicker`, `<h1>`, `<p>` |
| `.grid .grid-2/.grid-3/.grid-4` | Equal-column responsive grids |
| `.card` > `.card-img` + `.card-body` | Image/body card |
| `.table-wrap` > `table.data` | Scrollable data table; `.num` right-aligns numeric cells |
| `.text-light-c` | Muted paragraph inside cards and notes |
| `.mt-2 / .mt-4 / .mt-14` | Standard vertical offsets; prefer these over inline margins |

Breakpoint ladder (max-width): `1024px` (grids 4→3, section 70px), `900px`, `820px` (mobile drawer, all multi-column grids collapse, section 60px), `768px`, `760px`, `620px`, `430px`, `400px`.

---

## 5. COMPONENT CHEAT SHEET

**Buttons** — `.btn` plus one variant:

| Class | Look | Use |
| --- | --- | --- |
| `.btn-primary` | Amber gradient + amber glow | One per view: the primary action |
| `.btn-dark` | Deep navy, hover mid-navy | Secondary action |
| `.btn-outline` | White with hairline border | Tertiary action |
| `.btn-light` | Light grey on dark sections | On `.section-primary` |

Never place two `.btn-primary` side by side. Internal links use `<NuxtLink class="btn …">`; PDFs and external links use `<a … target="_blank" rel="noopener">`.

**Kicker** — `.kicker` labels the section; text is short (1-3 words), uppercase via CSS, never manually upper-cased.

**Cards** — `.card` + `.card-body`; a card's `<h3>` is Poppins, the paragraph is `.text-light-c`. Cards are never clickable as a whole; put the link inside as a button or text link.

**Page hero** — every inner page starts with `.page-hero` containing `.crumbs`, `.kicker`, `<h1>`, one-sentence `<p>`.

**Tables** — wrap in `.table-wrap`, use `table.data`, keep the `<thead>` label row, `.num` for numeric columns. Long lists stay full-length (they mirror the source data).

**Modals** — three global modals live in the layout and are opened through `useModal()`: `lightbox` (image), `pdf` (PDF viewer), `video` (YouTube embed). Their roots are `#lightbox` / `#pdfModal` / `#videoModal` with a `.modal` + conditional `.open` class; CSS depends on those ids and class names. Do not add a fourth modal pattern.

**Sitemap tree** — `app/pages/sitemap.vue` uses `@he-tree/vue` (`BaseTree`, `OpenIcon`). The library renders client-only, so the page keeps a prerendered static list (`.sm-static`) that is hidden after hydration; any change there must preserve both layers so the page stays crawlable.

**Filters** — chips/buttons use `.btn.btn-dark.filter-btn` with an `.active` state (see `/dealer-list`, `/contact`). Typing filters use a pill input (`border-radius: 999px`, `1px solid var(--light-2)`).

---

## 6. UI/UX RULES

1. **One job per screen.** Hero states the page; sections answer it in order; the last CTA repeats the intended next step.
2. **Content first.** No decorative blocks without copy. Every section needs a `.section-head` (kicker + h2 + one-line promise) unless it is a full-bleed hero or a data table.
3. **Scannability.** Paragraphs ≤ 4 lines; lists over prose; numbers use `+`/commas consistently (`1,300+`).
4. **Consistent affordances.** Anything that navigates looks like a link or a `.btn`. Nothing non-interactive may look like a button.
5. **Depth.** White cards on `--light` sections; never stack shadow on shadow.
6. **Images.** Always `alt` text; profiles and product drawings use `object-fit: contain`; photography uses `cover`. Missing source images stay missing (the port keeps source defects verbatim).
7. **Empty states.** Say what is empty and offer the nearest action ("No dealers in this district — view the full list").
8. **No new dependencies** (the sitemap tree is the sole approved exception) and no UI framework.
9. **Every page is prerendered.** No client-only text that matters for SEO; anything `v-if` gated on `onMounted` needs a prerendered equivalent.

---

## 7. ACCESSIBILITY CHECKLIST

- Colour contrast: body copy ≥ 4.5:1 (`--text`, `--text-light` on white pass; amber text on white does not).
- Keyboard: drawers, accordions, modals and filters reachable by Tab; `Escape` closes the drawer and all modals (`layouts/default.vue` handles the modals).
- Focus: never remove the outline without a visible replacement.
- Icons that carry meaning get `aria-label`; decorative SVGs get `aria-hidden="true"`.
- The mobile drawer toggle exposes `aria-expanded`; accordion parents likewise.
- Touch targets ≥ 40px; the mobile drawer breakpoint is `820px`.
- Tables keep a `<thead>`; long tables stay inside `.table-wrap` so they scroll instead of breaking layout.

---

## 8. SEO CONVENTIONS

Every page calls the shared composable — never raw `useHead`:

```ts
useSeo({
  title: 'Page Title',              // source <title> without the site suffix
  description: 'Source description', // verbatim from the source page
  titleTemplate: null               // only on the home page (full title)
})
```

- Titles and descriptions come from the source pages verbatim; the template `%s | DHAKATHAI ALCOMAXX PLC` is appended automatically.
- `useSeo` emits canonical, OG and Twitter tags and sets `robots`; `app/pages/index.vue` also calls `useOrganizationSchema()`.
- `scripts/build-sitemap.mjs` regenerates `public/sitemap.xml` and `public/robots.txt` on every `npm run generate`; a new route is picked up from `app/pages/*.vue` automatically.
- One `<h1>` per page (inside `.page-hero`), then `<h2>` per section, `<h3>` inside cards.

---

## 9. PAGE SCAFFOLD

```vue
<script setup lang="ts">
useSeo({
  title: 'Page Title',
  description: 'Source description'
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Page</div>
    <div class="container">
      <span class="kicker">Eyebrow</span>
      <h1>Page Headline</h1>
      <p>One sentence describing the page.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Section</span>
        <h2>Section Title</h2>
        <p>Supporting line.</p>
      </div>
      <div class="grid grid-3">
        <div class="card"><div class="card-body"><h3>Title</h3><p class="text-light-c">Copy.</p></div></div>
      </div>
    </div>
  </section>
</template>
```

Page-specific styles go in `<style scoped>` and may only use the tokens above; use `:deep()` to reach third-party or global markup.

---

## 10. DO / DON'T

**Do**
- Reuse `main.css` classes for 95% of any layout.
- Keep the section rhythm (`page-hero` → `.section` blocks → footer).
- Use `NuxtLink` for internal routes, `<a href="/assets/pdfs/…" target="_blank" rel="noopener">` for documents.
- Match the source copy exactly when porting.
- Add leading `/` to every asset path.

**Don't**
- Edit `app/assets/css/main.css`, rename existing classes, or add a CSS framework.
- Introduce a new colour, font, radius or shadow value.
- Use amber for small text on white, or navy for accents.
- Ship a client-only screen that hides content from the prerendered HTML.
- Add comments to code, or `target="_blank"` on internal links.
