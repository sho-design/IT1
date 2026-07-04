# Restoration Medical — Brand Design System

**Portable spec, v1.0.** This document is self-contained: everything needed to
design or build for **Restoration Medical** — the parent brand — and its two
service lines, **Infusion Therapy** and **Medical Aesthetics**. Hand this file
to any designer, developer, or AI design tool as the single source of truth.

> Parent tagline, used by every line: **“Refined by Medicine.”**

---

## 1. Brand foundation

**Who we are.** A physician-led medical practice in Thornhill & Maple
(Vaughan), Ontario. Two public-facing lines share one clinic, one physician
(Dr. Johnny Nguyen, Medical Director), and one standard:

| Line | What it is | Signature idea |
|---|---|---|
| **Infusion Therapy** | IV drips, IM shots, clinical iron therapy | **Liquid** — fluid, drops, diffusion |
| **Medical Aesthetics** | Injectables, skin, laser, body | **Light** — glow, bloom, refraction |
| **Restoration Medical** (parent) | The clinic that holds both | **Liquid + light** — one calm room, two rewards |

**The one rule of the system:** *restraint*. Black-and-white editorial pages;
colour appears only as a small, earned reward (a dot, a rule, a hover). If a
layout feels colourful, it is off-brand.

**Voice & tone.**
- **Honest by default** — “may support”, “results vary”, never guaranteed
  outcomes. Say what something can and cannot do.
- **Calm** — unhurried, considered, never a hard sell. Restraint is the luxury.
- **Physician-led** — “reviewed by our physician, delivered by our nurses” is
  said, shown, and designed in (trust bands, evidence tags, screening-first).
- **Personal, not packaged** — we screen first and tailor to the person.
- House phrases: *“Refined by Medicine.” “A consult confirms what is right for
  you.” “Screened first.” “The calm is the point.”*

**Non-negotiables (Ontario):** CPSO advertising rules (no patient
testimonials, no superlatives like “best/premiere”, no guaranteed outcomes),
PHIPA/PIPEDA privacy, AODA/WCAG 2.0 AA accessibility.

---

## 2. Colour

### 2.1 Neutrals — the foundation (shared by all lines, ~90% of every page)

Keyed to the clinic’s real interior finishes.

| Name | Hex | Use |
|---|---|---|
| **Ink** (Soft-Touch Black) | `#1A1B1D` | Headings, primary text, dark bands |
| **Paper** (Ultra-Pure White) | `#FCFCFD` | Page background |
| **Pure White** | `#FFFFFF` | Card/panel base |
| **Graphite** | `#3B3D40` | Secondary/body text |
| **Mist** | `#6C6E73` | Captions, meta, mono labels |
| **Cloud** | `#EFF1F3` | Quiet section fills |
| **Line** | `#E6E8EB` | Hairlines, dividers, 1px borders |

Panel finish: Pure White base + a subtle gloss gradient
(`linear-gradient(157deg, #FFFFFF 0%, #FBFCFD 46%, #EEF1F4 100%)`) + a whisper
of radial “sparkle” flecks. Reads as the clinic’s high-gloss panels.

### 2.2 “Night” dark theme (shared)

The room at night — warm soft-touch black, never cold gray.

| Role | Hex |
|---|---|
| Background (paper) | `#161518` |
| Text (ink) | `#F1EFEA` (warm off-white) |
| Secondary text | `#BCB8B1` |
| Muted/meta | `#8B8881` |
| Hairlines | `#2C2A2F` |
| Elevated fill | `#1D1C20` |
| Panel base | `#201F24` (gloss: `#26242B → #201E25 → #19171C`) |

On Night, accents brighten (see 2.5) and light effects switch from
multiply to screen blending.

### 2.3 Infusion Therapy accents (service families)

Muted, desaturated — “considered apothecary, not a rainbow.”

| Family | Light | Night |
|---|---|---|
| Wellness | `#3E5C6E` | `#84ABC2` |
| Radiance | `#B98AAE` | `#D8AECB` |
| Immune | `#C2703D` | `#E6A06F` |
| Energy | `#C9A227` | `#E4C55C` |
| Metabolic | `#6E8B5A` | `#A1C08B` |
| Clinical | `#8C3B3B` | `#D28686` |
| Recovery | `#4F7C82` | `#88B9C1` |
| Neutral | `#6E6E6E` | `#A6A7AB` |

Liquid “base” colours (IV visuals only): Hydrate `#0E9BC9`, Healing `#C65F73`,
Foundation `#3E4C8A`.

### 2.4 Medical Aesthetics accents (service families)

Skin-adjacent, warm-luxe, same muted discipline. Each ships an AA-safe darker
`text` variant for small accent text on Paper.

| Family | Accent | Text variant |
|---|---|---|
| Injectables | `#9C6B86` | `#7E5570` |
| Skin & Resurfacing | `#C58A77` | `#A66A57` |
| Energy & Laser | `#C8A24B` | `#8F7220` |
| Body & Contour | `#7E8B6E` | `#5F6C50` |
| Skin Health | `#5E8A8C` | `#436466` |
| Clinical / Consult | `#8C3B3B` (shared) | `#7E3333` |

### 2.5 Parent-brand colour usage (Restoration Medical itself)

- **Shared signature accent: Clinical `#8C3B3B`.** It exists in both lines and
  represents the medical backbone — it is the parent brand’s one accent.
- When the parent site/material must show both lines side by side, identify
  each line with **one** representative accent: Infusion → Wellness `#3E5C6E`
  (cool, liquid), Aesthetics → Skin `#C58A77` (warm, light). Cool = liquid,
  warm = light: that temperature split is the family logic.
- Rules that never bend: one accent per element; accents only on small things
  (dots, 2–3px rules, labels, hovers, icon strokes); never large accent fills;
  never two accents mixed in one component.

---

## 3. Typography

Three fonts, all free on Google Fonts:

| Role | Font | Weights | Rules |
|---|---|---|---|
| **Display** | **Fraunces** (serif) | 340–480, *light is the look* | All headings, names, pull-quotes. `letter-spacing: -0.01em`, line-height 1.05–1.1. Italic fragments for emphasis (“*refined by medicine.*”). **Never bold.** |
| **Body** | **Inter Tight** (sans) | 400–600 | Paragraphs and UI. Line-height 1.6. (Inter is an acceptable substitute.) |
| **Label** | **Spline Sans Mono** | 400–500 | Eyebrows, captions, evidence tags, buttons’ small text. **UPPERCASE, letter-spacing +10–16%**, usually Mist. (Space Mono / DM Mono substitute.) |

The signature contrast is: *light serif display + spaced mono caps label +
clean sans body.*

**Fluid type scale** (rem, `clamp()` min → max):

| Token | Min → Max | Use |
|---|---|---|
| step −1 | 0.83 → 0.92 | captions, meta |
| step 0 | 1.0 → 1.12 | body |
| step 1 | 1.2 → 1.45 | leads, card titles |
| step 2 | 1.5 → 2.0 | small headings |
| step 3 | 1.9 → 3.0 | section titles |
| step 4 | 2.4 → 4.4 | pull-quotes |
| step 5 | 3.0 → 6.0 | hero |

Prose measure: 65ch.

---

## 4. Space, layout, shape

- Spacing ramp (rem): 0.5 / 1 / 2 / 4 / 6 / 9.
- Radius: **4px everywhere** (tight, clinical). No pills, no big rounds.
- Containers: content `min(100% − 2.5rem, 1180px)`; narrow prose 760px.
- Sections breathe: 6–9rem vertical padding; alternate Paper and Cloud bands;
  dark Ink bands for CTAs.
- Borders are 1px hairlines in Line; avoid shadows (use hairline + gloss +
  a 2–3px lift on hover instead).
- Generous negative space is the layout’s main material.

---

## 5. Motion & interaction language

One easing curve for everything: `cubic-bezier(0.22, 0.61, 0.36, 1)`.
Durations: micro 0.2s · hover 0.3s · reveals 0.7–0.8s.
**Everything honours `prefers-reduced-motion`** with a static fallback, and
pointer effects are fine-pointer/hover gated. No animation libraries — vanilla
Canvas/SVG/rAF/IntersectionObserver.

| Effect | What it is | Line |
|---|---|---|
| **Diffusion reveal** | Sections bloom into focus: blur → sharp + slight rise | Shared |
| **Droplet cursor** | Soft accent droplet trails the pointer, swells on interactive, drips tiny particles on hover | Shared (reads as “serum” for aesthetics) |
| **Title ripple** | Heading letters ripple/warp like a liquid surface under the cursor | Shared |
| **Liquid hero** | Slow, watery colour blooming inside a line-art IV bag (canvas) | Infusion |
| **Light-bloom hero** | Luminous radial glow / refraction sweep | Aesthetics |
| **Liquid-drop border** | A drop of accent travels a card’s edge on hover | Infusion tiles |
| **Gloss sheen** | Diagonal light sweep across a card on hover | Shared |
| **Paper grain** | Barely-there fractal noise over the page (multiply; screen on Night) | Shared |

Parent-brand motion = the shared set (diffusion, droplet, ripple, sheen,
grain). The heroes are what differentiate the lines.

---

## 6. Component patterns

- **Nav**: sticky, blurred backdrop, hairline bottom border; mega-menu with
  accent dots per family; mobile drawer + scrim (burger morphs into a droplet /
  IV-slot / ripple icon at random).
- **Card / panel recipe**: Pure White + gloss gradient + sparkle fleck, 1px
  Line border, 4px radius, accent top-rule (2–3px), family label in mono caps,
  name in Fraunces, lift + sheen on hover.
- **Eyebrow**: mono caps label in Mist, optional 9px accent dot, above every
  section title.
- **PageHeader**: eyebrow → oversized Fraunces title (with italic fragment) →
  one-paragraph lead.
- **Pull-quote**: oversized Fraunces (step 4), thin accent rule, mono caption;
  rotates randomly per visit.
- **CTA band**: Ink background, Paper text, one solid button (Paper fill,
  inverts to outline on hover) + one arrow-link.
- **Buttons**: rectangular (4px), Ink fill ↔ outline invert on hover; ghost
  variant is hairline outline.
- **Evidence tags**: “Established” (solid dot) vs “Emerging” (hollow dot) with
  per-item tooltip — the honesty feature; rare and very on-brand.
- **Trust band**: physician-reviewed · nurse-administered · pharmaceutical-
  grade · screened-first, in mono caps with line icons.
- **Advisory / conflict callout**: clinical-red tinted box with `!` badge,
  soft language (“your physician finalises what is right for you”).
- **Forms**: mono caps labels, hairline underline fields, graceful
  “we’ll be in touch” fallback when no endpoint is wired.
- **Footer**: dark (Soft-Touch Black), gradient hairline seam on top (never a
  hard white border), link columns, location cards with tinted Google-map
  previews + “Get directions”, legal row (Privacy / Terms / Accessibility).

**Iconography**: single-stroke line art, `currentColor`, stroke 1.5, 24×24,
rounded caps/joins. **Imagery**: sparing, clinical-calm, lots of negative
space; no stock-photo gloss; CPSO photo rules (no testimonials; before/afters
representative, consented, unretouched).

---

## 7. Content & compliance rules (design these in)

1. Benefit language is always soft: “may support”, “can help with”, plus
   “results vary from person to person.”
2. Standing disclaimer near conversion points and in the footer: *“Wellness
   services are elective and not covered by OHIP. Iron therapy may be
   clinically indicated. Information is educational, not medical advice.”*
3. No patient testimonials or review quotes on-page (aggregate Google rating +
   link out is fine). No “best/premiere/#1”.
4. Every treatment shown as physician-reviewed and nurse-administered;
   consult-first flows (“Book a consult”, never “Buy”).
5. AA contrast minimum everywhere; small accent text uses darkened variants;
   keyboard focus states visible; reduced-motion fallbacks mandatory.

---

## 8. Implementation starter (paste-ready tokens)

```css
:root {
  /* Neutrals */
  --ink: #1a1b1d;      --paper: #fcfcfd;   --graphite: #3b3d40;
  --mist: #6c6e73;     --line: #e6e8eb;    --cloud: #eff1f3;
  --white-pure: #ffffff;
  --gloss-white: linear-gradient(157deg, #ffffff 0%, #fbfcfd 46%, #eef1f4 100%);

  /* Parent accent */
  --accent-clinical: #8c3b3b;  --accent-clinical-text: #7e3333;

  /* Infusion families */
  --accent-wellness: #3e5c6e;  --accent-radiance: #b98aae;
  --accent-immune: #c2703d;    --accent-energy: #c9a227;
  --accent-metabolic: #6e8b5a; --accent-recovery: #4f7c82;

  /* Aesthetics families */
  --accent-injectables: #9c6b86; --accent-skin: #c58a77;
  --accent-laser: #c8a24b;       --accent-body: #7e8b6e;
  --accent-skinhealth: #5e8a8c;

  /* Type */
  --display: 'Fraunces', Georgia, serif;
  --body: 'Inter Tight', -apple-system, sans-serif;
  --mono: 'Spline Sans Mono', ui-monospace, monospace;

  /* Fluid scale */
  --step--1: clamp(0.83rem, 0.8rem + 0.15vw, 0.92rem);
  --step-0: clamp(1rem, 0.96rem + 0.2vw, 1.12rem);
  --step-1: clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem);
  --step-2: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --step-3: clamp(1.9rem, 1.5rem + 2vw, 3rem);
  --step-4: clamp(2.4rem, 1.7rem + 3.4vw, 4.4rem);
  --step-5: clamp(3rem, 1.9rem + 5.4vw, 6rem);

  /* Space, shape, motion */
  --space-xs: .5rem; --space-s: 1rem; --space-m: 2rem;
  --space-l: 4rem;   --space-xl: 6rem; --space-xxl: 9rem;
  --measure: 65ch;   --radius: 4px;    --header-h: 68px;
  --ease: cubic-bezier(0.22, 0.61, 0.36, 1);
}

[data-theme='dark'] { /* “Night” */
  --ink: #f1efea;  --paper: #161518;  --graphite: #bcb8b1;
  --mist: #8b8881; --line: #2c2a2f;   --cloud: #1d1c20;
  --white-pure: #201f24;
  --gloss-white: linear-gradient(157deg, #26242b 0%, #201e25 46%, #19171c 100%);
  --accent-clinical: #d28686;
  color-scheme: dark;
}
```

Font loading (Google Fonts):
`Fraunces ital,opsz,wght 0,9..144,340..480 (+ italics 340/440) · Inter Tight
400/500/600 · Spline Sans Mono 400/500`.

---

## 9. Quick checklist for any new Restoration Medical property

1. Neutrals, type, scale, spacing, radius, motion: **use as-is, never fork.**
2. Pick the line’s accent set (or Clinical only for parent-brand pieces).
3. Choose the hero motif: liquid (infusion) / light (aesthetics) / calm
   editorial with both accents as details (parent).
4. Apply the voice rules and the compliance set (§7) before publishing.
5. Ship light + Night themes, AA contrast, reduced-motion fallbacks.
