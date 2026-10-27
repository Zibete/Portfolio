# Verification — Feature 040

## Comandos
- `npm run lint`
- `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 npm run build` (solo si la descarga de Google Fonts requiere TLS del sistema)
- `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --test tests/home-content.test.mjs`

## Comprobación visual
- Hero: franja ocupa todo el contenedor, sin invadir el retrato; orden móvil coherente.
- Secciones: separación exterior ~20% menor, texto y cards legibles.
- Engineering Trace: título de ancho completo; inspector y navegación preservados.
- ZIBE: SVG visible junto al rótulo Android/Kotlin, enlaces y descargo intactos.
- No existe CTA final redundante, pero Contacto y CV siguen disponibles.

## Despliegue
Comprobar el estado del commit final; no confundir build con pruebas visuales en navegador.

## Validación local
- ESLint: OK.
- Node test runner: 4 pruebas superadas.
- Next.js 16.1.6: build OK, 16/16 páginas generadas; para fuentes Google se utilizó TLS del sistema.
- HTML estático: hero, caso, Trace, ZIBE y Android SVG presentes; CTA final ausente.
- Inspección visual multi-breakpoint y estado remoto: pendientes hasta publicar el SHA definitivo.
