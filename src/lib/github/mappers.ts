import type { GitHubRepoApiResponse, GitHubRepoStats } from "@/lib/github/types";

const githubMetricFormatter = new Intl.NumberFormat("es-AR");
const githubDateFormatter = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export function mapGitHubRepoResponse(
  response: GitHubRepoApiResponse,
): GitHubRepoStats {
  return {
    fullName: response.full_name,
    htmlUrl: response.html_url,
    description: response.description,
    stargazersCount: response.stargazers_count,
    watchersCount: response.watchers_count,
    forksCount: response.forks_count,
    openIssuesCount: response.open_issues_count,
    defaultBranch: response.default_branch,
    language: response.language,
    updatedAt: response.updated_at,
    pushedAt: response.pushed_at,
  };
}

export function formatGitHubMetric(value: number) {
  return githubMetricFormatter.format(value);
}

export function formatGitHubDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.valueOf())) {
    return value;
  }

  return githubDateFormatter.format(date);
}
