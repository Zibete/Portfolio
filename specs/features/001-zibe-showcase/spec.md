# Feature 001 — ZIBE como proyecto principal

## Objetivo

Mostrar ZIBE como el proyecto principal del portfolio y convertirlo en la pieza más fuerte de venta técnica y de producto del sitio.

La feature debe comunicar con claridad:
- qué problema resuelve ZIBE
- qué construí
- qué stack utiliza
- qué arquitectura y decisiones técnicas lo hacen sólido
- qué nivel de madurez tiene hoy
- por qué este proyecto refleja mi perfil profesional

## Contexto

El portfolio ya cuenta con:
- constitución del proyecto
- specs globales del producto
- app shell navegable
- soporte base para contenido file-based con MDX
- ruta de proyectos y detalle por slug

Ahora necesitamos reemplazar placeholders y cargar el primer proyecto real.

## Fuente de verdad

La fuente de contenido para esta feature debe salir del repo público de GitHub de ZIBE y sus archivos asociados.

Fuentes prioritarias:
- `README.md`
- documentación del repo
- estructura del proyecto
- archivos de configuración que ayuden a inferir stack y arquitectura
- tests/CI si aportan valor real
- assets o screenshots si existen

No inventar contenido que no pueda sostenerse con el repo.

## Problema que resuelve esta feature

Hoy el sitio tiene estructura, pero todavía no tiene una pieza real que venda capacidad técnica e impacto.

Sin un proyecto real:
- la home no demuestra valor concreto
- la sección Projects sigue abstracta
- el portfolio no convierte bien para entrevistas

## Alcance

### Entra en esta feature

- cargar ZIBE como primer proyecto real del portfolio
- crear el contenido base del proyecto en formato MDX
- mostrar ZIBE en la lista de proyectos
- crear el detalle funcional en `/projects/zibe`
- reemplazar placeholders relacionados con este proyecto
- definir una estructura de lectura clara para el caso de estudio
- incluir CTAs al repositorio y, si aplica, links relevantes ya existentes
- incluir animaciones sutiles solo si ya encajan con la base actual
- curar el contenido para hablarle tanto a perfil técnico como a negocio

### No entra en esta feature

- cargar otros proyectos
- rediseñar toda la home
- construir blog/notas
- integrar formulario de contacto real
- analytics
- integración dinámica con GitHub API
- admin/CMS
- refactors grandes de layout global
- cambios visuales masivos fuera del contexto de ZIBE

## Entregables visibles

- ZIBE visible en Home como proyecto principal o destacado
- ZIBE visible en `/projects`
- detalle funcional en `/projects/zibe`
- contenido real curado desde GitHub
- estructura de caso de estudio consistente con el portfolio

## Estructura esperada del contenido

El detalle de ZIBE debe cubrir como mínimo:

1. Resumen ejecutivo
2. Problema / motivación
3. Qué construí
4. Stack principal
5. Arquitectura / decisiones técnicas
6. Funcionalidades principales
7. Calidad técnica (tests, CI, organización, etc. si corresponde)
8. Estado actual
9. Aprendizajes / valor profesional
10. Links relevantes

## Criterios de aceptación

- ZIBE ya no debe sentirse como placeholder
- el contenido no debe parecer un README pegado sin curación
- la página debe comunicar problema, solución, stack e impacto
- el tono debe ser profesional, claro y orientado a producto tech
- el contenido debe poder entenderse sin ser experto en Android
- el contenido debe dejar señales técnicas suficientes para un perfil engineering
- la implementación debe respetar dark-first
- no debe romper build ni lint
- no debe introducir deuda visual innecesaria

## Dependencias

Esta feature depende de:
- `docs/PROJECT_CONSTITUTION.md`
- `AGENTS.md`
- `specs/001-product-vision.md`
- `specs/002-information-architecture.md`
- `specs/003-design-system.md`
- `specs/004-data-model.md`
- `specs/005-content-model.md`
- `specs/006-mvp-scope.md`

## Riesgos / decisiones abiertas

- cuánto contenido mostrar sin volver la página demasiado larga
- cómo resumir arquitectura sin perder claridad
- cómo presentar madurez del proyecto sin sobreprometer
- si conviene tocar en esta feature el detalle visual del gradiente en light mode o dejarlo para una feature aparte
