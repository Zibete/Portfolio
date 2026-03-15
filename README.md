# Portfolio Zibe

Portfolio profesional de Matías Peralta.

## Qué es

Este repositorio contiene el portfolio profesional de Matías Peralta con enfoque spec-driven, contenido local file-based y despliegue futuro en Vercel.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- next-themes
- MDX para contenido local
- Supabase preparado para contacto futuro

## Estado actual

El proyecto ya cuenta con:

- Home madura con narrativa principal
- páginas internas con contenido real en español
- proyectos públicos curados en MDX
- assets reales para perfil, proyectos y CV
- integración opcional de metadata viva desde GitHub
- tema dark/light con dark-first
- docs y specs por feature

## Estructura general

```text
src/
  app/
  components/
  content/
  lib/
  types/
public/
  files/
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

- seguir ampliando proyectos y experiencia con casos curados
- decidir la implementación mínima del contacto con Supabase
- continuar refinando el portfolio con nuevas features guiadas por specs

## Nota

La fuente de verdad del contenido y las decisiones sigue estando en `docs/`, `specs/` y los archivos locales de `src/content/`.
