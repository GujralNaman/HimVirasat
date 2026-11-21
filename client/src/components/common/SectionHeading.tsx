import { motion } from 'framer-motion';
import { stagger, fadeUp, inView } from '@/lib/motion';

export type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'left',
  light = false,
  id,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={stagger(0.12)}
      {...inView}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="eyebrow mb-5 flex items-center gap-3"
          style={{ justifyContent: align === 'center' ? 'center' : undefined }}
        >
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        id={id}
        variants={fadeUp}
        className={`font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${
          light ? 'text-ivory' : 'text-forest'
        }`}
      >
        {title}
      </motion.h2>
      {children && (
        <motion.div
          variants={fadeUp}
          className={`mt-6 text-base leading-relaxed md:text-lg ${light ? 'text-ivory/75' : 'text-forest/75'}`}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
