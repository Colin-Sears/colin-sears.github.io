'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data/projects';
import { ExternalLink, Github } from 'lucide-react';
import ProjectImageCarousel from '@/components/ProjectImageCarousel';

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
  <section id="projects" className="py-section px-8">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-section font-bold mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              {/* Project Image Carousel (only render if images array not empty) */}
              {project.images.length > 0 && (
                <div className="mb-8">
                  <ProjectImageCarousel
                    images={project.images}
                    projectTitle={project.title}
                    showPlaceholder={project.images.every(img => img === null)}
                  />
                </div>
              )}

              {/* Project Info */}
              <h3 className="text-project font-bold mb-4">{project.title}</h3>
              <p className="text-xl text-gray-700 mb-6 max-w-3xl">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg font-medium hover:opacity-60 transition-opacity"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg font-medium hover:opacity-60 transition-opacity"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
