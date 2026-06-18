# Infusion Therapy at Restoration Medical

A calm, editorial, physician-led marketing and education website for the
Infusion Therapy line at Restoration Medical. Black-and-white by default, with
colour reserved almost entirely for the drips and shots mega-menu and the
treatment cards, where each treatment family carries an accent drawn from its
ingredients.

Built with [Astro](https://astro.build) (static output), fully data-driven, no
runtime framework. The mega-menu, concern pages, detail pages, and every
cross-link generate from one set of data files.

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # preview the production build
npm run check    # astro type-check
```

## Brand and voice (non-negotiable)

- Warm, calm, hopeful, clinical-but-human. Physicians first.
- **No em dashes.** Use periods, commas, or restructure. A build scan should
  stay clean (`grep -rn "—" src/`).
- Soft, honest language: "may support", "designed to support", "helps
  maintain", always with "results vary". No guaranteed outcomes (CPSO).
- Glutathione / Radiance: antioxidant and skin-radiance support only. Never
  whitening or guaranteed lightening.
- Metabolic / carnitine / lipotropic: support within a medically guided
  program only. Never standalone weight-loss claims.
- **No pricing anywhere.** CTAs route to `/book`.

## Content model (single source of truth)

All content lives in `src/data/`. Cards, the mega-menu, concern pages, and
detail pages all read from here. Add content by editing these files; pages
regenerate automatically.

| File | What it holds |
| --- | --- |
| `src/data/families.ts` | The accent-colour map. **This is the only place colour is defined.** Each family has `accent` (dots, rules, hover) and `text` (a contrast-safe variant for small coloured text). |
| `src/data/ingredients.ts` | The ingredient library. Each ingredient has a plain-language `oneLine`, `whatItIs`, `maySupport[]`, and optional `goodToKnow`. |
| `src/data/treatments.ts` | Drips and shots in one shape. Drives the menu, cards, and detail pages. |
| `src/data/concerns.ts` | The empathetic "by concern" spine. Connects feelings to treatments and ingredients. |
| `src/data/site.ts` | Brand facts, contact, locations, and integration endpoints. Holds the `__PLACEHOLDER__` sentinel. |

### Add a treatment (drip or shot)

1. Add an entry to the `treatments` array in `src/data/treatments.ts`.
2. Set `type` (`"drip"` or `"shot"`) and `family` (a key from `families.ts`).
3. Reference ingredient slugs in `ingredients[]`, concern slugs in
   `concerns[]`, and other treatment slugs in `pairsWith[]`.
4. For signature drips shown in the mega-menu, set `signature: true` and give a
   short `menuDescriptor` (about four words).

A page at `/drips/<slug>` or `/shots/<slug>` is generated automatically, and the
treatment appears in the menu, the relevant family group, concern pages, and any
ingredient page that lists it.

### Add an ingredient

1. Add an entry to the `ingredients` array in `src/data/ingredients.ts`.
2. Set its `role` (Vitamin, Mineral, Antioxidant, Amino acid, Specialty) and
   `family`.
3. Reference its slug from any treatment's `ingredients[]`.

`foundIn` is derived automatically, so you never maintain it by hand. A page at
`/ingredients/<slug>` is generated.

### Add a concern

1. Add an entry to the `concerns` array in `src/data/concerns.ts`.
2. Give it a `humanHeadline`, an empathetic `open`, an honest `howItHelps`, and
   reference treatment and ingredient slugs.
3. To route a concern to a clinical page instead of a wellness list (as Iron
   does), set `externalHref`.

A page at `/concerns/<slug>` is generated, and the concern appears in the
mega-menu, the By Concern dropdown, and the home and concerns grids.

### Where the accent-colour map lives

`src/data/families.ts` (the data) and the `:root` block in
`src/styles/global.css` (the CSS variables, `--accent-<family>`). The two must
stay in sync. Cards and the mega-menu read the accent via
`var(--accent-<family>)`; nothing else on the site uses these colours.

## Filling placeholders before launch

`src/data/site.ts` uses a `__PLACEHOLDER__` sentinel for values not yet known
(phone, addresses, hours, map links, the form endpoint). The UI hides anything
still on a placeholder, so there are no dead links or empty fields. Fill a value
once and it propagates to the footer, contact page, schema, and CTAs.

To wire the consult form, set `integrations.formEndpoint` in `src/data/site.ts`
to a real POST endpoint (for example Formspree, a serverless function, or the
clinic's intake URL). Until then, the form validates and shows a graceful
confirmation instead of posting to a dead URL.

Update the production domain in `astro.config.mjs` (`site`) and in
`public/robots.txt`.

## Accessibility and performance notes

- Keyboard-accessible mega-menu: `aria-expanded`, focus management, Escape to
  close, click-outside to close. Collapses to a clean accordion on mobile.
- `prefers-reduced-motion` is respected on every animation.
- Above-the-fold hero text uses a CSS-only entrance (`.in-load`), never held at
  `opacity: 0` behind JS, so LCP is safe. Below-the-fold uses `.reveal`.
- Hover effects are gated to `(hover: hover) and (pointer: fine)`.
- Semantic HTML, visible focus, skip link, alt text, and accent `text` variants
  chosen to pass WCAG AA on the paper background.

## Site map

`/`, `/how-it-works`, `/concerns` (+ `/concerns/[slug]`), `/drips` (+
`/drips/[slug]`, `/drips/build-your-own`), `/shots` (+ `/shots/[slug]`),
`/ingredients` (+ `/ingredients/[slug]`), `/iron-therapy`,
`/metabolic-program`, `/memberships`, `/safety`, `/about`, `/book`, `/contact`.

## Open items for Sergio (do not block build)

- Real photography and clinic imagery to replace the calm placeholder layout.
  Detail and hub pages leave generous negative space where ingredient
  still-lifes, clinic interiors, and hands/care moments can drop in.
- Final copy review by the physician for claims sign-off before launch.
- Confirm the exact treatment list and any seasonal items.
- Booking system integration: set `integrations.formEndpoint` (and optionally
  `schedulerUrl`) in `src/data/site.ts`.
- Pricing is intentionally excluded by direction.
- Legal / CPSO / PHIPA review of all claims and the iron coverage language
  before going live.
