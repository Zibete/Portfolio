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

type ContentAside = ContentSection & {
  items?: string[];
};

type ContactMethodId = "email" | "linkedin" | "github";

type ContactMethod = {
  id: ContactMethodId;
  label: string;
  value: string;
  href: string;
  description: string;
};

type CvActionId = "projects" | "email" | "github";

type CvAction = {
  id: CvActionId;
  label: string;
  href: string;
  variant: "default" | "outline" | "ghost";
  external?: boolean;
};

type AboutContent = ContentSection & {
  highlightSection: ContentSection;
  highlights: ContentCard[];
  principlesSection: ContentSection;
  principles: string[];
  aside: ContentAside & {
    items: string[];
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
    items: string[];
  };
};

type ContactContent = ContentSection & {
  methodsSection: ContentSection & {
    actionLabel: string;
  };
  methods: ContactMethod[];
  topicsSection: ContentSection;
  topics: string[];
  aside: ContentAside;
};

type CvContent = ContentSection & {
  downloadCtaLabel: string;
  snapshotSection: ContentSection;
  snapshots: ContentSnapshot[];
  summarySection: ContentSection;
  summary: ContentCard[];
  aside: ContentAside;
  actions: CvAction[];
};

type ProfileContent = {
  about: AboutContent;
  experience: ExperienceContent;
  skills: SkillsContent;
  contact: ContactContent;
  cv: CvContent;
};

const emailAddress = "matiasabelperalta@gmail.com";
const emailHref = `mailto:${emailAddress}`;
const linkedInHref = "https://www.linkedin.com/in/mat%C3%ADasabelperalta/";
const githubHref = "https://github.com/Zibete";

export const profileContent = {
  about: {
    eyebrow: "Sobre mí",
    title:
      "Perfil técnico híbrido con foco en Android, automatización y mejora operativa.",
    description:
      "Combino experiencia real en operaciones, cuentas a pagar, automatización y desarrollo. Mi diferencial está en convertir circuitos complejos en soluciones más claras, medibles y sostenibles.",
    highlightSection: {
      eyebrow: "Diferencial",
      title: "Base técnica moderna con experiencia operativa real.",
      description:
        "No me defino por un único eje. Mi recorrido cruza desarrollo, automatización, datos y procesos con foco constante en problemas concretos y resultados defendibles.",
    },
    highlights: [
      {
        title: "Android junior con base moderna",
        description:
          "ZIBE aporta una base visible en Kotlin, Compose, MVVM, Firebase, testing y evolución incremental de arquitectura en un repo público activo.",
      },
      {
        title: "Automatización end-to-end",
        description:
          "Diseña flujos que integran sistemas, archivos, validaciones y salidas automáticas para reducir trabajo manual y aumentar productividad.",
      },
      {
        title: "Criterio operativo real",
        description:
          "La experiencia en operación, cuentas a pagar y coordinación entre áreas me lleva a priorizar soluciones que realmente funcionen en el día a día.",
      },
    ],
    principlesSection: {
      eyebrow: "Forma de trabajo",
      title: "Cómo aporto valor en un equipo.",
      description:
        "Empatía, escucha, documentación y respeto por procesos conviven con una base técnica orientada a claridad, mantenimiento y mejora continua.",
    },
    principles: [
      "Equilibrio entre profundidad técnica y claridad para áreas de producto y negocio.",
      "Documentación, pruebas, respeto por procesos y mejora continua como base de trabajo.",
      "Construyo productos propios mientras avanzo hacia mi próximo rol en Android, automatización o contextos técnico-funcionales.",
    ],
    aside: {
      eyebrow: "Hoy",
      title: "Productos propios y una base técnica cada vez más visible.",
      description:
        "Tras cerrar una etapa profesional, enfoqué mi tiempo en productos públicos, aprendizaje aplicado y consolidación de un perfil técnico híbrido con señal visible.",
      items: [
        "Pilar, Buenos Aires, Argentina",
        "Roles objetivo: Android Jr/Mid, automatización y mejora de procesos, técnico-funcional en operaciones/finanzas",
        "Base fuerte en empatía, escucha, documentación y vocación de enseñar",
      ],
    },
  },
  skills: {
    eyebrow: "Habilidades",
    title: "Capacidades agrupadas por dominios, no por buzzwords.",
    description:
      "La combinación que mejor me representa cruza Android, automatización, datos y procesos. El valor está en cómo se conectan para resolver trabajo real.",
    groupsSection: {
      eyebrow: "Dominios principales",
      title: "Tecnologías conectadas a producto, operación y mejora de procesos.",
      description:
        "Estas son las áreas donde hoy tengo más tracción y donde mejor se ve la combinación entre base técnica moderna, automatización y experiencia operativa.",
    },
    groups: [
      {
        title: "Android y desarrollo de producto",
        description:
          "Base técnica moderna para construir, corregir y evolucionar aplicaciones con foco en mantenibilidad.",
        items: [
          "Kotlin",
          "Jetpack Compose",
          "Material 3",
          "MVVM",
          "Firebase",
          "Git / GitHub",
        ],
      },
      {
        title: "Automatización e integraciones",
        description:
          "Diseño flujos de punta a punta que combinan reglas de negocio, validaciones y orquestación entre herramientas.",
        items: [
          "Python",
          "VBA",
          "Excel",
          "Power Query",
          "SAP GUI scripting",
          "Task Scheduler",
        ],
      },
      {
        title: "Datos y control operativo",
        description:
          "Trabajo cómodo con reporting, cruces de información, validación de datos y análisis de desvíos para decisiones operativas.",
        items: [
          "Reporting automatizado",
          "ETL liviano",
          "KPIs",
          "Conciliaciones",
          "Calidad de datos",
          "SQL básico práctico",
        ],
      },
      {
        title: "Testing, calidad y colaboración",
        description:
          "No separo implementación de calidad: pruebo, documento y busco que el cambio sea claro para quien lo mantiene después.",
        items: [
          "Pruebas manuales y funcionales",
          "Unit tests",
          "Instrumented tests",
          "GitHub Actions",
          "Documentación",
          "Capacitación de ingresantes",
        ],
      },
    ],
    aside: {
      eyebrow: "Cómo las aplico",
      title: "La herramienta importa por el problema que ayuda a resolver.",
      description:
        "Cada tecnología aparece ligada a un resultado concreto: producto, automatización, control operativo, trazabilidad o mejora de productividad.",
      items: [
        "Android como base moderna para productos propios",
        "Automatización como ventaja real sobre procesos complejos y repetitivos",
        "Datos y validaciones como soporte para decisiones más confiables",
      ],
    },
  },
  experience: {
    eyebrow: "Experiencia",
    title:
      "Trayectoria resumida desde impacto operativo, ejecución técnica y coordinación.",
    description:
      "Mi experiencia combina operación de alta exigencia, cuentas a pagar, automatización y trabajo transversal con múltiples áreas. Eso me dio criterio funcional y una mirada muy práctica sobre cómo implementar mejoras.",
    rolesSection: {
      eyebrow: "Experiencia relevante",
      title:
        "Roles que explican mi combinación de criterio operativo y ejecución técnica.",
      description:
        "Pan American Energy / AXION, cuentas a pagar, automatización y supervisión operativa forman una base concreta para resolver problemas exigentes con orden y trazabilidad.",
    },
    repeatableSignalsSection: {
      eyebrow: "Capacidades consolidadas",
      title: "Señales que ya aparecen de forma consistente en mi experiencia.",
      description:
        "Procesos complejos, múltiples áreas, presión operativa y necesidad de mejora continua son contextos donde ya trabajé y donde hoy sigo aportando mejor.",
    },
    repeatableSignals: [
      {
        title: "Procesos completos",
        description:
          "Entiendo circuitos punta a punta y traduzco reglas operativas en soluciones técnicas que se pueden sostener.",
      },
      {
        title: "Comunicación transversal",
        description:
          "Trabajo de forma constante con finanzas, operación, sistemas y distintos usuarios finales, siempre buscando claridad y trazabilidad.",
      },
      {
        title: "Orden bajo presión",
        description:
          "Aprendí a coordinar múltiples objetivos, documentar, probar y sostener calidad incluso en contextos con alto volumen y exigencia.",
      },
    ],
    metrics: [
      {
        label: "Productividad",
        value: "de ~60 a más de 500 documentos por día",
      },
      {
        label: "Volumen del área",
        value: "más del 50 % gestionado en el período validado",
      },
      {
        label: "Importe total",
        value: "alrededor del 70 % del monto total del período",
      },
    ],
    aside: {
      eyebrow: "Lo que se repite",
      title: "Operación, automatización y criterio funcional en el mismo perfil.",
      description:
        "La combinación entre experiencia operativa y ejecución técnica explica por qué hoy puedo traducir procesos complejos en mejoras claras y sostenibles.",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Contacto directo para conversaciones profesionales concretas.",
    description:
      "Android junior, automatización de procesos, mejora operativa y roles técnico-funcionales son los espacios donde hoy puedo aportar más valor.",
    methodsSection: {
      eyebrow: "Vías directas",
      title: "Canales simples para conversaciones con contexto.",
      description:
        "Estas vías concentran la forma más directa de contactarme para oportunidades ligadas a Android, automatización, mejora de procesos o roles técnico-funcionales.",
      actionLabel: "Abrir",
    },
    methods: [
      {
        id: "email",
        label: "Email",
        value: emailAddress,
        href: emailHref,
        description: "La vía más simple para una conversación directa.",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        value: "matíasabelperalta",
        href: linkedInHref,
        description: "Perfil profesional y contexto laboral actualizado.",
      },
      {
        id: "github",
        label: "GitHub",
        value: "Zibete",
        href: githubHref,
        description: "Repos públicos con foco en Android y automatización.",
      },
    ],
    topicsSection: {
      eyebrow: "Áreas de aporte",
      title: "Espacios donde hoy puedo sumar más valor.",
      description:
        "Android junior, automatización, reporting operativo y circuitos técnico-funcionales son los contextos donde mejor se ve mi combinación entre criterio técnico y comprensión de procesos.",
    },
    topics: [
      "Roles de Android junior con base técnica moderna y repos públicos activos",
      "Automatización end-to-end y mejora de procesos con impacto operativo real",
      "Posiciones técnico-funcionales en operaciones, finanzas o circuitos SAP / P2P",
    ],
    aside: {
      eyebrow: "Base de trabajo",
      title: "Ubicación y foco actual",
      description:
        "Pilar, Buenos Aires, Argentina. Actualmente construyo productos propios mientras busco un próximo desafío donde combinar criterio operativo, ejecución técnica y mejora continua.",
    },
  },
  cv: {
    eyebrow: "CV",
    title: "Perfil técnico híbrido con foco en impacto operativo y base moderna.",
    description:
      "Android junior, automatización end-to-end y mejora de procesos sobre contextos reales de operación, datos y circuitos SAP / P2P.",
    downloadCtaLabel: "Descargar CV en PDF",
    snapshotSection: {
      eyebrow: "Snapshot",
      title: "Tres ejes para leer rápido el perfil.",
      description:
        "Base técnica moderna, automatización end-to-end y experiencia operativa real como síntesis del posicionamiento actual.",
    },
    snapshots: [
      {
        label: "Posicionamiento",
        value:
          "Perfil técnico híbrido con foco en Android, automatización end-to-end y mejora operativa.",
      },
      {
        label: "Foco actual",
        value:
          "Productos propios, repos públicos y consolidación de un perfil técnico más visible.",
      },
      {
        label: "Fortaleza diferencial",
        value:
          "Traducir procesos complejos en soluciones técnicas más claras, trazables y eficientes.",
      },
    ],
    summarySection: {
      eyebrow: "Resumen profesional",
      title: "Valor profesional en una lectura corta.",
      description:
        "Combino experiencia en automatización end-to-end, mejora de procesos y desarrollo Android con base moderna. Aporto criterio operativo, foco en mantenimiento y capacidad para traducir necesidades reales en soluciones claras y útiles.",
    },
    summary: [
      {
        title: "Dónde aporto hoy",
        description:
          "Desarrollo Android junior, automatización de procesos, reporting operativo, integraciones entre herramientas y roles técnico-funcionales sobre circuitos reales de negocio.",
      },
      {
        title: "Experiencia que lo respalda",
        description:
          "Con ZIBE como proyecto principal, un caso público de automatización aplicada a cuentas a pagar y experiencia concreta en entornos de alto volumen, múltiples áreas y foco constante en eficiencia operativa.",
      },
      {
        title: "Fortaleza diferencial",
        description:
          "Capacidad para traducir problemas operativos en soluciones técnicas con trazabilidad, validación y foco en productividad.",
      },
    ],
    aside: {
      eyebrow: "Accesos",
      title: "Accesos principales",
      description:
        "CV en PDF listo para compartir, junto con proyectos públicos y contacto directo como referencias principales del perfil.",
    },
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
} satisfies ProfileContent;
