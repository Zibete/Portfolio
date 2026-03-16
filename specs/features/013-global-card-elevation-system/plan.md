# Plan - Feature 013 Global card elevation system

## Estrategia

Extender el lenguaje de elevación a todo el sitio con una solución sistémica y mínima, tomando como base lo ya aprendido en Home: la elevación debe vivir en el nodo hoverable y no competir con motion de entrada en el mismo elemento.

## Fases

### Fase 1 - Auditoría global
- revisar Home e internas
- identificar cards reales, cards secundarias y excepciones
- confirmar exclusión del contenedor del carrusel de skills en Home

### Fase 2 - Contrato estructural
- separar motion y hover cuando hoy compartan el mismo nodo
- dejar el nodo interno como surface hoverable
- evitar cambios innecesarios de layout

### Fase 3 - Aplicación del sistema
- normalizar cards de Home
- normalizar cards de About, Skills, CV, Contact, Experience y Projects
- mantener excluido el contenedor del carrusel de skills en Home

### Fase 4 - Validación
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

El sitio debe sentirse como un único sistema de cards consistente, con elevación clara y homogénea, sin conflictos entre motion y hover.