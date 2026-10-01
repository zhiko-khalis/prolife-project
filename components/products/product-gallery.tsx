"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/types";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const current = product.images[active] ?? product.images[0];

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-ink/10 bg-mist">
        {current ? (
          <Image
            src={current}
            alt={`${product.name} photograph ${active + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-contain p-6 sm:p-10"
          />
        ) : null}
      </div>
      <ul className="mt-4 flex gap-3">
        {product.images.map((image, index) => (
          <li key={image}>
            <button
              type="button"
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className={`relative h-20 w-20 overflow-hidden rounded-2xl border bg-white ${
                index === active ? "border-ink" : "border-ink/10"
              }`}
            >
              <Image src={image} alt="" fill sizes="80px" className="object-contain p-2" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
