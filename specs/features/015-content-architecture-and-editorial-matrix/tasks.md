# Tasks - Feature 015 Content architecture and editorial matrix

## T1. Auditar el contenido real del sitio
- revisar `src/content/site/site-config.ts`
- revisar `src/content/site/profile-content.ts`
- revisar Home, About, Projects, Experience, Skills, Contact y CV
- revisar MDX de proyectos y experiencia como capa de evidencia

## T2. Definir el marco editorial
- dejar explícito el relato principal
- dejar explícito el relato secundario
- definir idea madre por ruta principal
- documentar una matriz `claim -> dónde vive -> evidencia -> acción`

## T3. Separar backlog posterior
- dejar separado `Home messaging refinement`
- dejar separado `About/Experience cleanup`
- dejar separado `Contact/CV cleanup`
- dejar separada la unificación de case studies

## T4. Centralizar el contenido no-MDX
- ampliar `src/content/site/site-config.ts` para Home y footer
- ampliar `src/content/site/profile-content.ts` para About, Experience, Skills, Contact y CV
- mover headings, eyebrows, títulos, descripciones y labels de CTA a la capa de contenido
- mover badges, cards de resumen del hero y copy de cierre a la capa de contenido
- evitar duplicaciones entre `site-config.ts` y `profile-content.ts`

## T5. Dejar los renderers consumiendo la capa de contenido
- actualizar `src/components/sections/home-hero.tsx`
- actualizar `src/components/sections/featured-project.tsx`
- actualizar `src/app/about/page.tsx`
- actualizar `src/app/experience/page.tsx`
- actualizar `src/app/skills/page.tsx`
- actualizar `src/app/contact/page.tsx`
- actualizar `src/app/cv/page.tsx`
- actualizar `src/components/layout/site-footer.tsx` solo para el copy editorial real

## T6. Agregar tipado mínimo si hace falta
- tipar los nuevos bloques de `site-config.ts`
- dejar explícitas las estructuras editoriales de `profile-content.ts`

## T7. Validar cierre
- alinear `spec.md`, `plan.md`, `tasks.md` y `verification.md` con el resultado real
- correr `npm run lint`
- correr `npm run build`
- revisar manualmente que el contenido principal no-MDX quede centralizado en `src/content/site/`
