import Image from "next/image";
import type { Brand } from "@/lib/types";
import { cn } from "@/lib/cn";

export function BrandLogo({
  brand,
  className,
  priority = false,
  sizes = "(max-width: 768px) 70vw, 320px",
}: {
  brand: Brand;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={brand.logo}
      alt={`${brand.name} logo`}
      width={brand.logoWidth}
      height={brand.logoHeight}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full object-contain", className)}
    />
  );
}
