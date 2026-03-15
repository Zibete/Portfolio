# Verification — Feature 007 GitHub real data

## Validación automática

Ejecutar:
```bash
npm run lint
npm run build
```

## Validación manual

Levantar:
```bash
npm run dev
```

### Configuración
- [ ] El proyecto arranca sin `GITHUB_TOKEN`
- [ ] No aparecen errores visibles en UI cuando falta token

### Home
- [ ] El proyecto destacado sigue renderizando
- [ ] Si hay data de GitHub, se muestran métricas o metadata viva
- [ ] Si no hay data, el bloque no rompe layout

### `/projects`
- [ ] La lista sigue cargando proyectos MDX
- [ ] Las cards muestran metadata viva si existe
- [ ] Sin metadata viva, las cards siguen viéndose bien

### `/projects/[slug]`
- [ ] `/projects/zibe` sigue renderizando el MDX
- [ ] El aside o bloque secundario muestra repo / métricas / último update si existen
- [ ] No se rompe el layout en mobile

### Fallbacks
- [ ] Repo inexistente no rompe render
- [ ] Token ausente no rompe render
- [ ] Respuesta nula no genera crash

### Técnica
- [ ] No hay imports rotos
- [ ] No hay fetch client-side innecesario
- [ ] No se exponen secretos al browser
- [ ] La feature no introduce dependencias nuevas evitables

## Criterio de done

La feature se considera terminada cuando:

- [ ] MDX sigue siendo fuente principal
- [ ] GitHub actúa como enriquecimiento opcional
- [ ] Home, `/projects` y `/projects/[slug]` muestran datos reales cuando existen
- [ ] La app funciona también sin token
- [ ] Lint y build pasan