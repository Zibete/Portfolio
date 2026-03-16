# Plan - Feature 015 Content architecture and editorial matrix

## Estrategia

Antes de seguir puliendo páginas, hay que ordenar el sistema de mensaje del portfolio.

La secuencia correcta para esta iteración es:
1. auditar el contenido real que ya vive en `site-config`, `profile-content`, rutas y MDX
2. fijar relato principal y relato secundario
3. asignar un trabajo específico a cada ruta
4. construir la matriz editorial
5. separar el backlog posterior sin mezclar implementación

La feature no debe tocar UI ni intentar cerrar copy final. Debe dejar un marco editorial claro para que las próximas decisiones de contenido sean más precisas y consistentes.

## Hallazgos que ordenan la iteración

- `Home` concentra demasiado trabajo editorial: pitch, prueba principal, credibilidad y síntesis.
- `About` y `CV` hoy compiten por el mismo lugar de resumen del perfil.
- `Experience` ya tiene la mejor base para sostener criterio operativo y contexto real.
- `Skills` aporta orden de dominios, pero todavía usa demasiado espacio para recontar el posicionamiento.
- `Contact` debería cerrar; hoy todavía vuelve a vender.
- `Projects` y los MDX ya son la capa de evidencia más sólida del sitio.

## Marco narrativo a fijar en esta iteración

- Relato principal:
  `Perfil técnico híbrido que combina Android moderno y automatización end-to-end para convertir problemas reales en soluciones claras, mantenibles y con impacto operativo.`
- Relato secundario:
  `Ese diferencial se sostiene en experiencia operativa real, criterio funcional y mejora continua; no es solo stack, sino capacidad para entender procesos, validarlos y hacerlos sostenibles.`

## Contrato editorial a dejar documentado

- `Home`: vender fit rápido y derivar a la mejor evidencia.
- `About`: explicar de dónde sale el perfil híbrido y cómo trabaja.
- `Projects`: probar claims con casos concretos.
- `Experience`: sostener criterio operativo con contexto real, métricas y recorrido.
- `Skills`: ordenar capacidades por dominio aplicado.
- `Contact`: cerrar con canales y contexto mínimo.
- `CV`: sintetizar el perfil para compartirlo rápido.

## Matriz editorial a producir

La matriz de esta feature debe cubrir al menos estos claim clusters:

- perfil técnico híbrido
- Android moderno con base visible
- automatización end-to-end con impacto real
- criterio operativo y procesos complejos
- equilibrio técnico y negocio
- modernización incremental, mantenibilidad y calidad
- datos, validaciones y trazabilidad
- roles objetivo y disponibilidad
- documentación, testing y colaboración

## Fases

### Fase 1 - Auditoría de contenido actual
- revisar `Home`, `About`, `Projects`, `Experience`, `Skills`, `Contact` y `CV`
- revisar `src/content/site/site-config.ts`
- revisar `src/content/site/profile-content.ts`
- revisar MDX de proyectos y experiencia como capa de evidencia
- listar claims principales y detectar repeticiones reales

### Fase 2 - Definición del marco narrativo
- fijar relato principal
- fijar relato secundario
- documentar la regla editorial principal/apoyo/evidencia

### Fase 3 - Contrato por ruta
- asignar idea madre a cada página principal
- documentar qué debe comunicar cada ruta
- documentar qué no debe volver a explicar cada ruta

### Fase 4 - Matriz editorial y headers
- construir matriz `claim -> dónde vive -> evidencia -> acción`
- definir si cada claim se mantiene, mueve, borra o reescribe
- listar headers genéricos y dirección de renombre

### Fase 5 - Separación de backlog
- separar `Home messaging refinement`
- separar `About/Experience cleanup`
- separar `Contact/CV cleanup`
- separar `Projects case study unification`

### Fase 6 - Validación documental
- revisar consistencia entre los cuatro MDs
- revisar alineación con `docs/PROJECT_CONSTITUTION.md`
- validar que el alcance no se mezcle con implementación
- validar que solo cambie `specs/features/015-content-architecture-and-editorial-matrix/`

## Archivos esperables a tocar

### En esta iteración documental
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
- `src/components/sections/home-hero.tsx`
- `src/components/sections/featured-project.tsx`
- `src/content/projects/zibe.mdx`
- `src/content/projects/migrar-sap-portfolio.mdx`
- `src/content/experience/pan-american-energy-axion-ap.mdx`
- `src/content/experience/operations-supervision.mdx`

## Restricciones

- no implementar cambios visuales en esta feature
- no reescribir copy final todavía
- no mezclar `Contact/CV cleanup` acá
- no mezclar unificación de proyectos/case studies acá
- no reorganizar `Skills` en esta feature
- no tocar motion, layout ni navegación
- no agregar dependencias nuevas
- mantener el foco en arquitectura editorial, no en polish visual

## Resultado esperado

Al finalizar, el portfolio debe tener un mapa editorial claro y accionable: qué mensaje principal vende, qué mensaje secundario lo respalda, qué debe comunicar cada ruta, qué texto actual sobra, qué claims conviene mover y qué backlog queda para feats posteriores.

La salida de esta feature debe destrabar las próximas feats de contenido con menos ambigüedad y menos retrabajo.
