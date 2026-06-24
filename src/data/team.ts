// The care team. Role-forward so the page reads well before real names and
// photos are supplied: while `name` / `photo` sit on PLACEHOLDER the card falls
// back to the role title and a monogram, so there are never broken images or
// empty names. Fill these in before launch.
import { PLACEHOLDER } from './site';

export interface TeamMember {
  role: string; // shown as the card's standing title
  name: string; // PLACEHOLDER until provided
  title?: string; // fuller title line under the name (featured member)
  credentials: string; // e.g. 'MD, CCFP' — shown under the name
  photo: string; // path under /public, or PLACEHOLDER
  monogram: string; // 1–2 letters drawn when there is no photo
  family: string; // accent token used for the monogram + hover
  bio: string[]; // one entry per paragraph
  highlights?: string[]; // optional credential bullets (featured member)
}

export const team: TeamMember[] = [
  {
    role: 'Medical Director',
    name: 'Dr. Johnny Nguyen',
    title: 'Medical Director · Interventional Pain Physician',
    credentials: 'MD · University of Toronto',
    // Drop the headshot at /public/team/dr-johnny-nguyen.jpg and set the path
    // here to swap the monogram for the photo.
    photo: PLACEHOLDER,
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
  {
    role: 'Nurse Lead',
    name: PLACEHOLDER,
    credentials: 'RN · Registered Nurse',
    photo: PLACEHOLDER,
    monogram: 'RN',
    family: 'var(--accent-wellness)',
    bio: [
      'Our lead registered nurse runs the floor: placing your line with a steady hand, watching how you respond, and keeping the pace calm. Every infusion in the clinic is nurse-administered.',
    ],
  },
  {
    role: 'Registered Nurses',
    name: PLACEHOLDER,
    credentials: 'RN · Infusion-trained',
    photo: PLACEHOLDER,
    monogram: 'RN',
    family: 'var(--accent-recovery)',
    bio: [
      'Our nurses are trained in IV infusion and gentle technique. They take the time to answer questions, make the chair comfortable, and treat your visit as care rather than a transaction.',
    ],
  },
  {
    role: 'Patient Care',
    name: PLACEHOLDER,
    credentials: 'Front desk & coordination',
    photo: PLACEHOLDER,
    monogram: 'PC',
    family: 'var(--accent-radiance)',
    bio: [
      'From your first question to booking your consult, our patient-care team keeps things easy and unhurried — scheduling, intake, and anything you need between visits.',
    ],
  },
];
