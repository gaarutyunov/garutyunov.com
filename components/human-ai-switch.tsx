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

  // The kit's radio group is single-select: "Human" is the current (selected)
  // view and "AI" is a link to the markdown/plain-text rendition. An item with
  // `href` renders as an anchor, so selecting it navigates.
  const items = JSON.stringify([
    { id: "human", label: "Human" },
    { id: "ai", label: "AI", href: aiHref },
  ]);

  return (
    <ga-radio-group
      value="human"
      items={items}
      aria-label="View mode"
      title="Switch between the human view and the plain-text / markdown view for LLMs"
    />
  );
}
