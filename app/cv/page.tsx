import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { SkillChip } from "@/components/skill-chip";
import { experience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Principal Engineer. 7+ years in fintech and SaaS — AI, distributed systems, micro frontends, cloud infrastructure, and engineering leadership.",
  alternates: { canonical: "/cv" },
};

const cvSkills = [
  "Go", "Python", "SQL", "PyTorch", "MLX", "LLM Integration",
  "Fine-tuning", "NLP", "Machine Learning", "Deep Learning",
  "Kubernetes", "Kafka", "CI/CD", "Docker", "AWS", "GCP",
  "Microservices", "Event-Driven Architecture", "System Architecture",
  "Team Leadership", "Agile", "Product Roadmap", "Data Vault 2.0",
];

export default function CVPage() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-2 text-sm font-mono text-muted pt-4 pb-6">
        <Link href="/" className="hover:text-foreground transition-colors shrink-0">
          German Arutyunov
        </Link>
        <span className="shrink-0">/</span>
        <span className="text-foreground">CV</span>
      </nav>

      <section className="pb-12 border-b border-border">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-2">
          German Arutyunov
        </h1>
        <p className="text-base text-muted mb-1">Principal Engineer</p>
        <p className="text-sm font-mono text-muted">
          Malaga, Spain · germanarutyunov@gmail.com
        </p>

        <p className="mt-6 text-base text-muted leading-relaxed max-w-2xl text-balance">
          Engineering leader with 7+ years across fintech and SaaS, specialising
          in AI-powered product development and cross-functional team leadership.
          Proven track record of owning products end-to-end — from conception to
          launch — driving measurable outcomes through machine learning, LLM
          integration, and data-driven decision-making.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:germanarutyunov@gmail.com"
            className="inline-flex items-center rounded-md bg-card/80 px-4 py-2.5 font-mono text-sm text-foreground hover:bg-card-hover transition-colors"
          >
            <span className="text-muted mr-2">$</span>
            <span>mailto:germanarutyunov@gmail.com</span>
          </a>
          <a
            href="/German_Arutyunov_CV.docx"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-foreground hover:bg-card/30 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-12">
        <div className="lg:col-span-9 space-y-12">
          <section>
            <SectionLabel>Professional experience</SectionLabel>
            <div className="space-y-10">
              {experience.map((job) => (
                <div key={job.company} className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <span className="text-base font-semibold text-foreground">
                      {job.company}
                    </span>
                    <span className="text-xs font-mono text-muted">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-muted mb-3">
                    {job.location}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1">
                    {job.roles.map((role) => (
                      <span key={role.title} className="text-sm text-muted">
                        {role.title}
                        {role.period && (
                          <span className="font-mono text-xs ml-1.5">
                            ({role.period})
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-muted text-sm mt-0.5 shrink-0">—</span>
                        <span className="flex-1 min-w-0">
                          <span className="text-sm text-muted leading-relaxed">
                            {bullet.text}
                          </span>
                          {bullet.skills && bullet.skills.length > 0 && (
                            <span className="inline-flex flex-wrap gap-1.5 ml-2 align-middle">
                              {bullet.skills.map((sid) => (
                                <SkillChip key={sid} skillId={sid} />
                              ))}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel>Education</SectionLabel>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <span className="text-base font-semibold text-foreground">
                Higher School of Economics
              </span>
              <span className="text-xs font-mono text-muted">2017 – 2023</span>
            </div>
            <p className="text-xs font-mono text-muted mb-1">Moscow, Russia</p>
            <p className="text-sm text-muted">
              Master&apos;s Degree in Data Analysis and Financial Technologies
              <span className="font-mono text-xs ml-2">GPA 8.0</span>
            </p>
          </section>
        </div>

        <aside className="lg:col-span-3 space-y-10">
          <div>
            <SectionLabel>Skills</SectionLabel>
            <div className="flex flex-wrap gap-1.5">
              {cvSkills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-border text-xs text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Languages</SectionLabel>
            <ul className="space-y-1.5">
              {[
                { lang: "Russian", level: "native" },
                { lang: "English", level: "C1" },
                { lang: "Spanish", level: "C1" },
              ].map(({ lang, level }) => (
                <li
                  key={lang}
                  className="flex justify-between text-sm border-b border-border py-2"
                >
                  <span className="text-foreground">{lang}</span>
                  <span className="font-mono text-muted">{level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionLabel>Areas</SectionLabel>
            <ul>
              {(["ai", "leadership", "backend", "devops", "frontend"] as const).map(
                (id) => (
                  <li key={id}>
                    <Link
                      href={`/${id}`}
                      className="flex items-center justify-between text-sm text-muted hover:text-foreground transition-colors border-b border-border py-2"
                    >
                      <span>{id}</span>
                      <span className="font-mono text-xs">→</span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
