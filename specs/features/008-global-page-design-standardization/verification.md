# Verification — Feature 008 Global page design standardization

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

### Rutas internas
- [ ] `about`, `contact`, `cv`, `experience` y `skills` comparten el mismo lenguaje visual base
- [ ] Todas las rutas internas muestran intro, superficie principal y aside con jerarquía consistente
- [ ] La percepción de placeholder genérico baja respecto de la base anterior

### `/projects`
- [ ] La página conserva el contenido y el flujo actual
- [ ] El header y las cards se sienten alineados con el sistema de Home
- [ ] La metadata viva de GitHub sigue siendo opcional y no desordena la card

### `/projects/[slug]`
- [ ] El detalle mantiene el contenido MDX sin degradarlo
- [ ] El artículo principal y los paneles laterales comparten el nuevo lenguaje visual
- [ ] El bloque de GitHub, si aparece, se integra sin sentirse como una pieza ajena

### Motion y tema
- [ ] `motion-enter` y `motion-reveal` acompañan sin sobreanimar
- [ ] Reduced motion sigue comportándose de forma compatible
- [ ] Dark mode sigue siendo el modo fuerte
- [ ] Light mode se mantiene limpio y legible

### Técnica
- [ ] No hay imports rotos
- [ ] No se agregaron dependencias nuevas
- [ ] No se tocaron flujos fuera del alcance de 008

## Criterio de done

La feature se considera terminada cuando:

- [ ] las rutas internas se sienten parte del mismo producto
- [ ] `PagePlaceholder` deja de ser un placeholder crudo y pasa a apoyarse en piezas compartidas
- [ ] `/projects` y `/projects/[slug]` quedan visualmente más cerca del sistema global
- [ ] lint y build pasan
