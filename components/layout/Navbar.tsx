// components/layout/Navbar.tsx
// ─────────────────────────────────────────────────────────────
// Shared top navigation bar — rendered on every page via app/layout.tsx.
// It is fixed to the top of the viewport (position: fixed).
// The .page-shell class in globals.css adds padding-top to compensate.
//
// VISUAL STRUCTURE (left to right):
//   [ CAVE logo mark (SVG, 28px) ]  [ "CAVE" text ]  [ "LEARN" pink badge ]
//   gap
//   [ Home ]  [ Diagram ]  [ Test Yourself ]   ← nav links
//   flex-grow spacer
//   (right side reserved for future content, e.g. a "◆ cave.learn" chip)
//
// BEHAVIOUR:
//   • The currently active page link should look visually different
//     from the inactive ones (e.g. darker background, bold weight).
//   • Use the Next.js hook `usePathname()` from 'next/navigation'
//     to get the current route and compare it to each link's href.
//   • This component needs 'use client' at the top because usePathname
//     is a client-side hook.
//
// NAV LINKS (in order):
//   Home          href="/"
//   Diagram       href="/diagram"
//   Test Yourself href="/exercise"
//
// STYLING:
//   Create Navbar.module.css next to this file.
//   The bar itself: white background, bottom border, height ~56px.
//   Logo badge ("LEARN"): brand-pink background, white text, pill radius.
//   Active link: filled dark pill (see .btn--primary in globals.css).
//   Inactive link: no background, muted text, subtle hover state.
//
// IMPORTS YOU WILL NEED:
//   'use client'
//   import Link from 'next/link'
//   import { usePathname } from 'next/navigation'
//   import styles from './Navbar.module.css'
// ─────────────────────────────────────────────────────────────

export default function Navbar() {
  // TODO: build the navbar
  return <nav></nav>
}
