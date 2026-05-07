import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "German Arutyunov — Principal Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "monospace",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#737373",
            fontSize: 28,
            marginBottom: 28,
          }}
        >
          $ whoami
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          GERMAN ARUTYUNOV
        </div>
        <div
          style={{
            display: "flex",
            color: "#a3a3a3",
            fontSize: 34,
            marginTop: 36,
            lineHeight: 1.35,
            maxWidth: 1000,
            fontFamily: "sans-serif",
          }}
        >
          Principal Engineer — AI-native product delivery, distributed systems,
          and engineering leadership.
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 56,
            right: 96,
            color: "#525252",
            fontSize: 22,
          }}
        >
          garutyunov.com
        </div>
      </div>
    ),
    { ...size },
  );
}
