'use client'
import { useDroppable } from '@dnd-kit/react'
import ComponentPieces from './ComponentPieces';
import styles from "./style.module.css"

interface ComponentPiecesProps {
    buttonLabel: string;
    buttonLayer: string;
    droppableID: string;
}

/* This is used by ExerciseBoard. That file passes in "label" which is the same as the id of the ca component */
/* The key is just to distinguish it from other components. */
export default function ComponentPiecesContainer({ buttonLabel, buttonLayer, droppableID } : ComponentPiecesProps){
    const { ref, isDropTarget } = useDroppable({ id : droppableID })
    return (
        <div className={styles['droppable']} ref={ref}>
            {buttonLabel != "" && <ComponentPieces key={buttonLabel} layer={buttonLayer} label={buttonLabel} inDroppable={true}/>}
        </div>
    )
}