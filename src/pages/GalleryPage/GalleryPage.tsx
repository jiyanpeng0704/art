import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import CategoryFilterSection, { type CategoryType } from './CategoryFilterSection';
import GalleryGridSection from './GalleryGridSection';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <CategoryFilterSection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <GalleryGridSection activeCategory={activeCategory} />
      </main>
      <Footer />
    </div>
  );
}
