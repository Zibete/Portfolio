# Plan — Feature 009 Content completion / polish real

## Estrategia

Reemplazar el contenido temporal del portfolio por contenido real, breve y defendible, sin abrir todavía nuevas iniciativas funcionales o visuales grandes.

La feature debe apoyarse en:
1. material profesional ya validado
2. contenido escaneable
3. coherencia con el posicionamiento del sitio
4. mínima deuda placeholder al finalizar

## Fases

### Fase 1 — Auditoría de contenido temporal
- revisar `about`, `contact`, `cv`, `experience` y `skills`
- identificar qué textos siguen siendo placeholder o demasiado meta
- detectar dónde todavía se habla del sitio en vez de hablar de Matías

### Fase 2 — Definición de contenido real
- convertir el posicionamiento profesional en copy real de portfolio
- bajar experiencia, habilidades y contacto a texto claro y escaneable
- decidir qué rutas deben quedar completas y cuáles pueden quedar mínimamente funcionales

### Fase 3 — Implementación
- reemplazar el copy temporal por contenido real
- crear primeras entradas reales de experiencia si hace falta
- completar CTA y bloques de CV/contacto sin backend nuevo
- mantener consistencia visual con el sistema actual

### Fase 4 — Pulido
- eliminar frases tipo “pendiente”, “futuro”, “esta iteración”
- mejorar densidad informativa sin volver el sitio pesado
- validar tono profesional y legibilidad

### Fase 5 — Validación
- revisar Home, About, Projects, Experience, Skills, Contact y CV
- correr lint/build
- hacer checklist manual

## Archivos esperables a tocar

### Rutas
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/cv/page.tsx`
- `src/app/experience/page.tsx`
- `src/app/skills/page.tsx`

### Contenido
- `src/content/experience/README.md`
- `src/content/experience/*.mdx` si se crean entradas reales
- `src/content/site/site-config.ts`
- `src/content/projects/zibe.mdx` solo si hace falta ajuste menor de copy

### Otros
- `README.md` si conviene actualizar el estado del repo
- componentes compartidos solo si hace falta soporte menor para contenido real

## Restricciones

- no abrir backend de contacto
- no mezclar con foto, assets o CV PDF real en esta feature
- no rediseñar el sitio
- no agregar dependencias nuevas
- no inventar claims que no puedan sostenerse con experiencia/proyectos reales

## Resultado esperado

Al cerrar esta feature, el portfolio debe dejar de presentarse como base temporal y pasar a comunicar contenido profesional real en las páginas principales, aun si algunos assets finales todavía no están cargados.