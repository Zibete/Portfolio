# Verification - Feature 016 Contact cleanup and direct CV download

## 🧪 Validación automática
```bash
npm run lint
npm run build
```

## 👁️ Validación manual
```bash
# levantar el proyecto y revisar Home + Contact + navegación sin la página /cv
```

### Flujo de CV

- [ ] El CTA de Home dice `Descargar CV`
- [ ] El CTA de Home apunta al PDF directo
- [ ] La descarga del CV funciona correctamente
- [ ] No quedan CTAs principales que lleven a `/cv`

### Navegación

- [ ] `/cv` ya no aparece en la navegación principal
- [ ] No quedan referencias visibles a la página `CV`
- [ ] No hay links rotos tras la eliminación de la ruta
- [ ] El recorrido general del sitio sigue siendo coherente

### Contact

- [ ] `Contact` quedó más corto y más claro
- [ ] `Contact` prioriza canales directos
- [ ] `Contact` evita reabrir el pitch completo del portfolio
- [ ] La ubicación solo se mantiene si realmente aporta
- [ ] El contenido absorbido desde `CV` suma contexto sin redundancia

### Limpieza editorial

- [ ] Se redujo la repetición entre Home, Contact y la antigua página CV
- [ ] El contenido rescatado desde `CV` es mínimo y defendible
- [ ] `Contact` funciona como página de conversión y no como página explicativa
- [ ] La eliminación de `/cv` simplifica el recorrido

### Implementación

- [ ] `src/app/cv/page.tsx` fue eliminada o dejó de formar parte del flujo principal
- [ ] `site-config.ts` quedó alineado con el nuevo CTA y la nueva navegación
- [ ] `profile-content.ts` quedó alineado con el nuevo contrato de `Contact`
- [ ] Los componentes afectados consumen el contenido actualizado sin hardcodes nuevos

### Documentación

- [ ] `spec.md`, `plan.md`, `tasks.md` y `verification.md` están alineados
- [ ] El alcance de la feature se mantiene acotado
- [ ] No se mezclaron cambios de Home/About/Projects fuera de este objetivo