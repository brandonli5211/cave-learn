// components/home/HeroSection.tsx
// ─────────────────────────────────────────────────────────────
// The hero block at the top of the home page.
// Placed directly inside <main> in app/page.tsx.
//
// VISUAL STRUCTURE (top to bottom):
//
//   [ eyebrow text ]
//   "INTERACTIVE · SELF-PACED · OPEN SOURCE"
//   — small uppercase label, muted color, letter-spaced
//   — use the .text-eyebrow utility class from globals.css
//
//   [ logo + headline row ] — side by side
//   Left:  CAVE logo mark image (public/logo.svg, ~56px)
//          placeholder <div> is fine until the SVG is ready
//   Right: <h1> — two lines:
//            "Learn Clean Architecture"  ← "Clean Architecture" in brand-pink
//            "by playing with it."
//          Use the .text-display class from globals.css for the font.
//          Wrap just "Clean Architecture" in a <span> with pink color.
//
//   [ subtitle paragraph ]
//   "Two interactive lessons that teach you the components, the layers,
//    and the dependency rule. No setup, no install — just click around
//    until it clicks."
//   — use .text-body from globals.css
//
//   [ stats chips row ] — four small items in a horizontal flex row
//   Each chip = a colored dot + a label. Data is listed below.
//   Dot colors match the CA layer brand colors.
//
// STATS CHIP DATA (use this array in your component):
//   { dot: '#207FD4', label: '4 layers'           }
//   { dot: '#3FAE5C', label: '13 components'       }
//   { dot: '#E2477C', label: '1 dependency rule'   }
//   { dot: '#F5C242', label: '~10 min'             }
//
// STYLING:
//   Create HeroSection.module.css next to this file.
//   The whole section has generous top padding and a max-width.
//   The logo + headline row uses display: flex, align-items: flex-start.
//
// IMPORTS YOU WILL NEED:
//   import styles from './HeroSection.module.css'
// ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  // TODO: build the hero section
  return <section></section>
}
