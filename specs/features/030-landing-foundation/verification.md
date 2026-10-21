# Verification — Feature 030

## Inspección del cambio
- [x] No se modifica el asset de la fotografía, CV ni MDX de proyectos.
- [x] Los enlaces existentes de Inicio continúan apuntando a rutas reales.
- [x] El contenedor de Home deja de aplicar overflow oculto, preparando sticky.
- [x] Se elimina el carrusel del render y su configuración sin uso.
- [x] No se incorporan dependencias ni animaciones continuas.

## Validación pendiente
- [ ] Ejecutar npm run lint y npm run build en clon local o CI con dependencias. No disponibles desde este conector de GitHub.
- [ ] Probar desktop/mobile, tema claro/oscuro, navegación, descarga del CV y enlaces de proyectos.
- [ ] Verificar Vercel Preview si hay despliegue configurado.

No se afirmará CI verde ni validación visual hasta comprobarlas.
