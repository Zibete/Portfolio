# Feature 014 - Final visual polish

## Objetivo

Cerrar el polish visual del sitio con una capa final de consistencia interactiva: aclarado sutil de surfaces hoverables, realce suave de tags al hover y sistema global de tags con ícono en todas las páginas donde existan tags visibles.

## Alcance

### Entra en esta feature
- aclarar levemente el fondo de las `interactive-card` al hover
- unificar el hover visual de todos los tags/chips del sitio
- agregar ícono a todos los tags visibles del sitio, incluyendo Skills
- extraer el mapping visual de tags a una fuente shared reutilizable
- crear un componente shared para renderizar tags con icono + estilo consistente
- aplicar el sistema en Home, Projects, detalle de proyecto, Skills, Experience y cualquier otra superficie actual con tags visibles
- mantener consistencia en light y dark mode

### No entra en esta feature
- rediseño de layout
- cambios de copy
- nuevas secciones
- cambios en header o navegación
- cambios en motion de entrada
- cambios en velocidad del marquee
- dependencias nuevas
- refactors grandes fuera del sistema de tags y hover polish

## Problema que resuelve

Hoy el sitio tiene una base de hover para cards y chips, pero no termina de cerrar como sistema visual único: las cards elevan sin aclarar suficientemente la surface, los tags no comparten un comportamiento homogéneo, y los íconos de herramientas siguen concentrados sólo en el marquee de Home en vez de vivir como contrato visual global.

## Requisitos funcionales

1. Las cards hoverables deben aclarar sutilmente su fondo al hover.
2. Todos los tags visibles del sitio deben mostrar ícono.
3. Todos los tags visibles del sitio deben compartir el mismo hover visual.
4. Skills debe usar el mismo sistema de tags con ícono.
5. El sistema debe reutilizar una fuente shared para mapping visual de tags.
6. El resultado debe seguir siendo sobrio, recruiter-friendly y consistente con el lenguaje actual.

## Requisitos no funcionales

- diff mínimo
- sin dependencias nuevas
- buena mantenibilidad
- fallback razonable para tags no estrictamente tecnológicos
- sin side effects visuales innecesarios
- respetar reduced motion
- no duplicar mappings locales de íconos

## Resolución esperada

- ajustar `interactive-card` para sumar aclarado leve de background al hover
- ajustar `interactive-chip` para sumar glow/realce sutil y consistente
- crear un componente shared para tags
- mover el sistema de íconos/accentos desde `stack-marquee` a un módulo shared
- reemplazar renderizados locales de tags por el nuevo contrato visual
- dejar el sitio con un único sistema de tags reutilizable

## Criterio de done

- las cards aclaran su fondo al hover de forma sutil
- todos los tags visibles del sitio muestran ícono
- todos los tags visibles del sitio comparten el mismo hover
- `stack-marquee` deja de tener mapping local de íconos
- Skills usa el mismo sistema shared que el resto
- light/dark siguen correctos
- `npm run lint` y `npm run build` pasan