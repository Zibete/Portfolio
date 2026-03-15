# Feature 006 — Sistema de motion

## Objetivo

Definir e implementar un sistema de motion simple, consistente y reutilizable para el portfolio, de modo que las animaciones de la Home y futuras secciones no queden resueltas de forma ad hoc.

La feature debe:
- unificar criterios de animación sutil
- evitar que cada bloque tenga motion distinta o improvisada
- crear una base reutilizable para reveal, entrance y stagger simples
- respetar dark-first, performance y legibilidad
- contemplar reduced motion de forma razonable

## Contexto

El portfolio ya cuenta con:
- Home visualmente refinada
- hero con identidad
- stack marquee
- composición vertical más madura
- una dirección visual producto tech ya bastante clara

Hasta acá las animaciones pudieron resolverse de forma puntual. Ahora conviene consolidarlas en una capa mínima y mantenible.

## Problema que resuelve esta feature

Si seguimos agregando motion sin sistema:
- cada componente puede terminar con timings y estilos distintos
- el sitio puede sentirse inconsistente
- el mantenimiento se vuelve más difícil
- futuras iteraciones pueden romper la armonía visual

Necesitamos pasar de motion puntual a motion intencional.

## Alcance

### Entra en esta feature

- definir un pequeño sistema base de motion
- unificar reveal/entrance/stagger simples
- crear utilidades, clases o componentes reutilizables mínimos
- aplicar ese sistema al menos en los bloques principales de Home donde tenga sentido
- contemplar reduced motion si el costo técnico es bajo y razonable
- documentar implícitamente la convención en el código

### No entra en esta feature

- animaciones complejas de scroll
- parallax
- GSAP u otras librerías pesadas
- rediseño de Home
- cambios grandes de contenido
- nuevas secciones grandes
- cambios en Contact, CV o Experience
- refactors masivos de todos los componentes del sitio

## Entregables visibles

- motion más consistente en Home
- reveals/entrances con timings coherentes
- una base reutilizable para futuras secciones
- reduced motion razonable si la solución lo permite

## Criterios de aceptación

- las animaciones se sienten sutiles, modernas y coherentes entre sí
- no hay exceso de motion
- el sistema es reutilizable, no una suma de hacks locales
- dark/light mantienen buena experiencia
- no aparecen problemas de hidratación ni saltos visuales graves
- reduced motion no rompe layout ni UX
- lint y build deben pasar
- no se agregan dependencias innecesarias

## Dependencias

Esta feature depende de:
- `docs/PROJECT_CONSTITUTION.md`
- `AGENTS.md`
- `specs/001-product-vision.md`
- `specs/003-design-system.md`
- `specs/006-mvp-scope.md`
- `specs/features/002-home-visual-language/spec.md`
- `specs/features/003-hero-identity/spec.md`
- `specs/features/004-stack-marquee/spec.md`
- `specs/features/005-home-vertical-composition/spec.md`

## Riesgos / decisiones abiertas

- si conviene resolver todo con CSS puro o con una abstracción mínima en React
- cuánto sistematizar sin sobrediseñar
- cómo balancear performance con elegancia visual
- hasta dónde aplicar el sistema en esta iteración sin abrir alcance extra