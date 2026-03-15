# Tasks — Feature 006 Motion system

## T1. Auditar la motion actual
- revisar qué animaciones ya existen
- detectar inconsistencias de timing, easing o criterio
- decidir qué patrones conviene unificar

## T2. Definir patrones base
- elegir reveal simple
- elegir entrance simple
- elegir un stagger mínimo si aporta valor
- definir reduced motion razonable

## T3. Implementar el sistema reutilizable
- crear clases, utilidades o componentes mínimos
- evitar abstracciones innecesarias
- mantener naming claro y fácil de reaplicar

## T4. Aplicar el sistema a Home
- usarlo donde más valor aporte
- revisar hero, marquee y bloque principal
- evitar sobreanimar

## T5. Validar consistencia
- revisar dark mode
- revisar light mode
- revisar reduced motion si aplica
- asegurar que no haya una mezcla caótica de estilos de animación

## T6. Validar técnica
- correr lint
- correr build
- dejar checklist manual final