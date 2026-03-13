import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import {
  getProjectMdxModule,
  hasProjectMdxModule,
} from "@/content/projects/registry";
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

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
              {entry.frontmatter.featured
                ? "Proyecto principal"
                : "Caso de estudio"}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-5xl">
              {entry.frontmatter.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              {entry.frontmatter.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {taxonomy.slice(0, 8).map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <article className="space-y-6 rounded-3xl border border-border/70 bg-card/75 p-6 shadow-sm backdrop-blur sm:p-8">
            <ProjectContent />
          </article>

          <aside className="grid gap-4 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-border/70 bg-card/75 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Rol
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground">
                {entry.frontmatter.role ?? "Pendiente de definir"}
              </p>
            </div>

            <div className="rounded-3xl border border-border/70 bg-card/75 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Período
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground">
                {entry.frontmatter.year ?? "Pendiente de definir"}
              </p>
            </div>

            <div className="rounded-3xl border border-border/70 bg-card/75 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Stack principal
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground">
                {entry.frontmatter.stack?.slice(0, 4).join(" / ") ??
                  "Pendiente de definir"}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
