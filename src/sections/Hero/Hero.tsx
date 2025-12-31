import { SentenceRotator } from '../../components/SentenceRotator/SentenceRotator';
import styles from './Hero.module.css';

export const Hero = () => {

    return(
        <section id="home" className={styles.heroContainer}>
            <div>
                <h1 className={styles.title}>Hi, I'm Diego</h1>
                <h2 className={styles.subtitle}>
                    <SentenceRotator />
                </h2>
                <p className={styles.description}>Advanced Engineering Student and eager to get a work on the field</p>
            </div>
            <div>
                🟦 (logo)
            </div>
        </section>
    );
}