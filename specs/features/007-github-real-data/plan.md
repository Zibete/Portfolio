# Plan — Feature 007 GitHub real data

## Estrategia

Agregar una capa chica de enriquecimiento server-only que lea el repo declarado en frontmatter y consulte metadata pública de GitHub, manteniendo el contenido curado en MDX como capa principal.

La implementación debe priorizar:
1. resiliencia
2. bajo acoplamiento
3. claridad de contratos
4. diff mínimo en UI

## Fases

### Fase 1 — Extender el modelo
- agregar campos opcionales de GitHub al frontmatter de proyectos
- documentar `GITHUB_TOKEN` en `.env.example`
- conectar ZIBE con su repo real

### Fase 2 — Crear la capa server-only
- definir tipos internos mínimos
- crear cliente con `fetch` nativo a GitHub REST API
- mapear la respuesta a un contrato chico y estable
- devolver `null` ante errores o respuestas no válidas

### Fase 3 — Enriquecer la UI existente
- Home: metadata breve del proyecto principal
- `/projects`: resumen por card
- `/projects/[slug]`: bloque ampliado
- mantener fallback silencioso y sin placeholders ruidosos

### Fase 4 — Validación
- correr lint/build
- validar con token y sin token si es posible
- revisar que la UI no se rompa si no llega metadata

## Archivos esperables a tocar

### Probables
- `src/types/content.ts`
- `.env.example`
- `src/content/projects/zibe.mdx`
- `src/components/sections/featured-project.tsx`
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`

### Nuevos
- `src/lib/github/`
- `specs/features/007-github-real-data/`

## Restricciones

- no reemplazar MDX
- no usar cliente GitHub del lado browser
- no agregar dependencias nuevas si `fetch` nativo alcanza
- no rediseñar Home ni Projects
- no abrir una capa de cache compleja

## Resultado esperado

Al finalizar, el portfolio debe seguir siendo curado y file-based, pero con una señal adicional de realidad pública sobre los repositorios conectados.
