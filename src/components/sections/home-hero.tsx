import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, Download, Layers3, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site/site-config";

const summaryCardMotionDelays = [
  "motion-delay-4",
  "motion-delay-5",
  "motion-delay-6",
] as const;

export function HomeHero() {
  const primaryCta = siteConfig.hero.primaryCta;
  const secondaryCta = siteConfig.hero.secondaryCta;
  const PrimaryCtaIcon = primaryCta.download ? Download : ArrowRight;
  const SecondaryCtaIcon = secondaryCta.download ? Download : Layers3;

  return (
    <section className="overflow-hidden pt-14 pb-8 sm:pt-18 sm:pb-20">
      <Container>
        <div className="relative">
          <div className="pointer-events-none absolute -left-10 top-6 h-56 w-56 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" />
          <div className="pointer-events-none absolute -right-10 top-20 h-72 w-72 rounded-full bg-cyan-400/8 blur-3xl dark:bg-cyan-300/10" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.72fr)] lg:items-center">
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
                  <h1 className="motion-enter motion-delay-2 max-w-4xl text-6xl font-semibold leading-none text-foreground [font-family:var(--font-display)] sm:text-7xl lg:text-[5.6rem]">
                    {siteConfig.name}
                  </h1>
                  <div className="motion-enter motion-delay-3 space-y-4">
                    <p className="max-w-3xl text-2xl font-medium text-foreground/92 sm:text-3xl">
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
                  <Button
                    size="lg"
                    asChild
                    className="min-w-[11rem] shadow-[0_16px_42px_-24px_rgb(84_139_255_/_0.7)]"
                  >
                    {primaryCta.download || primaryCta.external ? (
                      <a
                        href={primaryCta.href}
                        download={primaryCta.download || undefined}
                        target={primaryCta.external ? "_blank" : undefined}
                        rel={primaryCta.external ? "noreferrer" : undefined}
                      >
                        {primaryCta.label}
                        <PrimaryCtaIcon />
                      </a>
                    ) : (
                      <Link href={primaryCta.href}>
                        {primaryCta.label}
                        <PrimaryCtaIcon />
                      </Link>
                    )}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="min-w-[11rem] bg-background/72 dark:bg-background/10"
                  >
                    {secondaryCta.download || secondaryCta.external ? (
                      <a
                        href={secondaryCta.href}
                        download={secondaryCta.download || undefined}
                        target={secondaryCta.external ? "_blank" : undefined}
                        rel={secondaryCta.external ? "noreferrer" : undefined}
                      >
                        {secondaryCta.label}
                        <SecondaryCtaIcon />
                      </a>
                    ) : (
                      <Link href={secondaryCta.href}>
                        {secondaryCta.label}
                        <SecondaryCtaIcon />
                      </Link>
                    )}
                  </Button>
                </div>

                {siteConfig.hero.supportingNote ? (
                  <p className="flex items-center text-sm text-muted-foreground">
                    {siteConfig.hero.supportingNote}
                  </p>
                ) : null}
              </div>

              <div className="motion-enter motion-delay-5 grid gap-3 sm:grid-cols-3">
                {siteConfig.hero.summaryCards.map((card, index) => (
                  <div
                    key={card.label}
                    className={`rounded-2xl border border-border/70 bg-card/64 px-4 py-3 shadow-[0_18px_54px_-48px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-card/42 ${summaryCardMotionDelays[index] ?? "motion-delay-4"}`}
                  >
                    <p className="text-[0.68rem] font-medium uppercase text-muted-foreground">
                      {card.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-5 text-foreground">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="motion-enter motion-delay-4 relative mx-auto w-full max-w-[25rem] lg:max-w-none">
              <div className="pointer-events-none absolute inset-6 rounded-[2rem] bg-primary/16 blur-3xl dark:bg-primary/18" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/72 p-2 shadow-[0_34px_110px_-64px_rgb(15_23_42_/_0.5)] backdrop-blur-xl dark:bg-card/54">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-muted">
                  <Image
                    src={siteConfig.assets.profileImagePath}
                    alt={siteConfig.assets.profileImageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 58vw, 92vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_transparent_55%,_rgb(8_12_24_/_0.32))] dark:bg-[linear-gradient(180deg,_transparent_58%,_rgb(8_12_24_/_0.42))]" />
                </div>
              </div>

              <div className="absolute -left-2 top-8 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 shadow-[0_22px_64px_-46px_rgb(15_23_42_/_0.38)] backdrop-blur dark:bg-background/72 sm:-left-6">
                <p className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <BriefcaseBusiness className="size-4 text-primary" />
                  Android + automatización
                </p>
              </div>

              <div className="absolute -right-2 bottom-8 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 shadow-[0_22px_64px_-46px_rgb(15_23_42_/_0.38)] backdrop-blur dark:bg-background/72 sm:-right-5">
                <p className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <Sparkles className="size-4 text-primary" />
                  Impacto medible
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
