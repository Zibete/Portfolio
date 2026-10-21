# Feature 030 — Landing foundation

## Objetivo
Simplificar Inicio antes de desarrollar Engineering Trace, preservando el posicionamiento actual, la foto original, la accesibilidad y las páginas internas.

## Decisiones aprobadas
- Audiencia principal: líderes técnicos y Engineering Managers.
- Próxima experiencia: cinco escenas de ingeniería conectadas por scroll con profundidad y paneles técnicos.
- Evidencia final: Migrar SAP como caso principal y ZIBE como complementario.
- No desarrollar una demo funcional, backend ni servicio de IA.

## Alcance de este PR
- Reducir fotografía sin modificar el archivo original y eliminar halos, overlays y etiquetas sobre ella.
- Retirar carrusel tecnológico y bloques duplicados de proceso/credibilidad en Inicio.
- Simplificar el hero y cierre; conservar acceso a proyectos, CV y contacto.
- Preparar el contenedor de Inicio para un futuro componente sticky (sin overflow oculto global).
- Retirar contratos editoriales y estilos del carrusel que quedaron sin uso.
- Conservar temporalmente el caso destacado existente hasta la iteración de evidencia.

## Fuera de alcance
- Engineering Trace, sus cinco escenas, Motion, navegación por etapas.
- Cambios en otras rutas, MDX de proyectos, CV o archivos de imagen.
- Incorporación de dependencias o servicios nuevos.
- Demo de validación de documentos.

## Criterios de aceptación
1. La Home conserva posicionamiento y enlaces públicos funcionales.
2. La foto es la misma, más pequeña y sin overlays ni halos.
3. El carrusel y los bloques repetidos dejan de renderizarse.
4. Ningún enlace apunta a escenas que aún no existen.
5. El cierre mantiene CTA de contacto y CV.
6. lint, build y revisión visual responsive quedan registrados según ejecución real.
