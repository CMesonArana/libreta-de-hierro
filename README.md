# Libreta de Hierro

Web de rutinas de gimnasio para el móvil: cuatro planes de unos 60 minutos, imagen y vídeo de cada ejercicio, hasta 3 alternativas si la máquina está ocupada, temporizador configurable y registro de pesos que recuerda la sesión anterior.

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
- Apunta kg y repeticiones y pulsa ✓: arranca el descanso de ese ejercicio. La próxima vez verás lo que hiciste y, si llegaste al tope del rango, un aviso de **¡Sube!**.
- **¿Máquina ocupada?** Arriba de cada ejercicio hay pestañas con el principal y hasta 3 opciones. Toca una y cambia el ejercicio con su imagen y vídeo; se recuerda para esa sesión.
- Barra inferior: descanso o trabajo rápido, ±15 s, pausa. La rueda ⚙ configura tiempos, sonido, vibración y descanso automático. El cardio tiene intervalos configurables (trabajo, suave, rondas).
- El progreso se guarda **en el navegador de cada móvil**. En ⚙ puedes descargar una copia y cargarla en otro dispositivo.

## Archivos

- `carlos/`, `kevin/`: la página de cada persona (solo dicen qué rutina cargar).
- `app.js`, `app.css`: la aplicación.
- `rutinas.js`: los cuatro planes (series, reps, descansos, alternativas, notas). Es lo que hay que tocar para cambiar una rutina.
- `ejercicios.js` + `img/`: nombres, pasos e ilustraciones de cada ejercicio.
- `videos.js`: un vídeo de técnica de YouTube por ejercicio. Si alguno desaparece, borra su línea y la app mostrará un enlace de búsqueda.

## Créditos y avisos

- Exercise data by [RepDB (repdb.co)](https://repdb.co): nombres, instrucciones e ilustraciones, con su licencia gratuita (uso dentro de la app con atribución; no redistribuir como dataset).
- Vídeos: de sus autores en YouTube, incrustados con `youtube-nocookie.com`.
- Las rutinas se basan en una revisión de la evidencia (octubre de 2026); el resumen está en `INFORME.md`. No es consejo médico: si hay dolor en el pecho, mareos o alguna enfermedad, consulta antes con un médico.
