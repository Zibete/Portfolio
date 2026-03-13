import { PagePlaceholder } from "@/components/shared/page-placeholder";

export const metadata = {
  title: "Contacto",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Contacto"
      title="Canal de contacto reservado para una integración mínima y futura."
      description="Supabase quedó preparado solo como scaffold técnico. No hay formulario funcional ni persistencia real en esta iteración."
      bullets={[
        "Cliente JS instalado con configuración pública temporal.",
        "Validación básica de variables de entorno incluida.",
        "El objetivo es habilitar contacto más adelante sin sobreconstruir backend hoy.",
      ]}
      nextStep="Definir la experiencia de contacto y las restricciones de privacidad antes de conectar un formulario real."
      sourcePath="src/lib/supabase/"
    />
  );
}
