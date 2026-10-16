# fix(seo): cierre de auditoría del portfolio

Base: `master` (`247eb8e`)
Rama: `feat/029-portfolio-final-audit`

## Qué se cambió

- Centralización de metadata para About, Contact, Experience, Skills y Projects con canonical, OG/Twitter propios por ruta.
- Dominio profesional `matias-peralta.is-a.dev` como fallback estable para SEO, sin heredar dominios de previews de Vercel.
- Descripción de fallback de Open Graph en detalle de proyectos consistente con la imagen genérica.
- Página 404: acentos corregidos y `robots: noindex`.
- README y `.env.example` ajustados: Supabase dejó de mostrarse como una integración en uso.
- Specs 029 registran evidencia, criterios y controles pendientes.

## Commits incluidos

- `3be9270` — `fix(seo): align route previews and canonical domain across portfolio`
- `e9ada08` — `docs(audit): record final portfolio checks and outstanding validations`
- Commit de este borrador editorial.

## Auditoría

- [x] CV actualizado en `public/files/` y ruta central correspondiente.
- [x] Cuatro proyectos con rutas, imágenes, orden y estado verificados en el repositorio.
- [x] Referencias de assets locales comprobadas contra el árbol de GitHub.
- [x] Sin dependencias nuevas ni cambios de los casos de estudio.
- [ ] Vercel: corroborar estado del último commit.
- [ ] Verificación visual mobile/desktop, descarga HTTP del CV y enlaces externos.
- [ ] Confirmar metadatos servidos e indexación en el dominio real.
- [ ] `npm run lint` / `npm run build` locales: no ejecutados.

## Límites

No se pudo acceder al dominio público desde el contenedor por falla de resolución DNS. La existencia de un asset en el repositorio no demuestra que se descargue públicamente; Vercel verde no equivale a esa comprobación ni a una auditoría de Lighthouse.

## Fuera de alcance

Rehacer CV, proyectos, Home, navegación, UI, APIs o repositorios privados.

## Validación manual

- [ ] Abrir la preview del PR en desktop y móvil.
- [ ] Verificar Home, About, Projects, Experience, Skills, Contact y cada proyecto.
- [ ] Descargar el PDF actualizado en Home, Header y Contact.
- [ ] Confirmar que metatags OG y canonical son correctos.
- [ ] Aprobar PR antes de fusionar a master.
