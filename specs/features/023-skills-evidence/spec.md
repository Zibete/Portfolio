# Feature 023 — Skills basadas en evidencia real

## Objetivo

Mostrar un stack profesional alineado al trabajo actual: Python y automatización como eje, integraciones empresariales y criterio funcional en segundo plano, IA como metodología aplicada, Android/web como capacidades complementarias y objetivos FDE separados de experiencia adquirida.

## Alcance

- Reorganizar **solo** el bloque `skills` de `src/content/site/profile-content.ts`.
- Mantener estructura de `SkillGroup`, `SkillsPage` y `TagChip`; sin cambios de estilos, componentes ni dependencias.
- Reordenar tecnologías por uso real, no por moda ni aspiración.
- Agrupar en seis categorías renderizadas por el grid existente: automatización, sistemas/datos, ingeniería/calidad, IA asistida, producto complementario, aprendizaje FDE.
- Explicitar que usar herramientas de IA para programar no implica construir servicios basados en LLMs.

## Criterios de redacción

- **Uso aplicado:** Python, Excel/VBA, Power Query, Selenium, Google Apps Script, SAP FI, NetSuite, Google Sheets, datos y controles.
- **Prácticas y herramientas:** Git/GitHub, uv, documentación, pruebas funcionales y GitHub Actions según evidencia en proyectos.
- **IA asistida:** ChatGPT, Claude y Gemini se usan para analizar, explorar, programar y revisar; el autor valida resultados y decide.
- **Complementario:** Kotlin, Jetpack Compose, Firebase, TypeScript y Next.js corresponden a productos/proyectos propios.
- **En desarrollo:** SQL básico, diseño de APIs, despliegue cloud, integración de LLM APIs y evaluaciones; no declararlas expertas ni productivas.

Ninguna categoría implica seniority experto, entrega a clientes externos o integración de agentes/LLMs en producción.

## Criterios de aceptación

1. La primera categoría de Skills prioriza Python y automatización.
2. Se conservan Android y web como evidencias complementarias sin atribuirlas como especialidad principal.
3. Herramientas de IA y LLMs integrados en productos se distinguen explícitamente.
4. Los objetivos FDE se anuncian como aprendizaje, no como logros.
5. No se publican datos privados y no se modifican componentes, tipos, rutas ni dependencias.
6. About, Contact, CV y SEO quedan para iteraciones posteriores.

## Fuera de alcance

Rediseño de la página, cambio de iconografía de tags, nueva escala de seniority, proyectos adicionales, cambios del CV, About o Contact, construcción de software con LLMs y publicación de detalles internos.
