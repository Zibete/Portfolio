# feat(ui): add profile photo to home hero

Base: master
Rama: master

## Qué se cambió

- Se incorporó la foto profesional actual como asset público optimizado en WebP.
- Se actualizó `siteConfig.assets.profileImagePath` para usar la nueva imagen.
- Se rediseñó el hero de la Home con una composición split:
  - identidad, descripción, CTAs y proof bar a la izquierda
  - foto profesional con marco moderno, aura sutil y overlays a la derecha
- Se redujo la sensación de “card empresarial” en el primer pantallazo.
- Las métricas actuales del hero pasaron a una proof bar compacta.
- Se mantuvo el enfoque dark-first, tech, profesional y responsive.

## Commits incluidos

- `feat(ui): add profile photo to home hero`

## Validación local

- [x] `npm run lint`
- [x] `npm run build`

## Validación manual

- [x] Home desktop dark mode
- [x] Home desktop light mode
- [x] Home mobile dark mode
- [x] Home mobile light mode
- [x] Sin overflow horizontal visible
- [x] Foto, overlays, CTAs y proof bar responsive

## Notas

- El build mostró un warning preexistente de Next sobre múltiples `package-lock.json` y `turbopack.root`.
- El build terminó correctamente.
- Para revisión local se usó `next dev --webpack -p 3001` porque Turbopack quedó colgado en esta máquina por el warning de root.

## Fuera de alcance

- No se tocaron rutas internas.
- No se modificaron Projects, About, Experience, Skills ni Contact.
- No se agregaron dependencias.
- No se cambió el posicionamiento profesional general del sitio.
