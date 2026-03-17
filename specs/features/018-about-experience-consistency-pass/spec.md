# FEAT 018 — About / Experience consistency pass

## Objetivo

Unificar el discurso entre Home, About, Experience, Skills y Projects para que el portfolio se lea como un solo relato: perfil híbrido, experiencia real aplicada a soluciones técnicas, evidencia visible en Android y foco en automatización/mejora de procesos.

## Problema

Después del refinement de Home, varias rutas todavía conservaban partes del wording anterior:
- repetían ideas ya instaladas en Home
- usaban headers o frases demasiado genéricas
- distribuían de forma irregular el relato principal y secundario
- dejaban parte del “sobre mí” demasiado abstracto o impersonal
- en Projects seguía apareciendo wording meta/editorial poco alineado con el tono final

## Resultado esperado

- About más humano, más natural y más alineado con el mensaje actual de Home
- Experience más concreto, con mejor uso de métricas y menos repetición de conceptos
- Skills más coherente con el resto del portfolio y menos meta
- Projects mejor alineado con el nuevo posicionamiento narrativo
- menos slogans repetidos entre pantallas
- mejor continuidad narrativa entre:
  - Home → propuesta de valor
  - About → recorrido y perfil
  - Experience → evidencia operativa y resultados
  - Skills → base técnica aplicada
  - Projects → prueba técnica y casos de estudio

## Alcance

### Incluye
- refinement editorial de la página About
- incorporación de un bloque breve más personal/profesional dentro de About
- ajuste de headers, bajadas y cards en About para alinearlas con Home
- consistency pass de Experience
- refuerzo de métricas y claridad en Experience
- limpieza de frases repetidas entre About y Experience
- ajuste editorial de Skills
- alineación narrativa de Projects
- fix de configuración MDX para evitar render del frontmatter en páginas de detalle

### No incluye
- cambios estructurales grandes de layout
- rediseño visual mayor
- reescritura completa de Contact
- cambios profundos de arquitectura de contenido fuera del fix mínimo de MDX
- nuevas features visuales o animaciones

## Criterios editoriales

- mantener visible “Android” sin perder el diferencial híbrido
- evitar meta discurso sobre la estructura del portfolio
- reducir frases que suenen a slogan intercambiable
- reforzar experiencia real, impacto medible y contexto operativo
- hacer que “Sobre mí” suene más humano sin perder tono profesional
- mantener tono recruiter-friendly, directo y natural