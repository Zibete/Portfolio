# fix(home): harden Engineering Trace responsiveness and keyboard behavior

Base: master
Rama: feat/033-quality-release

## Qué se cambió
- Media query para activar 3D solo en escritorios con altura suficiente.
- Los listeners de scroll solo agendan frames en modo 3D; se cancelan al cambiar de preferencia.
- Las actualizaciones de transformaciones se omiten cuando el recorrido está fuera del viewport.
- Al cambiar de etapa con un enlace enfocado, el foco pasa a su botón de navegación visible.
- README y feature 033 documentan el contrato de viewport y accesibilidad.

## Commits incluidos
- fix(home): harden trace responsive behavior and scroll lifecycle

## Contratos
- Sin cambios en contenido, rutas o integraciones.
- Sin dependencias nuevas ni pipelines agregados.
- Despliegue y build gestionados por la integración existente con Vercel.
