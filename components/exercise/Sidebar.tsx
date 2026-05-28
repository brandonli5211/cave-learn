'use client';
import ComponentPieces from "./ComponentPieces"
import { CA_COMPONENTS } from "@/lib/ca-data"
import styles from "./style.module.css"
import { useState } from 'react'
import { useDroppable } from '@dnd-kit/react'

interface SidebarProps {
    isPlaced: Record<string, string>;
}

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
            <div className={styles['button--column']}>
                {CA_COMPONENTS.filter((component) => (isPlaced[component.id] == "")).map((component, index) => (index % 2 == 0 && <ComponentPieces key={component.id} layer={component.layer} label={component.id} inDroppable={false}/>))}
            </div>
            <div className={styles['button--column']}>
                {CA_COMPONENTS.filter((component) => (isPlaced[component.id] == "")).map((component, index) => (index % 2 == 1 && <ComponentPieces key={component.id} layer={component.layer} label={component.id} inDroppable={false}/>))}
            </div>
        </div>
        <div className={styles['check-work-reset--container']}>
            <button className={`btn btn--primary btn--check-work ${styles['btn--check-work']}`}>Check My Work</button>
            <button className={`btn btn--secondary ${styles['btn--reset']}`}>Reset</button>
        </div>
    </aside>
)}
