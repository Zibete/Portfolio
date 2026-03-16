import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { TagChip } from "@/components/shared/tag-chip";
import { Button } from "@/components/ui/button";
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

const metadataMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

export async function FeaturedProject({ project }: FeaturedProjectProps) {
  const stackPreview = (project.frontmatter.stack ?? []).slice(0, 5);
  const focusPreview = (project.frontmatter.tags ?? []).slice(0, 3);
  const githubStats = project.frontmatter.githubRepo
    ? await getGitHubRepoStats(project.frontmatter.githubRepo)
    : null;
  const shouldShowGitHubStats =
    project.frontmatter.githubFeatured === true && githubStats;
  const featuredProjectContent = siteConfig.homeComposition.featuredProject;

  return (
    <section className="pb-8 sm:pb-10">
      <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-stretch">
        <div className="motion-reveal motion-delay-1 h-full">
          <div className="interactive-card relative h-full overflow-hidden rounded-[2rem] border border-border/70 bg-card/78 p-6 shadow-[0_28px_90px_-60px_rgb(15_23_42_/_0.35)] backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.12),_transparent)] dark:bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.14),_transparent)]" />
            <div className="relative space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
                  {featuredProjectContent.eyebrow}
                </p>
                <div className="space-y-3">
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-4xl">
                    {project.frontmatter.title}
                  </h2>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                    {project.frontmatter.summary}
                  </p>
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                    {featuredProjectContent.description}
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

        <div className="grid gap-4 lg:h-full lg:grid-rows-3">
          <div className={`motion-enter ${metadataMotionDelays[0]} h-full`}>
            <div className="interactive-card h-full rounded-[1.75rem] border border-border/70 bg-background/72 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {featuredProjectContent.metadata.roleLabel}
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground">
                {project.frontmatter.role ??
                  featuredProjectContent.metadata.emptyValue}
              </p>
            </div>
          </div>

          <div className={`motion-enter ${metadataMotionDelays[1]} h-full`}>
            <div className="interactive-card h-full rounded-[1.75rem] border border-border/70 bg-background/72 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {featuredProjectContent.metadata.periodLabel}
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground">
                {project.frontmatter.year ??
                  featuredProjectContent.metadata.emptyValue}
              </p>
            </div>
          </div>

          <div className={`motion-enter ${metadataMotionDelays[2]} h-full`}>
            <div className="interactive-card h-full rounded-[1.75rem] border border-border/70 bg-background/72 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                {featuredProjectContent.metadata.focusLabel}
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground">
                {focusPreview.join(" / ") ||
                  featuredProjectContent.metadata.focusFallback}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
