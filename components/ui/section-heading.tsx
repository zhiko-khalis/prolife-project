import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  text,
  id,
  invert = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  id?: string;
  invert?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-medium tracking-[0.22em] uppercase",
            invert ? "text-gold" : "text-health-deep",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl",
          eyebrow && "mt-4",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-5 text-base leading-7 sm:text-lg sm:leading-8",
            invert ? "text-white/75" : "text-ink/70",
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
