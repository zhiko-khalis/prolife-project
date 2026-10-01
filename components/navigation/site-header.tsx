"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/company";
import { CompanyLogo } from "@/components/layout/company-logo";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { Container } from "@/components/ui/container";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-ink/10 bg-white/95 shadow-[0_8px_30px_rgba(11,37,38,0.04)] backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="shrink-0" aria-label="Pro Life home">
          <CompanyLogo priority alt="" className="h-14" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm tracking-wide transition-colors ${
                  active ? "text-ink" : "text-ink/65 hover:text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-health transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/for-brands"
            className="hidden min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-white transition hover:bg-[#16383a] sm:inline-flex"
          >
            Business Inquiry
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span className="h-px w-full bg-ink" />
              <span className="h-px w-full bg-ink" />
              <span className="h-px w-3 bg-ink" />
            </span>
          </button>
        </div>
      </Container>
      <div id="mobile-menu">
        <MobileNav open={open} onClose={() => setOpen(false)} pathname={pathname} />
      </div>
    </header>
  );
}
