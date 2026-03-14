# Feature 004 — Stack marquee

## Objetivo

Incorporar una franja horizontal de stacks/credenciales técnicas bajo el hero para reforzar el posicionamiento híbrido del portfolio y sumar una señal visual moderna, continua y elegante, sin copiar implementaciones ajenas ni abrir una capa de motion compleja.

La feature debe:
- introducir un marquee/loop horizontal sutil
- mostrar stacks y tecnologías clave del perfil
- reforzar la identidad "Android + automatización"
- aportar ritmo visual a la Home
- mantenerse coherente con el lenguaje visual actual del portfolio

## Contexto

El portfolio ya cuenta con:
- Home refinada visualmente
- hero con más identidad
- proyecto principal real (ZIBE)
- una composición vertical moderna en progreso

La siguiente mejora natural es sumar una franja visual que aporte dinamismo y refuerce rápidamente la amplitud técnica del perfil sin obligar al usuario a leer demasiado.

## Problema que resuelve esta feature

Hoy la Home ya tiene mejor presencia, pero todavía le falta una capa visual que:
- refuerce rápidamente la variedad de tecnologías
- ayude a equilibrar el hero con una transición visual moderna
- aporte sensación de producto tech más madura
- permita comunicar de un vistazo la combinación de Android, automatización y stack complementario

## Alcance

### Entra en esta feature

- crear una franja horizontal tipo marquee/loop
- definir el contenido del loop con stacks o pills técnicas
- ubicar la franja en Home en una posición coherente
- asegurar animación suave, legible y no invasiva
- contemplar reduced motion si la implementación lo permite con costo bajo
- permitir que el contenido quede centralizado y editable

### No entra en esta feature

- logos de terceros si complican innecesariamente la implementación
- una sección completa de Skills
- animaciones complejas de scroll global
- nuevas dependencias pesadas
- rediseño total de la Home
- cambios de contenido en Projects/ZIBE
- cambios en Contact, Experience o CV
- integración con datos externos
- un carrusel interactivo complejo

## Decisión de contenido

La franja debe priorizar texto/pills por sobre logos si eso da más claridad, control visual y coherencia con el portfolio.

Stacks sugeridos:
- Kotlin
- Jetpack Compose
- Firebase
- Python
- VBA
- Excel
- SAP FI
- Next.js
- TypeScript
- Tailwind CSS

La implementación puede ajustar la selección y cantidad para mejorar equilibrio visual, pero debe mantener el eje híbrido Android + automatización.

## Entregables visibles

- franja marquee visible en Home
- animación horizontal sutil y continua
- contenido técnico legible y bien jerarquizado
- integración armónica entre hero y bloque siguiente

## Criterios de aceptación

- el marquee se siente moderno, no decorativo sin sentido
- la velocidad y densidad visual son agradables
- la franja refuerza el posicionamiento del perfil
- no se siente copiada ni fuera de sistema
- dark mode se ve fuerte
- light mode sigue siendo limpio
- no hay saltos ni glitches obvios
- lint y build deben pasar
- no se agregan dependencias innecesarias

## Dependencias

Esta feature depende de:
- `docs/PROJECT_CONSTITUTION.md`
- `AGENTS.md`
- `specs/001-product-vision.md`
- `specs/002-information-architecture.md`
- `specs/003-design-system.md`
- `specs/006-mvp-scope.md`
- `specs/features/002-home-visual-language/spec.md`
- `specs/features/003-hero-identity/spec.md`

## Riesgos / decisiones abiertas

- si conviene usar una sola línea o dos líneas en loop
- si el contenido debe resolverse con pills de texto o mezcla de texto + íconos
- cómo implementar reduced motion sin abrir una capa técnica innecesaria
- cómo lograr dinamismo sin que compita con el hero