// Pet projects are rendered from metadata crawled off each project's live site
// at build time (see lib/og.ts). The `fallback` values are baked in so the
// build still succeeds — and the card still renders — if the site is
// unreachable or hasn't shipped its OG tags yet.

export interface Project {
  id: string;
  /** Live URL crawled at build time for OG metadata. Also the card's link. */
  url: string;
  fallback: ResolvedMeta;
}

export interface ResolvedMeta {
  name: string;
  description: string;
  /** ISO date the project was created, e.g. "2026-06-21". */
  created: string;
  /** Absolute or root-relative URL to the card icon. */
  icon: string;
}

export interface ResolvedProject extends ResolvedMeta {
  id: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: "stereoscope",
    url: "https://stereoscope.garutyunov.com",
    fallback: {
      name: "Stereoscope Converter",
      description:
        "Turn a single photo into a red/cyan 3D anaglyph, entirely in your browser. Pull the curtain for the history and science of stereoscopy.",
      created: "2026-06-21",
      icon: "/projects/stereoscope.png",
    },
  },
];
