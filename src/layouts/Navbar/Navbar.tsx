import { FaHamburger, FaTimes } from 'react-icons/fa';
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';
import { useState } from 'react';

interface Item {
    name: string;
    href: string;
}

const navItems: Item[] = [
    {name: "Home", href: "#home"},
    {name: "About me", href: "#about"},
    {name: "Portfolio", href: "#portfolio"},
    {name: "Contact", href: "#contact"},
    {name: "Blog", href:"https://diegopetitto.notion.site/2da3608cfc55810f8bd4f46a35ea0cc5?v=2da3608cfc5581029a09000c183902d3&source=copy_link"}
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickHamburger = () => {
        setIsOpen(prev => !prev);
        console.log("State: " + isOpen);
    }

    return(
        <nav className={`${styles.navContainer} ${isOpen ? styles.hamburgerBackground : ""}`}>
            {/* Logo */}
            <div className={styles.logo}>
                <a href="#">Diego Petitto</a>
            </div>

            {/* Desktop */}
            <div className={styles.interact}>
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
                <div>
                    <ThemeToggle />
                </div>
            </div>

            {/* Mobile */}
            <div className={styles.hamburger}>
                <button
                    onClick={handleClickHamburger}
                    className={styles.hamburgerBtn}
                    aria-label="Toggle menu">
                    {isOpen ? <FaTimes size={24} /> : <FaHamburger size={24} />}
                </button>
            </div>

            <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen + " " + styles.hamburgerBackground : ""}`}>
                <ul className={styles.mobileLinks}>
                    {
                        navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className={styles.link}>
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className={styles.mobileActions}>
                    <a  href="https://drive.google.com/file/d/1RalTzTVup9xyhKgeS3YWOgqcROdzNWLM/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cvButton}>
                        <span>Resume</span>
                    </a>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}