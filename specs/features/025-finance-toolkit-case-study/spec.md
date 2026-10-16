# Feature 025 — Finance Toolkit como caso público seguro

## Objetivo

Incorporar un caso descriptivo de Finance Toolkit que demuestre cómo se abordan problemas financieros mediante desarrollo de software e integraciones, sin copiar material interno ni atribuirse resultados no verificados.

## Alcance

- Crear `src/content/projects/finance-toolkit.mdx` como tercer proyecto publicado.
- Conservar Migrar SAP como único caso destacado (`featured: true`, `order: 1`).
- Finance Toolkit aparece en segundo lugar (`featured: false`, `order: 2`); ZIBE se traslada al tercero (`order: 3`).
- Registrar el MDX en `src/content/projects/registry.ts`, requerido por las rutas de detalle existentes.
- Corregir el copy de `src/app/projects/page.tsx` que afirma que hay dos proyectos y usa badges fijos de Android.
- Corregir el fallback Open Graph de los proyectos sin imagen hacia un asset público existente (`/og/preview.png`).
- Mantener estructuras, estilos, componentes y dependencias.

## Fuente privada y delimitación

La referencia del estado técnico es documentación interna revisada en octubre de 2026, **solo para corroborar hechos antes de redactar**. No se transfiere texto privado literal ni estructura operacional detallada al portfolio.

Información admisible:
- objetivo general del proyecto, problema financiero abstracto;
- stack genérico Excel/VBA + Python y mención general de integraciones;
- separación conceptual de responsabilidades, validaciones y manejo de errores;
- desarrollo activo, con capacidades en uso y otras en prueba o desarrollo;
- ausencia de métricas públicas confirmadas y de evidencia reproducible externa.

No publicar:
- código, rutas internas, estructuras precisas de archivos o contratos;
- URLs, IDs, credenciales, cookies, sesiones, métodos de autenticación;
- nombres de entidades, proveedores, clientes, transacciones o detalles fiscales internos;
- capturas, archivos, ejemplos o diagramas derivados literalmente del trabajo;
- vínculos al repositorio privado, demos inexistentes o estadísticas de GitHub privadas.

## Atribución y resultados

- El caso es un proyecto interno, en desarrollo activo.
- No afirmar despliegue total, facturación legal automática, adopción organizacional completa, aprobación de infraestructura o resultados cuantificados.
- No presentar asistencia de IA como integración de LLMs en el producto.
- Exponer los límites expresamente en el artículo.

## Criterios de aceptación

1. Finance Toolkit está listado y tiene una ruta MDX válida.
2. Migrar SAP sigue destacado y ZIBE continúa accesible.
3. La página de proyectos no menciona Android como etiqueta fija ni «dos proyectos».
4. No hay enlaces al repo privado ni archivos corporativos publicados.
5. El caso comunica arquitectura conceptual, problemas, decisiones, estado y límites con lenguaje defendible.
6. No se añaden dependencias ni se modifica el sistema visual.

## Fuera de alcance

Cambiar Home, Experience, Skills, About, Contact, CV, proyectos fuente o SEO general. Crear assets/capturas, demos sintéticas o conectar sistemas externos al portfolio.
