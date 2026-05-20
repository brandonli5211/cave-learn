// components/diagram/CADiagram.tsx
// ─────────────────────────────────────────────────────────────
// The interactive Clean Architecture diagram.
// Renders four layer rectangles with component boxes inside them.
// Clicking a box calls onSelect with that component's id.
// Clicking the background calls onSelect(null) to deselect.
//
// Props:
//   selectedId  — id of the currently selected component (from page state)
//   onSelect    — callback: (id: string | null) => void
//
// Data: import CA_LAYERS and CA_COMPONENTS from '@/lib/ca-data'
//       Never hardcode component names or colors here.
//
// Approach:
//   Position component boxes using absolute CSS inside a relative container.
//   Draw dependency/implements arrows with SVG overlaid on top.
//   Highlight the selected box (border, shadow, or opacity change).
// ─────────────────────────────────────────────────────────────

import { CA_COMPONENTS, CA_LAYERS } from '@/lib/ca-data'

interface CADiagramProps {
  selectedId: string | null
  onSelect: (id: string | null) => void
}

export default function CADiagram({ selectedId, onSelect }: CADiagramProps) {
  // TODO: build the diagram
  return <div onClick={() => onSelect(null)}></div>
}
