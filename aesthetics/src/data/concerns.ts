export interface Concern {
  slug: string;
  label: string;
  line: string;
  accent: string;
}

export const concerns: Concern[] = [
  { slug: 'fine-lines', label: 'Fine lines & wrinkles', line: 'Softening expression lines.', accent: '#8e6aa6' },
  { slug: 'volume-contour', label: 'Volume & contour', line: 'Restoring balance and definition.', accent: '#9c6b86' },
  { slug: 'texture-tone', label: 'Texture & tone', line: 'Smoother, more even skin.', accent: '#c58a77' },
  { slug: 'acne-scarring', label: 'Acne & scarring', line: 'Calming breakouts, refining scars.', accent: '#b0604e' },
  { slug: 'pigmentation', label: 'Pigmentation & sun', line: 'Fading spots and sun damage.', accent: '#c8a24b' },
  { slug: 'redness', label: 'Redness & rosacea', line: 'Calming reactive skin.', accent: '#b23a4f' },
  { slug: 'laxity-lifting', label: 'Laxity & lifting', line: 'Firmer, lifted contours.', accent: '#5e8a8c' },
  { slug: 'aging-well', label: 'Aging well', line: 'A considered, long-game approach.', accent: '#7e8b6e' },
];
