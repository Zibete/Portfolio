# Feature 024 — Casos de estudio públicos: Migrar SAP y ZIBE

## Objetivo

Transformar los dos proyectos públicos existentes en evidencia legible para reclutadores de software, automatización y futuros roles FDE, sin cambiar la identidad principal, los componentes o el estado real de sus repositorios.

## Alcance

- Revisar documentación pública de `Zibete/Migrar-SAP-Portfolio` y `Zibete/Zibe` contra sus ramas `main`.
- Editar únicamente `src/content/projects/migrar-sap-portfolio.mdx` y `src/content/projects/zibe.mdx`.
- Estructurar ambos casos alrededor de problema, decisiones, implementación, validación, resultados cuando existan y límites.
- Mantener Migrar SAP destacado (`featured: true`, `order: 1`) y ZIBE complementario (`featured: false`, `order: 2`).
- Mantener URLs, slugs y etiquetas técnicas verificables.

## Evidencia y límites

### Migrar SAP

- Fuente: `README.md`, `docs/CASE_STUDY.md`, `docs/PORTFOLIO_OVERVIEW.md`, `docs/TESTING.md` del repositorio público.
- Resultado histórico aproximado reportado: 60 a 500 documentos por día. No confundir con una prueba técnica del repositorio público ni con resultados en Cabify.
- Evidencia reproducible: core VBA, tests con Excel/Windows, documentación y scripts de publicación segura.
- Las integraciones corporativas reales no son reproducibles desde la versión pública.

### ZIBE

- Fuente: `README.md`, `docs/ARCHITECTURE.md`, `docs/CI.md` y documentación Firebase de la rama pública.
- Main observado con último commit en septiembre de 2026; actualizar el texto que seguía fijado en marzo de 2026.
- Pipeline para build, reglas y contratos; backend real, distribución y pruebas físicas no se infieren a partir de un build con configuración ficticia.
- Proyecto de producto complementario, no especialidad dominante del portfolio.

## No hacer

- No modificar repositorios fuente, código privado, URLs del portfolio, imágenes, layout, dependencias, schemas ni nuevas páginas.
- No añadir supuestos de adopción, ahorros de tiempo, calidad de producción, status de Play Store o integraciones con LLMs que no estén probados.
- No reordenar proyectos ni introducir Finance Toolkit (feature 025).

## Criterios de aceptación

1. Ambos casos incluyen problema, decisiones técnicas, validación y límites.
2. Métricas históricas de PAE están claramente atribuidas.
3. El estado de ZIBE menciona actividad revisada hasta septiembre de 2026.
4. Son legibles para audiencias técnico-funcionales y enlazan a evidencia pública real.
5. No hay cambios en infraestructura, código ejecutable ni material corporativo privado.
