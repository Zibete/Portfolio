# Plan - Feature 016 Contact cleanup and direct CV download

## Estrategia

La feature se resuelve con un cambio chico de flujo y un ajuste editorial puntual:

1. eliminar `/cv` como ruta
2. mantener el CV como descarga directa del PDF
3. conservar accesos de descarga en header, Home y `Contact`
4. convertir `Contact` en un cierre más claro y más útil
5. rescatar del viejo `CV` solo resumen, señales breves y acciones concretas

No es una reescritura general del portfolio. Es una corrección de flujo, jerarquía y tono.

## Flujo final

- Header -> `Descargar CV`
- Home -> `Descargar CV`
- Contact -> canales directos + resumen breve + acciones
- `/cv` -> deja de existir

## Fases

### Fase 1 - Auditoría
- revisar CTA de Home
- revisar acceso del header
- revisar contenido actual de `Contact`
- revisar contenido previo de `CV`
- revisar referencias residuales a `/cv`

### Fase 2 - Contrato final
- `CV` deja de ser página
- el PDF sigue siendo el recurso principal
- `Contact` absorbe el cierre editorial y de conversión
- se mantienen accesos claros a proyectos, email y GitHub

### Fase 3 - Pulido editorial de Contact
- reescribir hero, sections y microcopy
- eliminar wording abstracto o autorreferencial
- priorizar nombres concretos
- recuperar resumen breve y señales útiles del viejo `CV`

### Fase 4 - Implementación
- mantener el PDF en una sola fuente de verdad
- ajustar `Contact` para renderizar el nuevo contenido
- sostener la descarga directa del CV
- preservar el acceso del header sin reabrir la ruta `/cv`

### Fase 5 - Validación
- correr `npm run lint`
- correr `npm run build`
- revisar manualmente header, Home, `Contact` y `/cv`
- confirmar que `Contact` ayuda a convertir mejor y explica menos

## Restricciones

- diff acotado
- sin rediseño amplio
- sin tocar otras rutas fuera de lo estrictamente necesario
- sin duplicar contenido
- sin reabrir `/cv`
- sin mover la fuente de verdad fuera de `src/content/site/`

## Resultado esperado

- la ruta `/cv` desaparece sin perder acceso al CV
- el visitante puede descargar el PDF desde cualquier punto lógico del cierre
- `Contact` queda más directo y profesional
- vuelve el valor breve que tenía la vieja `CV`, pero mejor editado
