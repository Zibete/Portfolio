import { Container } from "@/components/shared/container";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-6">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Detalle de proyecto
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-5xl">
            {slug.replaceAll("-", " ")}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Esta ruta ya existe para futuros casos de estudio. Cuando haya contenido real, cada página leerá su archivo MDX correspondiente desde el sistema file-based local.
          </p>
        </div>
        <div className="rounded-3xl border border-border/70 bg-card/80 p-6 text-sm text-muted-foreground">
          Archivo esperado:{" "}
          <code className="text-foreground">src/content/projects/{slug}.mdx</code>
        </div>
      </Container>
    </section>
  );
}
