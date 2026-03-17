import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageIntro } from "@/components/shared/page-intro";
import { TagChip } from "@/components/shared/tag-chip";
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
  const cardMotionDelays = [
    "motion-delay-2",
    "motion-delay-3",
    "motion-delay-4",
    "motion-delay-5",
  ] as const;
  const entries = (await getPublishedProjectEntries())
    .filter((entry) => hasProjectMdxModule(entry.slug))
    .sort((left, right) => {
      const featuredDiff =
        Number(Boolean(right.frontmatter.featured)) -
        Number(Boolean(left.frontmatter.featured));

      if (featuredDiff !== 0) {
        return featuredDiff;
      }

      return left.frontmatter.title.localeCompare(right.frontmatter.title);
    });
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
        <PageIntro
          eyebrow="Proyectos"
          title="Casos de estudio reales."
          description="Dos proyectos que muestran cómo trabajo, qué construyo y qué tipo de problemas sé resolver. Acá concentro los casos que mejor representan mi perfil hoy: desarrollo Android moderno y automatización aplicada a procesos complejos."
        />

        <div className="grid gap-5">
          {projectsWithGitHub.map(({ entry, githubStats }, index) => (
            <div
              key={entry.slug}
              className={`motion-enter ${cardMotionDelays[index] ?? "motion-delay-5"}`}
            >
              <article className="interactive-card rounded-[2rem] border border-border/70 bg-card/78 p-6 shadow-[0_28px_90px_-60px_rgb(15_23_42_/_0.34)] backdrop-blur-xl sm:p-7">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                        {entry.frontmatter.featured
                          ? "Proyecto Proyecto Android destacado"
                          : "Automatización aplicada a procesos reales"}
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
                          <TagChip key={item} label={item} />
                        ))}
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-col gap-4 lg:w-64 lg:items-end">
                    {entry.frontmatter.coverImage ? (
                      <div className="interactive-card-subtle w-full overflow-hidden rounded-[1.5rem] border border-border/70 bg-background/72 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] dark:bg-background/10">
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={entry.frontmatter.coverImage}
                            alt={
                              entry.frontmatter.coverImageAlt ??
                              `Captura del proyecto ${entry.frontmatter.title}`
                            }
                            fill
                            sizes="(min-width: 1024px) 16rem, 100vw"
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    ) : null}

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
                        <TagChip label="GitHub" className="text-foreground" />
                        <TagChip
                          label={`Stars ${formatGitHubMetric(githubStats.stargazersCount)}`}
                        />
                        <TagChip
                          label={`Forks ${formatGitHubMetric(githubStats.forksCount)}`}
                        />
                        <TagChip
                          label={`Push ${formatGitHubDate(githubStats.pushedAt)}`}
                        />
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
