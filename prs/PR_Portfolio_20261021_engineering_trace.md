# feat(home): introduce Engineering Trace

Base: master
Rama: feat/031-engineering-trace

## Qué se cambió
- Nuevo componente cliente EngineeringTrace con cinco etapas y artefactos técnicos.
- Scroll enlazado a transformaciones CSS 3D y navegación directa por etapa.
- Presentación alternativa estática para mobile y reduced-motion.
- Mensajes y referencias a fuentes públicas centralizados y tipados.
- CTA del hero vinculada a la sección y documentación técnica sincronizada.

## Commits incluidos
- feat(home): add continuous Engineering Trace experience

## Decisiones técnicas
- Sin Motion, GSAP ni video: transformaciones CSS controladas por un listener pasivo y frames bajo demanda evitan agregar runtime/dependencia al stack.
- Referencias públicas y ejemplos ilustrativos diferenciados de forma explícita.
- Las cinco escenas están encapsuladas en la Home, sin modificar páginas internas.

## Fuera de alcance
Demo funcional, cambios en los proyectos MDX, nuevo backend e integración de LLMs.
