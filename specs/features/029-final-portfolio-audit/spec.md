# Feature 029 — Auditoría final de consistencia y publicación

## Objetivo
Verificar que el portfolio de automatización/software cierre sin enlaces internos rotos, mensajes Android-first ni metadatos incoherentes. Resolver exclusivamente hallazgos comprobables con un diff acotado.

## Hallazgos y decisiones
- PR #26 fusionado, PDF actual `CV_PERALTA_MATIAS_2026.pdf` disponible en el repositorio y centralizado en `siteConfig`.
- Cuatro proyectos publicados, exactamente un destacado y orden 1–4.
- Imágenes y archivos locales referenciados en el contenido presentes en `public/`.
- Metadatos Open Graph y Twitter de rutas estáticas heredaban títulos, descripciones y URL de Home aunque existieran canonical/description por página. Se centralizó una función reutilizable para crear metadata de cada ruta.
- URL del sitio utilizaba el dominio temporal de preview si no se configuraba el entorno. Se fijó el dominio profesional ya publicado en el CV como fallback, conservando variables explícitas para override.
- README exhibía Supabase como parte del stack aunque no participa en el flujo actual. Se quitó su badge.
- Página 404 con textos sin tildes e indexación no delimitada: corregido.

## Fuera de alcance
No cambiar copy de casos técnicos, reordenar proyectos, modificar CV original, agregar dependencias, refactorizar servicios ni desplegar sistemas empresariales. No declarar verificación externa de links/dominio si no fue posible acceder a Internet.

## Criterios de aceptación
1. URL canónica estable independiente del deploy Vercel Preview.
2. About, Contact, Experience, Skills y Projects comparten metadata Open Graph/Twitter correcta por ruta.
3. Detalles MDX mantienen su metadata y la imagen social de fallback tiene alt correcto.
4. La página 404 no es indexable y muestra texto acentuado.
5. README no presenta servicios no usados como tecnología activa.
6. CV y assets permanecen idénticos y accesibles en el repo.
7. No se introducen dependencias nuevas ni cambios visuales innecesarios.
