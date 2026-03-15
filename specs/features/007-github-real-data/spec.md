# Feature 007 — GitHub real data

## Objetivo

Enriquecer los proyectos del portfolio con metadata real de GitHub, manteniendo MDX como fuente principal y curada del contenido.

La feature debe:
- sumar datos vivos útiles sin reemplazar el relato en MDX
- mantener toda la integración GitHub del lado server-only
- tolerar ausencia de token, repo o fallas de API sin romper render
- aportar señal técnica real en Home, `/projects` y `/projects/[slug]`
- conservar una implementación pequeña y mantenible

## Contexto

El portfolio ya cuenta con:
- contenido de proyectos en `.mdx`
- ZIBE como caso principal real
- Home, listado de proyectos y detalle por slug
- arquitectura file-based y server rendering con Next.js

Hasta ahora el contenido de proyectos es completamente curado y estático. Eso funciona bien para narrativa, pero no muestra señales vivas del estado público del repo.

## Problema que resuelve esta feature

Hoy el portfolio muestra proyectos reales, pero no incorpora metadata pública actualizable como:
- stars
- forks
- issues abiertas
- última actividad del repo

Esto limita una señal concreta de madurez y mantenimiento activo, especialmente en ZIBE.

## Alcance

### Entra en esta feature

- extender el frontmatter de proyectos con campos opcionales de GitHub
- crear una capa server-only mínima para consultar la REST API de GitHub
- mapear metadata pública a un contrato interno chico
- aplicar esa metadata en Home, `/projects` y `/projects/[slug]`
- mantener fallback silencioso cuando la API no responda o falte configuración
- dejar `GITHUB_TOKEN` documentado en `.env.example`

### No entra en esta feature

- reemplazar MDX como source of truth
- scraping de README o HTML
- integración client-side con GitHub
- dashboards de actividad
- analytics
- nuevos proyectos
- rediseño fuerte de la UI
- dependencias nuevas si `fetch` nativo alcanza

## Principio de source of truth

MDX sigue siendo la fuente principal de:
- título
- resumen
- narrativa
- stack
- links curados

GitHub solo enriquece con metadata viva complementaria.

## Entregables visibles

- Home con metadata viva breve del proyecto principal
- `/projects` con metadata viva resumida por card
- `/projects/[slug]` con un bloque ampliado de metadata viva
- render estable incluso si GitHub falla

## Criterios de aceptación

- MDX sigue siendo la fuente principal curada
- la integración GitHub corre solo del lado servidor
- sin token o sin respuesta válida, la UI no se rompe
- ZIBE queda conectado a su repo real
- la UI agrega señal real sin rediseño grande
- lint y build pasan

## Dependencias

Esta feature depende de:
- `docs/PROJECT_CONSTITUTION.md`
- `AGENTS.md`
- `specs/004-data-model.md`
- `specs/005-content-model.md`

## Riesgos / decisiones abiertas

- qué volumen de metadata mostrar sin recargar la UI
- cómo manejar rate limits de GitHub sin agregar complejidad
- cómo usar links de repo/demo sin desplazar la narrativa principal del proyecto
