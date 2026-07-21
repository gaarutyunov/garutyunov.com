import type { Project } from "@/lib/projects";

// Build-time discovery of pet projects from GitHub. Runs inside a Server
// Component at `next build` (see app/page.tsx), so it uses Node's fetch and
// bakes the result into the static export.
//
// No fallbacks: on any error, non-OK response, timeout, or a missing
// GITHUB_TOKEN this throws so the build fails loudly rather than shipping an
// empty or stale pet-projects section (design D5). GITHUB_TOKEN is required —
// it lifts the unauthenticated rate limit and is what lets private repos with a
// published website surface (design D2/D7).

/** The subset of GitHub's repository-search fields we consume. */
interface GitHubRepo {
  name: string;
  homepage: string | null;
  description: string | null;
  created_at: string;
  fork: boolean;
  archived: boolean;
}

const SEARCH_URL =
  "https://api.github.com/search/repositories?per_page=100&q=" +
  encodeURIComponent("topic:pet-project user:gaarutyunov");

const TIMEOUT_MS = 10_000;

export async function discoverPetProjects(): Promise<Project[]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error(
      "discoverPetProjects: GITHUB_TOKEN is required (there is no unauthenticated " +
        "fallback). Set it in the build environment so discovery can authenticate " +
        "and surface private pet-project repos.",
    );
  }

  let res: Response;
  try {
    res = await fetch(SEARCH_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "user-agent": "garutyunov.com pet-project discovery",
      },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (err) {
    throw new Error(
      `discoverPetProjects: GitHub search request failed: ${(err as Error).message}`,
      { cause: err },
    );
  }

  if (!res.ok) {
    throw new Error(
      `discoverPetProjects: GitHub search returned HTTP ${res.status} ${res.statusText}`,
    );
  }

  const body = (await res.json()) as { items?: GitHubRepo[] };

  return (body.items ?? [])
    .filter(
      (repo) =>
        !!repo.homepage?.trim() &&
        !repo.fork &&
        !repo.archived &&
        repo.name !== "garutyunov.com",
    )
    .map<Project>((repo) => ({
      id: repo.name,
      url: repo.homepage!.trim(),
      fallback: {
        name: repo.name,
        description: repo.description ?? "",
        created: repo.created_at.slice(0, 10),
      },
    }))
    // Deterministic order across builds: newest first, independent of the API's
    // incidental result ordering.
    .sort((a, b) => b.fallback.created.localeCompare(a.fallback.created));
}
