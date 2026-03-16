# Feature 015 - Content architecture and editorial matrix

## Objetivo

Ordenar la arquitectura editorial del portfolio antes de seguir tocando UI o copy final, para que cada ruta tenga un trabajo claro, el mensaje principal del perfil se lea con rapidez y se eliminen repeticiones que hoy diluyen impacto.

## Alcance

### Entra en esta feature
- definir relato principal y relato secundario del portfolio
- definir la idea madre de cada ruta principal
- mapear claims actuales del sitio y detectar solapamientos
- construir una matriz editorial `claim -> dónde vive -> evidencia -> acción`
- decidir qué mantener, mover, borrar o reescribir
- identificar headers genéricos que conviene renombrar
- documentar reglas editoriales para futuras feats de copy y cleanup
- dejar priorizado el backlog de siguientes ajustes de contenido

### No entra en esta feature
- implementación de copy final página por página
- cleanup de Contact y CV
- rediseño visual de CTA o botones
- ajuste del hero de Home
- unificación de case studies entre proyectos
- reorganización de Skills
- cambios en layout, motion o navegación
- nuevas secciones
- dependencias nuevas

## Problema que resuelve

Hoy el portfolio ya tiene una base sólida de contenido, pero varias rutas vuelven a comunicar ideas muy parecidas con distintos phrasing: perfil técnico híbrido, automatización end-to-end, criterio operativo, mejora continua, base moderna, foco en producto.

Eso genera consistencia, pero también pérdida de jerarquía. El sitio comunica mucho, aunque no siempre distribuye bien qué debe decir cada página y qué evidencia corresponde a cada claim.

## Requisitos funcionales

1. El portfolio debe dejar explícito un relato principal y uno secundario.
2. Cada ruta principal debe tener una única idea madre.
3. Los claims relevantes del sitio deben quedar inventariados.
4. Cada claim debe vincularse con una evidencia concreta o una ruta donde se demuestra.
5. Cada claim debe tener una acción editorial definida: mantener, mover, borrar o reescribir.
6. Deben identificarse headers genéricos que hoy no comunican suficiente.
7. Debe quedar claro qué ajustes pertenecen a feats posteriores.

## Requisitos no funcionales

- no tocar código de implementación en esta feature
- no abrir una reescritura masiva sin mapa previo
- mantener coherencia con `docs/PROJECT_CONSTITUTION.md`
- priorizar escaneabilidad y jerarquía antes que cantidad de texto
- dejar un sistema editorial simple, usable y mantenible
- evitar ambigüedades entre mensaje principal, apoyo y evidencia

## Resolución esperada

- definir contrato editorial por ruta:
  - Home
  - About
  - Projects
  - Experience
  - Skills
  - Contact
  - CV
- dejar documentado el relato principal y el secundario
- producir una matriz editorial completa
- listar repeticiones reales del sitio
- listar headers a renombrar
- separar claramente lo que se resuelve en próximas feats:
  - cleanup Contact/CV
  - refinement de Home
  - cleanup About/Experience
  - unificación de case studies

## Criterio de done

- existe un relato principal y un relato secundario explícitos
- cada ruta principal tiene una idea madre definida
- la matriz editorial está completa
- las repeticiones principales están identificadas
- los headers genéricos a revisar están listados
- el alcance de futuras feats queda separado sin mezcla
- `spec.md`, `plan.md`, `tasks.md` y `verification.md` quedan alineados