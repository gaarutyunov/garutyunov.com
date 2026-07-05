import type { ResolvedProject } from "@/lib/projects";
import { asset } from "@/lib/base-path";
import { SectionLabel } from "@/components/section-label";

function formatCreated(created: string) {
  const date = new Date(created);
  if (Number.isNaN(date.getTime())) return created;
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function PetProjects({ projects }: { projects: ResolvedProject[] }) {
  return (
    <section className="mt-12">
      <SectionLabel>Pet Projects</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          // The whole card is a new-tab link, so the anchor wraps <ga-card>.
          // `interactive` gives the kit's hover affordance; the anchor keeps
          // target/rel that <ga-card href> can't express on its own.
          <a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            <ga-card interactive="" className="block h-full">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(project.icon)}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-md object-cover"
                />
                <h3 className="font-semibold text-foreground group-hover:text-c-blue transition-colors">
                  {project.name}
                </h3>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                {project.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-2">
                <time
                  dateTime={project.created}
                  className="text-xs font-mono uppercase text-dim"
                >
                  {formatCreated(project.created)}
                </time>
                <span className="text-xs font-mono text-muted group-hover:text-foreground transition-colors">
                  {project.href.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                </span>
              </div>
            </ga-card>
          </a>
        ))}
      </div>
    </section>
  );
}
