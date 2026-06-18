import type { FamilyKey } from './families';

// ─────────────────────────────────────────────────────────────────────────
// Treatments: drips and shots. One shape powers the mega-menu, the card
// grids, the concern pages, and the detail pages. Voice rules apply: "may
// support" language, no guaranteed outcomes, no pricing, no em dashes.
//
// Add a treatment by adding an entry. `ingredients` and `pairsWith` use
// slugs from ingredients.ts and other treatments. `concerns` uses slugs
// from concerns.ts. `menuDescriptor` is the four-word line in the mega-menu.
// ─────────────────────────────────────────────────────────────────────────

export interface Treatment {
  slug: string;
  name: string;
  type: 'drip' | 'shot';
  family: FamilyKey;
  essence: string; // one-line, shown on cards
  menuDescriptor: string; // ~4 words for the mega-menu
  whatItIs: string;
  supports: string[]; // "may support" voice
  ingredients: string[]; // ingredient slugs
  whatToExpect: string; // time, sensation, cadence. No price.
  goodToKnow: string;
  concerns: string[]; // concern slugs
  pairsWith: string[]; // treatment slugs
  signature?: boolean; // shown under "Signature Drips" in the menu
  configurator?: boolean; // Build Your Own gets a custom page
}

export const treatments: Treatment[] = [
  // ── Signature drips ─────────────────────────────────────────────────────
  {
    slug: 'foundation',
    name: 'Foundation',
    type: 'drip',
    family: 'wellness',
    essence: 'Daily wellness and a foundation for steady skin and energy.',
    menuDescriptor: 'Daily wellness and skin',
    whatItIs:
      'A balanced everyday drip built around hydration, core vitamins, and minerals. A calm baseline for people who want to feel steady through a full week rather than chase a single result.',
    supports: [
      'May support steady energy through a demanding week.',
      'Helps maintain hydration and a normal immune response.',
      'Designed to support skin health from within.',
    ],
    ingredients: ['b-complex', 'vitamin-c', 'magnesium', 'zinc', 'b12'],
    whatToExpect:
      'A relaxed session in the infusion chair, usually around forty-five minutes. Most people read, work, or simply rest. Many choose Foundation on a regular rhythm. Your nurse confirms a cadence that suits you.',
    goodToKnow:
      'Foundation is an elective wellness service, personalised after a brief screening. A consult confirms it is right for you. Results vary.',
    concerns: ['low-energy-fatigue', 'longevity', 'skin-hair-nails'],
    pairsWith: ['b12-shot', 'radiance'],
    signature: true,
  },
  {
    slug: 'healing',
    name: "Healing (Myers')",
    type: 'drip',
    family: 'wellness',
    essence: 'A classic blend to support energy and immune recovery.',
    menuDescriptor: 'Energy and immune recovery',
    whatItIs:
      "Our take on the classic Myers' cocktail, a well-known blend of B vitamins, vitamin C, magnesium, and calcium. A go-to when you feel run down and want to reset.",
    supports: [
      'May support recovery when you feel run down.',
      'Designed to support energy and a normal immune response.',
      'Helps maintain hydration.',
    ],
    ingredients: ['b-complex', 'vitamin-c', 'magnesium', 'calcium', 'b12'],
    whatToExpect:
      'Around forty-five minutes in the chair. The magnesium can bring a gentle warmth, which your nurse paces for comfort. Suited to occasional use when you need a reset.',
    goodToKnow:
      'An elective wellness service. We screen kidney health before magnesium. A consult confirms it is right for you. Results vary.',
    concerns: ['low-energy-fatigue', 'immune-support', 'hydration-travel'],
    pairsWith: ['immune-shield', 'b12-shot'],
    signature: true,
  },
  {
    slug: 'radiance',
    name: 'Radiance',
    type: 'drip',
    family: 'radiance',
    essence: 'Antioxidant and skin-radiance support.',
    menuDescriptor: 'Antioxidant and skin glow',
    whatItIs:
      'An antioxidant-forward drip built around glutathione and vitamin C, designed to support skin radiance from the inside. A considered part of a skin-health routine, not a quick fix.',
    supports: [
      'Antioxidant and skin-radiance support.',
      'Helps protect cells from oxidative stress.',
      'Designed to support a healthy, even-looking complexion.',
    ],
    ingredients: ['glutathione', 'vitamin-c', 'vitamin-e'],
    whatToExpect:
      'A calm session of roughly forty-five minutes. Many people choose Radiance as part of a steady routine rather than a one-off. Your nurse advises on cadence.',
    goodToKnow:
      'We frame Radiance as antioxidant and skin-radiance support. We do not promise skin whitening or any guaranteed lightening. An elective wellness service. Results vary.',
    concerns: ['skin-hair-nails', 'longevity'],
    pairsWith: ['glutathione-shot', 'beauty-elixir'],
    signature: true,
  },
  {
    slug: 'hair-nails',
    name: 'Hair & Nails',
    type: 'drip',
    family: 'radiance',
    essence: 'Strength for hair and nails, from within.',
    menuDescriptor: 'Strength from within',
    whatItIs:
      'A drip focused on the nutrients the body uses to maintain hair and nails, including biotin, B vitamins, and supporting minerals.',
    supports: [
      'Helps maintain normal hair and nails.',
      'Supports skin health from within.',
      'Part of a steady beauty-from-within routine.',
    ],
    ingredients: ['biotin', 'b-complex', 'zinc', 'vitamin-c'],
    whatToExpect:
      'About forty-five minutes in the chair. Best thought of as a regular routine, since hair and nails change slowly. Your nurse helps set a realistic cadence.',
    goodToKnow:
      'Biotin can affect some lab tests. Tell your physician and lab that you receive it. An elective wellness service. Results vary.',
    concerns: ['skin-hair-nails'],
    pairsWith: ['biotin-shot', 'beauty-elixir', 'radiance'],
    signature: true,
  },
  {
    slug: 'beauty-elixir',
    name: 'Beauty Elixir',
    type: 'drip',
    family: 'radiance',
    essence: 'Complete beauty-from-within support.',
    menuDescriptor: 'Complete beauty support',
    whatItIs:
      'Our most complete beauty-focused drip, bringing together antioxidants for radiance and the nutrients that support hair, skin, and nails in one session.',
    supports: [
      'Antioxidant and skin-radiance support.',
      'Helps maintain normal hair, skin, and nails.',
      'A complete beauty-from-within routine in one drip.',
    ],
    ingredients: ['glutathione', 'biotin', 'vitamin-c', 'b-complex', 'zinc'],
    whatToExpect:
      'A relaxed session of around forty-five to sixty minutes. Often chosen on a regular rhythm. Your nurse advises on cadence.',
    goodToKnow:
      'Antioxidant and beauty-from-within support, not a lightening or guaranteed-result treatment. An elective wellness service. Results vary.',
    concerns: ['skin-hair-nails', 'longevity'],
    pairsWith: ['glutathione-shot', 'radiance', 'hair-nails'],
    signature: true,
  },
  {
    slug: 'immune-shield',
    name: 'Immune Shield',
    type: 'drip',
    family: 'immune',
    essence: 'Seasonal immune defence.',
    menuDescriptor: 'Seasonal defence',
    whatItIs:
      'A high-support immune drip built around vitamin C, zinc, and supporting nutrients. A considered choice through a demanding season or before travel.',
    supports: [
      'May support a normal immune response through a demanding season.',
      'Helps maintain hydration.',
      'A considered choice before travel or a busy stretch.',
    ],
    ingredients: ['vitamin-c', 'zinc', 'b-complex', 'glutathione'],
    whatToExpect:
      'Around forty-five minutes in the chair. Many people choose it seasonally or ahead of travel. Your nurse advises on timing.',
    goodToKnow:
      'High-dose vitamin C is screened against G6PD deficiency and kidney-stone history. An elective wellness service. Results vary.',
    concerns: ['immune-support', 'hydration-travel'],
    pairsWith: ['tri-immune-shot', 'healing'],
    signature: true,
  },
  {
    slug: 'kingmaker',
    name: 'Kingmaker',
    type: 'drip',
    family: 'energy',
    essence: 'Vitality support for men.',
    menuDescriptor: 'Male vitality support',
    whatItIs:
      'A vitality-focused drip built around B vitamins, amino acids, and minerals, designed to support energy and recovery for men with demanding routines.',
    supports: [
      'May support steady energy through a demanding week.',
      'Supports recovery and helps reduce ordinary tiredness.',
      'Helps maintain hydration.',
    ],
    ingredients: ['b-complex', 'b12', 'amino-blend', 'magnesium'],
    whatToExpect:
      'Around forty-five minutes in the chair. Often chosen on a regular rhythm alongside training or a busy schedule. Your nurse advises on cadence.',
    goodToKnow:
      'An elective wellness service, personalised after a brief screening. A consult confirms it is right for you. Results vary.',
    concerns: ['low-energy-fatigue', 'recovery-performance'],
    pairsWith: ['b12-shot', 'recover'],
    signature: true,
  },
  {
    slug: 'recover',
    name: 'Recover',
    type: 'drip',
    family: 'recovery',
    essence: 'Athletic recovery and performance support.',
    menuDescriptor: 'Athletic recovery and performance',
    whatItIs:
      'A recovery drip built around amino acids, magnesium, and hydration, designed to support the body after hard training or a heavy stretch.',
    supports: [
      'Supports muscle recovery after training.',
      'Helps maintain hydration and normal muscle function.',
      'Designed to help you reset after exertion.',
    ],
    ingredients: ['amino-blend', 'magnesium', 'b-complex', 'vitamin-c'],
    whatToExpect:
      'Around forty-five minutes in the chair. Many people time it after events or hard training blocks. Your nurse advises on timing.',
    goodToKnow:
      'An elective wellness service. We screen kidney health before magnesium. Results vary.',
    concerns: ['recovery-performance', 'hydration-travel'],
    pairsWith: ['revive', 'b12-shot'],
    signature: true,
  },
  {
    slug: 'revive',
    name: 'Revive',
    type: 'drip',
    family: 'recovery',
    essence: 'Rehydration and a clean reset.',
    menuDescriptor: 'Rehydration and reset',
    whatItIs:
      'A focused rehydration drip with electrolytes and supporting vitamins, designed to help you reset after travel, a long week, or dehydration.',
    supports: [
      'Helps restore hydration and electrolytes.',
      'May support recovery after travel or a long stretch.',
      'A clean reset when you feel depleted.',
    ],
    ingredients: ['magnesium', 'b-complex', 'vitamin-c'],
    whatToExpect:
      'A shorter, refreshing session, often around thirty to forty-five minutes. Suited to occasional use when you need a reset. Your nurse advises.',
    goodToKnow:
      'An elective wellness service. If you feel unwell rather than simply depleted, we may recommend seeing a physician first. Results vary.',
    concerns: ['hydration-travel', 'recovery-performance'],
    pairsWith: ['recover', 'healing'],
    signature: true,
  },
  {
    slug: 'nad-longevity',
    name: 'NAD+ Longevity',
    type: 'drip',
    family: 'energy',
    essence: 'Cellular energy and healthy-aging support.',
    menuDescriptor: 'Cellular energy and aging',
    whatItIs:
      'A drip centred on NAD+, a coenzyme present in every cell and involved in energy production and cellular repair. A longevity-minded choice, given slowly and attentively.',
    supports: [
      'Supports cellular energy production.',
      'Part of a longevity-minded wellness routine.',
      'Often chosen alongside Foundation or Radiance.',
    ],
    ingredients: ['nad', 'b-complex', 'vitamin-c'],
    whatToExpect:
      'NAD+ is infused slowly, so sessions run longer, often ninety minutes or more. A faster pace can feel uncomfortable, so your nurse sets a gentle rate and stays with you.',
    goodToKnow:
      'Evidence for NAD+ in people is still developing. We are honest about that. An elective wellness service. Results vary.',
    concerns: ['longevity', 'low-energy-fatigue'],
    pairsWith: ['nad-shot', 'foundation'],
    signature: true,
  },
  {
    slug: 'metabolic',
    name: 'Metabolic',
    type: 'drip',
    family: 'metabolic',
    essence: 'Fat-metabolism support within a guided program.',
    menuDescriptor: 'Fat-metabolism support',
    whatItIs:
      'A drip built around lipotropic compounds and L-carnitine, offered as support within a physician-led metabolic program, alongside nutrition and activity.',
    supports: [
      'Fat-metabolism support within a medically guided program.',
      'Part of a structured plan, not a standalone treatment.',
      'Often paired with B12 and supporting nutrients.',
    ],
    ingredients: ['mic-lipotropic', 'l-carnitine', 'b12', 'b-complex'],
    whatToExpect:
      'Around forty-five minutes in the chair, usually on a cadence set within your program. Your physician and nurse guide timing.',
    goodToKnow:
      'Offered as support within a physician-led program, never as a standalone weight-loss claim. Suitability is determined by the physician. See our Metabolic Program. Results vary.',
    concerns: ['weight-metabolism'],
    pairsWith: ['lipo-mic-shot', 'the-burn-shot', 'l-carnitine-shot'],
    signature: true,
  },
  {
    slug: 'pregnancy-care',
    name: 'Pregnancy Care',
    type: 'drip',
    family: 'wellness',
    essence: 'Gentle, physician-supervised hydration and nutrient support through pregnancy.',
    menuDescriptor: 'Maternal wellness support',
    whatItIs:
      'A gentle drip offering hydration and the core nutrients that support maternal wellness during pregnancy, including B vitamins, folate, and vitamin C. Given only under clinical supervision and tailored to where you are in your pregnancy.',
    supports: [
      'May help ease nausea and support comfort in early pregnancy.',
      'Supports hydration and maternal nutrient replenishment.',
      'Provides folate and B vitamins that support healthy fetal development.',
      "Designed to support both maternal wellness and your baby's growth.",
    ],
    ingredients: ['b6', 'thiamine', 'b12', 'folic-acid', 'vitamin-a', 'vitamin-c', 'vitamin-d3'],
    whatToExpect:
      'A calm session of around forty-five to sixty minutes. Many patients return every two to four weeks through pregnancy, on a cadence your physician sets after reviewing your stage and your health.',
    goodToKnow:
      'Offered only under clinical supervision during pregnancy. Your physician reviews your health, your stage of pregnancy, and your medications first, and will adjust or decline on clinical grounds. Some nutrients, including vitamin A, are dosed carefully in pregnancy. Wellness services are elective. Results vary, and a consult confirms it is right for you.',
    concerns: [],
    pairsWith: ['foundation', 'b12-shot'],
    signature: true,
  },
  {
    slug: 'build-your-own',
    name: 'Build Your Own',
    type: 'drip',
    family: 'neutral',
    essence: 'Design your infusion with your nurse.',
    menuDescriptor: 'Design your infusion',
    whatItIs:
      'Start from a hydration base and add the boosters that match how you want to feel. An educational way to understand what goes into a drip. Your nurse finalises your blend after screening.',
    supports: [
      'A personalised drip built around your goals.',
      'A clear way to learn what each booster does.',
      'Finalised with your nurse after a brief screening.',
    ],
    ingredients: [
      'b-complex',
      'b12',
      'vitamin-c',
      'glutathione',
      'magnesium',
      'zinc',
      'amino-blend',
      'biotin',
    ],
    whatToExpect:
      'Choose a base and boosters with your nurse, then settle into the chair, usually for forty-five minutes or so. Your blend is confirmed on clinical grounds.',
    goodToKnow:
      'Not every combination is suitable for everyone. Your nurse finalises your blend after screening. An elective wellness service. Results vary.',
    concerns: ['low-energy-fatigue', 'immune-support', 'skin-hair-nails'],
    pairsWith: ['foundation', 'b12-shot'],
    signature: true,
    configurator: true,
  },

  // ── The Injection Bar (shots) ───────────────────────────────────────────
  {
    slug: 'b12-shot',
    name: 'B12 Shot',
    type: 'shot',
    family: 'energy',
    essence: 'A quick lift for steady energy.',
    menuDescriptor: 'Steady everyday energy',
    whatItIs:
      'A fast intramuscular shot of methylcobalamin, the active form of B12, used in energy metabolism and nerve health.',
    supports: [
      'Supports normal energy metabolism and helps reduce tiredness.',
      'Helps maintain normal nervous-system function.',
    ],
    ingredients: ['b12'],
    whatToExpect:
      'A five-minute visit. Great on its own, between drips, or alongside an aesthetics appointment. Many people choose a regular cadence.',
    goodToKnow:
      'People on plant-based diets, and some people over fifty, are more likely to run low. An elective wellness service. Results vary.',
    concerns: ['low-energy-fatigue'],
    pairsWith: ['b-complex-shot', 'foundation'],
  },
  {
    slug: 'b-complex-shot',
    name: 'B-Complex Shot',
    type: 'shot',
    family: 'energy',
    essence: 'The full B team in five minutes.',
    menuDescriptor: 'Full B-vitamin support',
    whatItIs:
      'A quick shot of the B vitamins that work together in energy metabolism and nervous-system support.',
    supports: [
      'Supports normal energy-yielding metabolism.',
      'Helps reduce ordinary tiredness and fatigue.',
    ],
    ingredients: ['b-complex'],
    whatToExpect:
      'A five-minute visit. Easy to add to a regular routine. Your nurse advises on cadence.',
    goodToKnow: 'An elective wellness service. Results vary.',
    concerns: ['low-energy-fatigue'],
    pairsWith: ['b12-shot'],
  },
  {
    slug: 'vitamin-d-shot',
    name: 'Vitamin D Shot',
    type: 'shot',
    family: 'wellness',
    essence: 'Top up a common shortfall.',
    menuDescriptor: 'Bone and immune support',
    whatItIs:
      'A quick shot of vitamin D, the nutrient many people in our climate run low on, particularly through winter.',
    supports: [
      'Helps maintain normal bones, muscle, and immune function.',
    ],
    ingredients: ['vitamin-d3'],
    whatToExpect:
      'A five-minute visit. If you have a recent vitamin D level, bring it, as it helps guide dosing. Often chosen seasonally.',
    goodToKnow: 'An elective wellness service. Dosing is guided by labs where available. Results vary.',
    concerns: ['immune-support'],
    pairsWith: ['b12-shot'],
  },
  {
    slug: 'glutathione-shot',
    name: 'Glutathione Shot',
    type: 'shot',
    family: 'radiance',
    essence: 'Antioxidant support for skin radiance.',
    menuDescriptor: 'Antioxidant skin support',
    whatItIs:
      'A quick shot of glutathione, the master antioxidant, framed as antioxidant and skin-radiance support.',
    supports: [
      'Antioxidant and skin-radiance support.',
      'Helps protect cells from oxidative stress.',
    ],
    ingredients: ['glutathione'],
    whatToExpect:
      'A five-minute visit, often chosen on a regular rhythm or alongside Radiance. Your nurse advises on cadence.',
    goodToKnow:
      'Antioxidant and skin-radiance support, not a whitening or guaranteed-lightening treatment. An elective wellness service. Results vary.',
    concerns: ['skin-hair-nails', 'longevity'],
    pairsWith: ['radiance', 'beauty-elixir'],
  },
  {
    slug: 'tri-immune-shot',
    name: 'Tri-Immune Shot',
    type: 'shot',
    family: 'immune',
    essence: 'A three-part immune boost.',
    menuDescriptor: 'Three-part immune boost',
    whatItIs:
      'A concentrated immune shot bringing together vitamin C, zinc, and glutathione, the body uses each in a normal immune response.',
    supports: [
      'May support a normal immune response.',
      'A considered choice through a demanding season.',
    ],
    ingredients: ['vitamin-c', 'zinc', 'glutathione'],
    whatToExpect:
      'A five-minute visit, often chosen seasonally or before travel. Your nurse advises on timing.',
    goodToKnow: 'An elective wellness service. Results vary.',
    concerns: ['immune-support'],
    pairsWith: ['immune-shield', 'vitamin-d-shot'],
  },
  {
    slug: 'lipo-mic-shot',
    name: 'Lipo-MIC Shot',
    type: 'shot',
    family: 'metabolic',
    essence: 'Lipotropic support within a program.',
    menuDescriptor: 'Lipotropic metabolic support',
    whatItIs:
      'A shot of the lipotropic blend methionine, inositol, and choline, offered as support within a physician-led metabolic program.',
    supports: [
      'Fat-metabolism support within a medically guided program.',
      'Often paired with B12 and a structured plan.',
    ],
    ingredients: ['mic-lipotropic', 'b12'],
    whatToExpect:
      'A five-minute visit, usually on a cadence set within your program. Your physician and nurse guide timing.',
    goodToKnow:
      'Offered as support within a physician-led program, never as a standalone weight-loss claim. See our Metabolic Program. Results vary.',
    concerns: ['weight-metabolism'],
    pairsWith: ['metabolic', 'the-burn-shot'],
  },
  {
    slug: 'l-carnitine-shot',
    name: 'L-Carnitine Shot',
    type: 'shot',
    family: 'metabolic',
    essence: 'Helps the body use fat for energy.',
    menuDescriptor: 'Fat-to-energy support',
    whatItIs:
      'A shot of L-carnitine, which the body uses to move fatty acids into cells to be burned for energy. Offered within a guided program.',
    supports: [
      'Fat-metabolism support within a medically guided program.',
      'Part of a structured metabolic and exercise plan.',
    ],
    ingredients: ['l-carnitine'],
    whatToExpect:
      'A five-minute visit, on a cadence set within your program. Your physician and nurse guide timing.',
    goodToKnow:
      'Support within a physician-led program, not a standalone weight-loss treatment. Results vary.',
    concerns: ['weight-metabolism', 'recovery-performance'],
    pairsWith: ['metabolic', 'lipo-mic-shot'],
  },
  {
    slug: 'the-burn-shot',
    name: 'The Burn Shot',
    type: 'shot',
    family: 'metabolic',
    essence: 'A metabolic blend for your program.',
    menuDescriptor: 'Metabolic program support',
    whatItIs:
      'A combination shot bringing together lipotropic compounds, L-carnitine, and B vitamins, offered as part of a physician-led metabolic program.',
    supports: [
      'Fat-metabolism support within a medically guided program.',
      'Part of a structured plan, alongside nutrition and activity.',
    ],
    ingredients: ['mic-lipotropic', 'l-carnitine', 'b-complex'],
    whatToExpect:
      'A five-minute visit, on a cadence set within your program. Your physician and nurse guide timing.',
    goodToKnow:
      'Support within a physician-led program, never a standalone weight-loss claim. See our Metabolic Program. Results vary.',
    concerns: ['weight-metabolism'],
    pairsWith: ['metabolic', 'lipo-mic-shot'],
  },
  {
    slug: 'nad-shot',
    name: 'NAD+ Shot',
    type: 'shot',
    family: 'energy',
    essence: 'A smaller step into NAD+.',
    menuDescriptor: 'Cellular energy support',
    whatItIs:
      'A shot of NAD+, a coenzyme involved in cellular energy and repair. A smaller, quicker way to include NAD+ in a longevity-minded routine.',
    supports: [
      'Supports cellular energy production.',
      'Part of a longevity-minded wellness routine.',
    ],
    ingredients: ['nad'],
    whatToExpect:
      'A short visit, longer than a vitamin shot, as NAD+ is given gently. Your nurse paces it for comfort.',
    goodToKnow:
      'Evidence for NAD+ in people is still developing. An elective wellness service. Results vary.',
    concerns: ['longevity', 'low-energy-fatigue'],
    pairsWith: ['nad-longevity', 'b12-shot'],
  },
  {
    slug: 'biotin-shot',
    name: 'Biotin Shot',
    type: 'shot',
    family: 'radiance',
    essence: 'Quick support for hair, skin, and nails.',
    menuDescriptor: 'Hair and nail support',
    whatItIs:
      'A quick shot of biotin, the B vitamin the body uses to maintain hair, skin, and nails.',
    supports: [
      'Helps maintain normal hair and skin.',
      'Supports normal energy-yielding metabolism.',
    ],
    ingredients: ['biotin'],
    whatToExpect:
      'A five-minute visit, often chosen on a regular rhythm since hair and nails change slowly.',
    goodToKnow:
      'Biotin can affect some lab tests. Tell your physician and lab that you receive it. An elective wellness service. Results vary.',
    concerns: ['skin-hair-nails'],
    pairsWith: ['hair-nails', 'beauty-elixir'],
  },
];

export const drips = treatments.filter((t) => t.type === 'drip');
export const shots = treatments.filter((t) => t.type === 'shot');
export const signatureDrips = drips.filter((t) => t.signature);

export const treatmentBySlug = (slug: string): Treatment | undefined =>
  treatments.find((t) => t.slug === slug);

// Derive which treatments contain a given ingredient (for ingredient pages).
export const treatmentsWithIngredient = (ingredientSlug: string): Treatment[] =>
  treatments.filter((t) => t.ingredients.includes(ingredientSlug));
