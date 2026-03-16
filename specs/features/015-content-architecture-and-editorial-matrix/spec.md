# Feature 015 - Content architecture and editorial matrix

## Objetivo

Ordenar la arquitectura editorial del portfolio antes de seguir tocando UI o copy final, para que cada ruta tenga un trabajo claro, el mensaje principal del perfil se lea con rapidez y se eliminen repeticiones que hoy diluyen impacto.

## Alcance

### Entra en esta feature
- auditar el contenido real en `src/content/site/site-config.ts`, `src/content/site/profile-content.ts`, rutas principales y MDX de proyectos/experience
- definir relato principal y relato secundario del portfolio
- definir la idea madre de cada ruta principal
- mapear claims actuales del sitio y detectar solapamientos
- construir una matriz editorial `claim -> dónde vive -> evidencia -> acción`
- decidir qué mantener, mover, borrar o reescribir
- identificar headers genéricos que conviene renombrar
- documentar reglas editoriales para futuras feats de copy y cleanup
- dejar priorizado el backlog de siguientes ajustes de contenido
- revisar Contact y CV solo para auditar su función editorial actual

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

Hoy el portfolio ya tiene una base sólida de contenido, pero varias rutas vuelven a comunicar ideas muy parecidas con distinto phrasing: perfil técnico híbrido, automatización end-to-end, criterio operativo, mejora continua, base moderna, foco en producto.

Eso genera consistencia, pero también pérdida de jerarquía. El sitio comunica mucho, aunque no siempre distribuye bien qué debe decir cada página y qué evidencia corresponde a cada claim.

## Auditoría base del contenido actual

- `Home` hoy vende a la vez posicionamiento, prueba principal, credibilidad general y anticipo de CV. Tiene buena jerarquía visual, pero concentra demasiadas variantes del mismo pitch.
- `About` vuelve a presentar el perfil completo cuando debería explicar de dónde sale la combinación entre Android, automatización y criterio operativo.
- `Projects` tiene el contrato más claro: muestra evidencia concreta en formato caso de estudio. El riesgo es que otras rutas le roben trabajo repitiendo claims técnicos sin bajar a prueba.
- `Experience` ya concentra evidencia útil de contexto real, métricas y criterio operativo. Compite con `About` y `CV` cuando vuelve a reformular el posicionamiento general.
- `Skills` agrupa capacidades correctamente, pero su intro todavía repite demasiada identidad general en lugar de quedarse en dominios y herramientas.
- `Contact` y `CV` hoy siguen vendiendo el perfil en vez de cerrar: ambos repiten target roles, diferencial y síntesis general.
- Los MDX de `Projects` y `Experience` ya contienen la evidencia más fuerte del sitio. El problema principal no es falta de contenido, sino mala distribución del mensaje.

## Marco narrativo definido

### Relato principal

`Perfil técnico híbrido que combina Android moderno y automatización end-to-end para convertir problemas reales en soluciones claras, mantenibles y con impacto operativo.`

### Relato secundario

`Ese diferencial se sostiene en experiencia operativa real, criterio funcional y mejora continua; no es solo stack, sino capacidad para entender procesos, validarlos y hacerlos sostenibles.`

### Regla editorial

- el relato principal debe vender el fit profesional en `Home` y quedar respaldado por una síntesis breve en `About` y `CV`
- el relato secundario debe aparecer como sostén y evidencia, sobre todo en `Experience`, `Skills` y los MDX
- cada ruta debe sumar jerarquía o prueba; si una sección no agrega contexto ni evidencia nueva, está compitiendo con otra página

## Contrato editorial por ruta

| Ruta | Idea madre | Debe hacer | No debe volver a explicar |
| --- | --- | --- | --- |
| `Home` | Dar una lectura rápida del fit profesional y derivar a la mejor evidencia. | presentar el relato principal, mostrar que hay prueba concreta y orientar hacia `Projects` o `CV` | trayectoria completa, inventario de skills, cierre de contacto largo |
| `About` | Explicar cómo se formó el perfil híbrido y cómo trabaja. | conectar Android, automatización, operación y forma de trabajo en una narrativa coherente | vender otra vez todos los proyectos o repetir target roles |
| `Projects` | Probar claims con casos concretos. | mostrar evidencia técnica y de producto con pocos casos bien explicados | resumir toda la identidad del portfolio |
| `Experience` | Justificar el criterio operativo y el contexto real que sostiene el perfil. | mostrar volumen, contexto, mejora operativa, coordinación y trazabilidad | listar stack como si fuera una página de habilidades |
| `Skills` | Ordenar capacidades por dominio y lenguaje de trabajo. | mostrar con qué herramientas y dominios se ejecuta el relato principal | funcionar como mini `About` o mini `CV` |
| `Contact` | Reducir fricción para iniciar una conversación. | concentrar canales y una mención breve del fit actual | reabrir el pitch completo del portfolio |
| `CV` | Sintetizar el perfil para compartirlo rápido. | dejar una lectura portable, breve y derivable a proyectos/contacto | agregar narrativa nueva o duplicar `Contact` |

### Rutas de evidencia

- `Projects/[slug]` y sus MDX deben ser la capa de prueba del trabajo técnico y de producto.
- los MDX de `Experience` deben ser la capa de prueba del criterio operativo, los procesos reales y la mejora aplicada.

## Matriz editorial

| Claim | Dónde vive mejor | Evidencia concreta | Acción editorial |
| --- | --- | --- | --- |
| Perfil técnico híbrido entre Android, automatización y mejora operativa | `Home` + `About` | hero de `Home`, intro de `About`, snapshots de `CV` | mantener |
| Android moderno con base visible en repo público | teaser de `Home` + `Projects/ZIBE` | `site-config.ts`, `featured-project.tsx`, `zibe.mdx` | mover |
| Automatización end-to-end con impacto operativo real | `Projects/Migrar SAP` + `Experience` | `migrar-sap-portfolio.mdx`, `pan-american-energy-axion-ap.mdx` | mantener |
| Criterio operativo real sobre procesos complejos | `Experience` + apoyo corto en `About` | intro y métricas de `Experience`, MDX de experiencia | mover |
| Equilibrio técnico y negocio/producto-operación | `Home` + `About` | bloque de credibilidad en `Home`, principios de `About` | reescribir |
| Modernización incremental, mantenibilidad y calidad pública | `Home` + `Projects/ZIBE` | Home project lead, `zibe.mdx`, señales de GitHub/CI | mantener |
| Datos, validaciones y trazabilidad como parte del diferencial | `Experience` + `Skills` + `Migrar SAP` | grupo de datos en `Skills`, flujo y testing en `Migrar SAP`, foco AP | mover |
| Roles objetivo y disponibilidad para conversar | badge y CTA de `Home` + `Contact` + CTA de `CV` | `hero.statusBadge`, `contact.methods`, descarga de CV | reescribir |
| Documentación, testing y colaboración como forma de trabajo | `About` + `Skills` + evidencia en `ZIBE` | principios de `About`, grupo de calidad en `Skills`, sección de calidad técnica en `zibe.mdx` | mantener |

## Repeticiones reales detectadas

- `Home`, `About` y `CV` abren con variaciones del mismo pitch general sobre perfil técnico híbrido.
- `Home`, `About`, `Skills` y `Contact` vuelven a la combinación Android + automatización sin sumar evidencia nueva.
- `About`, `Experience` y `CV` repiten criterio operativo, procesos complejos y mejora sostenible con poca redistribución funcional.
- `Home`, `CV` y `Contact` repiten roles objetivo y disponibilidad cuando deberían repartirse entre apertura, síntesis y cierre.
- `Projects` y los MDX ya concentran la evidencia fuerte; cuando `About`, `CV` o `Contact` repiten demasiado detalle técnico, compiten con esa prueba en lugar de derivar hacia ella.

## Headers genéricos a renombrar

| Header actual | Contexto | Dirección de renombre |
| --- | --- | --- |
| `Prueba principal` | `Home` | nombrar la sección como evidencia principal del perfil |
| `Señales de credibilidad` | `Home` | explicitar qué señales prueban el criterio profesional |
| `Siguiente paso` | `Home` | dejar claro que el CTA lleva a una síntesis portable del perfil |
| `Diferencial` | `About` | explicar qué combinación hace distinto al perfil |
| `Forma de trabajo` | `About` | nombrar cómo trabaja y por qué eso importa |
| `Experiencia relevante` | `Experience` | explicitar qué tramo de experiencia sostiene el criterio operativo |
| `Capacidades consolidadas` | `Experience` | bajar el aprendizaje repetible que deja esa experiencia |
| `Dominios principales` | `Skills` | hablar de capacidades aplicadas, no de categorías genéricas |
| `Vías directas` | `Contact` | priorizar contacto concreto y simple |
| `Áreas de aporte` | `Contact` | dejar claro para qué conversaciones conviene escribir |
| `Snapshot` | `CV` | expresar que es una lectura rápida del perfil |
| `Resumen profesional` | `CV` | diferenciar síntesis portable de pitch repetido |
| `Accesos` / `Accesos principales` | `CV` | nombrar recursos para seguir validando el perfil |

## Backlog separado para feats posteriores

- `Home messaging refinement`: ajustar hero, bloque de credibilidad y CTA de CV usando el relato principal/secundario ya fijado.
- `About/Experience cleanup`: redistribuir la narrativa operativa para que `About` explique origen/forma de trabajo y `Experience` pruebe contexto real.
- `Contact/CV cleanup`: transformar ambas rutas en cierre y síntesis, sin seguir compitiendo con el pitch de `Home`.
- `Projects case study unification`: revisar estructura común de listados y case studies de proyectos, fuera de esta feature.

## Requisitos funcionales

1. El portfolio debe dejar explícito un relato principal y uno secundario.
2. Cada ruta principal debe tener una única idea madre.
3. Los claims relevantes del sitio deben quedar inventariados.
4. Cada claim debe vincularse con una evidencia concreta o una ruta donde se demuestra.
5. Cada claim debe tener una acción editorial definida: mantener, mover, borrar o reescribir.
6. Deben identificarse headers genéricos que hoy no comunican suficiente.
7. Debe quedar claro qué ajustes pertenecen a feats posteriores.
8. Deben quedar explicitadas las repeticiones reales entre `Home`, `About`, `Projects`, `Experience`, `Skills`, `Contact` y `CV`.

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
