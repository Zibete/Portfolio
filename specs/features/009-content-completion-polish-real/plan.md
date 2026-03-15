# Plan — Feature 009 Content completion polish real

## Estrategia

Usar el sistema visual existente y completar el contenido real mínimo necesario para que el portfolio ya sea publicable, manteniendo MDX y contenido local como fuente principal.

## Fases

### Fase 1 — Auditoría de contenido
- detectar rutas que todavía hablan de scaffold o futuro
- identificar qué copy ya existe y qué falta completar con información real
- revisar si conviene crear entradas MDX para experiencia y un segundo proyecto

### Fase 2 — Carga de contenido real
- reemplazar `PagePlaceholder` en `about`, `contact`, `cv`, `experience` y `skills`
- redactar contenido breve, profesional y recruiter-friendly
- mantener equilibrio técnico / negocio

### Fase 3 — Coherencia global
- revisar `site-config.ts` y `README.md`
- alinear `projects` con el contenido nuevo si se suma un segundo caso público
- eliminar piezas claramente meta o temporales si quedan sin uso

### Fase 4 — Validación
- correr `npm run lint`
- correr `npm run build`
- dejar checklist manual breve para revisar Home, páginas internas y proyectos
