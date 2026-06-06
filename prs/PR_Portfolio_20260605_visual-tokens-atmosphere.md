# PR Portfolio — Refresh visual tokens and global atmosphere

Base: `master`
Rama: `codex/visual-tokens-atmosphere`

## Qué se cambió

- `src/app/globals.css`
  - Ajuste de tokens globales para una paleta dark-first más profunda y menos gris corporativa.
  - Primary cyan/blue más vivo y acento cálido sutil para profundidad visual.
  - Fondo global con aura superior cyan/blue, mesh glow controlado y acento cálido mínimo.
  - Hover/active de navegación alineados al nuevo color principal.

- `src/components/layout/site-header.tsx`
  - Header modernizado como superficie semi-floating en desktop.
  - Navegación mobile en una fila scrolleable para evitar overflow y altura excesiva.
  - Mayor presencia visual del botón `Descargar CV` sin cambiar el flujo.

- `src/components/sections/home-hero.tsx`
  - Ajustes puntuales de aura, badges, CTAs, proof strip y marco de la foto.
  - Proof cards convertidas en una strip más integrada y menos corporativa.
  - Correcciones responsive para que nombre y badges largos no se recorten en mobile.

## Commits incluidos

- `style(ui): refresh visual tokens and atmosphere`

## Validación local

- [x] `npm run lint`
- [x] `npm run build`

## Validación manual

- [x] Home desktop dark mode revisada.
- [x] Home desktop light mode revisada.
- [x] Home mobile dark mode revisada.
- [x] Home mobile light mode revisada.
- [x] Header responsive revisado.
- [x] Sin overflow horizontal en desktop ni mobile.
- [x] Foto, overlays y proof strip integrados visualmente.

## Notas/riesgos

- `npm run build` pasa, pero Next.js muestra un warning por múltiples `package-lock.json` y selección inferida de workspace root fuera del repo.
- El navegador embebido respondió para mediciones DOM y cambio de tema, pero la captura automática de screenshot falló por timeout. Se usaron mediciones responsive y capturas headless como apoyo visual.

## Fuera de alcance

- No se tocaron Projects, About, Experience, Skills, Contact ni contenido grande.
- No se agregaron dependencias.
- No se modificó arquitectura ni se abstrajeron componentes.
- No se cambió copy estructural del portfolio.
