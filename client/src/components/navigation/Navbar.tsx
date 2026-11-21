import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/config/site';
import { EASE } from '@/lib/motion';
import { useLocation } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled && !open;

  // On homepage use anchor links for smooth-scroll; on recipe page navigate to homepage
  const getLink = (href: string) => (isHome ? href : '/');
  const getLogoHref = () => (isHome ? '#home' : '/');

  return (
    <>
      <header
        data-testid="site-navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${solid
          ? 'border-b border-gold/30 bg-ivory/90 shadow-[0_8px_30px_-18px_rgba(24,60,48,0.45)] backdrop-blur-xl'
          : 'border-b border-transparent'}`}
      >
        <div className="mx-auto flex h-[84px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href={getLogoHref()}
            data-testid="nav-logo"
            aria-label="HimVirasat — back to top"
            className={`relative z-50 block shrink-0 ${open ? 'rounded-sm bg-ivory px-2 py-1' : ''}`}
          >
            <img
              src="/assets/logo/logo-navbar.png"
              alt="HimVirasat — The Heritage of the Himalayas"
              width="720"
              height="379"
              className="h-16 w-auto sm:h-20 lg:h-24"
            />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={getLink(l.href)}
                data-testid={`nav-${l.href.slice(1)}`}
                className="link-underline py-1 text-[13px] font-semibold tracking-wide text-forest/85 hover:text-forest"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href={getLink('#about')}
              data-testid="nav-cta-discover"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group hidden items-center gap-2 border border-forest bg-forest px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:border-terra hover:bg-terra md:inline-flex"
            >
              Discover Our Heritage
              <ArrowUpRight size={14} className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ivory" />
            </motion.a>
            <button
              type="button"
              data-testid="mobile-menu-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className={`relative z-50 inline-flex h-12 w-12 items-center justify-center border transition-colors lg:hidden ${open ? 'border-gold/50 text-ivory' : 'border-forest/25 text-forest'}`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col bg-forest px-6 pb-10 pt-28 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-1 flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={getLink(l.href)}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${l.href.slice(1)}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
                  className="flex items-baseline justify-between border-b border-gold/25 py-4 font-display text-3xl sm:text-4xl text-ivory whitespace-nowrap"
                >
                  {l.label}
                  <span className="font-body text-xs tracking-[0.25em] text-gold">{i + 1}</span>
                </motion.a>
              ))}
              <motion.a
                href={getLink('#about')}
                onClick={() => setOpen(false)}
                data-testid="mobile-nav-cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 bg-gold px-6 text-xs font-bold uppercase tracking-[0.22em] text-forest"
              >
                Discover Our Heritage
                <ArrowUpRight size={16} />
              </motion.a>
              <p className="mt-6 text-center font-display text-lg italic text-ivory/60">
                {BRAND.philosophy}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
