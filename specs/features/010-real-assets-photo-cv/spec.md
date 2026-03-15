# Feature 010 — Real assets, photo and CV

## Objetivo

Incorporar assets reales al portfolio para aumentar credibilidad visual, claridad profesional y capacidad de conversión: foto de perfil, imágenes reales de proyectos y CV PDF descargable.

## Contexto

El proyecto ya tiene:
- shell navegable
- contenido real en progreso
- proyecto principal visible
- estructura pública para imágenes
- ruta `/cv` ya presente en la arquitectura

Sin embargo, todavía falta la capa de assets reales que vuelva el portfolio más completo y convincente.

## Problema a resolver

Hoy el sitio puede comunicar bien posicionamiento y contenido, pero todavía le faltan señales visuales y assets finales que suelen ser decisivos en un portfolio:
- foto profesional
- screenshots reales
- CV descargable

Eso limita:
- credibilidad inmediata
- percepción de terminación
- conversión a contacto o descarga

## Alcance

### Entra en esta feature
- incorporar foto profesional real
- incorporar imágenes reales de proyectos
- cargar CV PDF real en ruta pública
- convertir `/cv` en una página con descarga real
- agregar soporte mínimo de metadata de assets si hace falta
- ajustar About / Projects / detalle de proyecto para mostrar assets reales

### No entra en esta feature
- nueva feature de motion
- rediseño visual global
- formulario funcional de contacto
- optimización avanzada de OG dinámica
- carruseles complejos
- nuevas dependencias pesadas

## Paths esperados

- `public/images/profile/`
- `public/images/projects/`
- `public/og/`
- `public/files/`

## Integraciones esperadas

### Foto
Debe aparecer en una ubicación sobria y profesional, probablemente Home y/o About.

### Projects
Los proyectos públicos principales deben empezar a mostrar screenshots reales cuando existan.

### CV
La ruta `/cv` debe incluir un CTA claro para descargar el PDF real.

## Requisitos funcionales

1. El sitio debe poder mostrar una foto profesional real.
2. Los proyectos deben poder renderizar imágenes reales sin romper layout.
3. El CV PDF debe estar disponible mediante un link público estable.
4. `/cv` debe dejar de sentirse una ruta temporal.
5. Los assets deben mantener buena legibilidad en dark/light.
6. Debe existir alt text razonable y naming ordenado.

## Requisitos no funcionales

- mantener simpleza
- no sobrecargar páginas
- priorizar performance razonable
- mantener coherencia con el sistema actual
- no introducir deuda visual evidente

## Criterio de done

La feature queda terminada cuando:
- hay foto real integrada
- hay al menos assets reales mínimos para los proyectos públicos
- `/cv` permite descargar el PDF real
- Home/About/Projects/CV se sienten más terminados
- lint y build pasan