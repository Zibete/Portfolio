import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { FeaturedProject } from "@/components/sections/featured-project";
import { HomeHero } from "@/components/sections/home-hero";
import { StackMarquee } from "@/components/sections/stack-marquee";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site/site-config";
import { getFeaturedProjectEntries } from "@/lib/mdx";

const projectLeadMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const credibilityMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const homePrimarySurfaceClassName =
  "interactive-card relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/78 p-6 shadow-[0_28px_90px_-60px_rgb(15_23_42_/_0.34)] backdrop-blur-xl sm:p-8";

const homeSecondarySurfaceClassName =
  "interactive-card rounded-[1.75rem] border border-border/70 bg-background/72 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76";

const homeSurfaceAccentClassName =
  "pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.12),_transparent)] dark:bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.14),_transparent)]";

export default async function Home() {
  const [featuredProject] = await getFeaturedProjectEntries();
  const [closingPrimaryAction, ...closingSecondaryActions] =
    siteConfig.homeComposition.closingCta.actions;

  const renderCtaAction = (
    action: (typeof siteConfig.homeComposition.closingCta.actions)[number],
  ) => {
    const ActionIcon = action.download ? Download : ArrowRight;

    return action.download || action.external ? (
      <a
        href={action.href}
        download={action.download || undefined}
        target={action.external ? "_blank" : undefined}
        rel={action.external ? "noreferrer" : undefined}
      >
        {action.label}
        <ActionIcon />
      </a>
    ) : (
      <Link href={action.href}>
        {action.label}
        <ActionIcon />
      </Link>
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_16%_0%,_rgb(84_139_255_/_0.14),_transparent_34%),radial-gradient(circle_at_84%_12%,_rgb(148_163_184_/_0.16),_transparent_30%)] dark:hidden" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden h-[42rem] bg-[radial-gradient(circle_at_16%_0%,_rgb(84_139_255_/_0.18),_transparent_36%),radial-gradient(circle_at_84%_12%,_rgb(14_165_233_/_0.11),_transparent_30%)] dark:block" />
      <HomeHero />
      <StackMarquee />
      {featuredProject ? (
        <>
          <section className="pb-8 sm:pb-10">
            <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-stretch">
              <div className="motion-reveal motion-delay-1 h-full">
                <div className={`${homePrimarySurfaceClassName} h-full`}>
                  <div className={homeSurfaceAccentClassName} />
                  <div className="relative space-y-4">
                    <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
                      {siteConfig.homeComposition.projectLead.eyebrow}
                    </p>
                    <div className="space-y-4">
                      <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-4xl">
                        {siteConfig.homeComposition.projectLead.title}
                      </h2>
                      <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                        {siteConfig.homeComposition.projectLead.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 lg:h-full lg:grid-rows-3">
                {siteConfig.homeComposition.projectLead.highlights.map(
                  (highlight, index) => (
                    <div
                      key={highlight}
                      className={`motion-enter ${projectLeadMotionDelays[index] ?? "motion-delay-4"} h-full`}
                    >
                      <div
                        className={`${homeSecondarySurfaceClassName} h-full text-sm leading-6 text-muted-foreground`}
                      >
                        {highlight}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </Container>
          </section>

          <FeaturedProject project={featuredProject} />
        </>
      ) : null}

      <section className="pb-24 sm:pb-20">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="motion-reveal motion-delay-1">
            <div className={homePrimarySurfaceClassName}>
              <div className={homeSurfaceAccentClassName} />
              <div className="relative space-y-6">
                <div className="space-y-4">
                  <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
                    {siteConfig.homeComposition.credibility.eyebrow}
                  </p>
                  <div className="space-y-3">
                    <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-4xl">
                      {siteConfig.homeComposition.credibility.title}
                    </h2>
                    <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                      {siteConfig.homeComposition.credibility.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {siteConfig.homeComposition.credibility.items.map((item, index) => (
                    <div
                      key={item.title}
                      className={`motion-enter ${credibilityMotionDelays[index] ?? "motion-delay-4"}`}
                    >
                      <div className={homeSecondarySurfaceClassName}>
                        <p className="text-sm font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="motion-enter motion-delay-3">
            <div className="interactive-card rounded-[1.75rem] border border-border/70 bg-background/72 p-6 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76 sm:p-7 lg:py-6">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                    {siteConfig.homeComposition.closingCta.eyebrow}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)]">
                    {siteConfig.homeComposition.closingCta.title}
                  </h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {siteConfig.homeComposition.closingCta.description}
                  </p>
                </div>

                {closingPrimaryAction ? (
                  <Button size="lg" asChild className="w-full">
                    {renderCtaAction(closingPrimaryAction)}
                  </Button>
                ) : null}

                {closingSecondaryActions.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {closingSecondaryActions.map((action) => (
                      <Button
                        key={action.label}
                        size="lg"
                        variant="outline"
                        asChild
                        className="w-full bg-background/72 dark:bg-background/10"
                      >
                        {renderCtaAction(action)}
                      </Button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </div>
  );
}
