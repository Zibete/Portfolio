// Datos editoriales del caso Migrar SAP, referidos a un corte histórico de PAE / AXION.
// El alcance observado no representa porcentaje de automatización ni benchmark público.
export const migrarSapImpact = {
  sourceUrl: "https://github.com/Zibete/Zibete/blob/main/README.md",
  observed: {
    label: "Alcance observado · SAP FI",
    period: "PAE / AXION · corte mensual",
    share: "54,6 %",
    shareValue: 54.6,
    invoices: "3.932",
    totalInvoices: "7.198",
    suppliers: "57",
    shareDescription: "del volumen mensual de la unidad",
    boundary: "El alcance observado no indica el porcentaje automatizado ni un límite de capacidad.",
  },
  estimated: {
    label: "Eficiencia estimada",
    reduction: "≈86 %",
    before: "150 s",
    after: "21 s",
    unit: "por comprobante comparable",
    boundary: "Estimación de tiempo por caso comparable; no es un benchmark de las pruebas públicas.",
  },
} as const;
