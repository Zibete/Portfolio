# Publicación del CV de octubre de 2026

## Fuente elegida por el autor

**Archivo proporcionado por el autor:** `CV_PERALTA_MATÍAS.pdf`, creación septiembre de 2026, 1 página A4, Canva.

El autor indicó explícitamente **usar su documento**, sin sustituirlo por el borrador preparado en la iteración. La copia con nombre ASCII `CV_PERALTA_MATIAS_2026.pdf` tiene el mismo SHA-256:

`9b7b49f89c36d79fa5fd441d2259da4eb29fc668591af0c8e43cc7518cc369ed`

**Estado de este PR:** PDF nuevo **pendiente de subir**. El archivo anterior sigue siendo el destino de descarga hasta completar la carga; NO fusionar la iteración como finalizada.

## Dónde colocarlo

1. Subir el PDF del autor, sin editarlo, a `public/files/CV_PERALTA_MATIAS_2026.pdf` en la rama `feat/028-cv-contact-seo`.
2. Comprobar que se mantiene 1 página y la descarga de GitHub coincide con el SHA-256 anterior.
3. Actualizar **solo** `cvFilePath` en `src/content/site/site-config.ts` a `/files/CV_PERALTA_MATIAS_2026.pdf`.
4. Verificar que Header, Home y Contact descargan el mismo documento y no generan 404.
5. Verificar Vercel en el último SHA y aprobar el PR.

No borrar `public/files/CV_MATIAS_PERALTA_ANALISTA.pdf`, porque URLs anteriores pueden seguir utilizándolo.

## Datos del CV que guiaron la revisión del sitio

- Cabify: Analista de Finanzas SSR, 2026–actualidad.
- PAE SL: Analista de Cuentas a Pagar, 2023–2025, y período 2016–2019.
- Estaciones AXION / PAE SL: Supervisor, 2019–2023; empleo anterior 2012–2016.
- Tecnicatura Superior en Programación, Teclab, 2022–2024.
- Proyecto de automatización de Cuentas a Pagar: productividad histórica de 60 a 500 documentos diarios, cifra presentada por el autor.

El texto del PDF **no se modificó**. No inferir que cada tecnología citada se haya implementado en producción ni añadir títulos FDE que no figuran como experiencia adquirida.
