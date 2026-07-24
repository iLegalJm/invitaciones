---
name: template-builder
description: Adapta una invitación digital existente (clonada como base) para un nuevo cliente, actualizando datos del evento, paleta y tipografía en una rama nueva por cliente. Usar cuando el usuario pida "adaptar la invitación para [nombre cliente]", "nueva rama de cliente" o "cambiar datos del evento".
---

## Flujo de trabajo de este proyecto
- Cada cliente nuevo = una rama nueva en git, nombrada `{nombre1}-{nombre2}` (ej: `sheyla-ivan`).
- La base es siempre la última invitación funcional (clonada/rama principal).
- NO se crea estructura desde cero: se reutiliza `InvitacionPrincipal.jsx`, `components/` y `theme.js` existentes, solo se actualizan contenido y estilos.

## Instrucciones

1. Confirmar en qué rama está parado el usuario (`git branch --show-current`). Si no coincide con el nombre del cliente actual, avisar antes de tocar nada.
2. Identificar y listar los archivos que contienen datos específicos del cliente anterior (nombres, fecha, lugar, textos, colores) — típicamente:
   - `src/theme.js` (o `theme.example.js` si aún no existe uno real)
   - `InvitacionPrincipal.jsx` (nombres, fecha, ubicación)
   - `components/Hero.jsx`, `Detalles.jsx`, `Footer.jsx`
3. Pedir al usuario (si no los dio) los datos nuevos:
   - Nombres de los novios
   - Fecha y hora del evento
   - Lugar (ceremonia y/o recepción, con link de Google Maps)
   - Paleta de colores deseada (o mantener la anterior si no especifica)
   - Tipografía (mantener la anterior salvo pedido explícito)
4. Reemplazar SOLO los datos del cliente, sin tocar la lógica ni estructura de componentes (RSVP, countdown, animaciones se mantienen intactos).
5. Actualizar `theme.js` con la nueva paleta, dejando `theme.example.js` como referencia sin tocar (no se pisa el ejemplo genérico).
6. Antes de dar por terminado, correr un diff mental: confirmar que no quedó ningún dato hardcodeado del cliente anterior (nombre, fecha, textos).
7. Sugerir el commit: `git add . && git commit -m "Adaptar invitación para {nombre cliente}"` — pero NO ejecutar el commit sin confirmación del usuario.

## Notas
- `theme.example.js` es la referencia genérica por tipo de evento (boda, cumpleaños, etc.) — se usa como punto de partida, pero el archivo real de cada cliente es `theme.js`, específico de esa rama.
- Si el nuevo cliente pide un tipo de evento distinto al de la base clonada (ej: la base es boda y el nuevo es XV años), avisar que puede requerir ajustes de estructura, no solo de datos.