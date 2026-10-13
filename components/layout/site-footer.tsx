import Link from "next/link";
import { CompanyLogo } from "@/components/layout/company-logo";
import { company, mainNav, offices } from "@/lib/company";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="Pro Life home" className="inline-flex">
            <CompanyLogo className="h-16" whiteText />
          </Link>
          <p className="mt-5 max-w-xs font-display text-3xl leading-tight font-medium tracking-tight text-white">
            Better Products. Healthier Lives.
          </p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            Healthcare and wellness trading, import, export, and distribution from Riyadh, Erbil,
            Baghdad, Gaziantep, and Aleppo.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs tracking-[0.18em] text-cyan uppercase">Company</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {mainNav.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs tracking-[0.18em] text-cyan uppercase">Business</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>
              <Link href="/for-brands" className="hover:text-white">
                For Brands
              </Link>
            </li>
            <li>
              <Link href="/for-brands#inquiry" className="hover:text-white">
                Business Inquiry
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Product Catalog
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs tracking-[0.18em] text-cyan uppercase">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {offices.map((office) => (
              <li key={office.id}>
                <span className="block text-white">{office.city}</span>
                <span className="text-white/60">{office.address}</span>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li>
              <a href={`tel:${company.phone}`} className="hover:text-white">
                {company.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Pro Life. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
