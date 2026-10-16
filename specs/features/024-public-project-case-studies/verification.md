# Verification — Feature 024

## Revisión editorial estática

- [x] Migrar SAP continúa destacado; ZIBE continúa secundario.
- [x] Se conservan slugs, archivos y URLs públicas de los casos.
- [x] Resultado de ~60 a ~500 documentos/día corresponde a caso histórico AP.
- [x] Se diferencia core público comprobable de integraciones corporativas no reproducibles.
- [x] ZIBE documenta modernización en 2025–2026 y límites de build con configuración ficticia.
- [x] Sin declaración de backend real desplegado, usuarios activos o agentes de IA en producción.
- [x] No se agregan nuevos datos privados, componentes, dependencias ni rutas.

## Validación de entrega

- [ ] Estado de Vercel del último SHA — comprobar tras push.
- [ ] `npm run lint` / `npm run build` locales — no marcar si no se ejecutaron.
- [ ] Revisión manual de `/projects`, `/projects/migrar-sap-portfolio` y `/projects/zibe` en móvil/escritorio.
- [ ] Aprobación final del PR antes de fusionar.

Vercel exitoso acredita el despliegue que reporta la plataforma, no la ejecución de pruebas locales fuera de ese sistema.
