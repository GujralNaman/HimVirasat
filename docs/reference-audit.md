# HimVirasat — Reference Website Audit (Phase 1)

**Reference URL:** https://himalayan-roots-1--0hfdf5ja.preview.emergentagent.com/
**Platform:** Emergent (client-rendered React SPA, Vite/Webpack bundle, React 19, Framer Motion, Tailwind CSS)
**Inspected:** HTML shell + full unminified JS bundle (`/static/js/bundle.js`)

> Note: The reference is a client-rendered SPA. The raw HTML shell contains no visible page content; all layout, copy, and images are rendered by `/static/js/bundle.js`. The full component source, design tokens, and content config were recovered from the bundle.

---

## A. Overall Design

| Token | Value | Source |
|-------|-------|--------|
| `--forest` (primary dark) | `#183c30` (rgb 24,60,48) | `src/styles/global.css` |
| `--ivory` (background) | `#ede3cf` (rgb 237,227,207) | `src/styles/global.css` |
| `--gold` (accent) | `#b99a59` (rgb 185,154,89) | `src/styles/global.css` |
| `--terra` (accent dark) | `#a75e42` | `src/styles/global.css` |
| `--nav-h` | `84px` | `src/styles/global.css` |
| Body font | `Manrope`, sans-serif (400/500/600/700) | Google Fonts |
| Heading font | `Cormorant Garamond`, serif (300/400/500/600, italic 400/500) | Google Fonts |
| Background | `--ivory` with subtle SVG paper grain (`.grain`) | global.css |
| Scroll behavior | `smooth` | global.css |
| Max content width | `1400px` | components |
| Container padding | `px-5 sm:px-8 lg:px-12` | components |

## B. Header / Navbar

- `fixed inset-x-0 top-0 z-50`, height `h-[84px]`
- Transparent when scrolled to top (`border-b border-transparent`); on scroll (>24px): `border-b border-gold/30 bg-ivory/90 shadow-[0_8px_30px_-18px_rgba(24,60,48,0.45)] backdrop-blur-xl`
- Layout: `mx-auto flex h-[84px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12`
- Logo: `img` src `@/assets/logo.png` (720×379), `h-14 w-auto sm:h-16`, alt "HimVirasat — The Heritage of the Himalayas"
- Desktop nav: `hidden items-center gap-9 lg:flex`, links `link-underline py-1 text-[13px] font-semibold tracking-wide text-forest/85 hover:text-forest`
- CTA button: `group hidden ... border border-forest bg-forest px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory hover:border-terra hover:bg-terra md:inline-flex` + ArrowUpRight icon (size 14)
- Mobile toggle: `h-12 w-12` border button, Menu/X icons (size 22)
- Mobile menu: `fixed inset-0 z-40 flex flex-col bg-forest px-6 pb-10 pt-28 lg:hidden`, links `font-display text-4xl text-ivory border-b border-gold/25 py-4`
- Nav links: Home(#home), Our Story(#story), Our Products(#products), Our Promise(#promise), Contact(#contact)

## C. Homepage Sections (single page, anchor navigation)

### Hero (`#home`)
- `grain relative overflow-hidden bg-ivory pb-24 pt-[110px] lg:min-h-screen lg:pb-28 lg:pt-[130px]`
- Grid: `mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12`
- Copy column `lg:col-span-6 lg:pr-6`:
  - Eyebrow: `eyebrow mb-7 flex items-center gap-3` — gold rule `h-px w-10 bg-gold` + "Rooted in Jammu. Inspired by the Himalayas."
  - H1: `font-display text-[2.9rem] font-medium leading-[0.98] tracking-tight text-forest sm:text-6xl lg:text-[5.4rem] xl:text-[6rem]`, lines "Some Flavours / Carry the Soul / of a Place." (line 2 italic text-terra), framer-motion y-reveal
  - Supporting text: `mt-8 max-w-xl text-base leading-relaxed text-forest/75 md:text-lg`
  - Two CTAs: "Explore Our Heritage" (bg-forest → hover:bg-terra, text-ivory, ArrowUpRight size 16) + "Discover Our Story" (border border-forest/40 text-forest → hover:bg-forest hover:text-ivory)
  - Statement line: `mt-12 hidden font-display text-lg italic text-forest/60 lg:block` — BRAND.statement
- Visual column `lg:col-span-6`:
  - Main image heroTerraces (Pexels 36908043), aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] lg:w-[92%], clipPath reveal
  - Overlay `inset-0 bg-forest/10`, `inset-4 border border-ivory/40`
  - Caption `bottom-7 left-7 font-display text-sm italic text-ivory drop-shadow`: "Terraced fields of the Himalayan foothills"
  - Inset image heroPeaks `absolute -bottom-10 left-0 ... w-[38%] border-[6px] border-ivory`, aspect-[3/4]
- Decor: MountainLines SVG (`lg:left-[2%] lg:top-[56%] lg:w-[640px]`), FieldLines bottom drift, Scroll cue "Scroll" + anim-scroll-cue

### BrandIntro / About (`#about`)
- `relative overflow-hidden border-t border-gold/25 bg-ivory py-24 md:py-36`
- Grid `max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12`
- Image column `lg:col-span-5`: introSpices image aspect-[4/5], inset introRajma image `absolute -bottom-12 right-0 w-[48%] border-[6px] border-ivory`
- Label `absolute -left-3 top-10 ... text-gold`: "Jammu · Himalayas"
- Text column `lg:col-span-6 lg:col-start-7`:
  - Eyebrow "More than food. A legacy."
  - H2 `font-display text-4xl font-medium leading-[1.05] tracking-tight text-forest sm:text-5xl lg:text-6xl`: "Bringing the Goodness of Our Land <em class='text-terra'>Closer to You.</em>"
  - Two paragraphs `mt-10 grid gap-6 text-base leading-relaxed text-forest/75 md:text-lg` with drop-cap "E" `font-display text-7xl leading-[0.8] text-terra`
  - Philosophy `font-display text-2xl italic text-forest` + Ornament

### ProductShowcase (`#products`)
- `grain relative bg-gold/15 py-24 md:py-36`
- SectionHeading eyebrow "A taste of our heritage", title "Discover the Goodness <em class='text-terra'>of Our Land.</em>"
- 6 products in responsive grid with LAYOUT spans:
  `md:col-span-2 lg:col-span-7 lg:row-span-2` (featured Rajma), then `lg:col-span-5`, `lg:col-span-5`, `lg:col-span-4`, `lg:col-span-4`, `lg:col-span-4`
- ProductCard: `group relative flex flex-col border bg-ivory` (featured: `border-terra/60`, else `border-gold/35`), hover:border-gold
  - Image: aspect-[16/10] (featured: aspect-[4/3] lg:aspect-auto lg:flex-1), hover scale 1.06
  - Featured marker: "Our journey begins here" bg-terra text-ivory
  - Category, No. (padded 2), name (`text-2xl md:text-[1.75rem]`, featured `text-4xl md:text-5xl`), description

### BrandStory (`#story`)
- Scroll-driven sticky visual chapters; `lg:min-h-[80vh]` chapters
- Chapters: The Land, The Seasons, The Belief, The Beginning, The Promise (STORY_CHAPTERS)
- Sticky visual `sticky top-[96px] hidden h-[calc(100vh-130px)] lg:block`

### BrandPromise (`#promise`)
- `grain relative border-t border-gold/25 bg-gold/15 py-24 md:py-36`
- SectionHeading center: eyebrow "What we stand for", title "Heritage in <em class='text-terra'>Every Choice.</em>"
- 4 promises grid `sm:grid-cols-2 lg:grid-cols-4`, icons: Mountain, Fingerprint, Scale, Landmark (lucide-react)
- Each: number badge, icon (text-terra → hover:text-forest, rotate -6), h3 `font-display text-3xl font-medium leading-tight text-forest`, p `text-[15px] leading-relaxed text-forest/70`, gold rule hover expand

### CTASection / Contact (`#contact`)
- `relative flex min-h-[80vh] items-center overflow-hidden bg-forest py-28`
- Background image ctaLandscape (Unsplash), `absolute -inset-y-[10%] inset-x-0`, overlay `bg-forest/75`, `inset-6 border border-gold/30`
- Text: Ornament, H2 "Bring a Little <em class='text-gold'>Heritage Home.</em>" `text-5xl sm:text-6xl lg:text-7xl text-ivory`
- WhatsApp CTA: `min-h-[58px] bg-gold px-9 text-xs font-bold uppercase tracking-[0.22em] text-forest hover:bg-ivory` + MessageCircle + ArrowUpRight, href whatsappLink()
- Hint: `mt-5 text-xs tracking-wide text-ivory/60`: "Opens a WhatsApp chat with our team"

### Footer
- `bg-forest text-ivory`, container `mx-auto max-w-[1400px] px-5 pb-10 pt-20 sm:px-8 lg:px-12`
- Grid `gap-14 lg:grid-cols-12`:
  - Brand col `lg:col-span-4`: logo (h-20 w-auto, inline-block bg-ivory px-5 py-4), tagline `font-display text-2xl italic text-ivory`, description `text-sm leading-relaxed text-ivory/70`
  - Explore col `lg:col-span-2 lg:col-start-6`: nav links
  - Contact col: email (Mail icon), WhatsApp (MessageCircle icon)
  - Social: Instagram, Facebook (h-11 w-11 border border-gold/40 text-ivory → hover:bg-gold hover:text-forest)
- Philosophy `mt-20 border-y border-gold/25 py-10 text-center font-display text-3xl italic text-gold md:text-5xl`
- Copyright `mt-8 flex flex-col gap-3 text-xs text-ivory/55 sm:flex-row sm:justify-between`

## D. Routes

Single-page application — all sections on `/` via anchor links (#home, #about, #products, #story, #promise, #contact). No separate HTML routes.

## E. Interactive Behavior

- WhatsApp CTA → `whatsappLink()` = `https://wa.me/<number>?text=<message>` (target _blank)
- Email → `mailto:hello@himvirasat.com`
- Nav links → smooth-scroll anchor sections (scroll-margin-top = nav-h - 1px)
- Mobile menu toggle opens/closes, body overflow locked, Escape closes
- Buttons use framer-motion whileHover/whileTap
- framer-motion inView animations (viewport once, amount 0.25), EASE [0.22, 1, 0.36, 1]
- PageLoader: ivory curtain with logo, lifts after ~900ms

## F. Design Tokens (for design system)

```css
:root {
  --forest: #183c30;
  --ivory: #ede3cf;
  --gold: #b99a59;
  --terra: #a75e42;
  --nav-h: 84px;
}
.font-display { font-family: "Cormorant Garamond", serif; }
body { font-family: "Manrope", sans-serif; }
```

## G. Asset Inventory

| Asset | Source | Status |
|-------|--------|--------|
| logo.png | `@/assets/logo.png` (720×379) | **MISSING** — local build asset, not publicly accessible |
| heroTerraces | Pexels 36908043 | Accessible (public URL) |
| heroPeaks | Pexels 29167628 | Accessible |
| introSpices | Unsplash photo-1771541897176-44a3e01dc484 | Accessible |
| introRajma | Unsplash photo-1788601988466-9f361c34c6cb | Accessible |
| storyValley | Unsplash photo-1623612175509-30e97f5aa195 | Accessible |
| storyPeaks | Pexels 35408915 | Accessible |
| storyKitchen | Unsplash photo-1592457711340-2412dc07b733 | Accessible |
| storyRajma | Pexels 12737913 | Accessible |
| storyVillage | Pexels 27540040 | Accessible |
| ctaLandscape | Unsplash photo-1621617249658-f7541ef42a93 | Accessible |
| Product images | 6 Pexels/Unsplash IDs | Accessible |
| favicon.ico / 32 / 192 / apple-touch / og-image | `/favicon.ico`, `/og-image.jpg` | Accessible on server |

## H. Animations (src/styles/animations.css + src/lib/motion.js)

- `drift` (14s), `sun-breathe` (7s), `scroll-cue` (2.4s)
- motion: EASE [0.22,1,0.36,1], fadeUp, fadeIn, imageReveal, inView (amount 0.25, once), stagger

## I. Missing / Unrecoverable Assets

- **`src/assets/logo.png`** (720×379) — the HimVirasat logo. This is a local Emergent build asset not exposed on the public server. Cannot be retrieved. Must be recreated or provided by the user. All components referencing it (Navbar, Footer, PageLoader) will use a placeholder until supplied.

---

*End of Phase 1 audit. Implementation to follow from this document.*