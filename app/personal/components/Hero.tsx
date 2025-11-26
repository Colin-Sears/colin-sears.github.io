'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Boot overlay removed; now handled globally in BootOverlay */}
      {/* Subtle local glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Corner brackets - top left */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 border-l-2 border-t-2 md:border-l-4 md:border-t-4 border-purple-500" />
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 border-l border-t md:border-l-2 md:border-t-2 border-purple-400/50 translate-x-1 translate-y-1" />
      
      {/* Corner brackets - top right */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 border-r-2 border-t-2 md:border-r-4 md:border-t-4 border-purple-500" />
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 border-r border-t md:border-r-2 md:border-t-2 border-purple-400/50 -translate-x-1 translate-y-1" />
      
      {/* Corner brackets - bottom left */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-16 md:h-16 border-l-2 border-b-2 md:border-l-4 md:border-b-4 border-purple-500" />
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-16 md:h-16 border-l border-b md:border-l-2 md:border-b-2 border-purple-400/50 translate-x-1 -translate-y-1" />
      
      {/* Corner brackets - bottom right */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 border-r-2 border-b-2 md:border-r-4 md:border-b-4 border-purple-500" />
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 border-r border-b md:border-r-2 md:border-b-2 border-purple-400/50 -translate-x-1 -translate-y-1" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl">
        {/* System label */}
        <motion.div
          className="mb-4 md:mb-6 text-purple-400 text-xs md:text-sm font-mono tracking-widest uppercase"
          initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          [ PERSONAL SYSTEMS ]
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 md:mb-6 leading-none tracking-tighter">
            CREATIVE
            <br />
            <span className="text-purple-500">OPERATIONS</span>
          </h1>
        </motion.div>

        {/* Divider line */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6 md:mb-8"
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          animate={prefersReducedMotion ? undefined : { scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto px-4"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Tabletop campaigns / World-building / Creative projects
        </motion.p>

        {/* Status indicators */}
        <motion.div
          className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm font-mono"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 bg-purple-500 rounded-full ${prefersReducedMotion ? '' : 'animate-pulse'}`} />
            <span className="text-gray-500">SYSTEMS ONLINE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <span className="text-gray-500">ARCHIVES ACCESSIBLE</span>
          </div>
        </motion.div>

        {/* Scroll indicator placed below status indicators */}
        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: [0, 10, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }
          }
        >
          <span className="text-purple-500/60 text-xs font-mono tracking-wider uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-purple-500/60 to-transparent" />
        </motion.div>
      </div>

      {/* Tech detail - static hex pattern */}
      <div className="absolute top-1/2 left-12 text-purple-500/5 text-6xl font-mono hidden lg:block select-none">
        ⬡⬢⬡
      </div>
      <div className="absolute top-1/3 right-12 text-purple-500/5 text-6xl font-mono hidden lg:block select-none">
        ⬢⬡⬢
      </div>
      {/* Removed the single hexagon as requested */}

      {/* Subtle flickering status text */}
      <motion.div
        className="absolute top-24 left-24 font-mono text-xs text-purple-400/40 hidden lg:block select-none"
        animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.4, 0.35, 0.45, 0.35] }}
        transition={prefersReducedMotion ? undefined : { duration: 12, repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1] }}
      >
        {'>'} SYS.INIT_OK
        <br />
        {'>'} MEM.LOAD_75%
        <br />
        {'>'} NET.ACTIVE
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-24 font-mono text-xs text-purple-400/40 text-right hidden lg:block select-none"
        animate={prefersReducedMotion ? undefined : { opacity: [0.4, 0.35, 0.4, 0.35, 0.4] }}
        transition={prefersReducedMotion ? undefined : { duration: 10, repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1] }}
      >
        UPTIME: 99.9%
        <br />
        LATENCY: 12ms
        <br />
        STATUS: OPTIMAL
      </motion.div>
    </section>
  );
}
