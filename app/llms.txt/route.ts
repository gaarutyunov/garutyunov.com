import { skills } from "@/lib/skills";
import { experience } from "@/lib/experience";

export function GET() {
  const lines: string[] = [
    "# German Arutyunov — Principal Engineer",
    "",
    "> Principal Engineer with 7+ years across fintech and SaaS. AI-native development, distributed systems, micro-frontend architecture, cloud infrastructure, and engineering leadership.",
    "",
    "## About",
    "",
    "Based in Malaga, Spain. Currently Principal Engineer at TradingView (since Jan 2025; promoted from Team Lead in Apr 2026). Master's in Data Analysis and Financial Technologies from HSE Moscow (2017–2023, GPA 8.0).",
    "",
    "Open to engagements that combine AI-native product delivery, resilient infrastructure, and engineering leadership.",
    "",
    "## Contact",
    "",
    "- Email: germanarutyunov@gmail.com",
    "- GitHub: https://github.com/gaarutyunov",
    "- LinkedIn: https://linkedin.com/in/german-arutyunov/",
    "- CV (docx): /German_Arutyunov_CV.docx",
    "",
    "## Areas of expertise",
    "",
  ];

  for (const skill of skills) {
    lines.push(`### ${skill.title} (${skill.years}y)`);
    lines.push("");
    lines.push(skill.tagline);
    lines.push("");
    lines.push(skill.summary);
    lines.push("");
    lines.push("Highlights:");
    for (const h of skill.highlights) {
      lines.push(`- ${h}`);
    }
    lines.push("");
    lines.push(`Stack: ${skill.tags.join(", ")}`);
    lines.push("");

    for (const section of skill.sections) {
      lines.push(`#### ${section.heading}`);
      lines.push("");
      lines.push(section.body);
      if (section.items) {
        lines.push("");
        for (const item of section.items) {
          lines.push(`- ${item}`);
        }
      }
      lines.push("");
    }
  }

  lines.push("## Experience");
  lines.push("");
  for (const job of experience) {
    lines.push(`### ${job.company} — ${job.period}`);
    lines.push("");
    lines.push(`Location: ${job.location}`);
    const rolesLine = job.roles
      .map((r) => (r.period ? `${r.title} (${r.period})` : r.title))
      .join(" · ");
    lines.push(`Roles: ${rolesLine}`);
    lines.push("");
    for (const b of job.bullets) {
      const tag = b.skills?.length ? ` [${b.skills.join(", ")}]` : "";
      lines.push(`- ${b.text}${tag}`);
    }
    lines.push("");
  }

  lines.push("## Education");
  lines.push("");
  lines.push("### Higher School of Economics — 2017–2023");
  lines.push("");
  lines.push("Moscow, Russia. Master's Degree in Data Analysis and Financial Technologies. GPA 8.0.");
  lines.push("");

  lines.push("## Links");
  lines.push("");
  lines.push("- [Home](/)");
  lines.push("- [CV](/cv)");
  for (const skill of skills) {
    lines.push(`- [${skill.title}](/${skill.id}): ${skill.tagline}`);
  }

  const body = lines.join("\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
