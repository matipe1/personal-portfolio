import styles from './About.module.css';

export const About = () => {
    return(
        <section id="about" className={styles.aboutContainer}>
            <div className={styles.content}>

                <div className={styles.imageWrapper}>
                    <img src="/projects/image-01.jpg" alt="" className={styles.profileImage} />
                    <div className={styles.imageBackdrop}>

                    </div>
                </div>
                <div className={styles.textWrapper}>
                    <h2 className={styles.title}>About Me</h2>
                    <h3 className={styles.subtitle}>I build software that interacts with the real world.</h3>

                    <p className={styles.paragraph}>
                        I am an <span>Advanced Engineering Student</span> with a background in 3D ...
                        We Started as a need to automate my own 3D printers using <span>ESP32 & C++</span> evolved into a passion for Full-Stack Development.
                    </p>

                    <p className={styles.paragraph}>
                        Currently, I run a tech-driven service business for <span>3D printing and Neon LED signage</span>,
                        where i apply my code to optimize workflows. I specialize in <span>React, TypeScript & IoT</span>,
                        always looking for a most efficient way to solve complex problems.
                    </p>
                </div>
                
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>5+</span>
                        <span className={styles.statLabel}>Years in 3D Printing</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>IoT</span>
                        <span className={styles.statLabel}>Hardware Integration</span>
                    </div>
                </div>
                
            </div>
        </section>
    );
}