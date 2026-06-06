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
    <header className="top-0 z-50 border-b border-transparent py-3 md:sticky">
      <Container className="flex flex-col gap-3 rounded-2xl border border-border/55 bg-background/76 px-4 py-3 shadow-[0_22px_70px_-56px_rgb(15_23_42_/_0.5)] backdrop-blur-xl dark:bg-background/44 dark:shadow-[0_22px_72px_-58px_rgb(0_0_0_/_0.82)] md:flex-row md:items-center md:justify-between md:gap-4 md:rounded-3xl md:px-5">
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
          <nav className="flex max-w-full flex-nowrap gap-1 overflow-x-auto rounded-full border border-border/50 bg-card/58 p-1 backdrop-blur dark:bg-card/24 md:flex-wrap md:overflow-visible">
            {siteConfig.navItems.map((item) => {
              const isActive = item.download
                ? false
                : item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              const className = cn(
                "nav-pill shrink-0 whitespace-nowrap text-[0.8rem] font-medium focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              );

              return item.download || item.external ? (
                <Button
                  key={item.href}
                  asChild
                  className="shrink-0 whitespace-nowrap rounded-full shadow-[0_16px_42px_-26px_rgb(34_188_255_/_0.58)] transition-transform duration-200 hover:-translate-y-0.5"
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
