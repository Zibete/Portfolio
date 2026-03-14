import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import type { ContentEntry, ProjectFrontmatter } from "@/types/content";

interface FeaturedProjectProps {
  project: ContentEntry<ProjectFrontmatter>;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const stackPreview = (project.frontmatter.stack ?? []).slice(0, 5);
  const focusPreview = (project.frontmatter.tags ?? []).slice(0, 3);

  return (
    <section className="pb-20 sm:pb-28">
      <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/78 p-6 shadow-[0_28px_90px_-60px_rgb(15_23_42_/_0.35)] backdrop-blur-xl sm:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.12),_transparent)] dark:bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.14),_transparent)]" />
          <div className="relative space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
                Proyecto principal
              </p>
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-4xl">
                  {project.frontmatter.title}
                </h2>
                <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {project.frontmatter.summary}
                </p>
                <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                  Un caso real para mostrar mensajería en tiempo real, evolución
                  arquitectónica y criterio de mantenimiento sobre una base Android
                  que sigue activa.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {stackPreview.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href={`/projects/${project.slug}`}>
                  Ver caso completo
                  <ArrowRight />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">Ver listado</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.75rem] border border-border/70 bg-background/72 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Rol
            </p>
            <p className="mt-3 text-sm leading-6 text-foreground">
              {project.frontmatter.role ?? "Pendiente de definir"}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-border/70 bg-background/72 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Período
            </p>
            <p className="mt-3 text-sm leading-6 text-foreground">
              {project.frontmatter.year ?? "Pendiente de definir"}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-border/70 bg-background/72 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Foco
            </p>
            <p className="mt-3 text-sm leading-6 text-foreground">
              {focusPreview.join(" / ") || "Arquitectura / producto / calidad"}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
