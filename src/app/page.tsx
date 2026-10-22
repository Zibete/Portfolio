import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { FeaturedProject } from "@/components/sections/featured-project";
import { HomeHero } from "@/components/sections/home-hero";
import { EngineeringTrace } from "@/components/sections/engineering-trace";
import { ComplementaryEvidence } from "@/components/sections/complementary-evidence";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site/site-config";
import { getFeaturedProjectEntries } from "@/lib/mdx";

export default async function Home() {
  const [featuredProject] = await getFeaturedProjectEntries();
  const { eyebrow, title, description, actions } = siteConfig.homeComposition.closingCta;

  return (
    <div className="relative">
      <HomeHero />
      {featuredProject ? <FeaturedProject project={featuredProject} /> : null}
      <EngineeringTrace content={siteConfig.engineeringTrace} />
      <ComplementaryEvidence content={siteConfig.projectEvidence} />

      <section className="pb-14 pt-6 sm:pb-16 sm:pt-8">
        <Container>
          <div className="flex flex-col gap-6 border-t border-border/70 pt-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                {eyebrow}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-3xl">
                {title}
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {actions.map((action, index) => {
                const ActionIcon = action.download ? Download : ArrowRight;
                const content = (
                  <>
                    {action.label}
                    <ActionIcon />
                  </>
                );

                return (
                  <Button key={action.href} asChild variant={index === 0 ? "default" : "outline"}>
                    {action.download || action.external ? (
                      <a
                        href={action.href}
                        download={action.download || undefined}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noreferrer" : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link href={action.href}>{content}</Link>
                    )}
                  </Button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
