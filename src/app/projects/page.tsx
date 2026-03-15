import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { hasProjectMdxModule } from "@/content/projects/registry";
import {
  formatGitHubDate,
  formatGitHubMetric,
  getGitHubRepoStats,
} from "@/lib/github";
import { getPublishedProjectEntries } from "@/lib/mdx";

export const metadata = {
  title: "Proyectos",
  description:
    "Casos de estudio reales del portfolio, escritos en MDX local y centrados en criterio técnico con impacto de producto.",
};

export default async function ProjectsPage() {
  const entries = (await getPublishedProjectEntries()).filter((entry) =>
    hasProjectMdxModule(entry.slug),
  );
  const projectsWithGitHub = await Promise.all(
    entries.map(async (entry) => ({
      entry,
      githubStats: entry.frontmatter.githubRepo
        ? await getGitHubRepoStats(entry.frontmatter.githubRepo)
        : null,
    })),
  );

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
            Proyectos
          </p>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-5xl">
              Casos de estudio reales, escritos en MDX local.
            </h1>
            <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              Esta sección prioriza pocos proyectos, bien explicados y con
              señal técnica suficiente para mostrar criterio de implementación,
              mantenimiento y foco en producto.
            </p>
          </div>
        </header>

        <div className="grid gap-5">
          {projectsWithGitHub.map(({ entry, githubStats }) => (
            <article
              key={entry.slug}
              className="rounded-3xl border border-border/70 bg-card/75 p-6 shadow-sm backdrop-blur sm:p-7"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                      {entry.frontmatter.featured
                        ? "Proyecto principal"
                        : "Proyecto"}
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)]">
                      {entry.frontmatter.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                      {entry.frontmatter.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(entry.frontmatter.stack ?? entry.frontmatter.tags ?? [])
                      .slice(0, 6)
                      .map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="flex min-w-0 flex-col gap-4 lg:w-64 lg:items-end">
                  <div className="space-y-1 text-sm text-muted-foreground lg:text-right">
                    {entry.frontmatter.role ? (
                      <p>
                        <span className="font-medium text-foreground">
                          Rol:
                        </span>{" "}
                        {entry.frontmatter.role}
                      </p>
                    ) : null}
                    {entry.frontmatter.year ? (
                      <p>
                        <span className="font-medium text-foreground">
                          Período:
                        </span>{" "}
                        {entry.frontmatter.year}
                      </p>
                    ) : null}
                  </div>

                  {githubStats ? (
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground lg:justify-end">
                      <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 font-medium text-foreground">
                        GitHub
                      </span>
                      <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1">
                        Stars {formatGitHubMetric(githubStats.stargazersCount)}
                      </span>
                      <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1">
                        Forks {formatGitHubMetric(githubStats.forksCount)}
                      </span>
                      <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1">
                        Push {formatGitHubDate(githubStats.pushedAt)}
                      </span>
                    </div>
                  ) : null}

                  <Button asChild>
                    <Link href={`/projects/${entry.slug}`}>
                      Ver caso completo
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
