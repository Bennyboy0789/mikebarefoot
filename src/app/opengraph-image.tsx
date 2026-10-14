import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a0a0b",
          color: "#f3f1ee",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 6, background: "#d61f2c" }} />
          <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#ef4a51", fontFamily: "sans-serif" }}>
            {site.role}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, lineHeight: 1 }}>{site.name}</div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#ef4a51", fontStyle: "italic" }}>
            The dojo and the boardroom run on the same playbook.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
