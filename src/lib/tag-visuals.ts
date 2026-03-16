import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Braces,
  Building2,
  ChartColumn,
  Database,
  FileSpreadsheet,
  FileText,
  Flame,
  GitBranch,
  Layers3,
  PanelsTopLeft,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Wind,
  Workflow,
  Wrench,
} from "lucide-react";

interface TagVisual {
  icon: LucideIcon;
  accentClassName: string;
}

const accentClassNames = {
  indigo:
    "bg-indigo-500/12 text-indigo-700 dark:bg-indigo-400/14 dark:text-indigo-200",
  sky: "bg-sky-500/12 text-sky-700 dark:bg-sky-400/14 dark:text-sky-200",
  amber:
    "bg-amber-500/14 text-amber-700 dark:bg-amber-400/14 dark:text-amber-200",
  emerald:
    "bg-emerald-500/12 text-emerald-700 dark:bg-emerald-400/14 dark:text-emerald-200",
  lime: "bg-lime-500/12 text-lime-700 dark:bg-lime-400/14 dark:text-lime-200",
  green:
    "bg-green-500/12 text-green-700 dark:bg-green-400/14 dark:text-green-200",
  cyan: "bg-cyan-500/12 text-cyan-700 dark:bg-cyan-400/14 dark:text-cyan-200",
  slate:
    "bg-slate-500/12 text-slate-700 dark:bg-slate-300/16 dark:text-slate-100",
  blue: "bg-blue-500/12 text-blue-700 dark:bg-blue-400/14 dark:text-blue-200",
  teal: "bg-teal-500/12 text-teal-700 dark:bg-teal-400/14 dark:text-teal-200",
  rose: "bg-rose-500/12 text-rose-700 dark:bg-rose-400/14 dark:text-rose-200",
  neutral:
    "bg-zinc-500/10 text-zinc-700 dark:bg-zinc-300/14 dark:text-zinc-200",
} as const;

const exactTagVisuals: Record<string, TagVisual> = {
  kotlin: {
    icon: Braces,
    accentClassName: accentClassNames.indigo,
  },
  "jetpack compose": {
    icon: Layers3,
    accentClassName: accentClassNames.sky,
  },
  compose: {
    icon: Layers3,
    accentClassName: accentClassNames.sky,
  },
  "material 3": {
    icon: Layers3,
    accentClassName: accentClassNames.blue,
  },
  mvvm: {
    icon: PanelsTopLeft,
    accentClassName: accentClassNames.blue,
  },
  firebase: {
    icon: Flame,
    accentClassName: accentClassNames.amber,
  },
  hilt: {
    icon: Wrench,
    accentClassName: accentClassNames.indigo,
  },
  android: {
    icon: Smartphone,
    accentClassName: accentClassNames.indigo,
  },
  arquitectura: {
    icon: PanelsTopLeft,
    accentClassName: accentClassNames.slate,
  },
  python: {
    icon: Bot,
    accentClassName: accentClassNames.emerald,
  },
  vba: {
    icon: FileSpreadsheet,
    accentClassName: accentClassNames.lime,
  },
  excel: {
    icon: FileSpreadsheet,
    accentClassName: accentClassNames.green,
  },
  "power query": {
    icon: Database,
    accentClassName: accentClassNames.teal,
  },
  "sap fi": {
    icon: Building2,
    accentClassName: accentClassNames.cyan,
  },
  "sap gui scripting": {
    icon: Building2,
    accentClassName: accentClassNames.cyan,
  },
  sap: {
    icon: Building2,
    accentClassName: accentClassNames.cyan,
  },
  "sap / p2p": {
    icon: Building2,
    accentClassName: accentClassNames.cyan,
  },
  "cuentas a pagar": {
    icon: Building2,
    accentClassName: accentClassNames.cyan,
  },
  "next.js": {
    icon: PanelsTopLeft,
    accentClassName: accentClassNames.slate,
  },
  typescript: {
    icon: Braces,
    accentClassName: accentClassNames.blue,
  },
  "tailwind css": {
    icon: Wind,
    accentClassName: accentClassNames.teal,
  },
  selenium: {
    icon: Workflow,
    accentClassName: accentClassNames.teal,
  },
  "git / github": {
    icon: GitBranch,
    accentClassName: accentClassNames.slate,
  },
  "github actions": {
    icon: ShieldCheck,
    accentClassName: accentClassNames.slate,
  },
  automatizacion: {
    icon: Workflow,
    accentClassName: accentClassNames.emerald,
  },
  datos: {
    icon: Database,
    accentClassName: accentClassNames.teal,
  },
  testing: {
    icon: ShieldCheck,
    accentClassName: accentClassNames.rose,
  },
  "reporting automatizado": {
    icon: ChartColumn,
    accentClassName: accentClassNames.green,
  },
  "etl liviano": {
    icon: Database,
    accentClassName: accentClassNames.teal,
  },
  kpis: {
    icon: ChartColumn,
    accentClassName: accentClassNames.green,
  },
  conciliaciones: {
    icon: Database,
    accentClassName: accentClassNames.green,
  },
  "calidad de datos": {
    icon: Database,
    accentClassName: accentClassNames.teal,
  },
  "sql basico practico": {
    icon: Database,
    accentClassName: accentClassNames.blue,
  },
  "pruebas manuales y funcionales": {
    icon: ShieldCheck,
    accentClassName: accentClassNames.rose,
  },
  "unit tests": {
    icon: ShieldCheck,
    accentClassName: accentClassNames.rose,
  },
  "instrumented tests": {
    icon: ShieldCheck,
    accentClassName: accentClassNames.rose,
  },
  documentacion: {
    icon: FileText,
    accentClassName: accentClassNames.slate,
  },
  "capacitacion de ingresantes": {
    icon: Users,
    accentClassName: accentClassNames.slate,
  },
  liderazgo: {
    icon: Users,
    accentClassName: accentClassNames.neutral,
  },
  "coordinacion simultanea": {
    icon: Users,
    accentClassName: accentClassNames.neutral,
  },
  "normas y hse": {
    icon: ShieldCheck,
    accentClassName: accentClassNames.neutral,
  },
  "comunicacion transversal": {
    icon: Users,
    accentClassName: accentClassNames.neutral,
  },
  "testing y documentacion": {
    icon: ShieldCheck,
    accentClassName: accentClassNames.rose,
  },
  "productividad operativa": {
    icon: Workflow,
    accentClassName: accentClassNames.emerald,
  },
  github: {
    icon: GitBranch,
    accentClassName: accentClassNames.slate,
  },
  "github vivo": {
    icon: GitBranch,
    accentClassName: accentClassNames.slate,
  },
};

const fallbackTagVisual: TagVisual = {
  icon: Sparkles,
  accentClassName: accentClassNames.neutral,
};

function normalizeTagLabel(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function resolveTagVisual(label: string): TagVisual {
  const normalizedLabel = normalizeTagLabel(label);
  const exactVisual = exactTagVisuals[normalizedLabel];

  if (exactVisual) {
    return exactVisual;
  }

  if (
    normalizedLabel.includes("star") ||
    normalizedLabel.includes("fork") ||
    normalizedLabel.includes("push") ||
    normalizedLabel.includes("github")
  ) {
    return {
      icon: GitBranch,
      accentClassName: accentClassNames.slate,
    };
  }

  if (
    normalizedLabel.includes("android") ||
    normalizedLabel.includes("compose") ||
    normalizedLabel.includes("material")
  ) {
    return {
      icon: Smartphone,
      accentClassName: accentClassNames.indigo,
    };
  }

  if (
    normalizedLabel.includes("automation") ||
    normalizedLabel.includes("automatiz") ||
    normalizedLabel.includes("scheduler") ||
    normalizedLabel.includes("workflow")
  ) {
    return {
      icon: Workflow,
      accentClassName: accentClassNames.emerald,
    };
  }

  if (
    normalizedLabel.includes("test") ||
    normalizedLabel.includes("ci") ||
    normalizedLabel.includes("quality")
  ) {
    return {
      icon: ShieldCheck,
      accentClassName: accentClassNames.rose,
    };
  }

  if (
    normalizedLabel.includes("data") ||
    normalizedLabel.includes("dato") ||
    normalizedLabel.includes("report") ||
    normalizedLabel.includes("etl") ||
    normalizedLabel.includes("sql") ||
    normalizedLabel.includes("excel")
  ) {
    return {
      icon: Database,
      accentClassName: accentClassNames.teal,
    };
  }

  if (
    normalizedLabel.includes("sap") ||
    normalizedLabel.includes("p2p") ||
    normalizedLabel.includes("payable")
  ) {
    return {
      icon: Building2,
      accentClassName: accentClassNames.cyan,
    };
  }

  if (
    normalizedLabel.includes("doc") ||
    normalizedLabel.includes("arquitect") ||
    normalizedLabel.includes("mvvm")
  ) {
    return {
      icon: PanelsTopLeft,
      accentClassName: accentClassNames.slate,
    };
  }

  if (
    normalizedLabel.includes("lead") ||
    normalizedLabel.includes("coord") ||
    normalizedLabel.includes("comunic") ||
    normalizedLabel.includes("capacit")
  ) {
    return {
      icon: Users,
      accentClassName: accentClassNames.neutral,
    };
  }

  return fallbackTagVisual;
}
