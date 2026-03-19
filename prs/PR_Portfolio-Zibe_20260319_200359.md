# FEAT 019 - source of truth / SEO polish

Base: `master`
Rama: `019-source-of-truth-seo-polish`

## Que se cambio

- Se eliminaron los overrides manuales del featured project en Home para que `summary`, `role`, `year` y `tags` salgan de una sola fuente de verdad en MDX.
- Se agrego `order` al frontmatter y se centralizo el criterio de orden en `src/lib/mdx/content.ts`, aplicandolo a proyectos y experiencia.
- Se cerro la metadata publica minima con `metadataBase`, `openGraph`, `twitter` y metadata especifica para detalle de proyecto.
- Se sumaron `src/app/sitemap.ts`, `src/app/robots.ts` y `src/app/not-found.tsx`.
- Se consolidaron los fixes publicos de copy ya resueltos en `/projects` y footer.
- Se actualizaron `docs/PROJECT_CONSTITUTION.md`, `specs/005-content-model.md` y los MDs de FEAT 019 para reflejar el resultado real.
- Se mantuvo el `README.md` curado y solo se ajusto una inconsistencia real en la estructura documentada.
- Se incluye la actualizacion del CV publico en `public/files/CV_MATIAS_PERALTA_ANALISTA.pdf`.

## Por que

- Home estaba rompiendo la fuente de verdad con contenido editorial duplicado.
- El orden de proyectos y experiencia dependia de criterios implicitos.
- Faltaba cerrar la capa minima de SEO/share y las piezas publicas base del sitio.
- La documentacion tenia que quedar alineada con el estado final real de la feature.

## Validacion local

- [x] `npm run lint`
- [x] `npm run build`

## Validacion manual

- [x] Home usa el featured project real de MDX sin overrides manuales.
- [x] `/projects` respeta el orden explicito esperado.
- [x] `/experience` respeta el orden explicito esperado.
- [x] `robots.txt`, `sitemap.xml` y `not-found` quedaron disponibles en App Router.
- [x] No se abrio una pasada visual fuera de alcance.

## Fuera de alcance

- Sin rediseño visual mayor.
- Sin nuevas secciones.
- Sin backend ni contact form.
- Sin assets OG o iconos nuevos.

## Commits incluidos

- `fix(copy): correct projects eyebrow and footer typo`
- `docs(specs): define FEAT 019 source-of-truth and seo polish`
- `feat(content): remove featured project overrides and add explicit ordering`
- `feat(seo): add public metadata base, sitemap, robots and not-found`
- `docs(content): align constitution, content model and FEAT 019 docs`
- `chore(cv): refresh public CV asset with portfolio link`
