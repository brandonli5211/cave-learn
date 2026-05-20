// app/diagram/page.tsx  —  Diagram page  (route: /diagram)
// ─────────────────────────────────────────────────────────────
// Two-column layout: diagram canvas (left) + component sidebar (right).
// Owns the selectedId state and passes it down to both children.
// Needs 'use client' because of useState.
// ─────────────────────────────────────────────────────────────

'use client'

import { useState } from 'react'
import CADiagram from '@/components/diagram/CADiagram'
import DiagramLegend from '@/components/diagram/DiagramLegend'
import ComponentSidebar from '@/components/diagram/ComponentSidebar'

export default function DiagramPage() {
  // null = nothing selected; string = the id of the clicked CA component
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // TODO: lay out the two-column page (diagram + sidebar)
  // TODO: pass selectedId and setSelectedId into CADiagram
  // TODO: pass selectedId into ComponentSidebar
  return <main className="page-shell">This is the Diagram page</main>
}
