import type { Metadata } from "next";
import { siteConfig } from "@/content/site/site-config";

// Canonical metadata must not change with each Vercel preview deployment.
const SITE_URL_ENV_KEYS = ["NEXT_PUBLIC_SITE_URL", "SITE_URL"] as const;

const DEFAULT_SITE_URL = "https://matias-peralta.is-a.dev";

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

type PageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
};

export function createPageMetadata({
  title,
  description,
  pathname,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: `${siteConfig.name} | Portfolio`,
      title: fullTitle,
      description,
      url: getAbsoluteUrl(pathname),
      images: [
        {
          url: siteConfig.assets.ogImagePath,
          alt: siteConfig.assets.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.assets.ogImagePath],
    },
  };
}
