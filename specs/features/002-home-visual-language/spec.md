# Feature 002 — Refinamiento visual de Home

## Objetivo

Mejorar el lenguaje visual de la Home para que el portfolio se sienta más moderno, premium y orientado a producto tech, sin rediseñar todavía todo el sitio ni ampliar el alcance funcional.

La feature debe:
- corregir el fondo/gradiente en light mode
- fortalecer la atmósfera visual general
- mejorar jerarquía, spacing y legibilidad
- preparar la base para futuras features visuales del hero y marquee
- mantener coherencia con el posicionamiento actual del portfolio

## Contexto

El portfolio ya cuenta con:
- constitución del proyecto
- specs globales
- app shell funcional
- dark mode / light mode
- Home inicial
- Projects funcional con ZIBE como primer proyecto real

Hoy la base está bien resuelta, pero la Home todavía no transmite del todo una sensación de producto tech premium.
Además, en light mode el tratamiento actual del fondo genera una marca visual no deseada detrás del contenido.

## Problema que resuelve esta feature

Actualmente la Home:
- tiene una base sólida, pero todavía se siente en etapa intermedia
- no expresa todo el potencial visual del proyecto
- presenta una interferencia visual en light mode por la superposición del fondo
- no termina de construir una identidad visual fuerte desde el primer scroll

Esto afecta la percepción de calidad, aunque el contenido y la estructura ya estén bien encaminados.

## Alcance

### Entra en esta feature

- ajustar el tratamiento del fondo global de la Home
- resolver el problema visual del gradiente en light mode
- mejorar la composición visual del hero actual sin cambiar todavía su contenido estructural de fondo
- revisar spacing vertical y jerarquía visual
- mejorar contenedores/cards si hace falta
- reforzar look dark-first y producto tech
- hacer ajustes mínimos en layout o componentes compartidos si son necesarios para esta mejora visual

### No entra en esta feature

- animación del nombre principal
- badge de disponibilidad
- marquee / carrusel de stacks o logos
- rediseño completo de todas las rutas
- nuevas secciones grandes
- nuevos proyectos
- cambios en Contact, Experience o CV
- cambios de arquitectura
- dependencias nuevas innecesarias
- rediseño completo de Projects o del detalle de ZIBE

## Entregables visibles

- Home con un lenguaje visual más fuerte y coherente
- light mode sin la línea/molestia visual del fondo
- mejor equilibrio visual entre fondo, tipografía, bloques y spacing
- base visual preparada para próximas features del hero

## Criterios de aceptación

- el fondo deja de generar una línea o corte visual molesto en light mode
- dark mode sigue viéndose sólido y premium
- la Home se percibe más moderna y con mejor jerarquía
- no se rompe la navegación ni el app shell
- no se introduce ruido visual excesivo
- la mejora se siente evolutiva, no como un rediseño improvisado
- lint y build deben pasar
- la feature no debe abrir deuda visual innecesaria para las próximas iteraciones

## Dependencias

Esta feature depende de:
- `docs/PROJECT_CONSTITUTION.md`
- `AGENTS.md`
- `specs/001-product-vision.md`
- `specs/002-information-architecture.md`
- `specs/003-design-system.md`
- `specs/006-mvp-scope.md`

## Riesgos / decisiones abiertas

- cuánto ajustar el hero sin invadir la futura feature de identidad visual
- si el fondo debe resolverse solo desde `SiteShell`, solo desde estilos globales o desde ambos
- cómo subir sensación premium sin recargar la Home