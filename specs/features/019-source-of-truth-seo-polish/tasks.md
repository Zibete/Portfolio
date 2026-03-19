# Tasks — FEAT 019

## Fixes públicos
- [x] corregir typo en eyebrow del proyecto destacado de `/projects`
- [x] corregir typo en descripción del footer
- [ ] revisar si en los archivos tocados queda algún error visible equivalente

## Source of truth
- [ ] revisar cómo Home compone hoy el featured project
- [ ] identificar fields overrideados manualmente en Home
- [ ] eliminar overrides editoriales/manuales innecesarios
- [ ] dejar una sola fuente de verdad para summary / role / year / tags o equivalentes
- [ ] validar que el proyecto destacado siga renderizando correctamente

## Orden de contenido
- [ ] definir un criterio explícito de orden para proyectos
- [ ] aplicar ese criterio en el flujo de listado/render
- [ ] validar featured project + resto del listado
- [ ] revisar si experiencia necesita orden explícito
- [ ] aplicar ajuste en experiencia solo si aporta claridad real y mantiene diff mínimo

## Metadata pública
- [ ] revisar metadata global actual
- [ ] agregar o ajustar `metadataBase`
- [ ] completar `openGraph`
- [ ] completar `twitter`
- [ ] revisar íconos/metadatos relacionados si corresponde
- [ ] validar que no haya conflictos con rutas existentes

## Base pública del sitio
- [ ] crear `src/app/sitemap.ts`
- [ ] crear `src/app/robots.ts`
- [ ] crear `src/app/not-found.tsx`
- [ ] validar que estas piezas respeten la estructura y tono actual del proyecto

## Documentación
- [ ] revisar `docs/PROJECT_CONSTITUTION.md`
- [ ] revisar `README.md`
- [ ] alinear referencias de alcance desactualizadas
- [ ] actualizar spec.md
- [ ] actualizar plan.md
- [ ] actualizar tasks.md
- [ ] actualizar verification.md

## Cierre
- [ ] validar Home
- [ ] validar Projects
- [ ] validar metadata pública básica
- [ ] validar build/lint
- [ ] confirmar que la feature no abrió cambios visuales fuera de alcance