import type { Skill } from "./skills";
import { skills } from "./skills";
import { experience } from "./experience";
import { getExperienceForSkill } from "./experience";

const CV_SKILLS = [
  "Go", "Python", "SQL", "PyTorch", "MLX", "LLM Integration",
  "Fine-tuning", "NLP", "Machine Learning", "Deep Learning",
  "Kubernetes", "Kafka", "CI/CD", "Docker", "AWS", "GCP",
  "Microservices", "Event-Driven Architecture", "System Architecture",
  "Team Leadership", "Agile", "Product Roadmap", "Data Vault 2.0",
];

export function renderCvMarkdown(): string {
  const lines: string[] = [];
  lines.push("# German Arutyunov");
  lines.push("");
  lines.push("**Principal Engineer** — Malaga, Spain");
  lines.push("");
  lines.push("- Email: germanarutyunov@gmail.com");
  lines.push("- GitHub: https://github.com/gaarutyunov");
  lines.push("- LinkedIn: https://linkedin.com/in/german-arutyunov/");
  lines.push("- CV (docx): /German_Arutyunov_CV.docx");
  lines.push("");
  lines.push(
    "Engineering leader with 7+ years across fintech and SaaS, specialising in AI-powered product development and cross-functional team leadership. Proven track record of owning products end-to-end — from conception to launch — driving measurable outcomes through machine learning, LLM integration, and data-driven decision-making.",
  );
  lines.push("");

  lines.push("## Professional experience");
  lines.push("");
  for (const job of experience) {
    lines.push(`### ${job.company} — ${job.period}`);
    lines.push("");
    lines.push(`*${job.location}*`);
    lines.push("");
    for (const role of job.roles) {
      lines.push(role.period ? `- ${role.title} (${role.period})` : `- ${role.title}`);
    }
    lines.push("");
    for (const b of job.bullets) {
      const tag = b.skills?.length ? ` _[${b.skills.join(", ")}]_` : "";
      lines.push(`- ${b.text}${tag}`);
    }
    lines.push("");
  }

  lines.push("## Education");
  lines.push("");
  lines.push("### Higher School of Economics — 2017 – 2023");
  lines.push("");
  lines.push(
    "Moscow, Russia. Master's Degree in Data Analysis and Financial Technologies. GPA 8.0.",
  );
  lines.push("");

  lines.push("## Skills");
  lines.push("");
  lines.push(CV_SKILLS.join(", "));
  lines.push("");

  lines.push("## Languages");
  lines.push("");
  lines.push("- Russian — native");
  lines.push("- English — C1");
  lines.push("- Spanish — C1");
  lines.push("");

  lines.push("## Areas");
  lines.push("");
  for (const s of skills) {
    lines.push(`- [${s.title}](/${s.id}) ([markdown](/${s.id}.md))`);
  }
  lines.push("");

  return lines.join("\n");
}

export function renderSkillMarkdown(skill: Skill): string {
  const lines: string[] = [];
  lines.push(`# ${skill.title}`);
  lines.push("");
  lines.push(`> ${skill.tagline}`);
  lines.push("");
  lines.push(`*${skill.years} year${skill.years === 1 ? "" : "s"} focused experience*`);
  lines.push("");
  lines.push(skill.summary);
  lines.push("");

  lines.push("## Highlights");
  lines.push("");
  for (const h of skill.highlights) {
    lines.push(`- ${h}`);
  }
  lines.push("");

  lines.push("## Stack");
  lines.push("");
  lines.push(skill.tags.join(", "));
  lines.push("");

  for (const section of skill.sections) {
    lines.push(`## ${section.heading}`);
    lines.push("");
    lines.push(section.body);
    if (section.items?.length) {
      lines.push("");
      for (const item of section.items) {
        lines.push(`- ${item}`);
      }
    }
    lines.push("");
  }

  const relevant = getExperienceForSkill(skill.id);
  if (relevant.length > 0) {
    lines.push("## Relevant experience");
    lines.push("");
    for (const job of relevant) {
      lines.push(`### ${job.company} — ${job.period}`);
      lines.push("");
      lines.push(job.roles.map((r) => r.title).join(" · "));
      lines.push("");
      for (const b of job.bullets) {
        lines.push(`- ${b.text}`);
      }
      lines.push("");
    }
  }

  lines.push("## Other areas");
  lines.push("");
  for (const s of skills.filter((s) => s.id !== skill.id)) {
    lines.push(`- [${s.title}](/${s.id}) ([markdown](/${s.id}.md))`);
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("[Back to CV](/cv) ([markdown](/cv.md))");
  lines.push("");

  return lines.join("\n");
}
