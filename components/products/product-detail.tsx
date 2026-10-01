import Link from "next/link";
import { getBrand } from "@/lib/brands";
import { getRelatedProducts } from "@/lib/products";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/products/product-card";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductVisual } from "@/components/products/product-visual";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function ProductDetail({ product }: { product: Product }) {
  const brand = getBrand(product.brand);
  const related = getRelatedProducts(product);

  return (
    <article>
      <Container className="py-10 sm:py-14 lg:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-ink/55">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/products" className="hover:text-ink">
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/brands/${product.brand}`} className="hover:text-ink">
                {brand?.name}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">{product.name}</li>
          </ol>
        </nav>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            {product.images.length > 1 ? (
              <ProductGallery product={product} />
            ) : (
              <div className="overflow-hidden rounded-[2rem] border border-ink/10">
                <ProductVisual product={product} priority ratio="square" sizes="(max-width: 1024px) 100vw, 560px" />
              </div>
            )}
          </div>

          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-xs font-medium tracking-[0.2em] text-health-deep uppercase">
              {brand ? (
                <Link href={`/brands/${brand.slug}`} className="hover:text-ink">
                  {brand.name}
                </Link>
              ) : null}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 text-sm tracking-[0.14em] text-ink/50 uppercase">{product.category}</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/75">{product.description}</p>

            {product.variants && product.variants.length > 0 ? (
              <div className="mt-8">
                <h2 className="text-sm font-medium tracking-[0.16em] text-ink/55 uppercase">
                  Variants
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <li
                      key={variant.name}
                      className="rounded-full border border-ink/10 bg-mist px-4 py-2 text-sm text-ink"
                    >
                      {variant.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {product.packaging ? (
              <div className="mt-8">
                <h2 className="text-sm font-medium tracking-[0.16em] text-ink/55 uppercase">
                  Packaging
                </h2>
                <p className="mt-3 text-base leading-7 text-ink/75">{product.packaging}</p>
              </div>
            ) : null}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/for-brands">Business Inquiry</Button>
              <Button href="/contact" variant="secondary">
                Contact Pro Life
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {product.ingredients || product.features?.length || product.documents?.length ? (
        <section className="border-t border-ink/10 bg-mist">
          <Container className="grid gap-10 py-16 lg:grid-cols-3">
            {product.ingredients ? (
              <div>
                <h2 className="font-display text-2xl font-semibold">Ingredients</h2>
                <p className="mt-4 leading-7 text-ink/75">{product.ingredients}</p>
              </div>
            ) : null}
            {product.features && product.features.length > 0 ? (
              <div>
                <h2 className="font-display text-2xl font-semibold">Features</h2>
                <ul className="mt-4 space-y-2 text-ink/75">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {product.documents && product.documents.length > 0 ? (
              <div>
                <h2 className="font-display text-2xl font-semibold">Documents</h2>
                <ul className="mt-4 space-y-2">
                  {product.documents.map((document) => (
                    <li key={document.href}>
                      <a href={document.href} className="text-health-deep underline-offset-4 hover:underline">
                        {document.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-t border-ink/10" aria-labelledby="related-heading">
          <Container className="py-16 sm:py-20">
            <h2 id="related-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              More from {brand?.name}
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <ProductCard product={item} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </article>
  );
}
