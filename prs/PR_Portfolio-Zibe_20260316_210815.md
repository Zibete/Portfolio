# feat: cerrar Feature 016 contact cleanup and direct CV download

Base: `master`
Rama: `016-contact-cleanup-and-direct-cv-download`

## Qué se cambió

- se eliminó `src/app/cv/page.tsx` para sacar `/cv` como página del flujo
- Home ahora usa `Descargar CV` como CTA principal y descarga directo el PDF
- el header mantiene `Descargar CV` como botón de descarga al mismo PDF
- `Contact` quedó como cierre de conversión con:
  - resumen profesional breve
  - canales directos
  - acciones a proyectos, email y GitHub
- se reescribió el contenido de `Contact` para bajar meta-copy, ajustar labels y recuperar lo útil de la vieja `CV`
- `spec.md`, `plan.md`, `tasks.md` y `verification.md` de la 016 quedaron alineados con el alcance final real

## Por qué

- `/cv` agregaba fricción como página intermedia y duplicaba parte del cierre del recorrido
- el portfolio necesitaba mantener la descarga directa del CV sin perder contexto útil para evaluar fit
- `Contact` debía quedar más claro, más directo y más profesional, sin convertirse en una mini página `About` o `CV`

## Validación local

```bash
npm run lint
npm run build
```

- [x] `npm run lint`
- [x] `npm run build`

## Validación manual

- [x] header, Home y `Contact` apuntan al mismo PDF
- [x] `/cv` responde `404`
- [x] `Contact` muestra `Resumen profesional` antes que `Canales directos`
- [x] `Contact` mantiene acciones a `Ver proyectos`, `Escribir por email` y `Ver GitHub`
- [x] no quedaron links visibles a `/cv`

## Fuera de alcance

- reabrir `/cv` como página o redirect
- formularios de contacto
- rediseño amplio de Home, Header o layout
- reescritura editorial global fuera del cierre de la 016

## Commits incluidos

- `18bb0` `docs(specs): open feature 016 contact cleanup and direct cv download`
- `ba704` `feat: close feature 016 cv download and contact cleanup`
