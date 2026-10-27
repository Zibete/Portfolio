import Link from "next/link";
import { ArrowRight, ArrowUpRight, MonitorCog } from "lucide-react";
import { Container } from "@/components/shared/container";
import { TagChip } from "@/components/shared/tag-chip";
import { Button } from "@/components/ui/button";
import { migrarSapImpact } from "@/content/site/migrar-sap-impact";
import { siteConfig } from "@/content/site/site-config";
import {
  formatGitHubDate,
  formatGitHubMetric,
  getGitHubRepoStats,
} from "@/lib/github";
import type { ContentEntry, ProjectFrontmatter } from "@/types/content";

interface FeaturedProjectProps {
  project: ContentEntry<ProjectFrontmatter>;
}

export async function FeaturedProject({ project }: FeaturedProjectProps) {
  const stackPreview = (project.frontmatter.stack ?? []).slice(0, 5);
  const githubStats = project.frontmatter.githubFeatured && project.frontmatter.githubRepo
    ? await getGitHubRepoStats(project.frontmatter.githubRepo)
    : null;
  const shouldShowGitHubStats =
    project.frontmatter.githubFeatured === true && githubStats;
  const featuredProjectContent = siteConfig.homeComposition.featuredProject;
  const evidence = siteConfig.projectEvidence.cases.find((item) => item.caseHref === `/projects/${project.slug}`);

  return (
    <section id="featured-project" className="scroll-mt-28 py-6 sm:py-8">
      <Container className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-stretch">
        <div className="motion-reveal motion-delay-1 h-full">
          <div className="interactive-card relative h-full overflow-hidden rounded-[2rem] border border-border/70 bg-card/78 p-6 shadow-[0_28px_90px_-60px_rgb(15_23_42_/_0.35)] backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.12),_transparent)] dark:bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.14),_transparent)]" />
            <div className="relative space-y-5">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <MonitorCog aria-hidden="true" className="size-6 shrink-0 text-signal" />
                  <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
                    {featuredProjectContent.eyebrow}
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-4xl">
                    {project.frontmatter.title}
                  </h2>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                    {project.frontmatter.summary}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {stackPreview.map((item) => (
                  <TagChip key={item} label={item} />
                ))}
              </div>

              {shouldShowGitHubStats ? (
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <TagChip
                    label={featuredProjectContent.githubBadge}
                    className="text-foreground"
                  />
                  <TagChip
                    label={`${featuredProjectContent.statsLabels.stars} ${formatGitHubMetric(shouldShowGitHubStats.stargazersCount)}`}
                  />
                  <TagChip
                    label={`${featuredProjectContent.statsLabels.forks} ${formatGitHubMetric(shouldShowGitHubStats.forksCount)}`}
                  />
                  <TagChip
                    label={`${featuredProjectContent.statsLabels.lastPush} ${formatGitHubDate(shouldShowGitHubStats.pushedAt)}`}
                  />
                </div>
              ) : null}

              {evidence ? (
                <div className="space-y-2 border-t border-border/70 pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-signal">
                    Evidencia inspeccionable
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {evidence.sources.map((source) => (
                      <a
                        key={source.href}
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {source.label}
                        <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href={`/projects/${project.slug}`}>
                    {featuredProjectContent.primaryActionLabel}
                    <ArrowRight />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={featuredProjectContent.secondaryAction.href}>
                    {featuredProjectContent.secondaryAction.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:h-full lg:grid-cols-1 lg:grid-rows-2">
          <div className="motion-enter motion-delay-2 h-full">
            <div className="interactive-card flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-background/72 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {migrarSapImpact.observed.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{migrarSapImpact.observed.period}</p>
              <p className="mt-3 font-mono text-4xl font-semibold tabular-nums tracking-tight text-foreground">
                {migrarSapImpact.observed.share}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{migrarSapImpact.observed.shareDescription}</p>
              <div
                role="meter"
                aria-label="Participación de documentos SAP FI en el volumen mensual de la unidad"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={migrarSapImpact.observed.shareValue}
                className="mt-4 h-2 overflow-hidden rounded-full bg-border/70"
              >
                <div className="h-full rounded-full bg-signal" style={{ width: `${migrarSapImpact.observed.shareValue}%` }} />
              </div>
              <p className="mt-3 text-sm leading-6 text-foreground">
                <span className="font-semibold tabular-nums">{migrarSapImpact.observed.invoices} / {migrarSapImpact.observed.totalInvoices}</span> documentos · <span className="font-semibold tabular-nums">{migrarSapImpact.observed.suppliers}</span> proveedores
              </p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{migrarSapImpact.observed.boundary}</p>
            </div>
          </div>

          <div className="motion-enter motion-delay-3 h-full">
            <div className="interactive-card flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-background/72 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {migrarSapImpact.estimated.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">PAE / AXION · casos comparables</p>
              <p className="mt-3 font-mono text-4xl font-semibold tabular-nums tracking-tight text-foreground">
                {migrarSapImpact.estimated.reduction}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">menos tiempo estimado</p>
              <p className="mt-4 text-base font-medium tabular-nums text-foreground">
                {migrarSapImpact.estimated.before} <span aria-hidden="true" className="text-signal">→</span><span className="sr-only"> a </span> {migrarSapImpact.estimated.after}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{migrarSapImpact.estimated.unit}</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{migrarSapImpact.estimated.boundary}</p>
              <a
                href={migrarSapImpact.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-1.5 pt-3 text-xs font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Fuente de las métricas <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
