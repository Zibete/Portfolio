import { PagePlaceholder } from "@/components/shared/page-placeholder";
import { getExperienceEntries } from "@/lib/mdx";

export const metadata = {
  title: "Experiencia",
};

export default async function ExperiencePage() {
  const entries = await getExperienceEntries();

  return (
    <PagePlaceholder
      eyebrow="Experiencia"
      title="Experiencia profesional preparada para formato breve y orientado a impacto."
      description="La estructura prioriza claridad para liderazgo no técnico, pero dejando espacio para contexto técnico cuando aporte al caso."
      bullets={[
        `${entries.length} entradas MDX detectadas en esta iteración.`,
        "El contenido se organizará por impacto, contexto y resultado, no por texto largo.",
        "La sección funcionará como puente entre trayectoria, ejecución y negocio.",
      ]}
      nextStep="Definir las primeras entradas de experiencia con foco en responsabilidades, mejoras y resultados verificables."
      sourcePath="src/content/experience/*.mdx"
    />
  );
}
