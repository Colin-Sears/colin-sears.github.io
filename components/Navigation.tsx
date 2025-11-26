'use client';

import { useMode } from '@/lib/ModeContext';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { motion, useReducedMotion } from 'framer-motion';
import { useBoot } from '@/components/BootContext';

export default function Navigation() {
  const { mode, toggleMode } = useMode();
  const isPersonal = mode === 'personal';
  const prefersReducedMotion = useReducedMotion();
  const { bootActive } = useBoot();

  return (
    <motion.nav
      initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
      animate={{ 
        opacity: bootActive ? 0 : 1, 
        y: 0,
        backgroundColor: isPersonal ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 1)',
        borderBottomColor: isPersonal ? 'rgba(139, 92, 246, 0.3)' : 'rgba(229, 231, 235, 1)',
        color: isPersonal ? 'rgba(237, 233, 254, 1)' : 'rgba(0, 0, 0, 1)',
      }}
      style={{ 
        pointerEvents: bootActive ? 'none' : 'auto',
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
      aria-label="Primary"
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <a href="/" className="text-lg md:text-xl font-bold tracking-tight hover:opacity-60 transition-opacity">
          {SITE_CONFIG.name.split(' ').map(n => n[0]).join('')}
        </a>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS[mode].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 transition-colors"
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-0 h-[1px] ${
                  isPersonal ? 'bg-purple-400' : 'bg-current'
                } transition-all duration-300 group-hover:w-full`}
              />
            </a>
          ))}
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMode}
            className="relative flex items-center gap-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 touch-manipulation"
            aria-label="Toggle work and play modes"
            role="switch"
            aria-checked={mode === 'personal'}
          >
            <span className={mode === 'professional' ? 'opacity-100' : 'opacity-40'}>
              Work
            </span>
            <span className={isPersonal ? 'text-gray-600' : 'text-gray-400'}>/</span>
            <span className={mode === 'personal' ? 'opacity-100' : 'opacity-40'}>
              Play
            </span>
            <motion.div
              className={`absolute bottom-0 h-[1px] ${isPersonal ? 'bg-purple-400' : 'bg-black'}`}
              initial={false}
              animate={{
                left: mode === 'professional' ? '0%' : '62%',
                width: mode === 'professional' ? '38%' : '38%',
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
