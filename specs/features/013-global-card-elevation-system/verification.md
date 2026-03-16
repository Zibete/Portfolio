# Verification - Feature 013 Global card elevation system

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

- [ ] Las cards reales del sitio elevan al hover
- [ ] La elevación se siente consistente entre Home e internas
- [ ] No hay una página con cards planas frente al resto del sistema
- [ ] Light mode se ve correcto
- [ ] Dark mode se ve correcto

### Home

- [ ] Hero principal eleva correctamente
- [ ] Mini cards del hero elevan correctamente
- [ ] Prueba principal y sus cards secundarias elevan
- [ ] Proyecto principal y sus laterales elevan
- [ ] Credibilidad y sus cards internas elevan
- [ ] CTA lateral eleva
- [ ] El contenedor del carrusel de skills en Home no eleva

### Internas

- [ ] About mantiene consistencia
- [ ] Skills mantiene consistencia
- [ ] CV mantiene consistencia
- [ ] Contact mantiene consistencia
- [ ] Experience mantiene consistencia
- [ ] Projects mantiene consistencia

### Técnica

- [ ] No hay nodos hoverables peleando con `motion-enter`
- [ ] No hay nodos hoverables peleando con `motion-reveal`
- [ ] No hay imports rotos
- [ ] No se agregaron dependencias nuevas