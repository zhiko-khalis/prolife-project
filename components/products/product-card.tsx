import Link from "next/link";
import { getBrand } from "@/lib/brands";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/cn";
import { ProductVisual } from "@/components/products/product-visual";

export function ProductCard({
  product,
  ratio = "portrait",
  className,
}: {
  product: Product;
  ratio?: "portrait" | "square" | "wide";
  className?: string;
}) {
  const brand = getBrand(product.brand);

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_18px_50px_rgba(11,37,38,0.08)]",
        className,
      )}
    >
      <ProductVisual product={product} ratio={ratio} label={false} />
      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
        <p className="text-[11px] font-medium tracking-[0.18em] text-health-deep uppercase">
          {brand?.name}
        </p>
        <h3 className="mt-2 font-display text-xl leading-tight font-semibold tracking-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-ink/60">{product.category}</p>
        <span className="mt-5 text-sm font-medium text-ink">
          View Product
          <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
