# Plan — Feature 008 Global page design standardization

## Estrategia

Tomar el lenguaje visual ya consolidado en Home y convertirlo en una base coherente para el resto de las rutas principales, sin abrir todavía una reescritura de contenido ni una iniciativa visual gigante.

La implementación debe priorizar:
1. coherencia visual global
2. reutilización
3. simplicidad
4. continuidad con Home

## Fases

### Fase 1 — Auditoría de rutas internas
- revisar cómo están resueltas hoy `about`, `contact`, `cv`, `experience` y `skills`
- detectar qué se siente demasiado placeholder o fuera del sistema visual
- identificar qué patrones de Home conviene reutilizar

### Fase 2 — Definición del sistema interno
- decidir una base chica de piezas compartidas para páginas internas
- unificar superficies, radios, borders, spacing y jerarquía tipográfica
- decidir cómo reutilizar motion existente sin sobreanimar

### Fase 3 — Implementación
- crear o refinar componentes compartidos mínimos
- migrar rutas placeholder al nuevo sistema
- alinear `/projects` y `/projects/[slug]` solo donde haga falta para coherencia visual

### Fase 4 — Pulido y validación
- revisar dark mode
- revisar light mode
- validar continuidad visual entre Home y rutas internas
- correr lint/build

## Archivos esperables a tocar

### Probables
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/cv/page.tsx`
- `src/app/experience/page.tsx`
- `src/app/skills/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/app/globals.css`

### Nuevos o probables
- `src/components/shared/page-intro.tsx`
- `src/components/shared/page-section.tsx`
- `src/components/shared/page-aside.tsx`

### Posibles, solo si hace falta
- `src/components/shared/page-placeholder.tsx`
- `src/components/shared/container.tsx`

## Restricciones

- no rediseñar Home
- no mezclar con integración de datos reales
- no reemplazar contenido real por contenido inventado
- no abrir animaciones complejas
- no agregar dependencias nuevas salvo necesidad mínima real
- no convertir esta feature en una reescritura completa del sitio

## Resultado esperado

Al finalizar, el sitio debe sentirse como un solo producto: Home sigue siendo la referencia visual, y el resto de las rutas principales deja de verse como placeholders aislados.