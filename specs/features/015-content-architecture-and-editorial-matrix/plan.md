# Plan - Feature 015 Content architecture and editorial matrix

## Estrategia

La iteración se resolvió en dos capas complementarias:

1. fijar el marco editorial del portfolio
2. materializarlo en una capa editable de contenido no-MDX dentro de `src/content/site/`

La idea fue no reabrir UI ni copy final, sino dejar un sistema más mantenible para las próximas feats de contenido.

## Ruta implementada

- auditar el contenido real del sitio y sus fuentes
- definir relato principal y relato secundario
- asignar idea madre a cada ruta principal
- construir una matriz editorial mínima
- separar backlog posterior sin mezclarlo con esta iteración
- centralizar el copy no-MDX principal en `site-config.ts` y `profile-content.ts`
- dejar los renderers principales consumiendo esa capa
- validar con `npm run lint` y `npm run build`

## Fases

### Fase 1 - Auditoría editorial
- revisar Home, About, Projects, Experience, Skills, Contact y CV
- revisar `src/content/site/site-config.ts`
- revisar `src/content/site/profile-content.ts`
- revisar MDX de proyectos y experiencia como capa de evidencia

### Fase 2 - Marco narrativo
- fijar relato principal
- fijar relato secundario
- documentar la regla editorial por ruta

### Fase 3 - Matriz y contrato por ruta
- definir idea madre por página
- inventariar claims principales
- mapear evidencia y acción editorial
- identificar headers genéricos a revisar

### Fase 4 - Centralización de contenido no-MDX
- ampliar `site-config.ts` para Home y footer
- ampliar `profile-content.ts` para About, Experience, Skills, Contact y CV
- mover headings, descriptions, badges, CTA labels, summary cards y copy de cierre a la capa de contenido
- dejar los componentes como renderers

### Fase 5 - Validación
- revisar consistencia entre docs e implementación
- correr `npm run lint`
- correr `npm run build`
- revisar manualmente que las rutas alcanzadas lean desde `src/content/site/`

## Archivos tocados

### Documentación
- `specs/features/015-content-architecture-and-editorial-matrix/spec.md`
- `specs/features/015-content-architecture-and-editorial-matrix/plan.md`
- `specs/features/015-content-architecture-and-editorial-matrix/tasks.md`
- `specs/features/015-content-architecture-and-editorial-matrix/verification.md`

### Implementación
- `src/content/site/site-config.ts`
- `src/content/site/profile-content.ts`
- `src/types/site.ts`
- `src/components/sections/home-hero.tsx`
- `src/components/sections/featured-project.tsx`
- `src/app/about/page.tsx`
- `src/app/experience/page.tsx`
- `src/app/skills/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/cv/page.tsx`
- `src/components/layout/site-footer.tsx`

## Restricciones

- sin cambios visuales
- sin cambios de layout, motion o navegación
- sin reescritura profunda de MDX
- sin tocar GitHub API, assets ni lógica de datos
- sin cleanup editorial final de Contact/CV
- sin unificación de case studies

## Resultado esperado

La feature debe cerrar con dos salidas concretas:

- un marco editorial claro para futuras iteraciones de copy
- una capa de contenido editable y centralizada para el contenido no-MDX principal del portfolio
