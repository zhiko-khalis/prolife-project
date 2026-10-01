export function RegionVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "relative" : "relative mx-auto w-full max-w-xl"}>
      <svg
        viewBox="0 0 640 560"
        role="img"
        aria-labelledby="region-title region-desc"
        className="h-auto w-full"
      >
        <title id="region-title">Pro Life regional presence</title>
        <desc id="region-desc">
          Head office in Erbil, Iraq, regional office in Riyadh, Saudi Arabia, and distribution
          across the wider MENA region.
        </desc>
        <circle cx="320" cy="280" r="210" fill="none" stroke="rgba(201,168,106,0.35)" strokeWidth="1" />
        <circle cx="320" cy="280" r="150" fill="rgba(46,139,120,0.12)" stroke="rgba(255,255,255,0.18)" />
        <path
          d="M250 150 C300 120, 390 150, 430 210 C470 270, 450 360, 380 410 C310 460, 230 420, 210 340 C190 260, 210 180, 250 150 Z"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.35)"
        />
        <path
          d="M286 168 C340 250, 360 320, 392 390"
          fill="none"
          stroke="#C9A86A"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <circle cx="286" cy="168" r="7" fill="#F5F8F6" />
        <circle cx="392" cy="390" r="7" fill="#2E8B78" />
        <text x="304" y="158" fill="#F5F8F6" fontSize="16" fontFamily="Manrope, Inter, sans-serif">
          Erbil
        </text>
        <text x="304" y="178" fill="rgba(245,248,246,0.65)" fontSize="12" fontFamily="Inter, sans-serif">
          Iraq · Head office
        </text>
        <text x="410" y="386" fill="#F5F8F6" fontSize="16" fontFamily="Manrope, Inter, sans-serif">
          Riyadh
        </text>
        <text x="410" y="406" fill="rgba(245,248,246,0.65)" fontSize="12" fontFamily="Inter, sans-serif">
          Saudi Arabia · Regional office
        </text>
        <text
          x="320"
          y="520"
          textAnchor="middle"
          fill="#C9A86A"
          fontSize="13"
          letterSpacing="3"
          fontFamily="Inter, sans-serif"
        >
          WIDER MENA REGION
        </text>
      </svg>
    </div>
  );
}
