import { salesChannels } from "@/lib/company";
import { ChannelIcon } from "@/components/ui/icons";

export function SalesChannels({ invert = false }: { invert?: boolean }) {
  return (
    <ul
      className={`grid gap-0 sm:grid-cols-2 lg:grid-cols-5 ${
        invert ? "text-white" : "text-ink"
      }`}
    >
      {salesChannels.map((channel, index) => (
        <li
          key={channel.id}
          className={`flex gap-4 py-6 lg:flex-col lg:px-5 lg:py-2 ${
            index > 0 ? (invert ? "lg:border-l lg:border-white/15" : "lg:border-l lg:border-ink/10") : ""
          } ${index > 0 ? "border-t border-ink/10 sm:border-t-0 lg:border-t-0" : ""}`}
        >
          <ChannelIcon id={channel.id} className={`h-6 w-6 ${invert ? "text-gold" : "text-health-deep"}`} />
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">{channel.title}</h3>
            <p className={`mt-2 text-sm leading-6 ${invert ? "text-white/65" : "text-ink/65"}`}>
              {channel.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
