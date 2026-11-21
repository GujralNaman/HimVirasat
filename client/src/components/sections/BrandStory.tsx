import { motion } from 'framer-motion';
import { SmartImage } from '@/components/common/SmartImage';
import { SectionHeading } from '@/components/common/SectionHeading';
import { STORY_CHAPTERS } from '@/config/site';
import { fadeUp, stagger } from '@/lib/motion';

export function BrandStory() {
  return (
    <section id="story" data-testid="brand-story-section" className="bg-forest text-ivory py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="story-heading"
          eyebrow="The story behind HimVirasat"
          title={<>Every Great Flavour Has a Place of <span className="text-gold">Origin.</span></>}
          light
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-24"
        >
          {STORY_CHAPTERS.map((chapter, i) => (
            <motion.div
              key={chapter.id}
              variants={fadeUp}
              className="flex flex-col gap-5 items-start"
            >
              <div
                className="relative aspect-[4/5] w-full overflow-hidden border border-ivory/30 rounded-lg bg-forest/20"
              >
                <SmartImage
                  image={chapter.image}
                  sizes="100vw"
                  eager={i === 0}
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.p
                variants={fadeUp}
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gold"
              >
                <span className="font-display text-xl sm:text-2xl italic tracking-normal text-ivory">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                {chapter.label}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="max-w-full text-sm sm:text-base leading-relaxed text-ivory/90"
              >
                {chapter.lead || chapter.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
