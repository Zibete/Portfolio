import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site/site-config";

const summaryCards = [
  {
    label: "Roles objetivo",
    value: siteConfig.targetRoles.join(" / "),
  },
  {
    label: "Audiencia",
    value: siteConfig.primaryAudience,
  },
  {
    label: "Mensaje",
    value: siteConfig.messageBalance,
  },
];

export function HomeHero() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/78 p-7 shadow-[0_28px_90px_-56px_rgb(15_23_42_/_0.34)] backdrop-blur-xl sm:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.14),_transparent)] dark:bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.16),_transparent)]" />
          <div className="pointer-events-none absolute -right-12 bottom-0 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative space-y-10">
            <div className="space-y-6">
              <p className="inline-flex w-fit rounded-full border border-border/70 bg-background/78 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-primary">
                {siteConfig.hero.eyebrow}
              </p>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-6xl">
                  {siteConfig.hero.title}
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {siteConfig.hero.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={siteConfig.hero.primaryCta.href}>
                  {siteConfig.hero.primaryCta.label}
                  <ArrowRight />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={siteConfig.hero.secondaryCta.href}>
                  {siteConfig.hero.secondaryCta.label}
                  <FileText />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:py-5">
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className="rounded-[1.75rem] border border-border/70 bg-background/72 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76"
            >
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {card.label}
              </p>
              <p className="mt-4 text-lg font-semibold leading-7 text-foreground">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
