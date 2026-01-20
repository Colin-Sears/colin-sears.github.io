'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-section px-4 sm:px-6 md:px-8">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-section font-bold mb-10 sm:mb-16"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Email */}
          <button
            onClick={copyEmail}
            className="group relative inline-block mb-10 sm:mb-12"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold break-all sm:break-normal hover:opacity-60 transition-opacity">
              {SITE_CONFIG.email}
            </h3>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full" />
            
            {/* Copy Feedback */}
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-8 left-0 text-sm text-gray-600"
              >
                Copied to clipboard!
              </motion.span>
            )}
          </button>

          {/* Social Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg sm:text-xl font-medium w-fit"
            >
              <Github size={24} />
              <span className="relative">
                GitHub
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
              </span>
            </a>

            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg sm:text-xl font-medium w-fit"
            >
              <Linkedin size={24} />
              <span className="relative">
                LinkedIn
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
