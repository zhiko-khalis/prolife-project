import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { company } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms for using the Pro Life corporate website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section>
      <Container className="max-w-3xl py-16 lg:py-24">
        <h1 className="font-display text-5xl font-semibold tracking-tight">Terms & Conditions</h1>
        <div className="mt-8 space-y-5 text-base leading-7 text-ink/75">
          <p>
            This website is a corporate presentation of Pro Life. Product pages are a catalog for
            discovery. They are not an online shop, and no prices are published here.
          </p>
          <p>
            Product information is limited to what Pro Life has confirmed for this site. It is not
            medical advice. For specifications or availability, contact Pro Life.
          </p>
          <p>
            A partnership inquiry is a request to start a conversation. It is not a completed
            commercial agreement.
          </p>
          <p>Questions about these terms can be sent to {company.email}.</p>
        </div>
      </Container>
    </section>
  );
}
