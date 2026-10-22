# feat(layout): mejorar composición editorial del portfolio

Base: `feat/035-layout-density`
Rama: `feat/036-editorial-composition`

## Qué se cambió
- Evidencia complementaria única ahora usa ancho completo y un layout de síntesis + fuentes verificables.
- About muestra hitos desde entradas MDX y reorganiza tarjetas para evitar columnas estrechas.
- Experience muestra una timeline de roles y un bloque horizontal de métricas históricas con su aclaración.
- Projects presenta un mayor contraste jerárquico para el caso destacado.

## Por qué
Resolver espacios vacíos y densidad de información identificados en las capturas sin sumar contenido ficticio ni modificar interacciones.

## Commits incluidos
- `feat(home): use full-width editorial layout for a single evidence case`
- `feat(about): present career milestones with a readable editorial grid`
- `feat(experience): replace narrow aside with full-width career timeline`
- `style(projects): distinguish featured work from supporting cases`
- `style(evidence): tidy responsive single-case markup`
- `docs(036): define editorial composition and validation`

## Dependencias y revisión
Este es un PR apilado sobre el PR #32 (035), que debe fusionarse primero. Luego retargetear este PR a `master`.

## Validación
- Review estático y Vercel sobre el HEAD final.
- Preview en 375/768/1440 px, tema claro/oscuro y navegación por teclado: pendiente de inspección manual.

## Fuera de alcance
- Paleta (037), Trace interactivo (038), proyectos externos, dependencias y nuevos datos.
