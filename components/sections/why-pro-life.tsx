import { whyProLife } from "@/lib/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyProLife({
  heading = "Why Pro Life",
  intro = "A regional healthcare and wellness company built around products, distribution, and partnership.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="bg-mist" aria-labelledby="why-heading">
      <Container className="py-20 lg:py-28">
        <SectionHeading id="why-heading" eyebrow="The difference" title={heading} text={intro} />
        <ol className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {whyProLife.map((item, index) => (
            <li key={item.title} className="grid gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-8">
              <span className="font-display text-sm tracking-[0.18em] text-health-deep sm:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-semibold tracking-tight sm:col-span-4 sm:text-3xl">
                {item.title}
              </h3>
              <p className="text-base leading-7 text-ink/70 sm:col-span-6">{item.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
