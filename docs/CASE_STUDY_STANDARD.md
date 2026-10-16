# Estándar editorial de casos de estudio

Este documento orienta nuevas publicaciones y revisiones del portfolio. Se enfoca en evidencia de **ingeniería aplicada a necesidades reales**, útil para roles de automatización, integración y una futura transición hacia Forward Deployed Engineering (FDE). No constituye una certificación FDE ni una checklist de capacidades ya dominadas.

## Contrato mínimo de cada caso

El relato debe responder, con el detalle permitido por su contexto:

1. **Problema y usuario:** qué tarea, fricción o necesidad concreta se buscaba resolver; quién utiliza o recibe el resultado.
2. **Restricciones y alcance:** sistemas, datos, interfaz, mantenimiento, confidencialidad y qué quedó deliberadamente fuera.
3. **Contribución personal:** decisiones, implementación y colaboración propias, sin atribuirse trabajo ajeno.
4. **Alternativas y trade-offs:** por qué se eligió ese stack o patrón; qué se ganó y qué limitaciones implica.
5. **Implementación:** flujo comprensible y responsabilidades, sin publicar contratos internos ni información sensible.
6. **Validación y resultados:** pruebas efectivamente realizadas, qué pueden reproducir otros, métricas con contexto y atribución.
7. **Pendientes:** límites, incertidumbres, fallos conocidos y siguiente evidencia necesaria para sostener una afirmación más fuerte.

Los títulos pueden variar y la información no tiene que duplicarse en siete secciones. En todos los casos, una síntesis `Evidencia y pendientes` permite identificar **qué es público**, **qué es reportado pero no reproducible aquí** y **qué sigue sin comprobarse**.

## Niveles de evidencia

| Tipo | Cómo comunicarlo |
| --- | --- |
| Código, tests o demo públicos | Vincular al artefacto real e indicar exactamente qué demuestra |
| Resultado profesional histórico | Atribuir el período, la fuente y el alcance; no presentarlo como test reproducible |
| Herramienta interna en uso o prueba | Describir conceptualmente solo lo autorizado y no afirmar validación pública |
| Prototipo o MVP | Precisar los flujos que funcionan y los escenarios todavía no probados |
| Diseño, hipótesis o aprendizaje | Identificarlo como objetivo o pendiente, nunca como entrega de producción |

Evitar usar «production-ready», «end-to-end validado», «usuarios activos», «impacto medido» o «integración con IA» por el solo hecho de tener código, un CI verde o una prueba manual.

## Mapa de evidencia a octubre de 2026

| Caso | Evidencia visible | Brecha importante |
| --- | --- | --- |
| Migrar SAP | Core VBA público, documentación, tests reproducibles con Excel/Windows y resultado histórico reportado | Integraciones corporativas y adopción no reproducibles fuera de su entorno |
| Finance Toolkit | Descripción segura de problema, diseño y estado; repositorio privado | Demo sintética independiente, validación publicable y métricas autorizadas |
| ReportBridge | Descripción de MVP y pruebas iniciales reportadas | Prueba pública y validación ampliada de casos, volumen y distribución |
| ZIBE | Código modular, CI y documentación Firebase pública | Validación con backend real, dispositivos y flujos completos |

Este mapa registra el **tipo de evidencia disponible**, no un ranking de mérito ni una afirmación de que todas las pruebas hayan sido ejecutadas en esta iteración.

## Umbral para un futuro caso de IA integrada

Un futuro proyecto con APIs de LLMs o agentes solo se publica como implementación verificable cuando exista **código o demo autorizados** y evidencia suficiente para explicar:

- la necesidad real, el usuario y por qué un enfoque sin LLM sería insuficiente;
- los datos de prueba (sintéticos si fuera necesario), la arquitectura y el contrato de entradas/salidas;
- una evaluación reproducible con conjunto de casos, criterios de éxito, errores y baseline;
- límites relevantes: seguridad, privacidad, costo, latencia, fallos y revisión humana;
- despliegue, monitoreo y adopción **solamente si ocurrieron y pueden demostrarse**.

Una prueba local no equivale a servicio desplegado. Un chatbot simple no equivale a un agente autónomo. Usar ChatGPT, Claude o Gemini durante el desarrollo no convierte automáticamente el software resultante en una aplicación de IA.

**No crear en el sitio una tarjeta vacía o un proyecto LLM ficticio**: incorporar ese caso cuando exista el trabajo real.

## Revisión previa a publicar

Antes de agregar o cambiar un caso, corroborar hechos y licencias, comprobar los enlaces públicos, inspeccionar el texto por contenido privado y asegurarse de que el empleador o titular haya autorizado lo que se revele. Si la autorización es incierta, suspender la ampliación de la descripción.

Para cada PR, revisar los cuatro puntos: exactitud de afirmaciones, evidencia accesible, limitaciones explícitas y ausencia de información no autorizada.
