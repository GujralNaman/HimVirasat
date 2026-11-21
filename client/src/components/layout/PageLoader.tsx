import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '@/lib/motion';

/** Brief ivory curtain on first load. Never blocks content — it lifts after ~0.9s. */
export function PageLoader() {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [show, setShow] = useState(!reduce);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden="true"
          data-testid="page-loader"
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-ivory"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <motion.img
            src="/assets/logo/logo-navbar.png"
            alt=""
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="h-28 w-auto sm:h-36"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
