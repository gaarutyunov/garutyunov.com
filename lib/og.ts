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

/** The subset of a `<link>` tag's attributes icon selection needs. */
interface LinkTag {
  /** `rel` split on whitespace and lowercased, so `rel="shortcut icon"` matches. */
  rels: string[];
  href: string;
  sizes?: string;
  type?: string;
}

function parseLinks(html: string): LinkTag[] {
  const links: LinkTag[] = [];
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    const rel = getAttr(tag, "rel");
    const href = getAttr(tag, "href");
    if (!rel || !href?.trim()) continue;
    links.push({
      rels: rel.toLowerCase().split(/\s+/).filter(Boolean),
      href: decodeEntities(href.trim()),
      sizes: getAttr(tag, "sizes")?.toLowerCase(),
      type: getAttr(tag, "type")?.toLowerCase(),
    });
  }
  return links;
}

/** Largest edge declared in a `sizes` attribute ("32x32 16x16" → 32); 0 if absent. */
function largestDeclaredSize(sizes: string | undefined): number {
  let best = 0;
  for (const token of sizes?.split(/\s+/) ?? []) {
    const m = token.match(/^(\d+)x(\d+)$/);
    if (m) best = Math.max(best, Number(m[1]), Number(m[2]));
  }
  return best;
}

/** The size Safari assumes for an `apple-touch-icon` that declares none. */
const APPLE_TOUCH_DEFAULT_PX = 180;

function hasExtension(href: string, ext: string) {
  return new RegExp(`\\.${ext}(?:[?#]|$)`, "i").test(href);
}

/**
 * Pick the best square icon a page declares, or `undefined` if it declares none.
 *
 * Ranked by how well it renders in the card's 40px (80 physical px on a retina
 * display) slot: an SVG scales to any density, then the largest declared raster,
 * then a raster of unknown size, and only as a last resort a legacy `.ico` —
 * a multi-resolution container browsers render poorly through plain `<img>`.
 */
function pickIcon(links: LinkTag[]): string | undefined {
  let best: { href: string; score: number } | undefined;

  for (const link of links) {
    const apple =
      link.rels.includes("apple-touch-icon") ||
      link.rels.includes("apple-touch-icon-precomposed");
    // `mask-icon` is deliberately excluded: it is a monochrome silhouette.
    if (!apple && !link.rels.includes("icon")) continue;

    const score =
      link.type === "image/svg+xml" || hasExtension(link.href, "svg")
        ? 100_000
        : link.type === "image/x-icon" ||
            link.type === "image/vnd.microsoft.icon" ||
            hasExtension(link.href, "ico")
          ? 1
          : 10 +
            (largestDeclaredSize(link.sizes) ||
              (apple ? APPLE_TOUCH_DEFAULT_PX : 0));

    if (!best || score > best.score) best = { href: link.href, score };
  }

  return best?.href;
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
    const html = await res.text();
    const meta = parseMeta(html);

    const pick = (...keys: string[]) => {
      for (const k of keys) {
        const v = meta.get(k);
        if (v) return v;
      }
      return undefined;
    };

    // The card's image slot is a 40px square, so it wants the project's ICON,
    // never its `og:image` — that is a 1200x630 landscape social banner, and
    // cropping one into a square is the defect this replaced (issue #8).
    // Relative hrefs resolve against the response's final URL so a homepage that
    // redirects (e.g. to a trailing slash) still resolves "./favicon.png".
    const iconHref = pickIcon(parseLinks(html));
    const base = res.url || url;

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
      icon: iconHref ? new URL(iconHref, base).toString() : fallback.icon,
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
