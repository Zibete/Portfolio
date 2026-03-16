# feat(home): cerrar feature 012-home-card-language-unification

Base: `master`
Rama: `feat/012-home-card-language-unification`

## Que se cambio
- `specs/features/012-home-card-language-unification/spec.md`, `plan.md`, `tasks.md` y `verification.md`
  - se alineo la documentacion con el alcance final real de la feature en Home
  - el resultado final ahora cubre unificacion visual de cards, lift consistente, correccion de alineacion, ritmo vertical entre bloques y compactacion del hero con mini cards integradas
- `src/app/page.tsx`
  - se llevo `Prueba principal` a una surface real y coherente con el sistema de Home
  - se unifico la lectura de surfaces principales y subcards
  - se corrigio la alineacion entre card grande izquierda y stack derecha
  - se ajusto el ritmo vertical entre `Proyecto principal` y `Senales de credibilidad`
- `src/components/sections/featured-project.tsx`
  - se alineo la composicion desktop entre la card principal y las 3 cards derechas
  - se uso el mismo spacing vertical de referencia entre bloques principales de Home
- `src/components/sections/home-hero.tsx`
  - se compacto el fold inicial reduciendo aire arriba y abajo del hero
  - las 3 mini cards derechas pasaron a vivir dentro de la misma surface principal
  - se actualizo el copy de mini cards a `Rol objetivo`, `Perfil` y `Enfoque`
- `src/components/sections/stack-marquee.tsx`
  - se acerco visualmente la marquee al hero con una separacion mas intencional
- `src/content/site/site-config.ts`
  - el hero dejo de mostrar `supportingNote` para acompanar la compactacion final del fold

## Cambios locales incluidos
- `src/content/site/site-config.ts`
  - se normalizo `profileImagePath` para apuntar a `MatiasPeralta.JPG`, cambio local preexistente incluido en esta rama
- `public/images/profile/Matías_Peralta.JPG`
  - se elimino el asset anterior que quedaba duplicado frente al archivo nuevo ya presente en la rama

## Por que
- Home ya tenia una base visual consistente, pero todavia mezclaba dos lenguajes en el hero y entre algunos bloques principales
- la columna izquierda y las stacks derechas no cerraban bien como una sola composicion en desktop
- el fold inicial tenia aire muerto y la marquee quedaba demasiado aislada para una primera impresion fuerte
- el cierre final de 012 necesitaba dejar documentado el alcance real implementado, no solo la idea inicial

## Validacion local
```bash
npm run lint
npm run build
```

## Validacion manual
- [ ] revisar `Home` en desktop y confirmar que hero, `Prueba principal`, `Proyecto principal` y `Senales de credibilidad` mantienen un ritmo vertical consistente
- [ ] confirmar que las mini cards del hero viven dentro de la misma pieza principal y que el bloque izquierdo mantiene el peso visual
- [ ] revisar hover/lift en hero, `Prueba principal`, `Proyecto principal`, credibilidad y CTA de CV
- [ ] revisar tablet/mobile y confirmar stacking natural sin cortes raros
- [ ] revisar light/dark y confirmar que no se rompio legibilidad

## Fuera de alcance
- header y `site-header.tsx`
- rutas fuera de `Home`
- refactor global del sistema de cards
- dependencias nuevas

## Commits incluidos
- `78692` `feat: add profile image for Matias Peralta`
- `5ddc6` `feat: add SKILL.md for feature-close and feature-open with detailed instructions and objectives`
- `c2310` `feat: add initial plan, spec, tasks, and verification for Home card language unification`
- implementacion final de Home: cambios locales sin commit adicional al momento de este cierre
