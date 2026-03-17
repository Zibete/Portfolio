# Verification - Feature 016 Contact cleanup and direct CV download

## Validación automática
```bash
npm run lint
npm run build
```

## Validación manual
```bash
# levantar el proyecto y revisar header, Home, Contact y ausencia de /cv
```

### Descarga de CV

- [ ] El header muestra `Descargar CV`
- [ ] Home muestra `Descargar CV` como CTA principal
- [ ] `Contact` mantiene `Descargar CV`
- [ ] Los tres accesos apuntan al mismo PDF
- [ ] La descarga funciona correctamente

### Ruta y navegación

- [ ] `/cv` ya no existe como página
- [ ] No quedan links visibles que apunten a `/cv`
- [ ] La navegación principal sigue siendo coherente
- [ ] El acceso al CV se conserva como acción utilitaria, no como página

### Contact

- [ ] `Contact` suena más directo y profesional
- [ ] No hay headings ambiguos o vacíos
- [ ] Se redujo el meta-copy
- [ ] Los canales principales son claros
- [ ] Se recuperó un resumen breve útil del viejo `CV`
- [ ] El aside ofrece acciones claras hacia proyectos, email y GitHub
- [ ] `Contact` no funciona como mini `About`
- [ ] `Contact` no funciona como mini `CV`

### Integración editorial

- [ ] Lo rescatado del viejo `CV` suma contexto sin duplicar Home
- [ ] El tono general es claro, directo y consistente
- [ ] La capa de contenido sigue siendo la fuente de verdad

### Documentación

- [ ] `spec.md`, `plan.md`, `tasks.md` y `verification.md` reflejan el alcance final real
- [ ] El alcance sigue acotado
- [ ] No se mezclaron cambios fuera del objetivo de la 016
