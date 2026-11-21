import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SmartImage } from '@/components/common/SmartImage';
import { PRODUCTS } from '@/config/site';
import { fadeUp } from '@/lib/motion';

const LAYOUT = [
  'md:col-span-2 lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
];

const ProductCard = ({ product, index }: { product: (typeof PRODUCTS)[number]; index: number }) => {
  const featured = product.featured;
  return (
    <motion.article
      variants={fadeUp}
      whileHover="hover"
      data-testid={`product-card-${product.id}`}
      className={`group relative flex flex-col border bg-ivory ${featured ? 'border-terra/60' : 'border-gold/35'} transition-colors duration-500 hover:border-gold ${LAYOUT[index]}`}
    >
      <div
        className={`relative overflow-hidden ${featured ? 'aspect-[4/3] lg:aspect-auto lg:flex-1' : 'aspect-[16/10]'}`}
      >
        <motion.div
          className="h-full w-full lg:absolute lg:inset-0"
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <SmartImage
            image={product.image}
            sizes={featured ? '(min-width:1024px) 55vw, 100vw' : '(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw'}
            testId={`product-image-${product.id}`}
          />
        </motion.div>
        {featured && (
          <span data-testid="rajma-journey-marker" className="absolute left-0 top-6 inline-flex items-center gap-2 bg-terra px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-ivory">
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold" />
            Our journey begins here
          </span>
        )}
        {!featured && product.label && (
          <span data-testid={`product-label-${product.id}`} className="absolute left-0 top-6 inline-flex items-center gap-2 bg-forest px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-ivory">
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold" />
            {product.label}
          </span>
        )}
      </div>

      <div className={`relative flex flex-col ${featured ? 'p-7 md:p-10' : 'p-6 md:p-7'}`}>
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-0 h-px w-full origin-left bg-gold"
          initial={{ scaleX: 0.15 }}
          variants={{ hover: { scaleX: 1 } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.28em] ${featured ? 'text-terra' : 'text-gold'}`}
          >
            {product.category}
          </span>
          <span className="font-display text-sm italic text-forest/45">
            No. <span>{String(index + 1).padStart(2, '0')}</span>
          </span>
        </div>
        <h3
          className={`font-display font-medium leading-tight text-forest ${featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-[1.75rem]'}`}
        >
          {product.name}
        </h3>
        <p
          className={`mt-3 leading-relaxed text-forest/70 ${featured ? 'max-w-md text-base md:text-lg' : 'text-sm md:text-[15px]'}`}
        >
          {product.description}
        </p>
      </div>
    </motion.article>
  );
};

export function ProductShowcase() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      data-testid="products-section"
      className="grain relative bg-gold/15 py-24 md:py-36"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="products-heading"
            eyebrow="A taste of our heritage"
            title={
              <>
                Discover the Goodness <em className="text-terra">of Our Land.</em>
              </>
            }
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-lg text-base leading-relaxed text-forest/75"
          >
            Regional ingredients, sourced with care and brought to your table with the stories of their origin.
          </motion.p>
        </div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10"
        >
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
