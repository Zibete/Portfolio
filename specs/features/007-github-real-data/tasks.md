# Tasks — Feature 007 GitHub real data

## T1. Extender contratos de contenido
- agregar campos opcionales de GitHub al frontmatter de proyectos
- actualizar `.env.example`
- conectar ZIBE con su repo real

## T2. Implementar cliente server-only
- crear `env.ts`
- crear `types.ts`
- crear `client.ts`
- crear `mappers.ts`
- exportar desde `index.ts`

## T3. Integrar metadata viva en Home
- enriquecer el featured project
- mantener la UI breve y escaneable

## T4. Integrar metadata viva en `/projects`
- agregar resumen breve por card
- evitar sobrecargar el layout actual

## T5. Integrar metadata viva en `/projects/[slug]`
- agregar bloque ampliado con más detalle
- usar links de repo/demo solo si aportan valor real

## T6. Validar tolerancia a fallos
- sin token
- repo faltante
- respuesta fallida de GitHub

## T7. Validar técnica
- correr lint
- correr build
- dejar checklist manual breve
