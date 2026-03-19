# Plan — FEAT 019

## Estrategia

Resolver primero la consistencia estructural y el polish técnico-publicable, antes de abrir una nueva pasada de impacto visual.

La feature se concentra en tres capas:
1. correcciones visibles e inconsistencias concretas
2. fuente de verdad y orden de contenido
3. metadata y piezas base de producto público

## Estado inicial

- el repo ya tiene buena base visual y narrativa
- hay typos públicos menores ya identificados
- Home arrastra una excepción manual para el proyecto destacado
- el orden actual no está completamente explicitado desde el modelo
- la capa SEO/share todavía no está cerrada
- algunos docs base quedaron atrasados respecto del estado real del sitio

## Estado final esperado

- sin typos visibles conocidos en esta pasada
- Home consume el proyecto destacado sin overrides editoriales ad hoc
- proyectos ordenados por criterio explícito y estable
- experiencia evaluada y alineada si hace falta orden explícito
- metadata pública lista para compartir el sitio con mejor señal
- `sitemap`, `robots` y `not-found` disponibles
- docs fundacionales alineados con el producto real

## Enfoque

### Etapa 1 — Fixes públicos rápidos
- consolidar los dos fixes de copy ya detectados
- validar que no queden otros errores obvios del mismo tipo en rutas públicas tocadas por la feature

### Etapa 2 — Source of truth del proyecto destacado
- revisar cómo Home arma hoy el featured project
- eliminar overrides manuales de `summary`, `role`, `year`, `tags` u otros campos equivalentes
- dejar una única fuente de verdad para ese contenido
- mantener el resultado visual y narrativo dentro del mismo estándar actual

### Etapa 3 — Orden explícito de contenido
- definir el mecanismo más simple y mantenible para ordenar proyectos
- aplicar el criterio al listado y al featured flow sin romper el comportamiento actual
- revisar si experiencia necesita el mismo tratamiento o si el orden actual ya es suficiente
- evitar soluciones mágicas o demasiado abstractas

### Etapa 4 — Metadata y base pública
- revisar metadata global actual
- completar `metadataBase`
- completar `openGraph`
- completar `twitter`
- revisar íconos si la estructura actual lo necesita
- crear `sitemap.ts`
- crear `robots.ts`
- crear `not-found.tsx`

### Etapa 5 — Alineación de documentación
- revisar `README.md`
- revisar `docs/PROJECT_CONSTITUTION.md`
- sacar referencias de alcance que ya no representen el estado actual
- actualizar la feature 019 para que quede como source of truth de la iteración

## Principios

- diff mínimo
- una sola fuente de verdad por contenido
- cambios chicos pero de señal alta
- sin mezclar impacto visual mayor en esta iteración
- mantener el repo listo para una segunda pasada centrada en jerarquía visual