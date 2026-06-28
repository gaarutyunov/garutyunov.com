import type { NextConfig } from "next";

// Empty for production (served at the domain root), set to "/pr-preview/pr-<N>"
// by the PR-preview workflow so the static export's asset URLs resolve under
// the preview sub-path. Must start with "/" and have no trailing slash.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
