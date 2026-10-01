import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function PartnerCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-white" aria-labelledby="partner-heading">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-1.5 bg-health" />
      <Container className="grid items-end gap-10 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-8">
          <p className="text-xs tracking-[0.22em] text-gold uppercase">Partnerships</p>
          <h2
            id="partner-heading"
            className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl"
          >
            Grow Your Brand With Pro Life
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Looking to expand your healthcare or wellness brand into Iraq, Saudi Arabia or the wider
            MENA region?
          </p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <Button href="/for-brands" variant="light">
            Become a Partner
          </Button>
        </div>
      </Container>
    </section>
  );
}
