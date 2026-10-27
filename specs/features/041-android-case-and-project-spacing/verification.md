# Verification — Feature 041

## Comandos
- `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON tests/home-content.test.mjs`
- `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON tests/viaje-rentable.test.mjs`
- `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON tests/projects-layout.test.mjs`
- `npm run lint`
- `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 npm run build`

## Revisión manual
- Home: ZIBE y Viaje Rentable AR, lado a lado en escritorio y apilados en móvil.
- Listado: cinco casos, rótulo «Caso de automatización» y gaps reducidos.
- Detalle: ruta nueva accesible, imagen íntegra, fuentes clicables, alpha explícita.
- Asegurar que las imágenes de otros proyectos conserven su ajuste previo.
- Comprobar el despliegue de `master`; registrar limitaciones de pruebas visuales si no se inspeccionan.

## Resultados locales
- Tests de Home (4), presentación de proyectos (2) y caso Android (2): OK.
- `npm run lint`: OK.
- `npm run build`: OK; 17 páginas estáticas, incluido `/projects/viaje-rentable-ar`.
- Portada WebP: 1122 × 1402, 85,7 kB, conserva la imagen completa.
- No se realizó aún una revisión visual en navegador con breakpoints reales.
