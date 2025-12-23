import { Navbar } from '../layouts/Navbar/Navbar';
import { ThemeToggle } from '../components/ThemeToggle/ThemeToggle';
import { Hero } from '../sections/Hero/Hero';
import styles from './Home.module.css';
import { SocialSidebar } from '../layouts/SocialSidebar/SocialSidebar';
import { Portfolio } from '../sections/Portfolio/Portfolio';

export const Home = () => {
  return (
    <div className={styles.container}>
        <ThemeToggle />

        <Navbar />
        <SocialSidebar />

        <main>
          <Hero />
          <Portfolio />
        </main>

        {/* Footer */}
    </div>
  );
};