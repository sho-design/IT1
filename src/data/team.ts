// The care team. Role-forward so the page reads well before real names and
// photos are supplied: while `name` / `photo` sit on PLACEHOLDER the card falls
// back to the role title and a monogram, so there are never broken images or
// empty names. Fill these in before launch.
import { PLACEHOLDER } from './site';

export interface TeamMember {
  role: string; // shown as the card's standing title
  name: string; // PLACEHOLDER until provided
  credentials: string; // e.g. 'MD, CCFP' — shown under the name
  photo: string; // path under /public, or PLACEHOLDER
  monogram: string; // 1–2 letters drawn when there is no photo
  family: string; // accent token used for the monogram + hover
  bio: string;
}

export const team: TeamMember[] = [
  {
    role: 'Medical Director',
    name: PLACEHOLDER,
    credentials: 'MD · CPSO-registered physician',
    photo: PLACEHOLDER,
    monogram: 'RM',
    family: 'var(--accent-clinical)',
    bio: 'Our physician reviews every plan before a single drip is hung. Eligibility, screening, dosing, and follow-up are all overseen by medicine, not a menu. This is the difference, quietly, between a clinic and a counter.',
  },
  {
    role: 'Nurse Lead',
    name: PLACEHOLDER,
    credentials: 'RN · Registered Nurse',
    photo: PLACEHOLDER,
    monogram: 'RN',
    family: 'var(--accent-wellness)',
    bio: 'Our lead registered nurse runs the floor: placing your line with a steady hand, watching how you respond, and keeping the pace calm. Every infusion in the clinic is nurse-administered.',
  },
  {
    role: 'Registered Nurses',
    name: PLACEHOLDER,
    credentials: 'RN · Infusion-trained',
    photo: PLACEHOLDER,
    monogram: 'RN',
    family: 'var(--accent-recovery)',
    bio: 'Our nurses are trained in IV infusion and gentle technique. They take the time to answer questions, make the chair comfortable, and treat your visit as care rather than a transaction.',
  },
  {
    role: 'Patient Care',
    name: PLACEHOLDER,
    credentials: 'Front desk & coordination',
    photo: PLACEHOLDER,
    monogram: 'PC',
    family: 'var(--accent-radiance)',
    bio: 'From your first question to booking your consult, our patient-care team keeps things easy and unhurried — scheduling, intake, and anything you need between visits.',
  },
];
