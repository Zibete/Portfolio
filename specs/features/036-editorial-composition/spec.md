# Feature 036 — Editorial Composition

## Objetivo
Mejorar el aprovechamiento horizontal, la jerarquía editorial y la lectura de evidencia técnica y trayectoria profesional, manteniendo el posicionamiento existente.

## Alcance
1. Home: cuando hay un solo caso complementario, ocupar el ancho del contenedor y separar síntesis de enlaces/evidencia en dos columnas en escritorio. Con varios casos, conservar dos tarjetas por fila en escritorio.
2. About: reemplazar el párrafo cronológico extenso por un resumen y un recorrido de hitos alimentado por las entradas MDX de experiencia. Mantener la formación de Teclab en el resumen.
3. About: ampliar la primera tarjeta de diferencial y principio; repartir el resto en dos columnas cuando hay ancho suficiente.
4. Experience: transformar la secuencia de roles en timeline de ancho completo; mover las métricas históricas a un bloque horizontal con su descargo de contexto intacto.
5. Projects: diferenciar con tipografía y superficie el caso destacado de los casos de estudio de apoyo.

## Reglas
- No duplicar las fechas de experiencia en otra fuente; los hitos leen los MDX publicados.
- Mantener fuentes, límites de evidencia, enlaces, CV y contenido sensible fuera de alcance.
- Conservar orden de Home y lógica del Engineering Trace.
- Reusar Tailwind, PageSection y componentes existentes; sin paquetes nuevos.
- Mobile primero, sin depender de animaciones para comprensión o navegación.

## Base y coordinación
La 036 se apila sobre la rama `feat/035-layout-density` porque el PR #32 aún no se fusionó. El PR 036 apuntará a esa rama. Una vez fusionado el PR #32, se podrá retargetear a `master` antes de la revisión/merge de 036.

## Fuera de alcance
- Paleta Signal Lime, nuevos tokens y estados visuales de identidad (037).
- Reformulación de interacción y scroll del Trace (038).
- Nuevos proyectos, métricas, funciones, datos corporativos o repositorios externos.

## Aceptación
- La tarjeta única ZIBE no deja media columna libre en escritorio.
- La trayectoria aparece como hitos y las métricas tienen una disposición horizontal legible.
- El primer proyecto posee mayor jerarquía que el resto.
- No se rompen enlaces, lectura móvil ni accesibilidad semántica.
- Compilación Vercel SUCCESS para el HEAD del PR.
