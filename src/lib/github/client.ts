import "server-only";
import { cache } from "react";
import { getGitHubServerEnv } from "@/lib/github/env";
import { mapGitHubRepoResponse } from "@/lib/github/mappers";
import type { GitHubRepoApiResponse, GitHubRepoStats } from "@/lib/github/types";

const GITHUB_API_BASE_URL = "https://api.github.com";
const GITHUB_API_VERSION = "2022-11-28";

function normalizeGitHubRepo(repo: string) {
  const normalized = repo
    .trim()
    .replace(/^https?:\/\/github\.com\//i, "")
    .replace(/\/+$/, "");

  return /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(normalized)
    ? normalized
    : null;
}

async function fetchGitHubRepoStats(
  repo: string,
): Promise<GitHubRepoStats | null> {
  const normalizedRepo = normalizeGitHubRepo(repo);

  if (!normalizedRepo) {
    return null;
  }

  const { token } = getGitHubServerEnv();
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": GITHUB_API_VERSION,
    "User-Agent": "portfolio-zibe-github-metadata",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${GITHUB_API_BASE_URL}/repos/${normalizedRepo}`, {
      headers,
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as GitHubRepoApiResponse;

    return mapGitHubRepoResponse(data);
  } catch {
    return null;
  }
}

export const getGitHubRepoStats = cache(fetchGitHubRepoStats);
