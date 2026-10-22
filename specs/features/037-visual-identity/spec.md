# Feature 037 — Visual Identity

## Objetivo
Incorporar un acento distintivo que destaque decisiones y evidencia sin competir con el cyan de navegación y acciones.

## Decisiones
- Conservar identidad dark-first y `--primary` cyan en ambos temas.
- Introducir únicamente `--signal`, con valor oscuro sobre fondos claros (#496714) y verde lima sobre fondos oscuros (#c9f36b).
- Aplicar signal a delimitadores puntuales: statement del Hero, etiqueta de evidencia destacada, resultados/progreso del Trace, hitos de trayectoria y borde de caso destacado.
- No usar el nuevo color para texto secundario masivo ni sustituir estados de foco.
- Reutilizar Tailwind y CSS existentes, sin dependencias, imágenes ni motion adicional.

## Fuera de alcance
- Nuevos componentes, nueva tipografía, cambios de navegación, animaciones o cambios de contenido.
- Iteración 038: comportamiento y navegación del Engineering Trace.
- Repositorios externos, datos corporativos y CV.

## Aceptación
- El acento resalta solo evidencia e hitos clave.
- Se preservan acciones y enlaces cyan, lectura de temas claro y oscuro.
- Cambios limitados a tokens y clases, sin lógica.
- Vercel SUCCESS del HEAD final.
