# Feature 035 — Layout & Density

## Objetivo
Reducir espacio vertical no funcional en Home y páginas internas, y mejorar la distribución responsive sin modificar la narrativa, el orden de secciones ni el comportamiento de Engineering Trace.

## Alcance
- Compactar márgenes de entrada y salida del Hero, caso destacado, Trace, evidencia complementaria y CTA final.
- Reducir espaciado exterior en About, Projects, Experience, Skills y Contact.
- En Home, ajustar la fotografía para móvil y distribuir las tres tarjetas de metadatos del caso destacado horizontalmente en tablet, conservando el layout vertical en desktop y móvil estrecho.
- Reutilizar componentes y clases Tailwind existentes.

## Decisiones
1. Mantener el orden de Home definido en la feature 034.
2. Conservar la longitud de recorrido `h-[340svh]` y la lógica de animación del Trace; su evolución pertenece a la iteración 038.
3. No alterar contenido editorial, imágenes, enlaces, CV, datos, colores o accesibilidad existente.
4. Conservar `master` como base del PR sin fusionar automáticamente.

## Fuera de alcance
- Redistribución editorial y ancho de la tarjeta única ZIBE (feature 036).
- Incorporación del color Signal Lime y nuevo tratamiento visual (feature 037).
- Nuevas interacciones o ajustes de duración del recorrido 3D (feature 038).
- Repositorios externos, dependencias, servicios nuevos y cambios a proyectos MDX.

## Aceptación
- La primera evidencia aparece antes sin crear saltos de navegación.
- El caso destacado mantiene tarjetas legibles en móvil, tablet y escritorio.
- El Trace conserva cinco etapas, enlaces y fallback con movimiento reducido.
- No se modifican copy, rutas, lógica de datos ni contratos.
- La compilación de Vercel debe validarse en el HEAD exacto del PR.
