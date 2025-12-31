import { SiAutodesk, SiCplusplus, SiFigma, SiGit, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiThreedotjs, SiTypescript } from 'react-icons/si';
import styles from './Skills.module.css';

interface Skill {
    name: string;
    icon: React.ElementType;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Three.js", icon: SiThreedotjs }
    ]
  },
  {
    title: "Backend & IoT",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus }
    ]
  },
  {
    title: "Engineering & Tools",
    skills: [
        { name: "Git", icon: SiGit },
        { name: "Figma", icon: SiFigma },
        { name: "Fusion360", icon: SiAutodesk }
    ]
  }
];

export const Skills = () => {
    return(
        <section id="skills" className={styles.container}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            
            <div className={styles.grid}>
                {
                    skillsData.map((category) => (
                        <div key={category.title} className={styles.categoryCard}>
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            
                            <div className={styles.skillsList}>
                                {
                                    category.skills.map((skill) => (
                                        <div key={skill.name} className={styles.skillItem}>
                                            <skill.icon size={20} className={styles.icon} />
                                            <span>{skill.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}