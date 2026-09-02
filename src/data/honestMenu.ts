// ─────────────────────────────────────────────────────────────────────────
// The Honest Menu. Each item pairs a typical drip-bar overclaim (shown struck
// through) with what we actually say. The rewrites are CPSO-safe: soft "may
// support" / "supports normal ___ function" language, no guaranteed outcomes,
// "results vary", screen-first, and honesty about developing evidence.
// Three are shown at random per visit. `hype` is stored without quote marks;
// the UI adds the curly quotes.
// ─────────────────────────────────────────────────────────────────────────

export interface HonestItem {
  hype: string;
  truth: string;
}

export const honestMenu: HonestItem[] = [
  {
    hype: 'Wipes out your fatigue.',
    truth:
      'B vitamins support normal energy-yielding metabolism. And if you are always tired, we look for the reason first — starting with your iron.',
  },
  {
    hype: 'Cleanses and slims you down.',
    truth:
      'Metabolic support happens inside a physician-guided program, with real screening and follow-up. No shortcuts — and we say so.',
  },
  {
    hype: 'Never catch another cold.',
    truth:
      'Vitamin C supports normal immune function. That is what the evidence supports, so that is exactly what we say.',
  },
  {
    hype: 'Instant hangover fix.',
    truth:
      'Fluids and electrolytes can help you feel more comfortable while your body recovers. Time is still what a hangover needs, and we will tell you that.',
  },
  {
    hype: 'Flush the toxins from your body.',
    truth:
      'Your liver and kidneys already do that. A drip can support hydration and specific nutrients — it does not cleanse you of "toxins," and we will not pretend otherwise.',
  },
  {
    hype: 'Glow up with our beauty drip.',
    truth:
      'Ingredients like vitamin C and glutathione support normal skin and antioxidant function. Skin has many inputs; a drip is one, and results vary.',
  },
  {
    hype: 'Fire up your metabolism instantly.',
    truth:
      'There is no instant switch. A physician-guided program looks at the whole picture — labs, habits, and follow-up — because that is what actually helps.',
  },
  {
    hype: 'Beat your cold in an hour.',
    truth:
      'Nothing clears a cold in an hour. Hydration and vitamin C may support how you feel and your normal immune function while it runs its course.',
  },
  {
    hype: 'Turn back the clock from the inside.',
    truth:
      'No drip turns back the clock. Nutrients like NAD+ are studied for cellular-energy and healthy-aging support; the evidence is still developing, and we label it that way.',
  },
  {
    hype: 'All the energy you want, today.',
    truth:
      'We do not guarantee outcomes. If your energy is low, B vitamins support normal energy metabolism — and a lab may find a cause worth treating.',
  },
  {
    hype: 'Slim down while you relax.',
    truth:
      'Nothing burns fat in a chair. Compounds like MIC are offered only inside a physician-led metabolic program, alongside real lifestyle change.',
  },
  {
    hype: 'More is always better.',
    truth:
      'More is not better, and can be unsafe. We dose to what is appropriate for you, after screening — clinical, not maximal.',
  },
  {
    hype: 'IV drips beat real food.',
    truth:
      'Food and a healthy gut come first. IV nutrients bypass the gut, which helps in specific situations — not as a replacement for eating well.',
  },
  {
    hype: 'Everyone needs a weekly drip.',
    truth:
      'Most people do not. We screen first, and we will tell you if a treatment is not right or simply not needed for you.',
  },
  {
    hype: 'Our secret proprietary blend.',
    truth:
      'No secrets. You get the exact ingredients and amounts, why each one is included, and what it can and cannot do.',
  },
  {
    hype: 'Prevent illness before it starts.',
    truth:
      'We cannot promise you will not get sick. Supporting normal immune function is honest; preventing disease is not a claim we make.',
  },
  {
    hype: 'Look years younger by Friday.',
    truth:
      'No treatment does that. We speak in "aging well" and "subtle," and we are clear about what results to reasonably expect.',
  },
  {
    hype: 'Athlete recovery, supercharged.',
    truth:
      'Hydration and certain nutrients may support recovery. "Supercharged" is marketing; steady training, sleep, and food do the heavy lifting.',
  },
  {
    hype: 'Banish stress with one infusion.',
    truth:
      'Magnesium supports normal muscle and nervous-system function. It is supportive, not a treatment for anxiety — and we would rather say so.',
  },
  {
    hype: 'A fix for whatever ails you.',
    truth:
      'We do not sell fixes. We offer physician-reviewed, nurse-administered support, and we are honest about the limits.',
  },
];
