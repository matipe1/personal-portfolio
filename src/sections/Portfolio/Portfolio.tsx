import { projectsData } from './projects.data';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import styles from './Portfolio.module.css';
import { useState } from 'react';

export const Portfolio = () => {
    const [visibleCount, setVisibleCount] = useState(2);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 3);
    }
    return (
        <section id="portfolio" className={styles.portfolioContainer}>
            <h2 className={styles.title}>Featured Projects</h2>

            <div className={styles.grid}>
                {
                    projectsData?.slice(0, visibleCount).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </div>
            {
                visibleCount < projectsData.length && (
                    <div className={styles.buttonContainer}>
                        <button onClick={handleShowMore} className={styles.showMoreButton}>
                            Show more
                        </button>
                    </div>
                )
            }
        </section>
    );
}