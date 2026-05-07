export interface SkillSection {
  heading: string;
  body: string;
  items?: string[];
}

export interface Skill {
  id: string;
  index: string;
  title: string;
  color: string;
  tagline: string;
  years: number;
  summary: string;
  highlights: string[];
  tags: string[];
  sections: SkillSection[];
}

export const skills: Skill[] = [
  {
    id: "ai",
    index: "01",
    title: "AI",
    color: "#ff6568",
    tagline: "AI-native development, agentic systems for ops & engineering",
    years: 1,
    summary:
      "AI-native development approach grounded in a Master's in Data Science and Financial Technologies. Designed and deployed agentic systems to streamline operations and accelerate software development workflows.",
    highlights: [
      "Apply AI-native practices across the full engineering lifecycle",
      "Design and deploy agentic systems that automate complex operational workflows",
      "Approach AI with a scientific rigour — Master's in Data Science underpins every model decision",
      "Bring a systems engineering lens to AI: reliability, observability, failure modes",
    ],
    tags: ["AI-native", "Agentic Systems", "LLM Integration", "PyTorch", "MLX", "Fine-tuning", "NLP", "MLOps"],
    sections: [
      {
        heading: "Scientific foundation",
        body: "A Master's in Data Analysis and Financial Technologies from HSE means AI is not a buzzword — it's a discipline. Model selection, evaluation methodology, and statistical rigour are built into how I approach every AI problem.",
      },
      {
        heading: "Agentic systems",
        body: "Designed and deployed systems where AI agents take on real operational workloads — not demos, but production systems with real business impact.",
        items: [
          "Autonomous agents for operations: alert triage, runbook execution, incident response",
          "Development workflow agents: PR review, test generation, architecture validation",
          "Multi-step reasoning pipelines with tool use, memory, and structured output",
          "Evaluation frameworks to measure and improve agent reliability over time",
        ],
      },
      {
        heading: "The engineering lens",
        body: "AI systems require the same engineering discipline as any other production system — reliability, observability, failure modes, and graceful degradation.",
        items: [
          "Fine-tuned open-weights models matching commercial LLM quality at lower cost",
          "LLM integration patterns: streaming, tool use, structured output, caching",
          "Evaluation and feedback loops built into the deployment lifecycle",
          "Cost, latency, and reliability tradeoffs navigated with production constraints",
        ],
      },
    ],
  },
  {
    id: "leadership",
    index: "02",
    title: "leadership",
    color: "#ac4bff",
    tagline: "People-oriented, agile, strong stakeholder management",
    years: 5,
    summary:
      "People-oriented leader who finds each person's strengths to benefit the team. Agile mindset — moves fast and adapts to challenges. Result-oriented with strong stakeholder management skills that navigate corporate environments to bring projects to life.",
    highlights: [
      "Find each person's strengths and channel them toward shared goals",
      "Move fast with an agile mindset — adapt priorities as challenges evolve",
      "Navigate stakeholder dynamics to unblock and ship projects that matter",
      "Deliver results even in complex, politically charged environments",
    ],
    tags: ["Agile", "People Management", "Stakeholder Management", "Team Building", "Result-Oriented", "Mentorship"],
    sections: [
      {
        heading: "People first",
        body: "Great engineering output comes from people who feel seen and have their strengths channeled toward meaningful work. I lead by understanding each individual first — their motivation, their working style, what makes them sharp — and then designing a team dynamic that amplifies that.",
      },
      {
        heading: "Delivery mindset",
        body: "Leadership without results is just management. I combine a people-first approach with an unwavering commitment to shipping — even when the environment is corporate, slow, or politically complex.",
        items: [
          "Agile without dogma: adapt the process to the team, not the team to the process",
          "Stakeholder alignment before, during, and after — no surprise pivots",
          "Unblocking teams by navigating org dynamics rather than fighting them",
          "Moving fast by making the right calls early and correcting course quickly",
        ],
      },
      {
        heading: "What I bring to a team",
        body: "Whether leading from the front or enabling others to lead, I orient toward the outcome: a team that works well together and ships things that matter.",
        items: [
          "Clarity of direction — people should never wonder what success looks like",
          "Psychological safety — the team speaks up, experiments, and learns",
          "A bias toward action combined with discipline in prioritization",
          "Mentorship and career growth as a shared responsibility, not an afterthought",
        ],
      },
    ],
  },
  {
    id: "backend",
    index: "03",
    title: "backend",
    color: "#00c758",
    tagline: "Horizontally scalable, high-availability, geographically distributed systems",
    years: 7,
    summary:
      "Designed and built complex horizontally scalable, geographically distributed systems in Go and C#. Used and deployed PostgreSQL, Elasticsearch, Redis, and Kafka in production — both in application code and infrastructure.",
    highlights: [
      "Design horizontally scalable, high-availability systems spanning multiple geographic regions",
      "Build event-driven architectures with Kafka for high-throughput data pipelines",
      "Implement full-text search with Elasticsearch at production scale",
      "Reach for the right tool — PostgreSQL, Redis, Kafka — and operate it in production",
    ],
    tags: ["Go", "C#", "PostgreSQL", "Elasticsearch", "Redis", "Kafka", "gRPC", "REST"],
    sections: [
      {
        heading: "Systems I designed",
        body: "Geographically distributed systems that scale horizontally — built to handle real production load with real failure modes. Not just code that works on a laptop, but services that run in multiple regions with consistent guarantees.",
      },
      {
        heading: "Data infrastructure",
        body: "Used the right tool for each job — and then operated it in production myself.",
        items: [
          "PostgreSQL for relational data with complex query patterns and JSONB",
          "Elasticsearch for full-text search, aggregations, and analytical queries",
          "Redis for low-latency caching, pub/sub, distributed locks, and rate limiting",
          "Kafka for durable event streaming and decoupled service communication",
        ],
      },
      {
        heading: "Languages & patterns",
        body: "Go for high-throughput services where performance and simplicity matter. C# for complex domain logic and enterprise integrations.",
        items: [
          "Go: goroutines, channels, context propagation, graceful shutdown",
          "C#: async/await, dependency injection, Clean Architecture, domain-driven design",
          "gRPC for internal service communication with schema-first contracts",
          "Idempotent consumers and exactly-once processing patterns with Kafka",
        ],
      },
    ],
  },
  {
    id: "devops",
    index: "04",
    title: "devops",
    color: "#fcbb00",
    tagline: "Kubernetes internals, cloud migrations, multi-cloud CI/CD",
    years: 7,
    summary:
      "Can navigate Kubernetes source code and understand its architecture. Migrated complex systems across clouds, from Nomad to Kubernetes. Developed flexible CI/CD pipelines that work across multiple clouds, regions, and topologies.",
    highlights: [
      "Navigate Kubernetes source code and understand its internals",
      "Lead full cloud migrations — cross-cloud and Nomad → Kubernetes",
      "Build CI/CD pipelines that adapt dynamically to any cloud, region, or topology",
      "Own the full infrastructure stack — not just the YAML, but the actual operations",
    ],
    tags: ["Kubernetes", "Nomad", "CI/CD", "Multi-cloud", "Cloud Migration", "Helm", "Terraform", "Docker"],
    sections: [
      {
        heading: "Kubernetes depth",
        body: "Kubernetes is not just a deployment target — I understand how it works internally. This means I can debug obscure scheduler behavior, understand what a controller is actually doing, and make informed decisions about resource configuration rather than guessing.",
      },
      {
        heading: "Migrations",
        body: "Migrated production systems with real users and real constraints.",
        items: [
          "Nomad → Kubernetes migration: zero-downtime, multi-service, multi-team coordination",
          "Cross-cloud migrations preserving data integrity and minimizing blast radius",
          "Networking and DNS topology changes across migration boundaries",
          "Rollback planning and live traffic validation at each stage",
        ],
      },
      {
        heading: "CI/CD",
        body: "Built pipelines designed to be extended, not just used. The goal: a single pipeline definition that works across any cloud, region, or environment — no forking, no duplication.",
        items: [
          "Dynamic environment targeting based on branch, tag, or environment variable",
          "Multi-cloud deployment steps with environment-specific secret injection",
          "Parallel deployment strategies across regions with health gate validation",
          "Rollback automation triggered by metric thresholds post-deploy",
        ],
      },
    ],
  },
  {
    id: "frontend",
    index: "05",
    title: "frontend",
    color: "#54a2ff",
    tagline: "Complex B2B platforms with micro frontend architecture",
    years: 8,
    summary:
      "Built a complex B2B platform from scratch with a high abstraction level supporting multiple financial products. Applied cutting-edge micro frontend architecture with Webpack Module Federation.",
    highlights: [
      "Architect B2B platforms from scratch with high abstraction across multiple product lines",
      "Apply Webpack Module Federation for true runtime micro frontend composition",
      "Design shared component systems consumed across independently deployed micro apps",
      "Ship production Angular at scale with robust state management",
    ],
    tags: ["Angular", "Micro Frontend", "Module Federation", "Webpack", "TypeScript", "RxJS"],
    sections: [
      {
        heading: "What I built",
        body: "A complex B2B platform from scratch, supporting multiple financial products through a high-abstraction shared design system. The platform was designed so individual product teams could ship independently while composing seamlessly at runtime.",
      },
      {
        heading: "Architecture",
        body: "Micro frontend architecture using Webpack Module Federation — each financial product as a separately deployed remote, composed dynamically into a shell.",
        items: [
          "Shell application orchestrating dynamic remote loading at runtime",
          "Shared design system and utility library consumed across all remotes",
          "Federated routing and authentication with zero coupling between products",
          "Independent CI/CD pipelines per remote — deploy without coordination",
        ],
      },
      {
        heading: "Key skills demonstrated",
        body: "This project required deep knowledge of the entire frontend stack — from Webpack internals to Angular dependency injection to module resolution.",
        items: [
          "Webpack Module Federation configuration and optimization",
          "Angular architecture patterns: lazy loading, feature modules, DI",
          "TypeScript at scale: generics, type guards, shared type contracts",
          "Performance budgeting and bundle analysis across federated modules",
        ],
      },
    ],
  },
];

export function getSkill(id: string): Skill | undefined {
  return skills.find((s) => s.id === id);
}
