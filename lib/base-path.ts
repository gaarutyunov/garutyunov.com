// `basePath` auto-prefixes next/link, next/font, and /_next/ asset URLs, but NOT
// raw <img src="/..."> tags. Use asset() for those so they resolve correctly
// under the PR-preview sub-path. Inlined at build time via NEXT_PUBLIC_*.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a root-relative asset path with basePath. Absolute URLs pass through. */
export function asset(path: string): string {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
