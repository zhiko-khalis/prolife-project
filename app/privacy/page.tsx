import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { company } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How the Pro Life website handles information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section>
      <Container className="max-w-3xl py-16 lg:py-24">
        <h1 className="font-display text-5xl font-semibold tracking-tight">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-base leading-7 text-ink/75">
          <p>
            This website presents Pro Life, its brands, and its products. It does not operate a
            shop, customer accounts, or checkout.
          </p>
          <p>
            The business inquiry form does not send data to a Pro Life server. It opens your own
            email application so you can write to {company.businessEmail}.
          </p>
          <p>
            If you email or message Pro Life, we use those details to respond to your enquiry.
            For privacy questions, contact {company.email}.
          </p>
        </div>
      </Container>
    </section>
  );
}
