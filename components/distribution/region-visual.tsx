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
          Offices in Riyadh, Saudi Arabia; Erbil and Baghdad, Iraq; Gaziantep, Turkey; and Aleppo,
          Syria.
        </desc>
        <circle cx="320" cy="280" r="210" fill="none" stroke="rgba(85,200,217,0.35)" strokeWidth="1" />
        <circle cx="320" cy="280" r="150" fill="rgba(85,200,217,0.12)" stroke="rgba(255,255,255,0.18)" />
        <path
          d="M250 150 C300 120, 390 150, 430 210 C470 270, 450 360, 380 410 C310 460, 230 420, 210 340 C190 260, 210 180, 250 150 Z"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.35)"
        />

        <circle cx="250" cy="168" r="6" fill="#55C8D9" />
        <text x="265" y="162" fill="#F3F7F9" fontSize="14" fontFamily="Manrope, Inter, sans-serif">
          Erbil
        </text>
        <text x="265" y="178" fill="rgba(243,247,249,0.65)" fontSize="11" fontFamily="Inter, sans-serif">
          Iraq · Head office
        </text>

        <circle cx="210" cy="250" r="6" fill="#F3F7F9" />
        <text x="225" y="246" fill="#F3F7F9" fontSize="14" fontFamily="Manrope, Inter, sans-serif">
          Aleppo
        </text>
        <text x="225" y="262" fill="rgba(243,247,249,0.65)" fontSize="11" fontFamily="Inter, sans-serif">
          Syria
        </text>

        <circle cx="180" cy="210" r="6" fill="#F3F7F9" />
        <text x="100" y="206" fill="#F3F7F9" fontSize="14" fontFamily="Manrope, Inter, sans-serif">
          Gaziantep
        </text>
        <text x="118" y="222" fill="rgba(243,247,249,0.65)" fontSize="11" fontFamily="Inter, sans-serif">
          Turkey
        </text>

        <circle cx="300" cy="280" r="6" fill="#F3F7F9" />
        <text x="315" y="276" fill="#F3F7F9" fontSize="14" fontFamily="Manrope, Inter, sans-serif">
          Baghdad
        </text>
        <text x="315" y="292" fill="rgba(243,247,249,0.65)" fontSize="11" fontFamily="Inter, sans-serif">
          Iraq
        </text>

        <circle cx="400" cy="390" r="6" fill="#55C8D9" />
        <text x="415" y="386" fill="#F3F7F9" fontSize="14" fontFamily="Manrope, Inter, sans-serif">
          Riyadh
        </text>
        <text x="415" y="402" fill="rgba(243,247,249,0.65)" fontSize="11" fontFamily="Inter, sans-serif">
          Saudi Arabia
        </text>

        <text
          x="320"
          y="520"
          textAnchor="middle"
          fill="#55C8D9"
          fontSize="13"
          letterSpacing="3"
          fontFamily="Inter, sans-serif"
        >
          REGIONAL PRESENCE
        </text>
      </svg>
    </div>
  );
}
