# Plan - Feature 015 Content architecture and editorial matrix

## Estrategia

Antes de seguir puliendo páginas, hay que ordenar el sistema de mensaje del portfolio.

La secuencia correcta para esta iteración es:
1. auditar el contenido actual
2. definir el relato central del perfil
3. asignar un trabajo específico a cada ruta
4. construir la matriz editorial
5. usar ese mapa para abrir feats posteriores con menos ruido y menos retrabajo

La feature no debe tocar UI ni intentar cerrar copy final. Debe dejar un marco editorial claro para que las próximas decisiones de contenido sean más precisas y consistentes.

## Ruta implementada

- relevar el contenido actual del sitio y sus fuentes
- detectar claims repetidos o mal distribuidos
- fijar relato principal y relato secundario
- definir idea madre por página
- construir la matriz `claim -> dónde vive -> evidencia -> acción`
- identificar headers a renombrar
- separar backlog en feats posteriores

## Fases

### Fase 1 - Auditoría de contenido actual
- revisar Home, About, Projects, Experience, Skills, Contact y CV
- revisar fuentes de contenido shared y contenido MDX
- listar claims principales del portfolio
- detectar repeticiones, redundancias y zonas difusas

### Fase 2 - Definición del marco narrativo
- definir relato principal del portfolio
- definir relato secundario
- validar que ambos convivan sin competir
- bajar esos relatos a una regla editorial usable

### Fase 3 - Contrato por ruta
- asignar idea madre a cada página principal
- documentar qué debe comunicar cada ruta
- documentar qué no debe volver a explicar cada ruta
- priorizar escaneabilidad y claridad

### Fase 4 - Matriz editorial
- construir matriz por claim
- vincular claim con evidencia o ruta de respaldo
- decidir acción editorial:
  - mantener
  - mover
  - borrar
  - reescribir

### Fase 5 - Priorización de siguientes feats
- separar cleanup Contact/CV
- separar refinement de Home
- separar cleanup About/Experience
- separar unificación de case studies
- dejar backlog ordenado por impacto

### Fase 6 - Validación
- revisar consistencia entre los cuatro MDs
- revisar alineación con `docs/PROJECT_CONSTITUTION.md`
- validar que el alcance no se mezcle con implementación

## Archivos esperables a tocar

### En esta apertura
- `specs/features/015-content-architecture-and-editorial-matrix/spec.md`
- `specs/features/015-content-architecture-and-editorial-matrix/plan.md`
- `specs/features/015-content-architecture-and-editorial-matrix/tasks.md`
- `specs/features/015-content-architecture-and-editorial-matrix/verification.md`

### Probables en implementación posterior
- `src/content/site/site-config.ts`
- `src/content/site/profile-content.ts`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/app/experience/page.tsx`
- `src/app/skills/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/cv/page.tsx`
- `src/components/sections/featured-project.tsx`
- `src/content/projects/zibe.mdx`
- `src/content/projects/migrar-sap-portfolio.mdx`
- `src/content/experience/pan-american-energy-axion-ap.mdx`
- `src/content/experience/operations-supervision.mdx`

## Restricciones

- no implementar cambios visuales en esta feature
- no reescribir copy final todavía
- no mezclar Contact/CV cleanup acá
- no mezclar unificación de proyectos/case studies acá
- no reorganizar Skills en esta feature
- no tocar motion, layout ni navegación
- no agregar dependencias nuevas
- mantener el foco en arquitectura editorial, no en polish visual

## Resultado esperado

Al finalizar, el portfolio debe tener un mapa editorial claro y accionable: qué mensaje principal vende, qué mensaje secundario apoya, qué debe comunicar cada ruta y qué texto actual sobra, compite o conviene mover.

La salida de esta feature debe destrabar las próximas feats de contenido con menos ambigüedad y menos retrabajo.