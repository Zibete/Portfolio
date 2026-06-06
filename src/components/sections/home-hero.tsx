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
    <section className="overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-20">
      <Container>
        <div className="relative">
          <div className="pointer-events-none absolute -left-10 top-2 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-cyan-300/13" />
          <div className="pointer-events-none absolute -right-12 top-20 h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl dark:bg-cyan-300/14" />
          <div className="pointer-events-none absolute right-10 bottom-2 h-44 w-44 rounded-full bg-orange-300/10 blur-3xl dark:bg-orange-300/8" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.72fr)] lg:items-center">
            <div className="min-w-0 space-y-8">
              <div className="space-y-6">
                <div className="motion-enter motion-delay-1 flex flex-col items-start gap-3">
                  <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/24 bg-primary/8 px-3 py-1.5 text-xs font-medium leading-5 text-foreground shadow-[0_14px_42px_-34px_rgb(34_188_255_/_0.5)] backdrop-blur dark:border-cyan-300/24 dark:bg-cyan-300/9">
                    <span className="inline-flex size-2 shrink-0 rounded-full bg-primary shadow-[0_0_0_4px_rgb(34_188_255_/_0.14),0_0_18px_rgb(34_188_255_/_0.42)]" />
                    <span className="min-w-0">{siteConfig.hero.statusBadge}</span>
                  </p>
                  <p className="inline-flex max-w-full rounded-full border border-border/55 bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary backdrop-blur dark:bg-card/22 sm:tracking-[0.28em]">
                    <span className="min-w-0">{siteConfig.hero.eyebrow}</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <h1 className="motion-enter motion-delay-2 max-w-4xl text-5xl font-semibold leading-none text-foreground [font-family:var(--font-display)] sm:text-7xl lg:text-[5.6rem]">
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
                    className="min-w-[11rem] shadow-[0_18px_48px_-24px_rgb(34_188_255_/_0.76)]"
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
                    className="min-w-[11rem] bg-background/72 backdrop-blur dark:bg-background/12"
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

              <div className="motion-enter motion-delay-5 grid gap-0 overflow-hidden rounded-3xl border border-border/55 bg-card/54 shadow-[0_24px_80px_-62px_rgb(15_23_42_/_0.38)] backdrop-blur-xl dark:bg-card/26 sm:grid-cols-3">
                {siteConfig.hero.summaryCards.map((card, index) => (
                  <div
                    key={card.label}
                    className={`border-b border-border/45 px-4 py-4 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 ${summaryCardMotionDelays[index] ?? "motion-delay-4"}`}
                  >
                    <p className="text-[0.68rem] font-semibold uppercase text-primary">
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
              <div className="pointer-events-none absolute inset-4 rounded-[2rem] bg-cyan-400/18 blur-3xl dark:bg-cyan-300/20" />
              <div className="pointer-events-none absolute -right-4 top-10 h-36 w-36 rounded-full bg-orange-300/14 blur-3xl dark:bg-orange-300/10" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border/58 bg-card/64 p-2 shadow-[0_36px_120px_-66px_rgb(15_23_42_/_0.58)] backdrop-blur-xl dark:bg-card/38">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-muted">
                  <Image
                    src={siteConfig.assets.profileImagePath}
                    alt={siteConfig.assets.profileImageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 58vw, 92vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_18%,_rgb(34_188_255_/_0.14),_transparent_36%),linear-gradient(180deg,_transparent_54%,_rgb(8_12_24_/_0.34))] dark:bg-[radial-gradient(circle_at_58%_18%,_rgb(36_201_255_/_0.16),_transparent_38%),linear-gradient(180deg,_transparent_58%,_rgb(3_8_18_/_0.48))]" />
                </div>
              </div>

              <div className="absolute -left-2 top-8 rounded-2xl border border-border/58 bg-background/86 px-4 py-3 shadow-[0_22px_64px_-46px_rgb(15_23_42_/_0.42)] backdrop-blur-xl dark:bg-background/58 sm:-left-6">
                <p className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <BriefcaseBusiness className="size-4 text-primary" />
                  Android + automatización
                </p>
              </div>

              <div className="absolute -right-2 bottom-8 rounded-2xl border border-primary/22 bg-background/86 px-4 py-3 shadow-[0_22px_64px_-46px_rgb(34_188_255_/_0.36)] backdrop-blur-xl dark:bg-background/58 sm:-right-5">
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
