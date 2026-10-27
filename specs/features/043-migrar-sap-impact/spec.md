# Feature 043 — SAP FI impact and visual coherence

## Objetivo

Dar prioridad a resultados relevantes del caso Migrar SAP sobre metadatos secundarios, sin confundir alcance observado, estimaciones de eficiencia y evidencia del código público.

## Alcance aprobado

1. Usar `MonitorCog` en la cabecera del caso de automatización y `Workflow` en Engineering Trace, en escala y estilo coherentes con el SVG Android actual.
2. Reemplazar los tres recuadros «Rol / Período / Foco técnico» del Home por dos recuadros: alcance mensual observado de SAP FI y eficiencia estimada por comprobante comparable.
3. Comunicar de forma consistente las mismas métricas en Home, listado y detalle de proyectos, y Experiencia.
4. Centralizar valores y atribución en contenido tipado local; reutilizarlo desde los componentes y el MDX, sin servicios ni dependencias adicionales.

## Métricas y atribución

- **Observado (corte mensual en PAE / AXION):** 3.932 de 7.198 documentos contabilizados en SAP FI, 54,6 % del volumen mensual de la unidad, 57 proveedores gestionados.
- **Eficiencia estimada:** 150 segundos a 21 segundos por comprobante en casos comparables, aproximadamente 86 % de reducción del tiempo.
- El 54,6 % mide el volumen observado, **no** la proporción del proceso automatizada ni un límite de capacidad de la herramienta.
- La reducción de tiempo no es un benchmark generado por las pruebas públicas ni un resultado de Cabify.
- Fuente editorial: `https://github.com/Zibete/Zibete/blob/main/README.md`; la evidencia pública de código y tests mantiene sus propios límites.

## Contratos

- Seguir en `master` con commits pequeños, sin modificar otros repositorios y sin alterar el comportamiento del Trace.
- Mantener identidad dark-first, contraste, `prefers-reduced-motion`, mobile, accesibilidad y navegación existentes.
- Conservar el rol y período en el detalle del caso, donde contextualizan; no repetirlos como bloque prominente en el Home.
- No presentar aumentos históricos `~60 → ~500 documentos/día` ni porcentajes `~70 % del importe` como métricas vigentes en páginas públicas.
- No modificar el README de `Migrar-SAP-Portfolio`; se tratará en una iniciativa separada.
