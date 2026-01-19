import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Aethervault',
    description: 'Heavily inspired by COMP/CON for Lancer. Aethervault is a full rules compendium, character sheets, and combat runner for the tabletop RPG game ICON. Designed in React with Discord and Obsidian integration.',
    images: ['/projects/aethervault.png'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Discord API', 'Obsidian'],
    featured: true,
    inprogress: true,
    category: 'web'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'This site! Built with Next.js and TypeScript.',
    images: [],
    technologies: ['Next.js', 'TypeScript', 'React', 'CSS Modules', 'Github Pages', 'Github Copilot'],
    featured: true,
    category: 'web'
  },
  {
    title: 'Azure AI Document Intelligence Solutions',
    description: 'Custom models for intelligent data extraction and automated document processing using Azure AI services.',
    images: [], // Omit image block entirely (no placeholder)
    technologies: ['Azure AI', 'Document Intelligence', 'Python', 'CI/CD', 'Full-Stack Development'],
    featured: false,
    category: 'ai',
  },
  {
    title: 'Satellite Mission Design & Test Unit',
    description: 'Senior design project developing a debris identification and retrieval satellite system with integrated visual guidance and navigation.',
    images: [
      '/projects/rendered-dtu.png',
      '/projects/mid-mission-image.png',
      '/projects/moon-mission-image.jpg',
    ],
    technologies: ['Raspberry Pi', 'Python', 'Computer Vision', 'Gyroscope Systems', 'GUI Development'],
    githubUrl: 'https://github.com/colin-sears/senior-design-satellite',
    featured: true,
    category: 'engineering',
  },
  {
    title: 'Constrained Multiple-Revolution Lambert Problem',
    description: 'Research project implementing and verifying numerical solutions for orbital mechanics calculations using MATLAB.',
    images: [null], // No image available
    technologies: ['MATLAB', 'LaTeX', 'Orbital Mechanics', 'Numerical Analysis'],
    featured: false,
    category: 'engineering',
  },
  {
    title: 'Drone Controller & Microcontroller API',
    description: 'Constructed a drone controller using embedded C++ and developed microcontroller API for cross-team integration.',
    images: [], // Omit image block entirely (no placeholder)
    technologies: ['C++', 'Embedded Systems', 'API Development', 'Hardware Integration'],
    featured: false,
    category: 'engineering',
  },
  {
    title: 'University Web Services',
    description: 'Full-stack web applications developed for Iowa State University clients using Laravel framework.',
    images: [], // Omit image block entirely (no placeholder)
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Git', 'Jira'],
    featured: false,
    category: 'web',
  },
  // TODO: Add more projects as they are developed
  // To add a new project, copy the template below:
  // {
  //   title: 'Project Name',
  //   description: 'Brief description of the project and its purpose',
  //   images: ['/projects/project-1.jpg', '/projects/project-2.jpg'], // Add images to public/projects/, use [null] if no image
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  //   githubUrl: 'https://github.com/yourusername/project', // Optional
  //   liveUrl: 'https://project-demo.com', // Optional
  //   featured: true, // true for highlighted projects
  //   category: 'web' | 'ai' | 'engineering' | 'mobile',
  // },
];
