// Pet projects are discovered from GitHub at build time (see
// lib/github-projects.ts) and their metadata is crawled off each project's live
// site (see lib/og.ts). The `fallback` values (derived from GitHub repo
// metadata) are baked in so the card still renders sensible text if the live
// site is unreachable or hasn't shipped its OG tags yet.
//
// This module now holds only the pipeline's shared types — the project list is
// no longer hand-maintained here.

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
  /**
   * Card image URL. Sourced from the live page's `og:image` at crawl time —
   * every pet project ships one via the social-image skill (workspace#12), so
   * there is no bundled placeholder. Optional because a project whose live page
   * is missing its `og:image` (a source-project defect) has no card image.
   */
  icon?: string;
}

export interface ResolvedProject extends ResolvedMeta {
  id: string;
  href: string;
}
