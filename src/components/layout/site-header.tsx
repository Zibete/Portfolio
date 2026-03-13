import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site/site-config";

export function SiteHeader() {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:py-5">
        <Link href="/" className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
            Portfolio
          </span>
          <span className="text-sm font-semibold text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <nav className="flex flex-wrap gap-2">
            {siteConfig.navItems.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
