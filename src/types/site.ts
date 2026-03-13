export interface SiteNavItem {
  href: string;
  label: string;
}

export interface SiteHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: SiteNavItem;
  secondaryCta: SiteNavItem;
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
}
