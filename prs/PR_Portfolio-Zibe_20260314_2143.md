# ✨ feat(home): add reusable motion system to landing

Base: `master`
Rama: `feat/006-motion-system`

## ✨ Qué se cambió
- `src/app/globals.css`
  - se unificó la base de motion con `motion-enter`, `motion-reveal` y delays compartidos
  - se reemplazó el sistema viejo del hero por el nuevo naming
  - se agregó soporte de `prefers-reduced-motion: reduce` para entradas/reveals
  - se corrigió el marquee para que deje de animarse cuando `reduce` está activo
- `src/components/sections/home-hero.tsx`
  - se migraron badge, nombre, bloque de copy, CTAs y summary cards al sistema `motion-enter`
  - se ordenó el stagger con delays compartidos
- `src/components/sections/stack-marquee.tsx`
  - se aplicó `motion-reveal` al label y al wrapper visual del marquee
  - el track principal siguió usando `stack-marquee`
- `src/components/sections/featured-project.tsx`
  - la card principal pasó a `motion-reveal`
  - las cards laterales pasaron a `motion-enter` con delays compartidos
- `src/app/page.tsx`
  - se aplicó el sistema nuevo al bloque de contexto, highlights, bloque de credibilidad y CTA lateral

## 🧩 Por qué
- evitar animaciones ad hoc entre bloques de Home
- dejar una base chica, consistente y reusable para futuras iteraciones
- mejorar accesibilidad en `reduced motion` sin abrir una capa nueva de motion

## 🔎 Validación manual
- [ ] revisar Home en dark mode
- [ ] revisar Home en light mode
- [ ] verificar entrada sutil del hero
- [ ] verificar reveal de highlights, featured project y bloque de credibilidad
- [ ] verificar que el marquee se siga viendo correcto en modo normal
- [ ] activar `prefers-reduced-motion: reduce` y confirmar que el marquee quede estático

## 🧪 Validación Local
```bash
npm run lint
npm run build
```

## 🚫 Fuera de alcance
- viewport-trigger / scroll-trigger para bloques below-the-fold
- cambios de contenido o rediseño de Home
- nuevas librerías de animación

## 🧾 Commits incluidos
- `fe8b4` `feat(motion-system): add comprehensive plan, tasks, and verification for motion feature`
- `f1d11` `feat(home): add reusable motion system to landing`
