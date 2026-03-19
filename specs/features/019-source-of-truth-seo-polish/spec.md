# FEAT 019 — Source of truth / SEO polish

## Objetivo

Cerrar una pasada de consistencia técnica y de producto público para dejar el portfolio más sólido, más mantenible y mejor preparado para compartirse.

La feature apunta a corregir inconsistencias visibles, eliminar excepciones de contenido que hoy rompen la fuente de verdad, ordenar mejor proyectos/experiencia y completar la capa mínima de metadata pública.

## Problema

El portfolio ya tiene una base visual y narrativa bastante madura, pero todavía arrastra algunos puntos que degradan la sensación de producto terminado:

- existen errores visibles de copy pequeños pero públicos
- Home mantiene una excepción de contenido sobre el proyecto destacado que rompe la fuente de verdad
- el orden de proyectos y experiencia depende de criterios demasiado implícitos
- la metadata pública para compartir el sitio todavía no está cerrada
- faltan piezas base de producto público como sitemap, robots y not-found
- parte de la documentación fundacional sigue reflejando una etapa anterior del sitio

## Resultado esperado

- sin errores visibles de copy en rutas públicas
- una sola fuente de verdad para el proyecto destacado
- orden explícito y mantenible en proyectos y, si aplica, experiencia
- metadata pública coherente para compartir el sitio
- páginas y archivos base de producto público listos
- documentación alineada con el estado real del portfolio

## Alcance

### Incluye
- fix de copy puntual ya detectado en Projects y footer
- eliminación de overrides editoriales/manuales en Home para el proyecto destacado
- unificación de source of truth del featured project
- incorporación de un criterio de orden explícito para proyectos
- evaluación y aplicación del mismo criterio a experiencia si el modelo actual lo necesita
- cierre de metadata pública (`metadataBase`, `openGraph`, `twitter` e íconos si corresponde)
- creación de `sitemap.ts`
- creación de `robots.ts`
- creación de `not-found.tsx`
- alineación de docs base con el estado real del producto
- dejar preparada la base para OG/social sharing aunque el asset final todavía pueda evolucionar

### No incluye
- rediseño visual mayor
- cambios grandes de layout
- nueva narrativa editorial transversal
- reescritura profunda de Home
- incorporación de backend o formularios
- nuevas secciones del sitio
- experimentación visual de alto impacto

## Criterios de producto

- mantener diff mínimo y alto impacto
- priorizar consistencia real sobre cambios cosméticos amplios
- no duplicar la fuente de verdad del contenido
- no introducir complejidad innecesaria para resolver orden o metadata
- reforzar sensación de portfolio “cerrado” y compartible

## Criterios técnicos

- conservar la arquitectura file-based actual
- evitar hardcodes duplicados entre Home y contenido de proyectos
- mantener compatibilidad con App Router
- no romper render, metadata ni rutas existentes
- dejar el resultado fácil de mantener para futuras iteraciones visuales