// components/home/StepCard.tsx
// ─────────────────────────────────────────────────────────────
// Reusable card component used twice on the home page:
//   Step 1 — "Explore the diagram"  → links to /diagram
//   Step 2 — "Test yourself"        → links to /exercise
//
// PROPS (define this interface above the component):
//   step:        number   — displayed in the "STEP N" eyebrow badge
//   title:       string   — bold card headline
//   description: string   — 1–2 sentence body text
//   ctaLabel:    string   — link text, e.g. "Start exploring"
//   ctaHref:     string   — the page this card navigates to
//
// VISUAL STRUCTURE (top to bottom inside the card):
//
//   [ illustration area ]
//   A rectangular box at the top of the card with a light background.
//   Leave a placeholder <div> with a fixed height for now.
//   Later this will hold a thumbnail image of the diagram.
//
//   [ step badge ]
//   "STEP 1" — small uppercase mono label in brand-blue.
//   Use the .badge.badge--blue classes from globals.css, or style locally.
//
//   [ title ]
//   Bold heading — use .text-h2 from globals.css.
//
//   [ description ]
//   Body paragraph — use .text-body from globals.css.
//
//   [ CTA link ]
//   A text link with an arrow: "Start exploring ›"
//   Color: brand-pink.  No underline.  Hover: slight opacity.
//   Use Next.js <Link> so it's a client-side navigation.
//
// CARD STYLING:
//   White background (var(--color-surface)).
//   Rounded corners (var(--radius-card)).
//   Thin border (var(--color-border)).
//   Subtle box shadow (var(--shadow-card)).
//
// IMPORTS YOU WILL NEED:
//   import Link from 'next/link'
//   import styles from './StepCard.module.css'
// ─────────────────────────────────────────────────────────────

export default function StepCard() {
  // TODO: add props interface and build the card
  return <article></article>
}
