# Plan — Feature 001 ZIBE

## Estrategia

Implementar la feature en dos capas:

1. **Capa de contenido**
   - leer el repo de ZIBE
   - extraer hechos verificables
   - resumirlos en una narrativa curada para portfolio
   - estructurar el contenido en MDX

2. **Capa de presentación**
   - conectar ese contenido a la lista de proyectos
   - renderizar el detalle por slug
   - asegurar coherencia visual con el shell actual

## Enfoque de implementación

### Fase 1 — Descubrimiento y curado
- revisar README y documentación del repo
- identificar stack, arquitectura, funcionalidades y estado actual
- detectar señales de calidad técnica
- seleccionar qué información aporta valor de portfolio y cuál no

### Fase 2 — Modelado del contenido
- crear el archivo MDX de ZIBE
- completar frontmatter alineado con el modelo del proyecto
- redactar el cuerpo del caso de estudio en español

### Fase 3 — Integración en el sitio
- asegurar que `/projects` liste ZIBE correctamente
- asegurar que `/projects/zibe` renderice contenido real
- agregar el bloque destacado mínimo en Home si entra sin romper el alcance

### Fase 4 — Pulido y validación
- revisar copy
- validar responsive básico
- correr lint/build
- hacer checklist manual

## Archivos esperables a tocar

### Contenido
- `src/content/projects/zibe.mdx`

### Tipado / helpers de contenido
- solo si es estrictamente necesario:
  - `src/types/content.ts`
  - `src/lib/mdx/content.ts`

### Rutas / render
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/app/page.tsx`

### Componentes
- solo si hace falta:
  - `src/components/sections/...`
  - `src/components/shared/...`

## Restricciones

- no cambiar arquitectura global sin necesidad
- no hacer refactors grandes
- no meter más de un proyecto real
- no mezclar esta feature con Contact, Experience o CV
- no agregar dependencias salvo necesidad mínima real

## Resultado esperado

Al cerrar esta feature, el portfolio debe tener una primera pieza real y defendible, capaz de mostrar ZIBE como proyecto insignia del sitio.
