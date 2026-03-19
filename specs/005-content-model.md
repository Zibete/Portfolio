# 005 Modelo de contenido

## Modelo de authoring

El contenido debe mantenerse file-based y local al repositorio.

## Proyectos

Directorio: `src/content/projects/`

Reglas:

- un archivo `.mdx` por proyecto
- el nombre del archivo se convierte en el slug
- el contenido debe priorizar contexto, decisiones y resultados
- evitar introducciones largas de relleno
- usar `featured` para el caso destacado
- usar `order` para definir el orden publico del listado

## Experiencia

Directorio: `src/content/experience/`

Reglas:

- un archivo `.mdx` por entrada de experiencia
- escribir primero para escaneabilidad
- enfatizar impacto, alcance y colaboracion
- usar `order` cuando haga falta un orden explicito y mantenible

## Copy del sitio

Directorio: `src/content/site/`

Reglas:

- mantener centralizado el copy compartido
- evitar hardcodear narrativa en muchos componentes

## Reglas iniciales de escritura

- el idioma inicial es espanol
- el mensaje debe sostener equilibrio entre profundidad tecnica y valor de negocio
- los placeholders deben ser explicitos cuando el contenido siga pendiente
