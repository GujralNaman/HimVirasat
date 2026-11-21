# Design System — HimVirasat

All values extracted from the reference website (`himalayan-roots-1--0hfdf5ja.preview.emergentagent.com`) via its compiled bundle source. Visual fidelity is the priority; no arbitrary values are introduced.

## Color Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--forest` | `#183c30` | 24, 60, 48 | Primary dark, backgrounds, nav bg, buttons, footer |
| `--ivory` | `#ede3cf` | 237, 227, 207 | Page background, cards, text on dark |
| `--gold` | `#b99a59` | 185, 154, 89 | Accent, borders, eyebrows, icons, rules |
| `--terra` | `#a75e42` | 167, 94, 66 | Accent dark, featured product borders, hover states |

## Typography

| Token | Value |
|-------|-------|
| `--font-heading` | `Cormorant Garamond`, serif |
| `--font-body` | `Manrope`, sans-serif |
| Heading weights | 300, 400, 500, 600 (italics 400, 500) |
| Body weights | 400, 500, 600, 700 |

### Heading Hierarchy

| Element | Size | Weight | Leading | Tracking | Color |
|---------|------|--------|---------|----------|-------|
| Hero H1 | 2.9rem / sm:6xl / lg:5.4rem / xl:6rem | medium | 0.98 | tight | forest |
| Section H2 | 4xl / sm:5xl / lg:6xl | medium | 1.05 | tight | forest (ivory on light sections) |
| Card name | 2xl / md:1.75rem (featured: 4xl/5xl) | medium | tight | — | forest |
| Promise H3 | 3xl | medium | tight | — | forest |
| Eyebrow | 0.7rem / sm:0.75rem | 700 | — | 0.28em | gold |
| Body | base / md:lg | — | relaxed | — | forest /75 |

## Spacing

| Token | Value |
|-------|-------|
| `--nav-h` | `84px` |
| Container max-width | `1400px` |
| Container padding | `px-5 sm:px-8 lg:px-12` |
| Section padding | `py-24 md:py-36` (hero: `pb-24 pt-[110px] lg:pb-28 lg:pt-[130px]`) |
| Grid gap | `gap-14` (hero `gap-14 lg:gap-8`), brand intro `gap-16 lg:gap-10` |
| scroll-margin-top | `calc(var(--nav-h) - 1px)` |

## Component Specs

### Navbar
- Height `h-[84px]`, fixed top, z-50
- Transparent at scroll top → `bg-ivory/90 border-gold/30 backdrop-blur-xl shadow` on scroll (>24px)
- Logo: `h-14 w-auto sm:h-16`
- Desktop links: `text-[13px] font-semibold tracking-wide text-forest/85`, link-underline hover
- CTA: `border border-forest bg-forest px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory`, hover `border-terra hover:bg-terra`
- Mobile menu: `bg-forest`, links `font-display text-4xl text-ivory border-b border-gold/25 py-4`

### Buttons
- Primary: `bg-forest text-ivory px-8 text-xs font-bold uppercase tracking-[0.22em]`, hover `bg-terra`
- Gold CTA (WhatsApp): `bg-gold text-forest px-9 min-h-[58px]`, hover `bg-ivory`
- Outline: `border border-forest/40 text-forest`, hover `border-forest bg-forest text-ivory`

### Image Treatment
- `object-cover` with `object-position` per section
- Lazy loading below fold, `eager` for hero
- Branded `.img-fallback` SVG placeholder on error
- `.grain` paper texture overlay on ivory sections

## Animations (framer-motion)

| Preset | Values |
|--------|--------|
| EASE | `[0.22, 1, 0.36, 1]` |
| fadeUp | hidden `{opacity:0, y:28}` → show `{opacity:1, y:0}` (0.9s) |
| fadeIn | hidden `{opacity:0}` → show (1.1s) |
| imageReveal | hidden `{opacity:0, scale:1.08}` → show `{opacity:1, scale:1}` (1.4s) |
| inView | `viewport: { once: true, amount: 0.25 }` |
| stagger | children stagger 0.12s |

### CSS Keyframes (`src/styles/animations.css`)
- `drift` 14s ease-in-out infinite
- `sun-breathe` 7s
- `scroll-cue` 2.4s cubic-bezier(0.65,0,0.35,1)

## Breakpoints

Tailwind defaults: `sm: 640px`, `md: 768px`, `lg: 1024px`. Reference uses `lg` for desktop grid transitions and `sm`/`md` for intermediate adjustments.

## Notes

- `body` background = `--ivory`; text = `--forest`
- Selection colors: bg `--forest`, text `--ivory`
- Focus-visible: 2px `--gold` outline, 3px offset
- All section headings use `SectionHeading` component (eyebrow + H2 + optional description)
