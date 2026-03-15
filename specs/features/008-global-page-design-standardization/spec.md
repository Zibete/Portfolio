# Feature 008 — Global page design standardization

## Objetivo

Estandarizar el diseño de las páginas internas del portfolio para que About, Contact, CV, Experience, Skills y las vistas de Projects compartan un lenguaje visual coherente con Home en superficies, jerarquía, spacing y motion sutil.

La feature debe:
- tomar Home como referencia visual
- reducir la sensación de placeholder en rutas internas
- unificar criterios de layout, cards y asides
- mantener el look dark-first y producto tech
- conservar implementaciones simples y mantenibles

## Contexto

El portfolio ya cuenta con:
- una Home bastante más madura
- secciones dedicadas como hero, marquee y featured project
- un sistema base de motion reutilizable
- rutas internas existentes pero todavía muy apoyadas en `PagePlaceholder`

Hoy Home comunica mejor intención de producto, pero varias rutas internas todavía se sienten temporales o demasiado genéricas.

## Problema que resuelve esta feature

Actualmente el sitio presenta una diferencia perceptible entre:
- una Home con más intención visual
- y varias rutas internas resueltas como placeholder estructurado

Eso genera:
- sensación de inconsistencia
- menor percepción de producto terminado
- menos continuidad entre navegación y contenido
- una experiencia visual desigual

Necesitamos que el sitio se sienta como una sola aplicación y no como “Home fuerte + resto provisional”.

## Alcance

### Entra en esta feature

- definir una base visual compartida para páginas internas
- unificar heading/eyebrow/lead/aside/surfaces
- reutilizar motion simple donde aporte valor
- migrar `about`, `contact`, `cv`, `experience` y `skills` al nuevo sistema
- ajustar `/projects` y `/projects/[slug]` si hace falta para alinear apariencias
- reducir o eliminar la sensación de placeholder genérico

### No entra en esta feature

- rediseño de Home
- integración GitHub API
- nuevo contenido real grande
- formulario funcional de contacto
- descarga real del CV
- reescritura del caso de estudio de ZIBE
- motion compleja de scroll
- nuevas dependencias pesadas

## Entregables visibles

- rutas internas con mejor jerarquía visual
- superficies coherentes entre páginas
- asides y paneles alineados con Home
- motion sutil consistente cuando corresponda
- `/projects` y `/projects/[slug]` mejor integradas al sistema visual global

## Criterios de aceptación

- las rutas internas se sienten parte del mismo producto
- Home sigue siendo la referencia, no una excepción
- no hay páginas con estilos claramente fuera del sistema
- dark mode sigue siendo fuerte y premium
- light mode sigue siendo limpio y legible
- la motion no distrae ni invade
- no se agregan dependencias innecesarias
- lint y build pasan

## Dependencias

Esta feature depende de:
- `docs/PROJECT_CONSTITUTION.md`
- `AGENTS.md`
- `specs/001-product-vision.md`
- `specs/002-information-architecture.md`
- `specs/003-design-system.md`
- `specs/006-mvp-scope.md`
- `specs/features/002-home-visual-language/spec.md`
- `specs/features/005-home-vertical-composition/spec.md`
- `specs/features/006-motion-system/spec.md`

## Riesgos / decisiones abiertas

- cuánto conviene abstraer en componentes compartidos sin sobrediseñar
- si conviene evolucionar `PagePlaceholder` o reemplazarlo por piezas más chicas
- hasta dónde tocar `/projects` y `/projects/[slug]` sin mezclar con contenido/datos
- cómo mantener el look premium sin recargar páginas que todavía tienen contenido breve