'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { creativeProjects, projectTypeLabels } from '@/lib/data/creative';
import { CreativeProject } from '@/lib/types/personal';
import { Palette, Music, BookOpen, Layers } from 'lucide-react';

const typeIcons = {
  art: Palette,
  writing: BookOpen,
  worldbuilding: Layers,
  music: Music,
  other: Layers,
};

function ProjectCard({ project, index }: { project: CreativeProject; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = typeIcons[project.type];

  return (
    <motion.div
      className="relative group"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      <div className="relative bg-[#0f0f0f] border border-gray-800 hover:border-purple-500/50 transition-colors h-full overflow-hidden">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Top accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        
        <div className="p-6 space-y-4">
          {/* Icon and type */}
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
              <Icon className="w-6 h-6 text-purple-400" strokeWidth={2} />
            </div>
            <span className="text-xs font-mono text-gray-500">
              {projectTypeLabels[project.type].toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-600 font-mono border border-gray-800 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom corner accent */}
        <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-purple-500/30" />
        <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-purple-500/30" />
      </div>
    </motion.div>
  );
}

export default function CreativeProjects() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative py-24 px-6 bg-transparent">
      {/* Subtle texture layer */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(139, 92, 246, 0.08) 0px, transparent 1px, transparent 40px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-3 text-purple-400 text-xs font-mono tracking-widest">
            [ PROJECT FILES ]
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-none tracking-tight">
            CREATIVE
            <br />
            <span className="text-purple-500">WORKS</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-500 via-transparent to-transparent max-w-md mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl">
            Art, writing, and experimental projects
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {creativeProjects.length === 0 && (
          <motion.div
            className="text-center py-20 border border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600 text-sm font-mono">
              [ NO FILES AVAILABLE ]
            </p>
          </motion.div>
        )}

        {/* System info footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6 text-xs font-mono text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500/50" />
              <span>SYSTEM STATUS: OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500/50" />
              <span>PROJECTS LOADED: {creativeProjects.length}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
