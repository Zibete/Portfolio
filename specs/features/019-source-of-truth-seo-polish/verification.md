# Verification - FEAT 019

## Source of truth

- [x] Home ya no overridea manualmente el contenido del featured project
- [x] summary / role / year / tags salen de una sola fuente de verdad
- [x] el proyecto destacado mantiene coherencia con su contenido real
- [x] el resultado final no depende de duplicacion editorial entre Home y el contenido del proyecto

## Orden

- [x] proyectos se ordenan mediante `order`
- [x] el orden ya no depende solo de heuristicas implicitas
- [x] featured project y listado general no entran en conflicto
- [x] experiencia fue revisada y tambien usa `order`

## Metadata publica

- [x] metadata global incluye `metadataBase`
- [x] `openGraph` esta presente y consistente
- [x] `twitter` esta presente y consistente
- [x] el detalle de proyecto agrega canonical e imagen de preview
- [x] la metadata no rompe el build

## Base publica

- [x] existe `sitemap.ts`
- [x] existe `robots.ts`
- [x] existe `not-found.tsx`
- [x] las nuevas piezas respetan la arquitectura file-based

## Documentacion

- [x] `README.md` refleja el estado real actual
- [x] `docs/PROJECT_CONSTITUTION.md` quedo alineado con el producto real
- [x] `spec.md`, `plan.md`, `tasks.md` y `verification.md` reflejan el alcance final real

## Validacion tecnica y manual

- [x] revisar Home
- [x] revisar Projects
- [x] revisar Experience
- [x] ejecutar lint
- [x] ejecutar build

## Fuera de alcance confirmado

- [x] sin rediseño visual mayor
- [x] sin nuevas secciones
- [x] sin cambios profundos de narrativa transversal
- [x] sin backend ni contact form
- [x] sin assets OG o iconos nuevos
