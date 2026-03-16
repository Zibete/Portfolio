# Plan - Feature 014 Final visual polish

## Estrategia

Cerrar la capa final de consistencia visual con una solución shared y mínima: el polish de hover debe vivir en clases/utilidades ya existentes y el sistema de tags con ícono debe centralizarse en una única fuente de verdad reusable por todo el sitio.

La feature no debe reabrir layout, motion ni navegación. Sólo debe consolidar surfaces y tags como lenguaje visual único.

## Ruta implementada

- auditar todas las superficies con tags visibles
- definir un contrato shared para tag con ícono
- extraer el mapping visual hoy local en `stack-marquee`
- aplicar el nuevo contrato en Home e internas
- ajustar hover de `interactive-card` y `interactive-chip` sin exagerar el feedback
- mantener el resultado sobrio y premium

## Fases

### Fase 1 - Auditoría visual
- revisar dónde existen tags visibles hoy
- identificar chips locales, spans sueltos o mappings duplicados
- identificar qué cards ya elevan pero todavía no aclaran suficiente su fondo

### Fase 2 - Contrato shared de tags
- crear un componente shared para tags con ícono
- crear un módulo shared para resolver ícono, acento y fallback visual por tag
- evitar lógica local repetida en cada página o sección

### Fase 3 - Aplicación global
- migrar `stack-marquee` al sistema shared
- migrar tags de `featured-project`
- migrar tags de `projects`
- migrar tags de `projects/[slug]`
- migrar tags de `skills`
- migrar tags de `experience`
- cubrir cualquier otra superficie actual con tags visibles

### Fase 4 - Polish de hover
- ajustar `interactive-card` para aclarado sutil de fondo
- ajustar `interactive-chip` para glow/realce sutil
- validar que no haya ruido visual ni sobrecarga

### Fase 5 - Validación
- desktop
- mobile/tablet
- light/dark
- reduced motion
- lint/build

## Restricciones

- no agregar dependencias nuevas
- no tocar header/nav
- no tocar copy
- no cambiar motion existente
- no cambiar velocidad del marquee
- no abrir refactors grandes fuera de tags y hover polish
- mantener naming en inglés para componentes y helpers

## Resultado esperado

El sitio debe sentirse finalmente cerrado como sistema visual: las cards reaccionan con más claridad pero sin exageración, y todos los tags del portfolio comparten un mismo contrato visual con ícono, hover y consistencia transversal.