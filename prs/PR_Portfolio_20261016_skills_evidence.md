# feat(skills): stack basado en evidencia y objetivo FDE

Base: `master` (`885bf74`)
Rama: `feat/023-skills-evidence`

## Qué se cambió

- Reorganización de `profileContent.skills` en seis áreas: automatización aplicada, sistemas y datos, ingeniería/calidad, IA asistida, producto complementario y aprendizaje FDE.
- Python, VBA y Excel pasan a encabezar las capacidades con mayor evidencia.
- Se incorporan Google Apps Script, NetSuite, Google Sheets, uv y herramientas realmente utilizadas en el trabajo.
- ChatGPT, Claude y Gemini quedan identificados como herramientas de apoyo al análisis, programación y revisión, no como integraciones LLM en producción.
- SQL, APIs, cloud y evaluación de LLMs se presentan como objetivos o competencias en desarrollo, nunca como experiencia consolidada.
- Especificación, plan, tareas y controles de la feature 023.

## Commits incluidos

- `5fa0f5d` — `feat(skills): align evidence-based stack with automation and FDE roadmap`
- Commit de este borrador editorial.

## Validación

- Diff limitado al bloque Skills de `src/content/site/profile-content.ts` y documentos de `specs/features/023-skills-evidence/`.
- No se alteran JSX, CSS, componentes, rutas, tipos o dependencias.
- El entorno local no accede a `github.com` para clonar; `npm run lint` y `npm run build` no ejecutados localmente.
- Vercel: revisar estado del último SHA del PR.

## Fuera de alcance

- About, Experience, Contact, CV, SEO, proyectos y portfolio visual.
- Publicación de material de repositorios privados y declaraciones de experiencia FDE no acreditada.

## Validación manual

- [ ] Revisar `/skills` en móvil y escritorio: lectura de seis cards.
- [ ] Confirmar que cada tecnología y nivel de experiencia es defendible.
- [ ] Comprobar Vercel para el último SHA.
- [ ] Aprobar el PR antes de fusionar.
