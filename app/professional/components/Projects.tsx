'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data/projects';
import { ExternalLink, Github } from 'lucide-react';
import ProjectImageCarousel from '@/components/ProjectImageCarousel';
import { Project } from '@/lib/types';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 border border-gray-200 hover:border-gray-300 transition-colors"
    >
      <div className="flex items-center gap-2 mb-2">
        <h4 className="text-xl font-bold">{project.title}</h4>
        {project.inprogress && (
          <span className="text-xs text-gray-500">(WIP)</span>
        )}
      </div>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium hover:opacity-60 transition-opacity"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium hover:opacity-60 transition-opacity"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

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
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-project font-bold">{project.title}</h3>
                {project.inprogress && (
                  <span className="text-lg text-gray-500">(WIP)</span>
                )}
              </div>
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

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mt-32 mb-10"
            >
              Other Projects
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
