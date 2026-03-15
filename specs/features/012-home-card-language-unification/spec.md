# Feature 012 — Home card language unification

## Objetivo

Unificar el lenguaje visual de las cards de Home para que toda la página se sienta parte del mismo sistema, manteniendo el estilo premium, limpio y recruiter-friendly ya definido.

## Alcance

### Entra en esta feature
- llevar el bloque principal de Home a una card real y coherente con el resto
- usar como referencia visual la card principal del hero y sus 3 cards laterales
- unificar la lectura visual de las superficies principales de Home
- hacer que todas las cards de Home eleven al hover
- hacer que la sección de credibilidad y sus subcards también eleven

### No entra en esta feature
- cambios en otras páginas
- ajustes del header
- cambios de tipografía global
- rediseño editorial
- nuevas secciones
- nuevas dependencias

## Requisitos funcionales

1. El bloque principal de Home debe vivir dentro de una card real.
2. Las superficies principales de Home deben verse parte del mismo sistema visual.
3. Todas las cards de Home deben responder al hover con elevación visible y sobria.
4. La sección de credibilidad y sus subcards también deben elevar.
5. El comportamiento debe mantenerse consistente en light y dark mode.
6. No se debe romper marquee, motion ni interacciones que ya funcionan.

## Requisitos no funcionales

- mantener coherencia con el hero actual
- evitar exageraciones en sombra, escala o motion
- mantener performance razonable
- no abrir una refactorización global del sistema de cards
- respetar el alcance exclusivo de Home

## Criterio de done

- el bloque principal de Home ya vive dentro de una card
- las superficies principales de Home se perciben unificadas
- todas las cards de Home elevan al hover
- la sección de credibilidad también responde igual
- lint y build pasan