import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Matías Peralta",
  locale: "es-AR",
  language: "es",
  description:
    "Base fundacional del portfolio de Matías Peralta, enfocada en Android, automatización end-to-end y eficiencia operativa.",
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
    eyebrow: "Base fundacional v0",
    title: "Android, automatización y mejora continua con foco en resultados.",
    description:
      "Esta primera iteración deja el portfolio listo para crecer con contenido file-based, MDX local y una narrativa equilibrada entre profundidad técnica y valor de negocio.",
    primaryCta: {
      href: "/projects",
      label: "Ver base de proyectos",
    },
    secondaryCta: {
      href: "/cv",
      label: "Ir a CV",
    },
  },
};
