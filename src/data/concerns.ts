// ─────────────────────────────────────────────────────────────────────────
// Concerns: the empathetic spine of the site. People arrive with a feeling,
// not a product name. Each concern connects that feeling to treatments and
// ingredients. Validate, do not diagnose. "May support" language only.
//
// A concern with `clinical: true` and `externalHref` (Iron) routes to the
// clinical Iron Therapy page rather than listing wellness treatments.
// ─────────────────────────────────────────────────────────────────────────

export interface Concern {
  slug: string;
  label: string;
  tile: string; // short tile line for grids
  humanHeadline: string;
  open: string; // empathetic 2 to 3 sentence open
  howItHelps: string; // honest "may support" paragraph
  treatments: string[]; // treatment slugs
  ingredients: string[]; // ingredient slugs
  clinical?: boolean;
  externalHref?: string;
}

export const concerns: Concern[] = [
  {
    slug: 'low-energy-fatigue',
    label: 'Low energy & fatigue',
    tile: 'Running low more often than you would like.',
    humanHeadline: 'When your energy runs out before your day does',
    open: 'Some weeks ask more of you than you have to give. The afternoons feel heavy, the mornings feel slow, and the rest you get does not seem to refill the tank. That is a common and very human place to be.',
    howItHelps:
      'Infusion therapy may support steady energy by topping up the B vitamins and minerals the body uses to turn food into usable energy. It is not a substitute for sleep, food, or addressing an underlying cause, and a consult helps us look at the whole picture first.',
    treatments: ['healing', 'foundation', 'b12-shot', 'b-complex-shot', 'nad-longevity'],
    ingredients: ['b12', 'b-complex', 'magnesium', 'nad'],
  },
  {
    slug: 'immune-support',
    label: 'Immune support',
    tile: 'Bracing for a demanding season.',
    humanHeadline: 'Support for the seasons that ask the most of you',
    open: 'A full calendar, travel, and the change of seasons can leave you feeling exposed. Many people want to give their body steady support before they feel run down, not after.',
    howItHelps:
      'Immune-focused drips and shots may support a normal immune response with vitamin C, zinc, and supporting nutrients. They work best as part of the basics, rest, food, and good habits, rather than in place of them.',
    treatments: ['immune-shield', 'tri-immune-shot', 'vitamin-d-shot', 'healing'],
    ingredients: ['vitamin-c', 'zinc', 'vitamin-d3'],
  },
  {
    slug: 'skin-hair-nails',
    label: 'Skin, hair & nails',
    tile: 'Caring for how you look from within.',
    humanHeadline: 'Radiance, supported from the inside',
    open: 'Skin, hair, and nails reflect a lot about how the rest of you is doing. When they feel dull or fragile, it is natural to want to care for them thoughtfully, not chase a quick fix.',
    howItHelps:
      'Antioxidant and beauty-focused treatments may support skin radiance and help maintain normal hair and nails, using glutathione, biotin, and supporting vitamins. We frame this as support, not a guarantee, and we never promise lightening or a particular outcome.',
    treatments: ['radiance', 'hair-nails', 'beauty-elixir', 'glutathione-shot', 'biotin-shot'],
    ingredients: ['glutathione', 'biotin', 'vitamin-c'],
  },
  {
    slug: 'recovery-performance',
    label: 'Recovery & performance',
    tile: 'Training hard and recovering harder.',
    humanHeadline: 'For the work after the workout',
    open: 'Hard training, long events, and heavy stretches take a toll. The recovery is where the progress actually happens, and it is easy to under-support it.',
    howItHelps:
      'Recovery drips may support the body after exertion with amino acids, magnesium, and hydration. They are one part of recovery, alongside sleep, nutrition, and sensible programming.',
    treatments: ['recover', 'revive', 'kingmaker', 'b12-shot'],
    ingredients: ['amino-blend', 'magnesium'],
  },
  {
    slug: 'longevity',
    label: 'Longevity & healthy aging',
    tile: 'Investing in how you age.',
    humanHeadline: 'Aging well, on purpose',
    open: 'Healthy aging is less about any single thing and more about steady, considered care over time. Many people want a calm routine that supports how they feel and function for the long run.',
    howItHelps:
      'Longevity-minded treatments may support cellular energy and skin health with NAD+, antioxidants, and core nutrients. The evidence in people is still developing, and we are honest about that. These work best as part of a broader healthy-aging routine.',
    treatments: ['nad-longevity', 'radiance', 'foundation', 'nad-shot'],
    ingredients: ['nad', 'glutathione', 'b-complex'],
  },
  {
    slug: 'weight-metabolism',
    label: 'Weight & metabolism',
    tile: 'Working toward a goal, with support.',
    humanHeadline: 'A medical approach to a personal goal',
    open: 'Weight is personal, and it deserves more than a quick fix or a one-size plan. Real change tends to come from a structured, supported approach over time.',
    howItHelps:
      'Metabolic injections and drips offer fat-metabolism support within a physician-led program, alongside nutrition and activity. They are not a standalone treatment or a shortcut. Suitability is determined by the physician.',
    treatments: ['metabolic', 'the-burn-shot', 'lipo-mic-shot', 'l-carnitine-shot'],
    ingredients: ['l-carnitine', 'mic-lipotropic', 'b12'],
  },
  {
    slug: 'iron-low-ferritin',
    label: 'Iron deficiency & low ferritin',
    tile: 'When fatigue may be about iron.',
    humanHeadline: 'When your body needs more iron than supplements can give',
    open: 'Persistent fatigue, low ferritin, or heavy periods can point to iron deficiency. This is a clinical matter, and it deserves a clinical answer rather than a wellness drip.',
    howItHelps:
      'Iron therapy is a clinical infusion, guided by recent bloodwork and directed by our physician. It is handled on our dedicated Iron Therapy page, with proper assessment and monitoring.',
    treatments: [],
    ingredients: ['iron-sucrose'],
    clinical: true,
    externalHref: '/iron-therapy',
  },
  {
    slug: 'hydration-travel',
    label: 'Hydration & travel',
    tile: 'Resetting after the road.',
    humanHeadline: 'A clean reset for travel and long weeks',
    open: 'Travel, heat, and packed schedules leave you depleted in a way water alone does not always fix. Sometimes you just want to feel like yourself again.',
    howItHelps:
      'Hydration-focused drips may help restore fluids and electrolytes and support recovery after travel or a long stretch. If you feel unwell rather than simply depleted, we may suggest seeing a physician first.',
    treatments: ['revive', 'healing', 'recover'],
    ingredients: ['magnesium', 'vitamin-c'],
  },
];

export const concernBySlug = (slug: string): Concern | undefined =>
  concerns.find((c) => c.slug === slug);
