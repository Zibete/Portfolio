# feat(projects): caso público seguro de Finance Toolkit

Base: `master` (`144d55e`)
Rama: `feat/025-finance-toolkit-case-study`

## Qué se cambió

- Nuevo caso de estudio `finance-toolkit.mdx` redactado desde cero con problema, aporte, decisiones, flujo conceptual, estado real y límites de divulgación.
- Registro MDX para que la ruta `/projects/finance-toolkit` funcione.
- Orden de proyectos: Migrar SAP (destacado), Finance Toolkit (segundo), ZIBE (tercero).
- Ajuste del listado `/projects` para quitar el texto antiguo «Dos proyectos» y una etiqueta fija de Android.
- Fallback Open Graph de proyectos sin imagen hacia `/og/preview.png`, recurso público ya existente.
- Documentación de la iteración 025 en `specs/features/025-finance-toolkit-case-study/`.

## Commits incluidos

- `42b99e7` — `feat(projects): add safe Finance Toolkit case study`
- Commit de este borrador editorial.

## Validación

- Diff examinado contra `144d55e`: solo contenido MDX, registro, copy de listado, fallback de metadata y specs.
- El nuevo caso **no publica** repositorio privado, código, capturas, URLs internas, credenciales, contratos operativos, reglas corporativas ni métricas ficticias.
- `npm run lint` y `npm run build` no se ejecutaron localmente; confirmar estado Vercel del SHA final del PR.

## Fuera de alcance

- Nuevos componentes, UI, dependencias, cambios en el repositorio privado, imágenes, About, Skills, Experience, Contact, CV o SEO global.
- Atribuir entrega total en producción, resultados financieros medidos o capacidades de integración LLM no demostradas.

## Validación manual

- [ ] Revisar listado `/projects` y detalle `/projects/finance-toolkit` en escritorio y móvil.
- [ ] Confirmar que la descripción pública general es apta según las políticas corporativas y que el nombre del proyecto puede divulgarse.
- [ ] Verificar Vercel para el último SHA del PR.
- [ ] Aprobar PR antes del merge.
