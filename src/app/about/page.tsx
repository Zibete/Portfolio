import { Container } from "@/components/shared/container";
import { PageAside } from "@/components/shared/page-aside";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";
import { profileContent } from "@/content/site/profile-content";

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

export const metadata = {
  title: "Sobre mí",
};

export default function AboutPage() {
  const { about } = profileContent;

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <PageIntro
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.description}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <PageSection
          eyebrow="Diferencial"
          title="Base técnica moderna con experiencia operativa real."
          description="No me defino por un único eje. Mi recorrido cruza desarrollo, automatización, datos y procesos con foco constante en problemas concretos y resultados defendibles."
          contentClassName="grid gap-4 md:grid-cols-3"
        >
            {about.highlights.map((item, index) => (
              <div
                key={item.title}
                className={`motion-enter ${highlightMotionDelays[index] ?? "motion-delay-4"} rounded-[1.5rem] border border-border/70 bg-background/72 p-4 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10`}
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

          <PageAside
            eyebrow={about.aside.eyebrow}
            title={about.aside.title}
            description={about.aside.description}
            className="lg:sticky lg:top-24"
          >
            <div className="space-y-3">
              {about.aside.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-border/70 bg-background/72 px-4 py-3 text-sm leading-6 text-muted-foreground dark:bg-background/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </PageAside>
        </div>

        <PageSection
          eyebrow="Forma de trabajo"
          title="Cómo aporto valor en un equipo."
          description="Empatía, escucha, documentación y respeto por procesos conviven con una base técnica orientada a claridad, mantenimiento y mejora continua."
          contentClassName="grid gap-4 md:grid-cols-3"
        >
          {about.principles.map((item, index) => (
            <div
              key={item}
              className={`motion-enter ${principleMotionDelays[index] ?? "motion-delay-4"} rounded-[1.5rem] border border-border/70 bg-background/72 p-4 text-sm leading-6 text-muted-foreground shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10`}
            >
              {item}
            </div>
          ))}
        </PageSection>
      </Container>
    </section>
  );
}
