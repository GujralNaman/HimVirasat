/**
 * HimVirasat — central site configuration.
 * Edit brand copy, contact details, social links, products and image references here.
 */

// ---------------------------------------------------------------------------
// CONTACT — PLACEHOLDERS. Replace with verified details before going live.
// WhatsApp number: digits only, with country code, no "+" or spaces (e.g. "919876543210").
// ---------------------------------------------------------------------------
export const CONTACT = {
  whatsappNumber: '919419363835',
  // PLACEHOLDER — set the real WhatsApp number
  whatsappMessage: "Hello HimVirasat, I'd like to know more about your products.",
  email: 'hello@himvirasat.com', // PLACEHOLDER — set the real contact email
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/',
  // PLACEHOLDER — set the HimVirasat Instagram URL
  facebook: 'https://www.facebook.com/', // PLACEHOLDER — set the HimVirasat Facebook URL
};

export const whatsappLink = () =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export const BRAND = {
  name: 'HimVirasat',
  tagline: 'The Heritage of the Himalayas.',
  statement: 'Authentic Regional Foods from Jammu & the Himalayas.',
  philosophy: 'Preserving Heritage. Sharing Goodness.',
  description:
    'A regional food brand inspired by the land, seasons and culinary traditions of Jammu and the Himalayan region.',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Our Products', href: '#products' },
  { label: 'Our Promise', href: '#promise' },
  { label: 'Recipe', href: '/recipe' },
  { label: 'Contact', href: '#contact' },
];

// Image helper — requests a sized, compressed rendition from the CDN.
const pexels = (id: number) => (w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
const unsplash = (id: string) => (w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export type ImageSource = {
  src: (w: number) => string;
  alt: string;
};

export const IMAGES = {
  heroTerraces: {
    src: pexels(36908043),
    alt: 'Green terraced fields on a Himalayan hillside',
  },
  heroPeaks: {
    src: pexels(29167628),
    alt: 'Snow-capped Himalayan peaks lit by the morning sun',
  },
  introSpices: {
    src: unsplash('photo-1771541897176-44a3e01dc484'),
    alt: 'Whole and ground Indian spices arranged in metal bowls',
  },
  introRajma: {
    src: unsplash('photo-1788601988466-9f361c34c6cb'),
    alt: 'A home-style meal of curry, rice and flatbread on a wooden table',
  },
  storyValley: {
    src: unsplash('photo-1623612175509-30e97f5aa195'),
    alt: 'Green Himalayan valley with clouds settling between the mountains',
  },
  storyPeaks: {
    src: pexels(35408915),
    alt: 'Himalayan mountain range glowing at sunrise',
  },
  storyKitchen: {
    src: unsplash('photo-1592457711340-2412dc07b733'),
    alt: 'A traditional Indian spice box with whole spices and dried red chillies',
  },
  storyRajma: {
    src: pexels(12737913),
    alt: 'Rajma curry served with basmati rice, onion salad and green chutney',
  },
  storyVillage: {
    src: pexels(27540040),
    alt: 'A mountain village spread across a green Himalayan valley',
  },
  ctaLandscape: {
    src: unsplash('photo-1621617249658-f7541ef42a93'),
    alt: 'Snow-covered Himalayan ridges beneath a soft cloudy sky',
  },
} satisfies Record<string, ImageSource>;

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: ImageSource;
  featured?: boolean;
  label?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'jammu-rajma',
    name: 'Jammu Rajma',
    category: 'Regional Pulses',
    description:
      'A beloved regional staple, celebrated for its distinctive flavour and culinary tradition.',
    image: {
      src: pexels(18233225),
      alt: 'A wooden bowl filled with dark red rajma kidney beans',
    },
    featured: true,
  },
  {
    id: 'basmati-rice',
    name: 'Basmati Rice',
    category: 'Heritage Grains',
    description: 'Aromatic grains treasured in Indian kitchens.',
    label: 'Coming soon — sourced from the foothills of Jammu.',
    image: {
      src: pexels(36346840),
      alt: 'Close-up of long, slender uncooked basmati rice grains',
    },
  },
  {
    id: 'kashmiri-saffron',
    name: 'Kashmiri Saffron',
    category: 'Prized Spice',
    description:
      'A prized spice associated with the rich culinary heritage of Kashmir.',
    label: 'Coming soon — hand-picked from Kashmir valleys.',
    image: {
      src: unsplash('photo-1643471672168-f4a4b6cfa440'),
      alt: 'Deep red saffron strands spilling from a small glass jar',
    },
  },
  {
    id: 'himalayan-walnuts',
    name: 'Himalayan Walnuts',
    category: 'Orchard Produce',
    description: 'A cherished regional produce known for its rich flavour.',
    label: 'Coming soon — harvested from Himalayan orchards.',
    image: {
      src: pexels(18930135),
      alt: 'A heap of whole walnuts in their shells',
    },
  },
  {
    id: 'regional-honey',
    name: 'Regional Honey',
    category: 'Pantry Treasure',
    description:
      'A traditional favourite inspired by the richness of Himalayan landscapes.',
    label: 'Coming soon — pure, raw honey from Himalayan apiaries.',
    image: {
      src: unsplash('photo-1771405317876-616a62efd97e'),
      alt: 'Golden honey dripping from a wooden dipper',
    },
  },
  {
    id: 'traditional-pickles',
    name: 'Traditional Pickles',
    category: 'Kitchen Preserves',
    description: 'Regional flavours that bring traditional kitchens to life.',
    label: 'Coming soon — made using age-old family recipes.',
    image: {
      src: pexels(7812134),
      alt: 'Traditional Indian pickle in a rustic ceramic jar',
    },
  },
];

export type StoryChapter = {
  id: string;
  label: string;
  lead?: string;
  text?: string;
  image: ImageSource;
};

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'preserve',
    label: 'The Land',
    lead: 'Every region carries something worth preserving.',
    image: IMAGES.storyValley,
  },
  {
    id: 'nourishment',
    label: 'The Seasons',
    text:
      'In the mountains and valleys of Jammu and the wider Himalayan region, food is more than nourishment. It is a reflection of the land, the seasons, the people and traditions passed down through generations.',
    image: IMAGES.storyPeaks,
  },
  {
    id: 'belief',
    label: 'The Belief',
    text: 'We believe these distinctive regional flavours deserve to be discovered beyond the places they come from.',
    lead: 'That belief inspired HimVirasat.',
    image: IMAGES.storyKitchen,
  },
  {
    id: 'rajma',
    label: 'The Beginning',
    text:
      'Our journey begins with authentic Jammu Rajma. From there, we aspire to bring more regional treasures to households across India — celebrating their origins, respecting their traditions and sharing their stories.',
    image: IMAGES.storyRajma,
  },
  {
    id: 'home',
    label: 'The Promise',
    text:
      'We are building HimVirasat with a simple belief: the goodness of our heritage deserves a place in every modern home.',
    image: IMAGES.storyVillage,
  },
];

export const JOURNEY_STEPS = [
  {
    no: '01',
    title: 'Discover',
    icon: 'Compass',
    text: 'We explore distinctive regional food products and their culinary heritage.',
  },
  {
    no: '02',
    title: 'Source',
    icon: 'Sprout',
    text: 'We seek suitable suppliers and regional producers, paying attention to origin, quality and consistency.',
  },
  {
    no: '03',
    title: 'Select',
    icon: 'Search',
    text: 'We evaluate products carefully before deciding what deserves a place in the HimVirasat collection.',
  },
  {
    no: '04',
    title: 'Share',
    icon: 'HeartHandshake',
    text: 'Our vision is to make these regional treasures accessible to households across India.',
  },
];

export type PromiseItem = {
  title: string;
  icon: 'Mountain' | 'Fingerprint' | 'Scale' | 'Landmark';
  text: string;
};

export const PROMISES: PromiseItem[] = [
  {
    title: 'Regional Roots',
    icon: 'Mountain',
    text: 'Inspired by the distinct food traditions of Jammu and the Himalayas.',
  },
  {
    title: 'Authenticity',
    icon: 'Fingerprint',
    text: 'Respecting product origins and celebrating genuine regional identity.',
  },
  {
    title: 'Thoughtful Selection',
    icon: 'Scale',
    text: 'Giving importance to sourcing, product quality and consistency.',
  },
  {
    title: 'Heritage Preservation',
    icon: 'Landmark',
    text: 'Helping regional food traditions find a place in modern households.',
  },
];

export type NavLink = { label: string; href: string };
