import "server-only";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN?.trim() ?? "";

export interface GitHubServerEnv {
  token: string | null;
  hasToken: boolean;
}

export function getGitHubServerEnv(): GitHubServerEnv {
  return {
    token: GITHUB_TOKEN.length > 0 ? GITHUB_TOKEN : null,
    hasToken: GITHUB_TOKEN.length > 0,
  };
}
