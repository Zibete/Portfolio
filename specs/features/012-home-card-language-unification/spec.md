# Feature 012 - Home card language unification

## Objetivo

Unificar el lenguaje visual de las cards de Home para que toda la pagina se sienta parte del mismo sistema, manteniendo el estilo premium, limpio y recruiter-friendly ya definido, con un hero inicial mas compacto, integrado y fuerte en el fold.

## Alcance

### Entra en esta feature
- llevar el bloque principal de Home a una card real y coherente con el resto
- usar como referencia visual la card principal del hero y sus 3 cards laterales
- compactar el ritmo vertical del hero y acercar la marquee al primer bloque
- integrar las 3 mini cards del hero dentro de la misma surface principal
- ajustar labels y copy de esas mini cards para una lectura mas recruiter-friendly
- unificar la lectura visual de las superficies principales de Home
- alinear el CTA lateral de CV cuando entre naturalmente en ese mismo lenguaje
- hacer que todas las cards de Home eleven al hover
- hacer que la seccion de credibilidad y sus subcards tambien eleven

### No entra en esta feature
- cambios en otras paginas
- ajustes del header
- cambios de tipografia global
- rediseno editorial
- nuevas secciones
- nuevas dependencias

## Requisitos funcionales

1. El bloque principal de Home debe vivir dentro de una card real.
2. El hero inicial debe reducir aire muerto arriba y abajo para aprovechar mejor el fold.
3. La marquee debe quedar mas cerca y conectada visualmente con el hero.
4. Las 3 mini cards del hero deben vivir dentro de la misma surface principal en desktop.
5. Las superficies principales de Home deben verse parte del mismo sistema visual.
6. El CTA lateral de CV puede ajustarse si ayuda a reforzar ese sistema sin cambiar su contenido.
7. Todas las cards de Home deben responder al hover con elevacion visible y sobria.
8. La seccion de credibilidad y sus subcards tambien deben elevar.
9. El comportamiento debe mantenerse consistente en light y dark mode.
10. No se debe romper marquee, motion ni interacciones que ya funcionan.

## Requisitos no funcionales

- mantener coherencia con el hero actual
- evitar exageraciones en sombra, escala o motion
- mantener performance razonable
- no abrir una refactorizacion global del sistema de cards
- respetar el alcance exclusivo de Home
- acotar cualquier ajuste CSS a Home o a cambios sin impacto visible fuera de Home

## Criterio de done

- el bloque principal de Home ya vive dentro de una card
- el hero se ve mas compacto y mas fuerte en el fold
- la marquee queda mas conectada al hero
- las mini cards del hero se integran dentro de la misma pieza principal
- las superficies principales de Home se perciben unificadas
- el CTA lateral de CV se integra sin abrir un lenguaje visual aparte
- todas las cards de Home elevan al hover
- la seccion de credibilidad tambien responde igual
- lint y build pasan
