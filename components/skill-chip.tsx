import Link from "next/link";
import { getSkill } from "@/lib/skills";

export function SkillChip({ skillId }: { skillId: string }) {
  const skill = getSkill(skillId);
  if (!skill) return null;

  return (
    <span className="relative group/chip inline-block align-middle">
      <Link href={`/${skillId}`} className="inline-block align-middle">
        <ga-badge>{skill.title}</ga-badge>
      </Link>

      {/* Hover thumbnail card */}
      <span
        className="absolute bottom-full left-0 mb-2.5 z-50 w-60 opacity-0 group-hover/chip:opacity-100 pointer-events-none transition-opacity duration-150"
        aria-hidden
      >
        <span className="block rounded-md border border-border bg-card p-3 shadow-xl shadow-black/60">
          <span className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-foreground">
              {skill.title}
            </span>
            <span className="ml-auto text-[10px] font-mono text-muted">
              {skill.index} / 05
            </span>
          </span>
          <span className="block text-[11px] text-muted leading-relaxed mb-2.5">
            {skill.tagline}
          </span>
          <span className="flex flex-col gap-1">
            {skill.highlights.slice(0, 2).map((h) => (
              <span key={h} className="flex gap-1.5 text-[10px] text-muted">
                <span className="shrink-0 mt-px">—</span>
                <span>{h}</span>
              </span>
            ))}
          </span>
        </span>
      </span>
    </span>
  );
}
