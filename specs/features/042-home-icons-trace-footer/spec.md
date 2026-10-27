# Feature 042 — Home icons, Trace density and footer

## Objetivo

Corregir el ícono Android, identificar visualmente los dos proyectos Android y compactar el Engineering Trace y el footer manteniendo la identidad del portfolio.

## Alcance aprobado

1. Corregir el `viewBox` del SVG Android existente, sin cambiar su carácter gráfico.
2. Obtener el ícono oficial de ZIBE del repositorio `Zibete/Zibe` y convertirlo a un SVG vectorial fiel, liviano y transparente; detener la implementación si la fidelidad no es aceptable.
3. Mostrar un ícono `Route` de Lucide para Viaje Rentable AR con el mismo contenedor, escala y alineación que ZIBE.
4. Reducir moderadamente el espacio interno horizontal y vertical del inspector 3D sin alterar el recorrido `300svh`, sus transforms, la perspectiva, el clipping ni el fallback estático.
5. Dar al párrafo introductorio del Engineering Trace el ancho completo del `Container` usando `text-pretty`.
6. Simplificar el footer: «Matías Peralta» a la izquierda y enlaces reales «GitHub · LinkedIn · Contacto» a la derecha.

## Contratos

- Conservar la prioridad del Home: automatización, proceso de ingeniería y proyectos Android complementarios.
- Mantener la densidad, tipografía, colores dark-first y accesibilidad de los componentes existentes.
- Preservar navegación por teclado, `prefers-reduced-motion`, scroll y responsive del Trace.
- No tocar repositorios externos ni incorporar nuevas dependencias o claims profesionales.
- Implementar en commits pequeños sobre `master`, revisar diffs, ejecutar tests/lint/build y comprobar CI remoto antes de cerrar.
