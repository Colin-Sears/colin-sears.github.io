'use client';

import { motion } from 'framer-motion';
import { GitBranch, GitCommit, Star, Users } from 'lucide-react';

export default function GitHubActivity() {
  // TODO: Replace with real GitHub API data
  const stats = {
    totalCommits: 1250,
    publicRepos: 42,
    contributions: 856,
    stars: 234,
  };

  const statItems = [
    { label: 'Total Commits', value: stats.totalCommits, icon: GitCommit },
    { label: 'Public Repos', value: stats.publicRepos, icon: GitBranch },
    { label: 'Contributions', value: stats.contributions, icon: Users },
    { label: 'Stars Earned', value: stats.stars, icon: Star },
  ];

  return (
    <section id="github" className="py-section px-8">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-section font-bold mb-16"
        >
          GitHub Activity
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <stat.icon size={32} className="text-gray-400" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                className="text-5xl md:text-6xl font-black mb-2"
              >
                {stat.value.toLocaleString()}
              </motion.div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Heatmap Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6">Contribution Graph</h3>
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center min-h-[200px]">
            <p className="text-gray-500">
              GitHub contribution heatmap coming soon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
