# Tasks - Feature 015 Content architecture and editorial matrix

## T1. Auditar las fuentes reales de contenido
- revisar `src/content/site/site-config.ts`
- revisar `src/content/site/profile-content.ts`
- revisar `src/app/page.tsx`
- revisar `src/app/about/page.tsx`
- revisar `src/app/projects/page.tsx`
- revisar `src/app/experience/page.tsx`
- revisar `src/app/skills/page.tsx`
- revisar `src/app/contact/page.tsx`
- revisar `src/app/cv/page.tsx`
- revisar `src/app/projects/[slug]/page.tsx`
- revisar MDX de proyectos y experiencia para identificar evidencia ya existente

## T2. Fijar el marco narrativo
- dejar explícito el relato principal del portfolio
- dejar explícito el relato secundario
- documentar la regla editorial entre mensaje principal, apoyo y evidencia

## T3. Definir la idea madre por ruta
- `Home`: pitch rápido y derivación a evidencia
- `About`: origen del perfil híbrido y forma de trabajo
- `Projects`: prueba con casos concretos
- `Experience`: sostén del criterio operativo
- `Skills`: mapa de capacidades aplicadas
- `Contact`: cierre con fricción mínima
- `CV`: síntesis portable del perfil

## T4. Construir la matriz editorial mínima
- incluir `claim -> dónde vive -> evidencia -> acción`
- inventariar al menos estos claims:
  - perfil técnico híbrido
  - Android moderno con base visible
  - automatización end-to-end con impacto real
  - criterio operativo sobre procesos complejos
  - equilibrio técnico y negocio
  - modernización incremental y mantenibilidad
  - datos, validaciones y trazabilidad
  - roles objetivo y disponibilidad
  - documentación, testing y colaboración

## T5. Mapear repeticiones reales
- detectar solapamiento entre `Home`, `About` y `CV`
- detectar solapamiento entre `About`, `Experience` y `CV`
- detectar solapamiento entre `Home`, `Skills` y `Contact`
- dejar explícito cuándo una ruta compite con `Projects` o con los MDX de evidencia

## T6. Identificar headers genéricos a renombrar
- listar headers con baja carga semántica en `Home`
- listar headers con baja carga semántica en `About`
- listar headers con baja carga semántica en `Experience`
- listar headers con baja carga semántica en `Skills`
- listar headers con baja carga semántica en `Contact`
- listar headers con baja carga semántica en `CV`
- documentar dirección de renombre sin cerrar copy final

## T7. Separar backlog por feats
- `Home messaging refinement`
- `About/Experience cleanup`
- `Contact/CV cleanup`
- `Projects case study unification`

## T8. Validar coherencia documental y límites
- alinear `spec.md`, `plan.md`, `tasks.md` y `verification.md`
- revisar consistencia con `docs/PROJECT_CONSTITUTION.md`
- asegurar que esta feature siga siendo editorial y no de implementación
- asegurar que no se modifique ningún archivo fuera de `specs/features/015-content-architecture-and-editorial-matrix/`
