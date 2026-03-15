import { Container } from "@/components/shared/container";
import { PageAside } from "@/components/shared/page-aside";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";
import { profileContent } from "@/content/site/profile-content";
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

export const metadata = {
  title: "Experiencia",
};

export default async function ExperiencePage() {
  const { experience } = profileContent;
  const entries = (await getExperienceEntries())
    .filter((entry) => entry.frontmatter.published !== false)
    .sort((left, right) => {
      const featuredDiff =
        Number(Boolean(right.frontmatter.featured)) -
        Number(Boolean(left.frontmatter.featured));

      if (featuredDiff !== 0) {
        return featuredDiff;
      }

      return left.frontmatter.title.localeCompare(right.frontmatter.title);
    });

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <PageIntro
          eyebrow={experience.eyebrow}
          title={experience.title}
          description={experience.description}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <PageSection
          eyebrow="Experiencia relevante"
          title="Roles que explican mi combinación de criterio operativo y ejecución técnica."
          description="Pan American Energy / AXION, cuentas a pagar, automatización y supervisión operativa forman una base concreta para resolver problemas exigentes con orden y trazabilidad."
          contentClassName="grid gap-4"
        >
            {entries.map((entry, index) => (
              <article
                key={entry.slug}
                className={`interactive-card-subtle motion-enter ${experienceCardMotionDelays[index] ?? "motion-delay-4"} rounded-[1.5rem] border border-border/70 bg-background/72 p-5 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10`}
              >
                <div className="space-y-3">
                  {entry.frontmatter.company ? (
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                      {entry.frontmatter.company}
                    </p>
                  ) : null}
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)]">
                      {entry.frontmatter.title}
                    </h2>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {entry.frontmatter.summary}
                    </p>
                  </div>
                </div>

                {entry.frontmatter.focus?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.frontmatter.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/70 bg-card/72 px-3 py-1 text-xs font-medium text-muted-foreground dark:bg-background/14"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </PageSection>

          <PageAside
            eyebrow={experience.aside.eyebrow}
            title={experience.aside.title}
            description={experience.aside.description}
            className="lg:sticky lg:top-24"
          >
            <div className="space-y-3">
              {experience.metrics.map((item) => (
                <div
                  key={item.label}
                  className="interactive-card-subtle rounded-[1.25rem] border border-border/70 bg-background/72 px-4 py-3 dark:bg-background/10"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </PageAside>
        </div>

        <PageSection
          eyebrow="Capacidades consolidadas"
          title="Señales que ya aparecen de forma consistente en mi experiencia."
          description="Procesos complejos, múltiples áreas, presión operativa y necesidad de mejora continua son contextos donde ya trabajé y donde hoy sigo aportando mejor."
          contentClassName="grid gap-4 md:grid-cols-3"
        >
          {experience.repeatableSignals.map((item, index) => (
            <div
              key={item.title}
              className={`interactive-card-subtle motion-enter ${signalMotionDelays[index] ?? "motion-delay-4"} rounded-[1.5rem] border border-border/70 bg-background/72 p-4 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10`}
            >
              <p className="text-sm font-semibold text-foreground">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </PageSection>
      </Container>
    </section>
  );
}
