'use client';

import { ReactNode } from 'react';
import PageTransition from '@/components/PageTransition';
import BootOverlay from './BootOverlay';
import { motion } from 'framer-motion';
import { useBoot } from '@/components/BootContext';

export default function ClientRoot({ children }: { children: ReactNode }) {
  const { bootActive } = useBoot();
  return (
    <>
      {/* Personal side boot log overlay (covers entire UI, including nav) */}
      <BootOverlay />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bootActive ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <PageTransition>{children}</PageTransition>
      </motion.div>
    </>
  );
}
