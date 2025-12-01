'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-8 md:h-10 flex items-center"
    >
      <div className="w-full h-px bg-gradient-to-r from-white via-gray-200 to-white" />
    </motion.div>
  );
}
