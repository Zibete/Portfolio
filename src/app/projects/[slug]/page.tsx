import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { PageAside } from "@/components/shared/page-aside";
import { Container } from "@/components/shared/container";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";
import { Button } from "@/components/ui/button";
import {
  getProjectMdxModule,
  hasProjectMdxModule,
} from "@/content/projects/registry";
import {
  formatGitHubDate,
  formatGitHubMetric,
  getGitHubRepoStats,
} from "@/lib/github";
import {
  getProjectEntryBySlug,
  getPublishedProjectEntries,
} from "@/lib/mdx";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const entries = await getPublishedProjectEntries();

  return entries
    .filter((entry) => hasProjectMdxModule(entry.slug))
    .map((entry) => ({
      slug: entry.slug,
    }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getProjectEntryBySlug(slug);

  if (!entry || entry.frontmatter.published === false) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const asideMotionDelays = [
    "motion-delay-2",
    "motion-delay-3",
    "motion-delay-4",
    "motion-delay-5",
  ] as const;
  const { slug } = await params;
  const [entry, projectModule] = await Promise.all([
    getProjectEntryBySlug(slug),
    getProjectMdxModule(slug),
  ]);

  if (!entry || entry.frontmatter.published === false || !projectModule) {
    notFound();
  }

  const ProjectContent = projectModule.default;
  const taxonomy = entry.frontmatter.stack ?? entry.frontmatter.tags ?? [];
  const githubStats = entry.frontmatter.githubRepo
    ? await getGitHubRepoStats(entry.frontmatter.githubRepo)
    : null;
  const githubUrl = entry.frontmatter.githubUrl ?? githubStats?.htmlUrl ?? null;
  const hasGitHubBlock = Boolean(
    githubStats || githubUrl || entry.frontmatter.demoUrl,
  );

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <div className="space-y-6">
          <Button variant="ghost" asChild className="w-fit">
            <Link href="/projects">
              <ArrowLeft />
              Volver a proyectos
            </Link>
          </Button>

          <PageIntro
            eyebrow={
              entry.frontmatter.featured
                ? "Proyecto principal"
                : "Caso de estudio"
            }
            title={entry.frontmatter.title}
            description={entry.frontmatter.summary}
          >
            {taxonomy.slice(0, 8).map((item) => (
              <span
                key={item}
                className="interactive-chip rounded-full border border-border/70 bg-card/72 px-3 py-1 text-xs font-medium text-muted-foreground dark:bg-background/14"
              >
                {item}
              </span>
            ))}
          </PageIntro>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <PageSection contentClassName="space-y-6">
            {entry.frontmatter.coverImage ? (
              <div className="interactive-card-subtle overflow-hidden rounded-[1.75rem] border border-border/70 bg-background/72 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] dark:bg-background/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={entry.frontmatter.coverImage}
                    alt={
                      entry.frontmatter.coverImageAlt ??
                      `Captura del proyecto ${entry.frontmatter.title}`
                    }
                    fill
                    sizes="(min-width: 1024px) 48rem, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            ) : null}
            <ProjectContent />
          </PageSection>

          <div className="grid gap-4 lg:sticky lg:top-24">
            <PageAside
              eyebrow="Rol"
              description={entry.frontmatter.role ?? "Pendiente de definir"}
              delayClassName={`motion-enter ${asideMotionDelays[0]}`}
            />

            <PageAside
              eyebrow="Período"
              description={entry.frontmatter.year ?? "Pendiente de definir"}
              delayClassName={`motion-enter ${asideMotionDelays[1]}`}
            />

            <PageAside
              eyebrow="Stack principal"
              description={
                entry.frontmatter.stack?.slice(0, 4).join(" / ") ??
                "Pendiente de definir"
              }
              delayClassName={`motion-enter ${asideMotionDelays[2]}`}
            />

            {hasGitHubBlock ? (
              <PageAside
                eyebrow="GitHub"
                delayClassName={`motion-enter ${asideMotionDelays[3]}`}
              >
                <div className="space-y-4 text-sm leading-6 text-muted-foreground">
                  {githubStats ? (
                    <>
                      <p className="font-medium text-foreground">
                        {githubStats.fullName}
                      </p>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium text-foreground">
                            Stars:
                          </span>{" "}
                          {formatGitHubMetric(githubStats.stargazersCount)}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            Forks:
                          </span>{" "}
                          {formatGitHubMetric(githubStats.forksCount)}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            Issues abiertas:
                          </span>{" "}
                          {formatGitHubMetric(githubStats.openIssuesCount)}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            Último push:
                          </span>{" "}
                          {formatGitHubDate(githubStats.pushedAt)}
                        </p>
                      </div>
                    </>
                  ) : null}

                  <div className="flex flex-col gap-2">
                    {githubUrl ? (
                      <Button variant="outline" asChild className="w-full">
                        <Link href={githubUrl} target="_blank" rel="noreferrer">
                          Ver repositorio
                        </Link>
                      </Button>
                    ) : null}
                    {entry.frontmatter.demoUrl ? (
                      <Button variant="ghost" asChild className="w-full">
                        <Link
                          href={entry.frontmatter.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver demo
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </PageAside>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
