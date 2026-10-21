# Verification — Feature 032

## Fuentes revisadas
- Migrar SAP: docs/CASE_STUDY.md, src/vba/core/modCoreValidation.bas, docs/TESTING.md y tools/run_core_tests.ps1.
- ZIBE: docs/adr/0001-module-boundaries.md, scripts/check_architecture.py, docs/ARCHITECTURE.md, docs/CI.md y .github/workflows/android-ci.yml.
- Las fuentes citadas provienen de la rama pública main de cada repositorio.

## Límites
- Las pruebas del núcleo VBA requieren Windows y Excel. No ejercitan SAP ni servicios privados.
- ZIBE dispone de CI con datos ficticios y tests de reglas. Esa configuración no certifica Firebase real ni dispositivos.
- El caso AI-assisted muestra un ejemplo didáctico, no un registro de ejecución de modelos.
- No se modificaron datos MDX, código de repositorios externos ni el PDF CV.

## Validación de integración
Revisar que los enlaces internos /projects/migrar-sap-portfolio y /projects/zibe conservan sus rutas y que el índice aparece tanto en el diseño desktop como con motion reducido.
