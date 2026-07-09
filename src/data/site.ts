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
  phone: '905-709-3222', // Thornhill
  signOff: 'With care, the Restoration Medical team.',
  // Primary domain is set in astro.config.mjs (`site`).
};

export const locations = [
  {
    name: 'Thornhill',
    address: '700 Centre St (Inside Walmart), Thornhill, ON L4J 0A7',
    hours: PLACEHOLDER, // e.g. 'Mon to Fri, 9 to 5'
    mapUrl: PLACEHOLDER,
    // Google Business Profile / Maps listing link. The footer map links here.
    profileUrl:
      'https://www.google.com/maps/place/Restoration+Medical/@43.8116543,-79.4536255,17z/data=!3m1!4b1!4m6!3m5!1s0x882b2db3105c83d1:0x644d7da1c8c35de7!8m2!3d43.8116505!4d-79.4510506!16s%2Fg%2F11yl66jl7w',
  },
  {
    name: 'Maple (Coming Soon)',
    address: '2620 Rutherford Rd, Unit 105-107, Vaughan, ON L4K 0H1',
    hours: PLACEHOLDER,
    mapUrl: PLACEHOLDER,
    profileUrl: PLACEHOLDER,
  },
];

// Google Maps helpers. We derive both URLs from the plain address, so there is
// nothing extra to maintain and no API key is needed. Parenthetical asides
// (e.g. "(Inside Walmart)") are stripped before geocoding so the pin lands on
// the street address rather than confusing the search.
//   - embed: a keyless interactive map preview (used as a static-looking image).
//   - directions: opens Google Maps routing; with no origin set, Google uses the
//     visitor's own current location as the starting point.
const mapQuery = (address: string): string =>
  address.replace(/\s*\([^)]*\)/g, '').replace(/\s{2,}/g, ' ').trim();

export const mapsEmbedUrl = (address: string): string =>
  `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery(address))}&z=15&output=embed`;

export const mapsDirectionsUrl = (address: string): string =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery(address))}`;

// Opens the place on Google Maps (used as a fallback when a location has no
// Business Profile link yet).
export const mapsSearchUrl = (address: string): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery(address))}`;

export const cta = {
  primary: { label: 'Book a consult', href: '/book' },
  secondary: { label: 'Explore drips & shots', href: '/drips' },
};

// Google rating strip. To stay clear of the CPSO rule against testimonials in a
// physician's advertising, we show only the aggregate rating, the count, and a
// link out to Google — never quoted review text on-page. The whole strip stays
// hidden until all three are filled, so no fabricated rating is ever shown.
//   - rating: the average, e.g. '4.9'
//   - count:  number of reviews, e.g. '128'
//   - url:    your Google Business "reviews" or profile link
export const googleRating = {
  rating: '4.8',
  count: '16',
  url: 'https://www.google.com/maps/place/Restoration+Medical/@43.8116543,-79.4536255,17z/data=!3m1!4b1!4m6!3m5!1s0x882b2db3105c83d1:0x644d7da1c8c35de7!8m2!3d43.8116505!4d-79.4510506!16s%2Fg%2F11yl66jl7w',
};

// Social profiles, shown in the footer and the mobile menu. Add the full
// profile URL for each. While a URL is on a placeholder the icon still shows
// but is not a link, so there are never dead links before launch.
export const socials = [
  { name: 'Instagram', href: 'https://instagram.com/restorationmedicalofficial' },
  { name: 'Facebook', href: 'https://facebook.com/restorationmedicalofficial' },
  // Add TikTok / others here when live, e.g.:
  // { name: 'TikTok', href: 'https://tiktok.com/@restorationmedicalofficial' },
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
