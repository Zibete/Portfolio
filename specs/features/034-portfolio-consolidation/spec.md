# Feature 034 — Consolidación del portfolio

## Objetivo
Reordenar la evidencia de ingeniería para que el caso más relevante sea accesible de inmediato, conservar Engineering Trace como profundidad opcional, eliminar recursos sin consumidores y asegurar que cada afirmación enlazada corresponda a un artefacto público real.

## Decisiones
1. Incorporar a master mediante squash el PR #31 previamente validado en Vercel, conservando responsive, gestión de frames y foco.
2. Orden Home: Hero → Migrar SAP (evidencia principal) → Engineering Trace → ZIBE (evidencia complementaria) → contacto.
3. Reducir el recorrido desktop de 520svh a 340svh, mantener cinco etapas y fallback de tarjetas accesibles.
4. Separar el render de evidencia complementaria en componente servidor y los datos compartidos en `projectEvidence`.
5. Eliminar `src/lib/supabase/`, dependencia y entradas exclusivas de `package-lock.json`; no hay consumidores en el producto actual.
6. Consultar la API GitHub en FeaturedProject solo cuando se muestran realmente sus métricas.
7. Sustituir `ai-review.md` por el PR #29 real; indicar explícitamente que el PR prueba cambios de código y build, no conversaciones con modelos.
8. Identificar el repositorio de origen de cada etapa; no representar artefactos de varios proyectos como un único flujo productivo.

## Fuera de alcance
- Repositorios externos Migrar SAP y ZIBE: no se modifican.
- Código, endpoints, credenciales o documentos internos de Finance Toolkit y ReportBridge.
- CV vigente, fotos, rutas, contenido de casos MDX y refactorización global.
- Frameworks, dependencias o servicios nuevos.
- Eliminación automática de archivos históricos, como PDFs enlazados desde URLs antiguas.

## Aceptación
- El caso principal aparece antes del scroll interactivo.
- Hay solo fuentes públicas reales en Engineering Trace, y la etapa AI-assisted reconoce el límite de evidencia.
- Las fuentes de ZIBE permanecen enlazadas como prueba complementaria.
- No hay imports ni dependencias de Supabase en la aplicación actual.
- El HEAD de master construye correctamente en Vercel y su estado GitHub es SUCCESS.
