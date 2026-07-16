import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { IGalleryImage } from '@/data/gallery';
import { Image } from '@/components/ui/image';

interface LightboxProps {
  images: IGalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  landscape: '风景',
  portrait: '人像',
  architecture: '建筑',
  still_life: '静物',
  street: '街拍',
};

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const current = images[currentIndex];

  if (!current) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 size-10 md:size-11 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
            aria-label="关闭"
          >
            <X className="size-5" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 size-10 md:size-12 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
            aria-label="上一张"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 size-10 md:size-12 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
            aria-label="下一张"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Image container */}
          <div
            className="relative w-full h-full flex items-center justify-center px-12 md:px-20 py-16"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-full max-h-full flex flex-col items-center"
              >
                <div className="relative flex-1 flex items-center justify-center">
                  <Image
                    src={current.imageUrl}
                    alt={current.title}
                    className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain rounded-lg shadow-2xl"
                  />
                </div>

                {/* Info bar */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="mt-6 text-center text-white"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-xs uppercase tracking-widest text-white/50">
                      {CATEGORY_LABELS[current.category] || current.category}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="text-xs text-white/50">
                      {currentIndex + 1} / {images.length}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-light">{current.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60 max-w-lg mx-auto">
                    {current.description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
