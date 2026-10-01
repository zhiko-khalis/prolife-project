import type { MetadataRoute } from "next";
import { brands } from "@/lib/brands";
import { company } from "@/lib/company";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/about",
    "/brands",
    "/products",
    "/distribution",
    "/for-brands",
    "/contact",
    "/privacy",
    "/terms",
    ...brands.map((brand) => `/brands/${brand.slug}`),
    ...products.map((product) => `/products/${product.slug}`),
  ];

  return paths.map((path) => ({
    url: `${company.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
