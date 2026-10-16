# Constitución del proyecto

## Propósito

Portfolio profesional de Matías Peralta para:

- comunicar con evidencia su experiencia en automatización, desarrollo de software e integración de sistemas empresariales;
- facilitar entrevistas en roles de automatización, ingeniería de soluciones y desarrollo aplicado al negocio;
- documentar su evolución hacia **Forward Deployed Engineer (FDE)**, con horizonte de preparación en septiembre de 2027;
- seguir utilizando el sitio como práctica de desarrollo web moderno, sin desviar su objetivo laboral.

## Posicionamiento profesional

**Actual (octubre de 2026):** Automation & Software Developer | AI-Assisted Engineering | Enterprise Integrations.

Matías combina experiencia en procesos financieros y operativos con programación para convertir necesidades del negocio en automatizaciones, integraciones y herramientas mantenibles.

**Objetivo (no afirmación de experiencia actual):** desarrollar capacidades demostrables de Forward Deployed Engineering: discovery con usuarios, construcción de software, integración con sistemas, despliegue, adopción y resultados medibles, incluyendo IA aplicada cuando aporte valor real.

- Principal: Python, Excel/VBA, automatización, datos e integraciones empresariales.
- Diferencial: experiencia funcional en Finanzas, AP/P2P, conciliaciones, facturación y mejora de procesos.
- Complementario: Android/Kotlin, Next.js/TypeScript y otras aplicaciones desarrolladas.
- En desarrollo: APIs, SQL, despliegue, arquitectura de soluciones e integración de LLMs.

No presentarse como FDE, especialista en LLMs, arquitecto cloud ni senior de software antes de contar con evidencia suficiente. Distinguir explícitamente uso de IA para asistir el desarrollo de integración de LLMs en productos.

## Audiencias

Reclutadores técnicos, líderes de automatización, ingeniería, transformación digital, Finance Operations y responsables de soluciones empresariales. El texto debe funcionar tanto para negocio como para equipos técnicos; evitar porcentajes artificiales de contenido técnico/funcional.

## Contrato editorial

- **Home:** comunicar perfil actual y valor en pocos segundos; ofrecer pruebas y acceso al CV.
- **About:** explicar recorrido profesional, formación, decisiones de ingeniería y evolución.
- **Experience:** funciones, contexto, participación y resultados verificables; respetar empleadores y confidencialidad.
- **Projects:** casos que documenten problema, restricciones, contribución, stack, solución, validación, estado e impacto.
- **Skills:** agrupar capacidades por uso real, separando experiencia aplicada, complementaria y aprendizaje.
- **Contact/CV:** sostener los mismos roles y hechos, sin prometer experiencia inexistente.

La narrativa se apoya en evidencia concreta, no en una colección de badges ni en nombres de tecnologías.

## IA y LLMs: reglas de comunicación

1. **IA asistiendo ingeniería:** uso de herramientas/modelos para descubrir necesidades, diseñar, programar, revisar y documentar; indicar que las decisiones y validaciones técnicas son humanas.
2. **IA dentro del software:** mencionar APIs de LLM, agentes, RAG, evaluaciones y producción únicamente si existe una implementación demostrable, con límites y resultados explícitos.
3. No confundir prototipos, decisiones de arquitectura o aprendizajes con sistemas desplegados y adoptados.
4. No publicar prompts internos, datos empresariales, credenciales ni material de terceros sin autorización.
5. No inventar métricas de ahorro, nivel de autonomía, seniority, clientes ni impacto.

## Publicación de proyectos empresariales

- Respetar propiedad intelectual, políticas corporativas y acuerdos de confidencialidad.
- El hecho de que un repositorio privado sea accesible no autoriza copiar su código a este repositorio público.
- Publicar casos descriptivos seguros, ejemplos sintéticos o una reproducción independiente solo cuando no revelen datos, reglas confidenciales, endpoints, credenciales, identificadores, capturas internas ni artefactos sensibles.
- Separar claramente lo **operativo y validado**, lo **probado parcialmente** y lo **en desarrollo**.
- Vincular repositorios públicos cuando existan. No simular un enlace o una demo para proyectos privados.
- Ante dudas sobre la divulgación de información, detener la publicación del caso y dejarlo pendiente de revisión.

## Principios de producto

- Cada página debe acelerar la evaluación del fit profesional.
- Mostrar primero lo más relevante para automatización/integraciones; conservar Android como evidencia complementaria.
- Priorizar información escaneable, específica y verificable.
- Mantener la CTA al CV y accesos claros a casos de estudio.
- Contenido local, editable y versionado; evitar un backend o CMS sin necesidad.

## Principios de diseño

- Preservar la identidad visual dark-first, la navegación y la accesibilidad existentes.
- Evitar clichés visuales o discursivos sobre IA.
- Estructura y narrativa antes que animaciones o rediseños.
- Diffs pequeños, consistentes y revisables.

## Arquitectura y límites

- Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, next-themes, MDX y Vercel.
- Mantener la arquitectura file-based. Supabase no es dependencia requerida.
- No incorporar blog, login, panel de administración, scraping, backend complejo ni dependencias nuevas para reposicionar el perfil.
- Las decisiones estructurales y de alcance pertenecen a una spec de feature.
- Actualizar contenido, CV, metadata y documentación de forma coordinada.

## Plan de evolución

La matriz de capacidades/evidencias y el orden de iteraciones viven en `specs/features/020-fde-positioning/`. Las siguientes iteraciones ejecutarán cambios públicos de Home, experiencia, skills, proyectos, CV y SEO; esta constitución no significa que esos cambios ya estén publicados.
