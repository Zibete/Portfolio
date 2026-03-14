# Plan — Feature 004 Stack marquee

## Estrategia

Agregar una capa de movimiento horizontal simple, estable y mantenible, apoyada en CSS y contenido centralizado, sin convertir la Home en un experimento visual.

La implementación debe priorizar:
1. claridad
2. ritmo visual
3. performance
4. coherencia con el sistema actual

## Fases

### Fase 1 — Definición del contenido
- definir la lista de stacks/credenciales a mostrar
- centralizar ese contenido en una fuente editable si es posible
- revisar cantidad y longitud para que el loop funcione bien

### Fase 2 — Construcción del marquee
- implementar el componente del loop horizontal
- usar una solución simple y mantenible
- garantizar continuidad visual sin depender de librerías pesadas

### Fase 3 — Integración en Home
- ubicar el componente debajo del hero en una posición coherente
- ajustar spacing con el bloque siguiente
- revisar que no rompa la verticalidad de la landing

### Fase 4 — Pulido y validación
- revisar velocidad, densidad y legibilidad
- revisar dark/light
- correr lint/build
- validar Home manualmente

## Archivos esperables a tocar

### Probables
- `src/app/page.tsx`
- `src/content/site/site-config.ts`
- `src/components/sections/home-hero.tsx`

### Nuevos o probables
- `src/components/sections/stack-marquee.tsx`

### Posibles, solo si hace falta
- `src/app/globals.css`

## Restricciones

- no agregar dependencias pesadas
- no implementar un carrusel interactivo
- no usar una solución excesivamente compleja para motion
- no abrir nuevas secciones fuera del alcance
- no tocar otras rutas sin necesidad

## Resultado esperado

Al finalizar, la Home debe ganar una franja visual moderna y útil, capaz de reforzar el perfil técnico híbrido del portfolio sin romper simplicidad ni mantenibilidad.