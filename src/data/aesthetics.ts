// ─────────────────────────────────────────────────────────────────────────
// STARTER DATA for "Medical Aesthetics at Restoration Medical".
// Mirrors the infusion line's data shapes so the same components/voice apply.
// Reskin = swap these values; keep the structure. See DESIGN_SYSTEM.md §6.
// ─────────────────────────────────────────────────────────────────────────

export const aeSite = {
  brand: 'Restoration Medical',
  line: 'Medical Aesthetics',
  parentNote: 'at Restoration Medical',
  tagline: 'Refined by Medicine.',
  hero: 'Look like yourself, refined.',
  lead:
    'Physician-led aesthetic medicine, tuned for natural-looking results. We screen first, treat conservatively, and tell you honestly what each option can and cannot do.',
  email: 'aesthetics@restorationmedical.ca',
};

// Service families — accent + AA-safe text variant, same discipline as the
// infusion families (muted, sibling palette).
export type AeFamilyKey =
  | 'injectables'
  | 'skin-resurfacing'
  | 'energy-laser'
  | 'body-contour'
  | 'skin-health'
  | 'clinical';

export interface AeFamily {
  key: AeFamilyKey;
  label: string;
  accent: string;
  text: string;
  blurb: string;
}

export const aeFamilies: AeFamily[] = [
  { key: 'injectables', label: 'Injectables', accent: '#9C6B86', text: '#7E5570', blurb: 'Neuromodulators and fillers, placed with restraint.' },
  { key: 'skin-resurfacing', label: 'Skin & Resurfacing', accent: '#C58A77', text: '#A66A57', blurb: 'Peels and microneedling for tone and texture.' },
  { key: 'energy-laser', label: 'Energy & Laser', accent: '#C8A24B', text: '#8F7220', blurb: 'Light- and energy-based skin renewal.' },
  { key: 'body-contour', label: 'Body & Contour', accent: '#7E8B6E', text: '#5F6C50', blurb: 'Non-surgical contouring and tightening.' },
  { key: 'skin-health', label: 'Skin Health', accent: '#5E8A8C', text: '#436466', blurb: 'Medical-grade actives and regenerative care.' },
  { key: 'clinical', label: 'Medical', accent: '#8C3B3B', text: '#7E3333', blurb: 'Medical dermatology and scar revision.' },
];

export interface AeConcern {
  slug: string;
  label: string;
  line: string;
  accent: string;
}

export const aeConcerns: AeConcern[] = [
  { slug: 'fine-lines', label: 'Fine lines & wrinkles', line: 'Softening expression lines.', accent: '#8E6AA6' },
  { slug: 'volume-contour', label: 'Volume & contour', line: 'Restoring balance and definition.', accent: '#9C6B86' },
  { slug: 'texture-tone', label: 'Texture & tone', line: 'Smoother, more even skin.', accent: '#C58A77' },
  { slug: 'acne-scarring', label: 'Acne & scarring', line: 'Calming breakouts, refining scars.', accent: '#B0604E' },
  { slug: 'pigmentation', label: 'Pigmentation & sun', line: 'Fading spots and sun damage.', accent: '#C8A24B' },
  { slug: 'redness', label: 'Redness & rosacea', line: 'Calming reactive skin.', accent: '#B23A4F' },
  { slug: 'laxity-lifting', label: 'Laxity & lifting', line: 'Firmer, lifted contours.', accent: '#5E8A8C' },
  { slug: 'aging-well', label: 'Aging well', line: 'A considered, long-game approach.', accent: '#7E8B6E' },
];

// Modalities / actives library — keeps the infusion line's honest evidence tag.
export interface AeModality {
  name: string;
  family: AeFamilyKey;
  oneLine: string;
  evidence: 'Established' | 'Emerging';
  note: string;
}

export const aeModalities: AeModality[] = [
  { name: 'Neuromodulator', family: 'injectables', oneLine: 'Softens the muscles behind expression lines.', evidence: 'Established', note: 'Well-established for dynamic lines; results are temporary and dose-guided.' },
  { name: 'Hyaluronic acid filler', family: 'injectables', oneLine: 'Restores volume and refines contour.', evidence: 'Established', note: 'Well-established and reversible; placed conservatively for a natural look.' },
  { name: 'Microneedling', family: 'skin-resurfacing', oneLine: 'Prompts the skin&rsquo;s own renewal.', evidence: 'Established', note: 'Good evidence for texture and scarring; a course is usually needed.' },
  { name: 'Chemical peel', family: 'skin-resurfacing', oneLine: 'Resurfaces for clarity and tone.', evidence: 'Established', note: 'Long clinical history; depth is matched to your skin and goals.' },
  { name: 'IPL photofacial', family: 'energy-laser', oneLine: 'Targets pigment and redness with light.', evidence: 'Established', note: 'Well-established for sun damage and redness in suitable skin types.' },
  { name: 'RF microneedling', family: 'energy-laser', oneLine: 'Heat and needling for firmness.', evidence: 'Emerging', note: 'Promising for laxity and texture; long-term evidence is still maturing.' },
  { name: 'Medical-grade actives', family: 'skin-health', oneLine: 'Prescription-strength home care.', evidence: 'Established', note: 'The foundation of any plan; results depend on consistent use.' },
  { name: 'PRP / regenerative', family: 'skin-health', oneLine: 'Uses your own platelets.', evidence: 'Emerging', note: 'Early but encouraging human evidence; we are candid about what is known.' },
];
