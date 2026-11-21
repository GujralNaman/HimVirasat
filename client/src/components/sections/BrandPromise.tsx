import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PROMISES } from '@/config/site';
import { fadeUp, stagger } from '@/lib/motion';

const ICONS: Record<string, React.ElementType> = {
  Mountain: () => <svg className="lucide-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2.5l1.8 1.8M16 2.5l-1.8 1.8"/><path d="M9 8a3 3 0 0 1 6 0"/><rect x="7" y="8" width="10" height="12" rx="5"/><path d="M12 8v12M3 13.5h4M17 13.5h4M4.5 19.5l2.5-1.8M19.5 19.5L17 17.7M4.5 8l2.5 1.8M19.5 8L17 9.8"/></svg>,
  Fingerprint: () => <svg className="lucide-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2Z"/><path d="M18 12c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2Z"/><path d="M16 12c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2Z"/></svg>,
  Scale: () => <svg className="lucide-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="5" x2="6" y2="19"/><line x1="18" y1="5" x2="18" y2="19"/><path d="M10 12h4M12 8v8M12 16h-2M12 12h2"/></svg>,
  Landmark: () => <svg className="lucide-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21V15a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6M12 17V9M12 3v14M8 21h8M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>,
};

const PromiseBlock = ({ item, index }: { item: (typeof PROMISES)[number]; index: number }) => {
  const Icon = ICONS[item.icon];
  return (
    <motion.div
      variants={fadeUp}
      data-testid={`promise-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
      className="group relative flex flex-col border-t border-gold/40 pt-8 sm:px-2 lg:border-l lg:border-t-0 lg:px-8 lg:pt-2 lg:first:border-l-0 lg:first:pl-0"
    >
      <div className="mb-10 flex items-center justify-between">
        <motion.span
          whileHover={{ rotate: -6 }}
          className="inline-flex text-terra transition-colors duration-300 group-hover:text-forest"
        >
          <Icon size={34} />
        </motion.span>
        <span className="font-display text-sm italic text-forest/40">
          0<span>{index + 1}</span>
        </span>
      </div>

      <h3 className="font-display text-3xl font-medium leading-tight text-forest">{item.title}</h3>
      <p className="mt-4 text-[15px] leading-relaxed text-forest/70">{item.text}</p>

      <span aria-hidden="true" className="mt-8 h-px w-8 bg-gold transition-[width] duration-500 group-hover:w-20" />
    </motion.div>
  );
};

export function BrandPromise() {
  return (
    <section
      id="promise"
      aria-labelledby="promise-heading"
      data-testid="promise-section"
      className="grain relative border-t border-gold/25 bg-gold/15 py-24 md:py-36"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="promise-heading"
          align="center"
          eyebrow="What we stand for"
          title={<>Heritage in <em className="text-terra">Every Choice.</em></>}
        />

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-10 sm:grid-cols-2 sm:gap-x-10 lg:mt-24 lg:grid-cols-4 lg:gap-0"
        >
          {PROMISES.map((p, i) => (
            <PromiseBlock key={p.title} item={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
