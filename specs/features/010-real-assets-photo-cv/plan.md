# Plan — Feature 010 Real assets, photo and CV

## Estrategia

Cerrar la brecha entre contenido ya escrito y assets reales del portfolio, incorporando foto, screenshots y CV descargable sin abrir cambios grandes de arquitectura ni rediseño.

La feature debe:
1. cargar assets reales en paths públicos simples
2. conectar esos assets a Home, About, Projects y CV
3. mejorar credibilidad visual y conversión
4. mantener el sitio liviano y consistente

## Fases

### Fase 1 — Organización de assets
- crear convención estable para foto, screenshots y CV PDF
- evitar nombres ambiguos o temporales
- mantener paths públicos predecibles

### Fase 2 — Integración de foto
- incorporar foto principal en la ruta o bloque más conveniente
- evitar que la foto rompa jerarquía visual
- mantener una presencia profesional, sobria y alineada con el diseño actual

### Fase 3 — Integración de screenshots
- sumar imágenes reales de proyectos
- priorizar ZIBE y el caso de automatización AP
- usarlas para reforzar credibilidad sin volver pesado el sitio

### Fase 4 — Integración de CV
- cargar PDF real en ruta pública
- convertir `/cv` en una página con CTA real de descarga
- mantener el contenido útil aun antes de descargar

### Fase 5 — Pulido
- revisar alt text
- revisar peso y formato de imágenes
- asegurar coherencia visual entre assets y layout

### Fase 6 — Validación
- revisar Home
- revisar About
- revisar `/projects`
- revisar `/projects/zibe`
- revisar `/cv`
- correr lint/build

## Restricciones

- no rediseñar el sitio
- no abrir galería compleja
- no agregar dependencias si `next/image` alcanza
- no meter animaciones nuevas grandes
- no convertir esta feature en una reescritura del contenido

## Resultado esperado

Al terminar, el portfolio debe verse y sentirse más real: foto profesional, proyectos con assets concretos y un CV descargable listo para conversión.