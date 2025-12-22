import { Download } from 'lucide-react';
import styles from './Navbar.module.css';

interface Item {
    name: string;
    href: string;
}

const navItems: Item[] = [
    {name: "About", href: "#about"},
    {name: "What I do", href: "#services"},
    {name: "Portfolio", href: "#portfolio"},
    {name: "Contact", href: "#contact"},
    {name: "Blog", href:"#blog"}
]

export const Navbar = () => {
    return(
        <nav className={styles.navContainer}>
            {/* Logo */}
            <div className={styles.logo}>
                <a href="#">Diego Petitto</a>
            </div>
            <ul className={styles.navLinks}>
                {
                    navItems?.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className={styles.link}>
                                {item.name}
                            </a>
                        </li>
                    ))
                }
                <li>
                    <button className={styles.cvButton}>
                        {<Download size={16} />}
                        <span>CV</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}