import { motion } from 'framer-motion';
import { SmartImage } from '@/components/common/SmartImage';
import { Decor } from '@/components/common/Decor';
import { IMAGES, BRAND } from '@/config/site';
import { fadeUp, inView, stagger } from '@/lib/motion';

export function BrandIntro() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      data-testid="brand-intro-section"
      className="relative overflow-hidden border-t border-gold/25 bg-ivory py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="relative lg:col-span-5">
          <motion.div
            {...inView}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <SmartImage
              image={IMAGES.introSpices}
              sizes="(min-width:1024px) 38vw, 100vw"
              testId="intro-image"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            {...inView}
            className="absolute -bottom-12 right-0 w-[48%] border-[6px] border-ivory sm:-right-8"
          >
            <div className="aspect-square overflow-hidden">
              <SmartImage image={IMAGES.introRajma} sizes="24vw" widths={[400, 700]} testId="intro-inset-image" />
            </div>
          </motion.div>

          <span
            aria-hidden="true"
            className="absolute -left-3 top-10 hidden origin-top-left -rotate-90 translate-y-full text-[10px] font-bold uppercase tracking-[0.4em] text-gold lg:block"
          >
            Jammu · Himalayas
          </span>
        </div>

        <motion.div
          variants={stagger(0.14)}
          {...inView}
          className="flex flex-col justify-center lg:col-span-6 lg:col-start-7"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-6 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            More than food. A legacy.
          </motion.p>

          <motion.h2
            id="about-heading"
            variants={fadeUp}
            className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-forest sm:text-5xl lg:text-6xl"
          >
            Bringing the Goodness of Our Land <em className="text-terra">Closer to You.</em>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid gap-6 text-base leading-relaxed text-forest/75 md:text-lg"
          >
            <p>
              <span className="float-left mr-3 mt-1 font-display text-7xl leading-[0.8] text-terra">
                E
              </span>
              Very region has a story. Some are told through traditions, some through generations of craftsmanship, and some through the flavours that have travelled from one kitchen to another.
            </p>
            <p>
              HimVirasat is inspired by the rich land and culinary traditions of Jammu and the Himalayan region. We aim to bring distinctive regional food products to modern households while celebrating the heritage and stories behind them.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col gap-4 border-t border-gold/40 pt-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="font-display text-2xl italic text-forest">{BRAND.philosophy}</p>
            <Decor.Ornament />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
