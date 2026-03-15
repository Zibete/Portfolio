export interface GitHubRepoApiResponse {
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
  language: string | null;
  updated_at: string;
  pushed_at: string;
}

export interface GitHubRepoStats {
  fullName: string;
  htmlUrl: string;
  description: string | null;
  stargazersCount: number;
  watchersCount: number;
  forksCount: number;
  openIssuesCount: number;
  defaultBranch: string;
  language: string | null;
  updatedAt: string;
  pushedAt: string;
}
