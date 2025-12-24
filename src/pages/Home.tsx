import { Navbar } from '../layouts/Navbar/Navbar';
import { Hero } from '../sections/Hero/Hero';
import styles from './Home.module.css';
import { SocialSidebar } from '../layouts/SocialSidebar/SocialSidebar';
import { Portfolio } from '../sections/Portfolio/Portfolio';

export const Home = () => {
  return (
    <div className={styles.container}>
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