"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { stats } from "@/lib/company";

function useCount(target: number, active: boolean, enabled: boolean) {
  const reduce = useReducedMotion();
  const shouldAnimate = enabled && active && reduce === false;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;
    const start = performance.now();
    const duration = 900;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shouldAnimate, target]);

  if (!enabled || reduce === true) return target;
  if (!active) return 0;
  return value;
}

function StatItem({
  value,
  suffix,
  label,
  count,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  count: boolean;
  active: boolean;
}) {
  const display = useCount(value, active, count);
  return (
    <div className="px-2 py-6 sm:px-6">
      <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm tracking-wide text-white/65">{label}</p>
    </div>
  );
}

export function StatsBand() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} aria-label="Company figures" className="bg-ink">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={[
              index % 2 === 1 ? "border-l border-white/10" : "",
              index >= 2 ? "border-t border-white/10" : "",
              "lg:border-t-0",
              index > 0 ? "lg:border-l lg:border-white/10" : "",
            ].join(" ")}
          >
            <StatItem
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              count={stat.count}
              active={active}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
