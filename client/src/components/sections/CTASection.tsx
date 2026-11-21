import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { whatsappLink } from '@/config/site';
import { Decor } from '@/components/common/Decor';
import { SmartImage } from '@/components/common/SmartImage';
import { IMAGES } from '@/config/site';
import { stagger, fadeUp, inView } from '@/lib/motion';

export function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      id="contact"
      aria-labelledby="contact-heading"
      data-testid="cta-section"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-forest py-28"
    >
      <motion.div
        style={{ y }}
        className="absolute -inset-y-[10%] inset-x-0"
      >
        <SmartImage image={IMAGES.ctaLandscape} sizes="100vw" widths={[800, 1400, 2000]} testId="cta-image" />
      </motion.div>

      <div aria-hidden="true" className="absolute inset-0 bg-forest/75" />
      <div aria-hidden="true" className="absolute inset-6 border border-gold/30 md:inset-10" />

      <motion.div
        variants={stagger(0.15)}
        {...inView}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <motion.div variants={fadeUp}>
          <Decor.Ornament />
        </motion.div>

        <motion.h2
          id="contact-heading"
          variants={fadeUp}
          className="mt-8 font-display text-5xl font-medium leading-[1] tracking-tight text-ivory sm:text-6xl lg:text-7xl"
        >
          Bring a Little <em className="text-gold">Heritage Home.</em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-ivory/80 md:text-lg"
        >
          Discover the flavours, traditions and stories that make our region special.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="cta-whatsapp-button"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-12 inline-flex min-h-[58px] items-center gap-3 bg-gold px-9 text-xs font-bold uppercase tracking-[0.22em] text-forest transition-colors duration-300 hover:bg-ivory"
        >
          <MessageCircle size={18} strokeWidth={1.8} />
          Connect With HimVirasat
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.a>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-xs tracking-wide text-ivory/60"
        >
          Opens a WhatsApp chat with our team
        </motion.p>
      </motion.div>
    </section>
  );
}
