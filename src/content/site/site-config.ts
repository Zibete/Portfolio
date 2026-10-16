import type { SiteConfig } from "@/types/site";

const cvFilePath = "/files/CV_MATIAS_PERALTA_ANALISTA.pdf";

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
    summaryCards: [
      {
        label: "Impacto demostrado",
        value:
          "En un caso de cuentas a pagar: de ~60 a más de 500 documentos procesados por día.",
      },
      {
        label: "Stack principal",
        value:
          "Python, Excel/VBA, automatización web e integración de sistemas.",
      },
      {
        label: "IA asistiendo el desarrollo",
        value:
          "Apoyo para analizar, programar y revisar, con pruebas y criterio técnico.",
      },
    ],
  },
  stackMarquee: {
    label: "Tecnologías que aplico",
    items: [
      "Python",
      "VBA",
      "Excel",
      "Power Query",
      "Selenium",
      "Google Apps Script",
      "SAP FI",
      "Git / GitHub",
      "Kotlin",
      "TypeScript",
      "Next.js",
    ],
  },
  homeComposition: {
    projectLead: {
      eyebrow: "Experiencia aplicada",
      title: "Entiendo el proceso y después construyo la solución.",
      description:
        "Trabajé con circuitos de cuentas a pagar, facturación y conciliación donde conviven reglas, sistemas y excepciones. Ese contexto guía cómo diseño automatizaciones: datos claros, validaciones explícitas y decisiones que puedan revisarse.",
      highlights: [
        "Necesidades de usuarios, controles y excepciones de negocio.",
        "Integración entre Excel, Python y sistemas empresariales.",
        "Arquitectura simple, trazabilidad y mejora iterativa.",
      ],
    },
    credibility: {
      eyebrow: "Cómo trabajo",
      title: "Ingeniería guiada por el problema, no por la herramienta.",
      description:
        "Parto del relevamiento, defino un alcance comprobable y avanzo con entregas pequeñas. Uso ChatGPT, Claude y Gemini como apoyo para analizar, desarrollar y revisar; el criterio técnico y la validación permanecen bajo mi responsabilidad.",
      items: [
        {
          title: "Descubrir y delimitar",
          description:
            "Comprendo reglas, entradas, salidas, riesgos y necesidades de quienes usan el proceso.",
        },
        {
          title: "Construir y probar",
          description:
            "Organizo código, manejo errores y verifico resultados con pruebas y casos concretos.",
        },
        {
          title: "IA con criterio técnico",
          description:
            "Uso modelos de IA para explorar alternativas y revisar soluciones sin delegar la validación.",
        },
      ],
    },
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
        {
          href: "/projects",
          label: "Ver proyectos",
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
