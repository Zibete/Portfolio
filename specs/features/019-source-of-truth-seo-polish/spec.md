# FEAT 019 - Source of truth / SEO polish

## Objetivo

Cerrar una pasada de consistencia tecnica y de producto publico para dejar el portfolio mas mantenible y mejor preparado para compartirse.

## Problema

Antes de esta iteracion quedaban cuatro huecos concretos:

- Home dependia de overrides editoriales manuales para el proyecto destacado.
- El orden de proyectos y experiencia no estaba definido desde el modelo de contenido.
- La metadata publica base no estaba cerrada.
- Faltaban piezas file-based publicas como `sitemap.ts`, `robots.ts` y `not-found.tsx`.

## Resultado implementado

- Home consume el proyecto destacado directamente desde MDX, sin overrides manuales.
- Proyectos y experiencia usan un `order` explicito en frontmatter.
- La metadata global ahora define `metadataBase`, `openGraph` y `twitter`.
- El detalle de proyecto agrega metadata propia con canonical y preview image.
- El sitio expone `sitemap.xml`, `robots.txt` y una pagina `not-found`.
- README, constitucion y la documentacion de contenido quedaron alineados con el estado real.

## Alcance real

### Incluye

- respetar los dos fixes editoriales ya resueltos en `projects` y footer
- eliminar overrides manuales del featured project en Home
- definir `order` como criterio explicito para proyectos
- aplicar el mismo criterio a experiencia porque mejora claridad con diff minimo
- cerrar metadata publica minima con URL resuelta por entorno
- crear `src/app/sitemap.ts`
- crear `src/app/robots.ts`
- crear `src/app/not-found.tsx`
- alinear docs base y docs de la feature con la implementacion real

### No incluye

- rediseño visual mayor
- cambios grandes de layout
- nuevas secciones
- assets OG o iconos nuevos
- backend, formularios o integraciones nuevas
