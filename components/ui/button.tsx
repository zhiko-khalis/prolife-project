import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "light" | "ghost" | "gold";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-[#16383a] shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]",
  secondary:
    "border border-ink/15 bg-white text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-mist",
  ghost: "bg-transparent text-current underline-offset-4 hover:underline",
  gold: "bg-gold text-ink hover:bg-[#d4b67a]",
};

type Common = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type LinkButton = Common & {
  href: string;
  external?: boolean;
};

type NativeButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

function classes(variant: Variant = "primary", className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-wide transition duration-200",
    variants[variant],
    className,
  );
}

export function Button(props: LinkButton | NativeButton) {
  const variant = props.variant ?? "primary";
  const className = classes(variant, props.className);

  if ("href" in props && props.href) {
    const external =
      props.external ||
      props.href.startsWith("mailto:") ||
      props.href.startsWith("tel:") ||
      props.href.startsWith("http");

    if (external) {
      return (
        <a
          href={props.href}
          className={className}
          {...(props.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  const { children, ...buttonProps } = props;
  delete buttonProps.variant;
  delete buttonProps.className;
  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}
