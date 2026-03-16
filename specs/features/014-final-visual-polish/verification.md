# Verification - Feature 014 Final visual polish

## 🧪 Validación automática
```bash
npm run lint
npm run build
```

## 👁️ Validación manual
```bash
npm run dev
```

### Global

- [ ] Las cards hoverables aclaran sutilmente su fondo al hover
- [ ] El resultado se siente sobrio y no exagerado
- [ ] Todos los tags visibles del sitio muestran ícono
- [ ] Todos los tags visibles del sitio comparten el mismo hover
- [ ] No hay páginas con chips viejos conviviendo con el sistema nuevo
- [ ] Light mode se ve correcto
- [ ] Dark mode se ve correcto

### Home

- [ ] El marquee mantiene su layout y ahora usa el sistema shared de tags
- [ ] Los tags del `featured-project` usan el mismo contrato visual
- [ ] No se rompió el ritmo visual de Home
- [ ] No se reabrió la velocidad del marquee

### Projects

- [ ] Los tags de `/projects` muestran ícono y hover consistente
- [ ] Los tags del detalle de proyecto muestran ícono y hover consistente
- [ ] No hay diferencias raras entre listado y detalle

### Skills / Experience

- [ ] Skills muestra ícono en todos sus tags
- [ ] Experience muestra ícono en sus tags visibles
- [ ] La lectura sigue siendo clara y rápida

### Técnica

- [ ] `stack-marquee` ya no tiene mapping local de íconos
- [ ] Existe una única fuente shared para resolver visuals de tags
- [ ] No hay imports rotos
- [ ] No hay dependencias nuevas evitables
- [ ] Reduced motion sigue correcto
- [ ] `npm run lint` y `npm run build` pasan