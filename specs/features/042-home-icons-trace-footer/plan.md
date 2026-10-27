# Home Icons, Trace Density and Footer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolver seis mejoras visuales aprobadas del Home y su footer sin regresiones funcionales.

**Architecture:** Conservar componentes y contratos actuales; incorporar un SVG estático obtenido del logo real, un ícono Lucide ya disponible, y ajustes localizados de clases Tailwind. La animación 3D mantiene su lógica y solo cambia la presentación de su contenedor.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, lucide-react, node:test.

**Spec:** `specs/features/042-home-icons-trace-footer/spec.md`

## Global Constraints

- Trabajar sobre `master` con commits atómicos y sin dependencias nuevas.
- No editar los repositorios externos ZIBE y Viaje Rentable AR.
- Mantener rutas, claims y contenidos profesionales actuales, salvo footer aprobado.
- Conservar `300svh`, controles de navegación, animación 3D y fallback de movimiento reducido.
- Si el SVG derivado del ícono oficial pierde fidelidad, detenerse antes de incorporarlo.

## Review Focus

- SVG Android con coordenadas negativas: su `viewBox` debe mostrar el path completo.
- Ícono ZIBE en dark/light: sin fondo blanco accidental, sin desbordamiento ni referencias externas.
- Card Android doble: ambos íconos alineados y distinguibles a 32px, también en móvil.
- Trace al umbral de 1024 × 720 y en pantallas anchas: sin recortes ni cambios de activación.
- Footer de ancho estrecho: enlaces navegables con foco visible y separación correcta.

---

### Task 1: Android icon and project identities

**Files:**
- Create: `public/images/projects/zibe-icon.svg`
- Modify: `src/components/sections/complementary-evidence.tsx`
- Test: `tests/home-content.test.mjs`

**Interfaces:** El SVG es un recurso web estático local; la tarjeta ZIBE usa `Image` y Viaje Rentable usa `Route` de `lucide-react` mediante `item.id`.

- [ ] Añadir tests RED que comprueben `viewBox` del Android, recurso local SVG válido y tratamiento de íconos por ID.
- [ ] Ejecutar `node --test tests/home-content.test.mjs` y comprobar el fallo esperado.
- [ ] Vectorizar fielmente el logo oficial de ZIBE, validar a tamaño real de UI y convertirlo en SVG local independiente.
- [ ] Corregir `viewBox` Android y presentar ambos íconos en tarjetas alineadas de Home.
- [ ] Ejecutar tests focalizados y `git diff --check`; confirmar verde.
- [ ] Commit `fix(home): corregir icono Android y distinguir proyectos`.

### Task 2: Engineering Trace density

**Files:**
- Modify: `src/components/sections/engineering-trace.tsx`
- Test: `tests/home-content.test.mjs`

**Interfaces:** Solo clases Tailwind sobre el `section`, texto de introducción, tarjeta `.trace-scene` y geometría visible del inspector; no cambia su algoritmo.

- [ ] Añadir test RED del ancho del texto, clases de densidad y contratos de scroll/fallback.
- [ ] Ejecutar el test y confirmar fallo esperado.
- [ ] Aplicar ajustes moderados y verificar legibilidad de todas las escenas.
- [ ] Ejecutar test y revisión visual en tamaños desktop y fallback.
- [ ] Commit `style(home): compactar inspector sin alterar recorrido`.

### Task 3: Footer functional links

**Files:**
- Modify: `src/components/layout/site-footer.tsx`
- Modify: `src/content/site/site-config.ts`
- Modify: `src/types/site.ts`
- Test: `tests/home-content.test.mjs`

**Interfaces:** Nombre en `siteConfig.name`; enlaces verificados a GitHub, LinkedIn y `/contact`; eliminar solo propiedades del footer que dejan de usarse.

- [ ] Añadir test RED que compruebe el cierre exacto, enlaces y ausencia de eslogan redundante.
- [ ] Ejecutar el test y confirmar fallo esperado.
- [ ] Implementar footer responsive con hover/focus visible y ajustar fuente de contenido/tipos.
- [ ] Ejecutar test y comprobar mobile/desktop.
- [ ] Commit `style(layout): simplificar footer con enlaces utiles`.

### Task 4: Release verification

**Files:**
- Modify: `specs/features/042-home-icons-trace-footer/tasks.md`
- Modify: `specs/features/042-home-icons-trace-footer/verification.md`

- [ ] Ejecutar los tres tests actuales más los nuevos checks, `npm run lint` y `npm run build`.
- [ ] Revisar diff, estado de Git y comparativa contra el spec.
- [ ] Verificar el comportamiento en desktop y móvil (o declarar la limitación concreta).
- [ ] Confirmar CI local y remoto, hacer push directo a `master` y registrar commit final.
