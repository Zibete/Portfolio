import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { PageAside } from "@/components/shared/page-aside";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";
import { profileContent } from "@/content/site/profile-content";
import { createPageMetadata } from "@/lib/site";
import { getExperienceEntries } from "@/lib/mdx";
import { siteConfig } from "@/content/site/site-config";

const highlightMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const principleMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

export const metadata = createPageMetadata({
  title: profileContent.about.eyebrow,
  description: profileContent.about.description,
  pathname: "/about",
});

export default async function AboutPage() {
  const { about } = profileContent;
  const milestones = await getExperienceEntries();

  return (
    <section className="pt-10 pb-12 sm:pt-12 sm:pb-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="space-y-8">
            <PageIntro
              eyebrow={about.eyebrow}
              title={about.title}
              description={about.description}
            />

            <PageSection
              title={about.journeySection.title}
              description={about.journeySection.description}
              contentClassName="border-l border-border/75 pl-6"
            >
              <ol className="space-y-5">
                {milestones.map((entry) => (
                  <li key={entry.slug} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] top-1 size-3 rounded-full border-2 border-signal bg-card"
                    />
                    {entry.frontmatter.period ? (
                      <p className="text-xs font-medium text-primary">
                        {entry.frontmatter.period}
                      </p>
                    ) : null}
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {entry.frontmatter.title}
                    </p>
                  </li>
                ))}
              </ol>
              <Link
                href="/experience"
                className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Ver trayectoria completa →
              </Link>
            </PageSection>

            <PageSection
              eyebrow={about.highlightSection.eyebrow}
              title={about.highlightSection.title}
              description={about.highlightSection.description}
              contentClassName="grid gap-4 sm:grid-cols-2"
            >
              {about.highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`motion-enter ${highlightMotionDelays[index] ?? "motion-delay-4"} ${index === 0 ? "sm:col-span-2" : ""}`}
                >
                  <div className="interactive-card rounded-[1.5rem] border border-border/70 bg-background/72 p-4 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10">
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </PageSection>

            <PageSection
              eyebrow={about.principlesSection.eyebrow}
              title={about.principlesSection.title}
              description={about.principlesSection.description}
              contentClassName="grid gap-4 sm:grid-cols-2"
            >
              {about.principles.map((item, index) => (
                <div
                  key={item}
                  className={`motion-enter ${principleMotionDelays[index] ?? "motion-delay-4"} ${index === 0 ? "sm:col-span-2" : ""}`}
                >
                  <div className="interactive-card rounded-[1.5rem] border border-border/70 bg-background/72 p-4 text-sm leading-6 text-muted-foreground shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10">
                    {item}
                  </div>
                </div>
              ))}
            </PageSection>
          </div>

          <div className="grid gap-4">
            <div className="motion-enter motion-delay-3">
              <div className="interactive-card rounded-[1.75rem] border border-border/70 bg-background/78 p-3 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76">
                <div className="overflow-hidden rounded-[1.35rem] border border-border/60 bg-background/70 dark:bg-background/10">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={siteConfig.assets.profileImagePath}
                      alt={siteConfig.assets.profileImageAlt}
                      fill
                      sizes="(min-width: 1024px) 20rem, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            <PageAside
              eyebrow={about.aside.eyebrow}
              title={about.aside.title}
              description={about.aside.description}
            >
              <div className="space-y-3">
                {about.aside.items.map((item) => (
                  <div
                    key={item.title}
                    className="interactive-card rounded-[1.25rem] border border-border/70 bg-background/72 px-4 py-3 dark:bg-background/10"
                  >
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </PageAside>
          </div>
        </div>
      </Container>
    </section>
  );
}