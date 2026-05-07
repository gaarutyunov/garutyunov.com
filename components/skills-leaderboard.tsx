import Link from "next/link";
import type { Skill } from "@/lib/skills";
import { SectionLabel } from "@/components/section-label";

export function SkillsLeaderboard({ skills }: { skills: Skill[] }) {
  return (
    <section className="mt-12">
      <SectionLabel>Skills Leaderboard</SectionLabel>

      <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[3rem_1fr_8rem] items-center gap-3 lg:gap-4 py-3 border-b border-border">
        <span className="text-xs font-mono uppercase text-muted">#</span>
        <span className="text-xs font-mono uppercase text-muted">Skill</span>
        <span className="text-xs font-mono uppercase text-muted text-right">
          Years
        </span>
      </div>

      {skills.map((skill, i) => (
        <Link
          key={skill.id}
          href={`/${skill.id}`}
          className="group grid grid-cols-[auto_1fr_auto] lg:grid-cols-[3rem_1fr_8rem] items-start lg:items-center gap-3 lg:gap-4 py-3 border-b border-border hover:bg-card/30 transition-colors"
        >
          <span className="text-sm lg:text-base font-mono text-muted">
            {i + 1}
          </span>
          <span className="min-w-0 flex flex-col lg:flex-row lg:items-baseline lg:gap-2">
            <span className="font-semibold text-foreground truncate whitespace-nowrap">
              {skill.title}
            </span>
            <span className="text-xs lg:text-sm font-mono text-muted mt-0.5 lg:mt-0 truncate">
              {skill.tagline}
            </span>
          </span>
          <span className="font-mono text-sm text-foreground text-right">
            {skill.years}y
          </span>
        </Link>
      ))}
    </section>
  );
}
