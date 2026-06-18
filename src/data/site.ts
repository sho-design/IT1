// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for brand facts, contact, locations, and CTAs.
// Fill placeholder values (marked __PLACEHOLDER__) before launch. The UI
// hides anything still on a placeholder so there are no dead links.
// ─────────────────────────────────────────────────────────────────────────

export const PLACEHOLDER = '__PLACEHOLDER__';

export const isFilled = (value: string | undefined | null): boolean =>
  !!value && value !== PLACEHOLDER;

export const site = {
  fullName: 'Infusion Therapy at Restoration Medical',
  brand: 'Restoration Medical',
  line: 'Infusion Therapy',
  parentNote: 'at Restoration Medical',
  tagline: 'Refined by Medicine.',
  description:
    'Physician-led IV infusion therapy and injection shots at Restoration Medical. Wellness drips, clinical iron infusions, and a physician-supervised metabolic program in Thornhill and Maple.',
  email: 'hello@restorationmedical.ca',
  phone: PLACEHOLDER, // e.g. '+1 905 555 0100'
  signOff: 'With care, the Restoration Medical team.',
  // Primary domain is set in astro.config.mjs (`site`).
};

export const locations = [
  {
    name: 'Thornhill',
    address: '700 Centre St (Inside Walmart), Thornhill, ON L4J 0A7',
    hours: PLACEHOLDER, // e.g. 'Mon to Fri, 9 to 5'
    mapUrl: PLACEHOLDER,
  },
  {
    name: 'Maple (Coming Soon)',
    address: '2620 Rutherford Rd, Unit 105-107, Vaughan, ON L4K 0H1',
    hours: PLACEHOLDER,
    mapUrl: PLACEHOLDER,
  },
];

export const cta = {
  primary: { label: 'Book a consult', href: '/book' },
  secondary: { label: 'Explore drips & shots', href: '/drips' },
};

// Social profiles, shown in the footer and the mobile menu. Add the full
// profile URL for each. While a URL is on a placeholder the icon still shows
// but is not a link, so there are never dead links before launch.
export const socials = [
  { name: 'Instagram', href: PLACEHOLDER }, // e.g. 'https://instagram.com/...'
  { name: 'Facebook', href: PLACEHOLDER },
  { name: 'TikTok', href: PLACEHOLDER },
];

// Wire these before launch. While on a placeholder, the consult form posts
// nowhere and instead shows a graceful "we will be in touch" confirmation,
// so there is never a broken submit.
export const integrations = {
  // A form endpoint (e.g. Formspree, a serverless function, or the clinic's
  // scheduler intake URL). Leave as PLACEHOLDER until ready.
  formEndpoint: PLACEHOLDER,
  // An optional external scheduling link (e.g. a booking tool).
  schedulerUrl: PLACEHOLDER,
};
