import Link from "next/link";
import { ArrowRight, Dot, Layers3 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site/site-config";

const summaryCardMotionDelays = [
  "motion-delay-4",
  "motion-delay-5",
  "motion-delay-6",
] as const;

const summaryCards = [
  {
    label: "Rol objetivo",
    value: "Android Jr/Mid · Automatización",
  },
  {
    label: "Perfil",
    value: "Producto, negocio y ejecución técnica",
  },
  {
    label: "Enfoque",
    value: "Modernización con impacto real",
  },
] as const;

export function HomeHero() {
  return (
    <section className="pt-14 pb-8 sm:pt-18 sm:pb-20">
      <Container>
        <div className="interactive-card relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/78 p-6 shadow-[0_28px_90px_-56px_rgb(15_23_42_/_0.34)] backdrop-blur-xl sm:p-8 lg:p-9">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.14),_transparent)] dark:bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.16),_transparent)]" />
          <div className="pointer-events-none absolute -right-12 bottom-0 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-stretch">
            <div className="min-w-0 space-y-8">
              <div className="space-y-6">
                <div className="motion-enter motion-delay-1 flex flex-col items-start gap-3">
                  <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/82 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm dark:bg-background/30">
                    <span className="inline-flex size-2 rounded-full bg-primary shadow-[0_0_0_4px_rgb(84_139_255_/_0.12)]" />
                    {siteConfig.hero.statusBadge}
                  </p>
                  <p className="inline-flex w-fit rounded-full border border-border/70 bg-background/78 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-primary">
                    {siteConfig.hero.eyebrow}
                  </p>
                </div>

                <div className="space-y-4">
                  <h1 className="motion-enter motion-delay-2 max-w-4xl text-6xl font-semibold leading-none tracking-[-0.05em] text-foreground [font-family:var(--font-display)] sm:text-7xl lg:text-[5.3rem]">
                    {siteConfig.name}
                  </h1>
                  <div className="motion-enter motion-delay-3 space-y-4">
                    <p className="max-w-3xl text-2xl font-medium tracking-tight text-foreground/92 sm:text-3xl">
                      {siteConfig.hero.title}
                    </p>
                    <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                      {siteConfig.hero.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="motion-enter motion-delay-4 space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" asChild className="min-w-[11rem] shadow-[0_16px_42px_-24px_rgb(84_139_255_/_0.7)]">
                    <Link href={siteConfig.hero.primaryCta.href}>
                      {siteConfig.hero.primaryCta.label}
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="min-w-[11rem] bg-background/72 dark:bg-background/10">
                    <Link href={siteConfig.hero.secondaryCta.href}>
                      {siteConfig.hero.secondaryCta.label}
                      <Layers3 />
                    </Link>
                  </Button>
                </div>

                {siteConfig.hero.supportingNote ? (
                  <p className="flex items-center text-sm text-muted-foreground">
                    <Dot className="-mx-1 size-4 text-primary" />
                    {siteConfig.hero.supportingNote}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3 lg:h-full lg:grid-cols-1 lg:grid-rows-3">
              {summaryCards.map((card, index) => (
                <div
                  key={card.label}
                  className={`interactive-card motion-enter ${summaryCardMotionDelays[index] ?? "motion-delay-4"} flex h-full flex-col justify-center rounded-[1.5rem] border border-border/70 bg-background/72 px-5 py-4 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="mt-3 text-base font-semibold leading-6 text-foreground">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
