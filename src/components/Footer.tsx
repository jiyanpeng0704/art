import { Instagram, Twitter, Dribbble, Mail } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

export default function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-border/40 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="space-y-4">
            <div className="text-xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Lumière
              </span>
              <span className="text-muted-foreground font-light ml-1 text-sm">
                Gallery
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              用光影记录瞬间，用镜头讲述故事。每一张照片都是时间的礼物。
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">快速导航</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <UniversalLink to="#hero" className="hover:text-foreground transition-colors">
                  首页
                </UniversalLink>
              </li>
              <li>
                <UniversalLink to="#gallery" className="hover:text-foreground transition-colors">
                  作品集
                </UniversalLink>
              </li>
              <li>
                <UniversalLink to="#categories" className="hover:text-foreground transition-colors">
                  分类浏览
                </UniversalLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">联系我们</h4>
            <div className="flex items-center gap-4">
              <UniversalLink
                to="#"
                className="size-9 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </UniversalLink>
              <UniversalLink
                to="#"
                className="size-9 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                aria-label="Twitter"
              >
                <Twitter className="size-4" />
              </UniversalLink>
              <UniversalLink
                to="#"
                className="size-9 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                aria-label="Dribbble"
              >
                <Dribbble className="size-4" />
              </UniversalLink>
              <UniversalLink
                to="mailto:hello@lumiere.gallery"
                className="size-9 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </UniversalLink>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              hello@lumiere.gallery
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lumière Gallery. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with light &amp; passion
          </p>
        </div>
      </div>
    </footer>
  );
}
