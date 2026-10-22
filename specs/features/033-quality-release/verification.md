# Verification — Feature 033

## Revisión estática
- CSS y matchMedia usan la misma condición de ancho mínimo 1024 px, alto mínimo 720 px y movimiento no reducido.
- La versión estática es el comportamiento predeterminado; el modo 3D solo se activa en el media query.
- requestAnimationFrame se agenda bajo demanda, se cancela en cleanup y al desactivar el modo 3D.
- Se descartan actualizaciones visuales cuando la sección no intersecta la ventana.
- Se conserva el orden de navegación: solo la escena activa contiene enlaces tabulables; el foco se mueve al botón actual si estaba en una escena que pasa a estar oculta.

## Alcance
- Sin dependencias nuevas, sin CI adicional, sin modificar CV, imágenes, rutas o datos de los casos.
- Build de Vercel como comprobación de compilación; la revisión estática no sustituye pruebas con dispositivos reales.
