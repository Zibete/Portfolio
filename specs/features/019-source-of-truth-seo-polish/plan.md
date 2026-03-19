# Plan - FEAT 019

## Estrategia aplicada

Resolver la feature con el menor diff coherente posible, priorizando source of truth, orden del contenido y base publica del sitio.

## Etapas ejecutadas

1. Revisar Home, Projects, Experience, metadata global y frontmatter MDX.
2. Mover el featured project a una sola fuente de verdad basada en MDX.
3. Incorporar `order` al modelo y centralizar el orden en `src/lib/mdx/content.ts`.
4. Cerrar metadata global y metadata de proyecto con URL absoluta basada en entorno.
5. Crear `sitemap.ts`, `robots.ts` y `not-found.tsx`.
6. Alinear `README.md`, `docs/PROJECT_CONSTITUTION.md`, `specs/005-content-model.md` y la feature 019.

## Decisiones

- `featured` queda para elegir el proyecto destacado.
- `order` pasa a ser el criterio publico explicito para ordenar contenido.
- La URL publica se resuelve por entorno para no hardcodear un dominio no confirmado.
- No se agregan iconos ni assets OG nuevos porque no habia un asset dedicado y eso abria alcance visual.
