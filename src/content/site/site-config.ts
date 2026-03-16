import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Matías Peralta",
  locale: "es-AR",
  language: "es",
  description:
    "Portfolio personal con foco en Android, automatización end-to-end y ZIBE como caso principal para mostrar arquitectura, calidad técnica y criterio de producto.",
  assets: {
    profileImagePath: "/images/profile/MatiasPeralta.JPG",
    profileImageAlt: "Retrato profesional de Matías Peralta",
    cvFilePath: "/files/CV_MATIAS_PERALTA_ANALISTA.pdf",
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
    { href: "/cv", label: "CV" },
  ],
  hero: {
    statusBadge: "Disponible para Android y automatización",
    eyebrow: "Portfolio técnico",
    title: "Android moderno y automatización con foco en producto.",
    description:
      "Con ZIBE como caso principal, muestro modernización incremental, arquitectura clara y calidad técnica visible en un repo público.",
    primaryCta: {
      href: "/projects/zibe",
      label: "Explorar ZIBE",
    },
    secondaryCta: {
      href: "/projects",
      label: "Ver proyectos",
    },
    summaryCards: [
      {
        label: "Rol objetivo",
        value: "Android Jr/Mid · Automatización",
      },
      {
        label: "Perfil",
        value: "Producto, negocio y ejecución técnica",
      },
      {
        label: "Enfoque",
        value: "Modernización con impacto real",
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
    cvCta: {
      eyebrow: "Siguiente paso",
      title: "Mi CV reúne experiencia, foco actual y proyectos clave.",
      description:
        "Un resumen breve de mi recorrido antes de pasar a proyectos o contacto.",
      action: {
        href: "/cv",
        label: "Ver CV",
      },
    },
  },
  footer: {
    copyrightSuffix: "Base profesional de mi portfolio.",
    description:
      "Enfocado en proyectos reales, automatización end-to-end y desarrollo con impacto operativo.",
  },
};
