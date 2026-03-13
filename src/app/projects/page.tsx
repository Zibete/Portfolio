import { PagePlaceholder } from "@/components/shared/page-placeholder";
import { getProjectEntries } from "@/lib/mdx";

export const metadata = {
  title: "Proyectos",
};

export default async function ProjectsPage() {
  const entries = await getProjectEntries();

  return (
    <PagePlaceholder
      eyebrow="Proyectos"
      title="Casos de estudio locales listos para crecer con MDX."
      description="La capa de contenido ya quedó preparada para usar archivos `.mdx` por proyecto, con frontmatter consistente y slugs derivados de archivos."
      bullets={[
        `${entries.length} entradas MDX detectadas en esta iteración.`,
        "La grilla final de proyectos se construirá recién cuando exista contenido aprobado.",
        "Cada detalle podrá vivir luego en `/projects/[slug]` sin backend adicional.",
      ]}
      nextStep="Agregar los primeros archivos `project-slug.mdx` con frontmatter definido por spec antes de diseñar la navegación final."
      sourcePath="src/content/projects/*.mdx"
    />
  );
}
