# Feature 030 — Landing foundation

## Objetivo

Reducir complejidad visual y duplicación de contenido en Inicio sin alterar la arquitectura general ni las rutas públicas.

## Cambios funcionales

- Hero editorial con título, propuesta profesional, acciones hacia proyectos y CV, y una referencia breve al impacto histórico documentado.
- Fotografía original mantenida sin edición del asset, con ancho máximo de 320 px y sin overlays ni elementos flotantes.
- Eliminación del carrusel continuo de tecnologías y de los bloques de contenido repetidos de Home.
- Conservación del proyecto destacado desde el registro existente de casos MDX.
- Cierre compacto con enlaces a contacto y CV.

## Decisiones técnicas

- El contenedor raíz de Home deja de aplicar overflow oculto para permitir el uso futuro de position: sticky en secciones locales.
- Se eliminan el componente del carrusel, sus estilos y su configuración editorial, sin introducir dependencias.
- El contenido sigue ubicado en src/content/site/site-config.ts y sus contratos en src/types/site.ts.
- Se mantienen el sistema de temas, los componentes compartidos y las rutas existentes.

## Alcance

Afecta exclusivamente a Home, contratos de contenido vinculados a Home, CSS del carrusel sin uso y documentación del repositorio.

No modifica páginas internas, código o archivos de proyectos, PDF del CV, imagen de perfil ni integraciones externas.

## Criterios de aceptación

1. El hero presenta el perfil y las acciones principales sin duplicación de contenido.
2. La fotografía original se renderiza a un tamaño controlado y sin capas de iluminación.
3. El carrusel eliminado no permanece en el árbol de componentes ni en la configuración de contenido.
4. Los enlaces a proyectos, contacto y CV utilizan rutas existentes.
5. La página no añade dependencias ni modifica contratos de servicios externos.
