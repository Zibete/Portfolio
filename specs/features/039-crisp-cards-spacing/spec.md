# Feature 039 — Crisp Cards & Spacing

## Objetivo
Mantener los textos y elementos de las tarjetas nítidos al pasar el cursor, con elevación perceptual mediante sombras y bordes, y reducir ligeramente el espacio vertical señalado en las capturas.

## Alcance
1. Eliminar transformaciones `scale(1.006)` y `translate3d(...)` aplicadas por hover a `.interactive-card` tanto con movimiento normal como reducido.
2. Preservar el color de fondo inicial y expresar el hover con sombra y borde diferenciados para temas claro y oscuro.
3. Reducir 16 px de espacio superior en escritorio en About, Experience, Projects, Skills y Contact, manteniendo el espaciado inferior.
4. Compactar 16 px en conjunto la separación entre Evidencia complementaria y el cierre de Home en escritorio (8 px por lado).
5. Conservar la interacción 3D, contenido, navegación, rutas y evidencias.

## Fuera de alcance
Refactor de tarjetas, cambios de tipografía, imágenes, animaciones 3D, nuevas dependencias, repositorios externos y rediseño global.

## Aceptación
- Hover sin transformación geométrica del texto, con borde y sombra perceptibles.
- Fondo estable durante el hover.
- Menor espacio superior uniforme en páginas internas y menor separación hacia Contacto.
- `prefers-reduced-motion` no activa movimientos.
- Vercel SUCCESS en el SHA final.
