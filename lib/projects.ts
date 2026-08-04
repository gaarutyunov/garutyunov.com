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
   * Card icon URL — the project's ICON, resolved from the `<link rel="icon">` /
   * `<link rel="apple-touch-icon">` its live page declares (see lib/og.ts).
   * Deliberately NOT the page's `og:image`: that is a 1200x630 landscape social
   * banner, and squeezing one into the card's 40px square slot was issue #8.
   * Optional — a project whose page declares no icon, or whose page is
   * unreachable at build time, renders a monogram placeholder instead.
   */
  icon?: string;
}

export interface ResolvedProject extends ResolvedMeta {
  id: string;
  href: string;
}
