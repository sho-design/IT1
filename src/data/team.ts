// The care team. The featured member (index 0) leads the page; the rest are
// shown below and shuffled into a random order on every page load (client-side).
// Members keep a monogram fallback until a photo is supplied, so there are never
// broken images.
import { PLACEHOLDER } from './site';

export interface TeamMember {
  role: string; // shown as the card's standing title / label
  name: string; // PLACEHOLDER until provided
  title?: string; // fuller title line under the name (featured member)
  credentials: string; // shown under the name when there is no real name yet
  photo: string; // path under /public, or PLACEHOLDER
  monogram: string; // 1–2 letters drawn when there is no photo
  family: string; // accent token used for the monogram + hover
  bio?: string[]; // one entry per paragraph (optional for the staff cards)
  highlights?: string[]; // optional credential bullets (featured member)
}

// Accent palette cycled across the staff cards for quiet variety.
const ACCENTS = [
  'var(--accent-wellness)',
  'var(--accent-recovery)',
  'var(--accent-radiance)',
  'var(--accent-energy)',
  'var(--accent-immune)',
  'var(--accent-metabolic)',
  'var(--accent-clinical)',
  'var(--accent-neutral)',
];

const nurseNames = [
  'Michelle',
  'Anh',
  'Kim',
  'Marika',
  'Kelly',
  'Tiffany',
  'Rose',
  'Hillary',
  'Aastha',
];

const nurses: TeamMember[] = nurseNames.map((name, i) => ({
  role: 'Registered Nurse',
  name,
  credentials: 'Registered Nurse',
  photo: PLACEHOLDER,
  monogram: name.charAt(0),
  family: ACCENTS[i % ACCENTS.length],
}));

export const team: TeamMember[] = [
  {
    role: 'Medical Director',
    name: 'Dr. Johnny Nguyen',
    title: 'Medical Director · Interventional Pain Physician',
    credentials: 'MD · University of Toronto',
    // Headshot lives at /public/team/dr-johnny-nguyen.jpg. Until that file
    // exists the portrait falls back to the monogram (onerror in the template),
    // so there is never a broken image.
    photo: '/team/dr-johnny-nguyen.jpg',
    monogram: 'JN',
    family: 'var(--accent-clinical)',
    bio: [
      'Dr. Johnny Nguyen grew up in the Jane and Finch community in Toronto. He graduated with a 99% average and was awarded the Governor General’s Academic Medal for the highest average in high school.',
      'He then pursued undergraduate studies at the University of Toronto, where he was one of only two students awarded the $45,000 Heaslip Scholarship. He earned his Doctor of Medicine (MD) degree at the University of Toronto, then completed a residency in family medicine, a fellowship in emergency medicine, and advanced credentialing in interventional pain management.',
      'Dr. Nguyen is the founder of Toronto Beauty, which provides medical-director services and aesthetic-nurse expertise for medspas across the GTA. He is the owner of Restoration Medical Thornhill and Restoration Medical (Vaughan), centres for comprehensive, compassionate, multidisciplinary care.',
    ],
    highlights: [
      'University of Toronto graduate',
      'Over a decade of combined experience as a family doctor, emergency doctor, and pain-management physician',
      'Advanced Diplomate in Interventional Pain Management',
    ],
  },
  ...nurses,
  {
    role: 'Lab Technician',
    name: 'Karen',
    credentials: 'Lab Technician',
    photo: PLACEHOLDER,
    monogram: 'K',
    family: 'var(--accent-metabolic)',
  },
];
