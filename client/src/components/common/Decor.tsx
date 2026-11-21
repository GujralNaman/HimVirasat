import { motion } from 'framer-motion';

export type FieldLinesProps = { className?: string; color?: string };
export type MountainLinesProps = { className?: string; delay?: number };
export type OrnamentProps = { className?: string };

/** Line-drawn mountain ridge that draws itself in. */
export function MountainLines({ className = '', delay = 0.4 }: MountainLinesProps) {
  const paths = [
    { d: 'M0 200 L120 120 L170 150 L290 50 L380 130 L440 100 L560 20 L660 120 L720 90 L800 150', w: 1.2, c: 'var(--forest)', o: 0.35 },
    { d: 'M0 210 L90 160 L200 185 L320 110 L430 170 L540 120 L650 175 L800 130', w: 1, c: 'var(--gold)', o: 0.8 },
  ];

  return (
    <svg
      viewBox="0 0 800 220"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="560" cy="70" r="38" stroke="var(--gold)" strokeWidth="1" className="anim-sun" opacity="0.7" />
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          stroke={p.c}
          strokeWidth={p.w}
          strokeOpacity={p.o}
          initial={{ pathLength: 0 } as any}
          animate={{ pathLength: 1 } as any}
          transition={{
            duration: 2.6,
            delay: delay + i * 0.4,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      ))}
    </svg>
  );
}

/** Flowing field contours — terraced fields abstracted into lines. */
export function FieldLines({ className = '', color = 'var(--gold)' }: FieldLinesProps) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${30 + i * 18} C 300 ${10 + i * 18}, 500 ${60 + i * 18}, 800 ${30 + i * 18} S 1100 ${20 + i * 18}, 1200 ${40 + i * 18}`}
          stroke={color}
          strokeOpacity={0.5 - i * 0.08}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

/** Small diamond ornament echoing the logo divider. */
export function Ornament({ className = '' }: OrnamentProps) {
  return (
    <span aria-hidden="true" className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-10 bg-gold" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold" />
      <span className="h-px w-10 bg-gold" />
    </span>
  );
}

export const Decor = { MountainLines, FieldLines, Ornament };
