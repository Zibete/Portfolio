# Feature 009 — Content completion / polish real

## Objetivo

Completar el contenido real del portfolio y eliminar el copy placeholder o meta que todavía explica el estado del sitio en lugar de comunicar valor profesional.

La feature debe transformar el portfolio desde:
- una base sólida con contenido temporal
hacia:
- una versión navegable con mensaje profesional real, escaneable y defendible

## Contexto

El proyecto ya cuenta con:
- shell navegable
- Home madura
- proyecto principal real
- estandarización visual base
- integración inicial con GitHub para metadata viva

Sin embargo, varias rutas principales todavía están escritas como placeholders o como documentación del propio sitio.

Eso hoy pasa especialmente en:
- `about`
- `contact`
- `cv`
- `experience`
- `skills`

## Problema a resolver

El sitio ya se ve mejor, pero varias páginas todavía no venden el perfil profesional porque:
- explican lo que “se hará después”
- hablan de la iteración en vez de hablar del candidato
- mantienen frases temporales que reducen la percepción de producto terminado

Necesitamos que el portfolio:
- hable de Matías
- comunique valor rápido
- reduzca al mínimo las referencias a scaffolding o pendientes
- siga siendo escaneable para perfiles técnicos y de negocio

## Alcance

### Entra en esta feature

- reemplazar textos temporales por contenido real
- completar About con posicionamiento profesional claro
- completar Skills con agrupación de capacidades real
- completar Contact con vías de contacto simples y profesionales
- completar CV como página real, aun sin PDF final si todavía no entra
- completar Experience con contenido real o con primeras entradas reales
- actualizar README si su estado quedó desalineado con el repo

### No entra en esta feature

- foto de perfil
- upload de CV PDF final
- formulario funcional de contacto
- assets visuales grandes
- nueva animación o rediseño
- nuevos proyectos adicionales
- reestructuración profunda de arquitectura

## Fuente de verdad

La fuente de verdad para esta feature debe salir de:
- la constitución y specs del repo
- el posicionamiento profesional ya definido
- la experiencia laboral validada del usuario
- el proyecto ZIBE ya cargado
- información profesional que ya forma parte del material del portfolio

No inventar:
- métricas no verificables
- seniority no sustentado
- claims ambiguos o marketineros

## Requisitos funcionales

1. About debe presentar perfil, foco y propuesta de valor real.
2. Skills debe mostrar capacidades agrupadas y traducidas a contexto profesional.
3. Experience debe mostrar trayectoria real en formato breve y escaneable.
4. Contact debe permitir contacto claro sin depender de backend nuevo.
5. CV debe funcionar como página real del portfolio, no como placeholder.
6. El sitio debe reducir fuertemente frases temporales o meta.
7. El contenido debe mantener tono profesional, técnico y orientado a impacto.

## Requisitos no funcionales

- contenido breve y escaneable
- tono consistente con el resto del sitio
- sin abrir deuda visual nueva
- sin dependencias nuevas
- sin claims difíciles de sostener

## Criterio de done

La feature se considera terminada cuando:
- About, Contact, CV, Experience y Skills ya no se sienten placeholders
- el sitio habla de Matías y de su valor profesional
- el README no contradice el estado real del repo
- lint y build pasan
- el contenido puede mostrarse públicamente sin sensación de “versión vacía”