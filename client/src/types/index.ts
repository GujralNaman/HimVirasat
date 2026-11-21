export type ImageSource = {
  src: (w: number) => string;
  alt: string;
};

export type NavLink = { label: string; href: string };

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: ImageSource;
  featured?: boolean;
};

export type StoryChapter = {
  id: string;
  label: string;
  lead?: string;
  text?: string;
  image: ImageSource;
};

export type PromiseItem = {
  title: string;
  icon: string;
  text: string;
};
