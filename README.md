# Portfolio Zibe

Base fundacional de un portfolio profesional para Matías Peralta.

## Qué es

Este repositorio inicializa la base técnica y documental para construir un portfolio con enfoque spec-driven, contenido local file-based y despliegue futuro en Vercel.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- next-themes
- MDX para contenido local
- Supabase preparado para contacto futuro

## Estado actual

El proyecto está en etapa fundacional. Ya incluye:

- app shell mínimo navegable
- tema dark/light con dark-first
- estructura de carpetas base
- scaffold de MDX y Supabase
- documentos fundacionales y specs v0

## Estructura general

```text
src/
  app/
  components/
  content/
  lib/
  types/
public/
  images/
  og/
docs/
specs/
```

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Próximos pasos

- definir contenido real de Sobre mí, Proyectos, Experiencia y CV
- crear los primeros archivos `.mdx` de proyectos y experiencia
- diseñar la UI final a partir de los specs
- decidir la implementación mínima del contacto con Supabase

## Nota

El contenido real del portfolio todavía no está definido en este repo. La fuente de verdad inicial es la documentación en `docs/` y `specs/`.
