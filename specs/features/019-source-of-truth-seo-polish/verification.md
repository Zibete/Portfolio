# Verification — FEAT 019

## Verificación de fixes públicos

- [ ] ya no aparece “Proyecto Proyecto …” en `/projects`
- [ ] ya no aparece “Efocado” en el footer
- [ ] no quedan errores visibles equivalentes en los archivos tocados

## Verificación de source of truth

- [ ] Home ya no overridea manualmente el contenido del featured project
- [ ] summary / role / year / tags (o equivalentes) salen de una sola fuente de verdad
- [ ] el proyecto destacado mantiene coherencia con su contenido real
- [ ] el resultado final no depende de duplicación editorial entre Home y el contenido del proyecto

## Verificación de orden

- [ ] proyectos se ordenan mediante un criterio explícito y entendible
- [ ] el orden ya no depende solo de heurísticas implícitas
- [ ] featured project y listado general no entran en conflicto
- [ ] experiencia fue revisada y quedó correctamente justificada aunque no cambie o aunque sí cambie

## Verificación de metadata pública

- [ ] metadata global incluye `metadataBase`
- [ ] `openGraph` está presente y consistente
- [ ] `twitter` está presente y consistente
- [ ] la metadata no rompe el build
- [ ] el sitio queda mejor preparado para compartir enlaces

## Verificación de base pública

- [ ] existe `sitemap.ts`
- [ ] existe `robots.ts`
- [ ] existe `not-found.tsx`
- [ ] las nuevas piezas respetan el estándar del proyecto
- [ ] no introducen ruido visual ni de arquitectura

## Verificación documental

- [ ] `README.md` refleja el estado real actual
- [ ] `docs/PROJECT_CONSTITUTION.md` no mantiene referencias desalineadas con el producto actual
- [ ] `spec.md`, `plan.md`, `tasks.md` y `verification.md` reflejan el alcance final real

## Verificación visual/técnica

- [ ] revisar Home en desktop
- [ ] revisar Home en mobile
- [ ] revisar Projects en desktop
- [ ] revisar Projects en mobile
- [ ] ejecutar lint
- [ ] ejecutar build

## Fuera de alcance confirmado

- [ ] sin rediseño visual mayor
- [ ] sin nuevas secciones
- [ ] sin cambios profundos de narrativa transversal
- [ ] sin backend/contact form