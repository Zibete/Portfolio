import Link from "next/link";
import { Container } from "@/components/shared/container";
import { githubHref, linkedInHref } from "@/content/site/profile-content";
import { siteConfig } from "@/content/site/site-config";

const footerLinks = [
  { label: "GitHub", href: githubHref, external: true },
  { label: "LinkedIn", href: linkedInHref, external: true },
  { label: "Contacto", href: "/contact", external: false },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <Container className="flex flex-col gap-2 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-foreground">{siteConfig.name}</p>
        <nav aria-label="Enlaces del pie de página" className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {footerLinks.map((link, index) => (
            <span key={link.label} className="inline-flex items-center gap-3">
              {index > 0 ? <span aria-hidden="true">·</span> : null}
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
