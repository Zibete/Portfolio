# docs(projects): casos públicos basados en evidencia y límites

Base: `master` (`9a5d9b1`)
Rama: `feat/024-public-project-case-studies`

## Qué se cambió

- Migrar SAP se reescribió con contexto, decisiones, flujo, resultado histórico y límites claros de testing público.
- ZIBE se actualizó con arquitectura modular, CI, contrato RoomsV2 y estado verificado hasta septiembre de 2026.
- Se dejó explícito que el core público de Migrar SAP no prueba integraciones corporativas reales, y que la configuración Firebase ficticia no acredita backend desplegado ni pruebas físicas.
- Se mantienen los slugs, enlaces, orden y proyecto destacado anteriores.
- Se agregaron spec, plan, tasks y verification de feature 024.

## Commits incluidos

- `a2ef694` — `docs(projects): present public cases with evidence and limitations`
- Commit de este borrador editorial.

## Validación

- Diff de la iteración: solo dos MDX existentes y documentación.
- Comparación de contenido contra `main` público de `Migrar-SAP-Portfolio` y `Zibe`.
- `npm run lint` y `npm run build` no ejecutados localmente.
- Estado Vercel del último SHA: revisar en PR.

## Fuera de alcance

- Código de proyectos privados, nuevos case studies, componentes, infraestructura y cambios visuales.
- Afirmaciones de adopción, validación física o despliegue que no cuenten con evidencia.

## Validación manual

- [ ] Revisar los dos detalles de proyecto y el listado en desktop/mobile.
- [ ] Comprobar enlaces a README, Case Study, arquitectura y CI.
- [ ] Confirmar el estado Vercel del último commit.
- [ ] Aprobar PR antes del merge.
