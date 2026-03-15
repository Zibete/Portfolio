# Tasks — Feature 007 GitHub real data

## T1. Extender modelo de contenido
- actualizar `src/types/content.ts`
- agregar campos opcionales de GitHub al frontmatter de proyectos

## T2. Preparar entorno
- actualizar `.env.example`
- documentar `GITHUB_TOKEN` como opcional

## T3. Crear capa GitHub
- crear `src/lib/github/env.ts`
- crear `src/lib/github/types.ts`
- crear `src/lib/github/client.ts`
- crear `src/lib/github/mappers.ts`
- crear `src/lib/github/index.ts`

## T4. Implementar fetch server-only
- usar `fetch` nativo
- soportar token opcional
- manejar errores y rate limit devolviendo `null`

## T5. Conectar proyecto real
- actualizar `src/content/projects/zibe.mdx`
- declarar repo GitHub real de `ZIBE`

## T6. Enriquecer Home
- conectar `FeaturedProject` o la ruta Home con metadata viva
- mostrar un set breve de datos verificables

## T7. Enriquecer `/projects`
- sumar metadata viva a cards
- mantener jerarquía y diseño actuales

## T8. Enriquecer `/projects/[slug]`
- sumar bloque ampliado en detalle
- incluir repo/demo si existen

## T9. Validar fallbacks
- repo ausente
- token ausente
- repo inexistente
- respuesta nula de API

## T10. Validación final
- correr lint
- correr build
- revisar Home
- revisar `/projects`
- revisar `/projects/zibe`