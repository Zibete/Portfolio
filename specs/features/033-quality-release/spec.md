# Feature 033 — Quality & Release

## Objetivo
Endurecer la experiencia Engineering Trace frente a viewport reducido, cambios de preferencias de movimiento y navegación con teclado sin cambiar el modelo editorial ni el recorrido visual.

## Alcance
- Activar el workspace 3D solo con escritorio de ancho mínimo 1024 px, alto mínimo 720 px y movimiento permitido.
- Alinear la condición visual CSS con el cálculo de scroll, evitando animaciones en presentaciones estáticas.
- Evitar actualizaciones de transformaciones fuera del viewport de la escena.
- Conservar el foco de teclado visible al cambiar de etapa, trasladándolo al botón de navegación correspondiente cuando estuviera dentro de la escena que se oculta.
- Actualizar README y documentación de la feature con el contrato de compatibilidad.

## Exclusiones
- No incorporar dependencias, tests o pipelines nuevos, modificar rutas ajenas, MDX, proyectos públicos, archivos privados, CV ni imágenes.
- Sin rediseño del sitio, ni cambios en métricas o contenido de experiencia profesional.

## Criterios de aceptación
1. El modo 3D solo renderiza cuando la pantalla permite mostrar el panel completo.
2. La versión estática permanece disponible en mobile, escritorio de poca altura o movimiento reducido.
3. Scroll/resize no ejecutan transformaciones si el modo 3D no está activo o el recorrido está fuera de pantalla.
4. Los enlaces de etapas ocultas quedan fuera de tabulación; la etapa activa conserva navegación accesible.
5. No hay cambios de dependencias ni en el comportamiento de otras rutas.
