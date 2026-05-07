import { skills } from "@/lib/skills";
import { AsciiName } from "@/components/ascii-name";
import { CodeSnippet } from "@/components/code-snippet";
import { TechIcons } from "@/components/tech-icons";
import { SkillsLeaderboard } from "@/components/skills-leaderboard";
import { SectionLabel } from "@/components/section-label";

export default function Home() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 my-4 sm:my-5 lg:my-7 mx-auto w-full max-w-6xl">
        <div className="min-w-0">
          <h1 className="sr-only">German Arutyunov</h1>
          <AsciiName />
        </div>
        <div className="flex items-center">
          <p className="text-muted text-xl sm:text-2xl lg:text-3xl leading-tight tracking-tight text-balance">
            Hire me to enhance your team with AI-native product delivery,
            resilient infrastructure, and the engineering leadership to ship
            both.
          </p>
        </div>
      </section>

      {/* Mid band */}
      <section className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 mt-12">
        <div className="min-w-[320px]">
          <SectionLabel>Get in touch</SectionLabel>
          <CodeSnippet
            command="mailto:germanarutyunov@gmail.com"
            href="mailto:germanarutyunov@gmail.com"
          />
        </div>
        <div className="min-w-0">
          <SectionLabel>Working with these technologies</SectionLabel>
          <TechIcons />
        </div>
      </section>

      <SkillsLeaderboard skills={skills} />
    </div>
  );
}
