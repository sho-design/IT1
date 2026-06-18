import type { FamilyKey } from './families';

// ─────────────────────────────────────────────────────────────────────────
// Ingredient library. Plain, accurate, honest about evidence. Soft benefit
// language only ("may support", "helps maintain"). No guaranteed outcomes.
// `foundIn` is derived from treatments at build time, so it is not stored
// here. Add an ingredient by adding an entry below and referencing its slug
// from a treatment's `ingredients` array.
// ─────────────────────────────────────────────────────────────────────────

export type IngredientRole =
  | 'Vitamin'
  | 'Mineral'
  | 'Antioxidant'
  | 'Amino acid'
  | 'Specialty';

export interface Ingredient {
  slug: string;
  name: string;
  role: IngredientRole;
  family: FamilyKey;
  oneLine: string; // four-to-eight word "what it does for you"
  whatItIs: string;
  maySupport: string[];
  goodToKnow?: string;
}

export const ingredients: Ingredient[] = [
  {
    slug: 'vitamin-a',
    name: 'Vitamin A',
    role: 'Vitamin',
    family: 'radiance',
    oneLine: 'Supports skin and normal vision.',
    whatItIs:
      'A fat-soluble vitamin the body uses to maintain skin, the surface of the eye, and a normal immune response.',
    maySupport: [
      'Helps maintain normal skin and mucous membranes.',
      'Supports normal vision and a healthy immune response.',
    ],
    goodToKnow:
      'Vitamin A accumulates in the body, so dosing is kept measured. Tell us if you are pregnant or may become pregnant, as high intake is not advised. Results vary.',
  },
  {
    slug: 'vitamin-c',
    name: 'Vitamin C',
    role: 'Antioxidant',
    family: 'immune',
    oneLine: 'Antioxidant that supports immunity and collagen.',
    whatItIs:
      'An antioxidant vitamin involved in normal immune function and in the body making collagen, the protein that gives skin and connective tissue structure.',
    maySupport: [
      'Helps maintain a normal immune response, especially through a demanding season.',
      'Supports the body making collagen for skin and connective tissue.',
      'Helps protect cells from oxidative stress.',
    ],
    goodToKnow:
      'High-dose vitamin C is screened against G6PD deficiency and kidney-stone history. We review this with you before any high-dose infusion. Results vary.',
  },
  {
    slug: 'vitamin-d3',
    name: 'Vitamin D3',
    role: 'Vitamin',
    family: 'wellness',
    oneLine: 'Supports bone, muscle, and immune health.',
    whatItIs:
      'The form of vitamin D the body makes from sunlight. Many people in our climate run low, particularly through the winter.',
    maySupport: [
      'Helps maintain normal bones, teeth, and muscle function.',
      'Supports a normal immune response.',
    ],
    goodToKnow:
      'If you have a known vitamin D level, bring it. Dosing is guided by labs where available. Results vary.',
  },
  {
    slug: 'vitamin-e',
    name: 'Vitamin E',
    role: 'Antioxidant',
    family: 'radiance',
    oneLine: 'Antioxidant that helps protect skin cells.',
    whatItIs:
      'A fat-soluble antioxidant that helps protect cells, including skin cells, from oxidative stress.',
    maySupport: [
      'Helps protect cells from oxidative stress.',
      'Works alongside other antioxidants to support skin health.',
    ],
  },
  {
    slug: 'b-complex',
    name: 'B-Complex',
    role: 'Vitamin',
    family: 'energy',
    oneLine: 'A full B-vitamin team for energy metabolism.',
    whatItIs:
      'A blend of the B vitamins that work together in the body turning food into usable energy and supporting the nervous system.',
    maySupport: [
      'Supports normal energy-yielding metabolism through a busy week.',
      'Helps maintain normal nervous-system and psychological function.',
      'Helps reduce ordinary tiredness and fatigue.',
    ],
    goodToKnow:
      'B vitamins are water-soluble, so the body keeps what it needs and clears the rest. Results vary.',
  },
  {
    slug: 'b12',
    name: 'B12 (methylcobalamin)',
    role: 'Vitamin',
    family: 'energy',
    oneLine: 'Supports steady energy and a healthy nervous system.',
    whatItIs:
      'The active, body-ready form of vitamin B12, used in making red blood cells, in nerve health, and in energy metabolism.',
    maySupport: [
      'Supports normal energy metabolism and helps reduce tiredness.',
      'Helps maintain normal red blood cells and nervous-system function.',
    ],
    goodToKnow:
      'People on plant-based diets, and some people over fifty, are more likely to run low. A consult and, where useful, a lab review confirm whether it is right for you. Results vary.',
  },
  {
    slug: 'b6',
    name: 'B6',
    role: 'Vitamin',
    family: 'energy',
    oneLine: 'Supports metabolism and a balanced mood.',
    whatItIs:
      'A B vitamin involved in protein metabolism and in making the brain chemicals that influence mood and sleep.',
    maySupport: [
      'Supports normal energy and protein metabolism.',
      'Helps maintain normal psychological and nervous-system function.',
    ],
  },
  {
    slug: 'thiamine',
    name: 'Thiamine (B1)',
    role: 'Vitamin',
    family: 'energy',
    oneLine: 'Supports energy metabolism and the nervous system.',
    whatItIs:
      'A B vitamin the body uses to turn carbohydrates into usable energy and to support normal nervous-system function.',
    maySupport: [
      'Supports normal energy-yielding metabolism.',
      'Helps maintain normal nervous-system and heart function.',
    ],
    goodToKnow:
      'Thiamine is water-soluble, so the body keeps what it needs and clears the rest. Results vary.',
  },
  {
    slug: 'folic-acid',
    name: 'Folic Acid (B9)',
    role: 'Vitamin',
    family: 'wellness',
    oneLine: 'Supports cell growth and healthy development.',
    whatItIs:
      'The B vitamin folate, which the body uses to make new cells and form healthy blood cells. It is especially important before and during early pregnancy.',
    maySupport: [
      'Supports normal cell growth and the formation of blood cells.',
      'Supports healthy development in early pregnancy.',
    ],
    goodToKnow:
      'Folate is widely recommended before and during early pregnancy to support healthy development. Your physician guides the right amount for you. Results vary.',
  },
  {
    slug: 'biotin',
    name: 'Biotin (B7)',
    role: 'Vitamin',
    family: 'radiance',
    oneLine: 'Supports normal hair, skin, and nails.',
    whatItIs:
      'A B vitamin the body uses in energy metabolism and in maintaining hair, skin, and nails.',
    maySupport: [
      'Helps maintain normal hair and skin.',
      'Supports normal energy-yielding metabolism.',
    ],
    goodToKnow:
      'Biotin can interfere with some lab tests, including certain thyroid and cardiac panels. Tell your physician and the lab that you receive biotin so results are read correctly. Results vary.',
  },
  {
    slug: 'b3-niacinamide',
    name: 'B3 (Niacinamide)',
    role: 'Vitamin',
    family: 'energy',
    oneLine: 'Supports energy metabolism and skin.',
    whatItIs:
      'A gentle form of vitamin B3 used in energy metabolism and in maintaining normal skin.',
    maySupport: [
      'Supports normal energy-yielding metabolism.',
      'Helps maintain normal skin.',
    ],
  },
  {
    slug: 'b5-panthenol',
    name: 'B5 (Panthenol)',
    role: 'Vitamin',
    family: 'energy',
    oneLine: 'Supports normal metabolism and skin.',
    whatItIs:
      'A B vitamin involved in energy metabolism and in maintaining skin and mucous membranes.',
    maySupport: [
      'Supports normal energy-yielding metabolism.',
      'Helps maintain normal skin.',
    ],
  },
  {
    slug: 'magnesium',
    name: 'Magnesium',
    role: 'Mineral',
    family: 'recovery',
    oneLine: 'Supports muscle function and recovery.',
    whatItIs:
      'A mineral involved in hundreds of processes in the body, including muscle and nerve function, and recovery after exertion.',
    maySupport: [
      'Helps maintain normal muscle and nervous-system function.',
      'Supports recovery and helps reduce tiredness and fatigue.',
    ],
    goodToKnow:
      'Magnesium is dosed gently to keep you comfortable. We review kidney health first, as the body clears magnesium through the kidneys. Results vary.',
  },
  {
    slug: 'zinc',
    name: 'Zinc',
    role: 'Mineral',
    family: 'immune',
    oneLine: 'Supports immune function and skin repair.',
    whatItIs:
      'A trace mineral the body uses in immune function, wound healing, and maintaining skin.',
    maySupport: [
      'Supports a normal immune response.',
      'Helps maintain normal skin and supports the body healing.',
    ],
  },
  {
    slug: 'calcium',
    name: 'Calcium',
    role: 'Mineral',
    family: 'wellness',
    oneLine: 'Supports bones and muscle function.',
    whatItIs:
      'A mineral central to bone strength, muscle contraction, and nerve signalling.',
    maySupport: [
      'Helps maintain normal bones and teeth.',
      'Supports normal muscle and nerve function.',
    ],
  },
  {
    slug: 'glutathione',
    name: 'Glutathione',
    role: 'Antioxidant',
    family: 'radiance',
    oneLine: 'A master antioxidant for skin radiance.',
    whatItIs:
      'A naturally occurring antioxidant made in the body, often called the master antioxidant for its role in protecting cells and supporting the skin.',
    maySupport: [
      'Antioxidant and skin-radiance support.',
      'Helps protect cells from oxidative stress.',
    ],
    goodToKnow:
      'We frame glutathione as antioxidant and skin-radiance support. We do not promise skin whitening, brightening, or any guaranteed lightening. Results vary from person to person.',
  },
  {
    slug: 'nad',
    name: 'NAD+',
    role: 'Specialty',
    family: 'energy',
    oneLine: 'A coenzyme tied to cellular energy.',
    whatItIs:
      'A coenzyme present in every cell, involved in turning nutrients into energy and in cellular repair processes that the body relies on as it ages.',
    maySupport: [
      'Supports cellular energy production.',
      'Part of a longevity-minded wellness routine.',
    ],
    goodToKnow:
      'NAD+ is infused slowly, as a faster pace can feel uncomfortable. Your nurse sets a gentle rate and stays with you. Results vary, and evidence in people is still developing.',
  },
  {
    slug: 'amino-blend',
    name: 'Amino blend',
    role: 'Amino acid',
    family: 'recovery',
    oneLine: 'Building blocks for muscle and recovery.',
    whatItIs:
      'A blend of amino acids, the building blocks of protein, used by the body in muscle repair and recovery.',
    maySupport: [
      'Supports muscle recovery after training.',
      'Part of a performance-minded routine.',
    ],
  },
  {
    slug: 'l-carnitine',
    name: 'L-Carnitine',
    role: 'Amino acid',
    family: 'metabolic',
    oneLine: 'Helps the body use fat for energy.',
    whatItIs:
      'A compound the body uses to move fatty acids into cells, where they are burned for energy. It is part of normal fat metabolism.',
    maySupport: [
      'Fat-metabolism support within a medically guided program.',
      'Part of a structured metabolic and exercise plan.',
    ],
    goodToKnow:
      'L-carnitine is offered as support within a physician-led program, not as a standalone weight-loss treatment. Results vary and depend on the whole plan.',
  },
  {
    slug: 'mic-lipotropic',
    name: 'Methionine, Inositol, Choline (MIC)',
    role: 'Specialty',
    family: 'metabolic',
    oneLine: 'Lipotropic blend for fat metabolism.',
    whatItIs:
      'A lipotropic combination of methionine, inositol, and choline, compounds involved in how the body processes fat.',
    maySupport: [
      'Fat-metabolism support within a medically guided program.',
      'Often paired with B12 and a structured plan.',
    ],
    goodToKnow:
      'Offered as support within a physician-led metabolic program, never as a standalone weight-loss claim. Results vary.',
  },
  {
    slug: 'iron-sucrose',
    name: 'Iron (Venofer, iron sucrose)',
    role: 'Mineral',
    family: 'clinical',
    oneLine: 'Clinical iron, when supplements are not enough.',
    whatItIs:
      'An intravenous form of iron used clinically to restore iron stores when oral supplements are not enough or are not tolerated. This is a clinical infusion, not a wellness drip.',
    maySupport: [
      'Used to treat diagnosed iron deficiency and low ferritin under physician direction.',
      'May be clinically indicated where supplements have not worked.',
    ],
    goodToKnow:
      'Iron infusion is physician-directed and guided by recent bloodwork, including ferritin and iron studies. It is given with monitoring throughout. Iron may be clinically indicated, unlike elective wellness services. See our Iron Therapy page.',
  },
];

export const ingredientBySlug = (slug: string): Ingredient | undefined =>
  ingredients.find((i) => i.slug === slug);

// Honest, per-ingredient evidence. "Established" = an essential nutrient with
// well-defined physiological roles and/or clinical use. "Emerging" = promising,
// but human evidence is still developing. Notes are deliberately conservative.
type Evidence = { level: 'Established' | 'Emerging'; note: string };

const evidenceData: Record<string, Evidence> = {
  'vitamin-a': { level: 'Established', note: 'Well-defined roles in vision, skin and immunity; supplementation matters most when intake is low.' },
  'vitamin-c': { level: 'Established', note: 'Strong evidence for immune and collagen roles; high-dose IV effects are still being studied.' },
  'vitamin-d3': { level: 'Established', note: 'Well-established for bone, muscle and immune function; dosing is best guided by your blood level.' },
  'vitamin-e': { level: 'Established', note: 'Recognised antioxidant role; isolated high-dose benefits are less clear.' },
  'b-complex': { level: 'Established', note: 'B vitamins have well-defined roles in energy metabolism; benefit is clearest when you run low.' },
  b12: { level: 'Established', note: 'Well-established for nerve and red-cell health; most useful when levels are low.' },
  b6: { level: 'Established', note: 'Defined roles in metabolism and mood-related pathways; kept within sensible limits.' },
  thiamine: { level: 'Established', note: 'Well-established essential B vitamin for energy and nervous-system function.' },
  'folic-acid': { level: 'Established', note: 'Strongly established before and during early pregnancy; otherwise guided by need.' },
  biotin: { level: 'Established', note: 'Its essential role is established; hair and nail benefits beyond deficiency are limited.' },
  'b3-niacinamide': { level: 'Established', note: 'Defined roles in metabolism and skin; a gentle, well-tolerated form of B3.' },
  'b5-panthenol': { level: 'Established', note: 'Established role in energy metabolism and maintaining skin.' },
  magnesium: { level: 'Established', note: 'Well-established for muscle and nerve function; helpful when intake or levels are low.' },
  zinc: { level: 'Established', note: 'Defined roles in immunity, healing and skin; most useful when you run low.' },
  calcium: { level: 'Established', note: 'Well-established for bone strength and muscle and nerve function.' },
  glutathione: { level: 'Emerging', note: 'Its antioxidant role is recognised, but IV skin and wellness benefits are still being studied.' },
  nad: { level: 'Emerging', note: 'Early human research; much of the current evidence is still preclinical.' },
  'amino-blend': { level: 'Emerging', note: 'Plausible support for muscle recovery; direct IV evidence is limited.' },
  'l-carnitine': { level: 'Emerging', note: 'Its role in fat metabolism is known, but weight and performance benefits are mixed.' },
  'mic-lipotropic': { level: 'Emerging', note: 'Used within physician-led programs; standalone evidence is limited.' },
  'iron-sucrose': { level: 'Established', note: 'Strong clinical evidence for treating diagnosed iron deficiency under physician direction.' },
};

export const ingredientEvidence = (slug: string): Evidence =>
  evidenceData[slug] ?? {
    level: 'Established',
    note: 'An essential nutrient with well-defined physiological roles.',
  };
