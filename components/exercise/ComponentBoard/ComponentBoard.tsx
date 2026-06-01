'use client'
// components/exercise/ComponentBoard/ComponentBoard.tsx
// The drag-and-drop diagram canvas. Same layer layout as CADiagram but with empty drop zones.
import styles from './ComponentBoard.module.css';
import { CA_COMPONENTS } from '@/lib/ca-data';
import ComponentPiecesDroppableArea from "../ComponentPiecesDroppableArea/ComponentPiecesDroppableArea"

const componentToLayer = Object.fromEntries(CA_COMPONENTS.map((component) => ([component.id, component.layer])));

/* 
isFilled: A mapping of droppable area ids to draggable button ids.
isVerified: Whether or not the current board has been verified (check work has been clicked).
*/
interface ComponentBoardProps {
  isFilled: Record<string, string>;
  isVerified: boolean;
}

export default function ComponentBoard( { isFilled, isVerified } : ComponentBoardProps) {
  return (
  <div className={styles['cadiagram']}>
    {CA_COMPONENTS.map((component) => (<ComponentPiecesDroppableArea key={component.id} buttonLayer={isFilled[component.id] != "" ? componentToLayer[isFilled[component.id]] : ""} buttonLabel={isFilled[component.id]} droppableID={component.id} isVerified={isVerified} buttonOutline={component.id == isFilled[component.id] ? "button--correct" : "button--incorrect"}/>))}
  </div>
  )
}