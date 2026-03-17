# feat: cerrar Feature 017 home messaging refinement

Base: `master`
Rama: `017-home-messaging-refinement`

## Qué se cambió

- se cerró el refinement editorial de Home sin abrir rediseño estructural
- el hero quedó refinado para vender mejor el perfil híbrido Android + automatización
- las mini cards del hero pasaron a mensajes más concretos y útiles para recruiter
- el bloque post-hero se reescribió para hablar de experiencia real aplicada
- el bloque de credibilidad quedó convertido en `Cómo trabajo`
- el cierre de Home se simplificó a tres acciones claras: contacto, CV y proyectos
- el bloque featured project de ZIBE quedó más concreto y recruiter-friendly
- la documentación de `specs/features/017-home-messaging-refinement/` quedó alineada con el resultado final real

## Por qué

- Home ya tenía buena base visual, pero todavía arrastraba copy genérico y algo de meta discurso
- la feature necesitaba cerrar con un relato más directo, más escaneable y más útil para vender el fit profesional
- ZIBE debía quedar presentado como proyecto Android destacado, no como comentario sobre la estructura del sitio

## Validación local

```bash
npm run lint
npm run build
```

- [x] `npm run lint`
- [x] `npm run build`

## Validación manual

- [x] el hero mantiene el refinement editorial ya cerrado
- [x] el bloque post-hero habla de experiencia real aplicada
- [x] el bloque de credibilidad funciona como `Cómo trabajo`
- [x] el cierre de Home muestra tres acciones claras
- [x] ZIBE aparece como `Proyecto Android destacado`
- [x] el bloque ZIBE evita meta discurso obvio y mantiene tres cards más específicas
- [x] no se tocaron otras páginas ni hubo rediseño estructural de Home

## Fuera de alcance

- cambios en About, Experience, Projects o Contact
- rediseño de layout o apertura de nuevas secciones
- reescritura del MDX de ZIBE
- nuevas features de contenido fuera de Home

## Commits incluidos

- `feat(home): finalize home messaging refinement`
- `docs(specs): align feature 017 with final implementation`
- `docs(pr): add feature 017 pull request draft`
