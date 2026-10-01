import type { Metadata } from "next";
import { InquiryForm } from "@/components/contact/inquiry-form";
import { Container } from "@/components/ui/container";
import { partnerCapabilities } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "For Brands",
  description:
    "Partner with Pro Life for market access and distribution in Iraq, Saudi Arabia, and the wider MENA region.",
  path: "/for-brands",
});

export default function ForBrandsPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <Container className="py-16 lg:py-24">
          <p className="text-xs tracking-[0.22em] text-gold uppercase">For brands</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.98] font-semibold tracking-tight sm:text-7xl">
            Grow Your Brand With Pro Life
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Pro Life provides market access and distribution for healthcare and wellness brands in
            Iraq, Saudi Arabia, and the wider MENA region.
          </p>
        </Container>
      </section>

      <section aria-labelledby="capabilities-heading">
        <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <h2 id="capabilities-heading" className="font-display text-4xl font-semibold tracking-tight">
              How we work with brands
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              A regional trading and distribution partner, with offices in Erbil and Riyadh and
              eight sales channels in Iraq.
            </p>
          </div>
          <ol className="divide-y divide-ink/10 border-y border-ink/10 lg:col-span-7 lg:col-start-6">
            {partnerCapabilities.map((item, index) => (
              <li key={item.title} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                <span className="text-sm tracking-[0.16em] text-health-deep sm:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="sm:col-span-10">
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-ink/70">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-mist" aria-labelledby="inquiry-heading">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <h2 id="inquiry-heading" className="font-display text-4xl font-semibold tracking-tight">
              Business inquiry
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink/70">
              Tell us about your brand. The form prepares an email to our business development
              team. It does not submit to a server on this website.
            </p>
          </div>
          <div className="lg:col-span-8">
            <InquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
