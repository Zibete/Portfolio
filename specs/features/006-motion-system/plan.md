# Plan — Feature 006 Motion system

## Estrategia

Construir una base de motion mínima y reutilizable, luego aplicar esa base a los bloques de Home más relevantes para validar el sistema sin expandir el alcance a todo el sitio.

La implementación debe priorizar:
1. consistencia
2. sutileza
3. mantenibilidad
4. performance

## Fases

### Fase 1 — Auditoría de motion actual
- revisar animaciones ya existentes
- detectar duplicaciones o diferencias de criterio
- identificar dónde conviene consolidar

### Fase 2 — Diseño del sistema base
- definir 2 o 3 patrones simples de motion
- establecer timings y comportamiento razonables
- contemplar reduced motion

### Fase 3 — Implementación reutilizable
- crear utilidades, clases o componentes mínimos
- aplicar el sistema a Home donde aporte más valor
- evitar soluciones pesadas o demasiado abstractas

### Fase 4 — Pulido y validación
- revisar continuidad visual
- revisar performance percibida
- correr lint/build
- validar dark/light y reduced motion

## Archivos esperables a tocar

### Probables
- `src/app/globals.css`
- `src/app/page.tsx`
- `src/components/sections/home-hero.tsx`
- `src/components/sections/stack-marquee.tsx`
- `src/components/sections/featured-project.tsx`

### Posibles, solo si hace falta
- `src/components/shared/`
- `src/lib/utils/`
- `src/content/site/site-config.ts`

## Restricciones

- no agregar dependencias nuevas salvo necesidad mínima real
- no abrir motion compleja
- no convertir esta feature en una reescritura de Home
- no tocar otras rutas salvo ajuste mínimo de coherencia
- no mezclar con nuevas features visuales

## Resultado esperado

Al finalizar, el portfolio debe tener una base de motion más coherente y reutilizable, suficiente para sostener futuras iteraciones sin caer en animaciones inconsistentes o improvisadas.