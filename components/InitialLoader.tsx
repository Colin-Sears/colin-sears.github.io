'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function InitialLoader() {
  const shouldReduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Skip global initial loader on personal side to avoid double overlays; BootOverlay will handle it
    if (pathname?.startsWith('/personal')) return;
    // Only show once per tab session
    const seen = sessionStorage.getItem('init-loader-shown');
    if (!seen) {
      setShow(true);
      sessionStorage.setItem('init-loader-shown', '1');
      const t = window.setTimeout(() => setShow(false), shouldReduce ? 200 : 900);
      return () => window.clearTimeout(t);
    }
  }, [shouldReduce]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-black/90 text-purple-300 flex items-center justify-center font-mono select-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: shouldReduce ? 0.1 : 0.6, delay: shouldReduce ? 0 : 0.4 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduce ? 0.1 : 0.4 }}
        className="text-center"
      >
        <div className="text-xs tracking-widest mb-2">[ SYSTEM INIT ]</div>
        <div className="text-2xl md:text-3xl font-bold">CREATIVE OPERATIONS</div>
      </motion.div>
    </motion.div>
  );
}
