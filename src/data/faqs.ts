// FAQ content. Honest, on-brand voice: no guaranteed outcomes, careful language.
// Rendered on /faq and emitted as FAQPage structured data.
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'What is infusion (IV) therapy?',
    a: 'Infusion therapy delivers fluids, vitamins, and minerals directly into a vein through a small IV. It is used for wellness support and, where clinically indicated, for treatments like iron therapy. Every treatment here is reviewed by our physician and given by a registered nurse.',
  },
  {
    q: 'Does it hurt?',
    a: 'Most people feel a brief pinch when the IV is placed, then little else. Our nurses do this every day and work to keep you comfortable throughout.',
  },
  {
    q: 'How long does a drip take?',
    a: 'Most wellness drips take roughly 30 to 60 minutes. Some, like NAD+, are infused more slowly for comfort. Your nurse will give you a time estimate at your visit.',
  },
  {
    q: 'How often should I come?',
    a: 'It depends on you and your goals, and there is no one-size answer. We will suggest a sensible cadence after a consult, and we would rather you come less often than oversell a schedule.',
  },
  {
    q: 'Will I feel a difference?',
    a: 'Some people feel refreshed or hydrated the same day; others notice less. Benefits vary from person to person, and we are honest that wellness infusions are supportive, not a cure. We use careful, soft language for a reason.',
  },
  {
    q: 'Is it safe? Who should not have it?',
    a: 'We screen first, for your safety. Some situations, such as pregnancy, kidney or heart conditions, certain allergies, or G6PD deficiency, mean we adjust or decline a treatment. Tell us your history and medications, and we will plan accordingly. See our Safety & screening page.',
  },
  {
    q: 'Do I need bloodwork first?',
    a: 'Wellness drips usually do not require labs, though we may suggest them. Clinical treatments like iron therapy are guided by recent bloodwork, including ferritin and iron studies.',
  },
  {
    q: 'Should I eat and drink beforehand?',
    a: 'Yes, please have a normal meal and some water before your visit. Arriving hydrated and not fasting makes placing the IV easier and your visit more comfortable.',
  },
  {
    q: 'Is there any downtime?',
    a: 'Generally none. Most people return to their day right away. We will let you know if a particular treatment calls for anything different.',
  },
  {
    q: 'What is the difference between a drip and a shot?',
    a: 'A drip is an IV infusion over time; a shot is a quick intramuscular injection of a single active, like B12 or glutathione. Shots are a fast option or an add-on to a drip.',
  },
  {
    q: 'Are these services covered by OHIP or insurance?',
    a: 'Wellness infusion services are elective and are not covered by OHIP. Some clinically indicated care, such as iron therapy, may be different. We are happy to clarify at your consult.',
  },
  {
    q: 'How is this different from a drip bar?',
    a: 'We are a physician-led medical clinic, not a counter. Every treatment is physician-reviewed and nurse-administered, we screen first, and we use pharmaceutical-grade ingredients. The calm is intentional, and so is the oversight.',
  },
  {
    q: 'Can I build my own drip?',
    a: 'You can explore a base and boosters with our Build Your Own tool to understand the options. It is educational, and your nurse finalises a safe blend after screening.',
  },
  {
    q: 'How much does it cost?',
    a: 'We confirm what is right for you, and what it involves, at your consult, with no pressure and no surprises. See How pricing & memberships work for the approach.',
  },
  {
    q: 'How do I book?',
    a: 'Request a consult through the website and our team will reach out to find a time and answer your questions. A consult is a calm, no-pressure first step.',
  },
];
