# Feature 028 — CV del autor, Contacto, Sobre mí y SEO

## Objetivo

Alinear la narrativa pública con automatización, desarrollo de software e integraciones, respetando el CV actualizado aportado por el autor y evitando reemplazarlo por un PDF generado sin autorización.

## Elección del CV

- El autor adjuntó el PDF `CV_PERALTA_MATÍAS.pdf` (septiembre 2026) y pidió expresamente **usar ese archivo**.
- No reeditar ni regenerar el PDF; cambiar solamente su nombre en el repositorio a una forma ASCII.
- El PDF fue cargado por el autor en `public/files/CV_PERALTA_MATIAS_2026.pdf` dentro de la rama. Se comprobó que su Git blob SHA coincide con el PDF original adjunto.
- Tras esa comprobación, `cvFilePath` se actualizó a la ruta del nuevo PDF. La descarga debe comprobarse en la preview antes del merge.
- Mantener el PDF histórico para URLs existentes. Instrucciones en `docs/CV_PUBLICATION.md`.

## Alcance implementado

- Reescribir `profileContent.about`, alineado al trabajo actual y el recorrido académico/laboral documentado en el CV.
- Actualizar textos de `profileContent.contact` sin cambiar medios de contacto ni UI.
- Corregir fechas y empresa de experiencias anteriores conforme al CV.
- Sustituir el posicionamiento Android-first en title, Open Graph, Twitter y keywords de `src/app/layout.tsx`.
- Añadir canonicals específicos y descripciones a las páginas About, Contact, Experience, Skills y Projects.
- `site-config.ts` centraliza el enlace de descarga que utilizan Home, Header y Contact.

## Hechos respaldados

- Cabify Analista de Finanzas SSR, 2026–actualidad.
- PAE/AXION: cuentas a pagar 2016–2019, supervisión 2019–2023 y cuentas a pagar 2023–2025.
- Teclab: Tecnicatura Superior en Programación 2022–2024.
- Métrica de 60 a 500 documentos diarios: histórica, asociada al proceso de Cuentas a Pagar anterior.
- IA para asistir ingeniería no equivale a agente/LLM desplegado en producto.

## Fuera de alcance

No reconstruir CV con una plantilla propia, no publicar contactos nuevos fuera del PDF, no crear ruta `/cv`, no reestructurar secciones visuales, no introducir dependencias, CMS, SEO externo o nuevos proyectos. Auditoría final en feature 029.

## Criterios de aceptación

1. Sobre mí y Contacto priorizan automatización e integraciones, no Android.
2. Formación y fechas documentadas se reflejan sin inventar información adicional.
3. SEO usa títulos y keywords coherentes; páginas tienen canonical específico.
4. El PDF original del autor se incorpora sin cambios, y la descarga se actualiza **solo después de la subida**.
5. Vercel pasa para el último commit y la descarga se verifica visualmente antes del merge.
