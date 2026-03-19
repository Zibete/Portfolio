const SITE_URL_ENV_KEYS = [
  "NEXT_PUBLIC_SITE_URL",
  "SITE_URL",
  "VERCEL_PROJECT_PRODUCTION_URL",
  "VERCEL_URL",
] as const;

const DEFAULT_SITE_URL = "http://localhost:3000";

function normalizeSiteUrl(value: string | undefined) {
  const trimmedValue = value?.trim();

  if (!trimmedValue) {
    return null;
  }

  try {
    const normalizedValue = /^https?:\/\//i.test(trimmedValue)
      ? trimmedValue
      : `https://${trimmedValue}`;

    return new URL(normalizedValue).origin;
  } catch {
    return null;
  }
}

export function getSiteUrl() {
  for (const key of SITE_URL_ENV_KEYS) {
    const resolvedValue = normalizeSiteUrl(process.env[key]);

    if (resolvedValue) {
      return resolvedValue;
    }
  }

  return DEFAULT_SITE_URL;
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getSiteUrl());
}
