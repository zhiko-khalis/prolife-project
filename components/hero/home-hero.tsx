"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const slides = [
  {
    image: "/hero/nature-lake.webp",
    imageAlt: "A calm alpine lake surrounded by green mountains",
    eyebrow: "Nature-led wellness",
    title: "Better Products.",
    accent: "Healthier Lives.",
    text: "Healthcare and wellness solutions inspired by nature, selected with care, and built for everyday wellbeing.",
    position: "object-center",
  },
  {
    image: "/hero/healthcare-research.webp",
    imageAlt: "A healthcare researcher examining medicinal leaves",
    eyebrow: "Healthcare & innovation",
    title: "Science With",
    accent: "A Human Touch.",
    text: "We connect thoughtful healthcare innovation with the people and communities who need it most.",
    position: "object-center",
  },
  {
    image: "/hero/medicinal-herbs.webp",
    imageAlt: "Medicinal herbs growing in a sunlit mountain meadow",
    eyebrow: "Naturally better",
    title: "Wellness Rooted",
    accent: "In Nature.",
    text: "From trusted ingredients to meaningful partnerships, we help better wellbeing grow across the region.",
    position: "object-center",
  },
] as const;

export function HomeHero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [reduce]);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);
  const slide = slides[active];

  return (
    <section
      className="relative isolate min-h-144 overflow-hidden bg-ink sm:min-h-160 lg:min-h-[calc(100svh-5rem)]"
      aria-roledescription="carousel"
      aria-label="Healthcare and nature highlights"
    >
      <div className="absolute inset-0">
        {slides.map((item, index) => (
          <motion.div
            key={item.image}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === index ? 1 : 0 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: "easeInOut" }}
            aria-hidden={active !== index}
          >
            <Image
              src={item.image}
              alt={active === index ? item.imageAlt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover ${item.position}`}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,29,28,0.88)_0%,rgba(8,35,33,0.68)_38%,rgba(8,35,33,0.12)_72%,rgba(8,35,33,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,29,28,0.48)_0%,transparent_45%)]" />
      </div>

      <Container className="relative flex min-h-144 items-center py-20 sm:min-h-160 lg:min-h-[calc(100svh-5rem)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="max-w-2xl text-white"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold tracking-[0.24em] text-white/75 uppercase">
              {slide.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-[2.8rem] leading-[0.96] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {slide.title}
              <span className="mt-2 block text-[#b9e0b5]">{slide.accent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
              {slide.text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" variant="light">
                Explore Our Products
              </Button>
              <Button
                href="/for-brands"
                variant="ghost"
                className="justify-start px-2 text-white sm:justify-center"
              >
                Become a Partner <span aria-hidden="true">→</span>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      <div className="absolute right-5 bottom-6 left-5 flex items-center justify-between sm:right-8 sm:bottom-8 sm:left-8 lg:right-10 lg:left-10">
        <div className="flex gap-2" aria-label="Choose a slide">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === index ? "w-10 bg-white" : "w-5 bg-white/45 hover:bg-white/75"
              }`}
              onClick={() => goTo(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-black/10 text-xl text-white backdrop-blur-sm transition hover:bg-white hover:text-ink"
            onClick={() => goTo(active - 1)}
            aria-label="Previous slide"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-black/10 text-xl text-white backdrop-blur-sm transition hover:bg-white hover:text-ink"
            onClick={() => goTo(active + 1)}
            aria-label="Next slide"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
