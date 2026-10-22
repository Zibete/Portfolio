# Portfolio · Matías Peralta

Portfolio técnico desarrollado con Next.js, React y TypeScript. Presenta experiencia en automatización de procesos, integraciones empresariales y desarrollo de software mediante casos documentados y repositorios públicos.

## Stack

- Next.js 16 (App Router), React 19 y TypeScript.
- Tailwind CSS 4, shadcn/ui, Lucide y next-themes.
- MDX y contenido versionado en el repositorio.
- Consulta opcional de metadatos públicos de GitHub cuando la vista los muestra.
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

El orden de Inicio es: perfil y CV → caso principal de cuentas a pagar con enlaces a código y pruebas → Engineering Trace → caso complementario ZIBE → contacto. Engineering Trace presenta cinco prácticas sobre fuentes públicas **de distintos proyectos**, sin simular que forman una única ejecución ni que un PR pruebe por sí mismo el uso de modelos de IA. El desplazamiento CSS 3D ocupa un tramo acotado en pantallas desktop con altura suficiente; en mobile, pantallas bajas y movimiento reducido se usan tarjetas estáticas. Los resultados históricos se distinguen de las pruebas reproducibles.

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
- Configuración sensible mediante variables de entorno, sin secretos versionados; no se utiliza Supabase.
- Cambios acotados y documentados según AGENTS.md y docs/PROJECT_CONSTITUTION.md.
- Rutas, metadata, CV y contenido público versionados junto al código.
