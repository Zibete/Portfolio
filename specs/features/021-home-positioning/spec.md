# Feature 021 — Home: automatización, integraciones e IA asistida

## Objetivo

Alinear la primera impresión del portfolio con el posicionamiento definido en la feature 020. El perfil principal es desarrollo de software y automatización empresarial, con experiencia funcional en Finanzas y uso de IA como apoyo de ingeniería. Android queda como evidencia complementaria.

## Alcance

- Actualizar mensajes públicos de Home desde `src/content/site/site-config.ts`.
- Priorizar Python, VBA, Excel e integraciones en el marquee.
- Reemplazar el caso destacado Android por el caso público de automatización de cuentas a pagar.
- Eliminar del componente destacado la descripción fija de Android para consumir solo la descripción del proyecto elegido.
- Cambiar las dos etiquetas fijas sobre la imagen de perfil.
- Mantener el orden y el indicador `featured` consistentes con la jerarquía nueva.
- Corregir una frase en el MDX de ZIBE que lo llamaba proyecto principal.
- Actualizar la descripción global compartida para no contradecir la Home.

## Criterio editorial

**Posicionamiento hoy:** Automation & Software Developer | AI-Assisted Engineering | Enterprise Integrations.

No declararse FDE, especialista en LLMs, ni afirmar implementaciones de modelos en producción. IA asistiendo el desarrollo significa apoyo a análisis, código y revisión, con validación del autor. El resultado histórico de 60 a más de 500 documentos/día corresponde al caso de cuentas a pagar, no a Cabify.

## Selección del caso destacado

`migrar-sap-portfolio.mdx` es un repositorio público con documentación y evidencia reproducible. Tiene `featured: true` y `order: 1`. ZIBE pasa a `featured: false`, `order: 2` y sigue accesible. Finance Toolkit es privado y tendrá un caso seguro en la feature 025.

## Fuera de alcance

- Reescribir About, Experience, Skills, Contact o CV: features 022, 023 y 028.
- Rediseños visuales, rutas nuevas, dependencias, API o backend.
- Publicar código, datos o capturas de proyectos corporativos privados.
- Reescribir los case studies completos de ZIBE o Migrar SAP: feature 024.
- Declarar capacidades FDE aún en aprendizaje.

## Criterios de aceptación

1. Hero y etiquetas del inicio no priorizan Android.
2. Las primeras tecnologías presentadas son Python, Excel/VBA e integraciones.
3. Hay exactamente un proyecto `featured: true`, Migrar SAP; ZIBE sigue publicado.
4. El componente destacado no contiene una descripción acoplada a Android.
5. IA asistida no se presenta como un producto LLM en producción.
6. No hay cambios de dependencias, rutas ni datos privados.
