export interface Bullet {
  text: string;
  skills?: string[];
}

export interface Role {
  title: string;
  period?: string;
}

export interface Experience {
  company: string;
  period: string;
  location: string;
  roles: Role[];
  bullets: Bullet[];
}

export const experience: Experience[] = [
  {
    company: "TradingView",
    period: "Jan 2025 – Present",
    location: "Hybrid, Malaga, Spain",
    roles: [
      { title: "Principal Engineer", period: "Apr 2026 – Present" },
      { title: "Team Lead", period: "Jan 2025 – Apr 2026" },
    ],
    bullets: [
      {
        text: "Developing internal AI platform to accelerate product and software development lifecycle processes",
        skills: ["ai"],
      },
      {
        text: "Designed and developed 2 new products end-to-end, expanding the company's portfolio",
        skills: ["leadership", "ai"],
      },
      {
        text: "Optimised team processes accelerating delivery by 30%",
        skills: ["leadership"],
      },
      {
        text: "Founded the Engineering Committee driving 5 global initiatives across CI/CD, telemetry, architecture, and integration testing",
        skills: ["leadership", "devops"],
      },
      {
        text: "Built an AI Skills Library embedding AI tooling into the SDLC; ran adoption workshops across engineering teams",
        skills: ["ai", "leadership"],
      },
      {
        text: "Prototyped AI-native products to streamline roadmap prioritisation",
        skills: ["ai"],
      },
      {
        text: "Fine-tuned open-weights models for data enrichment pipelines, matching commercial LLM quality at lower cost",
        skills: ["ai", "backend"],
      },
    ],
  },
  {
    company: "SimplyFi",
    period: "May 2023 – Jan 2025",
    location: "Dubai, UAE",
    roles: [{ title: "CTO" }],
    bullets: [
      {
        text: "Led platform adaptation for 3 international markets (Russia, UAE, KSA) across YandexCloud, AWS, and GCP",
        skills: ["devops", "leadership"],
      },
      {
        text: "Reduced infrastructure costs by 50% via cloud migration to managed services",
        skills: ["devops"],
      },
      {
        text: "Led the development and integration of 4 new fintech products for SMEs into the platform",
        skills: ["backend", "leadership"],
      },
    ],
  },
  {
    company: "SimpleFinance Group",
    period: "Aug 2019 – May 2023",
    location: "Moscow, Russia",
    roles: [
      { title: "Team Lead" },
      { title: "Senior Software Developer" },
    ],
    bullets: [
      {
        text: "Designed micro-frontend architecture (Webpack Module Federation, Angular 12, NgRx) — 5× faster builds, 50% faster development",
        skills: ["frontend"],
      },
      {
        text: "Built CLI tooling in Go for micro-frontend workflows, cutting boilerplate and increasing dev speed by 20%",
        skills: ["backend", "frontend"],
      },
      {
        text: "Led Kubernetes migration improving system maintainability by 30% and enhancing scalability",
        skills: ["devops"],
      },
      {
        text: "Reduced downtime by 40% via comprehensive monitoring, alerting, and high-availability infrastructure",
        skills: ["devops", "backend"],
      },
      {
        text: "Recruited and mentored a team of 15 engineers, QA, and analysts",
        skills: ["leadership"],
      },
    ],
  },
  {
    company: "Loyalty & Media Group",
    period: "Aug 2018 – Aug 2019",
    location: "Moscow, Russia",
    roles: [{ title: "Senior Frontend Developer" }],
    bullets: [
      {
        text: "Senior frontend engineering role building loyalty and media products",
        skills: ["frontend"],
      },
    ],
  },
];

export function getExperienceForSkill(skillId: string) {
  return experience
    .map((job) => ({
      ...job,
      bullets: job.bullets.filter((b) => b.skills?.includes(skillId)),
    }))
    .filter((job) => job.bullets.length > 0);
}
