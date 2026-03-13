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
    <section className="py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
              {siteConfig.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-6xl">
              {siteConfig.hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {siteConfig.hero.description}
            </p>
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

        <div className="grid gap-4">
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className="rounded-3xl border border-border/70 bg-card/75 p-5 shadow-sm backdrop-blur"
            >
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {card.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
