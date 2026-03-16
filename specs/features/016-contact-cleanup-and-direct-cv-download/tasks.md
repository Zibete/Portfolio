# Tasks - Feature 016 Contact cleanup and direct CV download

## T1. Auditar uso actual de CV
- revisar `site-config.ts`
- revisar `profile-content.ts`
- revisar `src/app/cv/page.tsx`
- revisar CTA de Home
- revisar navegación principal
- revisar referencias internas hacia `/cv`

## T2. Definir nuevo contrato editorial
- `CV` deja de existir como página
- `Contact` concentra cierre y vías directas
- Home descarga el PDF directo
- decidir qué contenido de `CV` realmente vale rescatar

## T3. Limpiar contenido de Contact
- recortar pitch repetido
- dejar descripción breve
- priorizar email, LinkedIn y GitHub
- mantener ubicación solo si suma
- integrar señales rápidas solo si ayudan a convertir

## T4. Integrar lo útil de CV en Contact
- identificar bloques rescatables
- mover o adaptar snapshots / señales rápidas si aportan
- evitar duplicar narrativa ya presente en Home
- dejar Contact como cierre, no como mini-About

## T5. Actualizar CTA principal de CV
- cambiar label a `Descargar CV`
- apuntar al PDF directo
- revisar atributos o patrón de descarga según implementación existente

## T6. Quitar CV de la navegación y del routing principal
- remover `/cv` de `navItems`
- eliminar o dejar inaccesible `src/app/cv/page.tsx`
- revisar links residuales a `/cv`

## T7. Ajustar componentes afectados
- revisar Home si necesita leer el CTA actualizado
- revisar Contact para mostrar el nuevo contenido final
- revisar cualquier componente shared que dependa del bloque `cv`

## T8. Validar consistencia
- asegurar que no queden duplicaciones fuertes entre Home y Contact
- asegurar que no haya referencias rotas a `/cv`
- correr lint y build
- revisar manualmente el recorrido

## T9. Dejar documentado el cambio
- alinear `spec.md`, `plan.md`, `tasks.md` y `verification.md`
- dejar claro por qué `/cv` se elimina y qué función absorbe `Contact`