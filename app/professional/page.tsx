'use client';

import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import Hero from './components/Hero';
import GitHubActivity from './components/GitHubActivity';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

// Metadata for professional page
// Note: Since this is a client component, metadata should be moved to layout or use a separate wrapper
// For now, keeping this structure but noting metadata won't apply in client components

export default function ProfessionalPage() {
  return (
    <main className="bg-white text-black">
      <Hero title={SITE_CONFIG.name} subtitle={SITE_CONFIG.tagline} />
      <GitHubActivity />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
