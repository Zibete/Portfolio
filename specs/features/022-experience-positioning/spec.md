# Feature 022 — Experiencia profesional y automatización aplicada

## Objetivo

Actualizar la página Experiencia para reflejar el rol actual en Finanzas de Cabify (vía Michael Page), contextualizar los resultados históricos de PAE / AXION y preservar la etapa de supervisión operativa como antecedente complementario. Mostrar capacidad de resolver problemas reales mediante programación sin afirmar un cargo FDE o logros no verificados.

## Alcance

- Nueva entrada `src/content/experience/cabify-finance.mdx` publicada y en primer lugar.
- PAE / AXION en segundo lugar, con resumen más concreto y foco en automatización de AP.
- Supervisión operativa en tercer lugar, preservando su contenido.
- Reescritura de la sección `experience` de `profile-content.ts`: título, introducción, señales y contexto de métricas.
- Mostrar `period` si existe en la tarjeta de experiencia, utilizando el campo ya previsto en `ExperienceFrontmatter`.
- Mantener el diseño de cards, fuente MDX y orden explícito por frontmatter.

## Representación de hechos

- Rol actual: Analista de Finanzas SSR desde junio de 2026; actividad vinculada a Cabify a través de Michael Page.
- Alcance público: facturación, cobranzas, conciliación, controles y automatización de preparación y validación de datos para operaciones AR/UY.
- Automatizaciones actuales: desarrollo y validación por etapas, sin afirmar adopción total ni impacto cuantitativo sin evidencia.
- Métricas existentes: corresponden a un caso histórico de AP en PAE / AXION, nunca a Cabify.
- No se publica detalle de sistemas internos, identificadores de clientes, reglas fiscales propietarias, código privado, capturas, URLs, credenciales ni información sensible.

## Fuera de alcance

- Home, About, Skills, Contact, CV y SEO: iteraciones independientes.
- Finance Toolkit, ReportBridge y Apps Script como casos de proyecto: features posteriores.
- Inventar fechas de puestos históricos no verificadas, resultados de ahorro, seniority técnico o títulos FDE.
- Nuevas dependencias, rediseño, backend o cambios de navegación.

## Criterios de aceptación

1. Cabify aparece primero con fechas claras.
2. PAE / AXION y supervisión preservan su orden histórico y el enfoque funcional.
3. Las métricas históricas no se atribuyen a Cabify.
4. La visualización de fechas no requiere cambiar el modelo de datos.
5. La información de Cabify es genérica y apta para una primera revisión de divulgación pública.
6. La feature no altera rutas ni integra datos corporativos.
