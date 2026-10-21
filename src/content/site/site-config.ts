import type { SiteConfig } from "@/types/site";

const cvFilePath = "/files/CV_PERALTA_MATIAS_2026.pdf";

export const siteConfig: SiteConfig = {
  name: "Matías Peralta",
  locale: "es-AR",
  language: "es",
  description:
    "Portfolio de Matías Peralta: automatización de procesos, desarrollo de software e integraciones empresariales con Python, Excel/VBA e IA asistiendo ingeniería.",
  assets: {
    profileImagePath: "/images/profile/matias-peralta-2026-profile.webp",
    profileImageAlt: "Retrato profesional de Matías Peralta",
    ogImagePath: "/og/preview.png",
    ogImageAlt: "Preview del portfolio de Matías Peralta",
    cvFilePath,
  },
  primaryAudience: "Equipos de ingeniería, automatización y transformación digital",
  targetRoles: ["Automation Developer", "Software Developer", "Solutions Engineer"],
  messageBalance: "Evidencia técnica conectada a problemas de negocio",
  defaultTheme: "dark",
  navItems: [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    { href: "/projects", label: "Proyectos" },
    { href: "/experience", label: "Experiencia" },
    { href: "/skills", label: "Habilidades" },
    { href: "/contact", label: "Contacto" },
    { href: cvFilePath, label: "Descargar CV", download: true },
  ],
  hero: {
    statusBadge:
      "Abierto a oportunidades en automatización e integraciones",
    eyebrow: "Automation & Software Developer",
    title:
      "Convierto procesos financieros y operativos en herramientas de software y automatización.",
    description:
      "Combino experiencia en Finanzas con Python, Excel/VBA e integraciones para reducir tareas manuales, mejorar controles y hacer los procesos más confiables. Uso herramientas de IA para acelerar análisis, desarrollo y revisión, y valido personalmente el resultado.",
    primaryCta: {
      href: "/projects",
      label: "Ver proyectos",
    },
    secondaryCta: {
      href: cvFilePath,
      label: "Descargar CV",
      download: true,
    },
    impactStatement:
      "Caso histórico de cuentas a pagar: de ~60 a ~500 documentos procesados por día.",
  },
  homeComposition: {
    featuredProject: {
      eyebrow: "Caso de automatización destacado",
      githubBadge: "Repositorio público",
      statsLabels: {
        stars: "Stars",
        forks: "Forks",
        lastPush: "Último push",
      },
      primaryActionLabel: "Ver caso completo",
      secondaryAction: {
        href: "/projects",
        label: "Ver proyectos",
      },
      metadata: {
        roleLabel: "Rol",
        periodLabel: "Período",
        focusLabel: "Foco técnico",
        emptyValue: "Pendiente de definir",
        focusFallback: "Software / automatización / integración",
      },
    },
    closingCta: {
      eyebrow: "Seguí por acá",
      title: "Conocé cómo resuelvo problemas",
      description: "Casos públicos, decisiones de implementación y CV.",
      actions: [
        {
          href: "/contact",
          label: "Ir a contacto",
        },
        {
          href: cvFilePath,
          label: "Descargar CV",
          download: true,
        },
      ],
    },
  },
  footer: {
    copyrightSuffix: "Base profesional de mi portfolio.",
    description:
      "Desarrollo y automatización para resolver problemas operativos reales.",
  },
};
