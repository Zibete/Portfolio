# AGENTS.md

## Reglas de trabajo

1. Leer primero `docs/PROJECT_CONSTITUTION.md`.
2. Leer los archivos relevantes de `specs/` antes de proponer o cambiar funcionalidad.
3. No inventar features fuera del spec actual o del objetivo de la iteración.
4. Mantener diffs mínimos, explícitos y fáciles de revisar.
5. Preservar la estructura de carpetas existente salvo que un cambio sea estrictamente necesario para Next.js o para el spec activo.
6. Priorizar claridad, mantenibilidad y baja complejidad por encima de abstracciones ingeniosas.
7. No agregar dependencias sin una justificación breve y concreta.
8. Mantener el naming en inglés para archivos, carpetas e identificadores de código.
9. No cambiar copy, tono o posicionamiento del producto sin una razón concreta ligada a los specs.
10. Reportar todos los archivos creados y modificados en la entrega final.
11. Cerrar cada tarea con un checklist manual breve de validación o seguimiento.

## Expectativas para cambios de código

- Preferir el cambio más pequeño que mantenga coherencia en el repositorio.
- Evitar romper rutas existentes, utilidades compartidas o convenciones de contenido.
- Dejar explícitos los placeholders cuando una funcionalidad se difiere intencionalmente.
- No ampliar alcance hacia auth, admin, analytics o backend no pedido.

## Expectativas para documentación

- Actualizar los specs cuando cambie una decisión estructural o de producto.
- Mantener el README breve y fiel al estado real del repositorio.
- Tratar `docs/PROJECT_CONSTITUTION.md` como el principal límite de decisión sobre intención de producto.



## 🤖 Instrucciones para Creación de Pull Requests (PR)

Siempre que se solicite la creación de un PR, el agente debe generar un archivo `.md` dentro de prs/ en la raíz del proyecto (sugerido: `PR_[nombre_del_repo]_[timestamp].md`) y redactarlo con el estilo real del repo:

- **Idioma:** cuerpo, headings y explicación en **español (es-AR)**. Dejar en inglés solo `type(scope)`, nombres de módulos/paths/clases/comandos y subjects de commit citados literal.
- **Tono:** técnico, directo y breve. Priorizar bullets concretos; evitar prosa larga, marketing o contexto redundante.
- **Encabezado:** abrir con un título estilo PR real del repo: `# [emoji] type(scope): resumen` o `## [emoji] PR: ...`. Debajo, incluir `Base:` y `Rama:` en líneas separadas.
- **Secciones base:** incluir siempre `[emoji] Qué se cambió` y `[emoji] Commits incluidos`.
- **Secciones habituales:** agregar `[emoji] Por qué`, `[emoji] Validación manual` y `[emoji] Fuera de alcance` cuando aporten valor real. No forzar secciones vacías en PRs chicos o de docs.
- **Secciones opcionales:** usar `[emoji] Validación Local` para comandos realmente ejecutados, `[emoji] Cómo correr los tests` si conviene dejar receta reproducible, `Tests agregados` para aclarar si hubo tests nuevos o no, `Cambios de API/Contratos` cuando cambien interfaces/wiring/source of truth, y `Código muerto/paths duplicados` cuando se haya eliminado o consolidado algo.
- **Nivel de detalle:** en `[emoji] Qué se cambió`, agrupar por módulo/feature/área y nombrar archivos, clases, contratos o workflows tocados. En `Por qué`, listar el problema resuelto o la razón técnica/operativa. En `Fuera de alcance`, dejar follow-ups reales o límites decididos para mantener foco.
- **Bullets y checkboxes:** usar bullets cortos por defecto. Reservar checkboxes para validación manual o checklists; fuera de eso, usarlos solo si ordenan mejor el cambio.
- **Validación:** `Validación manual` debe ser una checklist de flujos concretos y observables. Si hubo validación local automatizable, agregar comandos exactos en bloque `bash`. No duplicar `Validación Local` y `Cómo correr los tests` si muestran lo mismo.
- **Commits incluidos:** listar `hash corto + subject`. Si el PR es de un solo commit, una sola línea alcanza.
- **Títulos, ramas y commits:** preferir ramas en minúsculas con prefijo de tipo (`fix/...`, `refactor/...`, `docs/...`, `chore/...`, `feat/...`, `build/...`, `ci/...`, `test/...`, `codex/...` cuando corresponda). Alinear, cuando aplique, título del PR y commits con formato `type(scope): summary`.
- **Emojis:** usarlos de forma pragmática para mejorar escaneo. No imponer un set fijo de gitmojis ni una correspondencia rígida por sección.
- **Evitar:** secciones vacías o “Ninguno” repetido sin valor, headings en inglés por estilo, cuerpos largos sin módulos/archivos concretos, y secciones inventadas que no aparezcan de forma recurrente en el repo.
