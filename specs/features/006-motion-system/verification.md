# Verification — Feature 006 Motion system

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
- [ ] Las animaciones se sienten coherentes entre sí
- [ ] No hay bloques con motion claramente fuera de sistema
- [ ] La experiencia general se siente más pulida

### Hero / marquee / proyecto principal
- [ ] El hero entra de forma sutil y consistente
- [ ] El marquee convive bien con el resto del motion
- [ ] El bloque principal no se siente rígido ni sobreanimado

### Dark mode
- [ ] La motion acompaña sin distraer
- [ ] El sitio sigue sintiéndose premium

### Light mode
- [ ] La motion no genera ruido visual
- [ ] La legibilidad sigue siendo alta

### Reduced motion
- [ ] Si se implementó soporte, el sitio sigue viéndose bien
- [ ] No se rompe layout ni jerarquía

### Técnica
- [ ] No hay imports rotos
- [ ] No hay problemas de hidratación
- [ ] No hay dependencias pesadas nuevas
- [ ] No se degradan `/projects` ni `/projects/zibe`

## Criterio de done

La feature se considera terminada cuando:

- [ ] Existe una base de motion reutilizable
- [ ] Home refleja ese sistema con coherencia
- [ ] Las animaciones se sienten modernas y sutiles
- [ ] Lint y build pasan
- [ ] No se abrió una iniciativa de motion fuera de alcance