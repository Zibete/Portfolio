# Feature 027 — Criterios y evidencia de ingeniería aplicada

## Objetivo

Unificar el modo en que los cuatro casos públicos distinguen evidencia verificable, resultados reportados y brechas. Dejar un criterio reusable para futuros casos de software con APIs/LLMs sin simular proyectos existentes ni afirmar un cargo FDE actual.

## Alcance

- Agregar `Evidencia y pendientes` en los cuatro MDX ya publicados, con hechos específicos de cada proyecto.
- Crear `docs/CASE_STUDY_STANDARD.md` para guiar nuevas publicaciones mediante problema, restricciones, contribución, trade-offs, implementación, validación y pendientes.
- Incorporar enlace a esa guía en `src/content/projects/README.md`.
- Conservar slugs, frontmatter, órdenes, links, status y arquitectura del sitio.

## Postura profesional

La evidencia de integración y automatización existe, pero sus distintos niveles deben estar claros:
- Migrar SAP: core/testeabilidad pública + resultado operativo histórico reportado.
- Finance Toolkit: trabajo interno y publicación conceptual, sin repositorio ni prueba externa.
- ReportBridge: MVP acotado, pruebas internas reportadas, otros escenarios pendientes.
- ZIBE: repositorio/CI públicos, flujos productivos reales requieren otras pruebas.

No atribuir adopción, reducción de costos o entrega completa sin datos autorizados.

## IA aplicada: criterio de publicación futura

No agregar una ficha de IA/LLMs hasta tener una implementación real y evidencia reproducible. El futuro estándar pide necesidad/alternativas, dataset de prueba, validación, costos/latencia, privacidad, fallos y alcance de despliegue. No equiparar desarrollo asistido por IA con integración de LLMs.

## Fuera de alcance

- Nuevos proyectos, demos, app de IA, página FDE, rediseño, componentes, rutas, tipos, dependencias o APIs.
- Modificar proyectos fuente privados/públicos.
- Cambio de CV, About, Contact o SEO: iteración 028.
- Métricas sin sustento y detalles de infraestructura empresarial.

## Criterios de aceptación

1. Todos los MDX publicados tienen una síntesis de evidencia y brechas.
2. Se distingue prueba pública de resultado histórico o validación interna.
3. Existe una guía reusable para nuevos casos y la documentación de proyectos apunta a ella.
4. El estándar de IA no simula una integración/producto o experiencia FDE actual.
5. No hay cambios visuales ni de infraestructura.
