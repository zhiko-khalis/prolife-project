import { company, offices } from "@/lib/company";
import { Container } from "@/components/ui/container";

export function ContactCta() {
  return (
    <section className="bg-white" aria-labelledby="contact-cta-heading">
      <Container className="py-20 lg:py-28">
        <h2
          id="contact-cta-heading"
          className="max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight sm:text-6xl"
        >
          Let&apos;s Build a Healthier Future Together.
        </h2>
        <dl className="mt-12 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <div key={office.id}>
              <dt className="text-xs tracking-[0.18em] text-health-deep uppercase">{office.city}</dt>
              <dd className="mt-3 text-lg text-ink">{office.address}</dd>
            </div>
          ))}
          <div>
            <dt className="text-xs tracking-[0.18em] text-health-deep uppercase">Email</dt>
            <dd className="mt-3 space-y-2 text-lg">
              <a className="block hover:text-health-deep" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              <a className="block hover:text-health-deep" href={`mailto:${company.businessEmail}`}>
                {company.businessEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.18em] text-health-deep uppercase">Phone / WhatsApp</dt>
            <dd className="mt-3 text-lg">
              <a className="hover:text-health-deep" href={`tel:${company.phone}`}>
                {company.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
