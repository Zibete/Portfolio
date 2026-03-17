"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site/site-config";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:py-5">
        <Link
          href="/"
          className="group flex w-fit flex-col transition-transform duration-200 hover:-translate-y-0.5"
        >
          <span className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
            Portfolio
          </span>
          <span className="text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
            {siteConfig.name}
          </span>
        </Link>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <nav className="flex flex-wrap gap-1 rounded-full border border-border/60 bg-background/72 p-1 backdrop-blur dark:bg-background/10">
            {siteConfig.navItems.map((item) => {
              const isActive = item.download
                ? false
                : item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              const className = cn(
                "nav-pill text-[0.8rem] font-medium focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              );

              return item.download || item.external ? (
                <Button
                  key={item.href}
                  asChild
                  className="rounded-full transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <a
                    href={item.href}
                    download={item.download || undefined}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    aria-current={isActive ? "page" : undefined}
                    data-active={isActive ? "true" : "false"}
                  >
                    {item.label}
                    <Download />
                  </a>
                </Button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  data-active={isActive ? "true" : "false"}
                  className={className}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
