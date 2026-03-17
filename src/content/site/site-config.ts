import type { SiteConfig } from "@/types/site";

const cvFilePath = "/files/CV_MATIAS_PERALTA_ANALISTA.pdf";

export const siteConfig: SiteConfig = {
  name: "Matías Peralta",
  locale: "es-AR",
  language: "es",
  description:
    "Portfolio personal con foco en Android, automatización end-to-end y ZIBE como caso principal para mostrar arquitectura, calidad técnica y criterio de producto.",
  assets: {
    profileImagePath: "/images/profile/MatiasPeralta.JPG",
    profileImageAlt: "Retrato profesional de Matías Peralta",
    cvFilePath,
  },
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
    { href: cvFilePath, label: "Descargar CV", download: true },
  ],
  hero: {
    statusBadge:
      "Disponible para roles Android, automatización y mejora de procesos",
    eyebrow: "Desarrollo Android + automatización",
    title:
      "Desarrollo soluciones Android y automatizaciones para procesos complejos, con impacto medible",
    description:
      "Vengo de resolver operación real con volumen, trazabilidad y mejora continua, y hoy lo combino con una base técnica visible en Android moderno. Mi foco está en construir soluciones que no solo funcionen, sino que también se puedan entender, mantener y hacer crecer.",
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
        label: "Impacto operativo",
        value:
          "De ~60 a más de 500 documentos procesados por día mediante automatización y mejora de flujo.",
      },
      {
        label: "Perfil",
        value:
          "Android junior con base sólida en automatización, integraciones y mejora de procesos.",
      },
      {
        label: "Prueba técnica",
        value:
          "Proyectos públicos con arquitectura, decisiones y evolución documentada.",
      },
    ],
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
  homeComposition: {
    projectLead: {
      eyebrow: "Prueba principal",
      title: "ZIBE concentra el tipo de trabajo que mejor representa mi perfil.",
      description:
        "Después de la identidad y el stack, la Home baja a una prueba concreta: un proyecto Android real donde se ve arquitectura, evolución técnica y criterio de producto.",
      highlights: [
        "Arquitectura documentada y visible en repo público",
        "Modernización incremental sin reescritura total",
        "Integración end-to-end con foco en mantenibilidad",
      ],
    },
    credibility: {
      eyebrow: "Señales de credibilidad",
      title: "Trabajo con claridad técnica, continuidad y foco operativo.",
      description:
        "Más allá de un proyecto puntual, el portfolio busca mostrar cómo pienso el trabajo: criterio técnico, mejora continua y capacidad de traducir decisiones en valor entendible para negocio.",
      items: [
        {
          title: "Android + automatización",
          description:
            "Combino entrega de producto con automatización para resolver problemas reales y repetitivos.",
        },
        {
          title: "Criterio de mantenimiento",
          description:
            "Prioridad en estructura, legibilidad y evolución incremental antes que soluciones vistosas pero frágiles.",
        },
        {
          title: "Equilibrio técnico y negocio",
          description:
            "Busco que cada decisión sea defendible tanto por su calidad técnica como por su impacto operativo.",
        },
      ],
    },
    featuredProject: {
      eyebrow: "Proyecto principal",
      description:
        "Un caso real para mostrar mensajería en tiempo real, evolución arquitectónica y criterio de mantenimiento sobre una base Android que sigue activa.",
      githubBadge: "GitHub vivo",
      statsLabels: {
        stars: "Stars",
        forks: "Forks",
        lastPush: "Último push",
      },
      primaryActionLabel: "Ver caso completo",
      secondaryAction: {
        href: "/projects",
        label: "Ver listado",
      },
      metadata: {
        roleLabel: "Rol",
        periodLabel: "Período",
        focusLabel: "Foco",
        emptyValue: "Pendiente de definir",
        focusFallback: "Arquitectura / producto / calidad",
      },
    },
    closingCta: {
      eyebrow: "Siguiente paso",
      title: "Contacto y CV en un solo cierre.",
      description:
        "La página de contacto concentra la descarga del CV, canales directos y el contexto justo para avanzar rápido.",
      action: {
        href: "/contact",
        label: "Ir a contacto",
      },
    },
  },
  footer: {
    copyrightSuffix: "Base profesional de mi portfolio.",
    description:
      "Enfocado en proyectos reales, automatización end-to-end y desarrollo con impacto operativo.",
  },
};
