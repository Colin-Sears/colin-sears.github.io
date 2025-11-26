'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { loreDocuments, loreCategoryLabels } from '@/lib/data/lore';
import { LoreDocument } from '@/lib/types/personal';
import { FileText, Calendar, Database } from 'lucide-react';

function LoreCard({ doc, index }: { doc: LoreDocument; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="group relative"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      <div className="relative bg-[#0f0f0f] border border-gray-800 hover:border-purple-500/50 transition-colors h-full overflow-hidden">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Diagonal line pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 92, 246, 0.1) 10px, rgba(139, 92, 246, 0.1) 11px)',
          }}
        />
        
        {/* Top accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        
        {/* Header */}
        <div className="p-5 border-b border-gray-800">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg font-bold text-white leading-tight">
              {doc.title}
            </h3>
            {doc.featured && (
              <div className="text-purple-400 text-sm">★</div>
            )}
          </div>
          
          <div className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 border border-purple-500/30 inline-block">
            {loreCategoryLabels[doc.category].toUpperCase()}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {doc.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-gray-500 font-mono pt-2 border-t border-gray-800">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(doc.updatedDate).toLocaleDateString()}</span>
            </div>
            {doc.relatedDocs && doc.relatedDocs.length > 0 && (
              <div className="flex items-center gap-1">
                <Database className="w-3 h-3" />
                <span>{doc.relatedDocs.length} linked</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {doc.tags && doc.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {doc.tags.map((tag: string) => (
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

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-purple-500/30" />
      </div>
    </motion.div>
  );
}

export default function LoreDocuments() {
  const [filter, setFilter] = useState<string>('all');
  const prefersReducedMotion = useReducedMotion();

  const filteredDocs =
    filter === 'all'
      ? loreDocuments
      : loreDocuments.filter((doc) => doc.category === filter);

  const categories = [
    { key: 'all', label: 'ALL' },
    ...Object.entries(loreCategoryLabels).map(([key, label]) => ({
      key,
      label: label.toUpperCase(),
    })),
  ];

  return (
    <section className="relative py-24 px-6 bg-transparent">
      {/* Subtle texture layer */}
      <div className="absolute inset-0 opacity-[0.008]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(139, 92, 246, 0.05) 0px, transparent 1px, transparent 3px)',
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
            [ ARCHIVE ACCESS ]
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-none tracking-tight">
            LORE
            <br />
            <span className="text-purple-500">DATABASE</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-500 via-transparent to-transparent max-w-md mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl">
            Campaign worlds, characters, and narrative archives
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              aria-pressed={filter === category.key}
              className={`px-4 py-2 min-h-[44px] text-xs font-mono transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40 touch-manipulation ${
                filter === category.key
                  ? 'bg-purple-500 text-black border-purple-500'
                  : 'bg-transparent text-gray-400 border-gray-800 hover:border-purple-500/50 hover:text-purple-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Documents grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc, index) => (
            <LoreCard key={doc.id} doc={doc} index={index} />
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <motion.div
            className="text-center py-20 border border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600 text-sm font-mono">
              [ NO RECORDS FOUND ]
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
