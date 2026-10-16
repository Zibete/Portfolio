# feat(profile): Sobre mí, Contacto y SEO basados en CV actualizado

Base: `master` (`458cf6a`)
Rama: `feat/028-cv-contact-seo`

## Qué se cambió

- Se reescribieron Sobre mí y Contacto para priorizar automatización, software e integraciones y no Android.
- Se incorporó la formación (Tecnicatura Superior en Programación, Teclab, 2022–2024) y se ajustaron fechas/empresas de PAE y AXION conforme al CV aportado.
- Títulos, Open Graph, Twitter y keywords globales reflejan el perfil actualizado.
- Se agregaron descripciones y canonicals a About, Contact, Experience, Skills y Projects.
- Se documentó la decisión explícita del autor: **usar su PDF original**, sin reescribirlo, mediante `docs/CV_PUBLICATION.md`.
- PDF original incorporado a la rama por el autor, verificado mediante Git blob SHA y conectado al path central de descarga; specs 028 actualizadas.

## Commits incluidos

- `9a8ea62` — `feat(profile): align About Contact experience and SEO with updated CV`
- `394e395` — `docs(cv): record selected original PDF and publication gate`
- Commit de este borrador editorial.

## Publicación del CV

**Resuelto:** el autor subió `CV_PERALTA_MATIAS_2026.pdf` a `public/files/` en `feat/028-cv-contact-seo`, sin modificar el contenido. Git blob SHA `0ede6c17f54ade6677886c3ccc5f29fb189142ee` coincide con el archivo original (726.187 bytes). La ruta `cvFilePath` ahora apunta al nuevo PDF.

**Pendiente:** comprobar descarga desde la preview de Vercel y revisar el estado del último deploy antes del merge.

## Validación

- Diff revisado: contenido, metadata, fechas/empresas, specs y documentación; sin cambios de dependencias o UI.
- El archivo PDF original se conservará byte a byte.
- No se ejecutaron `npm run lint` ni `npm run build` localmente.
- Verificar Vercel sobre el SHA final después de incorporar el PDF.

## Fuera de alcance

- Crear un CV alternativo o rehacer Canva.
- Publicar el teléfono en otro sector distinto del propio PDF del autor.
- Rediseños, proyectos nuevos, cambio de infraestructura o SEO avanzado.

## Validación manual

- [x] PDF original intacto en la rama.
- [x] Ruta de descarga central actualizada.
- [ ] Confirmar descarga del PDF en la preview desde los tres accesos.
- [ ] Comprobar Vercel verde del SHA final.
- [ ] Revisar About/Contacto y mergear previa aprobación.
