# ✨ feat: cerrar Feature 014 final visual polish

Base: `master`
Rama: `feat/014-final-visual-polish`

## 🔧 Qué se cambió

- se cerró el polish visual final con un sistema shared de tags con ícono mediante `src/components/shared/tag-chip.tsx` y `src/lib/tag-visuals.ts`
- `src/components/sections/stack-marquee.tsx` dejó de resolver íconos con mapping local y pasó a consumir el contrato shared
- Home, `/projects`, `/projects/[slug]`, `/skills` y `/experience` migraron al mismo render de tags/chips
- `src/app/globals.css` concentró el hover shared de `.interactive-chip`, `.interactive-card` y `.interactive-card-subtle`, incluyendo el ajuste final para que el aclarado de fondo se perciba con claridad en light y dark
- la feature quedó respaldada por `spec.md`, `plan.md`, `tasks.md` y `verification.md` en `specs/features/014-final-visual-polish/` como source of truth de la iteración

## 💡 Por qué

- el sitio necesitaba cerrar la consistencia interactiva entre cards y tags sin reabrir layout, navegación ni motion
- llevar tags, íconos y hover al shared evita divergencias locales y mantiene un resultado sobrio, premium y fácil de defender


## 💻 Validación local

```bash
npm run lint
npm run build
```

- [x] smoke local sobre `/, /projects, /projects/zibe, /skills, /experience` con respuesta `200`

## ✅ Validación manual

- [x] `src/app/globals.css` confirma que el aclarado de cards vive en el sistema shared
- [x] `src/components/sections/stack-marquee.tsx` confirma que no quedó mapping local de íconos
- [x] Home, Projects, detalle, Skills y Experience confirman uso del contrato shared de tags

## 🚫 Fuera de alcance

- cambios de layout, copy, header o nav
- cambios en motion de entrada o velocidad del marquee
- dependencias nuevas
- refactors globales fuera del sistema shared de tags y hover polish