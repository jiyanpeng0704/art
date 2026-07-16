import { useEffect, useState } from 'react';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { label: '首页', href: '#hero' },
  { label: '作品', href: '#gallery' },
  { label: '分类', href: '#categories' },
  { label: '关于', href: '#footer' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <NavLink
          to="#hero"
          className="text-lg md:text-xl font-semibold tracking-tight text-foreground"
        >
          <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Lumière
          </span>
          <span className="text-muted-foreground font-light ml-1 text-sm">Gallery</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `text-sm transition-colors duration-300 ${
                isActive
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="菜单"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/40"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'bg-accent text-accent-foreground font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
