# Tasks — Feature 010 Real assets, photo and CV

## T1. Definir paths públicos
- crear convención para profile, project images y files
- evitar nombres temporales o desordenados

## T2. Cargar assets reales
- agregar foto profesional
- agregar screenshots reales de proyectos
- agregar CV PDF real

## T3. Integrar foto
- revisar Home y About
- decidir ubicación final
- aplicar `next/image` si conviene

## T4. Integrar screenshots de proyectos
- revisar `projects` y `/projects/[slug]`
- mostrar assets reales sin recargar layout
- priorizar ZIBE y el caso AP

## T5. Integrar descarga de CV
- actualizar `src/app/cv/page.tsx`
- agregar CTA real al PDF
- mantener copy profesional y breve

## T6. Revisar copy complementario
- ajustar textos si todavía hablan de “futuro” o “pendiente” en relación con assets/CV

## T7. Validar accesibilidad y peso
- alt text razonable
- revisar nombres de archivo
- evitar imágenes absurdamente pesadas

## T8. Validación final
- `npm run lint`
- `npm run build`
- revisión manual de Home, About, Projects, detalle y CV