import { BrandPortfolio } from "@/components/brands/brand-portfolio";
import { SalesChannels } from "@/components/distribution/sales-channels";
import { RegionVisual } from "@/components/distribution/region-visual";
import { HomeHero } from "@/components/hero/home-hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { PartnerCta } from "@/components/sections/partner-cta";
import { StatsBand } from "@/components/sections/stats-band";
import { WhyProLife } from "@/components/sections/why-pro-life";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pro Life | Healthcare & Wellness Solutions",
    description: company.description,
    url: "/",
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.siteUrl,
  email: company.email,
  telephone: company.phone,
  foundingDate: String(company.founded),
  description: company.description,
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Erbil",
      addressRegion: "Kurdistan Region",
      addressCountry: "IQ",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <HomeHero />
      <StatsBand />
      <FeaturedProducts />

      <section aria-labelledby="brands-heading">
        <Container className="pt-20 pb-10 lg:pt-28">
          <SectionHeading
            id="brands-heading"
            eyebrow="Portfolio"
            title="Brands Built for Better Living"
            text="Four proprietary healthcare and wellness brands, each with its own identity."
          />
        </Container>
        <BrandPortfolio />
      </section>

      <AboutPreview />

      <section className="bg-ink text-white" aria-labelledby="distribution-heading">
        <Container className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <SectionHeading
              id="distribution-heading"
              invert
              eyebrow="Presence"
              title="From Iraq to the Region"
              text="Pro Life is headquartered in Erbil, with a regional office in Riyadh. From there, the company distributes healthcare and wellness products across Iraq, Saudi Arabia, and the wider MENA region."
            />
          </div>
          <RegionVisual />
        </Container>
      </section>

      <section className="bg-white" aria-labelledby="channels-heading">
        <Container className="py-20 lg:py-24">
          <h2 id="channels-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Sales channels
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">
            Routes to market include healthcare providers, retail networks, e-commerce, government
            and institutions, and export and B2B.
          </p>
          <div className="mt-8">
            <SalesChannels />
          </div>
        </Container>
      </section>

      <WhyProLife />
      <PartnerCta />
      <ContactCta />
    </>
  );
}
