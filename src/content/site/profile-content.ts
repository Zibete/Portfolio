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
        label: "PAE / AXION · Productividad histórica",
        value: "de ~60 a más de 500 documentos por día",
      },
      {
        label: "PAE / AXION · Volumen analizado",
        value: "más del 50 % de los documentos del área en el período validado",
      },
      {
        label: "PAE / AXION · Importe analizado",
        value: "alrededor del 70 % del monto total del período validado",
      },
    ],
    aside: {
      eyebrow: "Evidencia histórica",
      title: "Resultados de un caso de cuentas a pagar.",
      description:
        "Estas métricas corresponden exclusivamente a un período analizado en PAE / AXION. No representan resultados obtenidos en Cabify ni de proyectos actuales en desarrollo.",
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