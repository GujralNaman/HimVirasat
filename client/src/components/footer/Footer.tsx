import { Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { CONTACT, SOCIAL, BRAND, PRODUCTS, whatsappLink } from '@/config/site';

const ColTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">{children}</h3>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="site-footer" className="bg-forest text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              data-testid="footer-logo"
              aria-label="HimVirasat — back to top"
              className="inline-block bg-ivory px-5 py-4"
            >
              <img
                src="/assets/logo/logo-navbar.png"
                alt="HimVirasat — The Heritage of the Himalayas"
                width="720"
                height="379"
                loading="lazy"
                className="h-20 w-auto"
              />
            </a>
            <p className="mt-7 font-display text-2xl italic text-ivory leading-none">{BRAND.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">{BRAND.description}</p>
          </div>

          {/* Explore column */}
          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
            <ColTitle>Explore</ColTitle>
            <ul className="space-y-3 text-sm text-ivory/80">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Our Story', href: '#story' },
                { label: 'Our Products', href: '#products' },
                { label: 'Our Promise', href: '#promise' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline hover:text-ivory">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Our Collection column */}
          <div className="lg:col-span-2 lg:col-start-9">
            <ColTitle>Our Collection</ColTitle>
            <ul className="space-y-3 text-sm text-ivory/80">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a href="#products" className="link-underline hover:text-ivory">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column with icons inline */}
          <div className="lg:col-span-2 lg:col-start-11">
            <ColTitle>Contact</ColTitle>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li className="flex items-center gap-3 hover:text-ivory transition-colors">
                <Mail size={16} className="text-gold shrink-0" />
                <a href={`mailto:${CONTACT.email}`} data-testid="footer-email">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-ivory transition-colors">
                <MessageCircle size={16} className="text-gold shrink-0" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp">
                  WhatsApp
                </a>
              </li>
              {/* Social icons horizontal side-by-side */}
              <div className="mt-6 flex gap-3">
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HimVirasat on Instagram"
                  className="h-11 w-11 items-center justify-center border border-gold/40 text-ivory transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-forest inline-flex"
                >
                  <Instagram size={17} strokeWidth={1.6} />
                </a>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HimVirasat on Facebook"
                  className="h-11 w-11 items-center justify-center border border-gold/40 text-ivory transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-forest inline-flex"
                >
                  <Facebook size={17} strokeWidth={1.6} />
                </a>
              </div>
            </ul>
          </div>
        </div>

        <p className="mt-20 border-y border-gold/25 py-10 text-center font-display text-3xl italic text-gold md:text-5xl" data-testid="footer-philosophy">
          {BRAND.philosophy}
        </p>

        <div className="mt-8 flex justify-between items-end gap-4 text-[11px] text-ivory/55 sm:flex-row">
          <p data-testid="footer-copyright">
            © {year} {BRAND.name}. All rights reserved.
          </p>
          <p>{BRAND.statement}</p>
        </div>
      </div>
    </footer>
  );
}
