'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Hero from '@/app/personal/components/Hero';
import TabletopGames from '@/app/personal/components/TabletopGames';
import LoreDocuments from '@/app/personal/components/LoreDocuments';
import CreativeProjects from '@/app/personal/components/CreativeProjects';
import BackgroundTextPortal from '@/app/personal/components/BackgroundTextPortal';

export default function PersonalPage() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <main id="main-content" className="relative overflow-x-hidden">
      {/* Persistent gritty sci-fi background */}
      <div className="fixed inset-0 -z-10 bg-black">
        {/* Static noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Static grid - main structure */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Very subtle scan line - slow, intentional (disabled on reduced motion) */}
        {prefersReducedMotion ? (
          <div className="absolute inset-x-0 top-1/2 h-px bg-purple-500/10" />
        ) : (
          <motion.div
            className="absolute inset-x-0 h-px bg-purple-500/10"
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
          />
        )}

        {/* Subtle flickering vignette (static on reduced motion) */}
        {prefersReducedMotion ? (
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
              opacity: 0.62,
            }}
          />
        ) : (
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
            }}
            animate={{ opacity: [0.6, 0.65, 0.6, 0.7, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, times: [0, 0.2, 0.5, 0.8, 1], ease: 'easeInOut' }}
          />
        )}

        {/* Ambient purple glow - very subtle, static position */}
        <div
          className="absolute w-[1000px] h-[800px] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] bottom-1/4 right-1/4 rounded-full blur-[180px] opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>
      <BackgroundTextPortal />

      <Hero />
      <TabletopGames />
      <LoreDocuments />
      <CreativeProjects />
    </main>
  );
}
