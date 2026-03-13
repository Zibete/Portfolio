# 002 Arquitectura de información

## Rutas principales

- `/`
- `/about`
- `/projects`
- `/projects/[slug]`
- `/experience`
- `/skills`
- `/contact`
- `/cv`

## Propósito de cada ruta

- Inicio: orientación rápida, posicionamiento y navegación principal
- Sobre mí: resumen profesional y contexto narrativo
- Proyectos: selección curada de trabajo relevante y casos de estudio
- Detalle de proyecto: un proyecto o caso de estudio por slug
- Experiencia: hitos de carrera presentados desde su impacto
- Habilidades: capacidades agrupadas con contexto de negocio
- Contacto: vía simple para contacto futuro
- CV: página orientada a la futura descarga principal

## Orden de navegación

- Inicio
- Sobre mí
- Proyectos
- Experiencia
- Habilidades
- Contacto
- CV

## Supuestos de fuente de contenido

- el copy de sitio vive en configuración local file-based
- el contenido de detalle de proyectos y experiencia vive en archivos `.mdx` locales
- los assets viven en `public/images/` y `public/og/`

## Restricciones de IA

- no hay secciones ocultas en v1
- no hay áreas de producto anidadas ni rutas admin
- no hay taxonomía de blog
