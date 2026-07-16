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

// ─────────────────────────────────────────────────────────────────────────
// Per-ingredient evidence. Each entry carries an honest evidence `level` and
// 1-3 real, cited studies. Studies were researched against PubMed / PMC /
// NCBI / Cochrane and each citation was independently fact-checked to confirm
// it is a real study whose finding is not overstated. Framing is deliberately
// conservative and CPSO-safe ("may support", no guarantees): most IV wellness
// use in healthy, replete people is honestly rated "limited".
//   - established: an essential role / clinical use is well supported.
//   - emerging:    promising, but human evidence is still developing.
//   - limited:     little or no direct evidence for IV use in healthy people.
// NOTE FOR REVIEW: Dr. Nguyen should sign off on this evidence framing before
// it is published. Nothing here is a treatment claim; it is honest context.
// ─────────────────────────────────────────────────────────────────────────
export type EvidenceLevel = 'established' | 'emerging' | 'limited';

export interface Study {
  finding: string; // short plain-language title of what the study found
  summary: string; // 1-2 plain sentences: population, route (IV/oral), result
  source: string; // journal + year, or review/meta-analysis type
  url: string; // link to the real source (PubMed / PMC / Cochrane)
  context: string; // honest note on how well it applies to IV wellness use
}

export interface Evidence {
  level: EvidenceLevel;
  note: string; // one honest, CPSO-safe summary line (used as a tooltip)
  studies: Study[];
}

const evidenceData: Record<string, Evidence> = {
  'vitamin-a': {
    level: 'limited',
    note: `Strong evidence for correcting deficiency (oral or topical); IV use in healthy, replete people is not established.`,
    studies: [
      {
        finding: `Oral vitamin A reduces night blindness and xerophthalmia in young children`,
        summary: `A large systematic review and meta-analysis of trials in children under 5, mostly in settings where deficiency is common, found that oral vitamin A supplementation was associated with less night blindness (RR 0.32, 95% CI 0.21-0.50) and less xerophthalmia (RR 0.31, 95% CI 0.22-0.45), along with lower all-cause mortality (about 24%, RR 0.76) and less illness. The evidence is for oral dosing to prevent or correct deficiency, not intravenous vitamin A in well-nourished people.`,
        source: `Mayo-Wilson et al., BMJ systematic review and meta-analysis, 2011 (BMJ 2011;343:d5094)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC3162042/`,
        context: `Applies mainly to oral vitamin A in deficient children; it does not address IV vitamin A for vision in already-replete healthy adults, so it may support correcting deficiency but says little about IV wellness use.`,
      },
      {
        finding: `Topical retinol may improve the appearance of photodamaged skin`,
        summary: `A double-blind, vehicle-controlled trial reported that one year of topical stabilized retinol improved the appearance of photodamaged facial skin in adults. This is a skin-applied (topical) application, not IV or oral systemic dosing.`,
        source: `Randhawa et al., J Drugs Dermatol 2015 (Cochrane CENTRAL record CN-01087680)`,
        url: `https://www.cochranelibrary.com/central/doi/10.1002/central/CN-01087680/full`,
        context: `The skin benefit here comes from retinol applied directly to the skin; it does not demonstrate that IV vitamin A supports skin in healthy people.`,
      },
    ],
  },
  'vitamin-c': {
    level: 'limited',
    note: `Clear roles in immunity and collagen, but IV benefit in healthy people is limited and still being studied.`,
    studies: [
      {
        finding: `IV vitamin C may improve some neutrophil immune functions`,
        summary: `Systematic review of 16 randomized controlled trials examining vitamin C and neutrophil function, largely in hospitalized, exercising, or critically ill patients. Overall about 44% of the RCTs showed an effect on some neutrophil function (e.g., chemotaxis), and two of three chemotaxis trials showed improvement after intravenous vitamin C. Results were heterogeneous across differing cohorts and dosing regimens.`,
        source: `Nutrients, 2019 systematic review of RCTs (PMC6770220)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC6770220/`,
        context: `Populations were patients (hospitalized, post-exercise, critically ill) rather than healthy wellness clients, and effects were inconsistent (about 44% of trials), so this may support but does not prove an immune benefit from a wellness drip.`,
      },
      {
        finding: `Vitamin C may support collagen synthesis after injury`,
        summary: `Systematic review of 10 studies (animal and human, mostly oral supplementation) reporting that vitamin C may increase collagen synthesis, support bone/tendon/ligament healing, and reduce oxidative stress markers after musculoskeletal injury.`,
        source: `Orthopaedic Journal of Sports Medicine, 2018 systematic review (PMID 30386805)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC6204628/`,
        context: `Evidence is largely oral supplementation in injured or animal models, not intravenous dosing in healthy people; the authors note clinical evidence is limited and more human trials are needed.`,
      },
      {
        finding: `Vitamin C may support tissue and wound healing`,
        summary: `Systematic review of 18 studies concluding that vitamin C supplementation may improve healing outcomes in certain conditions, predominantly pressure ulcers, consistent with vitamin C's role in collagen formation and tissue repair.`,
        source: `Antioxidants (Basel), 2022 systematic review on vitamin C in tissue healing (PMC9405326)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC9405326/`,
        context: `Benefits were seen mainly in patients with impaired healing or likely deficiency, often with small samples, combined nutritional treatments, and mostly oral routes; this does not establish a collagen or healing benefit from IV vitamin C in healthy, replete individuals.`,
      },
    ],
  },
  'vitamin-d3': {
    level: 'limited',
    note: `Well-defined for bone and immune health when you run low; the benefit is oral and deficiency-driven, not IV.`,
    studies: [
      {
        finding: `May modestly reduce acute respiratory infections in deficient people`,
        summary: `Systematic review and meta-analysis of aggregate data from randomised controlled trials (oral vitamin D) reported a modest protective effect against acute respiratory infections. Benefit was concentrated in people who were vitamin D deficient at baseline and received daily or weekly (not bolus) dosing; overall effects were small.`,
        source: `Lancet Diabetes & Endocrinology, 2021 (systematic review and meta-analysis of aggregate RCT data; PMC)`,
        url: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7709175/`,
        context: `All trials used oral dosing; any benefit was concentrated in deficient individuals on regular daily/weekly dosing and was modest and mixed across analyses. There is no evidence for IV vitamin D or for benefit in healthy, vitamin-D-replete adults.`,
      },
      {
        finding: `Calcium plus vitamin D may support fracture risk reduction; vitamin D alone is limited`,
        summary: `Updated meta-analysis of RCTs from the National Osteoporosis Foundation found that calcium plus vitamin D (oral) supplementation was associated with a reduced risk of total fractures. This meta-analysis specifically assessed the calcium-plus-vitamin-D combination; evidence for vitamin D alone on fractures and bone density is more limited and inconsistent.`,
        source: `Osteoporosis International, 2016 (National Osteoporosis Foundation updated meta-analysis; PMC)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC4715837/`,
        context: `The fracture benefit was observed for oral calcium combined with vitamin D, generally in older/deficient populations. Vitamin D alone and IV administration are not supported for bone health in healthy people.`,
      },
    ],
  },
  'vitamin-e': {
    level: 'limited',
    note: `A recognised antioxidant, but human trials for skin protection are largely negative or topical, not IV.`,
    studies: [
      {
        finding: `Oral vitamin E did not meaningfully reduce UV oxidative stress`,
        summary: `In healthy human volunteers, oral vitamin E significantly reduced one marker of skin lipid oxidation (malondialdehyde), but neither vitamin E nor beta-carotene affected other measures of UV-induced oxidative stress or skin sensitivity to UV, so the authors concluded there was no meaningful photoprotection from supplementation.`,
        source: `Am J Clin Nutr / PubMed, 2004`,
        url: `https://pubmed.ncbi.nlm.nih.gov/15531675/`,
        context: `Oral route in healthy people, but largely negative for skin protection; does not support an IV skin-protective claim.`,
      },
      {
        finding: `Topical vitamin C plus E with ferulic acid reduced UV skin damage`,
        summary: `A stabilized topical solution of vitamins C and E with ferulic acid provided measurable protection of human skin against UV-induced damage, including reduced thymine dimers. This was a topical formulation applied to the skin, not systemic or IV vitamin E.`,
        source: `J Am Acad Dermatol / PubMed, 2008`,
        url: `https://pubmed.ncbi.nlm.nih.gov/18603326/`,
        context: `Topical application only; results do not transfer to an intravenous drip, which delivers vitamin E systemically rather than to the skin surface.`,
      },
      {
        finding: `Narrative review of vitamin E roles in skin`,
        summary: `A dermatology review summarizes vitamin E's antioxidant and free-radical-scavenging properties in skin and notes that, despite experimental photoprotective and antitumorigenic activity, controlled clinical evidence for defined dosing and indications is sparse.`,
        source: `Indian Dermatol Online J review (PMC), 2016`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC4976416/`,
        context: `Narrative review, not an RCT; describes mechanisms but does not establish that IV vitamin E protects skin cells in healthy people.`,
      },
    ],
  },
  'b-complex': {
    level: 'limited',
    note: `Essential cofactors in energy metabolism; trials are small and oral, with no IV evidence in replete people.`,
    studies: [
      {
        finding: `Oral B-complex reduced exercise fatigue markers in healthy adults`,
        summary: `In a randomized, double-blind crossover trial of 32 healthy non-athletes (aged 20-30), 28 days of an ORAL vitamin B complex supplement was associated with longer running time to exhaustion and lower blood lactate and ammonia during and after exercise. This is consistent with B vitamins' established cofactor role in energy metabolism and does not demonstrate an energy 'boost' in already-replete people.`,
        source: `Int J Med Sci, 2023; randomized double-blind crossover trial`,
        url: `https://pubmed.ncbi.nlm.nih.gov/37786445/`,
        context: `Directly on B-complex and exercise fatigue, but the route was ORAL (a commercial oral formulation), not IV, and subjects were healthy young adults; it does not show that an IV drip works in non-deficient people or improves subjective energy.`,
      },
      {
        finding: `Oral high-dose B multivitamin linked to brain metabolite and oxidative-stress markers`,
        summary: `A randomized, double-blind, placebo-controlled trial in 32 healthy adults (aged 30-65) found that high-dose ORAL B-group vitamins raised vitamin B6 and B12 and lowered homocysteine, and identified correlations between B-vitamin levels and brain metabolites measured by MRS. The authors described this as preliminary evidence that B vitamins may support oxidative metabolism; the key brain metabolite (NAA) increase was not statistically significant, and no change in felt energy was measured.`,
        source: `Nutrients, 2018; randomized, double-blind, placebo-controlled trial`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC6316433/`,
        context: `Suggests a plausible metabolic mechanism, but dosing was ORAL and the brain findings were largely correlational and preliminary; provides no evidence specific to intravenous administration or to subjective energy in healthy individuals.`,
      },
    ],
  },
  'b12': {
    level: 'limited',
    note: `Vital for nerve and blood health when low; supplementation shows little benefit in people who are not deficient.`,
    studies: [
      {
        finding: `B12 supplementation showed no benefit for cognition/mood without deficiency`,
        summary: `Systematic review, meta-analysis and meta-regression of 16 RCTs (6,276 participants) of vitamin B12, largely oral and often with folic acid/B6, in people without overt B12 deficiency or advanced neurological disease. It found no effect on cognitive function or depressive symptoms, and only one included trial reported idiopathic fatigue, so fatigue could not be pooled. The authors concluded supplementation is likely ineffective for these outcomes in non-deficient people.`,
        source: `Nutrients, 2021 (systematic review, meta-analysis and meta-regression)`,
        url: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8000524/`,
        context: `Tempers the energy/mood claim: in non-deficient people (as most IV wellness clients are) B12 may not support cognition or mood, fatigue evidence was too sparse to assess, and the trials used oral, not IV, dosing.`,
      },
      {
        finding: `Oral methylcobalamin improved several neuropathy measures in type 2 diabetes`,
        summary: `One-year double-blind, placebo-controlled RCT in 90 patients with type 2 diabetes (on long-term metformin, B12 below 400 pmol/L) and peripheral and autonomic neuropathy, given oral methylcobalamin 1000 mcg/day or placebo. The active group showed improvement in several nerve-conduction parameters, sudomotor function, pain score and quality of life, though cardiovascular autonomic reflex tests and one neuropathy exam score did not improve.`,
        source: `Nutrients, 2021 (randomized double-blind placebo-controlled trial)`,
        url: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7912007/`,
        context: `Supports a nerve-related role only in metformin-treated diabetic patients with borderline B12 and existing neuropathy, using oral rather than IV dosing; it does not show benefit for nerve health in healthy people or via an IV drip.`,
      },
    ],
  },
  'b6': {
    level: 'limited',
    note: `Defined roles in metabolism and mood; the mood evidence is oral and modest, with no IV data.`,
    studies: [
      {
        finding: `High-dose oral B6 reduced self-reported anxiety`,
        summary: `A randomized, double-blind, placebo-controlled trial in roughly 478 healthy young adults found that one month of high-dose oral vitamin B6 (100 mg/day, about 50x the RDA) may modestly reduce self-reported anxiety, with a non-significant trend toward lower depression, consistent with B6's role as a cofactor in GABA synthesis. This may support mood but does not test an IV route.`,
        source: `Human Psychopharmacology: Clinical and Experimental, 2022 (RCT)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC9787829/`,
        context: `Directly on mood but oral, high-dose, and short-term in healthy young adults; the anxiety effect was modest and the depression effect only a trend, and it does not evaluate IV administration, so it offers only indirect support for an IV wellness drip.`,
      },
      {
        finding: `Magnesium plus B6 eased stress in low-magnesium adults`,
        summary: `A post-hoc analysis of a randomized controlled trial reported that oral magnesium (300 mg/day) combined with vitamin B6 (30 mg/day) may improve perceived stress and quality of life more than magnesium alone in stressed, otherwise healthy adults with low magnesium levels. B6 was given only in combination, so its independent contribution to mood cannot be isolated.`,
        source: `Stress and Health, 2021 (post-hoc analysis of an RCT)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC9292249/`,
        context: `Oral combination product in people with low magnesium, not B6 alone and not IV; applicability to a B6 IV drip in already-replete healthy clients is weak.`,
      },
      {
        finding: `B6 is a cofactor across metabolism; deficiency alters metabolic pathways`,
        summary: `A controlled dietary study in 23 healthy adults showed that 28 days of marginal vitamin B6 restriction produced measurable changes in amino acid and related metabolic pathways, underscoring B6's role (as pyridoxal 5'-phosphate) as a cofactor in a wide range of enzymatic reactions. This reflects the effect of inducing deficiency, not a metabolic benefit of extra B6 in people who are already replete.`,
        source: `PLOS One, 2013 (controlled dietary restriction study)`,
        url: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3679127/`,
        context: `Establishes that B6 is needed for normal metabolism, but the effect is about avoiding deficiency; it does not show that IV B6 enhances metabolism in people who already have adequate levels.`,
      },
    ],
  },
  'thiamine': {
    level: 'limited',
    note: `Essential for energy and nerves, but trials are in deficient or critically ill patients, not healthy people.`,
    studies: [
      {
        finding: `IV thiamine in critically ill patients: modest metabolic effects, no mortality benefit`,
        summary: `Systematic review and meta-analysis of randomized controlled trials (35 studies, ~3,494 patients) of intravenous thiamine in critically ill adults. Thiamine may be associated with a modest reduction in lactate and shorter shock duration, but showed little to no difference in mortality and a slight increase in ICU length of stay; overall certainty of evidence was low.`,
        source: `Systematic review & meta-analysis of RCTs, Clinical Nutrition / PubMed 2024`,
        url: `https://pubmed.ncbi.nlm.nih.gov/39307094/`,
        context: `Directly uses the IV route, but the population is critically ill patients, not healthy people seeking an energy or wellness drip, so it does not show a benefit in healthy adults.`,
      },
      {
        finding: `IV thiamine as metabolic resuscitator did not lower lactate overall in septic shock`,
        summary: `Randomized, double-blind, placebo-controlled pilot trial (88 patients) of intravenous thiamine in septic shock. There was no difference in the primary outcome of lactate at 24 hours between thiamine and placebo, with a possible signal only in a pre-specified thiamine-deficient subgroup.`,
        source: `Randomized double-blind placebo-controlled pilot RCT, Critical Care Medicine 2016 (PMC)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC4754670/`,
        context: `Tests the energy-metabolism (lactate) rationale via IV thiamine, but in septic shock patients; the mostly null result and the healthy-vs-critically-ill gap mean it does not support IV thiamine for energy in well people.`,
      },
      {
        finding: `Thiamine repletion may reverse deficiency-related neuropathy`,
        summary: `Prospective therapeutic-challenge study of 41 adults from an endemic area (polished-rice diet) describing thiamine deficiency-related peripheral neuropathy that improved with thiamine repletion, consistent with thiamine's role in nervous-system function when deficiency is present.`,
        source: `Prospective clinical study, European Journal of Neurology 2024 (PubMed)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/38018774/`,
        context: `Suggests a nervous-system benefit only in people who were thiamine-deficient; it does not show that supplementing already-replete, healthy people supports the nervous system, and it is not an IV-drip study.`,
      },
    ],
  },
  'folic-acid': {
    level: 'established',
    note: `Strongly established for oral supplementation before and during early pregnancy; not an IV wellness claim.`,
    studies: [
      {
        finding: `Folic acid may reduce first-occurrence neural tube defects`,
        summary: `This limited systematic review update for the U.S. Preventive Services Task Force found continued evidence that periconceptional ORAL folic acid supplementation may reduce the risk of neural tube defects in people who are pregnant or planning pregnancy, with no evidence of harm. The update drew mainly on observational cohort and case-control studies alongside earlier trial evidence; the route studied was oral and the population was people capable of pregnancy.`,
        source: `Agency for Healthcare Research and Quality / USPSTF limited systematic review update (NCBI Bookshelf)`,
        url: `https://www.ncbi.nlm.nih.gov/books/NBK593614/`,
        context: `Supports folic acid's role in healthy fetal neural development, but the evidence is for oral supplementation around pregnancy, not IV drips in healthy non-pregnant adults.`,
      },
      {
        finding: `Umbrella review supports NTD prevention`,
        summary: `An umbrella review of 10 systematic reviews and meta-analyses (about 296,816 participants) reported that preconception folic acid supplementation was associated with a markedly lower risk of neural tube defects (folic-acid pooled effect approximately 0.23; roughly a 57% overall reduction). Dosing was mostly oral and preconceptional in women of reproductive age.`,
        source: `Umbrella review of systematic reviews and meta-analyses, Neuroepidemiology (Karger), 2024`,
        url: `https://pubmed.ncbi.nlm.nih.gov/39074459/`,
        context: `Robust evidence for the developmental-support claim, but it reflects oral periconceptional dosing in women of reproductive age, not general IV wellness use in healthy people.`,
      },
      {
        finding: `Analysis shows reduced NTD recurrence`,
        summary: `A 2007 analysis of randomized folic acid trials reported roughly a 69% reduction (intention-to-treat) and up to an 87% reduction (among women taking supplements before pregnancy) in recurrent neural tube defects with periconceptional oral supplementation, consistent with folate's role in cell division during early development.`,
        source: `Grosse & Collins, Birth Defects Research Part A, 2007 (analysis of randomized trials)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/17990333/`,
        context: `Strong evidence, but limited to oral supplementation in a high-risk pregnancy population; it does not evaluate IV folic acid or any benefit in healthy people seeking wellness infusions.`,
      },
    ],
  },
  'biotin': {
    level: 'limited',
    note: `An essential vitamin, but hair and nail benefits beyond deficiency rest on small, uncontrolled studies.`,
    studies: [
      {
        finding: `Oral biotin improved brittle nails in an uncontrolled series`,
        summary: `In a small retrospective, uncontrolled case series of patients with brittle nails, daily oral biotin was associated with subjective clinical improvement in roughly two-thirds (about 63%) of those who took it. There was no placebo control, the sample was small, and outcomes were self-reported, so this may at most suggest a possible benefit.`,
        source: `Cutis, 1993 (retrospective uncontrolled case series)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/8477615/`,
        context: `Oral, not IV, and limited to people with pre-existing brittle nails; it provides no evidence that IV biotin benefits nails in healthy people. A frequently cited ~25% nail-thickness increase comes from a separate referenced study, not this one.`,
      },
      {
        finding: `Review finds weak evidence for biotin in nail disease`,
        summary: `A narrative review of biotin for nail disease found the supporting literature to be small and largely uncontrolled, noting some improvement reported with oral biotin but concluding that larger controlled trials are needed before any benefit for nails can be considered established.`,
        source: `Journal of Dermatological Treatment, 2018 (narrative review)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/29057689/`,
        context: `Evaluates oral supplementation only; there is no IV data, and the review itself calls the overall evidence base weak and in need of controlled trials.`,
      },
      {
        finding: `Biotin for hair loss lacks quality evidence outside deficiency`,
        summary: `A systematic review of oral biotin for hair loss identified only three qualifying studies; the highest-quality, double-blind placebo-controlled study showed no difference between biotin and placebo for hair growth, and the review concluded that high-quality evidence does not demonstrate a clear hair benefit in people who are not biotin-deficient.`,
        source: `Journal of Clinical and Aesthetic Dermatology (JCAD), 2024 (systematic review)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/39148962/`,
        context: `Concerns oral biotin in generally non-deficient people; there is no evidence that IV biotin improves hair in healthy individuals.`,
      },
    ],
  },
  'b3-niacinamide': {
    level: 'limited',
    note: `Skin evidence is real but oral or topical in higher-risk patients; there is no IV data in healthy people.`,
    studies: [
      {
        finding: `Oral nicotinamide cut new nonmelanoma skin cancers`,
        summary: `In the ONTRAC phase 3 randomized controlled trial (386 immunocompetent adults with at least two nonmelanoma skin cancers in the prior 5 years), oral nicotinamide 500 mg twice daily for 12 months was associated with a 23% lower rate of new nonmelanoma skin cancers versus placebo, with no benefit seen after the drug was stopped. The route was oral, not IV.`,
        source: `N Engl J Med, 2015 (Phase 3 RCT)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/26488693/`,
        context: `Relevant to skin, but it tested oral dosing in higher-risk patients with prior skin cancers, not IV infusion in healthy wellness clients; it does not show that an IV drip provides this benefit.`,
      },
      {
        finding: `Oral nicotinamide lowered transepidermal water loss`,
        summary: `A randomized controlled trial (British Journal of Dermatology, 2016) reported that oral nicotinamide 500 mg twice daily produced a modest relative reduction in transepidermal water loss (about 5-6% on the forehead over 12 months), which the authors interpret as a possible skin-barrier benefit. Administration was oral, not intravenous.`,
        source: `Br J Dermatol, 2016 (RCT)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/27062605/`,
        context: `May support a small skin-barrier effect, but the finding is from oral supplementation and cannot be assumed to transfer to an IV route or to healthy people.`,
      },
      {
        finding: `Review of niacinamide mechanisms and skin evidence`,
        summary: `A 2021 review (Antioxidants) summarizes clinical evidence that niacinamide, mainly applied topically or taken orally, may help with skin aging and pigmentation via its role as an NAD+ precursor, while noting no confirmed specific molecular target. It is a narrative review, not a controlled trial.`,
        source: `Review article, Antioxidants (MDPI), PMC 2021`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC8389214/`,
        context: `Useful background linking B3 to skin and NAD-dependent metabolism, but it is not IV-specific and provides no direct evidence that IV niacinamide boosts energy or skin outcomes in healthy individuals.`,
      },
    ],
  },
  'b5-panthenol': {
    level: 'limited',
    note: `Skin and metabolic roles are established biochemically; human evidence is oral, topical, or mechanistic only.`,
    studies: [
      {
        finding: `Oral pantothenic acid may reduce acne lesion counts`,
        summary: `A 12-week randomized, double-blind, placebo-controlled trial in healthy adults with mild-to-moderate facial acne reported that an oral pantothenic acid-based dietary supplement reduced total facial lesion count versus placebo, with a significant reduction in inflammatory lesions. Route was oral, not IV.`,
        source: `Dermatol Ther (Heidelb), 2014 (RCT)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/24831048/`,
        context: `Directly about skin, but it studied an oral supplement in people with active acne, not IV panthenol in healthy people, so it does not establish that an IV drip supports skin.`,
      },
      {
        finding: `Topical panthenol mask may aid skin barrier recovery after laser`,
        summary: `A double-blind randomized controlled study of a panthenol-enriched mask (also containing centella asiatica/madecassoside and bisabolol) after non-ablative fractional facial laser treatment reported significantly lower erythema and hyperpigmentation indices versus a saline dressing at days 3, 7, and 14. Route was topical.`,
        source: `J Cosmet Dermatol, 2025, PMC12232337 (RCT)`,
        url: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12232337/`,
        context: `Supports a topical skin-barrier role, but the product was multi-ingredient and applied to the skin, not infused, and it says nothing about IV panthenol in healthy people.`,
      },
      {
        finding: `Vitamin B5 is a component of coenzyme A central to metabolism`,
        summary: `This reference article summarizes that pantothenic acid is required to form coenzyme A, which is needed for metabolism of fatty acids, carbohydrates, proteins, and hormones, and notes that supplementation is primarily relevant to correcting deficiency, which is rare. It is a narrative reference, not an outcomes trial.`,
        source: `StatPearls, NCBI Bookshelf (review/reference)`,
        url: `https://www.ncbi.nlm.nih.gov/books/NBK563233/`,
        context: `Describes the well-established biochemical role of B5 in metabolism, but this is mechanism and deficiency background and does not show that IV B5 improves metabolism in already-replete healthy people.`,
      },
    ],
  },
  'magnesium': {
    level: 'limited',
    note: `Important for muscle and nerve function, but trials for cramps and recovery are mixed to negative, including IV.`,
    studies: [
      {
        finding: `Little evidence magnesium prevents skeletal muscle cramps`,
        summary: `This Cochrane systematic review pooled randomized trials of magnesium (oral and intravenous) for skeletal muscle cramps, largely in older adults but also including pregnancy-associated cramps. It concluded that magnesium is unlikely to provide clinically meaningful prevention of idiopathic cramps (moderate-certainty evidence), while evidence in pregnancy was low-certainty and conflicting.`,
        source: `Cochrane Database of Systematic Reviews, 2020 (Garrison SR et al.; CD009402.pub3)`,
        url: `https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD009402.pub3/full`,
        context: `Directly relevant and high quality, but it examines cramp prevention (not general muscle 'recovery'), and its overall finding is that magnesium is unlikely to help. It does not support IV magnesium for muscle wellness in healthy people.`,
      },
      {
        finding: `IV magnesium infusion did not reduce rest leg cramps`,
        summary: `A double-blind, placebo-controlled randomized trial gave 46 community-dwelling older adults 5 consecutive days of intravenous magnesium sulfate (20 mmol/5 g) versus placebo. Intravenous magnesium did not reduce the frequency of rest (nocturnal) leg cramps, regardless of how much infused magnesium was retained.`,
        source: `The Journals of Gerontology: Series A, 2011 (PMID 21289017)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/21289017/`,
        context: `One of the few trials using the IV route specifically, but it was in older adults with cramps and found no benefit, so it does not support an IV muscle-recovery claim in healthy individuals. (Note: the journal was corrected from an earlier mislabel of 'Medical Journal of Australia'.)`,
      },
      {
        finding: `IV magnesium may improve post-surgical quality of recovery`,
        summary: `A meta-analysis of 7 randomized controlled trials (622 patients) found that perioperative intravenous magnesium sulfate may improve patients' subjective postoperative quality-of-recovery scores on day 1 after surgery under general anesthesia, with associated reductions in opioid use and postoperative nausea/vomiting.`,
        source: `Nutrients, 2024 (meta-analysis of RCTs; PMID 39064818; PMC11280250)`,
        url: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11280250/`,
        context: `Uses the IV route and shows a recovery benefit, but the population is surgical patients under anesthesia; it may not generalize to muscle recovery in healthy people receiving elective IV wellness drips.`,
      },
    ],
  },
  'zinc': {
    level: 'limited',
    note: `May shorten colds and aid wound healing (oral or topical); no IV evidence in healthy, zinc-replete people.`,
    studies: [
      {
        finding: `Oral zinc may shorten common cold duration`,
        summary: `A 2024 Cochrane systematic review of randomized trials in mostly healthy adults and children found that oral (lozenge or syrup) zinc taken as treatment may reduce the duration of common cold symptoms, but confidence in this finding was low and effects on prevention were uncertain. All included trials used oral, not intravenous, zinc.`,
        source: `Cochrane Database of Systematic Reviews, 2024 (CD014914.pub2)`,
        url: `https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.cd014914.pub2/full`,
        context: `Points to a possible immune-related role of oral zinc in the general population; it does not test intravenous zinc, and it does not show benefit in already zinc-replete healthy people.`,
      },
      {
        finding: `Zinc may support wound and ulcer healing`,
        summary: `A 2025 systematic review and meta-analysis of five clinical trials found that zinc treatment may be associated with improved ulcer healing at the final endpoint, with GRADE-rated moderate-quality evidence tempered by study limitations. Trials used oral or topical zinc in patients with existing wounds, not intravenous infusion.`,
        source: `Systematic review and meta-analysis, BMJ Nutrition, Prevention & Health, 2025 (PMID 40771531)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/40771531/`,
        context: `Relevant to skin-repair claims but studied in patients with existing wounds using oral or topical routes; there are no data here on intravenous zinc or on skin repair in healthy people.`,
      },
    ],
  },
  'calcium': {
    level: 'limited',
    note: `Well-defined for bone, but supplement trials show small, oral, vitamin-D-dependent effects, not IV.`,
    studies: [
      {
        finding: `Oral calcium produces only small, non-progressive gains in bone density`,
        summary: `Systematic review and meta-analysis of randomized controlled trials in adults over 50 found that increasing calcium intake via diet or oral supplements raised bone mineral density by roughly 0.6-1.8% over 1-5 years, an effect the authors judged unlikely to meaningfully reduce fracture risk. All data were oral intake; no IV route was studied.`,
        source: `BMJ systematic review and meta-analysis, 2015`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC4784773/`,
        context: `Directly relevant to the bone claim but tests oral calcium in older adults; it does not support an IV drip in healthy people, and even for oral use the bone-density effect is small and does not progress over time.`,
      },
      {
        finding: `Oral calcium plus vitamin D may modestly lower fracture risk in older adults`,
        summary: `Updated National Osteoporosis Foundation meta-analysis of randomized controlled trials reported that oral calcium combined with vitamin D was associated with roughly a 15% reduction in total fractures and a 30% reduction in hip fractures, mainly in middle-aged to older adults. The benefit was for the oral calcium-plus-vitamin-D combination, not calcium alone and not by IV.`,
        source: `Osteoporosis International meta-analysis (NOF), 2016`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC4715837/`,
        context: `May support bone health only for oral calcium co-administered with vitamin D in older or at-risk people; it cannot be read as evidence that IV calcium benefits bones or muscle in healthy clients.`,
      },
      {
        finding: `Muscle/strength benefits in trials track vitamin D repletion, not calcium alone`,
        summary: `Randomized controlled trial in vitamin D-deficient adults found that six months of oral cholecalciferol plus calcium was associated with improved skeletal muscle strength and physical performance. Because both nutrients were given together, calcium could not be isolated as the active agent, and the authors framed the improvement around correcting vitamin D deficiency.`,
        source: `Clinical Endocrinology (Oxford) RCT, 2010`,
        url: `https://pubmed.ncbi.nlm.nih.gov/20455886/`,
        context: `Weak support for the muscle claim: benefit tracks vitamin D repletion in deficient people, uses the oral route, and does not show that IV calcium improves muscle function in healthy individuals.`,
      },
    ],
  },
  'glutathione': {
    level: 'limited',
    note: `The antioxidant role is recognised, but skin-tone evidence is low-quality oral/topical and IV use is not supported.`,
    studies: [
      {
        finding: `Oral glutathione may modestly lighten sun-exposed skin in some people`,
        summary: `A 2020 review appraised three RCTs of systemic (oral) glutathione in adults: one trial did not support a skin-whitening effect, while two showed a reduced skin melanin index only in certain body areas or age groups. Oral preparations were reported as well tolerated but parenteral (injected) forms were not, and overall evidence quality was low. No RCT evidence supported the intravenous route.`,
        source: `Dermatology Research and Practice / review, PMC (2020)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC7196133/`,
        context: `Relevant to the antioxidant/skin-tone claim, but it appraises oral (systemic) glutathione in mostly healthy adults and explicitly does not support the IV drip our clinic offers.`,
      },
      {
        finding: `Combined oral + topical glutathione lowered melanin index vs placebo`,
        summary: `A double-blind randomized controlled trial in healthy adults found that combined oral (500 mg/day) plus topical glutathione produced a significantly lower melanin index than placebo, suggesting the combination may support a lighter, more even skin tone. Intravenous administration was not tested.`,
        source: `Double-blind RCT, PubMed (2021)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/33871071/`,
        context: `An actual RCT for the skin-tone benefit, but in healthy volunteers using oral plus topical dosing, so it does not demonstrate that an IV glutathione drip produces the same effect.`,
      },
      {
        finding: `IV glutathione for skin lightening lacks efficacy and adequate safety data`,
        summary: `A 2016 commentary titled 'Intravenous glutathione for skin lightening: inadequate safety data' noted there are no published studies of intravenous glutathione for skin lightening and that long-term safety data are lacking. It called for regulatory assessment of systemic/IV glutathione used cosmetically to protect consumers from potential harms of IV infusions.`,
        source: `Commentary/letter, PubMed (2016)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/27499402/`,
        context: `Highly relevant honesty check: it specifically addresses the IV route used in wellness settings and finds the evidence inadequate rather than supportive.`,
      },
    ],
  },
  'nad': {
    level: 'limited',
    note: `Central to cellular energy in biology, but human clinical benefits so far are limited and inconsistent.`,
    studies: [
      {
        finding: `IV NAD+ RCT in ischemic heart failure patients`,
        summary: `A randomized, placebo-controlled trial gave intravenous NAD+ to patients with heart failure from ischemic cardiomyopathy. The NAD+ group showed a greater improvement in cardiac function (left-ventricular ejection fraction) at 1 month, along with changes in oxidative-stress and sirtuin markers, though some secondary endpoints (such as NT-proBNP) did not reach statistical significance. This suggests IV NAD+ may support cardiac and cellular pathways in a sick cardiac population, and does not demonstrate an energy benefit in healthy adults.`,
        source: `Am J Cardiovasc Drugs (randomized placebo-controlled trial), 2025`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC12779688/`,
        context: `Directly uses the IV route, but the population is heart-failure patients and some endpoints were not statistically significant, so it does not show an energy benefit in otherwise healthy people getting a wellness drip.`,
      },
      {
        finding: `Oral NAD+ precursor (NR) raises NAD+ but limited functional effect`,
        summary: `A 2x6-week randomized, double-blind, placebo-controlled crossover trial found the oral NAD+ precursor nicotinamide riboside (500 mg twice daily) was well tolerated and raised NAD+ levels in healthy middle-aged and older adults. Broader reviews note precursors reliably raise NAD+ yet show limited or inconsistent effect on energy expenditure or exercise capacity.`,
        source: `Nature Communications (randomized double-blind placebo-controlled crossover), 2018`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC5876407/`,
        context: `This is an ORAL precursor, not IV NAD+; raising blood NAD+ is documented but a clear energy or performance benefit is not, so it cannot prove an IV drip 'works'.`,
      },
      {
        finding: `Review: limited clinical efficacy of NAD+ boosting in humans`,
        summary: `A review of NAD+ precursor supplementation in human ageing concludes that despite strong preclinical rationale, precursors reliably raise NAD+ levels but human trials have shown limited and inconsistent clinical efficacy across outcomes such as insulin sensitivity, energy expenditure, and exercise capacity.`,
        source: `Nature Metabolism review, 2025`,
        url: `https://pubmed.ncbi.nlm.nih.gov/41083806/`,
        context: `Honest overview showing NAD+'s energy-metabolism role is established biochemically, but proven clinical energy benefits in people (oral or IV) remain weak and inconclusive.`,
      },
    ],
  },
  'amino-blend': {
    level: 'limited',
    note: `Oral BCAAs may ease exercise soreness under specific conditions; an IV or at-rest wellness benefit is unproven.`,
    studies: [
      {
        finding: `BCAA supplementation may reduce muscle soreness and damage markers`,
        summary: `Systematic review and meta-analysis of RCTs in mostly healthy, active adults found oral branched-chain amino acid supplementation may attenuate post-exercise muscle soreness (DOMS) and some muscle-damage biomarkers such as creatine kinase, though the size and timing of effects varied across studies.`,
        source: `Systematic review and meta-analysis with meta-regression, Sports Medicine - Open, 2024 (PMC)`,
        url: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11021390/`,
        context: `Evidence is for ORAL BCAAs, not IV amino acid drips; participants were healthy exercisers around exercise-induced muscle damage. The review does not test intravenous administration or any general 'recovery' benefit at rest.`,
      },
      {
        finding: `BCAA benefit on muscle damage is conditional, not guaranteed`,
        summary: `Systematic review concluded oral BCAA supplementation may help alleviate exercise-induced muscle damage only under specific conditions: damage of low-to-moderate extent, a high daily intake (over ~200 mg/kg/day) sustained for a prolonged period (over ~10 days), and dosing before the damaging exercise.`,
        source: `Systematic review, Nutrients 2017 (PMC/PubMed)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC5691664/`,
        context: `Oral supplementation over days-to-weeks, not a single IV infusion; underscores that any benefit is narrow and dependent on dose and timing, so IV wellness dosing cannot be assumed equivalent.`,
      },
      {
        finding: `Free amino acids raise blood levels but did not increase muscle protein synthesis more than protein`,
        summary: `Double-blind RCT in 24 healthy young adults found ingesting free amino acids produced faster absorption and greater postprandial plasma amino acid availability than an equivalent amount of intact milk protein, yet muscle protein synthesis rates were no higher than with intact protein.`,
        source: `Double-blind randomized trial, J Nutr 2022 (PMC)`,
        url: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8754581/`,
        context: `Tests oral free amino acids, not IV; relevant because it shows that raising blood amino acid levels (the main thing an IV drip achieves) did not translate into greater muscle building in healthy young adults.`,
      },
    ],
  },
  'l-carnitine': {
    level: 'limited',
    note: `A known role in fat metabolism, but weight and performance effects are modest, oral, and inconsistent.`,
    studies: [
      {
        finding: `Oral L-carnitine modestly reduced body weight and fat mass`,
        summary: `A 2020 systematic review and meta-analysis of 37 randomized controlled trials (2,292 participants, mostly adults with overweight or obesity) found oral L-carnitine supplementation was associated with modest reductions in body weight (about 1.2 kg), BMI, and fat mass. All trials used oral dosing, not IV, and the effect was most evident in people with overweight or obesity.`,
        source: `Clinical Nutrition ESPEN, 2020 systematic review and meta-analysis of 37 RCTs`,
        url: `https://pubmed.ncbi.nlm.nih.gov/32359762/`,
        context: `Oral, not IV, and conducted mainly in people with overweight/obesity; it does not establish that an IV drip enhances fat-for-energy use in otherwise healthy people.`,
      },
      {
        finding: `L-carnitine may reduce waist circumference and systolic blood pressure`,
        summary: `A systematic review and meta-analysis of RCTs (oral L-carnitine, roughly 0.75-3 g/day for 8-24 weeks) found supplementation was associated with modest reductions in waist circumference and systolic blood pressure. It reported no significant effect on fasting blood glucose, triglycerides, or HDL cholesterol. Populations were largely those with metabolic risk, using oral supplementation.`,
        source: `Systematic review and meta-analysis of RCTs, PMC 2020`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC7551203/`,
        context: `Evidence is oral and in metabolic-syndrome populations, and benefits were limited to waist circumference and systolic blood pressure rather than glucose or lipids; relevance to IV wellness in otherwise healthy people is indirect and unproven.`,
      },
      {
        finding: `Exercise fat-oxidation benefit is proposed but inconsistent`,
        summary: `A 2021 systematic review of acute and chronic oral L-carnitine supplementation for exercise performance notes that, because carnitine availability can limit fatty-acid oxidation during exercise, supplementation has been proposed to support fat use for energy. Prolonged high-dose oral dosing may increase muscle carnitine and fat oxidation during low-intensity exercise, but results across studies are mixed and intensity-dependent.`,
        source: `Systematic review, Nutrients (MDPI) / PMC 2021`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC8704793/`,
        context: `Oral supplementation in exercising adults with inconsistent findings; provides no direct evidence for IV administration or for healthy people at rest.`,
      },
    ],
  },
  'mic-lipotropic': {
    level: 'limited',
    note: `Individual components show oral effects on blood lipids in patients; injectable MIC for fat loss is unproven.`,
    studies: [
      {
        finding: `Oral inositol improved lipid profiles in metabolic patients`,
        summary: `A 2018 systematic review and meta-analysis of 14 RCTs found that oral inositol supplementation significantly lowered triglycerides, total cholesterol and LDL-cholesterol in patients with metabolic diseases (no effect on HDL). It measured blood lipids, not body-fat loss.`,
        source: `Lipids in Health and Disease / PMC, 2018 (systematic review & meta-analysis of RCTs)`,
        url: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5968598/`,
        context: `Only one of three MIC components (inositol), taken orally in people with existing metabolic disease; it may support healthier blood lipids in that group but does not test injectable MIC or fat loss in healthy clients.`,
      },
      {
        finding: `Oral choline aided liver fat markers in NAFLD patients`,
        summary: `A 2025 randomized controlled trial gave oral phosphatidylcholine (2400 mg/day for 12 weeks) to patients with non-alcoholic fatty liver disease and reported favourable changes in hepatic steatosis, liver stiffness, oxidative stress markers and triglycerides versus controls. The population was a liver-disease group, not healthy adults.`,
        source: `Therapeutic Advances in Chronic Disease / PubMed, 2025 (randomized controlled trial)`,
        url: `https://pubmed.ncbi.nlm.nih.gov/40838115/`,
        context: `Choline (one MIC component) given orally to NAFLD patients; relevant to choline's role in liver fat handling, but it does not establish that an IV MIC drip reduces body fat in healthy people.`,
      },
      {
        finding: `Oral inositol plus alpha-lipoic acid improved metabolic markers`,
        summary: `A 6-month randomized placebo-controlled trial in 155 postmenopausal women with metabolic syndrome found that oral inositol combined with alpha-lipoic acid was associated with a greater than 20% reduction in insulin resistance (HOMA-IR) in about two-thirds of the supplement group and lower triglycerides in a subset, compared with placebo.`,
        source: `Trials / PMC, 2013 (randomized placebo-controlled trial)`,
        url: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3765513/`,
        context: `Tests inositol combined with a different compound (alpha-lipoic acid), taken orally in women with metabolic syndrome; it may support metabolic markers but is not the injectable MIC blend and does not measure body-fat loss.`,
      },
    ],
  },
  'iron-sucrose': {
    level: 'established',
    note: `Strong clinical evidence for treating diagnosed iron deficiency; it is not a wellness drip for replete people.`,
    studies: [
      {
        finding: `IV iron outperforms oral iron across multiple conditions`,
        summary: `Systematic review and meta-analysis of 31 studies in patients with iron deficiency anemia found IV iron produced significantly greater hemoglobin increases than oral iron in CKD, IBD, cancer-related and general IDA, with fewer GI adverse events; no significant difference was seen for postoperative anemia or restless legs syndrome. Applies to diagnosed deficiency, not general supplementation.`,
        source: `Systematic review and meta-analysis (PMC), 2024`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC12635910/`,
        context: `Population is people with diagnosed iron deficiency anemia, which matches the 'supplements are not enough' framing; it does not speak to IV iron in healthy people without deficiency.`,
      },
      {
        finding: `IV iron sucrose raised hemoglobin more than oral iron in pregnancy`,
        summary: `RCT in pregnant women (14-34 weeks) with iron deficiency anemia (Hb 70-110 g/L, ferritin <15) found IV iron sucrose produced a larger hemoglobin rise at 4 weeks than oral ferrous fumarate (22 vs 12 g/L, p<0.0001), with a greater rise in serum ferritin. May support IV iron use when oral iron is inadequate or not tolerated.`,
        source: `Randomized controlled trial, BMC Pregnancy and Childbirth (PMC), 2017`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC5422878/`,
        context: `Specific to anemic pregnant patients with confirmed deficiency; results should not be generalized to non-deficient adults seeking a wellness drip.`,
      },
      {
        finding: `IV iron gives modestly greater hemoglobin gain than oral iron in CKD`,
        summary: `Updated systematic review and meta-analysis (Shepshelovich et al.) in chronic kidney disease found IV iron achieved a modestly higher hemoglobin than oral iron (weighted mean difference ~0.31 g/dL in non-dialysis CKD and ~0.83 g/dL in dialysis patients), with no significant difference in mortality or serious adverse events. May support IV use where oral iron is insufficient in iron-deficient CKD.`,
        source: `Systematic review and meta-analysis, American Journal of Kidney Diseases (AJKD)/PubMed, 2016`,
        url: `https://pubmed.ncbi.nlm.nih.gov/27321965/`,
        context: `Studied CKD patients with deficiency; establishes benefit only where a true iron deficit exists, not for otherwise iron-replete individuals.`,
      },
    ],
  },
};

export const ingredientEvidence = (slug: string): Evidence =>
  evidenceData[slug] ?? {
    level: 'limited',
    note: 'An essential nutrient with well-defined physiological roles; direct IV evidence in healthy people may be limited.',
    studies: [],
  };
