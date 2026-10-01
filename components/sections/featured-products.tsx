import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/products/product-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-white" aria-labelledby="featured-heading">
      <Container className="py-20 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            id="featured-heading"
            eyebrow="Catalog"
            title="Selected from the portfolio"
            text="A sample of products from Dr. Vivo, Happy, Shireen, and Monivo."
          />
          <Link href="/products" className="shrink-0 text-sm font-medium text-ink">
            View all products
          </Link>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
