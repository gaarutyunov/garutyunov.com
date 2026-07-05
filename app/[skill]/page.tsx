import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { skills, getSkill } from "@/lib/skills";
import { getExperienceForSkill } from "@/lib/experience";
import { SectionLabel } from "@/components/section-label";
import { asset } from "@/lib/base-path";

export function generateStaticParams() {
  return skills.map((s) => ({ skill: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ skill: string }>;
}): Promise<Metadata> {
  const { skill: id } = await params;
  const skill = getSkill(id);
  if (!skill) return {};
  return {
    title: skill.title,
    description: skill.summary,
    alternates: {
      canonical: `/${skill.id}`,
      types: { "text/markdown": `/${skill.id}.md` },
    },
  };
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ skill: string }>;
}) {
  const { skill: id } = await params;
  const skill = getSkill(id);
  if (!skill) notFound();

  const relevantExperience = getExperienceForSkill(id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-2 sm:py-10">
      <div className="pt-8 pb-6">
        <ga-breadcrumbs
          items={JSON.stringify([
            { label: "German Arutyunov", href: asset("/") },
            { label: skill.title },
          ])}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
        {/* Main — 9 cols */}
        <div className="lg:col-span-9 space-y-10">
          {/* Title + highlights */}
          <section>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-6">
              {skill.title}
            </h1>
            <ul className="space-y-2.5">
              {skill.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-muted leading-relaxed">
                  <span className="mt-1 shrink-0 text-muted">—</span>
                  {h}
                </li>
              ))}
            </ul>
          </section>

          {/* Relevant experience */}
          {relevantExperience.length > 0 && (
            <section>
              <SectionLabel>Relevant experience</SectionLabel>
              <div className="space-y-6">
                {relevantExperience.map((job) => (
                  <div key={job.company}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                      <Link
                        href="/cv"
                        className="text-sm font-semibold text-foreground hover:text-muted transition-colors"
                      >
                        {job.company}
                      </Link>
                      <span className="text-xs text-dim">{job.period}</span>
                    </div>
                    <p className="text-xs text-dim mb-3">
                      {job.roles.map((r) => r.title).join(" · ")}
                    </p>
                    <ul className="space-y-2">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-xs mt-0.5 shrink-0 text-muted">—</span>
                          <span className="text-xs text-muted leading-relaxed">{bullet.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar — 3 cols */}
        <aside className="lg:col-span-3 space-y-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted">
              {skill.index} / 05
            </span>
          </div>

          <div>
            <SectionLabel>Stack</SectionLabel>
            <div className="flex flex-wrap gap-1.5">
              {skill.tags.map((tag) => (
                <ga-badge key={tag} size="sm">
                  {tag}
                </ga-badge>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Contact</SectionLabel>
            <a
              href="mailto:germanarutyunov@gmail.com"
              className="text-xs text-muted hover:text-foreground transition-colors break-all"
            >
              germanarutyunov@gmail.com
            </a>
          </div>

          <div>
            <SectionLabel>Other skills</SectionLabel>
            <ul className="space-y-2">
              {skills
                .filter((s) => s.id !== skill.id)
                .map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/${s.id}`}
                      className="flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors"
                    >
                      <span className="text-[10px] font-mono">{s.index}</span>
                      <span>{s.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
