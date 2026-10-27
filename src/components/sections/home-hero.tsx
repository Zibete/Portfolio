import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site/site-config";

export function HomeHero() {
  const { primaryCta, secondaryCta } = siteConfig.hero;

  return (
    <section className="pb-8 pt-8 sm:pb-10 sm:pt-13">
      <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:items-center lg:gap-x-12 lg:gap-y-6">
        <div className="min-w-0 space-y-6">
          <div className="space-y-4">
            <div className="motion-enter motion-delay-1 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {siteConfig.hero.eyebrow}
              </p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.hero.statusBadge}
              </p>
            </div>

            <h1 className="motion-enter motion-delay-2 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground [font-family:var(--font-display)] sm:text-6xl">
              {siteConfig.name}
            </h1>

            <div className="motion-enter motion-delay-3 max-w-2xl space-y-4">
              <p className="text-2xl font-medium leading-snug text-foreground sm:text-3xl">
                {siteConfig.hero.title}
              </p>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                {siteConfig.hero.description}
              </p>
            </div>
          </div>

          <div className="motion-enter motion-delay-4 flex flex-wrap gap-3">
            <Button asChild size="lg">
              {primaryCta.download || primaryCta.external ? (
                <a
                  href={primaryCta.href}
                  download={primaryCta.download || undefined}
                  target={primaryCta.external ? "_blank" : undefined}
                  rel={primaryCta.external ? "noreferrer" : undefined}
                >
                  {primaryCta.label}
                  <ArrowRight />
                </a>
              ) : (
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight />
                </Link>
              )}
            </Button>
            <Button asChild size="lg" variant="outline">
              {secondaryCta.download || secondaryCta.external ? (
                <a
                  href={secondaryCta.href}
                  download={secondaryCta.download || undefined}
                  target={secondaryCta.external ? "_blank" : undefined}
                  rel={secondaryCta.external ? "noreferrer" : undefined}
                >
                  {secondaryCta.label}
                  <Download />
                </a>
              ) : (
                <Link href={secondaryCta.href}>
                  {secondaryCta.label}
                  <ArrowRight />
                </Link>
              )}
            </Button>
          </div>

        </div>

        <p className="motion-enter motion-delay-5 w-full border-l-2 border-signal/70 pl-4 text-sm leading-6 text-muted-foreground lg:col-span-2 lg:row-start-2">
          {siteConfig.hero.impactStatement}
        </p>

        <div className="motion-enter motion-delay-4 mx-auto w-full max-w-[16rem] sm:max-w-[19rem] lg:col-start-2 lg:row-start-1 lg:max-w-[20rem]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-border/70 bg-muted shadow-[0_20px_60px_-42px_rgb(15_23_42_/_0.4)]">
            <Image
              src={siteConfig.assets.profileImagePath}
              alt={siteConfig.assets.profileImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 304px, 80vw"
              className="object-cover"
            />
          </div>
        </div>

      </Container>
    </section>
  );
}
