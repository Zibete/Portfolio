# Plan — Feature 011 Interactive polish system

## Estrategia

Agregar microinteracciones coherentes al portfolio para mejorar percepción de calidad sin recargar la UI ni abrir un rediseño.

La feature se concentra en tres zonas:
1. stack/skills marquee
2. cards interactivas
3. navegación/header

## Fases

### Fase 1 — Skills marquee
- incorporar íconos de skills
- mantener el texto legible
- desacelerar el marquee al hover del contenedor
- iluminar suavemente la skill activa al hover

### Fase 2 — Cards
- agregar hover premium y sobrio
- mejorar borde, elevación y microinteracción
- evitar tilt fuerte o efectos exagerados

### Fase 3 — Header / nav
- mejorar hover y active states
- reforzar legibilidad y feedback visual
- mantener look moderno, minimalista y consistente

### Fase 4 — Validación
- revisar desktop
- revisar mobile/tablet
- validar dark/light
- correr lint/build

## Restricciones

- no rediseñar páginas
- no agregar dependencias nuevas
- no agregar animaciones complejas
- no romper reduced motion
- no sobrecargar la UI

## Resultado esperado

El sitio debe sentirse más vivo, moderno y premium, con microinteracciones claras y sobrias en skills, cards y navegación.