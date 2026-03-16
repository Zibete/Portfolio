export interface SiteNavItem {
  href: string;
  label: string;
}

export interface SiteAssetsContent {
  profileImagePath: string;
  profileImageAlt: string;
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
  summaryCards: SiteHomeSummaryCardContent[];
}

export interface SiteStackMarqueeContent {
  label: string;
  items: string[];
}

export interface SiteHomeProjectLeadContent {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface SiteHomeCredibilityItem {
  title: string;
  description: string;
}

export interface SiteHomeCredibilityContent {
  eyebrow: string;
  title: string;
  description: string;
  items: SiteHomeCredibilityItem[];
}

export interface SiteHomeSummaryCardContent {
  label: string;
  value: string;
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
  description: string;
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
  action: SiteNavItem;
}

export interface SiteHomeCompositionContent {
  projectLead: SiteHomeProjectLeadContent;
  credibility: SiteHomeCredibilityContent;
  featuredProject: SiteHomeFeaturedProjectContent;
  cvCta: SiteHomeCtaContent;
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
  stackMarquee: SiteStackMarqueeContent;
  homeComposition: SiteHomeCompositionContent;
  footer: SiteFooterContent;
}
