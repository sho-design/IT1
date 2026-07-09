# Photo Shot List — Restoration Medical (Infusion Therapy)

A half-day shoot at the **Thornhill** clinic covers everything the site needs.
The goal is **calm, editorial, real** — think Aesop / Kinfolk, not medi-spa
stock. Every image should look like it belongs beside the site's serif type
and lots of white space.

Each shot below maps to a **slot already built into the site**. To publish a
photo: export it, drop the file in `public/photos/`, and set its path in
`src/data/photos.ts` (or the relevant data file). The slot then appears,
auto-toned to match the brand. Nothing shows until you set the path, so the
live site stays clean while you shoot.

---

## Art direction (applies to every shot)

- **Natural light only.** Shoot near windows; avoid overhead fluorescents.
- **Desaturated, warm-neutral.** The site tones images down automatically, but
  grade toward soft/muted, not punchy. No heavy filters.
- **Negative space.** Frame loose — subject off-center, room to breathe. Many
  shots crop to wide or portrait, so leave air around the subject.
- **Real staff, real room.** No models, no rented studio. Consented team only.
- **Quiet, unstaged moments.** A nurse mid-task, hands working, a still corner —
  not people smiling at the camera.
- **Deliver:** high-res JPG, sRGB, long edge ≥ 2400px. I'll optimize for web.

## Compliance (Ontario / CPSO) — must follow

- **No patient testimonials** anywhere (including implied "happy patient" poses
  used as endorsements).
- **No identifiable patients** without written consent. Easiest: shoot staff, or
  hands/backs-of-heads only, or an empty chair.
- **Before/after:** only if a real, consented patient, representative, and
  **unretouched** — otherwise skip entirely (recommended).
- Every staff member photographed signs a simple image-use consent.

---

## The shots (priority order)

### ⭐ Priority 1 — People & place (do these first)

| # | Shot | Framing | Where it's used | File → set in |
|---|------|---------|-----------------|---------------|
| 1 | **Dr. Nguyen headshot** | Portrait, natural light, warm neutral bg, slight smile | Team page (featured), About | `public/team/dr-johnny-nguyen.jpg` → `src/data/team.ts` |
| 2 | **Each team member** (Michelle, Anh, Kim, Marika, Kelly, Tiffany, Rose, Hillary, Aastha, Karen) | Square, consistent light & bg, relaxed | Team grid | `public/team/<name>.jpg` → `src/data/team.ts` |
| 3 | **The treatment chair, empty, morning light** | Wide **16:9**, lots of air, the chair as hero | Homepage "This is where you'll sit" | `public/photos/treatment-chair.jpg` → `photos.chair` |
| 4 | **The clinic space, wide** | **3:2**, calm room, negative space | About page | `public/photos/clinic-space.jpg` → `photos.clinicSpace` |
| 5 | **A quiet corner / chair, portrait** | **4:5** vertical | Book page, beside the form | `public/photos/consult-room.jpg` → `photos.consultRoom` |

### ⭐ Priority 2 — The process (proves "real medicine")

| # | Shot | Framing | Where it's used | File → set in |
|---|------|---------|-----------------|---------------|
| 6 | **Nurse preparing a drip** — hands, gloved, focused | **3:2**, close, clinical, precise | How it works (lead image) | `public/photos/preparing-drip.jpg` → `photos.process` |
| 7 | **Hands placing/checking a line** | Tight macro, gloved | (future) drip pages | keep on file |
| 8 | **Pharmaceutical-grade vials / amber bottles / labels** | Macro, one clean subject, soft shadow | (future) ingredient library, drip pages | keep on file |
| 9 | **A prepared IV bag, hanging** | Portrait, backlit, calm | (future) hero / detail | keep on file |

### ⭐ Priority 3 — Texture & detail (nice to have)

| # | Shot | Framing | Notes |
|---|------|---------|-------|
| 10 | **The real surfaces** — matte black, gloss-white panels, pure-white walls | Flat, abstract | Can become section backgrounds; ties to the brand palette |
| 11 | **Candid: nurse + patient (consented) at the chair** | Wide, from behind / over-shoulder, no faces | Warmth without testimonial risk |
| 12 | **A single drop / liquid detail** | Extreme macro | Echoes the site's droplet motif |

---

## After the shoot

Send me the exports (or drop them in `public/photos/` and `public/team/`) and
I'll:
1. Optimize + generate responsive sizes.
2. Set the paths so every slot lights up.
3. Fine-tune the per-image toning if any shot needs it.
4. Swap the abstract OG share image for one with a real photo, if you'd like.

That's the whole visual upgrade — the infrastructure is already in place, so
it's a "drop in and it looks designed" flow, not a rebuild.
