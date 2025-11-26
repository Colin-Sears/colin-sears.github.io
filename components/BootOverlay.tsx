'use client';

import { useEffect } from 'react';
import { useBoot } from '@/components/BootContext';

export default function BootOverlay() {
  const { setBootActive } = useBoot();

  useEffect(() => {
    // Boot overlay disabled for professional-only site
    setBootActive(false);
  }, [setBootActive]);

  return null;
}
