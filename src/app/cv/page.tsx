import Link from "next/link";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageAside } from "@/components/shared/page-aside";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";
import { Button } from "@/components/ui/button";
import { profileContent } from "@/content/site/profile-content";
import { siteConfig } from "@/content/site/site-config";

const snapshotMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const summaryMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

export const metadata = {
  title: "CV",
};

export default function CvPage() {
  const { cv } = profileContent;

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <PageIntro
          eyebrow={cv.eyebrow}
          title={cv.title}
          description={cv.description}
        >
          <Button asChild>
            <a href={siteConfig.assets.cvFilePath} download>
              Descargar CV en PDF
              <Download />
            </a>
          </Button>
        </PageIntro>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <PageSection
          eyebrow="Snapshot"
          title="Tres ejes para leer rápido el perfil."
          description="Base técnica moderna, automatización end-to-end y experiencia operativa real como síntesis del posicionamiento actual."
          contentClassName="grid gap-4 md:grid-cols-3"
        >
            {cv.snapshots.map((item, index) => (
              <div
                key={item.label}
                className={`motion-enter ${snapshotMotionDelays[index] ?? "motion-delay-4"}`}
              >
                <div className="interactive-card rounded-[1.5rem] border border-border/70 bg-background/72 p-4 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10">
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </PageSection>

          <PageAside
            eyebrow={cv.aside.eyebrow}
            title={cv.aside.title}
            description={cv.aside.description}
            className="lg:sticky lg:top-24"
          >
            <div className="flex flex-col gap-2">
              <Button asChild className="w-full">
                <Link href="/projects">
                  Ver proyectos
                  <ArrowRight />
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="mailto:matiasabelperalta@gmail.com">
                  Escribir por email
                  <Mail />
                </Link>
              </Button>
              <Button variant="ghost" asChild className="w-full">
                <Link
                  href="https://github.com/Zibete"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver GitHub
                  <Github />
                </Link>
              </Button>
            </div>
          </PageAside>
        </div>

        <PageSection
          eyebrow="Resumen profesional"
          title="Valor profesional en una lectura corta."
          description="Combino experiencia en automatización end-to-end, mejora de procesos y desarrollo Android con base moderna. Aporto criterio operativo, foco en mantenimiento y capacidad para traducir necesidades reales en soluciones claras y útiles."
          contentClassName="grid gap-4 md:grid-cols-3"
        >
          {cv.summary.map((item, index) => (
            <div
              key={item.title}
              className={`motion-enter ${summaryMotionDelays[index] ?? "motion-delay-4"}`}
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
