# Verification — Feature 021

## Inspección estática

- [x] Los textos principales de Home priorizan automatización y desarrollo de software.
- [x] El stack visible empieza por Python, VBA y Excel.
- [x] Solo Migrar SAP está marcado como destacado.
- [x] ZIBE sigue publicado y accesible.
- [x] El texto específico de Android se quitó del componente destacado.
- [x] No se expuso contenido de repositorios privados.
- [x] No se cambian rutas, dependencias ni arquitectura.

## Checks

- [ ] Vercel para el último SHA del PR: verificar antes de la aprobación.
- [ ] `npm run lint` y `npm run build`: no marcar si no se ejecutaron.
- [ ] Revisión manual de Home desktop/mobile y links del caso destacado.

El entorno de ejecución de este chat no tiene conexión de red saliente para clonar el repositorio; se utiliza el conector GitHub para leer, modificar y revisar el contenido. Un despliegue Vercel exitoso verifica el deploy, pero no equivale a la ejecución local de lint y build.
