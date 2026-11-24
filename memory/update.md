# Session memory (2026-11-12)

## Footer
- `app/components/SiteFooter.vue`
  - Removed the "Contact" block from the footer.
  - Removed the "Manufacturing Process" block.
  - Removed the "Projects" block.
  - Footer grid is now 5 columns on desktop: Brand / Company / Products / Investors.
    - Note: Projects block was removed; footer no longer has a separate Projects column.
  - Tablet (≤1024px): 2 columns; Brand spans full width.
  - Small mobile (≤620px): 1 column.
  - "All Products" link now shows live count: `All Products (2110)`.
- Footer copyright line fixed to single "All rights reserved.":
  - `&copy; <span data-year>2025</span> DHAKATHAI ALCOMAXX PLC &reg;. All rights reserved.`

## Online catalogue
- `app/pages/online-catalogue.vue`
- `app/assets/css/main.css`
- `app/components/CatalogCard.vue`
- Product card grid converted back to a flex-wrap layout:
  - 6 columns on wide screens.
  - 5 / 4 / 3 columns as the screen narrows.
  - Cards size by content (height: auto), not stretched to a tall column.
- Placeholders stay in the same flex flow so empty slots keep the same footprint.
- Accordion-body view still 2 columns on desktop / 1 column on mobile.
- `npm run generate` passes; `dist/` mirrored to `publish/www/`.

## Build
- `npm run generate` → 82 routes in `dist/`.
- Mirror: `rm -rf publish/www/* && cp -r dist/. publish/www/`
- No new packages added; `app/assets/css/main.css` not edited outside the session's card/flex changes.

## Notes for next agent
- If the footer needs a different column count or a different collapse point, change only the grid-template rule in `SiteFooter.vue`.
- If the catalogue grid needs a different column count, change the flex-basis calc and the media-query breakpoints in both `app/pages/online-catalogue.vue` and `app/assets/css/main.css`.
- If "all product cards same height" is requested again, add `height: 100%` back onto `.cat-grid > .cat-col > .cat-card` in `main.css`; current state is height:auto so content drives each card.
