"use client";

import { Container } from "@/components/ui/container";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section>
      <Container className="py-24 lg:py-32">
        <h1 className="font-display text-5xl font-semibold tracking-tight">Something went wrong.</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-ink/70">
          This page could not be displayed. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-medium text-white"
        >
          Try again
        </button>
      </Container>
    </section>
  );
}
