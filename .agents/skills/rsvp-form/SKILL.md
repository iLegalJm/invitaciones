---
name: rsvp-form
description: Genera un formulario de confirmación de asistencia (RSVP) en React para invitaciones digitales, que guarda las respuestas en Google Sheets vía Apps Script. Usar cuando el usuario pida "formulario de RSVP", "confirmación de asistencia" o "quiénes van a venir".
---

## Stack de este proyecto

- React 18 + Vite
- Tailwind CSS 3.x para estilos (mobile-first, siguiendo GEMINI.md)
- Framer Motion para animaciones de aparición/transición
- Almacenamiento: Google Sheets (vía Google Apps Script Web App, sin backend propio)

## Instrucciones

1. Crear el componente `RSVPForm.jsx` en `src/components/`.
2. Campos del formulario:
   - Nombre completo (requerido)
   - ¿Asistirá? (Sí / No) — select o toggle
   - Cantidad de acompañantes (número, solo visible si asistirá)
   - Restricciones alimentarias (texto opcional)
   - Mensaje para los novios/festejado/a (textarea opcional)
3. Validar en cliente antes de enviar (nombre y asistencia son obligatorios).
4. Enviar los datos con `fetch` en modo `no-cors` como POST a la URL del Apps Script Web App (guardada en variable de entorno `VITE_RSVP_SHEET_URL`).
5. Mostrar estado de envío: "Enviando..." → "¡Gracias, confirmación recibida!" con animación de Framer Motion (fade + scale).
6. Estilo: Tailwind, mobile-first, coherente con la paleta de la invitación (pedir paleta si no está definida en el proyecto).
7. Manejar errores de red mostrando un mensaje amigable y opción de reintentar.

## Notas técnicas

- `no-cors` no permite leer la respuesta del script, así que el éxito se asume tras el envío sin error de red (limitación conocida de Apps Script + fetch desde el navegador).
- No exponer URLs de producción del Sheet directamente en el código: usar `.env` (`VITE_RSVP_SHEET_URL=...`) y agregar `.env` a `.gitignore`.
- Referencia de implementación completa en `references/apps-script.js` y `references/RSVPForm.example.jsx`.
