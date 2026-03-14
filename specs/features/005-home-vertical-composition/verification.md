# Verification — Feature 005 Home vertical composition

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
- [ ] La Home se siente como una narrativa vertical clara
- [ ] El orden de los bloques tiene más sentido
- [ ] El recorrido es más natural y persuasivo
- [ ] No hay secciones que parezcan pegadas sin intención

### Hero + marquee + proyecto principal
- [ ] Conviven bien entre sí
- [ ] Cada bloque cumple un rol distinto
- [ ] El proyecto principal gana contexto y peso
- [ ] El conjunto no se siente sobrecargado

### CTA
- [ ] La descarga de CV está mejor integrada en el recorrido
- [ ] La acción principal es clara
- [ ] No hay exceso de botones o llamadas redundantes

### Dark mode
- [ ] La Home conserva profundidad y presencia
- [ ] El sistema visual sigue siendo premium

### Light mode
- [ ] La Home sigue limpia y legible
- [ ] No aparecen nuevas interferencias visuales

### Técnica
- [ ] No hay imports rotos
- [ ] No hay saltos de layout graves
- [ ] No se degradan `/projects` ni `/projects/zibe`

## Criterio de done

La feature se considera terminada cuando:

- [ ] La Home funciona como una landing vertical más madura
- [ ] El recorrido comunica mejor identidad, stack y proyecto principal
- [ ] El CTA principal queda mejor posicionado
- [ ] Lint y build pasan
- [ ] No se abrió una iniciativa fuera de alcance