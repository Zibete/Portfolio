import { Container } from "@/components/shared/container";
import { PageAside } from "@/components/shared/page-aside";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";
import { TagChip } from "@/components/shared/tag-chip";
import { profileContent } from "@/content/site/profile-content";

const skillGroupMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
  "motion-delay-5",
] as const;

export const metadata = {
  title: profileContent.skills.eyebrow,
};

export default function SkillsPage() {
  const { skills } = profileContent;

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <PageIntro
          eyebrow={skills.eyebrow}
          title={skills.title}
          description={skills.description}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <PageSection
            eyebrow={skills.groupsSection.eyebrow}
            title={skills.groupsSection.title}
            description={skills.groupsSection.description}
            contentClassName="grid gap-4 md:grid-cols-2"
          >
            {skills.groups.map((group, index) => (
              <div
                key={group.title}
                className={`motion-enter ${skillGroupMotionDelays[index] ?? "motion-delay-5"}`}
              >
                <div className="interactive-card rounded-[1.5rem] border border-border/70 bg-background/72 p-5 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10">
                  <p className="text-base font-semibold text-foreground">
                    {group.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {group.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TagChip key={item} label={item} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </PageSection>

          <PageAside
            eyebrow={skills.aside.eyebrow}
            title={skills.aside.title}
            description={skills.aside.description}
            className="lg:sticky lg:top-24"
          >
            <div className="space-y-3">
              {skills.aside.items.map((item) => (
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
      </Container>
    </section>
  );
}
