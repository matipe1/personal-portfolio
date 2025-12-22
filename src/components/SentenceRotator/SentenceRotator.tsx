import styles from './SentenceRotator.module.css';

export const SentenceRotator = () => {
    return (
        <div className={styles.window}>
            <div className={styles.tape}>
                {/* 1. Visible items */}
                <div className={styles.textItem}>Full-Stack Developer</div>
                <div className={styles.textItem}>Engineering Student</div>
                
                {/* 2. Infinite loop ilusion */}
                <div className={styles.textItem}>Full-Stack Developer</div>
            </div>
        </div>
    );
}