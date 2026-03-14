# Verification — Feature 004 Stack marquee

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
- [ ] La franja marquee aparece en una posición coherente
- [ ] El movimiento se siente continuo y suave
- [ ] El loop no compite de forma agresiva con el hero
- [ ] La composición vertical de la Home mejora

### Contenido
- [ ] Las tecnologías listadas son legibles
- [ ] La selección representa bien el perfil híbrido
- [ ] La densidad visual no abruma

### Dark mode
- [ ] El marquee se integra bien al sistema
- [ ] Se ve moderno y premium
- [ ] Mantiene contraste suficiente

### Light mode
- [ ] La franja sigue siendo limpia
- [ ] No aparece ruido visual excesivo
- [ ] Las pills/textos siguen siendo legibles

### Técnica
- [ ] No hay glitches evidentes en el loop
- [ ] No hay imports rotos
- [ ] No hay dependencia pesada innecesaria
- [ ] No hay degradaciones visibles en `/projects` ni `/projects/zibe`

## Criterio de done

La feature se considera terminada cuando:

- [ ] La Home incorpora una franja marquee útil y moderna
- [ ] El contenido refuerza el posicionamiento técnico del perfil
- [ ] La animación se siente sutil y mantenible
- [ ] Lint y build pasan
- [ ] No se abrió una iniciativa visual fuera de alcance