import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '@/components/Lightbox';
import { MOCK_GALLERY_IMAGES, type IGalleryImage } from '@/data/gallery';
import type { CategoryType } from './CategoryFilterSection';
import { Image } from '@/components/ui/image';

interface GalleryGridSectionProps {
  activeCategory: CategoryType;
}

const CATEGORY_LABELS: Record<string, string> = {
  landscape: '风景',
  portrait: '人像',
  architecture: '建筑',
  still_life: '静物',
  street: '街拍',
};

function MasonryImageCard({
  image,
  index,
  onClick,
}: {
  image: IGalleryImage;
  index: number;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: (index % 6) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-xl cursor-pointer bg-muted/30"
      onClick={onClick}
    >
      {/* Placeholder / skeleton */}
      {!loaded && (
        <div
          className="w-full bg-muted/50 animate-pulse"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
        />
      )}

      <Image
        src={image.imageUrl}
        alt={image.title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md absolute inset-0'
        }`}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

      {/* Hover content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <span className="inline-block text-[10px] md:text-xs uppercase tracking-widest text-white/70 mb-1.5">
          {CATEGORY_LABELS[image.category] || image.category}
        </span>
        <h3 className="text-white text-sm md:text-base font-medium leading-snug">
          {image.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function GalleryGridSection({
  activeCategory,
}: GalleryGridSectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return MOCK_GALLERY_IMAGES;
    return MOCK_GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev <= 0 ? filteredImages.length - 1 : prev - 1
    );
  }, [filteredImages.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev >= filteredImages.length - 1 ? 0 : prev + 1
    );
  }, [filteredImages.length]);

  return (
    <section id="gallery" className="w-full pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-tight">
            精选作品
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            共 {filteredImages.length} 幅作品
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-5 [column-fill:_balance]"
          >
            {filteredImages.map((img, idx) => (
              <div key={img.id} className="mb-4 md:mb-5 break-inside-avoid">
                <MasonryImageCard
                  image={img}
                  index={idx}
                  onClick={() => openLightbox(idx)}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            该分类暂无作品
          </div>
        )}
      </div>

      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </section>
  );
}
