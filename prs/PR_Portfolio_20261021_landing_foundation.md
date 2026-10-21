# refactor(home): simplify landing composition

Base: master
Rama: feat/030-landing-foundation

## Qué se cambió

- Home: composición reducida a hero, proyecto destacado y cierre con enlaces a contacto y CV.
- HomeHero: fotografía original limitada a 320 px, sin overlays ni elementos flotantes.
- Contenido: eliminación del carrusel de tecnologías y de bloques redundantes; ajuste de tipos y configuración.
- CSS: limpieza de estilos específicos del carrusel; retiro de overflow oculto en el contenedor raíz.
- README y feature 030: documentación alineada con la implementación.

## Commits incluidos

- feat(home): establish engineering trace landing foundation
- docs(home): align technical documentation and PR description

## Contratos y compatibilidad

- Sin modificaciones de rutas, datos MDX, imagen de perfil o CV.
- Sin cambios de dependencias ni integraciones de red.
- Se conservan los enlaces a proyectos, contacto y descarga del CV.

## Verificación registrada

- Diff de implementación revisado contra master.
- Vercel SUCCESS reportado para el commit de implementación a5cb4d9.
