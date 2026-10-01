import type { Metadata } from "next";
import { SalesChannels } from "@/components/distribution/sales-channels";
import { RegionVisual } from "@/components/distribution/region-visual";
import { PartnerCta } from "@/components/sections/partner-cta";
import { Container } from "@/components/ui/container";
import { company } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Distribution",
  description:
    "Pro Life distributes healthcare and wellness products from Erbil and Riyadh across Iraq, Saudi Arabia, and the wider MENA region.",
  path: "/distribution",
});

export default function DistributionPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs tracking-[0.22em] text-gold uppercase">Distribution</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.98] font-semibold tracking-tight sm:text-7xl">
              From Iraq to the Region
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Pro Life imports, exports, and distributes healthcare and wellness products from its
              head office in Erbil and its regional office in Riyadh.
            </p>
          </div>
          <RegionVisual />
        </Container>
      </section>

      <section aria-labelledby="presence-heading">
        <Container className="grid gap-8 py-20 lg:grid-cols-12 lg:py-28">
          <h2 id="presence-heading" className="font-display text-4xl font-semibold tracking-tight lg:col-span-4">
            Regional Presence
          </h2>
          <div className="space-y-5 text-lg leading-8 text-ink/75 lg:col-span-7 lg:col-start-6">
            <p>
              Iraq is home to the Erbil headquarters and eight sales channels. Saudi Arabia is
              served from the Riyadh regional office. The wider MENA region is part of the
              company&apos;s distribution horizon.
            </p>
            <p>{company.story}</p>
          </div>
        </Container>
      </section>

      <section className="bg-mist" aria-labelledby="network-heading">
        <Container className="py-20 lg:py-24">
          <h2 id="network-heading" className="font-display text-4xl font-semibold tracking-tight">
            Distribution Network
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            The network combines proprietary brands with distribution for other brands. Products
            move through healthcare, retail, e-commerce, institutional, and export channels.
          </p>
        </Container>
      </section>

      <section className="bg-white" aria-labelledby="channels-heading">
        <Container className="py-20 lg:py-24">
          <h2 id="channels-heading" className="font-display text-4xl font-semibold tracking-tight">
            Sales Channels
          </h2>
          <div className="mt-8">
            <SalesChannels />
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10" aria-labelledby="expertise-heading">
        <Container className="grid gap-8 py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <h2 id="expertise-heading" className="font-display text-4xl font-semibold tracking-tight">
              Market Expertise
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/75">
              {company.teamDetail} combine local market knowledge with international expertise,
              working across Iraq, Saudi Arabia, and the wider MENA region.
            </p>
          </div>
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight">Partnerships</h2>
            <p className="mt-5 text-lg leading-8 text-ink/75">
              Pro Life partners with brands that want market access and distribution in the region,
              alongside the brands it owns and manages.
            </p>
          </div>
        </Container>
      </section>
      <PartnerCta />
    </>
  );
}
