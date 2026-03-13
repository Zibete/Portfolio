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
    eyebrow: "Portfolio técnico",
    title: "Android moderno, automatización y mejora continua con foco en producto.",
    description:
      "ZIBE ya funciona como primer caso de estudio real del portfolio: una app Android de mensajería que me permite mostrar modernización incremental, arquitectura clara y calidad técnica en un repo público.",
    primaryCta: {
      href: "/projects/zibe",
      label: "Ver ZIBE",
    },
    secondaryCta: {
      href: "/projects",
      label: "Ver proyectos",
    },
  },
};
