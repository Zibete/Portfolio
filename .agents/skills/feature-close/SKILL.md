---
name: feature-close
description: Cerrar una iteración de una feature del repo, alinear docs, validar y preparar PR draft.
---

# Objetivo

Cerrar una iteración ya implementada sin abrir alcance nuevo.

# Cuándo usar esta skill

Usar cuando el usuario pida:
- cerrar una feature
- revisión final
- validación + PR
- sincronizar specs con implementación
- dejar lista la iteración para merge

# Instrucciones

1. Leer `AGENTS.md`.
2. Leer `docs/PROJECT_CONSTITUTION.md`.
3. Leer la feature activa en `specs/`:
   - `spec.md`
   - `plan.md`
   - `tasks.md`
   - `verification.md`
4. Revisar el resultado implementado en código.
5. Detectar microajustes finales solo si son realmente necesarios.
6. Alinear docs de la feature con el resultado real.
7. Ejecutar validaciones relevantes del repo.
8. Generar PR draft en `prs/` si fue pedido.
9. Reportar cierre técnico con archivos modificados, validaciones, checklist manual y fuera de alcance.

# Salida esperada

- archivos modificados
- resumen de cierre
- validaciones ejecutadas
- PR draft, si corresponde
- checklist manual
- fuera de alcance