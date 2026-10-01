import Image from "next/image";
import { getBrand } from "@/lib/brands";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/cn";

const ratioClass = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[16/10]",
} as const;

export function ProductVisual({
  product,
  priority = false,
  ratio = "portrait",
  label = true,
  className,
  sizes = "(max-width: 768px) 90vw, 480px",
}: {
  product: Product;
  priority?: boolean;
  ratio?: keyof typeof ratioClass;
  label?: boolean;
  className?: string;
  sizes?: string;
}) {
  const brand = getBrand(product.brand);
  const image = product.images[0];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-white",
        ratioClass[ratio],
        className,
      )}
      style={image ? undefined : { backgroundColor: brand?.colors.surface ?? "#F5F8F6" }}
    >
      {image ? (
        <Image
          src={image}
          alt={product.name}
          fill
          priority={priority}
          sizes={sizes}
          className="object-contain p-6 sm:p-8"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center px-6 py-8">
          <div
            className="mb-6 h-1 w-10"
            style={{ backgroundColor: brand?.colors.accent ?? "#2E8B78" }}
          />
          {brand ? (
            <div className="w-[72%] max-w-[240px]">
              <Image
                src={brand.logo}
                alt=""
                width={brand.logoWidth}
                height={brand.logoHeight}
                className="h-auto w-full object-contain"
                sizes="240px"
              />
            </div>
          ) : null}
          {label ? (
            <p className="mt-6 text-center font-display text-lg leading-tight font-medium text-ink/80">
              {product.name}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
