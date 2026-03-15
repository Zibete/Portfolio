# ✨ feat(layout): standardize internal page design language

Base: `master`
Rama: `feat/008-global-page-design-standardization`

## Qué se cambió
- `src/components/shared/page-intro.tsx`, `src/components/shared/page-section.tsx` y `src/components/shared/page-aside.tsx`
  - se agregó una base visual chica para `intro`, superficie principal y panel lateral
  - se reutilizó `motion-reveal` y `motion-enter` sin abrir una capa nueva de motion
- `src/components/shared/page-placeholder.tsx`
  - dejó de ser un placeholder crudo y pasó a componerse con las piezas compartidas nuevas
  - el cambio impacta en `about`, `contact`, `cv`, `experience` y `skills` sin reescribir cada ruta
- `src/app/projects/page.tsx`
  - el header pasó a usar `PageIntro`
  - las cards se alinearon con radios, superficies y motion del sistema global
- `src/app/projects/[slug]/page.tsx`
  - el detalle pasó a usar `PageIntro`, `PageSection` y `PageAside`
  - se mantuvo el contenido MDX y el bloque de GitHub, pero dentro del mismo lenguaje visual
  - se corrigió el contenedor lateral para evitar landmarks `aside` anidados
- `specs/features/008-global-page-design-standardization/verification.md`
  - se reemplazó el contenido duplicado del plan por una checklist real de verificación

## Por qué
- reducir la sensación de “Home madura + resto placeholder”
- dejar una base consistente para rutas internas sin rediseñar Home
- mejorar continuidad visual con un diff mínimo y sin inventar contenido nuevo grande

## Validación manual
- [ ] comparar Home con `about`, `contact`, `cv`, `experience` y `skills`
- [ ] verificar que las rutas internas muestren intro, superficie principal y aside con la misma familia visual
- [ ] revisar `/projects` y confirmar que el header y las cards queden alineados con el sistema global
- [ ] revisar `/projects/zibe` y confirmar que el artículo principal y los paneles laterales mantengan buena legibilidad
- [ ] revisar dark mode y light mode
- [ ] verificar que la motion siga siendo sutil y que reduced motion no rompa layout

## Validación local
```bash
npm run lint
npm run build
```

## Fuera de alcance
- rediseñar Home
- sumar contenido real nuevo en `about`, `experience`, `skills`, `contact` o `cv`
- tocar GitHub API, datos reales o el contenido curado de ZIBE más allá de la alineación visual heredada
- implementar formulario de contacto o descarga real del CV

## Commits incluidos
- `94240` `feat(global-page-design): add comprehensive plan, tasks, and verification for standardization`
- `48c3b` `feat(layout): standardize internal page design language`
