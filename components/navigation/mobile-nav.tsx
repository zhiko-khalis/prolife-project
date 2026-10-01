"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CompanyLogo } from "@/components/layout/company-logo";
import { mainNav } from "@/lib/company";

export function MobileNav({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const root = panelRef.current;
    const focusable = root
      ? Array.from(root.querySelectorAll<HTMLElement>("a, button"))
      : [];
    focusable[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-white"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center justify-between px-5 py-5 sm:px-8">
            <Link href="/" onClick={onClose} aria-label="Pro Life home" className="inline-flex rounded-2xl bg-white px-3 py-1.5">
              <CompanyLogo alt="" className="h-10" />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20"
              aria-label="Close menu"
            >
              <span className="relative block h-3.5 w-3.5">
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 -rotate-45 bg-white" />
              </span>
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center px-6" aria-label="Mobile">
            <ul className="space-y-1">
              {mainNav.map((item, index) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.05 * index, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 font-display text-4xl tracking-tight ${
                        active ? "text-gold" : "text-white"
                      }`}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
          <div className="px-6 pb-10">
            <Link
              href="/for-brands"
              onClick={onClose}
              className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-medium text-ink"
            >
              Business Inquiry
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
