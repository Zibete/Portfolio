# feat(experience): incorporar Cabify y contextualizar trayectoria

Base: `master` (`6ca5aa3`)
Rama: `feat/022-experience-positioning`

## Qué se cambió

- Nuevo caso de experiencia `cabify-finance.mdx` con rol de Analista de Finanzas SSR (vía Michael Page) desde junio de 2026.
- Ajuste de contenido y orden: Cabify, PAE / AXION, supervisión.
- Revisión de copy de la página Experiencia desde `profile-content.ts` para destacar automatización en entornos financieros.
- Atribución explícita de las métricas al caso histórico AP de PAE / AXION; no a Cabify.
- Se muestra `period` en las tarjetas si existe (campo ya tipado, sin cambiar el modelo).

## Commits incluidos

- `e1e17db` — `feat(experience): add Cabify role and contextualize historical AP impact`
- Commit de este borrador editorial (sin cambios funcionales adicionales).

## Validación

- Diff examinado contra el HEAD `6ca5aa3`: exclusivamente Experiencia, contenidos y specs.
- Los textos públicos no muestran identificadores, clientes, datos operativos, código privado, credenciales o URLs internas.
- `npm run lint` y `npm run build` no ejecutados localmente; Vercel se verificará desde el último commit del PR.

## Fuera de alcance

- About, Skills, Contact, CV y SEO.
- Casos técnicos corporativos completos, métricas nuevas o integraciones LLM productivas.
- Cambios de dependencias, navegación y rediseño visual.

## Validación manual

- [ ] Verificar orden, fechas, tarjetas y texto de `/experience` en móvil y escritorio.
- [ ] Revisar que la descripción pública de Cabify sea compatible con las políticas de divulgación aplicables.
- [ ] Comprobar despliegue Vercel del PR.
- [ ] Aprobar el PR antes de fusionar.
