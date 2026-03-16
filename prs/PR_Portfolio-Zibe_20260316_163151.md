# feat: cerrar Feature 013 global card elevation system
Base: `master`
Rama: `013-global-card-elevation-system`

## Que se cambio

- Se unifico la elevacion al hover en Home, `/projects` e internas donde las cards reales estaban planas o con hover bloqueado por mezclar motion y hover en el mismo nodo.
- Se separo `motion-enter` y `motion-reveal` de la surface hoverable en los casos necesarios para que la elevacion vuelva a percibirse de forma consistente.
- Se promovieron a `interactive-card` las cards reales que debian elevar en Home e internas.
- Se mantuvo la excepcion del contenedor del carrusel de skills en Home, que sigue sin lift.
- Se dejo el shared en su version minima y defendible.
- `PageSection` y `PageAside` solo conservan la separacion entre wrapper con motion y surface hoverable.
- Se removio el experimento de variantes extra en `PageSection` porque no aportaba al resultado final.
- Se alinearon `spec.md`, `plan.md`, `tasks.md` y `verification.md` de 013 con la solucion implementada y el cleanup final.

## Por que

- El resultado final validado se sostiene con fixes locales sobre cards reales y con un ajuste shared minimo en `PageSection` y `PageAside`.
- Mantener variantes o props shared sin uso agregaba ruido al diff y hacia mas dificil defender la solucion del PR.

## Commits incluidos

- `f4fa5` `feat: add planning docs for global card elevation system`
- `eb9dd` `wip(cards): checkpoint feature 013 before cleanup`

## Validacion local

- [x] `npm run lint`
- [x] `npm run build`
- [x] busqueda tecnica sin matches de nodos que mezclen `interactive-card*` con `motion-enter` o `motion-reveal`
- [x] verificacion tecnica de que el contenedor del carrusel de skills en Home sigue sin `interactive-card`

## Validacion manual

- [x] existe checkpoint manual previo al cleanup sobre el comportamiento final de 013
- [x] revision final del diff para confirmar que el cleanup shared solo removio codigo experimental sin uso
- [x] revision final de la excepcion del carrusel de skills en Home

## Fuera de alcance

- cambios de copy o contenido
- cambios en otras features
- nuevos efectos visuales o tuning de sombras/gradientes
- refactors globales fuera del sistema de cards
