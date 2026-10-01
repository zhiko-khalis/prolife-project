import { getBrand } from "@/lib/brands";
import type { BrandSlug, Product } from "@/lib/types";

const photo = (file: string) => `/products/${file}`;

export const products: Product[] = [
  {
    id: "dr-vivo-soft-chew",
    slug: "dr-vivo-soft-chew-multivitamin-minerals",
    name: "Soft Chew Multivitamin & Minerals",
    brand: "dr-vivo",
    category: "Multivitamins",
    description:
      "Soft Chew Multivitamin & Minerals is a Dr. Vivo product, shown as a pouch and as raspberry-flavoured sticks.",
    images: [photo("drvivo2.JPG"), photo("drvivo1.JPG")],
    variants: [{ name: "Raspberry" }],
    packaging: "Pouch and stick packs",
  },
  {
    id: "dr-vivo-refreshing-tablets",
    slug: "dr-vivo-refreshing-tablets",
    name: "Refreshing Tablets",
    brand: "dr-vivo",
    category: "Tablets",
    description:
      "Sugar-free refreshing tablets for fresh breath, packed as 24 tablets in a tin.",
    images: [photo("drvivo4.JPG")],
    variants: [
      { name: "Mint" },
      { name: "Lemon" },
      { name: "Cherry" },
      { name: "Cinnamon" },
    ],
    packaging: "24-tablet tin",
    features: ["Sugar free"],
  },
  {
    id: "dr-vivo-chocobar",
    slug: "dr-vivo-chocobar",
    name: "Chocobar",
    brand: "dr-vivo",
    category: "Chocolate",
    description:
      "Chocobar is a Dr. Vivo chocolate bar labeled Multivitamin & Minerals.",
    images: [photo("drvivo3.JPG")],
    packaging: "Bar",
  },
  {
    id: "happy-vitamin-lollipops-display",
    slug: "happy-vitamin-lollipops-display",
    name: "Vitamin Lollipops Display",
    brand: "happy",
    category: "Vitamins",
    description: "Happy Vitamin Lollipops in a 100-piece gravity-feed display.",
    images: [photo("happy1.JPG")],
    packaging: "100-piece display",
  },
  {
    id: "happy-vitamin-lollipops-tin",
    slug: "happy-vitamin-lollipops-tin",
    name: "Vitamin Lollipops Tin",
    brand: "happy",
    category: "Vitamins",
    description: "Happy Vitamin Lollipops in a 150-piece tin.",
    images: [photo("happy2.JPG")],
    packaging: "150-piece tin",
  },
  {
    id: "happy-vitamin-lollipops-mini-box",
    slug: "happy-vitamin-lollipops-mini-box",
    name: "Vitamin Lollipops Mini Box",
    brand: "happy",
    category: "Vitamins",
    description: "Happy Vitamin Lollipops in a 4-piece mini box.",
    images: [photo("happy3.JPG")],
    packaging: "4-piece mini box",
  },
  {
    id: "happy-jelly-vitamin",
    slug: "happy-jelly-vitamin",
    name: "Jelly Vitamin",
    brand: "happy",
    category: "Vitamins",
    description:
      "Happy Jelly Vitamin is a fruit-flavoured jelly vitamin, shown in a 40-bag tub. Each bag is labeled 11.4 g.",
    images: [photo("happy4.JPG")],
    packaging: "40-bag tub",
  },
  {
    id: "shireen-stevia",
    slug: "shireen-stevia",
    name: "Stevia",
    brand: "shireen",
    category: "Sweeteners",
    description:
      "Shireen Stevia is a plant-based sweetener from stevia leaves, packed in a 250 g pouch.",
    images: [photo("shireen1.JPG")],
    packaging: "250 g pouch",
  },
  {
    id: "shireen-monk-fruit",
    slug: "shireen-monk-fruit",
    name: "Monk Fruit",
    brand: "shireen",
    category: "Sweeteners",
    description:
      "Shireen Monk Fruit is a sweetener from monk fruit extract, packed in a 250 g pouch.",
    images: [photo("shireen2.JPG")],
    packaging: "250 g pouch",
  },
  {
    id: "shireen-brown",
    slug: "shireen-brown",
    name: "Brown",
    brand: "shireen",
    category: "Sweeteners",
    description: "Shireen Brown is a brown sugar sweetener, packed in a 250 g pouch.",
    images: [photo("shireen3.JPG")],
    packaging: "250 g pouch",
  },
  {
    id: "shireen-xylitol",
    slug: "shireen-xylitol",
    name: "Xylitol",
    brand: "shireen",
    category: "Sweeteners",
    description: "Shireen Xylitol is a sugar-replacement sweetener, packed in a 250 g pouch.",
    images: [photo("shireen4.JPG")],
    packaging: "250 g pouch",
  },
  {
    id: "monivo-refresh-plus-cherry",
    slug: "monivo-refresh-plus-cherry",
    name: "Refresh+ Cherry",
    brand: "monivo",
    category: "Refreshing",
    description:
      "Monivo Refresh+ in cherry flavour, packed as 24 blisters. The pack is labeled with menthol and vitamin C.",
    images: [photo("monivo1.JPG")],
    packaging: "24 blisters",
  },
  {
    id: "monivo-refresh-plus-honey-lemon",
    slug: "monivo-refresh-plus-honey-lemon",
    name: "Refresh+ Honey Lemon",
    brand: "monivo",
    category: "Refreshing",
    description:
      "Monivo Refresh+ in honey lemon flavour, packed as 24 blisters. The pack is labeled with menthol and vitamin C.",
    images: [photo("monivo2.JPG")],
    packaging: "24 blisters",
  },
  {
    id: "monivo-refresh-plus-orange",
    slug: "monivo-refresh-plus-orange",
    name: "Refresh+ Orange",
    brand: "monivo",
    category: "Refreshing",
    description:
      "Monivo Refresh+ in orange flavour, packed as 24 blisters. The pack is labeled with menthol and vitamin C.",
    images: [photo("monivo3.JPG")],
    packaging: "24 blisters",
  },
  {
    id: "monivo-refresh-plus-eucalyptus",
    slug: "monivo-refresh-plus-eucalyptus",
    name: "Refresh+ Eucalyptus",
    brand: "monivo",
    category: "Refreshing",
    description:
      "Monivo Refresh+ in eucalyptus flavour, packed as 24 blisters. The pack is labeled with menthol and vitamin C.",
    images: [photo("monivo4.JPG")],
    packaging: "24 blisters",
  },
  {
    id: "monivo-refreshing-lozenges",
    slug: "monivo-refreshing-lozenges",
    name: "Refreshing Lozenges",
    brand: "monivo",
    category: "Refreshing",
    description: "Monivo refreshing lozenges, 24 per box.",
    images: [photo("monivo5.JPG")],
    variants: [
      { name: "Ice Mint" },
      { name: "Lemon" },
      { name: "Cherry" },
      { name: "Eucalyptus" },
    ],
    packaging: "24 lozenges",
  },
  {
    id: "monivo-refresh-plus-display",
    slug: "monivo-refresh-plus-display",
    name: "Refresh+ Display",
    brand: "monivo",
    category: "Refreshing",
    description:
      "A counter display of Monivo Refresh+ in Cherry, Eucalyptus, Orange, and Honey Lemon. Each flavour is packed as 24 blisters.",
    images: [photo("monivo6.JPG")],
    packaging: "Counter display, 24 blisters per flavour",
  },
];

const featuredSlugs = [
  "dr-vivo-soft-chew-multivitamin-minerals",
  "happy-vitamin-lollipops-display",
  "shireen-stevia",
  "monivo-refresh-plus-cherry",
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByBrand(slug: BrandSlug) {
  return products.filter((product) => product.brand === slug);
}

export function getFeaturedProducts() {
  return featuredSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product));
}

export function getRelatedProducts(product: Product) {
  return products.filter(
    (item) => item.brand === product.brand && item.slug !== product.slug,
  );
}

export function getCategories() {
  return [...new Set(products.map((product) => product.category))];
}

export function getBrandName(slug: BrandSlug) {
  return getBrand(slug)?.name ?? slug;
}
