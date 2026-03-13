# 004 Modelo de datos

## Configuración del sitio

La configuración de sitio debe incluir:

- nombre visible
- descripción
- locale
- idioma
- items de navegación
- copy del hero
- roles objetivo

## Entidad de contenido de proyecto

Fuente esperada: `.mdx` local

Campos sugeridos de frontmatter:

- title
- summary
- published
- featured
- year
- role
- stack
- tags

## Entidad de contenido de experiencia

Fuente esperada: `.mdx` local

Campos sugeridos de frontmatter:

- title
- summary
- company
- period
- focus
- published

## Placeholder de backend para contacto

Supabase queda reservado solo para contacto futuro.

Modelo público actual de variables de entorno:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## No objetivos

- no hay diseño relacional de base de datos para v1
- no hay esquema de CMS
- no hay modelo de auth
