import styles from './ProjectCard.module.css';
import type { Project } from '../../sections/Portfolio/projects.data';
import { ExternalLink, Github } from 'lucide-react';

interface Props {
    project: Project;
}

export const ProjectCard = ({ project }: Props) => {
    const { title, description, image, techStack, links } = project;

    return (
        <article className={styles.cardContainer}>
            <div className={styles.header}>
                <img src={image} alt={"[image: " + title + "]"} className={styles.image} />
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.tags}>
                    {
                        techStack?.map((tech) => (
                            <span key={tech} className={styles.tag}>{tech}</span>
                        ))
                    }
                </div>
                <div className={styles.footer}>
                    {
                        links.github && (
                            <a href={links.github} target="_blank" rel="noreferrer">
                                {<Github size={20} />}
                            </a>
                        )
                    }
                    {
                        links.live && (
                            <a href={links.live} target="_blank" rel="noreferrer">
                                {<ExternalLink size={20} />}
                            </a>
                        )
                    }
                </div>
            </div>
        </article>
    );
}