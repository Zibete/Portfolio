import { migrarSapImpact } from "./migrar-sap-impact.ts";

type ContentSection = {
  eyebrow: string;
  title: string;
  description: string;
};

type ContentCard = {
  title: string;
  description: string;
};

type ContentSnapshot = {
  label: string;
  value: string;
};

type ContentAsideItem = {
  title: string;
  description: string;
};

type ContentAside = ContentSection & {
  items?: ContentAsideItem[];
};

type ContactMethodId = "email" | "linkedin" | "github";

type ContactMethod = {
  id: ContactMethodId;
  label: string;
  value: string;
  href: string;
  description: string;
  actionLabel: string;
  external?: boolean;
};

type ContactActionId = "projects" | "email" | "github";

type ContactAction = {
  id: ContactActionId;
  label: string;
  href: string;
  variant: "default" | "outline" | "ghost";
  external?: boolean;
};

type AboutContent = ContentSection & {
  journeySection: ContentSection;
  highlightSection: ContentSection;
  highlights: ContentCard[];
  principlesSection: ContentSection;
  principles: string[];
  aside: ContentAside & {
    items: ContentAsideItem[];
  };
};

type ExperienceContent = ContentSection & {
  rolesSection: ContentSection;
  repeatableSignalsSection: ContentSection;
  repeatableSignals: ContentCard[];
  metrics: ContentSnapshot[];
  aside: ContentAside;
};

type SkillGroup = ContentCard & {
  items: string[];
};

type SkillsContent = ContentSection & {
  groupsSection: ContentSection;
  groups: SkillGroup[];
  aside: ContentAside & {
    items: ContentAsideItem[];
  };
};

type ContactContent = ContentSection & {
  downloadCtaLabel: string;
  methodsSection: ContentSection;
  methods: ContactMethod[];
  summarySection: ContentSection;
  summary: ContentCard[];
  aside: ContentAside & {
    actions: ContactAction[];
  };
};

type ProfileContent = {
  about: AboutContent;
  experience: ExperienceContent;
  skills: SkillsContent;
  contact: ContactContent;
};

const emailAddress = "matiasabelperalta@gmail.com";
const emailHref = `mailto:${emailAddress}`;
export const linkedInHref = "https://www.linkedin.com/in/matiasabelperalta/";
export const githubHref = "https://github.com/Zibete";

export const profileContent = {
  about: {
    eyebrow: "Sobre mí",
    title: "De las operaciones al desarrollo de automatizaciones.",
    description:
      "Trabajo en Finanzas y desarrollo herramientas para automatizar tareas, integrar información y mejorar controles. Mi experiencia en cuentas a pagar y operaciones me permite entender reglas y excepciones antes de construir una solución técnica.",
    journeySection: {
      eyebrow: "",
      title: "Cómo llegué hasta acá",
      description:
        "Mi recorrido conecta experiencia operativa, cuentas a pagar y desarrollo de herramientas. En paralelo cursé la Tecnicatura Superior en Programación en Teclab (2022–2024). Estos son los principales hitos de mi trayectoria profesional.",
    },
    highlightSection: {
      eyebrow: "Diferencial",
      title: "Entender el negocio y construir la herramienta.",
      description:
        "Combino relevamiento de procesos, controles y trabajo con usuarios con programación e integraciones. Esa perspectiva me ayuda a priorizar soluciones prácticas y mantenibles.",
    },
    highlights: [
      {
        title: "Automatización financiera",
        description:
          "Experiencia en SAP, facturación, cobranzas, conciliaciones y cuentas a pagar; traducción de tareas repetitivas a flujos programados.",
      },
      {
        title: "Desarrollo e integraciones",
        description:
          "Python, Excel/VBA, automatización web y tratamiento de datos, con atención a excepciones, consistencia y pruebas.",
      },
      {
        title: "Ingeniería y aprendizaje",
        description:
          "Formación en programación, proyectos públicos y uso de IA para apoyar el diseño, la implementación y la revisión técnica.",
      },
    ],
    principlesSection: {
      eyebrow: "Cómo trabajo",
      title: "Alcance claro, iteraciones cortas y validación.",
      description:
        "Empiezo por el proceso y sus restricciones. Después implemento y compruebo resultados. Utilizo ChatGPT, Claude y Gemini como asistentes de análisis y desarrollo; las decisiones y verificaciones técnicas siguen bajo mi responsabilidad.",
    },
    principles: [
      "Identificar entradas, reglas y excepciones antes de automatizar.",
      "Separar responsabilidades, registrar errores y validar resultados con casos concretos.",
      "Distinguir IA asistiendo desarrollo de productos que integren modelos LLM.",
    ],
    aside: {
      eyebrow: "Perfil actual",
      title: "Automatización, software y contexto financiero.",
      description:
        "Busco contribuir en desarrollo de herramientas e integraciones para equipos con procesos complejos. Sigo fortaleciendo capacidades de ingeniería aplicada con proyectos verificables.",
      items: [
        {
          title: "Ubicación",
          description: "Pilar, Buenos Aires, Argentina",
        },
        {
          title: "Roles objetivo",
          description:
            "Automation Developer, Software Developer y Solutions Engineer",
        },
        {
          title: "Formación",
          description:
            "Tecnicatura Superior en Programación · Teclab · 2022–2024",
        },
      ],
    },
  },
  skills: {
    eyebrow: "Habilidades",
    title: "Software, automatización e integraciones con criterio de negocio.",
    description:
      "Mi experiencia más aplicada está en Python, Excel/VBA y sistemas empresariales. También desarrollo productos propios y uso herramientas de IA para analizar y revisar soluciones. Distingo estas capacidades de las tecnologías que todavía estoy aprendiendo para avanzar hacia FDE.",
    groupsSection: {
      eyebrow: "Stack y prácticas",
      title: "Qué aplico hoy y qué estoy desarrollando.",
      description:
        "Las tecnologías están agrupadas según su uso real: trabajo aplicado, desarrollo complementario y aprendizaje. Una herramienta mencionada no implica dominio experto ni uso en producción.",
    },
    groups: [
      {
        title: "Automatización y desarrollo aplicado",
        description:
          "Construyo flujos que transforman datos, aplican reglas de negocio y reducen tareas manuales. Excel/VBA funciona como interfaz operativa cuando resulta conveniente; Python concentra procesamiento e integraciones.",
        items: [
          "Python",
          "VBA",
          "Excel",
          "Power Query",
          "Selenium",
          "Google Apps Script",
        ],
      },
      {
        title: "Sistemas empresariales y datos",
        description:
          "Trabajo con información financiera, cruces, validaciones y conexiones entre archivos, herramientas de Google Workspace y sistemas de gestión. Mi fortaleza está en entender qué necesita controlar cada proceso.",
        items: [
          "NetSuite",
          "SAP FI",
          "SAP GUI scripting",
          "Google Sheets",
          "CSV / XLSX",
          "Conciliaciones",
        ],
      },
      {
        title: "Ingeniería, calidad y colaboración",
        description:
          "Organizo soluciones por responsabilidades, versiono cambios, documento decisiones y compruebo resultados. Aplico pruebas funcionales y herramientas de automatización del desarrollo según el proyecto.",
        items: [
          "Git / GitHub",
          "uv",
          "Pruebas funcionales",
          "GitHub Actions",
          "Documentación",
          "Validación de datos",
        ],
      },
      {
        title: "IA asistiendo ingeniería",
        description:
          "Uso ChatGPT, Claude y Gemini para explorar requisitos, comparar enfoques, desarrollar y revisar código. Verifico salidas, decisiones y comportamiento: esto no equivale a haber desplegado un producto con LLMs.",
        items: [
          "ChatGPT",
          "Claude",
          "Gemini",
          "Especificaciones",
          "Revisión de código",
          "Validación humana",
        ],
      },
      {
        title: "Desarrollo de producto (complementario)",
        description:
          "Proyectos propios en Android y web me permiten trabajar sobre interfaces, estado, arquitectura y mantenimiento. Amplían mi base de software, pero no son el foco principal de mi posicionamiento actual.",
        items: [
          "Kotlin",
          "Jetpack Compose",
          "Firebase",
          "TypeScript",
          "Next.js",
        ],
      },
      {
        title: "En desarrollo hacia FDE",
        description:
          "Son objetivos de aprendizaje y práctica, no competencias expertas acreditadas: fortalecer SQL y diseño de APIs, desplegar soluciones completas e integrar LLMs con pruebas, evaluaciones y manejo de fallos.",
        items: [
          "SQL (básico)",
          "Diseño de APIs (en desarrollo)",
          "Despliegue cloud (objetivo)",
          "LLM APIs (objetivo)",
          "Evaluaciones LLM (objetivo)",
        ],
      },
    ],
    aside: {
      eyebrow: "Criterio de uso",
      title: "La evidencia importa más que la lista de tecnologías.",
      description:
        "Cada habilidad debe poder vincularse a un problema, una implementación, una validación o un proyecto verificable.",
      items: [
        {
          title: "Aplicado a procesos reales",
          description:
            "Python, Excel/VBA e integraciones respaldan automatizaciones sobre reglas y necesidades financieras u operativas.",
        },
        {
          title: "IA con supervisión técnica",
          description:
            "Utilizo modelos como asistentes de ingeniería; reviso los resultados y asumo la responsabilidad de probarlos.",
        },
        {
          title: "Siguiente nivel: FDE",
          description:
            "Estoy construyendo evidencia en APIs, despliegue e IA integrada en software. No presento esos objetivos como experiencia adquirida.",
        },
      ],
    },
  },
  experience: {
    eyebrow: "Experiencia",
    title:
      "Finanzas, automatización y desarrollo aplicado a procesos empresariales.",
    description:
      "Mi recorrido combina análisis financiero, cuentas a pagar, facturación, cobranzas y experiencia operativa. En cada etapa busco entender las reglas del proceso, mejorar controles y aplicar programación donde aporta valor real.",
    rolesSection: {
      eyebrow: "Trayectoria",
      title:
        "De la operación al desarrollo de herramientas para Finanzas.",
      description:
        "Actualmente trabajo en Cabify, en funciones de Finanzas y automatización de procesos. Mi etapa anterior en Pan American Energy / AXION aportó experiencia en cuentas a pagar, SAP y mejoras de productividad sobre grandes volúmenes de información.",
    },
    repeatableSignalsSection: {
      eyebrow: "Cómo aporto",
      title: "Capacidades que conectan negocio e implementación.",
      description:
        "La experiencia funcional permite construir herramientas a partir de necesidades y restricciones reales, no solo a partir de una especificación técnica aislada.",
    },
    repeatableSignals: [
      {
        title: "Entender el proceso",
        description:
          "Identifico entradas, reglas de negocio, excepciones y controles antes de automatizar una tarea.",
      },
      {
        title: "Integrar herramientas",
        description:
          "Conecto información y flujos de trabajo con Excel, programación y sistemas empresariales.",
      },
      {
        title: "Validar y documentar",
        description:
          "Trabajo por iteraciones, reviso resultados y documento decisiones para facilitar el mantenimiento.",
      },
    ],
    metrics: [
      {
        label: "PAE / AXION · Alcance mensual observado",
        value: `${migrarSapImpact.observed.share} del volumen de la unidad en SAP FI`,
      },
      {
        label: "PAE / AXION · Documentos y proveedores",
        value: `${migrarSapImpact.observed.invoices} de ${migrarSapImpact.observed.totalInvoices} documentos · ${migrarSapImpact.observed.suppliers} proveedores`,
      },
      {
        label: "PAE / AXION · Eficiencia estimada",
        value: `${migrarSapImpact.estimated.before} → ${migrarSapImpact.estimated.after} por comprobante (${migrarSapImpact.estimated.reduction} menos tiempo estimado)`,
      },
    ],
    aside: {
      eyebrow: "Alcance y estimación",
      title: "Resultados contextualizados del caso de cuentas a pagar.",
      description:
        "El corte mensual observado corresponde a PAE / AXION y no mide el porcentaje automatizado. La reducción por comprobante es una estimación para casos comparables, no un benchmark del código público. Estos resultados no pertenecen a Cabify.",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title:
      "Conversemos sobre automatización, software e integraciones.",
    description:
      "Podés escribirme, revisar proyectos públicos o descargar mi CV con la experiencia profesional y formación actualizadas.",
    downloadCtaLabel: "Descargar CV",
    methodsSection: {
      eyebrow: "Canales directos",
      title: "Email, LinkedIn y GitHub.",
      description:
        "Las vías más directas para escribirme, revisar mi perfil profesional o ver código público.",
    },
    methods: [
      {
        id: "email",
        label: "Email",
        value: emailAddress,
        href: emailHref,
        description: "La vía más simple para coordinar una conversación directa.",
        actionLabel: "Escribir",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        value: "matiasabelperalta",
        href: linkedInHref,
        description: "Perfil profesional con recorrido y experiencia resumida.",
        actionLabel: "Ver perfil",
        external: true,
      },
      {
        id: "github",
        label: "GitHub",
        value: "Zibete",
        href: githubHref,
        description:
          "Repos públicos para revisar código, continuidad y criterio técnico.",
        actionLabel: "Ver GitHub",
        external: true,
      },
    ],
    summarySection: {
      eyebrow: "Perfil",
      title: "Resumen profesional",
      description:
        "Experiencia y capacidades relevantes para equipos de automatización y desarrollo.",
    },
    summary: [
      {
        title: "Dónde puedo aportar hoy",
        description:
          "Automatización de procesos, desarrollo con Python y Excel/VBA e integraciones para equipos de Finanzas u Operaciones.",
      },
      {
        title: "Qué experiencia suma",
        description:
          "Finanzas en Cabify, cuentas a pagar y supervisión en PAE / AXION, con formación en programación y proyectos técnicos públicos.",
      },
      {
        title: "Qué diferencial aporto",
        description:
          "Combino conocimiento funcional y desarrollo de software, con validaciones, documentación y uso supervisado de herramientas de IA.",
      },
    ],
    aside: {
      eyebrow: "Siguiente paso",
      title: "Proyectos, email y GitHub",
      description:
        "Además del CV, estos son los accesos más útiles para revisar material o seguir la conversación.",
      actions: [
        {
          id: "projects",
          label: "Ver proyectos",
          href: "/projects",
          variant: "default",
        },
        {
          id: "email",
          label: "Escribir por email",
          href: emailHref,
          variant: "outline",
        },
        {
          id: "github",
          label: "Ver GitHub",
          href: githubHref,
          variant: "ghost",
          external: true,
        },
      ],
    },
  },
} satisfies ProfileContent;
