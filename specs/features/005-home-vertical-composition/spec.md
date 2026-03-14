# Feature 005 — Composición vertical de Home

## Objetivo

Reorganizar la Home como una narrativa vertical más clara, moderna y persuasiva, para que el portfolio se sienta más cercano a un producto tech terminado y no solo a una sucesión de bloques correctos.

La feature debe:
- ordenar mejor el recorrido visual de la Home
- reforzar la narrativa entre identidad, credenciales y proyecto principal
- mejorar la transición entre secciones
- mantener foco en conversión profesional
- conservar una implementación simple, mantenible y coherente con las features anteriores

## Contexto

El portfolio ya cuenta con:
- base visual refinada
- hero con identidad más fuerte
- stack marquee
- proyecto principal real (ZIBE)
- Home moderna en progreso

Ahora necesitamos que la Home no solo tenga bloques buenos por separado, sino que funcione como una landing vertical coherente y con mejor ritmo.

## Problema que resuelve esta feature

Hoy la Home ya tiene piezas valiosas, pero todavía puede sentirse como:
- hero + marquee + proyecto destacado
- bloques correctos pero no del todo orquestados como una sola historia
- una landing con menos intención de recorrido de la que podría tener

Esto afecta:
- la primera lectura del sitio
- la percepción de madurez del producto
- la claridad del mensaje profesional

## Alcance

### Entra en esta feature

- reorganizar la estructura vertical de la Home
- ajustar spacing, agrupaciones y transiciones entre bloques
- definir mejor la secuencia de lectura
- mejorar el equilibrio entre hero, marquee, proyecto principal y CTA
- sumar uno o más bloques breves de credibilidad si realmente ayudan al recorrido
- hacer ajustes mínimos en componentes existentes para que la Home se lea como una landing unificada

### No entra en esta feature

- rediseño completo de otras rutas
- cargar nuevos proyectos
- reescritura profunda del contenido global
- animaciones complejas de scroll
- nuevas dependencias pesadas
- una sección completa de Experience
- una sección completa de Skills
- cambios en Contact, CV o Experience
- nuevas integraciones de datos

## Narrativa objetivo de la Home

La Home debería leerse, de arriba hacia abajo, más o menos así:

1. Identidad profesional clara
2. Señales rápidas de stack/credenciales
3. Prueba principal: ZIBE
4. Señales complementarias de credibilidad o foco profesional
5. CTA principal al CV

La implementación puede ajustar esta secuencia si encuentra una mejor variante dentro del mismo espíritu.

## Entregables visibles

- Home con mejor secuencia vertical
- transiciones más limpias entre bloques
- mejor equilibrio entre secciones
- CTA principal mejor ubicado en el recorrido
- sensación general de landing más madura

## Criterios de aceptación

- la Home se siente como una narrativa vertical, no como bloques aislados
- el recorrido visual mejora
- el proyecto principal gana contexto y peso dentro de la landing
- la página sigue siendo escaneable
- no se vuelve larga o pesada innecesariamente
- dark mode sigue siendo fuerte
- light mode sigue limpio
- lint y build deben pasar
- no se invade el alcance de futuras features ajenas

## Dependencias

Esta feature depende de:
- `docs/PROJECT_CONSTITUTION.md`
- `AGENTS.md`
- `specs/001-product-vision.md`
- `specs/002-information-architecture.md`
- `specs/003-design-system.md`
- `specs/006-mvp-scope.md`
- `specs/features/002-home-visual-language/spec.md`
- `specs/features/003-hero-identity/spec.md`
- `specs/features/004-stack-marquee/spec.md`

## Riesgos / decisiones abiertas

- cuánto sumar en credibilidad sin abrir nuevas secciones grandes
- cómo mejorar recorrido sin sobrecargar la Home
- cómo ubicar el CTA al CV para maximizar utilidad sin sonar forzado