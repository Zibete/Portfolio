# Plan — Feature 012 Home card language unification

## Estrategia

Unificar la experiencia visual de Home tomando como estándar la card principal del hero y sus cards laterales, sin tocar otras rutas ni abrir cambios globales innecesarios.

La feature se concentra en tres zonas:
1. bloque principal de Home
2. cards secundarias e internas
3. sección de credibilidad

## Fases

### Fase 1 — Surface principal
- convertir el bloque principal en una card real
- alinear padding, borde, radio y profundidad con el hero
- mantener copy y estructura general

### Fase 2 — Sistema visual de cards
- revisar consistencia entre hero, bloque principal y surfaces relevantes de Home
- unificar jerarquía visual
- evitar mezclar dos lenguajes de card en la misma página

### Fase 3 — Hover / elevación
- hacer que todas las cards de Home eleven al hover
- incluir subcards y cards de credibilidad
- mantener el hover sobrio y premium

### Fase 4 — Validación
- revisar desktop
- revisar mobile/tablet
- validar dark/light
- correr lint/build

## Restricciones

- no tocar otras páginas
- no tocar header
- no agregar dependencias nuevas
- no rediseñar contenido
- no abrir una refactorización global del sistema de cards
- no romper marquee ni motion existente

## Resultado esperado

Home debe verse más coherente, uniforme y premium, con un sistema de cards consistente y una elevación clara al hover en toda la página.