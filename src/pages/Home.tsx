import { Navbar } from '../layouts/Navbar/Navbar';
import { ThemeToggle } from '../components/ThemeToggle/ThemeToggle';
import { Hero } from '../sections/Hero/Hero';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.container}>
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Hero />


        {/* Footer */}
    </div>
  );
};