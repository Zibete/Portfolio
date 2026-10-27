# Feature 044 — Evidencia y cards de proyectos

## Objetivo

Eliminar referencias circulares e indicadores sociales sin valor, vincular evidencia arquitectónica representativa y unificar la respuesta visual de las cards en `/projects`.

## Alcance aprobado

1. Quitar «Fuente de las métricas» del Home y del detalle de Migrar SAP: el README del perfil repite los mismos datos, no los verifica de forma independiente.
2. En Home, cambiar el vínculo `modCoreValidation.bas` por `docs/PORTFOLIO_OVERVIEW.md`; en la etapa Implementation del Engineering Trace, enlazar `docs/MANIFEST.md`. Conservar `docs/TESTING.md` para pruebas.
3. Usar borde neutro para todas las cards del listado de Proyectos y el acento verde `signal` solo en hover y foco dentro de la tarjeta. Evitar un segundo hover azul en la imagen interior. No modificar el sistema global de tarjetas.
4. Eliminar Stars, Forks, Issues y último push de las vistas públicas, así como las consultas dinámicas a GitHub que ya no sean necesarias. Mantener enlaces directos al código y demos.

## Contratos

- Preservar distinción entre cifras observadas, estimadas y pruebas públicas. No cambiar valores, período ni límites.
- Preservar accesibilidad, nitidez, tema claro/oscuro, reducción de movimiento y la animación del Engineering Trace.
- Mantener el CV, los README y el código de repositorios externos intactos.
- Priorizar diffs pequeños y dependencias existentes; publicación directa en `master` tras los checks.
