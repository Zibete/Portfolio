# Tasks - Feature 013 Global card elevation system

## T1. Auditar cards del sitio
- revisar Home
- revisar About
- revisar Skills
- revisar CV
- revisar Contact
- revisar Experience
- revisar Projects
- identificar excepción del contenedor del carrusel de skills en Home

## T2. Detectar conflictos motion vs hover
- ubicar nodos que mezclen `motion-enter` o `motion-reveal` con clases hoverables
- confirmar qué cards necesitan wrapper externo

## T3. Normalizar Home
- revisar hero
- revisar marquee
- revisar prueba principal
- revisar proyecto principal
- revisar credibilidad
- revisar CTA lateral
- excluir el contenedor del carrusel de skills en Home

## T4. Normalizar internas
- revisar cards de About
- revisar cards de Skills
- revisar cards de CV
- revisar cards de Contact
- revisar cards de Experience
- revisar cards de Projects

## T5. Ajustar sistema hover
- mantener una elevación sutil y consistente
- evitar conflictos con motion
- evitar excepciones innecesarias

## T6. Validar consistencia
- desktop
- mobile/tablet
- light/dark
- reduced motion

## T7. Validación final
- npm run lint
- npm run build