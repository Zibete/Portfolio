# Portfolio · Matías Peralta

Portfolio técnico desarrollado con Next.js, React y TypeScript. Presenta experiencia en automatización de procesos, integraciones empresariales y desarrollo de software mediante casos documentados y repositorios públicos.

## Stack

- Next.js 16 (App Router), React 19 y TypeScript.
- Tailwind CSS 4, shadcn/ui, Lucide y next-themes.
- MDX y contenido versionado en el repositorio.
- Integración de lectura con GitHub API para metadatos de repositorios públicos.
- Despliegue en Vercel.

## Arquitectura

| Ruta o módulo | Responsabilidad |
| --- | --- |
| src/app/ | Rutas, layouts y metadata de Next.js. |
| src/components/ | Componentes de presentación, navegación y secciones. |
| src/content/site/ | Configuración y textos compartidos del sitio. |
| src/content/projects/ | Casos de estudio publicados en MDX. |
| src/content/experience/ | Historial profesional estructurado en MDX. |
| src/lib/ | Lectura de contenido e integración de metadatos de GitHub. |
| src/types/ | Contratos TypeScript para contenido y configuración. |
| public/ | Imágenes, archivo CV y recursos estáticos. |
| specs/features/ | Especificaciones técnicas por cambio funcional. |

El sitio conserva la mayor parte del renderizado del lado del servidor. Las funcionalidades interactivas se encapsulan en componentes cliente. No requiere backend propio ni CMS.

## Inicio

La página principal ofrece presentación profesional, fotografía original, evidencia histórica de impacto y un recorrido interactivo Engineering Trace de cinco etapas. En desktop, el scroll mueve paneles dentro de un espacio CSS 3D; en mobile y con movimiento reducido se presenta una versión estática y legible. Los artefactos distinguen enlaces a fuentes públicas de ejemplos didácticos. Un índice técnico conecta el recorrido con código y pruebas públicas de Migrar SAP y ZIBE, además de sus casos completos. Los resultados históricos y las limitaciones de validación se explicitan por separado.

## Proyectos

- **Migrar SAP:** caso principal de automatización de cuentas a pagar; documentación y núcleo de reglas publicables en un repositorio independiente.
- **ZIBE:** aplicación Android/Kotlin con arquitectura modular.
- **Finance Toolkit y ReportBridge:** casos descriptivos con límites de publicación explícitos; no se distribuyen repositorios o integraciones empresariales privadas.

Las afirmaciones de resultados se distinguen de pruebas reproducibles; no se ejecutan integraciones empresariales desde este portfolio.

## Desarrollo

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## Convenciones

- Contenido editorial centralizado en src/content/site/ y casos en MDX.
- Configuración sensible mediante variables de entorno, sin secretos versionados.
- Cambios acotados y documentados según AGENTS.md y docs/PROJECT_CONSTITUTION.md.
- Rutas, metadata, CV y contenido público versionados junto al código.
