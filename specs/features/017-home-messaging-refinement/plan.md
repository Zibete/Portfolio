# Plan - Feature 017 Home messaging refinement

## Estrategia

Cerrar el refinamiento editorial de Home en iteraciones pequeñas, apoyándose en la capa de contenido existente y preservando la estructura visual ya consolidada.

La secuencia real de trabajo quedó resuelta en seis frentes:

1. hero y disponibilidad
2. mini cards del hero
3. bloque post-hero
4. bloque de credibilidad
5. cierre/CTA
6. featured project de ZIBE

## Fases implementadas

### Fase 1 - Hero
- ajustar badge, eyebrow, headline y descripción
- invertir prioridad de CTAs para llevar la acción principal a `Projects`
- mantener descarga de CV como acción secundaria

### Fase 2 - Mini cards
- reemplazar el contenido de apoyo por señales más concretas
- priorizar impacto operativo, perfil y prueba técnica

### Fase 3 - Soporte post-hero
- reescribir el bloque de experiencia aplicada
- eliminar wording sobre la estructura del portfolio
- reforzar el vínculo entre experiencia real y soluciones técnicas

### Fase 4 - Cómo trabajo
- reconvertir el bloque de credibilidad
- pasar de claims genéricos a principios concretos de trabajo

### Fase 5 - Cierre
- simplificar el CTA final
- resolver tres acciones claras sin rediseñar el aside
- mantener consistencia con la narrativa de Home

### Fase 6 - Featured project
- afinar el bloque de ZIBE para venderlo rápido como proyecto Android destacado
- eliminar meta discurso
- reforzar rol, período y foco técnico con texto más específico y escaneable

## Archivos alcanzados por la feature

- `src/content/site/site-config.ts`
- `src/components/sections/home-hero.tsx`
- `src/types/site.ts`
- `src/app/page.tsx`

## Restricciones respetadas

- sin rediseño estructural de Home
- sin tocar otras páginas
- sin tocar MDX de proyectos
- sin abrir nuevas features
- sin dependencias nuevas

## Resultado esperado

Home debe quedar más clara, más directa y más útil para derivar a evidencia real del perfil, sin sacrificar el sistema visual ni convertir el recorrido en storytelling abstracto.
