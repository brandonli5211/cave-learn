// components/diagram/ComponentSidebar.tsx
// ─────────────────────────────────────────────────────────────
// Right-hand panel on the /diagram page.
// Shows info about the clicked component, or a prompt when nothing is selected.
//
// Props:
//   selectedId — string | null  (from DiagramPage state)
//
// Logic:
//   const component = CA_COMPONENTS.find(c => c.id === selectedId) ?? null
//   if (!component) → show "Click a component to learn about it"
//   if (component)  → show name, layer badge, description, dependsOn[], implements[]
//
// Data: import CA_COMPONENTS and CA_LAYERS from '@/lib/ca-data'
//       Use CA_LAYERS[component.layer].colorHex for the layer badge color.
// ─────────────────────────────────────────────────────────────

import { CA_COMPONENTS, CA_LAYERS } from '@/lib/ca-data'

interface ComponentSidebarProps {
  selectedId: string | null
}

export default function ComponentSidebar({ selectedId }: ComponentSidebarProps) {
  const component = CA_COMPONENTS.find((c) => c.id === selectedId) ?? null

  // TODO: build the sidebar — empty state and detail state
  return <aside></aside>
}
