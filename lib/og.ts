import type { Project, ResolvedProject } from "@/lib/projects";

// Minimal Open Graph / HTML metadata crawler. Runs at build time inside a
// Server Component (see app/page.tsx) — Node's fetch, so no CORS constraint —
// and bakes the result into the static export.

function getAttr(tag: string, name: string): string | undefined {
  const m =
    tag.match(new RegExp(`${name}\\s*=\\s*"([^"]*)"`, "i")) ??
    tag.match(new RegExp(`${name}\\s*=\\s*'([^']*)'`, "i"));
  return m?.[1];
}

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  "#39": "'",
  apos: "'",
  mdash: "—",
  ndash: "–",
};

function decodeEntities(s: string): string {
  return s.replace(/&(#\d+|#x[0-9a-f]+|[a-z]+);/gi, (whole, code: string) => {
    if (code[0] === "#") {
      const cp =
        code[1] === "x" || code[1] === "X"
          ? parseInt(code.slice(2), 16)
          : parseInt(code.slice(1), 10);
      return Number.isFinite(cp) ? String.fromCodePoint(cp) : whole;
    }
    return ENTITIES[code.toLowerCase()] ?? whole;
  });
}

function parseMeta(html: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const key = (getAttr(tag, "property") ?? getAttr(tag, "name"))?.toLowerCase();
    const content = getAttr(tag, "content");
    if (key && content != null && !map.has(key)) {
      map.set(key, decodeEntities(content.trim()));
    }
  }
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (title) map.set("__title", decodeEntities(title[1].trim()));
  return map;
}

export async function fetchProjectMeta(
  project: Project,
): Promise<ResolvedProject> {
  const { id, url, fallback } = project;
  try {
    // Default cache mode: Next fetches once during `next build` and bakes the
    // result into the statically prerendered page.
    const res = await fetch(url, {
      headers: { "user-agent": "garutyunov.com link-preview crawler" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const meta = parseMeta(await res.text());

    const pick = (...keys: string[]) => {
      for (const k of keys) {
        const v = meta.get(k);
        if (v) return v;
      }
      return undefined;
    };

    const rawImage = pick("og:image", "twitter:image", "twitter:image:src");

    return {
      id,
      href: url,
      name: pick("og:title", "twitter:title", "__title") ?? fallback.name,
      description:
        pick("og:description", "twitter:description", "description") ??
        fallback.description,
      created:
        pick("article:published_time", "article:modified_time") ??
        fallback.created,
      icon: rawImage ? new URL(rawImage, url).toString() : fallback.icon,
    };
  } catch {
    // Site unreachable or malformed — fall back to the baked-in metadata.
    return { id, href: url, ...fallback };
  }
}

export function fetchAllProjectMeta(
  list: Project[],
): Promise<ResolvedProject[]> {
  return Promise.all(list.map(fetchProjectMeta));
}
