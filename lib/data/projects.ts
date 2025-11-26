import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Satellite Mission Design & Test Unit',
    description: 'Senior design project developing a debris identification and retrieval satellite system with integrated visual guidance and navigation.',
    image: '/projects/satellite.jpg', // TODO: Add project image
    technologies: ['Raspberry Pi', 'Python', 'Computer Vision', 'Gyroscope Systems', 'GUI Development'],
    featured: true,
    category: 'engineering',
  },
  {
    title: 'Constrained Multiple-Revolution Lambert Problem',
    description: 'Research project implementing and verifying numerical solutions for orbital mechanics calculations using MATLAB.',
    image: '/projects/lambert.jpg', // TODO: Add project image
    technologies: ['MATLAB', 'LaTeX', 'Orbital Mechanics', 'Numerical Analysis'],
    featured: true,
    category: 'engineering',
  },
  {
    title: 'Drone Controller & Microcontroller API',
    description: 'Constructed a drone controller using embedded C++ and developed microcontroller API for cross-team integration.',
    image: '/projects/drone.jpg', // TODO: Add project image
    technologies: ['C++', 'Embedded Systems', 'API Development', 'Hardware Integration'],
    featured: true,
    category: 'engineering',
  },
  {
    title: 'Azure AI Document Intelligence Solutions',
    description: 'Custom models for intelligent data extraction and automated document processing using Azure AI services.',
    image: '/projects/azure-ai.jpg', // TODO: Add project image
    technologies: ['Azure AI', 'Document Intelligence', 'Python', 'CI/CD', 'Full-Stack Development'],
    featured: true,
    category: 'ai',
  },
  {
    title: 'University Web Services',
    description: 'Full-stack web applications developed for Iowa State University clients using Laravel framework.',
    image: '/projects/isu-web.jpg', // TODO: Add project image
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Git', 'Jira'],
    featured: false,
    category: 'web',
  },
  // TODO: Add more projects as they are developed
  // To add a new project, copy the template below:
  // {
  //   title: 'Project Name',
  //   description: 'Brief description of the project and its purpose',
  //   image: '/projects/project-name.jpg', // Add image to public/projects/
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  //   githubUrl: 'https://github.com/yourusername/project', // Optional
  //   liveUrl: 'https://project-demo.com', // Optional
  //   featured: true, // true for highlighted projects
  //   category: 'web' | 'ai' | 'engineering' | 'mobile',
  // },
];
