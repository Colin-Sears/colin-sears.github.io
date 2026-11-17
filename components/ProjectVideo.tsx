'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface ProjectVideoProps {
  src: string;
  poster?: string;
  projectTitle: string;
}

/** Silent, looping walkthrough video. Plays automatically unless the viewer prefers reduced motion. */
export default function ProjectVideo({ src, poster, projectTitle }: ProjectVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React doesn't put `muted` in prerendered HTML, so set it here before playing
    video.muted = true;
    if (reduceMotion) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [reduceMotion]);

  return (
    <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden border border-gray-200 bg-black">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        controls={!!reduceMotion}
        aria-label={`${projectTitle} walkthrough video`}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
