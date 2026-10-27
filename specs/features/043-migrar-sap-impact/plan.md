# Migrar SAP impact and home heading icons Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unificar las métricas de Migrar SAP y reforzar la identificación visual de las secciones principales del Home.

**Architecture:** Mantener el layout actual del Home y sustituir únicamente su bloque secundario; datos estáticos tipados consumidos por varias vistas y el MDX existente. Icons de `lucide-react` ya instalado.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, MDX, `node:test`.

**Spec:** `specs/features/043-migrar-sap-impact/spec.md`

## Global Constraints

- `master`, commits pequeños, no tocar repos externos ni incorporar dependencias.
- Distinguir los resultados observados de los estimados y de las pruebas públicas.
- `54,6 %` = 3.932 de 7.198 documentos mensuales; 57 proveedores.
- Estimación `150 s → 21 s` por comprobante comparable = aproximadamente 86 % menos tiempo.
- Preservar 3D, responsive, modo reducido, fuentes y enlaces.

## Review Focus

- En móvil, las dos tarjetas del Home no deben comprimir valores ni causar overflow.
- Los recuadros deben declarar su naturaleza observada o estimada sin ambigüedad.
- `/projects` y `/experience` deben evitar interpretar 54,6 % como porcentaje automatizado.
- El MDX del detalle y el SEO deben ser compatibles con el build estático sin leer un README remoto en runtime.
- Los encabezados con íconos deben conservar alineación, accesibilidad y escala del Android.

---

### Task 1: Consistencia de íconos

**Files:** `src/components/sections/featured-project.tsx`, `src/components/sections/engineering-trace.tsx`, `tests/home-content.test.mjs`.

**Interfaces:** `MonitorCog` y `Workflow` de `lucide-react`, usados como elementos decorativos `aria-hidden` con `size-6 shrink-0 text-signal`.

- [ ] Test RED para ambos iconos en las cabeceras.
- [ ] Run `node --test tests/home-content.test.mjs`; Expected: failure for icons.
- [ ] Implementar iconos con el patrón existente de Android.
- [ ] Run `node --test tests/home-content.test.mjs`; Expected: pass.
- [ ] Commit `style(home): identificar automatizacion y engineering trace`.

### Task 2: Modelo y tarjetas de impacto

**Files:** `src/content/site/migrar-sap-impact.ts`, `src/components/sections/featured-project.tsx`, `src/content/site/site-config.ts`, `src/types/site.ts`, `tests/migrar-sap-impact.test.mjs`.

**Interfaces:** `migrarSapImpact.observed`, `.estimated`, `.sourceUrl`; el componente usa sus etiquetas y valores, no porcentajes calculados ad hoc.

- [ ] Test RED de valores, límites y dos tarjetas en lugar de tres.
- [ ] Run `node --test tests/migrar-sap-impact.test.mjs`; Expected: failure for missing model.
- [ ] Crear modelo y dos tarjetas con barra de referencia, sin contadores ni animaciones extra.
- [ ] Run `node --test tests/migrar-sap-impact.test.mjs`; Expected: pass.
- [ ] Commit `feat(home): mostrar alcance y eficiencia de migrar sap`.

### Task 3: Narrativa transversal

**Files:** `src/app/projects/page.tsx`, `src/content/projects/migrar-sap-portfolio.mdx`, `src/content/site/profile-content.ts`, `src/content/site/site-config.ts`, `src/content/experience/pan-american-energy-axion-ap.mdx`, `tests/migrar-sap-impact.test.mjs`.

**Interfaces:** Vista de proyectos y contenido de experiencia importan `migrarSapImpact`; el MDX usa valores importados y frontmatter SEO sin números obsoletos.

- [ ] Test RED de coherencia de superficies, fuentes, estimación y ausencia de claims históricos obsoletos.
- [ ] Run `node --test tests/migrar-sap-impact.test.mjs`; Expected: failure for old copy.
- [ ] Aplicar ajustes editoriales mínimos al listado, caso completo, experiencia y límite de evidencia.
- [ ] Run `node --test tests/migrar-sap-impact.test.mjs`; Expected: pass.
- [ ] Commit `content(migrar-sap): unificar metricas y atribucion`.

### Task 4: Verificación y publicación

**Files:** `specs/features/043-migrar-sap-impact/tasks.md`, `specs/features/043-migrar-sap-impact/verification.md`.

- [ ] Run `node --test tests/*.test.mjs`; Expected: all pass.
- [ ] Run `npm run lint`; Expected: exit 0.
- [ ] Run `npm run build`; Expected: exit 0.
- [ ] Run `git diff --check`; Expected: exit 0.
- [ ] Inspeccionar vistas y responsive si el navegador está disponible; registrar límites si no.
- [ ] Revisar diff y publicar commits directamente sobre `master` sin sobrescribir avances ajenos; comprobar estado CI remoto.
