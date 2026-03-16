# Feature 013 - Global card elevation system

## Objetivo

Unificar la elevación al hover de las cards del sitio para que el sistema visual se sienta consistente en Home y en las páginas internas, manteniendo un feedback sobrio, premium y recruiter-friendly.

## Alcance

### Entra en esta feature
- hacer que las cards reales del sitio eleven al hover de forma consistente
- cubrir Home y páginas internas donde hoy ya exista lenguaje de card
- revisar cards principales y secundarias
- resolver correctamente la convivencia entre motion de entrada y hover elevation
- mantener el comportamiento consistente en light y dark mode

### No entra en esta feature
- rediseño de contenido
- cambios de copy
- cambios de layout no necesarios
- nuevas dependencias
- refactor global de componentes fuera del sistema de cards
- el contenedor del carrusel de skills en Home

## Excepción explícita
- no debe elevar al hover el contenedor del carrusel de skills en Home

## Problema que resuelve

Hoy el sitio mezcla cards que elevan, cards que no elevan y casos donde la elevación puede quedar anulada o degradada por compartir el mismo nodo con motion de entrada. Esta feature busca dejar una regla global clara y consistente.

## Requisitos funcionales

1. Las cards reales del sitio deben elevar al hover.
2. La elevación debe sentirse consistente entre Home e internas.
3. El contenedor del carrusel de skills en Home debe quedar excluido.
4. El sistema no debe romper motion existente.
5. El resultado debe mantenerse sobrio y vendible.

## Requisitos no funcionales

- diff mínimo
- sin dependencias nuevas
- buena mantenibilidad
- sin side effects visuales innecesarios
- respetar reduced motion

## Criterio de done

- las cards del sitio elevan al hover de forma consistente
- el contenedor del carrusel de skills en Home no eleva
- no quedan nodos hoverables peleando con `motion-enter` o `motion-reveal`
- light/dark siguen correctos
- `npm run lint` y `npm run build` pasan