# Plan — Feature 002 Home visual language

## Estrategia

Resolver primero el problema de base visual y después elevar la Home con mejoras de composición de bajo riesgo.

La implementación debe priorizar:
1. limpieza visual
2. coherencia del sistema
3. legibilidad
4. preparación del terreno para futuras features

## Fases

### Fase 1 — Diagnóstico y simplificación del fondo
- revisar cómo se compone el fondo actual
- identificar duplicaciones entre layout, shell y estilos globales
- simplificar el tratamiento visual para reducir interferencias en light mode

### Fase 2 — Refinamiento de composición
- mejorar spacing vertical
- revisar jerarquía de títulos, subtítulos y bloques
- ajustar contenedores y superficies si aporta claridad

### Fase 3 — Pulido visual
- revisar contraste
- revisar equilibrio entre textura visual y legibilidad
- validar que dark-first siga siendo el modo principal

### Fase 4 — Validación
- correr lint y build
- revisar Home en dark/light
- verificar que Projects y ZIBE no sufran degradaciones visuales obvias

## Archivos esperables a tocar

### Probables
- `src/app/globals.css`
- `src/app/page.tsx`
- `src/components/layout/site-shell.tsx`
- `src/components/sections/home-hero.tsx`

### Posibles, solo si hace falta
- `src/components/shared/container.tsx`
- `src/content/site/site-config.ts`

## Restricciones

- no crear una feature visual gigante
- no mezclar con animaciones complejas
- no cambiar el contenido real de ZIBE salvo ajuste mínimo de presentación
- no tocar otras rutas sin necesidad
- no agregar librerías nuevas salvo necesidad mínima real

## Resultado esperado

Al finalizar, la Home debe sentirse más sólida, moderna y coherente, con un fondo limpio en light mode y una base visual suficientemente buena para encarar luego la identidad del hero y el marquee.