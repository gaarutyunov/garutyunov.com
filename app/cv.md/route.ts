import { renderCvMarkdown } from "@/lib/markdown";

export function GET() {
  return new Response(renderCvMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
