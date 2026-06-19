# Restoration Medical — Design System

A shared design language for **Restoration Medical** and its service lines.
It was built for *Infusion Therapy at Restoration Medical* and is documented
here so a sibling line — **Medical Aesthetics at Restoration Medical** — can
reuse it as a template. The rule of the system is **restraint: black-and-white
editorial, with colour as a controlled reward.**

> Tagline for every line: **“Refined by Medicine.”**

---

## 1. Brand foundation

**Who we are.** A physician-led medical practice. Every line is held to the
same clinical standard, whether it is an infusion or an aesthetic treatment.

**Voice & tone.**
- **Honest by default** — no guaranteed outcomes, careful language, “results
  vary”. We say what something can and cannot do.
- **Calm** — unhurried, considered, never a hard sell. Restraint is the luxury.
- **Physician-led** — reviewed by a physician, delivered by clinicians.
- **Personal, not packaged** — we screen first and tailor to the person.

**Principles (hold these in every decision).**
1. The page is quiet; colour blooms only where it earns attention.
2. Motion is liquid and slow, never decorative noise.
3. Trust is a design feature — evidence, screening, and oversight are shown,
   not implied.
4. Accessibility and honesty are non-negotiable (Ontario: AODA, PHIPA, CPSO).

---

## 2. Design tokens

All tokens are CSS custom properties on `:root` (see `src/styles/global.css`).
**Neutrals, type, spacing, radius, and motion are shared across all lines.**
**Only the accent palette and the signature motif change per line.**

### 2.1 Neutrals (shared, keyed to the clinic’s real finishes)
| Token | Value | Use |
|---|---|---|
| `--ink` | `#1a1b1d` | Primary text, dark surfaces (Soft-Touch matte black) |
| `--paper` | `#fcfcfd` | Page background (Ultra-Pure white walls) |
| `--graphite` | `#3b3d40` | Secondary text |
| `--mist` | `#6c6e73` | Captions, meta, mono labels |
| `--line` | `#e6e8eb` | Hairlines, dividers, borders |
| `--cloud` | `#eff1f3` | Quiet section fills (`.fill`) |
| `--white-pure` | `#ffffff` | Elevated panels/cards base |
| `--gloss-white` | gradient | High-gloss panel sheen (cards) |
| `--sparkle` | radial dots | Whisper of fleck on cards |

### 2.2 Accent palette (per-line; this is what you reskin)
Accents appear **only** on small elements — dots, rules, hovers, card top-bars,
mega-menu, icons. Each accent ships with a **contrast-safe `text` variant** that
passes WCAG AA on `--paper` (small accent text uses the darker variant).

*Infusion line families* (`src/data/families.ts`):
`wellness #3E5C6E`, `radiance #B98AAE`, `immune #C2703D`, `energy #C9A227`,
`metabolic #6E8B5A`, `clinical #8C3B3B`, `recovery #4F7C82`, `neutral #6E6E6E`.

Discipline: muted, desaturated, “considered apothecary, not a rainbow.” Keep
roughly this saturation/value range for any new line so the families feel like
siblings.

### 2.3 Typography (shared)
| Role | Font | Token | Notes |
|---|---|---|---|
| Display | **Fraunces** (serif) | `--display` | Headlines, hero, names. Weight ~360–380, `letter-spacing: -0.01em`. Italic (`.it`) for emphasised fragments. |
| Body | **Inter Tight** | `--body` | Paragraphs, UI, line-height 1.6 |
| Mono | **Spline Sans Mono** | `--mono` | Eyebrows, captions, ticks, evidence tags — uppercase, letter-spaced |

**Type scale** (fluid `clamp`): `--step--1` … `--step-5`
(0.83rem → up to 6rem). Hero ≈ `--step-5`, pull-quotes ≈ `--step-4`, section
titles ≈ `--step-3`, body `--step-0`. `--measure: 65ch` for prose.

### 2.4 Spacing, radius, layout
- Space ramp: `--space-xs .5` `s 1` `m 2` `l 4` `xl 6` `xxl 9` (rem).
- `--radius: 4px` (tight, clinical), `--header-h: 68px`.
- Containers: `.wrap` = `min(100% - 2.5rem, 1180px)`; `.wrap-narrow` = `760px`.
- Sections: `.section` (xl padding), `.section-tight`; `.fill` = cloud bg band.

### 2.5 Motion
- Easing: `--ease: cubic-bezier(0.22, 0.61, 0.36, 1)` (the single house curve).
- Durations: micro 0.2s, hover 0.3s, reveal 0.7–0.8s.
- **Always honour `prefers-reduced-motion`** — every effect has a static
  fallback (see §5).

---

## 3. Components

Reusable Astro components (see `src/components/`). These are line-agnostic.

| Component | Purpose | Pattern |
|---|---|---|
| **Nav + mega-menu** | Primary nav, “By Concern” + product mega-panel | Sticky, blur backdrop, hairline border; accent dots per family; mobile accordion drawer + scrim |
| **TreatmentCard** | Product card | Gloss-white panel, accent top-rule, family label, name (Fraunces), essence, ingredient dots, sheen-sweep on hover |
| **IngredientChip** | Tag/link for an active | Dot + name; on hover border/dot/name take the accent |
| **ConcernTile** | Empathetic entry point | Line icon + label + one-liner; **liquid-drop border** travels on hover |
| **PageHeader** | Page hero | Eyebrow (+dot), big Fraunces title, lead |
| **PullQuote / RandomPullQuote** | Editorial beat | Oversized Fraunces, accent rule, mono caption; random line per visit |
| **CtaBand** | Section CTA | Heading + body + buttons, on a fill band |
| **Footer** | Global footer | Brand, link columns, locations, legal row; gradient seam (no hard border) |
| **Forms** | Consult/contact | Mono labels, hairline fields, graceful no-endpoint confirmation |
| Buttons | `.btn`, `.btn--ghost`, `.btn--lg` | Ink fill / inverts on hover; ghost = outline |
| Eyebrow / meta | `.eyebrow`, `.meta` | Mono, uppercase, letter-spaced, mist |
| Evidence tag | Established / Emerging | Solid vs hollow dot + per-item tooltip (trust signal) |
| Advisory | Conflict/safety callout | Tinted clinical-accent box with `!` badge |

**Card / panel recipe:** `--white-pure` bg + `--gloss-white` + `--sparkle`,
`1px solid --line`, `--radius`, accent top-rule, lift + sheen on hover.

---

## 4. Iconography & imagery

- **Icons:** single-stroke line art, `currentColor`, `stroke-width 1.5`,
  `24×24` viewBox, rounded caps/joins (`ConcernIcon` pattern). Add by slug.
- **Imagery:** sparing, clinical-calm, lots of negative space. The *signature
  visual motif is the line that differentiates each sub-brand* (see §6).
- **Compliance on photos (Ontario/CPSO):** no patient testimonials; any
  before/after must be representative, consented, and unretouched.

---

## 5. Motion & interaction language

| Effect | What it is | Where |
|---|---|---|
| **Diffusion reveal** | Content blooms into focus (blur→sharp, slight rise) | All below-the-fold sections (`.reveal`) |
| **Liquid hero** | Canvas fluid blooming inside the signature vessel | Home hero |
| **Droplet cursor** | Soft accent droplet trails the pointer, swells over interactive elements | Global, fine-pointer only |
| **Title ripple/warp** | Letters ripple & warp like a liquid surface from the cursor | Hero titles + pull-quotes (`.ripple`) |
| **Liquid-drop border** | A drop of accent travels the card edge | Concern tiles |
| **Gloss sheen** | Diagonal light sweep on hover | Cards |
| **Paper grain** | Barely-there fractal noise over the page | Global |

Rules: fine-pointer/hover gated; **all disabled or made static under
`prefers-reduced-motion`**; no library (vanilla Canvas/SVG/rAF/IntersectionObserver).

---

## 6. Adapting the template → **Medical Aesthetics at Restoration Medical**

Keep everything in §2.1, §2.3–2.5, §3, §5. **Change three things: the accent
palette, the signature motif, and the content taxonomy.**

### 6.1 Accent palette (proposed, same muted discipline)
Skin-adjacent, warm-luxe. Each needs a darker `text` variant for AA.

| Service family | Accent (suggested) | Reads as |
|---|---|---|
| Injectables (tox / filler) | `#9C6B86` muted plum | refined, considered |
| Skin & resurfacing (peels, microneedling) | `#C58A77` warm clay/peach | renewal |
| Energy & laser (IPL, RF, lasers) | `#C8A24B` champagne gold | light/energy |
| Body & contour | `#7E8B6E` soft sage-olive | natural |
| Skin health (medical-grade actives) | `#5E8A8C` muted teal | clarity |
| Clinical / consult | `#8C3B3B` (shared) | medical |

Keep the **base neutrals and gloss exactly the same** so the two lines read as
one family. Theme by overriding only the accent custom properties.

### 6.2 Signature motif (replace the IV bag, keep the technique)
The infusion line’s motif is **fluid in an IV bag**. For aesthetics, shift to
**light & skin** while reusing the same canvas/SVG machinery:
- Hero centrepiece: a **luminous bloom / refraction** (soft radial light through
  the diffusion canvas) or a line-art **face-profile** with a slow light sweep —
  instead of the bag silhouette.
- “Specimen” swatch on modality pages: a **glow** in that family’s accent
  (reuse the single-colour diffusion, reframed as light not ink).
- Keep the **droplet cursor** (reads as serum), the **diffusion reveal**, and
  the **ripple** (reads as a smooth skin/serum surface).

### 6.3 Content taxonomy (map the infusion structure across)
| Infusion line | → Aesthetics line |
|---|---|
| Drips & Shots | **Treatments** (Injectables, Skin & Resurfacing, Energy & Laser, Body, Skin Health) |
| Ingredient library + **evidence tags** | **Modalities / Actives** library, *keep the Established/Emerging evidence tags* — rare and very on-brand for aesthetics |
| By Concern | **By Concern**: fine lines & wrinkles, volume & contour, texture & tone, acne & scarring, pigmentation, redness, laxity & lifting, hair restoration, aging well |
| Build Your Own | **Plan your treatment** configurator (areas + goals → consult) with the same “not a prescription, your physician finalises” advisory |
| Iron Therapy (clinical proof) | a genuine **medical** anchor (e.g., medical dermatology / scar revision) to keep the clinic-not-counter positioning |
| Safety & screening | **Candidacy & safety** (contraindications, downtime, what to expect) |
| Memberships | Memberships |

### 6.4 Voice notes specific to aesthetics
- Lead with **natural-looking, you-refined** outcomes; avoid “anti-aging” hype.
  Prefer “aging well”, “subtle by design”, “look like yourself, refined.”
- Be explicit about **downtime, longevity of results, and that results vary.**
- Same **no-testimonials / no-guarantees** rules; keep evidence tags honest.

### 6.5 Reuse checklist for a new line
1. Copy `src/styles/global.css`; **override only the accent block** (§6.1).
2. Swap `src/data/families.ts`, `concerns.ts`, `ingredients.ts` for the
   aesthetics taxonomy (§6.3); keep the data shapes and the evidence map.
3. Replace the **hero motif component** (§6.2); keep cursor/reveal/ripple/grain.
4. Update `src/data/site.ts` brand/line/description/locations.
5. Reuse Nav, Footer, cards, chips, tiles, PageHeader, PullQuote, CtaBand,
   forms, advisories, legal pages **unchanged**.
6. Re-skin imagery; respect CPSO photo rules.
7. Keep the legal set (Privacy/Terms/Accessibility) and analytics wiring.

---

## 7. Governance
- **One source of colour:** accents live only in the data/token files; never
  hard-code hex in components.
- **Contrast:** every accent used as small text must have an AA `text` variant.
- **Motion budget:** new effects must ship a reduced-motion fallback and be
  fine-pointer gated.
- **Honesty review:** any benefit claim uses soft “may support” language and is
  checked against CPSO advertising rules before publishing.
