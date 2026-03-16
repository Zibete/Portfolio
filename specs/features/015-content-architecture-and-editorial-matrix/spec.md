# Feature 015 - Content architecture and editorial matrix

## Objetivo

Ordenar la arquitectura editorial del portfolio antes de seguir tocando UI o copy final, y dejar el copy no-MDX principal centralizado en `src/content/site/` para que cada ruta tenga un trabajo claro y editable sin depender de strings hardcodeados en renderers.

## Alcance

### Entra en esta feature
- definir relato principal y relato secundario del portfolio
- definir la idea madre de cada ruta principal
- mapear claims actuales del sitio y detectar solapamientos
- construir una matriz editorial `claim -> dónde vive -> evidencia -> acción`
- identificar headers genéricos que conviene renombrar
- centralizar en `src/content/site/` el copy no-MDX principal de:
  - Home
  - About
  - Experience
  - Skills
  - Contact
  - CV
  - footer
- mover a la capa de contenido headings, eyebrows, títulos, descripciones, labels de CTA, badges, cards de resumen del hero, títulos/descripciones de secciones y copy de cierre
- dejar páginas y componentes como renderers, no como fuente de verdad del texto
- agregar tipado mínimo local si hace falta para dejar clara y segura la capa de contenido

### No entra en esta feature
- reescritura de MDX de `src/content/projects/*`
- reescritura de MDX de `src/content/experience/*`
- cleanup editorial final de Contact y CV
- unificación de case studies entre proyectos
- cambios visuales, de layout, motion o navegación
- cambios en GitHub API, assets o lógica de datos
- dependencias nuevas

## Problema que resuelve

El portfolio ya tenía una base editorial clara, pero el contenido no-MDX principal estaba repartido entre `site-config.ts`, `profile-content.ts` y múltiples renderers con copy embebido. Eso dificultaba mantener el contrato editorial por ruta, hacía más costosa cualquier iteración de copy y dejaba partes del mensaje fuera de una capa editable única.

## Marco narrativo definido

### Relato principal

`Perfil técnico híbrido que combina Android moderno y automatización end-to-end para convertir problemas reales en soluciones claras, mantenibles y con impacto operativo.`

### Relato secundario

`Ese diferencial se sostiene en experiencia operativa real, criterio funcional y mejora continua; no es solo stack, sino capacidad para entender procesos, validarlos y hacerlos sostenibles.`

### Regla editorial

- `Home` vende el fit y deriva a evidencia
- `About` explica origen y forma de trabajo
- `Projects` y los MDX prueban claims
- `Experience` respalda criterio operativo
- `Skills` ordena capacidades aplicadas
- `Contact` y `CV` cierran, no reabren el pitch completo

## Contrato editorial por ruta

| Ruta | Idea madre | Debe hacer | No debe volver a explicar |
| --- | --- | --- | --- |
| `Home` | Dar una lectura rápida del fit profesional y derivar a la mejor evidencia. | presentar el relato principal, mostrar prueba concreta y orientar hacia `Projects` o `CV` | trayectoria completa, inventario de skills, cierre de contacto largo |
| `About` | Explicar cómo se formó el perfil híbrido y cómo trabaja. | conectar Android, automatización, operación y forma de trabajo | vender otra vez todos los proyectos o repetir target roles |
| `Projects` | Probar claims con casos concretos. | mostrar evidencia técnica y de producto | resumir toda la identidad del portfolio |
| `Experience` | Justificar el criterio operativo y el contexto real que sostiene el perfil. | mostrar volumen, contexto, mejora operativa y trazabilidad | listar stack como si fuera una página de habilidades |
| `Skills` | Ordenar capacidades por dominio y lenguaje de trabajo. | mostrar con qué herramientas y dominios se ejecuta el relato principal | funcionar como mini `About` o mini `CV` |
| `Contact` | Reducir fricción para iniciar una conversación. | concentrar canales y una mención breve del fit actual | reabrir el pitch completo del portfolio |
| `CV` | Sintetizar el perfil para compartirlo rápido. | dejar una lectura portable, breve y derivable | agregar narrativa nueva o duplicar `Contact` |

## Matriz editorial mínima

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

## Implementación resuelta en esta iteración

- `src/content/site/site-config.ts` concentra el contenido global, Home y footer
- `src/content/site/profile-content.ts` concentra el contenido editorial de About, Experience, Skills, Contact y CV
- `src/components/sections/home-hero.tsx` y `src/components/sections/featured-project.tsx` dejaron de tener copy editorial como source of truth
- `src/app/about/page.tsx`, `src/app/experience/page.tsx`, `src/app/skills/page.tsx`, `src/app/contact/page.tsx` y `src/app/cv/page.tsx` leen sus bloques desde la capa de contenido
- `src/types/site.ts` incorpora el tipado mínimo necesario para sostener la capa centralizada

## Requisitos funcionales

1. El portfolio debe dejar explícito un relato principal y uno secundario.
2. Cada ruta principal debe tener una idea madre clara.
3. Los claims relevantes del sitio deben quedar inventariados.
4. Debe existir una matriz `claim -> dónde vive -> evidencia -> acción`.
5. El contenido no-MDX principal debe vivir centralizado en `src/content/site/`.
6. No deben quedar textos editoriales relevantes hardcodeados en las páginas y componentes principales alcanzados por esta feature.
7. Home, About, Experience, Skills, Contact y CV deben leer desde esa capa.

## Requisitos no funcionales

- mantener coherencia con `docs/PROJECT_CONSTITUTION.md`
- priorizar escaneabilidad y jerarquía antes que cantidad de texto
- no introducir cambios visuales
- no tocar MDX, assets, GitHub API ni lógica de datos
- mantener diffs mínimos y responsabilidades claras entre `site-config.ts` y `profile-content.ts`

## Criterio de done

- existe un relato principal y un relato secundario explícitos
- la matriz editorial está documentada
- el copy no-MDX principal vive centralizado en `src/content/site/`
- los renderers principales no quedan como fuente de verdad del texto
- `npm run lint` y `npm run build` pasan
- `spec.md`, `plan.md`, `tasks.md` y `verification.md` quedan alineados con el resultado real
