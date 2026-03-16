# Verification - Feature 012 Home card language unification

## Validacion automatica
```bash
npm run lint
npm run build
```

## Validacion manual
```bash
npm run dev
```

### Home
- [ ] El bloque principal ahora vive dentro de una card real
- [ ] El hero reduce el aire muerto arriba y abajo
- [ ] La marquee queda mas cerca y conectada con el hero
- [ ] Las 3 mini cards del hero viven dentro de la misma pieza principal en desktop
- [ ] El nuevo copy de las mini cards se lee rapido y suena recruiter-friendly
- [ ] Las superficies principales de Home se ven parte del mismo sistema
- [ ] El CTA lateral de CV no se siente como un lenguaje aparte
- [ ] No hay mezcla visual rara entre cards principales y secundarias

### Hover / elevacion
- [ ] Todas las cards de Home elevan al hover
- [ ] La elevacion se siente visible pero sobria
- [ ] No hay efectos bruscos ni exagerados

### Credibilidad
- [ ] La seccion de credibilidad mantiene coherencia visual
- [ ] Sus subcards tambien elevan al hover
- [ ] La legibilidad sigue bien en light y dark

### Tecnica
- [ ] No se toco el header
- [ ] No se tocaron otras paginas
- [ ] No se rompio marquee ni motion existente
- [ ] No hay imports rotos
- [ ] Lint y build pasan
