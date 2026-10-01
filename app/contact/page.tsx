import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { company, offices } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Pro Life in Erbil and Riyadh for customer service, business inquiries, and WhatsApp.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-mist">
      <Container className="py-16 lg:py-24">
        <p className="text-xs tracking-[0.22em] text-health-deep uppercase">Contact</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.98] font-semibold tracking-tight sm:text-7xl">
          Let&apos;s Build a Healthier Future Together.
        </h1>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {offices.map((office) => (
            <article key={office.id} className="rounded-[2rem] bg-white p-8 sm:p-10">
              <p className="text-xs tracking-[0.18em] text-health-deep uppercase">{office.role}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">{office.title}</h2>
              <p className="mt-4 text-lg text-ink/70">{office.address}</p>
            </article>
          ))}
        </div>

        <dl className="mt-8 grid gap-6 rounded-[2rem] bg-ink p-8 text-white sm:p-10 lg:grid-cols-3">
          <div>
            <dt className="text-xs tracking-[0.18em] text-gold uppercase">Customer Service</dt>
            <dd className="mt-3 text-lg">
              <a className="hover:text-gold" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.18em] text-gold uppercase">Business Inquiries</dt>
            <dd className="mt-3 text-lg">
              <a className="hover:text-gold" href={`mailto:${company.businessEmail}`}>
                {company.businessEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.18em] text-gold uppercase">Phone / WhatsApp</dt>
            <dd className="mt-3 text-lg">
              <a className="hover:text-gold" href={`tel:${company.phone}`}>
                {company.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={`mailto:${company.email}`}>Email</Button>
          <Button href="/for-brands" variant="secondary">
            Business Inquiry
          </Button>
          <Button href={company.whatsapp} variant="secondary">
            WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
