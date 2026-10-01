import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrand } from "@/lib/brands";
import { getProductsByBrand } from "@/lib/products";
import { BrandLogo } from "@/components/brands/brand-logo";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function BrandPage({ slug }: { slug: string }) {
  const brand = getBrand(slug);
  if (!brand) notFound();

  if (brand.layout === "happy") return <HappyPage />;
  if (brand.layout === "shireen") return <ShireenPage />;
  if (brand.layout === "monivo") return <MonivoPage />;
  return <VivoPage />;
}

function VivoPage() {
  const brand = getBrand("dr-vivo");
  const products = getProductsByBrand("dr-vivo");
  if (!brand) return null;

  return (
    <article style={{ backgroundColor: brand.colors.surface }}>
      <section style={{ backgroundColor: brand.colors.hero, color: brand.colors.heroText }}>
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="text-xs tracking-[0.22em] text-[#7EE0D6] uppercase">Wellness brand</p>
            <h1 className="mt-4 font-display text-5xl leading-none font-semibold tracking-tight sm:text-7xl">
              Dr. Vivo
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">{brand.introduction}</p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-[2rem] bg-white px-8 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:px-12">
              <BrandLogo brand={brand} priority sizes="(max-width: 1024px) 80vw, 460px" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <p className="text-xs tracking-[0.2em] text-[#6A5AE0] uppercase">Positioning</p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-semibold tracking-tight text-[#241B4A]">
              Premium wellness, modern in tone.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#241B4A]/75 lg:col-span-7 lg:col-start-6">
            {brand.positioning} The range covers Soft Chew Multivitamin & Minerals, Chocobar, and
            refreshing tablets.
          </p>
        </Container>
      </section>

      <ProductBand title="The Dr. Vivo range" products={products} />
      <BrandClose
        title="Bring Dr. Vivo to your market."
        tone={brand.colors.hero}
      />
    </article>
  );
}

function HappyPage() {
  const brand = getBrand("happy");
  const products = getProductsByBrand("happy");
  if (!brand) return null;

  return (
    <article className="bg-white">
      <div
        className="h-2 w-full"
        style={{
          background:
            "linear-gradient(90deg, #3CB44A 0%, #F2C14E 28%, #F08A2A 52%, #F25C9B 76%, #3C8DFF 100%)",
        }}
      />
      <section className="overflow-hidden">
        <Container className="py-16 text-center lg:py-24">
          <p className="text-xs tracking-[0.22em] text-[#E25B2A] uppercase">Vitamin & wellness brand</p>
          <h1 className="sr-only">Happy</h1>
          <div className="mx-auto mt-8 max-w-3xl">
            <BrandLogo brand={brand} priority sizes="(max-width: 768px) 90vw, 720px" />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-ink/75">{brand.introduction}</p>
        </Container>
      </section>
      <section className="bg-[#FFF6EE]">
        <Container className="grid gap-8 py-16 lg:grid-cols-2 lg:py-20">
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Colorful, energetic, and made to feel friendly.
          </h2>
          <p className="text-lg leading-8 text-ink/75">{brand.positioning}</p>
        </Container>
      </section>
      <ProductBand title="Happy products" products={products} />
      <BrandClose title="Share Happy across the region." tone="#1A1A1A" />
    </article>
  );
}

function ShireenPage() {
  const brand = getBrand("shireen");
  const products = getProductsByBrand("shireen");
  if (!brand) return null;

  return (
    <article style={{ backgroundColor: "#F7F4EE" }}>
      <section>
        <Container className="py-16 lg:py-28">
          <p className="text-xs tracking-[0.22em] text-[#2F8F62] uppercase">Sweetener brand</p>
          <div className="mt-8 max-w-3xl rounded-[2rem] bg-white px-6 py-8 sm:px-10">
            <BrandLogo brand={brand} priority sizes="(max-width: 768px) 90vw, 680px" />
          </div>
          <h1 className="mt-10 max-w-4xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-[#1C2B24] sm:text-6xl">
            {brand.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1C2B24]/75">{brand.introduction}</p>
        </Container>
      </section>
      <section className="bg-white">
        <Container className="grid items-end gap-8 py-16 lg:grid-cols-12 lg:py-24">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[#1C2B24] lg:col-span-5">
            A clean, natural sweetener range.
          </h2>
          <p className="text-lg leading-8 text-[#1C2B24]/75 lg:col-span-6 lg:col-start-7">
            {brand.positioning} Stevia, Monk Fruit, Brown, and Xylitol are the products currently
            in the Shireen range.
          </p>
        </Container>
      </section>
      <ProductBand title="The Shireen range" products={products} />
      <BrandClose title="Partner on Shireen." tone="#1C2B24" />
    </article>
  );
}

function MonivoPage() {
  const brand = getBrand("monivo");
  const products = getProductsByBrand("monivo");
  if (!brand) return null;

  const variants = [
    { name: "Cherry", href: "/products/monivo-refresh-plus-cherry", color: "#F8E4DC" },
    { name: "Honey Lemon", href: "/products/monivo-refresh-plus-honey-lemon", color: "#F8F1C8" },
    { name: "Orange", href: "/products/monivo-refresh-plus-orange", color: "#F8E6C8" },
    { name: "Eucalyptus", href: "/products/monivo-refresh-plus-eucalyptus", color: "#E4EEF8" },
  ];

  return (
    <article>
      <section style={{ backgroundColor: brand.colors.hero, color: brand.colors.heroText }}>
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs tracking-[0.22em] text-[#B7D7A8] uppercase">Refreshing wellness</p>
            <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl">Monivo</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">{brand.introduction}</p>
          </div>
          <div className="rounded-[2rem] bg-[#F7F3EA] px-8 py-10">
            <BrandLogo brand={brand} priority sizes="(max-width: 1024px) 80vw, 460px" />
          </div>
        </Container>
      </section>
      <section className="bg-[#F7F3EA]">
        <Container className="py-16 lg:py-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-[#14352C]">
              Refresh+ variants
            </h2>
            <Link href="/products/monivo-refresh-plus-display" className="text-sm font-medium text-[#14352C]">
              View the display
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {variants.map((variant) => (
              <li key={variant.name}>
                <Link
                  href={variant.href}
                  className="flex min-h-52 flex-col justify-between rounded-[1.75rem] p-6"
                  style={{ backgroundColor: variant.color }}
                >
                  <span className="text-xs tracking-[0.18em] text-[#14352C]/60 uppercase">Variant</span>
                  <span className="font-display text-3xl font-semibold text-[#14352C]">{variant.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#14352C]/75">{brand.positioning}</p>
        </Container>
      </section>
      <ProductBand title="Monivo products" products={products} />
      <BrandClose title="Distribute Monivo with Pro Life." tone="#14352C" />
    </article>
  );
}

function ProductBand({
  title,
  products,
}: {
  title: string;
  products: ReturnType<typeof getProductsByBrand>;
}) {
  return (
    <section className="bg-mist" aria-labelledby="brand-products-heading">
      <Container className="py-16 lg:py-20">
        <h2 id="brand-products-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function BrandClose({ title, tone }: { title: string; tone: string }) {
  return (
    <section style={{ backgroundColor: tone }} className="text-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center lg:py-20">
        <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/for-brands" variant="light">
            Business Inquiry
          </Button>
          <Button href="/contact" variant="ghost" className="text-white">
            Contact Pro Life
          </Button>
        </div>
      </Container>
    </section>
  );
}
