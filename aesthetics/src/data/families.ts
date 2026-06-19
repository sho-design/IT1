// Service families. The ONLY place colour is defined for treatments.
export type FamilyKey =
  | 'injectables'
  | 'skin'
  | 'energy'
  | 'body'
  | 'health'
  | 'clinical';

export interface Family {
  key: FamilyKey;
  label: string;
  accent: string; // var name suffix: --accent-<key>
  blurb: string;
}

export const families: Family[] = [
  { key: 'injectables', label: 'Injectables', accent: 'var(--accent-injectables)', blurb: 'Neuromodulators and fillers, placed with restraint.' },
  { key: 'skin', label: 'Skin & Resurfacing', accent: 'var(--accent-skin)', blurb: 'Peels and microneedling for tone and texture.' },
  { key: 'energy', label: 'Energy & Laser', accent: 'var(--accent-energy)', blurb: 'Light- and energy-based skin renewal.' },
  { key: 'body', label: 'Body & Contour', accent: 'var(--accent-body)', blurb: 'Non-surgical contouring and tightening.' },
  { key: 'health', label: 'Skin Health', accent: 'var(--accent-health)', blurb: 'Medical-grade actives and regenerative care.' },
  { key: 'clinical', label: 'Medical', accent: 'var(--accent-clinical)', blurb: 'Medical dermatology and scar revision.' },
];
