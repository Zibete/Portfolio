# Tasks - Feature 014 Final visual polish

## T1. Auditar tags y chips del sitio
- revisar Home
- revisar Projects
- revisar detalle de proyecto
- revisar Skills
- revisar Experience
- revisar cualquier otra ruta con tags visibles
- detectar renderizados locales y mappings duplicados

## T2. Auditar hover de cards
- revisar `interactive-card`
- identificar si el aclarado actual de fondo es insuficiente
- definir un ajuste sutil compatible con light/dark

## T3. Crear contrato shared para tags
- crear componente shared para tag con ícono
- definir API mínima y reusable
- evitar props o variantes innecesarias

## T4. Extraer sistema visual de tags
- mover mapping de íconos/accentos desde `stack-marquee`
- centralizar fallback para tags no tecnológicos
- dejar una única fuente shared reutilizable

## T5. Migrar Home
- aplicar sistema shared en `stack-marquee`
- aplicar sistema shared en `featured-project`
- mantener layout y ritmo visual existentes

## T6. Migrar internas
- aplicar sistema shared en `projects`
- aplicar sistema shared en `projects/[slug]`
- aplicar sistema shared en `skills`
- aplicar sistema shared en `experience`
- cubrir cualquier superficie adicional con tags visibles

## T7. Ajustar hover system
- aclarar levemente el fondo de `interactive-card`
- iluminar sutilmente `interactive-chip`
- mantener feedback sobrio y premium
- revisar reduced motion

## T8. Validar consistencia global
- desktop
- mobile/tablet
- light/dark
- legibilidad de icono + label
- consistencia visual entre Home e internas

## T9. Validación final
- npm run lint
- npm run build

## T10. Cierre documental
- alinear `spec.md`, `plan.md`, `tasks.md` y `verification.md` con la implementación real
- dejar el alcance final explícito
- preparar la feature para cierre/merge posterior