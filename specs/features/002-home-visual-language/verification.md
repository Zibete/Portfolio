# Verification — Feature 002 Home visual language

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
- [ ] La Home se siente más limpia y moderna
- [ ] El fondo no compite con el texto
- [ ] La jerarquía visual mejora respecto a la versión anterior
- [ ] El spacing vertical se siente más equilibrado

### Light mode
- [ ] No aparece una línea o transición molesta detrás del contenido
- [ ] El fondo sigue teniendo intención visual sin volverse invasivo
- [ ] La legibilidad se mantiene alta

### Dark mode
- [ ] Sigue siendo el modo más fuerte visualmente
- [ ] No pierde profundidad ni contraste
- [ ] No queda apagado tras los ajustes

### Consistencia
- [ ] Header, footer y shell siguen funcionando bien
- [ ] `/projects` y `/projects/zibe` no presentan roturas visuales graves
- [ ] No hay componentes con estilos claramente fuera del sistema

## Criterio de done

La feature se considera terminada cuando:

- [ ] El problema visual del fondo en light mode queda resuelto
- [ ] La Home gana calidad visual sin cambiar su alcance funcional
- [ ] El sistema visual queda mejor preparado para futuras features del hero
- [ ] Lint y build pasan
- [ ] No se generó deuda visual innecesaria