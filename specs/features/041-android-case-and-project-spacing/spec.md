# Feature 041 — Android Case and Project Spacing

## Objetivo
Publicar Viaje Rentable AR como segundo proyecto Android visible en el Home y como quinto caso público, y compactar las separaciones de las páginas de proyectos.

## Alcance aprobado
1. Registrar `/projects/viaje-rentable-ar` con contenido MDX, links a código y pruebas reales del repositorio público.
2. Agregar una segunda card bajo «Desarrollo de aplicaciones» con layout de dos columnas en escritorio y apilado en móvil.
3. Reutilizar la imagen ilustrativa del README como WebP sin recortar el contenido.
4. Reducir aproximadamente el 20% del espacio vertical externo en listado y detalle de proyectos; preservar padding interno y tipografía.
5. Sustituir «Caso destacado» por «Caso de automatización» en listado.

## Contratos
- Viaje Rentable AR es un **alpha experimental**: sin afirmaciones de métricas productivas, despliegue estable o precisión OCR validada en campo.
- La recomendación visual es informativa, sin automatizar aceptación ni rechazo de viajes.
- El Home sigue priorizando automatización → ingeniería → desarrollo Android.
- Mantener el comportamiento de imágenes existente en otros casos (`cover`) y habilitar `contain` solo para la portada vertical.
- No modificar `Zibete/viaje-rentable-ar` ni repositorios externos, añadir dependencias o abrir refactors generales.
