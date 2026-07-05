import Link from "next/link";
import type { Skill } from "@/lib/skills";
import { SectionLabel } from "@/components/section-label";

// Column grid shared by the header and every row (see ga-table). Alignment and
// monospacing declared here are applied to each column's cell in every row.
const COLUMNS = JSON.stringify([
  { label: "#", width: "2.5rem", mono: true },
  { label: "Skill" },
  { label: "Years", width: "5rem", align: "right", mono: true },
]);

export function SkillsLeaderboard({ skills }: { skills: Skill[] }) {
  return (
    <section className="mt-12">
      <SectionLabel>Skills Leaderboard</SectionLabel>

      <ga-table columns={COLUMNS}>
        {skills.map((skill, i) => (
          // Each row is a link. One direct child per column keeps the shared
          // grid aligned; rich cells (title + tagline) live inside column 2.
          <Link key={skill.id} href={`/${skill.id}`}>
            <span className="text-muted">{i + 1}</span>
            <span className="min-w-0 flex flex-col lg:flex-row lg:items-baseline lg:gap-2">
              <span className="font-semibold text-foreground truncate whitespace-nowrap">
                {skill.title}
              </span>
              <span className="text-xs lg:text-sm font-mono text-muted truncate">
                {skill.tagline}
              </span>
            </span>
            <span className="text-foreground">{skill.years}y</span>
          </Link>
        ))}
      </ga-table>
    </section>
  );
}
