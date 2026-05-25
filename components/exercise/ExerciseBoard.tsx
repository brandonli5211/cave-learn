'use client'
// components/exercise/ExerciseBoard.tsx
// The drag-and-drop diagram canvas. Same layer layout as CADiagram but with empty drop zones.
import styles from './style.module.css';
import { CA_COMPONENTS } from '@/lib/ca-data';
import ComponentPiecesContainer from "./ComponentPiecesContainer"

const componentToLayer = Object.fromEntries(CA_COMPONENTS.map((component) => ([component.id, component.layer])));

interface ExerciseBoardProps {
  isFilled: Record<string, string>;
}

export default function ExerciseBoard( { isFilled } : ExerciseBoardProps) {
  return (
  <div className={styles['cadiagram']}>
    {CA_COMPONENTS.map((component) => (<ComponentPiecesContainer key={component.id} buttonLayer={isFilled[component.id] != "" ? componentToLayer[isFilled[component.id]] : ""} buttonLabel={isFilled[component.id]} droppableID={component.id}/>))}
  </div>
  )
}
