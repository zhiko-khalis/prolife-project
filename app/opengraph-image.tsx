import { ImageResponse } from "next/og";

export const alt = "Pro Life | Healthcare & Wellness Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#071923",
          color: "#F3F7F9",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 8, color: "#55C8D9" }}>
          PRO LIFE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 68,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            maxWidth: 900,
          }}
        >
          Better Products. Healthier Lives.
        </div>
        <div style={{ display: "flex", marginTop: 28, width: 72, height: 4, background: "#55C8D9" }} />
      </div>
    ),
    { ...size },
  );
}
