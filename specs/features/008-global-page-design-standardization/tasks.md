# Tasks — Feature 008 Global page design standardization

## T1. Auditar páginas internas
- revisar `about`, `contact`, `cv`, `experience`, `skills`, `/projects` y `/projects/[slug]`
- identificar desalineaciones visuales con Home
- detectar qué parte depende demasiado de `PagePlaceholder`

## T2. Definir piezas compartidas mínimas
- decidir si crear nuevos componentes o refinar los existentes
- unificar intro, section, aside y paneles
- mantener naming claro y fácil de reutilizar

## T3. Estandarizar superficies
- unificar radios
- unificar border/background/blur/shadow
- revisar spacing vertical y horizontal
- revisar consistencia tipográfica

## T4. Reaplicar motion sutil
- reutilizar `motion-enter`, `motion-reveal` y delays donde aporte valor
- evitar sobreanimar
- mantener reduced motion compatible con la base actual

## T5. Migrar rutas placeholder
- actualizar `about`
- actualizar `contact`
- actualizar `cv`
- actualizar `experience`
- actualizar `skills`

## T6. Alinear Projects
- revisar `/projects`
- revisar `/projects/[slug]`
- hacer solo los ajustes visuales mínimos necesarios para coherencia global

## T7. Revisar componente placeholder
- decidir si se refactoriza, se reduce o deja de usarse
- evitar dejar una pieza genérica redundante sin propósito claro

## T8. Validar consistencia global
- revisar navegación completa
- revisar continuidad entre Home y páginas internas
- revisar dark/light

## T9. Validar técnica
- correr lint
- correr build
- dejar checklist manual final