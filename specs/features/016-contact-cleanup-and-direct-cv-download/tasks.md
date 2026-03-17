# Tasks - Feature 016 Contact cleanup and direct CV download

## T1. Auditar el cierre actual
- revisar `site-config.ts`
- revisar `profile-content.ts`
- revisar `src/app/contact/page.tsx`
- revisar contenido previo de `src/app/cv/page.tsx`
- revisar header y CTA de Home

## T2. Definir el contrato final
- `/cv` deja de existir como página
- el CV se mantiene como descarga directa del PDF
- header, Home y `Contact` comparten el mismo recurso
- `Contact` pasa a ser el cierre de conversión del sitio

## T3. Reescribir Contact
- ajustar eyebrow, título y descripción principal
- renombrar secciones con wording concreto
- bajar meta-copy y frases autorreferenciales
- mejorar microcopy de canales y botones

## T4. Recuperar lo útil de la vieja CV
- rescatar 2/3 señales útiles del perfil
- reincorporar un resumen profesional breve
- recuperar acciones claras hacia proyectos, email y GitHub
- evitar duplicación con Home y About

## T5. Sostener la descarga directa del CV
- mantener `Descargar CV` en Home
- mantener `Descargar CV` en header
- mantener `Descargar CV` en `Contact`
- validar que todos apunten al mismo PDF

## T6. Limpiar referencias residuales
- asegurar que `/cv` no siga como ruta
- asegurar que no existan links visibles al path `/cv`
- revisar que la navegación siga siendo coherente

## T7. Documentar el alcance final
- actualizar `spec.md`
- actualizar `plan.md`
- actualizar `tasks.md`
- actualizar `verification.md`

## T8. Validar
- correr lint
- correr build
- revisar manualmente header, Home, `Contact` y `/cv`
