# Libreta de Hierro

Web de rutinas de gimnasio para el móvil: cuatro planes de unos 60 minutos, imagen y vídeo de cada ejercicio, 6 alternativas por ejercicio si la máquina está ocupada (siempre una con mancuernas y banco y otra sin máquina), temporizador configurable y registro de pesos que recuerda la sesión anterior.

| Enlace | Persona | Planes |
|---|---|---|
| [Carlos](https://cmesonarana.github.io/libreta-de-hierro/carlos/) | 32 años, 75 kg. Estética: pecho, glúteo, hombros y abdomen | 2 y 3 días por semana |
| [Kevin](https://cmesonarana.github.io/libreta-de-hierro/kevin/) | 32 años, 105 kg. Perder grasa sin perder músculo | 2 y 3 días por semana |

Cada enlace muestra solo la rutina de esa persona. La raíz (`/libreta-de-hierro/`) solo deja elegir entre los dos. Los enlaces antiguos (`/estetica/`, `/perdida/`) redirigen a los nuevos.

## Publicarla en GitHub Pages (una vez)

1. Crea un repositorio nuevo en GitHub (puede ser público) y sube **todo el contenido de esta carpeta**.
2. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`, **Save**.
3. Al minuto tendrás la web en `https://<tu-usuario>.github.io/<repositorio>/`.
4. Manda a cada persona su enlace:
   - `https://<tu-usuario>.github.io/<repositorio>/carlos/`
   - `https://<tu-usuario>.github.io/<repositorio>/kevin/`
5. En el móvil, ábrelo y usa **Añadir a pantalla de inicio** (Safari: botón compartir; Chrome: menú ⋮). Se abre como una app.

Para probarla en el ordenador hace falta un servidor local (`python -m http.server` en esta carpeta), porque las páginas de cada persona cargan los archivos de la carpeta de arriba.

## Cómo se usa

- Elige 2 o 3 días y la sesión (A, B, C). Cada sesión va por **pasos** numerados: un ejercicio suelto, una superserie (2 ejercicios alternos) o un circuito. Tras guardar una sesión, la app pasa sola a la siguiente.
- **Empezar sesión** (o **Empezar** en un paso concreto) pone la app en modo sesión. El paso, el ejercicio y la serie en la que estás quedan marcados, y la barra de abajo dice dónde vas («Paso 2 de 4 · Serie 3 de 4»), qué toca y cuántas reps.
- La rutina lleva el reloj sola: **Prepárate** (10 s) → **serie** (tiempo según las reps, 4 s por repetición) → **descanso** (el que marca cada ejercicio) → siguiente serie. En las superseries, tras el primer ejercicio sale «Cambia a 1B» y, al cerrar la vuelta, el descanso con «Siguiente: …». Si acabas antes, pulsa **Hecha**; si necesitas más, **+15**.
- **Saltar** termina la preparación o el descanso. **⏮ Atrás** deshace la última serie y vuelve a ella. Los números de serie de cada paso (1, 2, 3, 4) y el número de cada fila sirven para ir a otra serie.
- Sonidos suaves: tic-tic en los 3 últimos segundos, un tono que sube al empezar una serie, uno que baja al empezar un descanso y otro al acabar la sesión. En ⚙ se prueban, se apagan y se cambian los segundos por repetición y la preparación.
- ⏸ pausa la sesión (y el reloj). ■ la para: guardar y terminar, o parar sin guardar (lo apuntado se queda como borrador). Si recargas la página, la sesión sigue donde estaba.
- La próxima vez verás lo que hiciste y, si llegaste al tope del rango, un aviso de **¡Sube!**. El botón del calendario arriba abre el **registro de sesiones** (fecha, duración, series, kg levantados y el detalle de cada ejercicio).
- **¿Máquina ocupada?** Arriba de cada ejercicio hay pestañas con el principal y 6 alternativas: al menos una con mancuernas y banco y otra de calistenia o solo mancuernas (debajo de cada nombre pone qué material necesita). Toca una y cambia el ejercicio con su imagen y vídeo; se recuerda para esa sesión.
- El cardio tiene intervalos configurables (trabajo, suave, rondas). La rueda ⚙ configura sonido, vibración y la copia de seguridad.
- El progreso se guarda **en el navegador de cada móvil**. En ⚙ puedes descargar una copia y cargarla en otro dispositivo.

## Archivos

- `carlos/`, `kevin/`: la página de cada persona (solo dicen qué rutina cargar). Al cambiar cualquier archivo, sube el número `?v=` de sus enlaces para que los móviles carguen la versión nueva al momento.
- `app.js`, `app.css`: la aplicación.
- `rutinas.js`: los cuatro planes (series, reps, descansos, alternativas, notas). Es lo que hay que tocar para cambiar una rutina.
- `ejercicios.js` + `img/`: nombres, pasos e ilustraciones de cada ejercicio.
- `videos.js`: un vídeo de técnica de YouTube por ejercicio. Si alguno desaparece, borra su línea y la app mostrará un enlace de búsqueda.

## Créditos y avisos

- Exercise data by [RepDB (repdb.co)](https://repdb.co): nombres, instrucciones e ilustraciones, con su licencia gratuita (uso dentro de la app con atribución; no redistribuir como dataset).
- Vídeos: de sus autores en YouTube, incrustados con `youtube-nocookie.com`.
- Las rutinas se basan en una revisión de la evidencia (octubre de 2026); el resumen está en `INFORME.md`. No es consejo médico: si hay dolor en el pecho, mareos o alguna enfermedad, consulta antes con un médico.
