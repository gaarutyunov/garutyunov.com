"use client";

import { usePathname } from "next/navigation";

function aiUrlFor(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/") return "/llms.txt";
  return `${clean}.md`;
}

export function HumanAiSwitch() {
  const pathname = usePathname() ?? "/";
  const aiHref = aiUrlFor(pathname);
  return (
    <div
      role="group"
      aria-label="View mode"
      className="inline-flex items-center text-[10px] font-mono rounded-md border border-border overflow-hidden"
    >
      <span
        aria-current="true"
        className="px-2 py-1 bg-foreground text-background"
      >
        Human
      </span>
      <a
        href={aiHref}
        className="px-2 py-1 text-muted hover:text-foreground hover:bg-card/40 transition-colors"
        title="View as plain text / markdown for LLMs"
      >
        AI
      </a>
    </div>
  );
}
