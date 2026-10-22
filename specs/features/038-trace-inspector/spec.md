# Feature 038 — Engineering Trace Inspector

## Objetivo
Convertir el Trace actual en un recorrido de evidencia más ágil y claramente navegable, sin cambiar su arquitectura ni simular una integración IA no demostrada.

## Decisiones
1. Preservar cinco etapas y enlaces públicos reales asociados a proyectos distintos.
2. Exponer anterior/siguiente en desktop y conservar selección por etapa en el rail lateral; botones con focus visible, disabled y labels accesibles.
3. Reducir el recorrido del rail de 340svh a 300svh para disminuir scroll improductivo sin cambiar la fórmula normalizada del progreso.
4. Suavizar distancia y giro de las tarjetas CSS 3D; mantener transformaciones dentro de requestAnimationFrame bajo demanda.
5. Identificar la vista como Evidence inspector y marcar la etapa activa con el token signal.
6. Mantener fallback estático para mobile y prefers-reduced-motion, sin navegación redundante en modos donde no hay escena 3D.

## Fuera de alcance
- Nuevas fuentes, historias de IA inventadas, persistencia, frameworks o dependencias.
- Cambio de rutas, contenido o reorden de Home.
- Modificación de repositorios externos, apps internas o material privado.

## Aceptación
- Navegación lateral y botones anterior/siguiente funcionan en escritorio y tienen estados disabled.
- Cinco escenas y sus enlaces se conservan, con foco visible.
- En dispositivos sin 3D se muestran cinco tarjetas estáticas.
- La animación no instala un loop permanente de render.
- Vercel SUCCESS del HEAD final, con revisión manual aún necesaria para movimiento y teclado.
