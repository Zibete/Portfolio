# Tasks - FEAT 019

## Fixes publicos ya resueltos

- [x] tomar como cerrados el typo de `/projects`
- [x] tomar como cerrado el typo del footer
- [x] no re-trabajar esos fixes salvo necesidad tecnica

## Source of truth

- [x] revisar como Home compone hoy el featured project
- [x] identificar fields overrideados manualmente en Home
- [x] eliminar overrides editoriales/manuales innecesarios
- [x] dejar una sola fuente de verdad para summary / role / year / tags o equivalentes
- [x] validar que el proyecto destacado siga renderizando correctamente

## Orden de contenido

- [x] definir un criterio explicito de orden para proyectos
- [x] aplicar ese criterio en el flujo de listado/render
- [x] validar featured project + resto del listado
- [x] revisar si experiencia necesita orden explicito
- [x] aplicar ajuste en experiencia porque aporta claridad con diff minimo

## Metadata publica

- [x] revisar metadata global actual
- [x] agregar `metadataBase`
- [x] completar `openGraph`
- [x] completar `twitter`
- [x] dejar fuera de alcance iconos nuevos por falta de asset dedicado
- [x] validar que no haya conflictos con rutas existentes

## Base publica del sitio

- [x] crear `src/app/sitemap.ts`
- [x] crear `src/app/robots.ts`
- [x] crear `src/app/not-found.tsx`
- [x] validar que estas piezas respeten la estructura actual

## Documentacion

- [x] revisar `docs/PROJECT_CONSTITUTION.md`
- [x] revisar `README.md`
- [x] alinear referencias de alcance desactualizadas
- [x] actualizar `spec.md`
- [x] actualizar `plan.md`
- [x] actualizar `tasks.md`
- [x] actualizar `verification.md`

## Cierre

- [x] validar Home
- [x] validar Projects
- [x] validar metadata publica basica
- [x] ejecutar lint
- [x] ejecutar build
- [x] confirmar que la feature no abrio cambios visuales fuera de alcance
