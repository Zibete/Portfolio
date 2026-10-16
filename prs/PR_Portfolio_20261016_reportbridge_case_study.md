# docs(projects): ReportBridge como MVP acotado

Base: `master` (`6c66b37`)
Rama: `feat/026-reportbridge-case-study`

## Qué se cambió

- Nuevo caso descriptivo `src/content/projects/reportbridge.mdx`, centrado en el problema, decisiones y limitaciones de un MVP local de consulta/exportación de reportes.
- Registro en `src/content/projects/registry.ts` para habilitar `/projects/reportbridge`.
- Orden de proyectos: Migrar SAP (1), Finance Toolkit (2), ReportBridge (3), ZIBE (4).
- Specs 026 con evaluación editorial: Tesorería→Cobranzas queda pendiente de mayor evidencia y Meeting Notes no se incorpora por ser una herramienta personal, no un caso de portfolio.

## Commits incluidos

- `0a21c20` — `docs(projects): add scoped ReportBridge MVP case study`
- Commit de este respaldo editorial.

## Validación

- Diff limitado a MDX, registro, posición de ZIBE y documentación.
- No se publica código, capturas, datos, archivos, URL privadas, credenciales ni detalles de acceso a sistemas.
- El MVP no se presenta como rollout empresarial, con resultados cuantificados o con todos los reportes y períodos verificados.
- `npm run lint` y `npm run build` no ejecutados localmente; revisar despliegue Vercel del último SHA.

## Fuera de alcance

- Nuevo caso público de Apps Script, Meeting Notes, nuevas dependencias, rediseño, Home, CV y SEO.
- Afirmaciones sobre adopción, integración LLM en el producto o capacidad de distribución no validada.

## Validación manual

- [ ] Revisar `/projects` y `/projects/reportbridge` en móvil/escritorio.
- [ ] Confirmar que el nombre y el resumen general son apropiados para divulgación pública.
- [ ] Confirmar Vercel en el commit final.
- [ ] Aprobar PR antes de fusionar.
