# Feature 032 — Evidence & Projects

## Objetivo
Conectar el recorrido Engineering Trace con artefactos públicos que permitan a revisores técnicos inspeccionar decisiones, implementación y pruebas de Migrar SAP y ZIBE.

## Alcance
- Reemplazar artefactos de ejemplo de Discovery y Specification por fuentes verificadas de Migrar SAP y ZIBE.
- Mantener AI-assisted Engineering como escenario didáctico identificado; no simular una integración de LLM.
- Alinear los fragmentos de Implementation con las funciones efectivamente publicadas.
- Agregar al final de Engineering Trace un índice con dos casos, enlaces directos a código/documentación y acceso a las fichas completas.
- Declarar junto a cada caso los límites de evidencia (resultado histórico reportado frente a test público; CI simulada frente a dispositivos/backend real).
- Centralizar referencias y contenido en site-config.ts con tipos explícitos.

## Fuera de alcance
- Modificar proyectos de origen, MDX existentes, backend, dependencias, CV o rutas.
- Afirmar resultados nuevos, estadísticas actuales de ZIBE o integraciones LLM desplegadas.
- Reinterpretar datos privados o publicar información del entorno de trabajo.

## Criterios de aceptación
1. Todas las fuentes externas indicadas existen en repositorios públicos.
2. El artefacto de cada etapa corresponde a una descripción sustentada por su fuente.
3. Los enlaces internos conducen a casos completos reales.
4. Los resultados históricos, pruebas reproducibles y límites de CI se distinguen.
5. El índice es legible con teclado, en móvil y en modo reduced-motion sin ampliar lógica de animación.
