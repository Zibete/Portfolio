# Constitución del proyecto

## Propósito

Este proyecto existe para construir un portfolio profesional para Matías Peralta con dos objetivos:

- aumentar las posibilidades de conseguir entrevistas
- funcionar como un vehículo real para aprender y aplicar desarrollo web moderno

## Audiencia principal

La audiencia principal son líderes de producto y negocio que necesitan entender el valor profesional con rapidez, sin perder confianza en la profundidad técnica.

## Posicionamiento profesional

El portfolio debe posicionar a Matías Peralta alrededor de:

- desarrollo Android
- automatización end-to-end
- mejora continua
- eficiencia operativa

El mensaje debe sostener un balance cercano a 50% técnico y 50% negocio.

## Principios de producto

- Cada página debe ayudar a entender el fit profesional con más rapidez.
- La estructura va antes que el polish.
- El contenido debe ser escaneable antes de ser exhaustivo.
- El sitio debe mantenerse file-based y fácil de evolucionar sin herramientas admin.
- Cada incorporación debe reforzar la CTA principal pública: descargar el CV.

## Principios de diseño

- Dirección visual dark-first.
- Estética fuerte, moderna y cercana a un producto tech.
- Evitar clichés genéricos de sitio personal.
- Mantener una navegación simple y predecible.
- Priorizar contraste, jerarquía tipográfica y densidad informativa por sobre el adorno.

## Límites de alcance de v1

La v1 pública incluye:

- home
- about
- projects
- páginas de detalle de proyecto
- experience
- skills
- contact

La primera versión no debe incluir:

- blog
- notes
- autenticación
- dashboard admin
- flujos de backend complejos
- scraping de contenido

## Decisiones técnicas base

- Framework: Next.js con App Router
- Lenguaje: TypeScript
- Estilos: Tailwind CSS
- Base de UI: shadcn/ui
- Manejo de tema: next-themes
- Arquitectura de contenido: contenido local file-based con MDX
- Postura de backend: sin backend obligatorio en v1; Supabase queda reservado para iteraciones futuras si el contacto lo necesita
- Destino de deploy: Vercel
- Idioma inicial: español

## Dirección de contenido

- El contenido real debe definirse mediante specs antes de iteraciones centradas en implementación.
- El perfil y los repositorios de GitHub son una fuente futura de verdad, pero no forman parte de esta etapa como importación automática.
- El copy temporal solo está permitido cuando deja claro que una sección sigue incompleta.

## En qué no debe convertirse este proyecto

- un playground de features no relacionadas
- una plantilla genérica con branding superficial
- una plataforma sobreconstruida que agregue costo de mantenimiento antes de probar valor
- un volcado de contenido sin narrativa para lectores de negocio
- un producto con backend innecesario cuando la arquitectura file-based alcanza