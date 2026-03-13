import { PagePlaceholder } from "@/components/shared/page-placeholder";

export const metadata = {
  title: "CV",
};

export default function CvPage() {
  return (
    <PagePlaceholder
      eyebrow="CV"
      title="Espacio listo para la futura descarga principal del portfolio."
      description="La CTA principal prevista para el proyecto es la descarga del CV. En esta iteración solo dejamos la ruta y el contexto necesarios para incorporarla después."
      bullets={[
        "La descarga final en PDF no se implementa todavía.",
        "La versión pública del CV deberá alinearse con el posicionamiento definido en specs.",
        "La sección actual funciona como versión temporal navegable y controlada.",
      ]}
      nextStep="Definir contenido, formato y versión descargable cuando el mensaje base del portfolio esté validado."
    />
  );
}
