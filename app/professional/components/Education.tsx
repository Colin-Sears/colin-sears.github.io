'use client';

import { motion } from 'framer-motion';
import { education } from '@/lib/data/education';

export default function Education() {
  return (
    <section id="education" className="py-section px-4 sm:px-6 md:px-8">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-section font-bold mb-10 sm:mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-10 sm:space-y-14 lg:space-y-16">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${edu.dates}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="border-b border-gray-200 pb-10 sm:pb-14 lg:pb-16 last:border-b-0"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{edu.institution}</h3>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4">
                <p className="text-lg sm:text-xl font-medium text-gray-700">{edu.program}</p>
                <span className="hidden md:inline text-gray-400">•</span>
                <p className="text-base sm:text-lg text-gray-500">
                  {edu.location ? `${edu.location} · ` : ''}
                  {edu.dates}
                </p>
              </div>

              {edu.details && edu.details.length > 0 && (
                <ul className="space-y-3">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-gray-400 mt-1">—</span>
                      <span className="text-gray-700 flex-1">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
