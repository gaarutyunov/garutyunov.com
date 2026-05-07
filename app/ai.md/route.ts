import { skillMarkdownResponse } from "@/lib/markdown";

export const dynamic = "force-static";

export function GET() {
  return skillMarkdownResponse("ai");
}
