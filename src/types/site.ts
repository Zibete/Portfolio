export interface SiteNavItem {
  href: string;
  label: string;
}

export interface SiteHeroContent {
  statusBadge: string;
  eyebrow: string;
  title: string;
  description: string;
  supportingNote?: string;
  primaryCta: SiteNavItem;
  secondaryCta: SiteNavItem;
}

export interface SiteStackMarqueeContent {
  label: string;
  items: string[];
}

export interface SiteConfig {
  name: string;
  locale: string;
  language: string;
  description: string;
  primaryAudience: string;
  targetRoles: string[];
  messageBalance: string;
  defaultTheme: "dark" | "light";
  navItems: SiteNavItem[];
  hero: SiteHeroContent;
  stackMarquee: SiteStackMarqueeContent;
}
