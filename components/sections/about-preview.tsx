import Link from "next/link";
import { company } from "@/lib/company";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function AboutPreview() {
  return (
    <section className="bg-white" aria-labelledby="about-heading">
      <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="font-display text-7xl leading-none font-semibold tracking-tight text-health/30 sm:text-8xl">
            {company.founded}
          </p>
          <h2
            id="about-heading"
            className="mt-4 font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl"
          >
            Building a Healthier Future
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
          <p className="text-lg leading-8 text-ink/75">{company.summary}</p>
          <p className="mt-5 text-lg leading-8 text-ink/75">{company.story}</p>
          <Link
            href="/about"
            className="mt-8 inline-flex min-h-12 items-center text-sm font-medium text-ink"
          >
            Discover Pro Life
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
