'use client';
import ComponentPieces from "./ComponentPieces"
import { CA_COMPONENTS } from "@/lib/ca-data"
import styles from "./style.module.css"
import { useState } from 'react'
import { useDroppable } from '@dnd-kit/react'

interface SidebarProps {
    isPlaced: Record<string, string>;
}

/* buttons container is 572px to fit all of the buttons. Change if the height of buttons change later.*/

export default function Sidebar({ isPlaced } : SidebarProps){
    const {ref} = useDroppable({id : "sidebar-droppable"})
    return (
    <aside className={styles['sidebar--container']}>
        <div className={styles['pieces--container']}>
            <p>PIECES</p>
        </div>
        <div className={styles['description--container']}>
            <p>Drag each chip into the slot you think it belongs in. Drop chips back here to remove.</p>
        </div>
        <div className={styles['buttons--container']} ref={ref}>
            {CA_COMPONENTS.map((component) => (isPlaced[component.id] == "" && <ComponentPieces key={component.id} layer={component.layer} label={component.id}/>))}
        </div>
    </aside>
)}
