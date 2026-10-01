type IconProps = { className?: string };

function base(className?: string) {
  return {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
}

export function HealthcareIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 21s7-4.4 7-10a4 4 0 0 0-7-2 4 4 0 0 0-7 2c0 5.6 7 10 7 10Z" />
      <path d="M12 8v6M9 11h6" />
    </svg>
  );
}

export function RetailIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 9h16l-1.2 10.2a1 1 0 0 1-1 .8H6.2a1 1 0 0 1-1-.8L4 9Z" />
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
    </svg>
  );
}

export function CommerceIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 20h8" />
    </svg>
  );
}

export function InstitutionIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 20h16M6 20V10M10 20V10M14 20V10M18 20V10M3 10h18L12 4 3 10Z" />
    </svg>
  );
}

export function ExportIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z" />
    </svg>
  );
}

const channelIcons = {
  healthcare: HealthcareIcon,
  retail: RetailIcon,
  ecommerce: CommerceIcon,
  institutions: InstitutionIcon,
  export: ExportIcon,
};

export function ChannelIcon({
  id,
  className,
}: {
  id: keyof typeof channelIcons;
  className?: string;
}) {
  const Icon = channelIcons[id];
  return <Icon className={className} />;
}
