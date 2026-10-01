import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/product-catalog";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description:
    "Explore healthcare and wellness products from Dr. Vivo, Happy, Shireen, and Monivo.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <section className="bg-mist">
      <Container className="py-16 lg:py-20">
        <p className="text-xs tracking-[0.22em] text-health-deep uppercase">Catalog</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-6xl">Products</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
          A corporate catalog of Pro Life brands. Product pages are for discovery and business
          enquiries. Prices are not listed, and nothing on this site is sold online.
        </p>
        <div className="mt-12 rounded-[2rem] bg-white p-5 sm:p-8">
          <ProductCatalog />
        </div>
      </Container>
    </section>
  );
}
