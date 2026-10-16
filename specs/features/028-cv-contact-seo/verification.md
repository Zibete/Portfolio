# Verification — Feature 028

## Control de contenido

- [x] Sobre mí y Contacto no posicionan Android como especialidad principal.
- [x] Trayectoria y estudios se ajustan al PDF provisto por el autor.
- [x] SEO global refleja automatización, Python, integraciones y desarrollo de software.
- [x] Se establecieron canonicals /about, /contact, /experience, /skills y /projects.
- [x] No se cambiaron rutas, estilos, componentes, tipos ni dependencias.
- [x] El PDF vigente permanece disponible hasta poder verificar el reemplazo.

## Bloqueante de publicación

- [ ] Incorporar el PDF original a `public/files/CV_PERALTA_MATIAS_2026.pdf`.
- [ ] Verificar SHA-256 igual al proporcionado, sin reexportación.
- [ ] Actualizar la ruta central `siteConfig.assets.cvFilePath`.
- [ ] Verificar enlaces de descarga en Header, Home y Contact.
- [ ] Comprobar el resultado Vercel sobre el último SHA.
- [ ] Inspeccionar visualmente About, Contact y PDF en móvil/escritorio.

`npm run lint` y `npm run build` locales no se ejecutaron en este entorno. Vercel verde es validación de despliegue, no de descarga del CV si el archivo aún no fue cargado.
