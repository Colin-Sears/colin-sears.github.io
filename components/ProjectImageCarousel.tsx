'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectImageCarouselProps {
  images: (string | null)[];
  projectTitle: string;
  /** If true, show a placeholder when no valid images are present */
  showPlaceholder?: boolean;
}

export default function ProjectImageCarousel({ images, projectTitle, showPlaceholder = false }: ProjectImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Filter out null images for navigation
  const validImages = images.filter((img): img is string => img !== null);
  const hasMultipleImages = validImages.length > 1;
  const noValidImages = validImages.length === 0;

  // If there are NO image entries at all, render nothing (omit block entirely)
  if (images.length === 0) return null;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full aspect-[16/9] rounded-sm overflow-hidden bg-white border border-gray-200"
    >
      <AnimatePresence mode="wait" initial={false}>
        {noValidImages && showPlaceholder ? (
          <motion.div
            key="no-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex items-center justify-center bg-gray-100"
          >
            <div className="text-center">
              <p className="text-gray-600 text-base font-medium mb-1 tracking-wide uppercase">{projectTitle}</p>
              <p className="text-gray-400 text-xs">Image Coming Soon</p>
            </div>
          </motion.div>
        ) : !noValidImages ? (
          // Image display
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={validImages[currentIndex]}
              alt={`${projectTitle} - Image ${currentIndex + 1}`}
              fill
              priority={currentIndex === 0}
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1400px"
              quality={90}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Navigation buttons - only show if multiple images */}
      {hasMultipleImages && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {validImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  index === currentIndex
                    ? 'bg-black w-8'
                    : 'bg-black/30 hover:bg-black/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Image counter - only show if multiple images */}
      {hasMultipleImages && (
        <div className="absolute top-4 right-4 bg-white/80 text-black px-3 py-1 rounded-full text-xs font-medium border border-gray-300">
          {currentIndex + 1} / {validImages.length}
        </div>
      )}
    </div>
  );
}
