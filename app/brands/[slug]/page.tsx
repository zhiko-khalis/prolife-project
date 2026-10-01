import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandPage } from "@/components/brands/brand-page";
import { brands, getBrand } from "@/lib/brands";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return pageMetadata({
    title: brand.name,
    description: brand.introduction,
    path: `/brands/${brand.slug}`,
  });
}

export default async function BrandRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getBrand(slug)) notFound();
  return <BrandPage slug={slug} />;
}
