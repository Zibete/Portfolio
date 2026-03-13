import { PagePlaceholder } from "@/components/shared/page-placeholder";

export const metadata = {
  title: "Sobre mí",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="Sobre mí"
      title="Presentación profesional en construcción sobre una base clara."
      description="Esta sección va a sintetizar el perfil de Matías Peralta para liderazgo de producto y negocio, sin perder profundidad técnica."
      bullets={[
        "Resumen profesional orientado a Android, automatización y mejora continua.",
        "Narrativa breve, escaneable y alineada con decisiones reales de producto.",
        "Copy inicial en español, con posibilidad de expansión futura a inglés.",
      ]}
      nextStep="Completar posicionamiento, trayectoria y propuesta de valor con material validado desde specs y repositorios fuente."
    />
  );
}
