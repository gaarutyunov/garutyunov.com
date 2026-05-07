import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt = "German Arutyunov — Principal Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BANNER = ` ██████╗ ███████╗██████╗ ███╗   ███╗ █████╗ ███╗   ██╗
██╔════╝ ██╔════╝██╔══██╗████╗ ████║██╔══██╗████╗  ██║
██║  ███╗█████╗  ██████╔╝██╔████╔██║███████║██╔██╗ ██║
██║   ██║██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══██║██║╚██╗██║
╚██████╔╝███████╗██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║
 ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝

 █████╗ ██████╗ ██╗   ██╗████████╗██╗   ██╗██╗   ██╗███╗   ██╗ ██████╗ ██╗   ██╗
██╔══██╗██╔══██╗██║   ██║╚══██╔══╝╚██╗ ██╔╝██║   ██║████╗  ██║██╔═══██╗██║   ██║
███████║██████╔╝██║   ██║   ██║    ╚████╔╝ ██║   ██║██╔██╗ ██║██║   ██║██║   ██║
██╔══██║██╔══██╗██║   ██║   ██║     ╚██╔╝  ██║   ██║██║╚██╗██║██║   ██║╚██╗ ██╔╝
██║  ██║██║  ██║╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║╚██████╔╝ ╚████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═══╝`;

export default async function OG() {
  const fontData = await readFile(join(process.cwd(), "app/og-font.ttf"));

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
          padding: "56px 64px",
          color: "#ffffff",
          fontFamily: "Fira Mono",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "pre",
            fontSize: 13,
            lineHeight: 1.25,
            letterSpacing: -1,
          }}
        >
          {BANNER}
        </div>
        <div
          style={{
            display: "flex",
            color: "#a3a3a3",
            fontSize: 24,
            marginTop: 36,
            lineHeight: 1.4,
            maxWidth: 1000,
          }}
        >
          Principal Engineer — AI-native product delivery, distributed systems,
          and engineering leadership.
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 36,
            right: 64,
            color: "#525252",
            fontSize: 18,
          }}
        >
          garutyunov.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Fira Mono", data: fontData, style: "normal", weight: 400 }],
    },
  );
}
