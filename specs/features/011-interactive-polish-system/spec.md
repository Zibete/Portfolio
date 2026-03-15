# Feature 011 — Interactive polish system

## Objetivo

Mejorar la calidad percibida del portfolio mediante microinteracciones modernas, sutiles y coherentes con el sistema visual existente.

## Alcance

### Entra en esta feature
- íconos de skills en el marquee
- desaceleración del marquee al hover
- glow/realce de la skill activa al hover
- hover states premium para cards
- hover/active states mejores para el header

### No entra en esta feature
- rediseño general
- nuevas secciones
- motion compleja
- parallax
- tilt 3D agresivo
- librerías nuevas de animación

## Requisitos funcionales

1. El stack marquee debe mostrar skill + ícono.
2. El marquee debe desacelerar al hover del contenedor.
3. La skill hovereada debe destacarse más que el resto.
4. Las cards deben responder al mouse con una interacción clara y moderna.
5. El header debe tener estados hover y active más visibles.
6. Todo debe seguir siendo sobrio y recruiter-friendly.

## Requisitos no funcionales

- mantener performance razonable
- mantener coherencia con Home
- respetar reduced motion
- evitar ruido visual

## Criterio de done

- skills con íconos integrados
- marquee con hover más rico
- cards con hover premium
- header con estados modernos
- lint y build pasan