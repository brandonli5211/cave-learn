import styles from './style.module.css';

export default function Subheader(){
    return (
    <div className={styles['subheader--container']}>
        <div className={styles['subheader--text']}>
            <p className="text-eyebrow">Exercise   .   Test Yourself</p>
            <p className="text-h1">Drag every component into its layer.</p>
        </div>
    </div>
)}
