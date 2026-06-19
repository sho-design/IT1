import type { FamilyKey } from './families';

// The actives/devices library — carries the honest evidence tag.
export interface Modality {
  slug: string;
  name: string;
  family: FamilyKey;
  oneLine: string;
  evidence: 'Established' | 'Emerging';
  note: string;
}

export const modalities: Modality[] = [
  { slug: 'neuromodulator', name: 'Neuromodulator', family: 'injectables', oneLine: 'Softens the muscles behind expression lines.', evidence: 'Established', note: 'Well-established for dynamic lines; results are temporary and dose-guided.' },
  { slug: 'ha-filler', name: 'Hyaluronic acid filler', family: 'injectables', oneLine: 'Restores volume and refines contour.', evidence: 'Established', note: 'Well-established and reversible; placed conservatively for a natural look.' },
  { slug: 'microneedling', name: 'Microneedling', family: 'skin', oneLine: 'Prompts the skin&rsquo;s own renewal.', evidence: 'Established', note: 'Good evidence for texture and scarring; a course is usually needed.' },
  { slug: 'chemical-peel', name: 'Chemical peel', family: 'skin', oneLine: 'Resurfaces for clarity and tone.', evidence: 'Established', note: 'Long clinical history; depth is matched to your skin and goals.' },
  { slug: 'ipl', name: 'IPL photofacial', family: 'energy', oneLine: 'Targets pigment and redness with light.', evidence: 'Established', note: 'Well-established for sun damage and redness in suitable skin types.' },
  { slug: 'rf-microneedling', name: 'RF microneedling', family: 'energy', oneLine: 'Heat and needling for firmness.', evidence: 'Emerging', note: 'Promising for laxity and texture; long-term evidence is still maturing.' },
  { slug: 'medical-skincare', name: 'Medical-grade actives', family: 'health', oneLine: 'Prescription-strength home care.', evidence: 'Established', note: 'The foundation of any plan; results depend on consistent use.' },
  { slug: 'prp', name: 'PRP / regenerative', family: 'health', oneLine: 'Uses your own platelets.', evidence: 'Emerging', note: 'Early but encouraging human evidence; we are candid about what is known.' },
];
