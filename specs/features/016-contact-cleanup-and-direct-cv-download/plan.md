# Plan - Feature 016 Contact cleanup and direct CV download

## Estrategia

La feature debe cerrar un problema concreto de UX y de mensaje con el menor diff posible:

1. quitar la ruta `/cv` del flujo principal
2. convertir el CTA de Home en una descarga directa real
3. concentrar en `Contact` la función de cierre del recorrido
4. rescatar solo el contenido útil de la página `CV`
5. eliminar redundancias editoriales evidentes entre Home, Contact y CV

No es una feature de reescritura completa del mensaje del sitio. Es una mejora concreta de conversión, claridad y jerarquía.

## Ruta implementada

- auditar cómo se usa hoy `CV` en navegación, Home y contenido
- identificar qué partes de `/cv` realmente suman
- mover o integrar solo eso en `Contact`
- eliminar la ruta `/cv`
- apuntar el CTA principal de CV al archivo PDF
- dejar el flujo resultante:
  - Home -> Descargar CV
  - Contact -> vías directas + contexto mínimo útil

## Fases

### Fase 1 - Auditoría del flujo actual
- revisar `navItems`
- revisar CTA de Home
- revisar contenido actual de `contact`
- revisar contenido actual de `cv`
- revisar si existen links internos adicionales hacia `/cv`

### Fase 2 - Definición del nuevo contrato
- `CV` deja de ser página
- `Contact` pasa a concentrar cierre y vías directas
- Home ofrece descarga directa del PDF

### Fase 3 - Actualización de contenido
- recortar texto redundante en `contact`
- decidir qué señales rápidas de `cv` vale la pena conservar
- mover ese contenido a `contact` o integrarlo en su estructura
- ajustar labels de CTA

### Fase 4 - Implementación de rutas y navegación
- quitar `/cv` de `navItems`
- actualizar CTA de Home para descarga directa
- eliminar `src/app/cv/page.tsx`
- corregir cualquier referencia interna residual

### Fase 5 - Validación
- revisar coherencia del recorrido
- revisar que no queden referencias rotas a `/cv`
- correr validaciones del repo
- confirmar que `Contact` convierte mejor y explica menos

## Restricciones

- no rediseñar Home completa
- no abrir una reescritura general de copy
- no mezclar esta feature con About/Experience/Projects
- no introducir una nueva capa de contenido salvo que sea estrictamente necesaria
- no tocar el archivo PDF ni su path salvo para enlazarlo correctamente
- no inventar nuevas secciones si el problema se resuelve simplificando

## Resultado esperado

El sitio debe quedar más simple y más coherente:

- el visitante puede descargar el CV directo desde Home
- `Contact` funciona como cierre concreto
- desaparece la duplicación entre `Contact` y `CV`
- se elimina una ruta débil que hoy agrega fricción sin aportar suficiente valor

## Archivos esperables a tocar

- `src/content/site/site-config.ts`
- `src/content/site/profile-content.ts`
- `src/app/contact/page.tsx`
- `src/app/page.tsx`
- `src/components/sections/home-hero.tsx`
- `src/components/layout/*` si la navegación lo necesita
- `src/app/cv/page.tsx` (delete)

## Fuera de alcance explícito

- redefinir la identidad global del portfolio
- rehacer `Contact` como landing compleja
- agregar formularios
- tocar proyectos o MDX
- cleanup amplio de todo el sitio