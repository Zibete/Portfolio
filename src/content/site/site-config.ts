import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Matías Peralta",
  locale: "es-AR",
  language: "es",
  description:
    "Portfolio de Matías Peralta con foco en Android, automatización end-to-end y ZIBE como caso principal para demostrar arquitectura, calidad técnica y criterio de producto.",
  primaryAudience: "Líderes de producto y negocio",
  targetRoles: ["Android Jr/Mid", "Automation Engineer"],
  messageBalance: "50% técnico / 50% negocio",
  defaultTheme: "dark",
  navItems: [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    { href: "/projects", label: "Proyectos" },
    { href: "/experience", label: "Experiencia" },
    { href: "/skills", label: "Habilidades" },
    { href: "/contact", label: "Contacto" },
    { href: "/cv", label: "CV" },
  ],
  hero: {
    statusBadge: "Disponible para Android y automatización",
    eyebrow: "Portfolio técnico",
    title: "Android moderno y automatización con foco en producto.",
    description:
      "Con ZIBE como caso principal, muestro modernización incremental, arquitectura clara y calidad técnica visible en un repo público.",
    supportingNote: "Caso principal ya disponible: ZIBE.",
    primaryCta: {
      href: "/projects/zibe",
      label: "Explorar ZIBE",
    },
    secondaryCta: {
      href: "/projects",
      label: "Ver proyectos",
    },
  },
  stackMarquee: {
    label: "Stack híbrido",
    items: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "Python",
      "VBA",
      "Excel",
      "SAP FI",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
};
