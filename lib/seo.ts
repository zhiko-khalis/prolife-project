import type { Metadata } from "next";
import { company } from "@/lib/company";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${company.name}`,
      description,
      url: path,
      siteName: company.name,
      locale: "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.name}`,
      description,
    },
  };
}
