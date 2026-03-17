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
      eyebrow: "Experiencia real aplicada",
      title: "Experiencia real llevada a soluciones técnicas",
      description:
        "Mi perfil no se construyó solo desde proyectos personales. Se formó resolviendo operatorias reales, integrando herramientas, reduciendo trabajo manual y sosteniendo procesos con reglas de negocio, volumen y necesidad de continuidad. Esa experiencia es la base sobre la que hoy desarrollo productos, automatizaciones y herramientas más mantenibles.",
      highlights: [
        "Circuitos con múltiples áreas, validaciones, excepciones y necesidad de precisión operativa.",
        "Integración de herramientas, sistemas, datos y flujos.",
        "Equilibrio entre velocidad, claridad técnica y sostenibilidad de la solución en el tiempo.",
      ],
    },
    credibility: {
      eyebrow: "Cómo trabajo",
      title: "Claridad, continuidad y foco en el problema real.",
      description:
        "Me interesa que una solución resuelva el problema real, pero también que se pueda sostener. Por eso suelo trabajar con foco en claridad, reglas bien definidas, integración entre herramientas y mejoras que tengan sentido operativo además de sentido técnico.",
      items: [
        {
          title: "Claridad",
          description:
            "Priorizo estructuras entendibles, decisiones trazables y soluciones que otros puedan seguir manteniendo.",
        },
        {
          title: "Evolución",
          description:
            "Prefiero avanzar con mejoras firmes e iterativas antes que depender de reescrituras grandes difíciles de sostener.",
        },
        {
          title: "Contexto real",
          description:
            "No separo implementación de operación: diseño pensando en uso diario, restricciones, errores posibles y continuidad.",
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
      eyebrow: "Seguí por acá",
      title: "Elegí la evidencia que quieras ver",
      description: "Proyectos, CV o contacto.",
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
      "Enfocado en proyectos reales, automatización end-to-end y desarrollo con impacto operativo.",
  },
};
