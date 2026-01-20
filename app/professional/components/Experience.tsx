'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data/experience';

export default function Experience() {
  const formatDate = (date: string) => {
    if (date === 'Present') return 'Present';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experience" className="py-section px-4 sm:px-6 md:px-8">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-section font-bold mb-10 sm:mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-10 sm:space-y-14 lg:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.startDate}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="border-b border-gray-200 pb-10 sm:pb-14 lg:pb-16 last:border-b-0"
            >
              {/* Company & Role */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{exp.company}</h3>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4">
                <p className="text-lg sm:text-xl font-medium text-gray-700">{exp.role}</p>
                <span className="hidden md:inline text-gray-400">•</span>
                <p className="text-base sm:text-lg text-gray-500">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-6 max-w-3xl">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-gray-400 mt-1">—</span>
                    <span className="text-gray-700 flex-1">{achievement}</span>
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
