# Feature 007 — GitHub real data

## Objetivo

Sumar datos reales de GitHub a los proyectos del portfolio para reforzar credibilidad técnica y estado vivo del trabajo mostrado, sin perder el control editorial y narrativo del contenido MDX.

## Contexto

El portfolio ya cuenta con:

- contenido file-based en MDX
- un proyecto principal real (`ZIBE`)
- Home conectada al proyecto destacado
- listado y detalle de proyectos funcionales
- sistema visual base suficiente para enriquecer información

Hoy el contenido de proyectos es curado, pero no incorpora señales vivas del repositorio.

## Problema a resolver

El sitio explica bien el proyecto, pero todavía no muestra de forma automática datos verificables de GitHub como actividad reciente, lenguaje principal o métricas públicas.

Eso deja una oportunidad clara de mejora en:

- credibilidad
- señal técnica visible
- percepción de mantenimiento activo
- conexión entre el portfolio y el repo real

## Fuente de verdad

La fuente principal del proyecto sigue siendo el archivo `.mdx`.

GitHub se usa como fuente secundaria para metadata viva.

### MDX sigue definiendo:
- título
- resumen
- narrativa
- rol
- stack
- tags
- curado editorial

### GitHub puede aportar:
- full name del repo
- url pública
- descripción pública
- homepage/demo si existe
- stars
- forks
- watchers/subscribers
- open issues
- lenguaje principal
- licencia
- último push
- archived

## Alcance

### Dentro de alcance
- agregar campos opcionales de GitHub al frontmatter
- crear helper server-only para GitHub API
- mostrar metadata viva en Home
- mostrar metadata viva en `/projects`
- mostrar metadata viva en `/projects/[slug]`
- agregar fallback limpio y silencioso

### Fuera de alcance
- importación automática de repositorios
- CMS
- scraping
- sincronización o persistencia
- rediseño grande de componentes
- analytics sobre clicks a GitHub

## Requisitos funcionales

1. Un proyecto puede declarar un repositorio GitHub mediante frontmatter.
2. Si el proyecto tiene repo, el servidor intenta traer metadata viva.
3. Si falla la consulta, el proyecto sigue renderizando normal.
4. Home debe poder mostrar señales vivas del proyecto destacado.
5. `/projects` debe poder mostrar señales vivas por card.
6. `/projects/[slug]` debe poder mostrar metadata ampliada del repo.
7. La feature no debe requerir JavaScript del lado cliente para funcionar.

## Requisitos no funcionales

- la implementación debe mantenerse simple
- no agregar dependencias si no son necesarias
- no romper generación estática existente más de lo imprescindible
- no exponer tokens al cliente
- mantener el naming y estructura actuales del repo

## Cambios de modelo

### Nuevos campos sugeridos en `ProjectFrontmatter`
- `githubRepo?: string`
- `githubUrl?: string`
- `demoUrl?: string`
- `githubFeatured?: boolean`

## UI esperada

### Home
Bloque breve de métricas / metadata viva sobre el proyecto principal.

### `/projects`
Cada proyecto puede mostrar un subconjunto de metadata viva.

### `/projects/[slug]`
Aside o card secundaria con metadata completa del repo.

## Criterio de done

La feature se considera terminada cuando:

- existe capa GitHub server-only
- `ZIBE` ya usa un repo real en frontmatter
- Home muestra metadata viva sin romper el diseño actual
- `/projects` muestra metadata viva si está disponible
- `/projects/[slug]` muestra metadata ampliada si está disponible
- sin token o sin respuesta de GitHub, el sitio sigue funcionando
- `npm run lint` y `npm run build` pasan