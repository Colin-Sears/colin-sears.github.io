'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function GitHubActivity() {
  // Extract username from GitHub URL
  const username = SITE_CONFIG.github.split('/').pop() || 'colin-sears';

  return (
    <section id="github" className="py-section px-4 sm:px-6 md:px-8">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10 sm:mb-12"
        >
          <h2 className="text-section font-bold">GitHub Activity</h2>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base sm:text-lg font-medium hover:opacity-60 transition-opacity"
          >
            <span>View Profile</span>
            <ExternalLink size={20} />
          </a>
        </motion.div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 border border-gray-200 overflow-hidden"
        >
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt={`${username}'s GitHub contribution chart`}
            className="w-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
