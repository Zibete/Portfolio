# Verification — Feature 037

- CSS define el token en `:root` y `.dark`; `--color-signal` está expuesto a Tailwind.
- La tipografía y los componentes existentes permanecen inalterados.
- Las clases signal se aplican únicamente a seis archivos TSX sin lógica nueva.
- Ningún estado de foco depende exclusivamente del nuevo color.
- Se debe validar build de Vercel en el HEAD exacto y realizar inspección visual en claro/oscuro; no afirmar pruebas manuales no realizadas.
