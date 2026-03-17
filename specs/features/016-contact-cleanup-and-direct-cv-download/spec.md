# Feature 016 - Contact cleanup and direct CV download

## Objetivo

Simplificar el cierre del recorrido del portfolio eliminando la página `/cv` como destino independiente, manteniendo el CV como descarga directa y convirtiendo `Contact` en una página de conversión más clara, más breve y editorialmente mejor resuelta.

## Alcance

### Entra en esta feature
- eliminar `/cv` como página del sitio
- mantener el acceso al CV como descarga directa del PDF
- actualizar Home para que su CTA principal descargue el CV
- mantener en el header un acceso `Descargar CV` que apunte al mismo PDF
- limpiar editorialmente `Contact`
- bajar meta-copy, retórica y labels ambiguos en `Contact`
- reintegrar en `Contact` solo lo valioso que aportaba la vieja página `CV`
- dejar acciones claras desde `Contact` hacia:
  - proyectos
  - email
  - GitHub
- mantener la fuente de verdad del contenido en `src/content/site/`
- alinear `spec.md`, `plan.md`, `tasks.md` y `verification.md` con el resultado real final

### No entra en esta feature
- rediseñar Home, About, Projects o el layout general
- reabrir `/cv` como landing o página híbrida
- rehacer el posicionamiento global del portfolio
- introducir formulario de contacto
- tocar MDX, assets o lógica de datos más allá del link al PDF
- abrir una reescritura editorial completa de todo el sitio

## Problema que resuelve

La página `/cv` agregaba un paso intermedio débil dentro del recorrido. Al mismo tiempo, la primera limpieza de `Contact` resolvió parte del problema de flujo pero dejó una página demasiado autorreferencial, con labels poco naturales y pérdida de parte del valor breve que sí aportaba la vieja `CV`.

La feature final resuelve ambos problemas:

- elimina `/cv` como ruta
- conserva el CV como recurso descargable inmediato
- deja `Contact` como cierre concreto y profesional
- recupera resumen, señales y accesos útiles sin duplicar el pitch del sitio

## Contrato editorial final

- `Home` presenta el fit y ofrece descarga directa del CV
- el header mantiene `Descargar CV` como acceso utilitario al mismo PDF
- `Contact` concentra:
  - canales directos
  - resumen breve del perfil
  - acciones claras de siguiente paso
- `Contact` no debe:
  - explicar el recorrido del sitio
  - justificar su propia existencia
  - sonar marketinero o abstracto
  - convertirse en una mini página `About` o una mini página `CV`

## Implementación final esperada

- `src/app/cv/page.tsx` deja de existir
- `src/content/site/site-config.ts` concentra el path del PDF y los CTAs de descarga
- `src/content/site/profile-content.ts` concentra el contenido final de `Contact`
- `src/app/contact/page.tsx` renderiza ese contenido sin hardcodes nuevos
- el header, Home y `Contact` comparten el mismo destino de descarga del CV

## Requisitos funcionales

1. `/cv` no debe seguir existiendo como página navegable.
2. El CV debe seguir accesible como descarga directa del PDF.
3. Home debe mostrar `Descargar CV` como CTA principal.
4. El header debe mantener un botón `Descargar CV` que use el mismo PDF.
5. `Contact` debe priorizar canales directos y contexto útil.
6. `Contact` debe recuperar un resumen breve y acciones claras provenientes de la vieja `CV`.
7. No deben quedar headings ambiguos, vacíos o meta-editoriales en `Contact`.
8. La capa de contenido debe seguir siendo la fuente de verdad.

## Requisitos no funcionales

- mantener diffs acotados
- no introducir dependencias nuevas
- preservar la estructura actual del repo
- mantener tono claro, profesional y directo
- no duplicar el pitch principal ya resuelto en Home

## Criterio de done

- `/cv` fue eliminada como ruta
- header, Home y `Contact` descargan el mismo PDF
- `Contact` quedó más natural, útil y profesional
- se recuperó lo mejor de la vieja `CV` sin duplicación
- los labels de `Contact` son concretos y defendibles
- `npm run lint` y `npm run build` pasan
- la documentación de la 016 refleja el alcance final real
