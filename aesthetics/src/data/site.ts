export const PLACEHOLDER = '__PLACEHOLDER__';
export const isFilled = (v: string | undefined | null): boolean =>
  !!v && v !== PLACEHOLDER;

export const site = {
  brand: 'Restoration Medical',
  line: 'Medical Aesthetics',
  parentNote: 'at Restoration Medical',
  tagline: 'Refined by Medicine.',
  hero: 'Look like yourself, refined.',
  lead:
    'Physician-led aesthetic medicine, tuned for natural-looking results. We screen first, treat conservatively, and tell you honestly what each option can and cannot do.',
  email: 'aesthetics@restorationmedical.ca',
  phone: PLACEHOLDER,
  signOff: 'With care, the Restoration Medical team.',
};

export const cta = {
  primary: { label: 'Book a consult', href: '/book' },
};
