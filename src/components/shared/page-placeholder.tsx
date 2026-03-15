import { PageAside } from "@/components/shared/page-aside";
import { Container } from "@/components/shared/container";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";

interface PagePlaceholderProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  nextStep: string;
  sourcePath?: string;
}

export function PagePlaceholder({
  eyebrow,
  title,
  description,
  bullets,
  nextStep,
  sourcePath,
}: PagePlaceholderProps) {
  const bulletMotionDelays = [
    "motion-delay-2",
    "motion-delay-3",
    "motion-delay-4",
    "motion-delay-5",
  ] as const;

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <PageIntro
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <PageSection
            eyebrow="Lectura esperada"
            title="Base visual lista para sumar contenido real."
            description="La ruta ya comparte la jerarquía, superficies y ritmo del resto del portfolio, mientras el contenido definitivo sigue ligado a specs y fuentes verificables."
            contentClassName="grid gap-3 sm:grid-cols-2"
          >
            {bullets.map((bullet, index) => (
              <div
                key={bullet}
                className={`motion-enter ${bulletMotionDelays[index] ?? "motion-delay-5"} rounded-[1.5rem] border border-border/70 bg-background/72 p-4 text-sm leading-6 text-muted-foreground shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10`}
              >
                {bullet}
              </div>
            ))}
          </PageSection>

          <PageAside
            eyebrow="Estado actual"
            title="Siguiente pieza a completar"
            description={nextStep}
            className="lg:sticky lg:top-24"
          >
            {sourcePath ? (
              <div className="rounded-[1.25rem] border border-border/70 bg-background/72 p-4 dark:bg-background/10">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  Fuente futura
                </p>
                <code className="mt-3 block text-sm text-foreground">
                  {sourcePath}
                </code>
              </div>
            ) : null}
          </PageAside>
        </div>
      </Container>
    </section>
  );
}
