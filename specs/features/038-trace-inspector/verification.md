# Verification — Feature 038

## Revisión estática
- El mismo navigateTo sirve a botones de etapas y anterior/siguiente.
- Anterior está disabled en índice 0; siguiente está disabled en el último índice.
- Los botones tienen etiquetas accesibles y estilo de foco visible.
- No cambia el contenido de etapas, rutas ni referencias públicas.
- El rail sigue usando requestAnimationFrame, listener de scroll pasivo y cleanup.
- Mobile / altura menor a 720px / reduced-motion conservan `trace-static` y no presentan controles de escritorio.
- El recorrido 300svh conserva posiciones normalizadas 0..1 y cinco escenas.

## Antes del merge
- Vercel SUCCESS para HEAD exacto.
- La inspección real de scroll, focus y movimiento reducido en navegador requiere validación manual; no acreditar E2E o pruebas en dispositivo físico sin ejecutarlas.
