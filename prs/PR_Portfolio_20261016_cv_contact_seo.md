# feat(profile): Sobre mí, Contacto y SEO basados en CV actualizado

Base: `master` (`458cf6a`)
Rama: `feat/028-cv-contact-seo`

## Qué se cambió

- Se reescribieron Sobre mí y Contacto para priorizar automatización, software e integraciones y no Android.
- Se incorporó la formación (Tecnicatura Superior en Programación, Teclab, 2022–2024) y se ajustaron fechas/empresas de PAE y AXION conforme al CV aportado.
- Títulos, Open Graph, Twitter y keywords globales reflejan el perfil actualizado.
- Se agregaron descripciones y canonicals a About, Contact, Experience, Skills y Projects.
- Se documentó la decisión explícita del autor: **usar su PDF original**, sin reescribirlo, mediante `docs/CV_PUBLICATION.md`.
- Specs 028 registran el paso restante: subida del PDF a la rama, actualización de la ruta central y comprobación de descarga.

## Commits incluidos

- `9a8ea62` — `feat(profile): align About Contact experience and SEO with updated CV`
- `394e395` — `docs(cv): record selected original PDF and publication gate`
- Commit de este borrador editorial.

## Bloqueante de publicación

**El PDF adjunto todavía no está en GitHub.** El conector utilizado no permite transferir binarios locales a GitHub. La copia disponible se llama `CV_PERALTA_MATIAS_2026.pdf`; subir a `public/files/` en esta misma rama. Una vez cargado, actualizar `cvFilePath` en `site-config.ts`. El sitio conserva mientras tanto su ruta previa, evitando links rotos.

No fusionar hasta completar esos pasos y validar descarga en Home, Header y Contact.

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

- [ ] Subir PDF original intacto a la rama.
- [ ] Actualizar ruta de descarga central.
- [ ] Verificar enlace PDF y contenido en los tres accesos.
- [ ] Comprobar Vercel verde del SHA final.
- [ ] Revisar About/Contacto y mergear previa aprobación.
