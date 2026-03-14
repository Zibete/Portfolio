# Plan — Feature 003 Hero identity

## Estrategia

Resolver la identidad del hero con cambios puntuales y de alto impacto perceptual, sin tocar la arquitectura general ni abrir una capa de motion compleja.

La implementación debe priorizar:
1. claridad de marca personal
2. jerarquía visual
3. motion sutil
4. consistencia con el sistema actual

## Fases

### Fase 1 — Revisión del hero actual
- revisar la composición existente
- detectar qué parte ya funciona y qué parte necesita protagonismo
- ubicar el mejor punto para el badge y la animación principal

### Fase 2 — Refuerzo de identidad
- dar más presencia al nombre principal
- ajustar headline/subheadline si hace falta
- revisar CTAs y orden visual

### Fase 3 — Motion sutil
- agregar una animación de entrada simple y elegante
- priorizar una solución liviana, mantenible y compatible con el sistema actual
- evitar dependencias nuevas salvo necesidad mínima real

### Fase 4 — Pulido y validación
- revisar dark/light
- revisar legibilidad
- validar Home sin romper la continuidad con Featured Project

## Archivos esperables a tocar

### Probables
- `src/components/sections/home-hero.tsx`
- `src/content/site/site-config.ts`
- `src/app/page.tsx`

### Posibles, solo si hace falta
- `src/app/globals.css`
- `src/components/shared/container.tsx`
- `src/components/sections/featured-project.tsx`

## Restricciones

- no abrir la feature del marquee
- no rediseñar toda la Home
- no meter librerías nuevas salvo necesidad mínima real
- no mover el contenido real de ZIBE salvo ajuste menor de equilibrio visual
- no tocar otras rutas sin necesidad

## Resultado esperado

Al finalizar, la primera pantalla del portfolio debe sentirse más distintiva, más profesional y más recordable, dejando lista la base para incorporar luego el marquee/stack loop como feature separada.