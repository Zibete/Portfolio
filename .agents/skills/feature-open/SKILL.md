---
name: feature-open
description: Abrir una iteración de una feature del repo siguiendo AGENTS.md, specs y alcance real.
---

# Objetivo

Abrir una iteración nueva de una feature ya existente sin salir del alcance definido.

# Cuándo usar esta skill

Usar cuando el usuario pida:
- abrir una feature
- preparar una iteración
- definir rama + prompt
- dejar lista una tarea para implementar

# Instrucciones

1. Leer `AGENTS.md`.
2. Leer `docs/PROJECT_CONSTITUTION.md`.
3. Leer la feature activa en `specs/`:
   - `spec.md`
   - `plan.md`
   - `tasks.md`
   - `verification.md`
4. Identificar el objetivo puntual de la iteración.
5. Delimitar alcance real y fuera de alcance.
6. Detectar los archivos de código probablemente afectados.
7. Proponer una rama consistente con el cambio.
8. Generar un prompt corto de implementación apoyado en AGENTS.md y la feature activa.

# Salida esperada

- rama sugerida
- archivos obligatorios a revisar
- alcance
- fuera de alcance
- prompt de implementación