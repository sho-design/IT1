// The Journal: short, physician-minded education. Honest voice, soft claims.
// Body is simple HTML. Add a post by adding an entry; newest first.
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  author: string;
  body: string; // HTML
}

export const posts: Post[] = [
  {
    slug: 'what-a-myers-cocktail-actually-does',
    title: "What a Myers' cocktail actually does",
    excerpt:
      "The classic blend, explained plainly, what it is, what it may support, and where the evidence stands.",
    date: '2026-06-10',
    readingMinutes: 4,
    author: 'The Restoration Medical team',
    body: `
      <p>The &ldquo;Myers&rsquo; cocktail&rdquo; is one of the oldest IV wellness blends, a mix of B vitamins, vitamin C, magnesium, and calcium. We call ours the <strong>Healing</strong> drip. Here is what it is, and what it honestly can and cannot do.</p>
      <h2>What is in it</h2>
      <p>The combination is intentional: B vitamins support normal energy-yielding metabolism, vitamin C supports a normal immune response, and magnesium supports muscle and nervous-system function. Delivered by IV, these bypass the gut, which is the appeal for some people.</p>
      <h2>What it may support</h2>
      <p>People reach for it around busy seasons, travel, or feeling run down. The most defensible benefits are the well-established roles of the nutrients themselves, especially if you were running low. We are careful here: this is supportive wellness, not a treatment for a disease, and results vary.</p>
      <h2>Where the evidence stands</h2>
      <p>The individual nutrients are well studied; the specific IV blend, less so. That honesty is the point. We will tell you when the evidence is still developing, and we screen first, because even a gentle blend is not right for everyone.</p>
    `,
  },
  {
    slug: 'iron-or-just-tired',
    title: 'Tired, or low on iron?',
    excerpt:
      'Fatigue has many causes. Here is why iron is worth ruling in or out, and why a lab, not a drip, comes first.',
    date: '2026-06-03',
    readingMinutes: 3,
    author: 'The Restoration Medical team',
    body: `
      <p>Persistent tiredness is one of the most common reasons people come in. Sometimes the answer is simple support and rest. Sometimes it is iron, and that is worth taking seriously.</p>
      <h2>Why iron matters</h2>
      <p>Iron helps your body make healthy red blood cells and carry oxygen. When iron stores (ferritin) run low, fatigue, low mood, and reduced exercise tolerance can follow, sometimes before anaemia shows up.</p>
      <h2>Labs first, always</h2>
      <p>This is where we differ from a drip bar. Iron therapy is clinically indicated care, not a wellness add-on, and it is guided by recent bloodwork including ferritin and iron studies. We do not infuse iron on a hunch.</p>
      <h2>What to do</h2>
      <p>If you are persistently tired, talk to us or your physician about checking your iron. If it is low and oral iron has not worked or is not tolerated, intravenous iron may be an option, given with monitoring. If iron is not the issue, we will say so.</p>
    `,
  },
];

export const postBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);
