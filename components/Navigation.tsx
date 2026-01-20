'use client';

import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { motion, useReducedMotion } from 'framer-motion';
import { useBoot } from '@/components/BootContext';

export default function Navigation() {
  const prefersReducedMotion = useReducedMotion();
  const { bootActive } = useBoot();

  return (
    <motion.nav
      initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
      animate={{ 
        opacity: bootActive ? 0 : 1, 
        y: 0,
      }}
      style={{ 
        pointerEvents: bootActive ? 'none' : 'auto',
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b bg-white border-gray-200"
      aria-label="Primary"
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <a href="/" className="text-lg md:text-xl font-bold tracking-tight hover:opacity-60 transition-opacity">
          {SITE_CONFIG.name.split(' ').map(n => n[0]).join('')}
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto whitespace-nowrap pb-1">
          {NAV_LINKS.professional.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm font-medium relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 transition-colors"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
