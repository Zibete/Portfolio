# ✨ feat(projects): add GitHub real data enrichment

Base: `master`
Rama: `feat/007-github-real-data`

## Qué se cambió
- `src/lib/github/`
  - se agregó una capa server-only mínima con `env.ts`, `types.ts`, `client.ts`, `mappers.ts` e `index.ts`
  - `getGitHubRepoStats(repo)` consulta GitHub REST API con `fetch` nativo, token opcional y fallback a `null`
  - se normaliza el repo declarado y se cachea la respuesta con `revalidate: 1h`
- `src/types/content.ts`, `.env.example` y `src/content/projects/zibe.mdx`
  - se extendió el frontmatter de proyectos con `githubRepo`, `githubUrl`, `demoUrl` y `githubFeatured`
  - se documentó `GITHUB_TOKEN` como variable opcional
  - ZIBE quedó conectado al repo real `Zibete/Zibe`
- `src/components/sections/featured-project.tsx`
  - Home muestra metadata viva breve del proyecto principal
- `src/app/projects/page.tsx`
  - `/projects` muestra metadata viva resumida por card cuando existe repo configurado
- `src/app/projects/[slug]/page.tsx`
  - `/projects/[slug]` muestra un bloque ampliado con stats y links del repo/demo
- `specs/features/007-github-real-data/`
  - se completaron `spec.md`, `plan.md`, `tasks.md` y `verification.md`

## Por qué
- sumar señal pública y actualizable del repo sin reemplazar el relato curado en MDX
- mantener GitHub como enrichment opcional, no como source of truth
- tolerar ausencia de token, repo o error remoto sin romper render

## Validación manual
- [ ] Home muestra metadata viva breve en el proyecto principal sin recargar el bloque
- [ ] `/projects` muestra metadata viva resumida en la card de ZIBE
- [ ] `/projects/zibe` muestra bloque ampliado de GitHub y link al repo
- [ ] Con `GITHUB_TOKEN` ausente, Home, `/projects` y `/projects/zibe` siguen renderizando sin errores visibles

## Validación local
```bash
npm run lint
npm run build
```

## Fuera de alcance
- reemplazar MDX como fuente principal
- importación automática o descubrimiento masivo de repos
- fetch client-side a GitHub
- rediseño visual de Home, `/projects` o `/projects/[slug]`
- cache adicional fuera de `fetch(..., { next: { revalidate: 3600 } })`

## Commits incluidos
- `b532e` `feat(github-data): add comprehensive plan, tasks, and verification for GitHub real data feature`
- `c3921` `feat(projects): add GitHub real data enrichment`
