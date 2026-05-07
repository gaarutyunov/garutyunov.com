import { skills, getSkill } from "@/lib/skills";
import { renderSkillMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export function generateStaticParams() {
  return skills.map((s) => ({ skill: s.id }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ skill: string }> },
) {
  const { skill: id } = await params;
  const skill = getSkill(id);
  if (!skill) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(renderSkillMarkdown(skill), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
