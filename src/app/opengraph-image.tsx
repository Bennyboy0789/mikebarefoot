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
          background: "#121110",
          color: "#f6f2ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 6, background: "#b42318" }} />
          <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#b42318" }}>
            {site.role}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, fontWeight: 800, textTransform: "uppercase", lineHeight: 1 }}>{site.name}</div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#a8a196" }}>
            The dojo and the boardroom run on the same playbook.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
