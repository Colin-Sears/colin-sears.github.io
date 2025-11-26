'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function BackgroundTextPortal() {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [yPositions, setYPositions] = useState<number[]>([]);
  const [hexIndex, setHexIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Messages to place through the document height
  const messages = useMemo(
    () => [
      {
        id: 'boot',
        align: 'left' as const,
        x: 48, // px from left
        content:
          `> SYSTEM_BOOT_SEQUENCE_INIT\n> LOADING_CREATIVE_DATABASES\n> MEMORY_ALLOCATION_COMPLETE\n> ARCHIVES_MOUNTED_SUCCESSFULLY`,
      },
      {
        id: 'dbstatus',
        align: 'right' as const,
        x: 80, // px from right
        content:
          `[LORE.DB] STATUS: ACTIVE\n[GAMES.DB] STATUS: ACTIVE\n[PROJECTS.DB] STATUS: ACTIVE`,
      },
      {
        id: 'hex',
        align: 'left' as const,
        x: 32,
        content:
          `0x4A2F 0x8B1C 0x9F3D 0x2E4A\n0x7C8E 0x1D9F 0x5B2C 0x3F7A\n0x6E1B 0xA4C9 0x8D2F 0x1C5E`,
      },
      {
        id: 'runtime',
        align: 'right' as const,
        x: 128,
        content: `UPTIME: 892347 CYCLES\nMEMORY: 1847/2048 MB\nTHREADS: NOMINAL`,
      },
      {
        id: 'info',
        align: 'left' as const,
        x: 96,
        content:
          `[INFO] Session initialized\n[INFO] User context loaded\n[INFO] Rendering engine: ACTIVE`,
      },
      {
        id: 'footer',
        align: 'right' as const,
        x: 48,
        content:
          `>> CREATIVE_OPS_v2.7.4\n>> PROTOCOL: HOBBY_STREAM\n>> ACCESS_LEVEL: UNRESTRICTED`,
      },
    ],
    []
  );

  // Rotating hex pools
  const HEX_SETS = useMemo(
    () => [
      `0x4A2F 0x8B1C 0x9F3D 0x2E4A\n0x7C8E 0x1D9F 0x5B2C 0x3F7A\n0x6E1B 0xA4C9 0x8D2F 0x1C5E`,
      `0xDEAD 0xBEEF 0xC0DE 0xFEED\n0xABCD 0x1234 0xFACE 0xB00B\n0x0BAD 0xF00D 0xCABA 0xC1A0`,
      `0xA1B2 0xC3D4 0xE5F6 0x1020\n0x3344 0x5566 0x7788 0x99AA\n0xBBCC 0xDDEE 0xFF00 0x11EE`,
      `0x6F6E 0x6572 0x6465 0x6666\n0x6163 0x6F72 0x6D73 0x6B79\n0x7061 0x7273 0x6572 0x2121`,
      `0x7E11 0x5C0F 0x3A7D 0x9C31\n0x8E77 0x2B4D 0x6ACF 0x0193\n0x5D2A 0xF8C4 0x0E0E 0xAA77`,
    ],
    []
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      // Keep a stable hex set without rotation when reduced motion is requested
      setHexIndex(0);
      return;
    }
    const id = window.setInterval(() => {
      setHexIndex((i) => (i + 1) % HEX_SETS.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [HEX_SETS.length, prefersReducedMotion]);

  // Create body-level container for the background text layer
  useEffect(() => {
    setMounted(true);
    const el = document.createElement('div');
    // Layer is part of the document flow (scrolls with page) and behind content
    el.style.position = 'absolute';
    el.style.left = '0';
    el.style.top = '0';
    el.style.width = '100%';
    el.style.zIndex = '0';
    el.style.pointerEvents = 'none';
    document.body.appendChild(el);
    setContainer(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  // Compute vertical positions distributed across the total document height
  useEffect(() => {
    function computePositions() {
      const H = document.documentElement.scrollHeight;
      const vh = window.innerHeight;

      // Keep a safe band above the footer so earlier messages don't collide
      const safeBottom = Math.max(0, H - vh - 160);

      // First two should never be visible on the first screen
      const first = Math.min(safeBottom - 480, vh + 360);
      const second = Math.min(safeBottom - 320, vh + 720);

      // Remaining mid-page entries distributed by fractions, clamped above the footer band
      const midFractions = [0.45, 0.65, 0.78];
      const mids = midFractions.map((f) => Math.min(safeBottom - 120, Math.max(80, Math.floor(H * f))));

      // Footer pinned very near the bottom so it appears at page end
      const bottomPinned = Math.max(32, H - vh - 32);

      setYPositions([first, second, ...mids, bottomPinned]);
    }
    computePositions();
    window.addEventListener('resize', computePositions);
    // Recompute on font load/late layout as a best-effort
    const id = window.setTimeout(computePositions, 200);
    return () => {
      window.removeEventListener('resize', computePositions);
      window.clearTimeout(id);
    };
  }, []);

  if (!mounted || !container) return null;

  return createPortal(
    <div className="relative w-full overflow-visible opacity-[0.08] font-mono text-xs text-purple-300 leading-relaxed select-none">
      {messages.map((msg, i) => {
        const isGlitch = msg.id === 'dbstatus' || msg.id === 'footer';
        const isHex = msg.id === 'hex';
        const content = isHex ? HEX_SETS[hexIndex] : msg.content;

        return (
          <motion.pre
            key={msg.id}
            className={
              'absolute whitespace-pre ' +
              (msg.align === 'right' ? 'text-right' : 'text-left') +
              (isGlitch && !prefersReducedMotion ? ' cc-glitch-subtle' : '')
            }
            style={{
              top: yPositions[i] ?? 0,
              left: msg.align === 'left' ? msg.x : undefined,
              right: msg.align === 'right' ? msg.x : undefined,
            }}
            initial={{ opacity: 0.7 }}
            animate={isHex && !prefersReducedMotion ? { opacity: [0.6, 0.9, 0.6] } : undefined}
            transition={
              isHex && !prefersReducedMotion
                ? { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
                : undefined
            }
          >
            {content}
          </motion.pre>
        );
      })}
      <style jsx global>{`
        @keyframes cc-distort-subtle {
          0%, 100% { transform: none; filter: none; text-shadow: none; }
          10% { transform: skewX(0.4deg) translateX(0.4px); }
          20% { transform: skewX(-0.5deg) translateX(-0.4px); }
          30% { transform: none; }
          45% { transform: skewY(0.4deg); }
          55% { transform: none; }
          60% { text-shadow: -1px 0 rgba(139,92,246,0.2), 1px 0 rgba(59,130,246,0.2); }
          70% { text-shadow: none; }
          85% { transform: translateY(0.2px); }
        }
        .cc-glitch-subtle {
          animation: cc-distort-subtle 5s infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .cc-glitch-subtle {
            animation: none !important;
          }
        }
      `}</style>
    </div>,
    container
  );
}
