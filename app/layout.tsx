import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";
import { company } from "@/lib/company";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Pro Life | Healthcare & Wellness Solutions",
    template: "%s | Pro Life",
  },
  description: company.description,
  applicationName: company.name,
  openGraph: {
    type: "website",
    locale: "en",
    siteName: company.name,
    title: "Pro Life | Healthcare & Wellness Solutions",
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Life | Healthcare & Wellness Solutions",
    description: company.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
