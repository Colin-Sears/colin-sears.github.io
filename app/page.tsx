'use client';

import { useEffect } from 'react';
import { useMode } from '@/lib/ModeContext';
import ProfessionalPage from './professional/page';
import PersonalPage from './personal/page';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  const { mode } = useMode();

  return (
    <PageTransition>
      {mode === 'professional' ? <ProfessionalPage /> : <PersonalPage />}
    </PageTransition>
  );
}
