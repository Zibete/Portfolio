# Plan — Feature 005 Home vertical composition

## Estrategia

Tomar la Home actual y convertirla en una landing más orquestada, trabajando sobre composición, agrupación y secuencia, antes que sobre grandes cambios de contenido o tecnología.

La implementación debe priorizar:
1. narrativa
2. jerarquía
3. ritmo visual
4. mantenibilidad

## Fases

### Fase 1 — Auditoría del recorrido actual
- revisar el orden actual de los bloques
- detectar dónde el flujo se siente cortado o subóptimo
- identificar qué piezas necesitan agruparse mejor

### Fase 2 — Reorganización de la narrativa
- definir la secuencia vertical más efectiva
- ajustar orden, spacing y agrupación
- decidir si hace falta un bloque breve de credibilidad o apoyo

### Fase 3 — Integración y pulido
- ajustar Home para que se lea como una sola composición
- reforzar continuidad entre hero, marquee, proyecto y CTA
- evitar ruido o secciones redundantes

### Fase 4 — Validación
- correr lint/build
- revisar Home en dark/light
- validar que el resultado no degrade `/projects` ni `/projects/zibe`

## Archivos esperables a tocar

### Probables
- `src/app/page.tsx`
- `src/components/sections/home-hero.tsx`
- `src/components/sections/featured-project.tsx`
- `src/content/site/site-config.ts`

### Posibles, solo si hace falta
- `src/components/shared/container.tsx`
- `src/app/globals.css`

## Restricciones

- no abrir nuevas secciones grandes sin necesidad
- no cambiar arquitectura
- no tocar otras rutas salvo ajuste mínimo de coherencia visual
- no agregar librerías nuevas salvo necesidad mínima real
- no convertir esta feature en una reescritura general de la Home

## Resultado esperado

Al finalizar, la Home debe sentirse más terminada, más intencional y más útil para vender el perfil profesional desde un recorrido vertical moderno.