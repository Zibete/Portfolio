# Plan — Feature 044

1. Proteger los cuatro comportamientos aprobados con pruebas que fallen ante la implementación anterior.
2. Quitar las dos referencias circulares y su campo compartido, manteniendo límites editoriales.
3. Cambiar fuentes del Home y de Implementation a la documentación real pertinente.
4. Crear un estilo local `project-card` con borde neutro por defecto y acento verde en `:hover` / `:focus-within`; evitar hover competidor en imagen.
5. Quitar contadores y fetch de GitHub de las tres superficies; conservar `githubUrl` y limpiar contratos/clientes huérfanos.
6. Ejecutar tests, lint, build, revisión de diff, comprobación de navegación y CI tras push en `master`.
