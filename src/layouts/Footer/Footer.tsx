import styles from './Footer.module.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <footer className={styles.footerContainer}>
            <div className={styles.content}>
                <p className={styles.text}>
                    Designed & Built by <span className={styles.highlight}>Diego Petitto</span>
                </p>
                <p className={styles.copyright}>
                    &copy; {currentYear} All rights reserved.
                </p>
            </div>
        </footer>
    );
}