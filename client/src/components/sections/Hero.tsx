import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BRAND, IMAGES } from '@/config/site';
import { SmartImage } from '@/components/common/SmartImage';
import { Decor } from '@/components/common/Decor';
import { EASE } from '@/lib/motion';

const LINES = ['Some Flavours', 'Carry the Soul', 'of a Place.'];
const D = 0.9;

const HeroCopy = () => (
  <div className="relative z-10 lg:col-span-6 lg:pr-6">
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: D, duration: 0.8, ease: EASE }}
      className="eyebrow mb-7 flex items-center gap-3"
      data-testid="hero-eyebrow"
    >
      <span aria-hidden="true" className="h-px w-10 bg-gold" />
      Rooted in Jammu. Inspired by the Himalayas.
    </motion.p>

    <h1
      data-testid="hero-heading"
      className="font-display text-[2.9rem] font-medium leading-[0.98] tracking-tight text-forest sm:text-6xl lg:text-[5.4rem] xl:text-[6rem]"
    >
      {LINES.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${i === 1 ? 'italic text-terra' : ''}`}
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{
              delay: D + 0.15 + i * 0.16,
              duration: 1.1,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: D + 0.8, duration: 1.2 }}
      className="mt-8 max-w-xl text-base leading-relaxed text-forest/75 md:text-lg"
      data-testid="hero-supporting-text"
    >
      Discover the rich culinary heritage of Jammu and the Himalayas through authentic regional foods, treasured traditions and flavours worth sharing.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: D + 1, duration: 0.9, ease: EASE }}
      className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
    >
      <motion.a
        href="#products"
        data-testid="hero-cta-explore"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group inline-flex min-h-[54px] items-center justify-center gap-3 bg-forest px-8 text-xs font-bold uppercase tracking-[0.22em] text-ivory transition-colors duration-300 hover:bg-terra"
      >
        Explore Our Heritage
        <ArrowRight size={16} className="text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ivory" />
      </motion.a>

      <motion.a
        href="#story"
        data-testid="hero-cta-story"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex min-h-[54px] items-center justify-center border border-forest/40 px-8 text-xs font-bold uppercase tracking-[0.22em] text-forest transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-ivory"
      >
        Discover Our Story
      </motion.a>
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: D + 1.3, duration: 1 }}
      className="mt-12 hidden font-display text-lg italic text-forest/60 lg:block"
    >
      {BRAND.statement}
    </motion.p>
  </div>
);

const HeroVisual = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const insetY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <div ref={ref} className="relative lg:col-span-6">
      <motion.div
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        animate={{ clipPath: 'inset(0% 0 0 0)' }}
        transition={{ delay: D - 0.2, duration: 1.4, ease: EASE }}
        className="relative ml-auto aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5] lg:w-[92%]"
      >
        <motion.div
          style={{ y }}
          className="absolute -inset-y-[8%] inset-x-0"
        >
          <SmartImage
            image={IMAGES.heroTerraces}
            eager
            sizes="(min-width:1024px) 46vw, 100vw"
            widths={[800, 1200, 1800]}
            testId="hero-image"
          />
        </motion.div>
        <div className="absolute inset-0 bg-forest/10" aria-hidden="true" />
        <div className="absolute inset-4 border border-ivory/40" aria-hidden="true" />
        <span className="absolute bottom-7 left-7 font-display text-sm italic text-ivory drop-shadow">
          Terraced fields of the Himalayan foothills
        </span>
      </motion.div>

      <motion.div
        style={{ y: insetY }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: D + 0.7, duration: 1.2, ease: EASE }}
        className="absolute -bottom-10 left-0 hidden w-[38%] border-[6px] border-ivory sm:block lg:-left-10 lg:bottom-16"
      >
        <div className="aspect-[3/4] overflow-hidden">
          <SmartImage
            image={IMAGES.heroPeaks}
            eager
            sizes="20vw"
            widths={[400, 600]}
            testId="hero-inset-image"
          />
        </div>
      </motion.div>
    </div>
  );
};

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      data-testid="hero-section"
      className="grain relative overflow-hidden bg-ivory pb-24 pt-[110px] lg:min-h-screen lg:pb-28 lg:pt-[130px]"
    >
      <Decor.MountainLines
        className="pointer-events-none absolute hidden max-w-none opacity-60 lg:block lg:left-[2%] lg:top-[56%] lg:w-[640px]"
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <HeroCopy />
        <HeroVisual />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 overflow-hidden"
      >
        <Decor.FieldLines className="anim-drift absolute -left-10 bottom-0 h-full w-[calc(100%+40px)]" />
      </div>

      <a
        href="#about"
        data-testid="hero-scroll-cue"
        aria-label="Scroll to brand introduction"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-forest/60 lg:flex"
      >
        Scroll
        <span className="anim-scroll-cue block h-10 w-px bg-gold" />
      </a>
    </section>
  );
}
