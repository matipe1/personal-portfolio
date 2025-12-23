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
                    <a  href="https://drive.google.com/file/d/1RalTzTVup9xyhKgeS3YWOgqcROdzNWLM/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cvButton}>
                        <span>Resume</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}