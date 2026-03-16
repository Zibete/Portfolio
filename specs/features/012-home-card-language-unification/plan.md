# Plan - Feature 012 Home card language unification

## Estrategia

Unificar la experiencia visual de Home tomando como estandar la card principal del hero y sus cards laterales, sin tocar otras rutas ni abrir cambios globales innecesarios. El hero inicial tambien debe compactarse para que el primer fold se sienta como una sola pieza fuerte y conectada con la marquee.

La feature se concentra en cinco zonas:
1. shell del hero inicial
2. mini cards integradas del hero
3. bloque principal de Home
4. seccion de credibilidad
5. CTA lateral de CV si entra de forma natural

## Fases

### Fase 1 - Hero y fold inicial
- reducir aire vertical arriba y abajo del hero
- integrar mini cards dentro de la misma surface principal
- acercar marquee y hero sin romper motion ni responsive

### Fase 2 - Surface principal
- convertir el bloque principal en una card real
- alinear padding, borde, radio y profundidad con el hero
- mantener copy y estructura general

### Fase 3 - Sistema visual de cards
- revisar consistencia entre hero, bloque principal, credibilidad y CTA lateral
- unificar jerarquia visual
- evitar mezclar dos lenguajes de card en la misma pagina

### Fase 4 - Hover / elevacion
- hacer que todas las cards de Home eleven al hover
- incluir subcards, laterales y cards del featured project dentro de Home
- mantener el hover sobrio y premium

### Fase 5 - Validacion
- revisar desktop
- revisar mobile/tablet
- validar dark/light
- correr lint/build

## Restricciones

- no tocar otras paginas
- no tocar header
- no agregar dependencias nuevas
- no redisenar contenido
- no abrir una refactorizacion global del sistema de cards
- no romper marquee ni motion existente
- si hay CSS global, debe quedar acotado a Home o sin impacto visible fuera de Home

## Resultado esperado

Home debe verse mas coherente, uniforme y premium, con un sistema de cards consistente y una elevacion clara al hover en toda la pagina.
