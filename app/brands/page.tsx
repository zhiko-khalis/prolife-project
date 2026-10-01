import type { Metadata } from "next";
import { BrandPortfolio } from "@/components/brands/brand-portfolio";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Brands",
  description:
    "Pro Life develops and manages Dr. Vivo, Happy, Shireen, and Monivo, a portfolio of healthcare and wellness brands.",
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-16 lg:py-24">
          <p className="text-xs tracking-[0.22em] text-health-deep uppercase">Portfolio</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.98] font-semibold tracking-tight sm:text-7xl">
            Our Brands
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
            We develop and manage a growing portfolio of healthcare and wellness brands designed to
            meet the everyday needs of consumers across the region.
          </p>
        </Container>
      </section>
      <BrandPortfolio detailed />
    </>
  );
}
