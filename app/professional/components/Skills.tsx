'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-section px-4 sm:px-6 md:px-8">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-section font-bold mb-10 sm:mb-16"
        >
          What I Work With
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li
                    key={item}
                    className="text-base sm:text-lg text-gray-700 hover:text-black transition-colors cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
