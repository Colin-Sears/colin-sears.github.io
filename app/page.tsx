'use client';

import { useEffect, useState } from 'react';
import { useMode } from '@/lib/ModeContext';
import ProfessionalPage from './professional/page';
import PersonalPage from './personal/page';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  const { mode } = useMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always show professional on initial render to prevent flash
  if (!mounted) {
    return (
      <PageTransition>
        <ProfessionalPage />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {mode === 'professional' ? <ProfessionalPage /> : <PersonalPage />}
    </PageTransition>
  );
}
