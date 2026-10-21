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
      href: "#engineering-trace",
      label: "Explorar cómo trabajo",
    },
    secondaryCta: {
      href: cvFilePath,
      label: "Descargar CV",
      download: true,
    },
    impactStatement:
      "Caso histórico de cuentas a pagar: de ~60 a ~500 documentos procesados por día.",
  },
  engineeringTrace: {
    eyebrow: "Engineering trace / proceso",
    title: "Del problema a la evidencia.",
    description:
      "Cinco momentos de ingeniería aplicada: criterio funcional, especificaciones, asistencia con IA, implementación y verificación. Los artefactos se identifican según su origen.",
    stages: [
      {
        id: "discovery",
        label: "Discovery",
        title: "Entender antes de construir",
        description:
          "Reconocer qué necesita el usuario, qué puede fallar y qué decisiones deben mantenerse bajo control humano.",
        outcome: "Resultado: límites y necesidades definidos",
        artifact: {
          file: "docs/CASE_STUDY.md",
          kind: "public",
          href: "https://github.com/Zibete/Migrar-SAP-Portfolio/blob/main/docs/CASE_STUDY.md",
          lines: [
            "Problema: validar facturas sin repetir controles",
            "Proceso: extraer, verificar, clasificar y registrar estados",
            "Límite: las integraciones reales requieren entorno privado",
          ],
        },
      },
      {
        id: "specification",
        label: "Specification",
        title: "Convertir contexto en contratos",
        description:
          "Separar objetivos, restricciones y criterios de aceptación antes de modificar el software.",
        outcome: "Resultado: alcance comprobable",
        artifact: {
          file: "docs/adr/0001-module-boundaries.md",
          kind: "public",
          href: "https://github.com/Zibete/Zibe/blob/main/docs/adr/0001-module-boundaries.md",
          lines: [
            "domain: modelos y contratos sin Firebase ni Android",
            "data: implementaciones de los repositorios",
            "app: integración Hilt e interfaz Android",
          ],
        },
      },
      {
        id: "ai-assisted-engineering",
        label: "AI-assisted",
        title: "Usar IA sin delegar el criterio",
        description:
          "Los modelos ayudan a explorar enfoques y revisar propuestas; las decisiones, pruebas y publicación siguen siendo responsabilidad del desarrollador.",
        outcome: "Resultado: alternativas evaluadas",
        artifact: {
          file: "ai-review.md",
          kind: "example",
          lines: [
            "Asistencia: explorar alternativas técnicas",
            "Revisión humana: evaluar límites y riesgos",
            "Decisión: validar antes de incorporar cambios",
          ],
        },
      },
      {
        id: "implementation",
        label: "Implementation",
        title: "Separar reglas e integraciones",
        description:
          "Aislar lógica determinística de dependencias externas para construir soluciones que puedan revisarse y mantenerse.",
        outcome: "Resultado: código inspeccionable",
        artifact: {
          file: "src/vba/core/modCoreValidation.bas",
          kind: "public",
          href: "https://github.com/Zibete/Migrar-SAP-Portfolio/blob/main/src/vba/core/modCoreValidation.bas",
          lines: [
            "CoreIsSiteMismatch(siteSB, siteFC)",
            "CoreShouldMarkPendienteRevisar(..., montoTolerancia)",
            "Funciones puras sin acceso a Excel ni SAP",
          ],
        },
      },
      {
        id: "validation",
        label: "Validation",
        title: "Demostrar lo que funciona",
        description:
          "Conectar requisitos con pruebas y explicitar qué se puede reproducir públicamente y qué depende de un entorno privado.",
        outcome: "Resultado: evidencia y límites explícitos",
        artifact: {
          file: "docs/TESTING.md",
          kind: "public",
          href: "https://github.com/Zibete/Migrar-SAP-Portfolio/blob/main/docs/TESTING.md",
          lines: [
            "Pruebas del núcleo VBA",
            "Runner con Excel invisible en Windows",
            "Integraciones corporativas fuera de cobertura",
          ],
        },
      },
    ],
    evidence: {
      eyebrow: "Source index / revisión técnica",
      title: "Del recorrido al código.",
      cases: [
        {
          id: "migrar-sap",
          label: "Caso principal · automatización",
          title: "Migrar SAP",
          summary:
            "Reglas VBA independientes de SAP y un runner de pruebas del núcleo ejecutable localmente con Windows y Excel.",
          boundary:
            "El aumento histórico de ~60 a ~500 documentos por día es un resultado reportado del proceso original; no una métrica de los tests públicos.",
          caseHref: "/projects/migrar-sap-portfolio",
          sources: [
            {
              label: "Reglas puras de validación",
              href: "https://github.com/Zibete/Migrar-SAP-Portfolio/blob/main/src/vba/core/modCoreValidation.bas",
            },
            {
              label: "Runner y alcance de las pruebas",
              href: "https://github.com/Zibete/Migrar-SAP-Portfolio/blob/main/docs/TESTING.md",
            },
          ],
        },
        {
          id: "zibe",
          label: "Caso complementario · producto Android",
          title: "ZIBE",
          summary:
            "Modernización modular Android/Kotlin con contratos de dependencias, checker de arquitectura y CI pública.",
          boundary:
            "El workflow comprueba compilación y reglas con configuración ficticia; no acredita uso real de Firebase ni flujos en dispositivos.",
          caseHref: "/projects/zibe",
          sources: [
            {
              label: "ADR de límites modulares",
              href: "https://github.com/Zibete/Zibe/blob/main/docs/adr/0001-module-boundaries.md",
            },
            {
              label: "Checker de arquitectura",
              href: "https://github.com/Zibete/Zibe/blob/main/scripts/check_architecture.py",
            },
            {
              label: "Workflow Android CI",
              href: "https://github.com/Zibete/Zibe/blob/main/.github/workflows/android-ci.yml",
            },
          ],
        },
      ],
    },
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
