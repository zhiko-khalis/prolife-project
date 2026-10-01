export const brandSlugs = ["dr-vivo", "happy", "shireen", "monivo"] as const;

export type BrandSlug = (typeof brandSlugs)[number];

export type BrandLayout = "vivo" | "happy" | "shireen" | "monivo";

export type ProductVariant = {
  name: string;
};

export type ProductDocument = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: BrandSlug;
  category: string;
  description: string;
  images: string[];
  variants?: ProductVariant[];
  packaging?: string;
  ingredients?: string;
  features?: string[];
  documents?: ProductDocument[];
};

export type Brand = {
  slug: BrandSlug;
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  descriptor: string;
  tagline?: string;
  introduction: string;
  positioning: string;
  layout: BrandLayout;
  colors: {
    hero: string;
    heroText: string;
    accent: string;
    surface: string;
    ink: string;
  };
};
