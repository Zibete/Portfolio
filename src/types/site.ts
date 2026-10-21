export interface SiteNavItem {
  href: string;
  label: string;
  download?: boolean;
  external?: boolean;
}

export interface SiteAssetsContent {
  profileImagePath: string;
  profileImageAlt: string;
  ogImagePath: string;
  ogImageAlt: string;
  cvFilePath: string;
}

export interface SiteHeroContent {
  statusBadge: string;
  eyebrow: string;
  title: string;
  description: string;
  supportingNote?: string;
  primaryCta: SiteNavItem;
  secondaryCta: SiteNavItem;
  impactStatement: string;
}

export interface SiteHomeFeaturedProjectStatsLabelsContent {
  stars: string;
  forks: string;
  lastPush: string;
}

export interface SiteHomeFeaturedProjectMetadataContent {
  roleLabel: string;
  periodLabel: string;
  focusLabel: string;
  emptyValue: string;
  focusFallback: string;
}

export interface SiteHomeFeaturedProjectContent {
  eyebrow: string;
  githubBadge: string;
  statsLabels: SiteHomeFeaturedProjectStatsLabelsContent;
  primaryActionLabel: string;
  secondaryAction: SiteNavItem;
  metadata: SiteHomeFeaturedProjectMetadataContent;
}

export interface SiteHomeCtaContent {
  eyebrow: string;
  title: string;
  description: string;
  actions: SiteNavItem[];
}

export interface SiteHomeCompositionContent {
  featuredProject: SiteHomeFeaturedProjectContent;
  closingCta: SiteHomeCtaContent;
}

export interface SiteFooterContent {
  copyrightSuffix: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  locale: string;
  language: string;
  description: string;
  assets: SiteAssetsContent;
  primaryAudience: string;
  targetRoles: string[];
  messageBalance: string;
  defaultTheme: "dark" | "light";
  navItems: SiteNavItem[];
  hero: SiteHeroContent;
  homeComposition: SiteHomeCompositionContent;
  footer: SiteFooterContent;
}
