# Verification - Feature 015 Content architecture and editorial matrix

## Validación automática
```bash
npm run lint
npm run build
```

## Validación manual

### Marco editorial

- [ ] Existe un relato principal explícito
- [ ] Existe un relato secundario explícito
- [ ] Cada ruta principal tiene idea madre clara
- [ ] Existe una matriz `claim -> dónde vive -> evidencia -> acción`

### Centralización de contenido

- [ ] `src/content/site/site-config.ts` concentra el contenido global, Home y footer
- [ ] `src/content/site/profile-content.ts` concentra el contenido editorial de About, Experience, Skills, Contact y CV
- [ ] `src/components/sections/home-hero.tsx` consume `siteConfig`
- [ ] `src/components/sections/featured-project.tsx` consume `siteConfig`
- [ ] `src/app/about/page.tsx` consume `profileContent`
- [ ] `src/app/experience/page.tsx` consume `profileContent`
- [ ] `src/app/skills/page.tsx` consume `profileContent`
- [ ] `src/app/contact/page.tsx` consume `profileContent`
- [ ] `src/app/cv/page.tsx` consume `profileContent`
- [ ] `src/components/layout/site-footer.tsx` consume `siteConfig`

### Límites de alcance

- [ ] No se tocaron MDX de proyectos
- [ ] No se tocaron MDX de experiencia
- [ ] No hubo cambios visuales, de layout, motion o navegación
- [ ] No se tocó GitHub API, assets ni lógica de datos
- [ ] `Contact/CV cleanup` quedó fuera de alcance
- [ ] `Projects case study unification` quedó fuera de alcance

### Documentación

- [ ] `spec.md`, `plan.md`, `tasks.md` y `verification.md` están alineados con el resultado implementado
- [ ] La feature sigue siendo consistente con `docs/PROJECT_CONSTITUTION.md`
