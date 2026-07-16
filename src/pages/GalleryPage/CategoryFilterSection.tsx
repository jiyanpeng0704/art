import { LayoutGroup, motion } from 'framer-motion';

export type CategoryType = 'all' | 'landscape' | 'portrait' | 'architecture' | 'still_life' | 'street';

interface CategoryFilterSectionProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const CATEGORIES: { key: CategoryType; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'landscape', label: '风景' },
  { key: 'portrait', label: '人像' },
  { key: 'architecture', label: '建筑' },
  { key: 'still_life', label: '静物' },
  { key: 'street', label: '街拍' },
];

export default function CategoryFilterSection({
  activeCategory,
  onCategoryChange,
}: CategoryFilterSectionProps) {
  return (
    <section id="categories" className="w-full py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-tight">
            分类浏览
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            选择你感兴趣的摄影类别，探索精选作品
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-2 md:gap-3"
        >
          <LayoutGroup id="category-tabs">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => onCategoryChange(cat.key)}
                  className="relative px-5 py-2.5 text-sm rounded-full transition-colors duration-300"
                >
                  {isActive && (
                    <motion.span
                      layoutId="category-pill"
                      className="absolute inset-0 rounded-full bg-foreground"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive
                        ? 'text-background font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </LayoutGroup>
        </motion.div>
      </div>
    </section>
  );
}
