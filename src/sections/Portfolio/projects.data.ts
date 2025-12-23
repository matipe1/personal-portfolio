export interface Project {
    id: number;
    title: string;
    description: string;
    image: string; // path
    techStack: string[];
    links: {
        github?: string;
        live?: string;
    }
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Neon LED Configurator',
        description: 'A web tool for my business allowing clients to customize neon signs.',
        image: '/projects/image-01.jpg', // Placeholders for now
        techStack: ['React', 'TypeScript', 'Three.js'],
        links: {
            github: 'https://github.com/...'
        }
    },
    {
        id: 2,
        title: 'ESP32 Telegram Bot',
        description: 'IoT system controlling 3D printers remotely via Telegram.',
        image: '/projects/image-02.webp',
        techStack: ['C++', 'IoT', 'Telegram API'],
        links: {
        github: 'https://github.com/...',
        live: 'https://...'
        }
    },
    {
        id: 3,
        title: 'Neon LED Configurator',
        description: 'A web tool for my business allowing clients to customize neon signs.',
        image: '/projects/image-03.png', // Placeholders for now
        techStack: ['React', 'TypeScript', 'Three.js'],
        links: {
            github: 'https://github.com/...'
        }
    }
]