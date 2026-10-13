import Image from "next/image";
import { cn } from "@/lib/cn";

type CompanyLogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
  whiteText?: boolean;
};

const logoStyle = {
  width: "235%",
  height: "305.2%",
  left: "-67.5%",
  top: "-102.5%",
} as const;

export function CompanyLogo({
  className,
  priority = false,
  alt = "Pro Life",
  whiteText = false,
}: CompanyLogoProps) {
  return (
    <span className={cn("relative block aspect-[2660/2048] h-12 overflow-hidden", className)}>
      <Image
        src="/logo/prolife.png"
        alt={alt}
        width={6251}
        height={6251}
        priority={priority}
        sizes="160px"
        className={cn("absolute max-w-none", whiteText && "brightness-0 invert")}
        style={logoStyle}
      />
      {whiteText ? (
        <span className="pointer-events-none absolute inset-0 overflow-hidden [clip-path:inset(0_0_48%_0)]">
          <Image
            src="/logo/prolife.png"
            alt=""
            width={6251}
            height={6251}
            sizes="160px"
            className="absolute max-w-none"
            style={logoStyle}
          />
        </span>
      ) : null}
    </span>
  );
}
