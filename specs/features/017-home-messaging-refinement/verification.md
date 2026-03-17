# Verification - Feature 017 Home messaging refinement

## Validación automática
```bash
npm run lint
npm run build
```

## Validación manual

### Hero
- [ ] El hero muestra el mensaje refinado del perfil híbrido
- [ ] El CTA principal es `Ver proyectos`
- [ ] El CTA secundario descarga el CV
- [ ] Las mini cards del hero son más concretas

### Bloques de soporte
- [ ] El bloque post-hero habla de experiencia real aplicada
- [ ] El bloque ya no habla de la estructura del portfolio
- [ ] El bloque de credibilidad funciona como `Cómo trabajo`

### Cierre
- [ ] El aside final muestra tres acciones claras
- [ ] La acción principal es `Ir a contacto`
- [ ] Las acciones secundarias son `Descargar CV` y `Ver proyectos`
- [ ] No hubo rediseño estructural del cierre

### Featured project
- [ ] ZIBE aparece como `Proyecto Android destacado`
- [ ] El bloque vende el proyecto sin meta discurso
- [ ] Las tres cards laterales muestran rol, período y foco técnico con más especificidad
- [ ] El bloque sigue siendo escaneable

### Consistencia general
- [ ] Home se lee con una narrativa consistente de punta a punta
- [ ] No aparecen repeticiones obvias entre bloques cercanos
- [ ] No se tocaron otras páginas

## Criterio de done

- el hero quedó refinado
- las mini cards del hero quedaron más precisas
- el bloque post-hero quedó reescrito
- el bloque de credibilidad pasó a `Cómo trabajo`
- el cierre/CTA quedó simplificado
- el featured project de ZIBE quedó más concreto y recruiter-friendly
- no hubo rediseño estructural de Home
- `npm run lint` y `npm run build` pasan
