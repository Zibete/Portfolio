# feat(home): reposicionar portfolio hacia automatización e integraciones

Base: `master` (`f4e3f99`)
Rama: `feat/021-home-positioning`

## Qué se cambió

- Home: nueva propuesta de valor basada en desarrollo de software, automatización empresarial y experiencia en Finanzas.
- IA asistiendo el desarrollo: análisis, implementación y revisión con validación humana; no se afirma experiencia con LLMs integrados en producción.
- Marquee: prioriza Python, VBA, Excel, Power Query e integraciones.
- Proyecto destacado: Migrar SAP reemplaza a ZIBE; ZIBE sigue publicado.
- Componente destacado: se elimina la descripción fija de Android para desacoplarlo del proyecto elegido.
- Especificación y verificaciones de la feature 021.

## Commits incluidos

- `eb2a76c` — `feat(home): reposition around enterprise automation and AI-assisted engineering`
- Commit documental de este PR draft.

## Validación

- Diff limitado a seis archivos existentes de Home, contenido y tipos más documentos de la feature.
- El contenido de Migrar SAP y ZIBE sigue usando repositorios públicos existentes.
- No se ejecutó `npm run lint` ni `npm run build` localmente: el entorno no pudo acceder al repositorio GitHub para clonar y construir.
- Vercel: consultar estado del último SHA de esta rama en GitHub.

## Fuera de alcance

- About, Experience, Skills, Contact, PDF del CV, SEO completo y nuevos casos privados.
- Nuevas dependencias, rutas, rediseño visual o cambios de infraestructura.

## Validación manual

- [ ] Revisar Home desktop y mobile, especialmente badges y jerarquía de textos.
- [ ] Verificar que el proyecto principal enlaza al caso público de Migrar SAP.
- [ ] Comprobar estado Vercel para el último commit.
- [ ] Aprobar el PR antes de fusionar.
