# Feature 003 — Identidad visual del hero

## Objetivo

Convertir el hero de la Home en una pieza más memorable, moderna y propia, reforzando la identidad profesional del portfolio sin abrir todavía una iniciativa visual más grande.

La feature debe:
- dar más protagonismo al nombre "Matías Peralta"
- incorporar una animación sutil de entrada para el nombre o bloque principal
- sumar un badge/estado en español con lógica de disponibilidad
- mejorar la jerarquía de CTAs y microcopy del hero
- mantener una estética producto tech, dark-first y profesional

## Contexto

El portfolio ya cuenta con:
- constitución del proyecto
- specs globales
- Home visualmente refinada
- un proyecto principal real (ZIBE)
- una base visual más limpia y premium tras la Feature 002

Ahora necesitamos que el hero deje de ser solo correcto y pase a tener una identidad más fuerte desde el primer vistazo.

## Problema que resuelve esta feature

Hoy la Home tiene mejor base visual, pero el hero todavía no capitaliza del todo:
- el nombre personal como marca principal
- la señal de disponibilidad o apertura laboral
- una primera impresión memorable
- una jerarquía clara entre identidad, posicionamiento y CTA

Esto reduce el impacto de la primera pantalla, que debería venderte en pocos segundos.

## Alcance

### Entra en esta feature

- reforzar el bloque principal del hero
- dar más protagonismo visual al nombre
- incorporar una animación sutil y elegante de entrada
- sumar un badge/estado en español
- revisar microcopy del hero si hace falta
- mejorar jerarquía de CTAs dentro del hero
- hacer ajustes mínimos de layout/spacing en el hero si son necesarios

### No entra en esta feature

- marquee/carrusel de stacks o logos
- nuevas secciones grandes
- rediseño completo de la Home
- reescritura completa del contenido del sitio
- cambios grandes en Projects o ZIBE
- nuevas dependencias pesadas para animación
- motion compleja de toda la página
- cambios en Contact, Experience o CV

## Entregables visibles

- hero con una identidad más fuerte y propia
- nombre principal con mayor presencia
- animación sutil de entrada en el hero
- badge de disponibilidad en español
- CTAs del hero más claros y mejor jerarquizados

## Lineamientos de contenido

El hero debe comunicar rápidamente:
- quién soy
- qué tipo de perfil ofrezco
- en qué áreas aporto valor
- cuál es la acción principal esperada

El badge debe sentirse profesional y simple.
Texto sugerido inicial:
- `Disponible para Android y automatización`
o
- `Disponible para nuevos desafíos remotos`

La implementación puede elegir la variante más coherente con el hero actual, pero el texto debe quedar editable desde una fuente central si es posible.

## Criterios de aceptación

- el hero gana presencia sin volverse recargado
- el nombre principal se vuelve un foco visual claro
- la animación se siente moderna y sutil, no decorativa en exceso
- el badge en español se integra bien al sistema visual
- las CTAs se entienden mejor
- dark mode sigue siendo el modo más fuerte
- light mode sigue siendo limpio
- no hay problemas de hidratación ni saltos visuales molestos
- lint y build deben pasar
- la feature no debe invadir el alcance del futuro marquee/stack loop

## Dependencias

Esta feature depende de:
- `docs/PROJECT_CONSTITUTION.md`
- `AGENTS.md`
- `specs/001-product-vision.md`
- `specs/002-information-architecture.md`
- `specs/003-design-system.md`
- `specs/006-mvp-scope.md`
- `specs/features/002-home-visual-language/spec.md`

## Riesgos / decisiones abiertas

- cuánto mover el layout del hero sin abrir un rediseño mayor
- si la animación debe resolverse con CSS puro o con una solución mínima ya soportada
- cómo balancear el badge para que se vea premium y no genérico