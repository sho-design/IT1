// ─────────────────────────────────────────────────────────────────────────
// Real-photo slots. Everything here is empty until a photoshoot is delivered;
// each slot's page renders nothing while its path is empty, so the live site
// stays clean. To turn a photo on: drop the file in /public/photos/ and set
// its path below (e.g. '/photos/treatment-chair.jpg'). See PHOTO_SHOT_LIST.md
// for what to capture for each slot.
// ─────────────────────────────────────────────────────────────────────────

export const photos = {
  // Homepage — the destination, shown just before the closing consult band.
  chair: '', // wide 16:9 — the treatment chair in morning light

  // About — the real space, grounding the "calm by design" story.
  clinicSpace: '', // 3:2 — a wide, calm view of the Thornhill room

  // Book a consult — the room you're booking into, beside the form.
  consultRoom: '', // 4:5 — a quiet corner / the chair, portrait

  // How it works — a lead image of the real process.
  process: '', // 3:2 — hands (gloved) preparing a drip, clinical and precise
};
