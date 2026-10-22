import { Container } from "@/components/shared/container";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";
import { TagChip } from "@/components/shared/tag-chip";
import { profileContent } from "@/content/site/profile-content";
import { createPageMetadata } from "@/lib/site";
import { getExperienceEntries } from "@/lib/mdx";

const experienceCardMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const signalMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

export const metadata = createPageMetadata({
  title: profileContent.experience.eyebrow,
  description: profileContent.experience.description,
  pathname: "/experience",
});

export default async function ExperiencePage() {
  const { experience } = profileContent;
  const entries = (await getExperienceEntries()).filter(
    (entry) => entry.frontmatter.published !== false,
  );

  return (
    <section className="pt-10 pb-12 sm:pt-12 sm:pb-16">
      <Container className="space-y-8">
        <PageIntro
          eyebrow={experience.eyebrow}
          title={experience.title}
          description={experience.description}
        />

        <PageSection
          eyebrow={experience.rolesSection.eyebrow}
          title={experience.rolesSection.title}
          description={experience.rolesSection.description}
          contentClassName="ml-2 space-y-4 border-l border-border/75 pl-6 sm:ml-3 sm:pl-8"
        >
          {entries.map((entry, index) => (
            <div
              key={entry.slug}
              className={"motion-enter relative " + (experienceCardMotionDelays[index] ?? "motion-delay-4")}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-6 size-3 rounded-full border-2 border-signal bg-card sm:-left-[39px]"
              />
              <article className="rounded-2xl border border-border/70 bg-background/72 p-5 dark:bg-background/10 sm:p-6">
                {entry.frontmatter.company ? (
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                    {entry.frontmatter.company}
                  </p>
                ) : null}
                {entry.frontmatter.period ? (
                  <p className="mt-2 text-xs font-medium text-muted-foreground">
                    {entry.frontmatter.period}
                  </p>
                ) : null}
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)]">
                  {entry.frontmatter.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
                  {entry.frontmatter.summary}
                </p>
                {entry.frontmatter.focus?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.frontmatter.focus.map((item) => (
                      <TagChip key={item} label={item} />
                    ))}
                  </div>
                ) : null}
              </article>
            </div>
          ))}
        </PageSection>

        <PageSection
          eyebrow={experience.aside.eyebrow}
          title={experience.aside.title}
          description={experience.aside.description}
          contentClassName="grid gap-4 md:grid-cols-3"
        >
          {experience.metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border/70 bg-background/72 p-5 dark:bg-background/10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-3 text-base font-semibold leading-7 text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </PageSection>

        <PageSection
          eyebrow={experience.repeatableSignalsSection.eyebrow}
          title={experience.repeatableSignalsSection.title}
          description={experience.repeatableSignalsSection.description}
          contentClassName="grid gap-4 md:grid-cols-3"
        >
          {experience.repeatableSignals.map((item, index) => (
            <div
              key={item.title}
              className={`motion-enter ${signalMotionDelays[index] ?? "motion-delay-4"}`}
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
      </Container>
    </section>
  );
}
