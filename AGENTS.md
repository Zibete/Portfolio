# AGENTS.md

## Reglas de trabajo

1. Leer primero `docs/PROJECT_CONSTITUTION.md`.
2. Leer la feature activa en `specs/` antes de proponer o cambiar funcionalidad.
3. No inventar features, refactors o alcance fuera del objetivo de la iteración.
4. Mantener diffs mínimos, explícitos y fáciles de revisar.
5. Preservar la estructura actual del repositorio salvo necesidad técnica real.
6. Priorizar claridad, mantenibilidad y baja complejidad.
7. No agregar dependencias sin justificación concreta.
8. Mantener naming en inglés para archivos, carpetas e identificadores.
9. No cambiar copy, tono o posicionamiento del producto sin razón ligada al spec.
10. Reportar siempre los archivos creados y modificados.
11. Cerrar cada tarea con validación manual breve.

## Flujo para trabajar una feature

1. Leer `docs/PROJECT_CONSTITUTION.md`.
2. Leer los archivos relevantes de la feature activa:
   - `spec.md`
   - `plan.md`
   - `tasks.md`
   - `verification.md`
3. Revisar solo los archivos de código necesarios para esa iteración.
4. Confirmar alcance real antes de tocar código:
   - qué entra
   - qué no entra
   - qué archivos probablemente cambian
5. Implementar el cambio mínimo coherente con el objetivo.
6. Si cambia una decisión estructural, visual o funcional importante, actualizar la feature activa.

## Reglas de implementación

- Preferir el cambio más pequeño que mantenga coherencia en el repo.
- No tocar rutas, páginas o módulos fuera de alcance.
- No abrir refactors globales para resolver problemas locales.
- No mover ni renombrar archivos sin beneficio claro.
- Reutilizar patrones existentes antes de crear otros nuevos.
- No introducir abstracciones innecesarias.
- Dejar placeholders explícitos cuando una decisión se difiere intencionalmente.

## Reglas de documentación

- Actualizar `specs/` cuando el resultado final cambie una decisión relevante.
- Mantener `README.md` breve y fiel al estado real del repositorio.
- Tratar `docs/PROJECT_CONSTITUTION.md` como límite principal de intención de producto.

## Validación

Antes de cerrar una tarea:

1. Revisar el diff final.
2. Confirmar que la implementación coincide con la feature activa.
3. Ejecutar los checks relevantes del repo.
4. Verificar manualmente el flujo afectado.
5. Reportar riesgos, límites o fuera de alcance reales.

## Comandos del proyecto

Usar los comandos reales del repo cuando apliquen:
```bash
npm run lint
npm run build
npm run dev
```

No inventar pipelines nuevos si el proyecto no los usa.

## Pull Requests

Cuando se solicite un PR, generar un archivo `.md` dentro de `prs/` en la raíz del proyecto. Ese archivo es un borrador/editorial backup y no reemplaza el PR real en GitHub.

### Formato del borrador

- Idioma: español (es-AR), dejando en inglés solo paths, clases, comandos y subjects de commit citados literal.
- Tono: técnico, directo y breve.
- Encabezado:
  - título estilo repo
  - `Base:`
  - `Rama:`

### Secciones mínimas

- `## Qué se cambió`
- `## Commits incluidos`

### Secciones habituales

Agregar solo si aportan valor real:

- `## Por qué`
- `## Validación local`
- `## Validación manual`
- `## Fuera de alcance`
- `## Cómo correr los tests`
- `## Cambios de API/Contratos`
- `## Código muerto/paths duplicados`

### Reglas del PR draft

- No inventar cambios no realizados.
- No mezclar roadmap futuro con el cambio actual.
- No forzar secciones vacías.
- Agrupar por módulo, feature o área.
- Usar bullets cortos.
- Usar checkboxes solo para validación o checklist.

### Qué evitar

- Cambios fuera de alcance.
- Refactors globales no pedidos.
- Cambios cosméticos innecesarios.
- Dependencias nuevas sin justificación.
- Documentación desalineada con el estado real del código.