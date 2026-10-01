import Image from "next/image";
import { cn } from "@/lib/cn";

type CompanyLogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function CompanyLogo({ className, priority = false, alt = "Pro Life" }: CompanyLogoProps) {
  return (
    <span className={cn("relative block aspect-[2660/2048] h-12 overflow-hidden", className)}>
      <Image
        src="/logo/prolife.png"
        alt={alt}
        width={6251}
        height={6251}
        priority={priority}
        sizes="160px"
        className="absolute max-w-none"
        style={{
          width: "235%",
          height: "305.2%",
          left: "-67.5%",
          top: "-102.5%",
        }}
      />
    </span>
  );
}
