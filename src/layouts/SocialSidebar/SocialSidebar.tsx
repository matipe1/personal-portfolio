import { Github, Linkedin } from 'lucide-react';
import styles from './SocialSidebar.module.css';

export const SocialSidebar = () => {
    return(
        <aside className={styles.sidebar}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a  href="https://github.com/matipe1"
                        target='_blank' rel='noreferrer'>
                        <Github size={20}/>
                    </a>
                </li>
                <li className={styles.item}>
                    <a  href="https://www.linkedin.com/in/diego-petitto"
                        target='_blank' rel='noreferrer'>
                        <Linkedin size={20}/>
                    </a>
                </li>
                {/* <li>
                    <a  href=""
                        target='_blank' rel='noreferrer'>
                        <Instagram size={100}/>
                    </a>
                </li> */}
            </ul>

            <div className={styles.line}></div>
        </aside>
    );
}