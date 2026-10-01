import Link from "next/link";
import { brands } from "@/lib/brands";
import { getProductsByBrand } from "@/lib/products";
import { BrandLogo } from "@/components/brands/brand-logo";
import { Reveal } from "@/components/ui/reveal";

export function BrandPortfolio({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="flex flex-col">
      {brands.map((brand, index) => {
        const products = getProductsByBrand(brand.slug);
        const reversed = index % 2 === 1;
        return (
          <Reveal key={brand.slug}>
            <article
              className="border-t border-ink/10"
              style={{ backgroundColor: brand.colors.surface }}
            >
              <div
                className={`mx-auto grid min-h-[28rem] w-full max-w-[1240px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Link
                  href={`/brands/${brand.slug}`}
                  className="flex min-h-64 items-center justify-center rounded-[2rem] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(11,37,38,0.06)]"
                  aria-label={`${brand.name} brand`}
                >
                  <div className="w-full max-w-md">
                    <BrandLogo brand={brand} sizes="(max-width: 1024px) 80vw, 420px" />
                  </div>
                </Link>
                <div>
                  <p
                    className="text-xs font-medium tracking-[0.2em] uppercase"
                    style={{ color: brand.colors.accent }}
                  >
                    {brand.descriptor}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                    <Link href={`/brands/${brand.slug}`} className="hover:text-health-deep">
                      {brand.name}
                    </Link>
                  </h3>
                  {brand.tagline ? (
                    <p className="mt-4 font-display text-xl text-ink/80">{brand.tagline}</p>
                  ) : null}
                  <p className="mt-5 max-w-xl text-base leading-7 text-ink/70">
                    {detailed ? brand.introduction : brand.positioning}
                  </p>
                  {detailed ? (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {products.map((product) => (
                        <li key={product.slug}>
                          <Link
                            href={`/products/${product.slug}`}
                            className="inline-flex rounded-full border border-ink/10 bg-white px-3 py-1.5 text-sm text-ink/80 hover:border-ink/30"
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Link
                    href={`/brands/${brand.slug}`}
                    className="mt-8 inline-flex items-center text-sm font-medium text-ink"
                  >
                    Explore {brand.name}
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
