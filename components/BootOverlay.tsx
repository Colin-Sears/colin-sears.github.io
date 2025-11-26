'use client';

import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import { useMode } from '@/lib/ModeContext';
import { useBoot } from '@/components/BootContext';

export default function BootOverlay() {
  const { mode } = useMode();
  const prefersReducedMotion = useReducedMotion();
  const [show, setShow] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const { setBootActive } = useBoot();

  const bootLines = useMemo(
    () => [
      '> SYSTEM_BOOT_SEQUENCE_INIT',
      '> MOUNTING_ARCHIVES ... OK',
      '> NETWORK_STACK ... OK',
      '> RENDER_ENGINE ... OK',
      '> SYSTEMS ONLINE',
      '> ARCHIVES ACCESSIBLE',
    ],
    []
  );

  useEffect(() => {
    // Only run when play/personal mode is enabled
    if (mode !== 'personal') {
      setShow(false);
      setBootActive(false);
      return;
    }
    // Show overlay and step through lines
    setShow(true);
    setBootActive(true);
    if (prefersReducedMotion) {
      setVisibleLines(bootLines.length);
      const t = window.setTimeout(() => {
        setShow(false);
        setBootActive(false);
      }, 300);
      return () => window.clearTimeout(t);
    }
    let i = 0;
    const step = () => {
      i += 1;
      setVisibleLines(i);
      if (i < bootLines.length) {
        timer = window.setTimeout(step, 220);
      } else {
        timer = window.setTimeout(() => {
          setShow(false);
          setBootActive(false);
        }, 600);
      }
    };
    let timer = window.setTimeout(step, 220);
    return () => {
      window.clearTimeout(timer);
      setBootActive(false);
    };
  }, [mode, prefersReducedMotion, bootLines]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/92 text-purple-300 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      aria-live="polite"
      role="status"
    >
      <div className="w-full max-w-2xl px-6 font-mono text-sm select-none">
        <div className="mb-4 text-purple-400/80 tracking-widest">[ BOOT LOG ]</div>
        <pre className="whitespace-pre-wrap leading-relaxed">
          {bootLines.slice(0, visibleLines).join('\n')}
          {!prefersReducedMotion && (
            <span className="inline-block w-2 h-4 align-baseline bg-purple-500 ml-1 animate-pulse" />
          )}
        </pre>
      </div>
    </motion.div>
  );
}
