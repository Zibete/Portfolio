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
      title: "Código claro, iteración guiada y foco en el problema real.",
      description:
        "Trabajo con especificaciones claras, implementación iterativa y criterio técnico. Codeo, automatizo y me apoyo en agentes y modelos LLM cuando aceleran análisis, ejecución o revisión, sin perder control sobre las decisiones, la validación ni el mantenimiento.",
      items: [
        {
          title: "Implementación clara",
          description:
            "Priorizo estructuras entendibles, decisiones trazables y soluciones que se puedan mantener, extender y revisar sin fricción.",
        },
        {
          title: "Iteración con criterio",
          description:
            "Suelo avanzar con objetivos concretos, pasos acotados, validación frecuente y apoyo de IA cuando aporta velocidad real.",
        },
        {
          title: "Contexto operativo",
          description:
            "Diseño pensando en operación diaria, restricciones, errores posibles y continuidad, no solo en la implementación ideal."
        },
      ],
    },
    featuredProject: {
      eyebrow: "Proyecto Android destacado",
      description:
        "App Android de mensajería desarrollada como caso técnico principal del portfolio. El proyecto combina modernización progresiva, arquitectura por capas y prácticas actuales de Android para mostrar cómo abordo producto, código y mantenimiento en un contexto realista de evolución continua.",
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
        focusLabel: "Foco técnico",
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
