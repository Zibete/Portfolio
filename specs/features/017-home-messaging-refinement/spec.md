# Feature 017 - Home messaging refinement

## Objetivo

Refinar el messaging editorial de Home para vender con más claridad el perfil híbrido entre Android, automatización y mejora operativa, sin abrir un rediseño estructural ni salir del alcance exclusivo de la Home.

## Problema que resuelve

La Home ya tenía una base visual y narrativa sólida, pero varias piezas seguían comunicando de forma demasiado genérica o con meta discurso sobre la estructura del sitio. Eso restaba velocidad de lectura y hacía que parte del recorrido se sintiera menos concreto de lo necesario para una audiencia recruiter-friendly.

## Alcance

### Entra en esta feature
- refinar el hero de Home
- precisar las mini cards del hero
- reescribir el bloque post-hero para hablar de experiencia real aplicada
- convertir el bloque de credibilidad en un bloque de "Cómo trabajo"
- simplificar el cierre de Home con acciones más claras
- hacer que el featured project de ZIBE venda el proyecto con más concreción y menos meta discurso
- mantener el contenido principal de Home centralizado en `src/content/site/site-config.ts`

### No entra en esta feature
- rediseño estructural de Home
- cambios visuales amplios o nuevas secciones
- cambios en About, Projects, Experience, Contact, Skills o CV
- reescritura del MDX de ZIBE
- nuevas features o nuevas dependencias

## Resultado implementado

La feature cerró con:

- hero refinado con mejor venta del perfil Android + automatización
- mini cards del hero más precisas y orientadas a evidencia
- bloque post-hero reescrito para hablar de experiencia real aplicada
- bloque de credibilidad convertido en "Cómo trabajo"
- cierre/CTA simplificado con tres acciones claras
- featured project de ZIBE más concreto, directo y recruiter-friendly
- sin rediseño estructural de Home

## Requisitos funcionales

1. Home debe vender el fit profesional con un lenguaje más concreto.
2. El hero debe priorizar proyectos como CTA principal y CV como CTA secundaria descargable.
3. El bloque post-hero no debe hablar de la estructura del portfolio.
4. El bloque de credibilidad debe operar como explicación breve de la forma de trabajo.
5. El cierre debe resolver la navegación a evidencia sin explicar lo obvio.
6. ZIBE debe presentarse como proyecto Android destacado y no como comentario meta sobre el sitio.

## Criterio de done

- el hero quedó refinado sin tocar su layout
- las mini cards del hero son más específicas
- el bloque post-hero vende experiencia real aplicada
- el bloque de credibilidad funciona como "Cómo trabajo"
- el cierre muestra tres acciones claras
- ZIBE quedó presentado sin meta discurso y con metadata más fuerte
- `npm run lint` y `npm run build` pasan
- no hubo rediseño estructural de Home ni cambios fuera de Home
