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
const linkedInHref = "https://www.linkedin.com/in/matiasabelperalta/";
const githubHref = "https://github.com/Zibete";

export const profileContent = {
  about: {
    eyebrow: "Sobre mí",
    title: "Perfil híbrido: desarrollo Android, automatización y mejora de procesos.",
    description:
      "Combino experiencia real en operación, cuentas a pagar y automatización con una base técnica visible en Android moderno. Mi diferencial está en convertir circuitos complejos en soluciones más claras, medibles y sostenibles.",
    journeySection: {
      eyebrow: "",
      title: "Cómo llegué hasta acá",
      description:
        "Mi recorrido profesional no empezó en desarrollo puro. Se formó en contextos donde había que sostener operación, entender procesos, coordinar con distintas áreas y resolver problemas concretos con impacto diario. Con el tiempo, esa experiencia se convirtió en una base muy valiosa para automatizar, ordenar flujos y construir soluciones más claras. Hoy la combino con una formación técnica más fuerte y con proyectos propios donde sigo profundizando desarrollo Android, arquitectura y producto.",
    },
    highlightSection: {
      eyebrow: "Diferencial",
      title: "Experiencia real aplicada a soluciones técnicas.",
      description:
        "No vengo solo de proyectos personales ni de una única disciplina. Mi recorrido cruza desarrollo, automatización, datos y operación, siempre con foco en problemas concretos, impacto real y decisiones que se puedan sostener.",
    },
    highlights: [
      {
        title: "Base Android moderna",
        description:
          "ZIBE muestra una base visible en Kotlin, Jetpack Compose, MVVM, Firebase, testing y evolución incremental de arquitectura en un repositorio público activo.",
      },
      {
        title: "Automatización de punta a punta",
        description:
          "Diseño flujos que integran sistemas, archivos, validaciones y salidas automáticas para reducir trabajo manual, ganar trazabilidad y mejorar productividad.",
      },
      {
        title: "Contexto operativo real",
        description:
          "La experiencia en operación, cuentas a pagar y trabajo entre áreas me lleva a priorizar soluciones que funcionen de verdad en el día a día.",
      },
    ],
    principlesSection: {
      eyebrow: "Cómo trabajo",
      title: "Cómo trabajo y cómo aporto valor en un equipo.",
      description:
        "Trabajo con alcance claro, implementación iterativa y foco en mantenimiento. Codeo, automatizo y uso agentes o modelos LLM cuando aceleran análisis, ejecución o revisión, manteniendo siempre el criterio técnico, la validación y la decisión final.",
    },
    principles: [
      "Código claro, comunicación efectiva y documentación útil para que el trabajo se entienda y se pueda sostener.",
      "Proceso spec-driven con iteraciones cortas, validación frecuente y uso de IA cuando aporta velocidad real sin sumar ruido.",
      "Diseño pensando en uso real: operación diaria, restricciones, errores posibles y mejora continua.",
    ],
    aside: {
      eyebrow: "Hoy",
      title: "Proyectos públicos y una base técnica cada vez más visible.",
      description:
        "Hoy estoy enfocado en consolidar un perfil técnico híbrido a través de proyectos públicos, aprendizaje aplicado y desarrollo con evidencia visible. Busco aportar en roles donde se valore tanto la implementación como la mejora real de procesos.",
      items: [
        {
          title: "Ubicación",
          description: "Pilar, Buenos Aires, Argentina",
        },
        {
          title: "Roles objetivo",
          description:
            "Android Jr, automatización y mejora de procesos, técnico-funcional en operaciones/finanzas",
        },
        {
          title: "Fortaleza transversal",
          description:
            "Empatía, escucha, documentación y vocación de enseñar",
        },
      ],
    },
  },
  skills: {
    eyebrow: "Habilidades",
    title: "Base técnica para construir producto, automatizar procesos y sostener soluciones reales.",
    description:
      "Mi perfil combina Android, automatización, datos y calidad de implementación. Más que herramientas aisladas, son capacidades que uso en conjunto para resolver problemas concretos con claridad, trazabilidad y foco en mantenimiento.",
    groupsSection: {
      eyebrow: "Capacidades principales",
      title: "Tecnologías y prácticas que hoy uso con más frecuencia.",
      description:
        "Estas son las áreas donde hoy tengo más tracción y donde mejor se ve la combinación entre base técnica moderna, automatización y criterio de implementación.",
    },
    groups: [
      {
        title: "Android y producto",
        description:
          "Base técnica moderna para construir, corregir y evolucionar apps con foco en mantenibilidad.",
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
        title: "Automatización e integración",
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
        title: "Datos, validaciones y control",
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
        title: "Calidad, testing y colaboración",
        description:
          "No separo implementación de calidad: pruebo, documento y busco que el cambio sea claro para quien lo mantiene después.",
        items: [
          "Pruebas manuales y funcionales",
          "Unit tests",
          "Instrumented tests",
          "GitHub Actions",
          "Documentación",
          "Normas y HSE",
          "Capacitación de ingresantes",
        ],
      },
    ],
    aside: {
      eyebrow: "Cómo las aplico",
      title: "La herramienta importa por el problema que ayuda a resolver.",
      description:
        "Cada tecnología aparece ligada a un resultado concreto: construir producto, automatizar tareas, mejorar controles y sostener procesos con más trazabilidad y productividad.",
      items: [
        {
          title: "Android",
          description: "Base moderna para productos propios y evolución incremental de aplicaciones.",
        },
        {
          title: "Automatización",
          description: "Integración de herramientas y flujos para reducir trabajo manual y ganar productividad.",
        },
        {
          title: "Datos y validaciones",
          description: "Soporte para decisiones más confiables, control de procesos y mejor trazabilidad.",
        },
      ],
    },
  },
  experience: {
    eyebrow: "Experiencia",
    title:
      "Experiencia real en operación, cuentas a pagar y automatización aplicada a procesos complejos.",
    description:
      "Mi recorrido profesional se formó en contextos de alta exigencia, con volumen, múltiples áreas involucradas y necesidad de trazabilidad. Esa experiencia es la que hoy me permite traducir circuitos operativos en soluciones más claras, medibles y sostenibles.",
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
    title:
      "Contacto directo para oportunidades en Android, automatización y mejora operativa.",
    description:
      "Si querés avanzar con una conversación, acá están mis canales principales, el CV en PDF y el contexto justo para evaluar fit.",
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
        "Dónde puedo aportar hoy, qué experiencia suma y qué diferencial aporto.",
    },
    summary: [
      {
        title: "Dónde puedo aportar hoy",
        description:
          "Android Jr/Mid, automatización de procesos y roles técnico-funcionales sobre operaciones, finanzas o circuitos SAP / P2P.",
      },
      {
        title: "Qué experiencia suma",
        description:
          "Experiencia operativa real, automatización end-to-end y productos propios con base Android moderna y repos públicos activos.",
      },
      {
        title: "Qué diferencial aporto",
        description:
          "Capacidad para traducir procesos complejos en soluciones claras, trazables y sostenibles, con foco en mantenimiento y mejora continua.",
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