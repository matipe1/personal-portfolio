import { Moon, Sun } from "lucide-react";
import { useToggle } from "../../hooks/useToggle"
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
    const [isDark, toggle] = useToggle(true);
    
    return (
        <button onClick={toggle}
                className={`${styles.toggleButton} ${styles.hideMaxSm}`}>
            {isDark ? 
            <Sun className={`${styles.icon} ${styles.sun}`} /> :
            <Moon className={`${styles.icon} ${styles.moon}`}/>}
        </button>
    )
}