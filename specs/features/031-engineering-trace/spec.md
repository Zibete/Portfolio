# Feature 031 — Engineering Trace

## Objetivo
Incorporar en Inicio un recorrido visual continuo que explique cinco etapas de ingeniería aplicada con evidencia inspeccionable, sin simular una integración de IA en producción.

## Alcance
- Sección integrada en Home con etapas Discovery, Specification, AI-assisted Engineering, Implementation y Validation.
- Desktop: paneles en un espacio CSS 3D con desplazamiento por progreso de scroll, escala y rotación vinculadas.
- Navegación por clic entre etapas; desplazamiento natural reversible.
- Mobile y usuarios con preferencia de movimiento reducido: tarjetas verticales estáticas, sin bloqueo del scroll.
- Contrato editorial centralizado en site-config.ts y tipado en src/types/site.ts.
- Artefactos públicos vinculados a GitHub; ejemplos identificados como ilustrativos.

## Criterios técnicos
- Sin dependencias nuevas; un listener de scroll pasivo y requestAnimationFrame bajo demanda.
- Sólo actualizar React state al cambiar de etapa activa; transformaciones directas sobre cinco nodos visuales.
- No agregar backend, LLM API, demos funcionales ni modificar casos MDX.
- Conservar el posicionamiento actual y la distinción entre IA asistida e IA integrada en software.
- Evitar registrar información privada o atribuir pruebas como ejecutadas si sólo se documentan.

## Criterios de aceptación
1. Las cinco etapas están presentes con progresión visual continua desktop.
2. El visitante puede avanzar, retroceder y seleccionar etapas mediante botones.
3. Los artefactos distinguen fuente pública de ejemplo; enlaces apuntan a recursos públicos existentes.
4. El contenido completo está disponible con reduced-motion y en dispositivos móviles.
5. Los CTAs de Home, los proyectos, el CV y las demás páginas permanecen accesibles.
