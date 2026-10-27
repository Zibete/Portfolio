# Verification — Feature 043

## Comandos

- `node --test tests/*.test.mjs`
- `npm run lint`
- `npm run build`
- `git diff --check`

## Revisión manual

- Dos tarjetas de impacto legibles en móvil y escritorio; la barra representa 54,6 % de un total, no un porcentaje automatizado.
- Etiquetas de observado/estimado y período/contexto visibles.
- Cabeceras con íconos alineados al estilo de Android; Trace intacto.
- /projects, detalle de Migrar SAP y /experience mantienen cifras y atribuciones.
- Revisar UI en navegador si disponible; documentar cualquier límite.

## Resultados locales

- Tests: 19 aserciones en Home, impacto, Proyectos y Viaje Rentable AR; 19 correctas.
- `npm run lint`: OK.
- `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 npm run build`: OK, 17 páginas estáticas. El build sin esta variable falló por la conexión TLS del runner a Google Fonts; no exigió modificar la app.
- `git diff --check`: OK.
- HTML de Home, Proyectos, detalle Migrar SAP y Experiencia: valores SAP FI y estimaciones aparecen renderizados. El MDX importó el modelo tipado correctamente.
- Revisión técnica independiente: sin defectos críticos/importantes; refinados `role=meter`, lectura accesible `150 s a 21 s`, denominador visible y estilo del enlace en MDX.
- QA visual en navegador: no realizada en este entorno, requiere inspección de escritorio y móvil.
- CV PDF publicado: contiene las métricas históricas «60 a 500 documentos/día (×8)». Documento original preservado deliberadamente; la decisión de actualizarlo está fuera de esta feature.
- Push a `master` y CI remoto: pendientes por la decisión editorial sobre la coherencia con el CV PDF.
