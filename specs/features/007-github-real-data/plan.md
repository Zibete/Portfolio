# Plan — Feature 007 GitHub real data

## Estrategia

Implementar la feature en dos capas:

1. **Capa de integración**
   - crear una capa server-only para consultar GitHub
   - normalizar la respuesta a un contrato interno chico
   - asegurar fallback limpio ante repo ausente, token ausente o error remoto

2. **Capa de presentación**
   - enriquecer Home, `/projects` y `/projects/[slug]`
   - mantener MDX como fuente principal de narrativa
   - sumar señales vivas sin rediseñar la UI base

## Enfoque de implementación

### Fase 1 — Modelado y configuración
- extender `ProjectFrontmatter` con campos opcionales para GitHub
- agregar variable de entorno para token
- definir tipos internos de la capa GitHub

### Fase 2 — Integración server-only
- crear cliente para GitHub REST API
- agregar parsing y normalización de respuesta
- devolver `null` en fallas controladas

### Fase 3 — Enriquecimiento de contenido
- conectar los proyectos MDX con su repo GitHub
- sumar metadata viva al proyecto destacado en Home
- sumar metadata viva a `/projects`
- sumar metadata viva al detalle `/projects/[slug]`

### Fase 4 — Validación
- validar render sin token
- validar render con repo inexistente
- validar que no se rompa ninguna ruta existente
- correr lint y build

## Restricciones

- no reemplazar MDX como fuente curada
- no agregar scraping
- no importar todos los repos automáticamente
- no abrir una iniciativa visual grande
- no agregar dependencias si `fetch` nativo resuelve la necesidad

## Resultado esperado

Al cerrar esta feature, el portfolio debe seguir siendo file-based y curado, pero con una capa de datos reales de GitHub que aporte credibilidad y actualización en Home, listado y detalle de proyectos.