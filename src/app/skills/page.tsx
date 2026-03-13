import { PagePlaceholder } from "@/components/shared/page-placeholder";

export const metadata = {
  title: "Habilidades",
};

export default function SkillsPage() {
  return (
    <PagePlaceholder
      eyebrow="Habilidades"
      title="Mapa de capacidades listo para ordenar profundidad técnica por contexto."
      description="Esta sección se va a construir para mostrar skills con lectura rápida, evitando listas interminables sin traducción a valor real."
      bullets={[
        "Android y testing como eje técnico principal.",
        "Automatización end-to-end y eficiencia operativa como diferenciadores.",
        "Presentación pensada para balancear stack, criterio y ejecución.",
      ]}
      nextStep="Agrupar capacidades por dominios y vincularlas más adelante con proyectos y experiencias reales."
    />
  );
}
