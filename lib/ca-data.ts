// lib/ca-data.ts
// ─────────────────────────────────────────────────────────────
// Single source of truth for all Clean Architecture content.
//
// USED BY: CADiagram, ComponentSidebar, ExerciseBoard, ComponentPieces.
// Never hardcode layer names, colors, or descriptions inside a component.
// Always import from here so the data stays consistent site-wide.
// ─────────────────────────────────────────────────────────────

export type LayerId =
  | 'interface-adapters'
  | 'application-business-rules'
  | 'enterprise-business-rules'
  | 'frameworks-drivers'

export interface CALayer {
  id: LayerId
  name: string
  /** CSS custom property value — use as background-color in inline styles or module CSS */
  colorHex: string
  /** Human-readable description shown in tooltips or the sidebar */
  description: string
}

export interface CAComponent {
  id: string
  name: string
  layer: LayerId
  /** Full explanation shown in the sidebar when the component is clicked */
  description: string
  /** IDs of other components this one depends on (solid arrow points away from this component) */
  dependsOn: string[]
  /** IDs of interfaces this component implements (dashed arrow) */
  implements: string[]
}

// ── Layers ───────────────────────────────────────────────────

export const CA_LAYERS: Record<LayerId, CALayer> = {
  'interface-adapters': {
    id: 'interface-adapters',
    name: 'Interface Adapters',
    colorHex: '#3FAE5C', // brand-green
    description:
      'Converts data between the format convenient for use cases and the format convenient for external agencies like databases or the web.',
  },
  'application-business-rules': {
    id: 'application-business-rules',
    name: 'Application Business Rules',
    colorHex: '#E2477C', // brand-pink
    description:
      'Contains the use cases of the application. Orchestrates the flow of data to and from the entities.',
  },
  'enterprise-business-rules': {
    id: 'enterprise-business-rules',
    name: 'Enterprise Business Rules',
    colorHex: '#F5C242', // brand-yellow
    description:
      'The innermost layer. Entities encapsulate the most general and high-level business rules of the enterprise.',
  },
  'frameworks-drivers': {
    id: 'frameworks-drivers',
    name: 'Frameworks & Drivers',
    colorHex: '#207FD4', // brand-blue
    description:
      'The outermost layer. Contains frameworks, tools, databases, and UI. Nothing in this layer should be known by inner layers.',
  },
}

// ── Components ───────────────────────────────────────────────

export const CA_COMPONENTS: CAComponent[] = [
  {
    id: 'controller',
    name: 'Controller',
    layer: 'interface-adapters',
    description:
      'Accepts input from the user or external system, packages it into Input Data, and calls the Use Case via the Input Boundary interface.',
    dependsOn: ['input-boundary', 'input-data'],
    implements: [],
  },
  {
    id: 'presenter',
    name: 'Presenter',
    layer: 'interface-adapters',
    description:
      'Receives Output Data from the Use Case and formats it into a View Model the View can render. Implements the Output Boundary interface.',
    dependsOn: ['output-data', 'view-model'],
    implements: ['output-boundary'],
  },
  {
    id: 'view-model',
    name: 'View Model',
    layer: 'interface-adapters',
    description:
      'A simple data structure populated by the Presenter and read by the View. Contains only display-ready values — no logic.',
    dependsOn: [],
    implements: [],
  },
  {
    id: 'input-boundary',
    name: 'Input Boundary',
    layer: 'application-business-rules',
    description:
      'An interface (not a class) that defines how the Controller can call into the Use Case. Keeps the Controller decoupled from the concrete Interactor.',
    dependsOn: [],
    implements: [],
  },
  {
    id: 'input-data',
    name: 'Input Data',
    layer: 'application-business-rules',
    description:
      'A plain data structure (DTO) that carries the request from the Controller to the Use Case Interactor. Contains no behaviour.',
    dependsOn: [],
    implements: [],
  },
  {
    id: 'use-case-interactor',
    name: 'Use Case Interactor',
    layer: 'application-business-rules',
    description:
      'The core application logic. Implements the Input Boundary, operates on Entities, and calls the Output Boundary to return results.',
    dependsOn: ['entities', 'output-boundary', 'data-access-interface', 'output-data'],
    implements: ['input-boundary'],
  },
  {
    id: 'output-boundary',
    name: 'Output Boundary',
    layer: 'application-business-rules',
    description:
      'An interface that defines how the Use Case sends its output to the Presenter without depending on the Presenter directly.',
    dependsOn: [],
    implements: [],
  },
  {
    id: 'output-data',
    name: 'Output Data',
    layer: 'application-business-rules',
    description:
      'A plain data structure (DTO) carrying the result from the Use Case to the Presenter. Contains no behaviour.',
    dependsOn: [],
    implements: [],
  },
  {
    id: 'data-access-interface',
    name: 'Data Access Interface',
    layer: 'application-business-rules',
    description:
      'An interface defining how the Use Case retrieves and stores data. The Use Case depends on this interface, not on any concrete database class.',
    dependsOn: [],
    implements: [],
  },
  {
    id: 'entities',
    name: 'Entities',
    layer: 'enterprise-business-rules',
    description:
      'Business objects that encapsulate enterprise-wide rules. They are the most stable part of the system and have no knowledge of outer layers.',
    dependsOn: [],
    implements: [],
  },
  {
    id: 'view',
    name: 'View',
    layer: 'frameworks-drivers',
    description:
      'The UI layer. Reads from the View Model and renders the interface. It is a detail — the business rules do not know it exists.',
    dependsOn: ['view-model'],
    implements: [],
  },
  {
    id: 'data-access',
    name: 'Data Access',
    layer: 'frameworks-drivers',
    description:
      'The concrete implementation of the Data Access Interface. Knows how to talk to the database, but the Use Case only ever sees the interface.',
    dependsOn: ['database'],
    implements: ['data-access-interface'],
  },
  {
    id: 'database',
    name: 'Database',
    layer: 'frameworks-drivers',
    description:
      'The actual data store. An external detail that every inner layer is completely unaware of.',
    dependsOn: [],
    implements: [],
  },
]
