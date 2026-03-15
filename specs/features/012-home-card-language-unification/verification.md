# Verification — Feature 012 Home card language unification

## Validación automática
```bash
npm run lint
npm run build
```

## Validación manual
```bash
npm run dev
```

### Home
- [ ] El bloque principal ahora vive dentro de una card real
- [ ] Las superficies principales de Home se ven parte del mismo sistema
- [ ] No hay mezcla visual rara entre cards principales y secundarias

### Hover / elevación
- [ ] Todas las cards de Home elevan al hover
- [ ] La elevación se siente visible pero sobria
- [ ] No hay efectos bruscos ni exagerados

### Credibilidad
- [ ] La sección de credibilidad mantiene coherencia visual
- [ ] Sus subcards también elevan al hover
- [ ] La legibilidad sigue bien en light y dark

### Técnica
- [ ] No se tocó el header
- [ ] No se tocaron otras páginas
- [ ] No se rompió marquee ni motion existente
- [ ] No hay imports rotos
- [ ] Lint y build pasan