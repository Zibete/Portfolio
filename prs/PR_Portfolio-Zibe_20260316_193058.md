# feat: cerrar Feature 015 content architecture and editorial matrix

Base: `master`
Rama: `015-content-architecture-and-editorial-matrix`

## Qué se cambió

- se cerró el marco editorial de la feature 015 con relato principal, relato secundario, contrato por ruta, matriz editorial mínima y backlog separado en `specs/features/015-content-architecture-and-editorial-matrix/`
- se centralizó el copy no-MDX principal del portfolio en `src/content/site/site-config.ts` y `src/content/site/profile-content.ts`
- Home pasó a consumir desde la capa de contenido el hero, los summary cards, el bloque de proyecto principal, el bloque de credibilidad, el CTA a CV y el copy editorial del footer
- `About`, `Experience`, `Skills`, `Contact` y `CV` dejaron de tener headings, descripciones, labels de CTA y copy de secciones como source of truth dentro de sus renderers
- `src/types/site.ts` se amplió con el tipado mínimo necesario para sostener la nueva estructura centralizada
- no se tocaron MDX, assets, GitHub API, layout, motion ni navegación

## Por qué

- la feature necesitaba dejar explícito qué debe comunicar cada ruta y además bajar ese contrato a una capa editable para futuras iteraciones de copy
- centralizar el contenido no-MDX reduce dispersión, evita strings editoriales hardcodeados y deja más claro dónde editar cada bloque del portfolio

## Validación local

```bash
npm run lint
npm run build
```

- [x] `npm run lint`
- [x] `npm run build`

## Validación manual

- [x] `src/content/site/site-config.ts` concentra contenido global, Home y footer
- [x] `src/content/site/profile-content.ts` concentra About, Experience, Skills, Contact y CV
- [x] `src/components/sections/home-hero.tsx` y `src/components/sections/featured-project.tsx` consumen la capa de contenido
- [x] `src/app/about/page.tsx`, `src/app/experience/page.tsx`, `src/app/skills/page.tsx`, `src/app/contact/page.tsx` y `src/app/cv/page.tsx` consumen la capa de contenido
- [x] no se tocaron `src/content/projects/*` ni `src/content/experience/*`

## Fuera de alcance

- cleanup editorial final de Contact y CV
- unificación de case studies de proyectos
- cambios visuales o de layout
- cambios en motion, navegación o lógica de datos

## Commits incluidos

- `2a40d` `docs(specs): open feature 015 content architecture and editorial matrix`
- `03460` `feat: centralize editorial content layer`
- `docs: close feature 015 and add pr draft`
