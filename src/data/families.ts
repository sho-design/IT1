// ─────────────────────────────────────────────────────────────────────────
// Treatment-family accent map. This is the ONLY place colour is defined.
// Accents appear exclusively in the mega-menu and on treatment cards as a
// thin top rule, an ingredient dot, or a hover state. Never as a full
// colour-blocked background. The page stays black and white; the accent is
// a whisper that tells you which family you are in.
//
// `text` is a contrast-safe darkened variant for the rare case where the
// accent is used on small text (it must pass WCAG AA on --paper).
// ─────────────────────────────────────────────────────────────────────────

export type FamilyKey =
  | 'wellness'
  | 'radiance'
  | 'immune'
  | 'energy'
  | 'metabolic'
  | 'clinical'
  | 'recovery'
  | 'neutral';

export interface Family {
  key: FamilyKey;
  label: string;
  accent: string; // dots, rules, hover
  text: string; // contrast-safe for small text on paper
  blurb: string;
}

export const families: Record<FamilyKey, Family> = {
  wellness: {
    key: 'wellness',
    label: 'Foundation & Healing',
    accent: '#3E5C6E',
    text: '#33505F',
    blurb: 'Everyday wellness, hydration, and recovery from a demanding week.',
  },
  radiance: {
    key: 'radiance',
    label: 'Radiance & Beauty',
    accent: '#B98AAE',
    text: '#8D5E82',
    blurb: 'Antioxidant and skin-radiance support, from within.',
  },
  immune: {
    key: 'immune',
    label: 'Immune',
    accent: '#C2703D',
    text: '#A55B2C',
    blurb: 'Seasonal support with vitamin C, zinc, and more.',
  },
  energy: {
    key: 'energy',
    label: 'Energy & Longevity',
    accent: '#C9A227',
    text: '#8F7212',
    blurb: 'Cellular energy, vitality, and healthy aging.',
  },
  metabolic: {
    key: 'metabolic',
    label: 'Metabolic',
    accent: '#6E8B5A',
    text: '#566F46',
    blurb: 'Fat-metabolism support within a medically guided program.',
  },
  clinical: {
    key: 'clinical',
    label: 'Clinical',
    accent: '#8C3B3B',
    text: '#7E3333',
    blurb: 'Clinically indicated infusions, including iron.',
  },
  recovery: {
    key: 'recovery',
    label: 'Recovery & Performance',
    accent: '#4F7C82',
    text: '#3E646A',
    blurb: 'Rehydration, reset, and athletic recovery.',
  },
  neutral: {
    key: 'neutral',
    label: 'Build Your Own',
    accent: '#6E6E6E',
    text: '#5A5A5A',
    blurb: 'Design your infusion with your nurse.',
  },
};

export const familyOf = (key: FamilyKey): Family => families[key];
