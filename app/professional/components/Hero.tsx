'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Split title into characters for animation
  const titleChars = title.split('');

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="max-w-content mx-auto w-full">
        {/* Animated Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-hero font-black tracking-tight overflow-hidden">
          {titleChars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
              style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.3 + titleChars.length * 0.03 + 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-5 md:mt-6 max-w-2xl text-gray-700"
        >
          {subtitle}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.3 + titleChars.length * 0.03 + 0.5,
          }}
          className="mt-10 sm:mt-14 md:mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-sm text-gray-400 font-medium"
          >
            Scroll
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
