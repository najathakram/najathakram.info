import { ImageResponse } from "next/og";
import { profile } from "../lib/site-data";

export const alt = "Najath Akram, Signal Processing Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Neutral first version; restyled during the visual design phase.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#fcfcfb",
          color: "#16181d",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 80,
            height: 80,
            borderRadius: 10,
            border: "2px solid rgba(22, 24, 29, 0.16)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 42,
          }}
        >
          N
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: "-0.02em" }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 34, color: "#6a6e76" }}>{profile.role}</div>
          <div style={{ fontSize: 26, color: "#1b5e8c" }}>najathakram.info</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
