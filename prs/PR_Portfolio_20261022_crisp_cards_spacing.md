# fix(ui): nitidez de tarjetas y espaciado vertical

Base: `master`
Rama: `fix/039-crisp-cards-spacing`

## Qué se cambió
- Hover de tarjetas sin `scale`, `translate3d` ni variación del fondo; profundidad mediante sombra y borde.
- Reducción leve y consistente del padding superior de páginas internas.
- Separación Evidencia complementaria → Contacto levemente reducida.

## Commits incluidos
- `fix(ui): keep card text crisp with shadow-only hover elevation`
- `style(layout): slightly tighten page entrances and section handoff`
- `docs(039): capture crisp hover and spacing verification`

## Validación
Vercel del HEAD final y diff de alcance; la validación visual manual en navegador queda expresamente pendiente.

## Fuera de alcance
Engineering Trace, dependencias, textos, datos y repositorios externos.
