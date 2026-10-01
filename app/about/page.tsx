import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/sections/contact-cta";
import { WhyProLife } from "@/components/sections/why-pro-life";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { activities, company, offices } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Pro Life is a healthcare and wellness trading company founded in 2020, headquartered in Erbil with a regional office in Riyadh.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-mist">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.22em] text-health-deep uppercase">About Pro Life</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.98] font-semibold tracking-tight sm:text-7xl">
              Building a Healthier Future
            </h1>
          </div>
          <p className="self-end text-lg leading-8 text-ink/70 lg:col-span-5">{company.summary}</p>
        </Container>
      </section>

      <section aria-labelledby="who-heading">
        <Container className="grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
          <h2 id="who-heading" className="font-display text-4xl font-semibold tracking-tight lg:col-span-4">
            Who We Are
          </h2>
          <div className="space-y-5 text-lg leading-8 text-ink/75 lg:col-span-7 lg:col-start-6">
            <p>
              Pro Life imports, exports, and distributes health and wellness products. It owns and
              manages Dr. Vivo, Happy, Shireen, and Monivo, and also distributes other brands.
            </p>
            <p>
              The work serves consumers and businesses from the Erbil headquarters and the Riyadh
              regional office.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white" aria-labelledby="story-heading">
        <Container className="grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
          <p className="font-display text-7xl font-semibold tracking-tight text-gold lg:col-span-4">
            {company.founded}
          </p>
          <div className="lg:col-span-7">
            <h2 id="story-heading" className="font-display text-4xl font-semibold tracking-tight">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">{company.story}</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="vision-heading">
        <Container className="grid gap-px bg-ink/10 py-px lg:grid-cols-2">
          <div className="bg-white px-0 py-16 lg:py-24">
            <div className="max-w-xl px-5 sm:px-8 lg:ml-auto lg:px-10">
              <h2 id="vision-heading" className="font-display text-sm tracking-[0.2em] text-health-deep uppercase">
                Vision
              </h2>
              <p className="mt-5 font-display text-3xl leading-snug font-medium tracking-tight sm:text-4xl">
                {company.vision}
              </p>
            </div>
          </div>
          <div className="bg-mist px-0 py-16 lg:py-24">
            <div className="max-w-xl px-5 sm:px-8 lg:px-10">
              <h2 className="font-display text-sm tracking-[0.2em] text-health-deep uppercase">Mission</h2>
              <p className="mt-5 font-display text-3xl leading-snug font-medium tracking-tight sm:text-4xl">
                {company.mission}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white" aria-labelledby="what-heading">
        <Container className="py-20 lg:py-28">
          <h2 id="what-heading" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            What We Do
          </h2>
          <ol className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {activities.map((item, index) => (
              <li key={item.title} className="grid gap-3 py-7 sm:grid-cols-12 sm:gap-8">
                <span className="text-sm tracking-[0.16em] text-health-deep sm:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-semibold sm:col-span-4">{item.title}</h3>
                <p className="leading-7 text-ink/70 sm:col-span-6">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <WhyProLife heading="Why Pro Life" intro={company.teamDetail + ", working from two regional offices."} />

      <section aria-labelledby="locations-heading">
        <Container className="py-20 lg:py-28">
          <h2 id="locations-heading" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Our Locations
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {offices.map((office) => (
              <article key={office.id} className="border-t border-ink pt-6">
                <p className="text-xs tracking-[0.18em] text-health-deep uppercase">{office.role}</p>
                <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight">{office.city}</h3>
                <p className="mt-3 text-lg text-ink/70">{office.address}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Contact Pro Life</Button>
            <Button href="/for-brands" variant="secondary">
              Become a Partner
            </Button>
          </div>
          <p className="mt-6 text-sm text-ink/60">
            Read more about <Link href="/distribution" className="underline underline-offset-4">distribution</Link> and the{" "}
            <Link href="/brands" className="underline underline-offset-4">brand portfolio</Link>.
          </p>
        </Container>
      </section>
      <ContactCta />
    </>
  );
}
