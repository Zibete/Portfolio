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

### Home
- [ ] El proyecto principal muestra metadata viva breve si GitHub responde
- [ ] Si GitHub no responde, Home sigue renderizando sin errores

### `/projects`
- [ ] Cada card con repo configurado muestra metadata resumida
- [ ] Si falta metadata, la card no se rompe ni deja placeholders raros

### `/projects/[slug]`
- [ ] El detalle del proyecto muestra un bloque ampliado de GitHub
- [ ] Repo y demo solo aparecen si existen
- [ ] Sin respuesta de API, la página sigue estable

### Server-only
- [ ] No hay uso client-side de la integración GitHub
- [ ] No se exponen tokens en el browser

### Técnica
- [ ] No hay imports rotos
- [ ] No se rompe MDX como source of truth
- [ ] Lint y build pasan

## Criterio de done

La feature se considera terminada cuando:

- [ ] GitHub enriquece proyectos sin reemplazar MDX
- [ ] la UI suma señal real sin rediseño grande
- [ ] el fallback silencioso funciona
- [ ] lint y build pasan
