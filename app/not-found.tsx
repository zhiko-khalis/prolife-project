import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section>
      <Container className="py-24 lg:py-32">
        <p className="text-xs tracking-[0.22em] text-health-deep uppercase">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          This page is not available.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-ink/70">
          The address may be incorrect, or the page may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-medium text-white"
        >
          Back to Pro Life
        </Link>
      </Container>
    </section>
  );
}
