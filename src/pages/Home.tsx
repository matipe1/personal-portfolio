import { Navbar } from '../layouts/Navbar/Navbar';
import { SocialSidebar } from '../layouts/SocialSidebar/SocialSidebar';
import { Hero } from '../sections/Hero/Hero';
import { Portfolio } from '../sections/Portfolio/Portfolio';
import { Skills } from '../sections/Skills/Skills';
import { Contact } from '../sections/Contact/Contact';
import styles from './Home.module.css';
import { Footer } from '../layouts/Footer/Footer';
import { About } from '../sections/About/About';

export const Home = () => {
  return (
    <div className={styles.container}>
        <Navbar />
        <SocialSidebar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
    </div>
  );
};