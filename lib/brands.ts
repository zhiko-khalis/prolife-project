import type { Brand, BrandSlug } from "@/lib/types";

export const brands: Brand[] = [
  {
    slug: "dr-vivo",
    name: "Dr. Vivo",
    logo: "/logo/dr-vivo.png.jpg",
    logoWidth: 1280,
    logoHeight: 1280,
    descriptor: "Wellness",
    introduction:
      "Dr. Vivo is a wellness brand owned and managed by Pro Life. The range includes Soft Chew Multivitamin & Minerals, Chocobar, and Refreshing Tablets in Mint, Lemon, Cherry, and Cinnamon.",
    positioning:
      "Dr. Vivo is presented as a premium, modern, wellness-focused brand within the Pro Life portfolio.",
    layout: "vivo",
    colors: {
      hero: "#2A215F",
      heroText: "#F7F5FF",
      accent: "#6A5AE0",
      surface: "#F4F1FC",
      ink: "#241B4A",
    },
  },
  {
    slug: "happy",
    name: "Happy",
    logo: "/logo/happy.png.jpg",
    logoWidth: 1280,
    logoHeight: 624,
    descriptor: "Vitamins & wellness",
    introduction:
      "Happy is a colorful vitamin and wellness brand owned and managed by Pro Life. The range includes vitamin lollipops in a display, tin, and mini box, plus Jelly Vitamin.",
    positioning:
      "Happy is a colorful, energetic, friendly, and youthful brand with a modern character.",
    layout: "happy",
    colors: {
      hero: "#FFFFFF",
      heroText: "#1A1A1A",
      accent: "#F08A2A",
      surface: "#FFF8F3",
      ink: "#1A1A1A",
    },
  },
  {
    slug: "shireen",
    name: "Shireen",
    logo: "/logo/shireen.png.jpg",
    logoWidth: 1280,
    logoHeight: 426,
    descriptor: "Sweeteners",
    tagline: "Sweetness That Smiles Back",
    introduction:
      "Shireen is a sweetener and sugar-alternative brand owned and managed by Pro Life. The range includes Stevia, Monk Fruit, Brown, and Xylitol.",
    positioning:
      "Shireen is a natural, clean, and fresh sweetener brand with a premium, modern identity.",
    layout: "shireen",
    colors: {
      hero: "#F6F3EC",
      heroText: "#1C2B24",
      accent: "#2F8F62",
      surface: "#F7F6F1",
      ink: "#1C2B24",
    },
  },
  {
    slug: "monivo",
    name: "Monivo",
    logo: "/logo/monivo.png.jpg",
    logoWidth: 914,
    logoHeight: 626,
    descriptor: "Refreshing wellness",
    introduction:
      "Monivo is a refreshing wellness brand owned and managed by Pro Life. Refresh+ is offered in Cherry, Honey Lemon, Orange, and Eucalyptus. The range also includes refreshing lozenges.",
    positioning:
      "Monivo is a refreshing, warm, and modern wellness brand in the Pro Life portfolio.",
    layout: "monivo",
    colors: {
      hero: "#14352C",
      heroText: "#F4F7F2",
      accent: "#3E8F45",
      surface: "#F3F7F2",
      ink: "#14352C",
    },
  },
];

export function getBrand(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}

export function isBrandSlug(slug: string): slug is BrandSlug {
  return brands.some((brand) => brand.slug === slug);
}
