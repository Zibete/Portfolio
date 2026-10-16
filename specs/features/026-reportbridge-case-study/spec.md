# Feature 026 — Selección responsable de otros casos de automatización

## Objetivo

Incorporar una sola evidencia adicional defendible de automatización e integración de datos, manteniendo la confidencialidad de trabajos internos. No publicar casos por cantidad.

## Selección

- **Incluir ReportBridge**, con una ficha descriptiva y sin código ni vínculos privados. Alcance acotado a su MVP de consulta y exportación de un reporte financiero; pruebas iniciales con un período real y limitaciones explícitas.
- **Posponer Tesorería→Cobranzas / Apps Script** hasta validar funcionamiento, evidencia de adopción y autorización para describir el caso fuera del contexto interno.
- **No incluir Meeting Notes**: proyecto personal cuya finalidad acordada no era el portfolio. No usar su progreso para atribuir capacidades de LLMs integrados sin pruebas verificadas.

## Alcance del PR

- Nuevo `src/content/projects/reportbridge.mdx` publicado, sin `githubRepo`, `githubUrl`, `demoUrl` ni imagen interna.
- Registro explícito en `src/content/projects/registry.ts`.
- Orden final: Migrar SAP 1 (destacado), Finance Toolkit 2, ReportBridge 3, ZIBE 4.
- Documentación `spec.md`, `plan.md`, `tasks.md` y `verification.md`.
- Ningún cambio de UI, estilos, tipos, dependencias, rutas, infraestructura o proyectos fuente.

## Hechos y niveles de evidencia

- La consulta y descarga del informe seleccionado en el MVP fue probada con datos reales para un período concreto.
- Existen controles de integridad y pruebas offline reportadas durante el desarrollo, pero no son reproducibles desde el portfolio público.
- El resto de reportes queda fuera del MVP de descarga.
- Validación más amplia de filtros, períodos, volumen, CSV/Excel, segunda instalación y adopción sigue pendiente.
- No publicar cifras de tests sin evidencia pública auditada, métricas de ahorro, pruebas integrales no realizadas ni estado de producción corporativa.
- No confundir programación apoyada por IA con IA integrada en un producto.

## Política de divulgación

El caso **no** expone:
- clientes, identificadores, fuentes o resultados internos;
- detalles concretos de credenciales, sesiones, filtros, URLs o contratos de API;
- código fuente, capturas, ejemplos operativos ni archivos exportados;
- información relativa a la configuración, seguridad o permisos de sistemas de la empresa.

La ficha publica un problema genérico, decisiones de diseño y estado de validación sin reemplazar la autorización corporativa requerida antes de difundir más detalles.

## Criterios de aceptación

1. Cuatro proyectos publicados con un único destacado y orden 1–4.
2. La ruta `/projects/reportbridge` está registrada y utiliza el patrón MDX existente.
3. ReportBridge no tiene enlaces, imágenes ni datos privados.
4. El MVP y sus límites están claramente diferenciados.
5. Apps Script se posterga y Meeting Notes no se convierte en caso del portfolio.
6. No se añaden componentes ni dependencias y no se modifican proyectos existentes, salvo el `order` de ZIBE.
