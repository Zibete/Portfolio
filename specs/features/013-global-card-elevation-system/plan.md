# Plan - Feature 013 Global card elevation system

## Estrategia

Extender el lenguaje de elevacion a todo el sitio con una solucion sistemica y minima, tomando como base lo ya aprendido en Home: la elevacion debe vivir en el nodo hoverable y no competir con motion de entrada en el mismo elemento.

## Ruta implementada

- aplicar fixes locales sobre cards reales de Home, Projects y paginas internas
- usar shared solo para separar el wrapper con motion de la surface hoverable en `PageSection` y `PageAside`
- evitar props, variantes o abstracciones extra en shared que no sean necesarias para el resultado final
- preservar como excepcion el contenedor del carrusel de skills en Home

## Fases

### Fase 1 - Auditoria global
- revisar Home e internas
- identificar cards reales, cards secundarias y excepciones
- confirmar exclusion del contenedor del carrusel de skills en Home

### Fase 2 - Contrato estructural
- separar motion y hover cuando hoy compartan el mismo nodo
- dejar el nodo interno como surface hoverable
- evitar cambios innecesarios de layout

### Fase 3 - Aplicacion del sistema
- normalizar cards de Home
- normalizar cards de About, Skills, CV, Contact, Experience y Projects
- mantener excluido el contenedor del carrusel de skills en Home

### Fase 4 - Validacion
- desktop
- mobile/tablet
- light/dark
- lint/build

## Restricciones

- no agregar dependencias nuevas
- no abrir refactors grandes fuera del sistema de cards
- no tocar contenido
- no cambiar el carrusel de skills en Home para que eleve
- mantener el sitio recruiter-friendly y sobrio

## Resultado esperado

El sitio debe sentirse como un unico sistema de cards consistente, con elevacion clara y homogenea, sin conflictos entre motion y hover.
