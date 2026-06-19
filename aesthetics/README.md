# Medical Aesthetics at Restoration Medical

A standalone Astro site for the **Medical Aesthetics** line, built on the
Restoration Medical design system (see `../DESIGN_SYSTEM.md`). It has its **own
components, data, styles, and config**, and shares no code with the infusion
site, so it can live in its own repo and its own Vercel project.

## Run it

```bash
cd aesthetics
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
```

## Deploy (its own project)

Point a new Vercel project at this folder:
- **Root Directory:** `aesthetics`
- **Framework preset:** Astro
- **Domain:** e.g. `aesthetics.restorationmedical.ca` (set in `astro.config.mjs`)

To make it a fully separate repo, copy this `aesthetics/` folder out (plus
`DESIGN_SYSTEM.md`) into a new repository.

## Structure

```
src/
  styles/global.css   design tokens (shared) + aesthetics accents + light motif
  data/               site, families, concerns, modalities (with evidence tags)
  layouts/Layout.astro
  components/         Nav, Footer, Hero, ConcernTile, TreatmentCard,
                      EvidenceTag, PullQuote, CtaBand
  pages/index.astro   landing page
```

## What to build next
- Concern, treatment-family, and modality detail pages (reuse the components).
- A consult/booking form + real form endpoint.
- Legal pages (Privacy / Terms / Accessibility) — copy from the infusion site.
- Real clinic details, physician credentials, analytics, favicon/OG image.
- Respect CPSO advertising rules (no testimonials; consented before/after only).
