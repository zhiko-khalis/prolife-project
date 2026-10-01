import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/product-detail";
import { getBrandName, getProduct, products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.name,
    description: `${product.name} by ${getBrandName(product.brand)}. ${product.description}`,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
