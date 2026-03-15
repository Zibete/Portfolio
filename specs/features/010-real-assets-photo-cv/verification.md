# Verification — Feature 010 Real assets, photo and CV

## Validación automática
```bash
npm run lint
npm run build
```

## Validación manual
```bash
npm run dev
```

### Foto
- [ ] La foto se ve profesional y bien recortada
- [ ] No rompe Home ni About
- [ ] Funciona bien en dark/light

### Projects
- [ ] Los screenshots cargan correctamente
- [ ] No rompen cards ni detalle
- [ ] Mejoran credibilidad visual sin recargar

### CV
- [ ] `/cv` muestra CTA real de descarga
- [ ] El PDF abre o descarga correctamente
- [ ] La ruta ya no se siente provisional

### Técnica
- [ ] No hay imports rotos
- [ ] No hay errores de build por assets
- [ ] Los paths públicos son consistentes
- [ ] No se degradan Home, Projects ni About

## Criterio de done

La feature se considera terminada cuando:

- [ ] Foto real integrada
- [ ] Assets de proyectos visibles
- [ ] CV PDF descargable conectado
- [ ] Lint y build pasan