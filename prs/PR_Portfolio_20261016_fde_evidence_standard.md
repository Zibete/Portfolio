# docs(projects): estándar de evidencia y brechas hacia FDE

Base: `master` (`e6df585`)
Rama: `feat/027-fde-evidence-standard`

## Qué se cambió

- Se agregó `Evidencia y pendientes` a Migrar SAP, Finance Toolkit, ReportBridge y ZIBE, distinguiendo pruebas públicas, validaciones reportadas y comprobaciones faltantes.
- Se creó `docs/CASE_STUDY_STANDARD.md` con un contrato editorial reusable para problemas, restricciones, contribución, trade-offs, validación, resultados y límites.
- La guía define criterios estrictos para publicar un futuro caso con APIs/LLMs solo cuando exista implementación y evaluación verificable.
- `src/content/projects/README.md` ahora remite a la guía y recuerda registrar cada caso en el registry.
- Specs 027 documentan alcance, decisiones, validaciones y pendientes.

## Commits incluidos

- `4f746b7` — `docs(projects): standardize evidence and validation gaps for FDE-ready cases`
- Commit de este respaldo editorial.

## Validación

- Diff verificado contra `e6df585`: cuatro MDX (6 líneas nuevas cada uno), README y documentación.
- Frontmatter, slugs, orden, URLs públicas y comportamiento de página sin modificaciones.
- No se agregaron demos, métricas ficticias, código interno ni claims de IA en producción.
- `npm run lint` y `npm run build` no ejecutados localmente; verificar Vercel del último SHA.

## Fuera de alcance

- Nuevos proyectos, APIs, integración LLM, cambios visuales, dependencias, rutas, About, Contact, CV y SEO (feature 028).
- Reescribir casos completos o publicar datos/código de empresas.

## Validación manual

- [ ] Comprobar `/projects` y los cuatro detalles en escritorio y móvil.
- [ ] Revisar exactitud de niveles de evidencia y límites de divulgación.
- [ ] Confirmar Vercel para el último commit.
- [ ] Aprobar el PR antes del merge.
