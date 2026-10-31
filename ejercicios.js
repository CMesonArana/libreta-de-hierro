// Biblioteca de ejercicios. Datos e imágenes: Exercise data by RepDB (repdb.co), licencia free tier; los ejercicios con bandas sin imagen propia reutilizan la del mismo movimiento (campo aviso).
// Los vídeos (yt) se añaden en videos.js.

const EX = {
 "push-up": {
  "n": "Flexiones",
  "m": "Pecho · Tríceps · Hombro frontal",
  "eq": "Esterilla, peso corporal",
  "img": [
   "img/push-up-start.webp",
   "img/push-up-peak.webp"
  ],
  "pasos": [
   "Comienza en posición de plancha alta con las manos a la anchura de los hombros.",
   "Baja el cuerpo hasta que el pecho casi toque el suelo.",
   "Empuja hacia arriba hasta la posición inicial.",
   "Mantén el cuerpo en línea recta en todo momento.",
   "Repite."
  ],
  "tips": [
   "Aprieta el abdomen y los glúteos para evitar que la cadera caiga.",
   "No abras los codos en exceso; mantenlos cerca del torso.",
   "Mantén el cuello neutro mirando al suelo."
  ]
 },
 "decline-push-up": {
  "n": "Flexión Declinada",
  "m": "Pecho · Hombro frontal · Tríceps",
  "eq": "Silla o sofá firme + esterilla",
  "img": [
   "img/decline-push-up-start.webp",
   "img/decline-push-up-peak.webp"
  ],
  "pasos": [
   "Coloca los pies en una superficie elevada y las manos en el suelo.",
   "Baja el pecho hacia el suelo de forma controlada.",
   "Vuelve a empujar hasta la posición inicial.",
   "Repite."
  ],
  "tips": [
   "Mantén el cuerpo en línea recta.",
   "Cuanto mayor sea la elevación, más se trabaja el pecho superior."
  ]
 },
 "incline-push-ups": {
  "n": "Push-up inclinado",
  "m": "Pecho · Hombro frontal · Tríceps",
  "eq": "Mesa o encimera firme",
  "img": [
   "img/incline-push-ups-start.webp",
   "img/incline-push-ups-peak.webp"
  ],
  "pasos": [
   "Coloca las manos sobre una mesa o encimera firme, a la anchura de los hombros.",
   "Extiende las piernas hacia atrás en posición de plancha.",
   "Baja el pecho hacia la mesa flexionando los codos.",
   "Empuja de vuelta a la posición inicial.",
   "Repite."
  ],
  "tips": [
   "Aprieta el abdomen para que la cadera no se hunda.",
   "Cuanto más alta la superficie, más fácil el ejercicio.",
   "Asegúrate de que la mesa no se mueva antes de empezar."
  ]
 },
 "knee-push-ups": {
  "n": "Push-Up en Rodillas",
  "m": "Pecho · Hombro frontal · Abdomen",
  "img": [
   "img/knee-push-ups-start.webp",
   "img/knee-push-ups-peak.webp"
  ],
  "pasos": [
   "Comienza en posición de push-up con las rodillas en el suelo.",
   "Coloca las manos a la anchura de los hombros en el suelo.",
   "Mantén el cuerpo en línea recta desde las rodillas hasta los hombros.",
   "Baja el pecho hacia el suelo doblando los codos.",
   "Empuja con las manos para volver a la posición inicial.",
   "Repite el número de repeticiones deseado."
  ],
  "tips": [
   "No abras los codos en exceso hacia los lados.",
   "Aprieta los glúteos y el abdomen durante todo el movimiento.",
   "Mira al suelo para mantener el cuello neutro."
  ],
  "eq": "Esterilla, peso corporal"
 },
 "wide-grip-push-ups": {
  "n": "Flexiones con Agarre Ancho",
  "m": "Pecho · Hombro frontal · serratus_anterior",
  "eq": "Esterilla, peso corporal",
  "img": [
   "img/wide-grip-push-ups-start.webp",
   "img/wide-grip-push-ups-peak.webp"
  ],
  "pasos": [
   "Comienza en una plancha alta con las manos más separadas que el ancho de hombros.",
   "Mantén el cuerpo en línea recta de la cabeza a los talones.",
   "Baja el pecho hacia el suelo flexionando los codos.",
   "Mantén el core activado y los glúteos contraídos.",
   "Empuja de vuelta hasta extender los brazos.",
   "Repite el número de repeticiones deseado."
  ],
  "tips": [
   "Mantén los codos a unos 45 grados respecto al torso.",
   "Mantén una línea recta de la cabeza a los talones.",
   "Baja hasta que el pecho quede cerca del suelo."
  ]
 },
 "pike-push-ups": {
  "n": "Flexiones en Pica",
  "m": "Hombro frontal · Hombro lateral · Trapecio · Tríceps",
  "eq": "Esterilla, peso corporal",
  "img": [
   "img/pike-push-ups-start.webp",
   "img/pike-push-ups-peak.webp"
  ],
  "pasos": [
   "Comienza en posición de perro boca abajo con las caderas altas y las manos a la anchura de los hombros.",
   "Acerca los pies a las manos.",
   "Dobla los codos y baja la cabeza hacia el suelo.",
   "Mantén las caderas altas durante todo el ejercicio.",
   "Empuja hacia arriba hasta que los brazos queden completamente extendidos.",
   "Repite el número de repeticiones deseado."
  ],
  "tips": [
   "Cuanto más altas las caderas, más trabajan los hombros.",
   "Baja la cabeza hacia un punto ligeramente por delante de las manos.",
   "Acerca los pies a las manos para progresar hacia las flexiones en pino."
  ]
 },
 "band-pull-apart": {
  "n": "Separación de Banda Elástica",
  "m": "Hombro posterior · Espalda media · Trapecio",
  "eq": "Tubo con asas o minibanda",
  "img": [
   "img/band-pull-apart-start.webp",
   "img/band-pull-apart-peak.webp"
  ],
  "pasos": [
   "Ponte de pie y sujeta el tubo con las dos manos, con los brazos estirados al frente, a la altura de los hombros.",
   "Las manos comienzan a la anchura de los hombros, palmas mirando hacia abajo.",
   "Manteniendo los brazos extendidos, separa la banda llevando las manos hacia los lados.",
   "Termina con la banda tocando el pecho y los omóplatos juntos.",
   "Vuelve lentamente a la posición inicial y repite."
  ],
  "tips": [
   "Agarra el tubo con las manos a un palmo de distancia y sepáralas más para que cueste más; si no, usa una minibanda.",
   "Lidera el movimiento con los meñiques: esto rota externamente los hombros."
  ]
 },
 "banded-hip-thrust": {
  "n": "Empuje de Cadera con Banda",
  "m": "Glúteo mayor · Glúteo medio · Isquios",
  "img": [
   "img/banded-hip-thrust-start.webp",
   "img/banded-hip-thrust-peak.webp"
  ],
  "pasos": [
   "Coloca una banda de bucle justo por encima de tus rodillas y siéntate en el suelo con la parte superior de tu espalda contra el sofá.",
   "Dobla las rodillas, apoya los pies al ancho de las caderas y posiciona la banda para crear tensión.",
   "Impúlsate a través de los talones, extiende las caderas y levanta los glúteos del suelo hasta que tu cuerpo forme una línea recta.",
   "Aprieta los glúteos con fuerza en la parte superior, asegurándote de empujar las rodillas hacia afuera contra la banda.",
   "Baja lentamente las caderas a la posición inicial con control."
  ],
  "tips": [
   "Mantén una tensión constante en la banda durante todo el movimiento.",
   "Concéntrate en una fuerte contracción de los glúteos en el pico del empuje.",
   "Mantén la barbilla metida y la mirada al frente para una columna vertebral neutra.",
   "Asegúrate de que tus espinillas estén verticales en la parte superior del movimiento."
  ],
  "eq": "Minibanda + sofá firme"
 },
 "banded-glute-bridge": {
  "n": "Puente de Glúteos con Banda",
  "m": "Glúteo mayor · Glúteo medio · Isquios",
  "img": [
   "img/banded-glute-bridge-start.webp",
   "img/banded-glute-bridge-peak.webp"
  ],
  "pasos": [
   "Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo a la anchura de los hombros.",
   "Coloca una banda circular alrededor de ambas piernas justo por encima de las rodillas.",
   "Presiona la zona lumbar contra el suelo y activa el core.",
   "Empuja con los talones y aprieta los glúteos para elevar las caderas en puente, manteniendo la tensión de la banda al empujar las rodillas hacia afuera.",
   "Arriba, el cuerpo forma una línea recta de los hombros a las rodillas. Haz una breve pausa.",
   "Baja de forma controlada hasta la posición inicial y repite el número de repeticiones recomendado."
  ],
  "tips": [
   "Las rodillas tienden a irse hacia dentro; empújalas hacia afuera contra la banda.",
   "Detén la subida cuando las caderas queden a la altura de hombros y rodillas; no hiperextiendas la lumbar.",
   "Aprieta fuerte arriba; un puente rápido a medio recorrido se siente fácil porque lo es."
  ],
  "eq": "Minibanda + esterilla"
 },
 "glute-bridge": {
  "n": "Puente de Glúteos",
  "m": "Glúteo mayor · Isquios",
  "eq": "Esterilla, peso corporal",
  "img": [
   "img/glute-bridge-start.webp",
   "img/glute-bridge-peak.webp"
  ],
  "pasos": [
   "Túmbate boca arriba con las rodillas flexionadas y los pies planos en el suelo.",
   "Eleva las caderas apretando los glúteos.",
   "Mantén brevemente en la parte alta con las caderas totalmente extendidas.",
   "Baja las caderas de forma controlada.",
   "Repite."
  ],
  "tips": [
   "Empuja con los talones para activar mejor los glúteos.",
   "Evita arquear la zona lumbar al extender las caderas.",
   "Mantén las rodillas alineadas con los pies durante todo el recorrido."
  ]
 },
 "single-leg-hip-thrust": {
  "n": "Empuje de Cadera a Una Pierna",
  "m": "Glúteo mayor · Glúteo medio · Isquios",
  "eq": "Sofá firme, peso corporal",
  "img": [
   "img/single-leg-hip-thrust-start.webp",
   "img/single-leg-hip-thrust-peak.webp"
  ],
  "pasos": [
   "Siéntate en el suelo de espaldas al sofá y apoya la parte alta de la espalda en su borde, justo debajo de los omóplatos.",
   "Apoya ambos pies planos en el suelo con las rodillas flexionadas y luego lleva una rodilla hacia el pecho y mantenla ahí.",
   "Mantén la barbilla metida hacia el pecho y los brazos apoyados sobre el sofá.",
   "Empuja con el talón del pie apoyado y sube las caderas hasta que el cuerpo quede plano desde los hombros hasta la rodilla.",
   "Aprieta el glúteo arriba sin arquear la zona lumbar y baja las caderas con control.",
   "Completa las repeticiones previstas y luego cambia de pierna."
  ],
  "tips": [
   "Mantén la espinilla del pie apoyado cerca de la vertical arriba para que el glúteo, y no el isquiotibial, haga la mayor parte del esfuerzo.",
   "No dejes que las caderas giren hacia la pierna elevada; mantén la pelvis nivelada todo el tiempo.",
   "Fija el sofá contra una pared para que no se deslice y empieza con el empuje de cadera a dos piernas hasta que el movimiento te salga fluido."
  ]
 },
 "bulgarian-split-squat": {
  "n": "Sentadilla Búlgara",
  "m": "Glúteo mayor · Cuádriceps · Isquios",
  "eq": "Silla o sofá firme, peso corporal",
  "img": [
   "img/bulgarian-split-squat-start.webp",
   "img/bulgarian-split-squat-peak.webp"
  ],
  "pasos": [
   "Colócate de espaldas a una silla o sofá firme, apoyado contra la pared, y deja un pie detrás sobre el asiento.",
   "Da un paso largo con el pie de delante, con las manos en la cintura.",
   "Baja en 3 segundos hasta que el muslo de delante quede casi paralelo al suelo.",
   "Empuja con el talón delantero para subir, sin rebotar.",
   "Termina todas las reps y cambia de pierna."
  ],
  "tips": []
 },
 "split-squat": {
  "n": "Sentadilla en Tijera",
  "m": "Glúteo mayor · Cuádriceps · Glúteo medio · Isquios",
  "img": [
   "img/split-squat-start.webp",
   "img/split-squat-peak.webp"
  ],
  "pasos": [
   "Párate en posición de tijera con un pie adelante y otro atrás.",
   "Mantén el torso erguido y el core contraído.",
   "Baja las caderas rectas hacia abajo doblando ambas rodillas.",
   "Detente cuando la rodilla trasera esté justo por encima del suelo.",
   "Empuja a través del talón delantero para volver al inicio.",
   "Completa las repeticiones de un lado y luego cambia."
  ],
  "tips": [
   "Baja en línea recta en lugar de lanzarte hacia delante.",
   "Mantén la mayor parte del peso sobre el pie delantero.",
   "Mantén el talón delantero apoyado durante toda la repetición."
  ],
  "eq": "Peso corporal"
 },
 "bodyweight-reverse-lunge": {
  "n": "Zancada Inversa con Peso Corporal",
  "m": "Glúteo mayor · Cuádriceps · Isquios",
  "img": [
   "img/bodyweight-reverse-lunge-start.webp",
   "img/bodyweight-reverse-lunge-peak.webp"
  ],
  "pasos": [
   "Ponte de pie con los pies separados a la altura de las caderas.",
   "Da un paso hacia atrás con una pierna y baja la rodilla hacia el suelo.",
   "Baja hasta que tu muslo delantero quede paralelo al suelo.",
   "Empuja a través del talón delantero para volver a la posición de pie.",
   "Repite con ambas piernas."
  ],
  "tips": [
   "No necesitas peso -- concéntrate en el equilibrio y un descenso controlado.",
   "Mantén el torso erguido en lugar de inclinarte hacia adelante.",
   "Da un paso lo suficientemente atrás para que tu rodilla delantera quede detrás de los dedos del pie."
  ],
  "eq": "Peso corporal"
 },
 "box-squat": {
  "n": "Sentadilla en Caja",
  "m": "Glúteo mayor · Cuádriceps · Lumbares · Glúteo medio",
  "img": [
   "img/box-squat-start.webp",
   "img/box-squat-peak.webp"
  ],
  "pasos": [
   "Ponte de pie frente a una silla firme, con los pies al ancho de los hombros y los brazos extendidos hacia adelante para el equilibrio.",
   "Empuja las caderas hacia atrás y flexiona las rodillas, sentándote hacia la silla en lugar de bajar en línea recta.",
   "Toca la silla ligeramente con los glúteos sin dejarte caer sobre ella.",
   "Empuja con los pies para volver a ponerte de pie, apretando los glúteos arriba.",
   "Repite las repeticiones deseadas."
  ],
  "tips": [
   "Usa una altura de asiento que permita que los muslos queden aproximadamente paralelos al suelo, y bájala a medida que mejore tu movilidad.",
   "Mantén el peso en el centro de los pies — no te inclines hacia los dedos.",
   "No te sientes por completo en la silla: relajar todo el peso sobre ella te hace perder tensión en el core y sobrecarga la columna."
  ],
  "eq": "Silla firme"
 },
 "bodyweight-squat": {
  "n": "Sentadilla con Peso Corporal",
  "m": "Glúteo mayor · Cuádriceps · Lumbares · Glúteo medio",
  "img": [
   "img/bodyweight-squat-start.webp",
   "img/bodyweight-squat-peak.webp"
  ],
  "pasos": [
   "Colócate de pie con los pies separados al ancho de los hombros y los brazos extendidos al frente.",
   "Siéntate hacia atrás y hacia abajo flexionando caderas y rodillas.",
   "Baja hasta que los muslos queden paralelos al suelo.",
   "Empuja con los talones para volver a la posición de pie.",
   "Repite el número deseado de repeticiones."
  ],
  "tips": [
   "Empuja las rodillas hacia afuera en línea con los pies.",
   "Mantén el pecho erguido y la mirada al frente.",
   "Evita que los talones se despeguen del suelo al bajar."
  ],
  "eq": "Peso corporal"
 },
 "banded-squat": {
  "n": "Sentadilla con Banda",
  "m": "Glúteo mayor · Cuádriceps · Glúteo medio · Isquios",
  "img": [
   "img/banded-squat-start.webp",
   "img/banded-squat-peak.webp"
  ],
  "pasos": [
   "Coloca una banda elástica justo sobre las rodillas.",
   "Pies a la anchura de los hombros, puntas ligeramente afuera.",
   "Empuja las rodillas hacia afuera contra la banda al bajar.",
   "Desciende hasta que los muslos queden paralelos o más abajo.",
   "Empuja con los talones para volver a subir."
  ],
  "tips": [
   "Empuja las rodillas contra la banda durante toda la repetición.",
   "Pecho arriba y espalda recta.",
   "No dejes que las rodillas se vayan hacia adentro."
  ],
  "eq": "Banda larga"
 },
 "step-ups": {
  "n": "Step Ups",
  "m": "Glúteo mayor · Cuádriceps · Gemelos · Glúteo medio",
  "eq": "Peldaño bajo, peso corporal",
  "img": [
   "img/step-ups-start.webp",
   "img/step-ups-peak.webp"
  ],
  "pasos": [
   "Párate frente a un peldaño bajo.",
   "Coloca un pie completamente sobre la superficie del peldaño.",
   "Empuja a través de ese talón para subir el cuerpo al peldaño.",
   "Sube el pie de atrás para quedar completamente sobre el peldaño.",
   "Baja con el mismo pie que subió primero.",
   "Alterna piernas o completa todas las repeticiones de un lado antes de cambiar."
  ],
  "tips": [
   "Apoya todo el pie sobre la superficie del peldaño.",
   "Impulsa con el talón de la pierna que sube, no con la de atrás.",
   "Controla el descenso en lugar de dejarte caer."
  ]
 },
 "banded-romanian-deadlift": {
  "n": "Peso Muerto Rumano con Banda",
  "m": "Glúteo mayor · Isquios · Lumbares",
  "img": [
   "img/banded-romanian-deadlift-start.webp",
   "img/banded-romanian-deadlift-peak.webp"
  ],
  "pasos": [
   "Pisa una banda elástica con ambos pies y agarra el extremo superior.",
   "Coloca los pies a la anchura de las caderas, ligera flexión de rodillas.",
   "Flexiona desde la cadera, deslizando las manos por las piernas.",
   "Baja hasta sentir el estiramiento en los isquiotibiales.",
   "Empuja las caderas adelante para volver a la posición inicial."
  ],
  "tips": [
   "Mantén la banda cerca de las piernas.",
   "Detente en el punto bajo de tu rango limpio — no redondees la espalda.",
   "El movimiento es un hinge, no una sentadilla — las rodillas casi no se flexionan."
  ],
  "eq": "Banda larga"
 },
 "single-leg-romanian-deadlift": {
  "n": "Peso Muerto Rumano a Una Pierna",
  "m": "Glúteo mayor · Isquios · Lumbares · Glúteo medio",
  "eq": "Peso corporal",
  "img": [
   "img/single-leg-romanian-deadlift-start.webp",
   "img/single-leg-romanian-deadlift-peak.webp"
  ],
  "pasos": [
   "Ponte sobre una pierna, con la rodilla un poco flexionada y las manos delante de los muslos.",
   "Lleva la cadera hacia atrás y baja las manos a lo largo de la pierna de apoyo, con la otra pierna recta hacia atrás.",
   "Baja hasta sentir el estiramiento en los isquios, con la espalda neutra.",
   "Empuja el suelo con el talón para volver arriba.",
   "Si pierdes el equilibrio, roza una pared con la punta de los dedos."
  ],
  "tips": []
 },
 "bodyweight-good-morning": {
  "n": "Buenos Días con Peso Corporal",
  "m": "Lumbares · Isquios · Glúteo mayor",
  "img": [
   "img/bodyweight-good-morning-start.webp",
   "img/bodyweight-good-morning-peak.webp"
  ],
  "pasos": [
   "Colócate de pie con los pies separados al ancho de las caderas y las manos detrás de la cabeza.",
   "Mantén una ligera flexión en las rodillas y contrae el core.",
   "Bisagra en las caderas y baja el torso hasta quedar casi paralelo al suelo.",
   "Impulsa las caderas hacia adelante para volver a la posición erguida.",
   "Repite el número deseado de repeticiones."
  ],
  "tips": [
   "Empuja la cadera hacia atrás como si cerraras un cajón.",
   "Mantén la espalda recta durante toda la bajada.",
   "Detén el descenso si notas que la zona lumbar se redondea."
  ],
  "eq": "Peso corporal"
 },
 "banded-seated-hip-abduction": {
  "n": "Abducción de Cadera Sentado con Banda",
  "m": "Glúteo medio · Glúteo mayor",
  "eq": "Minibanda + silla",
  "img": [
   "img/banded-seated-hip-abduction-start.webp",
   "img/banded-seated-hip-abduction-peak.webp"
  ],
  "pasos": [
   "Siéntate en una silla con una banda elástica alrededor de tus rodillas.",
   "Mantén los pies apoyados en el suelo, separados al ancho de tus caderas, y conserva una postura erguida.",
   "Empuja tus rodillas hacia afuera contra la banda, activando tus glúteos.",
   "Sostén la contracción máxima brevemente, luego regresa lentamente tus rodillas a la posición inicial.",
   "Controla el movimiento a lo largo de todo el rango de movimiento."
  ],
  "tips": [
   "Concéntrate en apretar tus glúteos para iniciar el movimiento.",
   "Evita inclinarte hacia atrás o usar el impulso; mantén tu torso estable.",
   "Elige una resistencia de banda que permita un movimiento controlado.",
   "Mantén la tensión en la banda incluso en la posición inicial."
  ]
 },
 "banded-lateral-walk": {
  "n": "Caminata Lateral con Banda",
  "m": "Glúteo medio · Glúteo mayor · Cuádriceps",
  "eq": "Minibanda",
  "img": [
   "img/banded-lateral-walk-start.webp",
   "img/banded-lateral-walk-peak.webp"
  ],
  "pasos": [
   "Coloca una banda circular alrededor de las piernas por encima de las rodillas (o en los tobillos para una versión más difícil).",
   "Ponte en cuarto de sentadilla: pies a la anchura de los hombros, caderas atrás, pecho alto y rodillas alineadas con los pies.",
   "Da un paso lateral con un pie directamente hacia el lado contra la tensión de la banda.",
   "Acerca el pie de atrás hacia el de delante manteniendo la tensión de la banda en todo momento; no dejes que los pies se junten de golpe.",
   "Sigue dando pasos laterales en una dirección durante las repeticiones o la distancia indicada y luego invierte.",
   "Permanece abajo todo el rato; no te incorpores entre paso y paso."
  ],
  "tips": [
   "Mantén las puntas de los pies hacia el frente; no dejes que el pie de delante se abra.",
   "Las caderas se quedan niveladas; no te balancees de lado a lado al caminar.",
   "Si las rodillas se van hacia dentro, la banda es demasiado dura; usa una más suave."
  ]
 },
 "banded-clamshell": {
  "n": "Almeja con Banda",
  "m": "Glúteo medio · Glúteo mayor",
  "img": [
   "img/banded-clamshell-start.webp",
   "img/banded-clamshell-peak.webp"
  ],
  "pasos": [
   "Túmbate de lado con las caderas y rodillas flexionadas a unos 45 grados y los pies juntos uno sobre otro.",
   "Coloca una banda circular alrededor de ambas piernas por encima de las rodillas.",
   "Mantén los pies pegados y la pelvis estable; no rotes hacia atrás durante el movimiento.",
   "Abre la rodilla de arriba contra la banda, como una almeja al abrirse, hasta notar que el glúteo se activa.",
   "Haz una breve pausa arriba y baja de forma controlada hasta la posición inicial.",
   "Completa todas las repeticiones de un lado y luego cambia."
  ],
  "tips": [
   "La pelvis se queda fija; en cuanto rotas hacia atrás, el glúteo deja de trabajar.",
   "Un tempo lento y controlado vale más que una banda dura.",
   "Si te da un calambre en el lateral de la cadera, acorta la serie."
  ],
  "eq": "Minibanda + esterilla"
 },
 "crunches": {
  "n": "Crunches",
  "m": "Abdomen · Oblicuos",
  "eq": "Esterilla",
  "img": [
   "img/crunches-start.webp",
   "img/crunches-peak.webp"
  ],
  "pasos": [
   "Túmbate boca arriba con las rodillas dobladas y las manos detrás de la cabeza.",
   "Enrolla el tronco superior hacia las rodillas levantando los omóplatos del suelo.",
   "Aprieta el abdomen en la posición superior.",
   "Baja con control.",
   "Repite."
  ],
  "tips": [
   "No tires del cuello con las manos al subir.",
   "Exhala al subir y mantén la zona lumbar pegada al suelo.",
   "Piensa en acercar las costillas a la pelvis, no en sentarte."
  ]
 },
 "reverse-crunches": {
  "n": "Crunches Inversos",
  "m": "Abdomen · Flexores de cadera · Oblicuos",
  "eq": "Esterilla",
  "img": [
   "img/reverse-crunches-start.webp",
   "img/reverse-crunches-peak.webp"
  ],
  "pasos": [
   "Túmbate boca arriba con los brazos a los lados.",
   "Eleva las piernas con las rodillas flexionadas a 90 grados.",
   "Despega las caderas del suelo contrayendo el abdomen inferior.",
   "Lleva las rodillas hacia el pecho.",
   "Baja las caderas con control.",
   "Repite el número deseado de repeticiones."
  ],
  "tips": [
   "Despega la cadera con el abdomen, no con impulso de las piernas.",
   "Exhala al subir para activar mejor el abdomen.",
   "Presiona los brazos contra el suelo para mayor estabilidad."
  ]
 },
 "dead-bug": {
  "n": "Dead Bug",
  "m": "Abdomen · Core · Flexores de cadera",
  "eq": "Esterilla",
  "img": [
   "img/dead-bug-start.webp",
   "img/dead-bug-peak.webp"
  ],
  "pasos": [
   "Túmbate boca arriba con los brazos extendidos hacia el techo y las rodillas a 90 grados.",
   "Baja el brazo derecho y la pierna izquierda hacia el suelo manteniendo la zona lumbar presionada contra el suelo.",
   "Regresa a la posición inicial.",
   "Repite del otro lado.",
   "Alterna."
  ],
  "tips": [
   "Presiona la zona lumbar contra el suelo en todo momento.",
   "Muévete despacio."
  ]
 },
 "plank": {
  "n": "Plancha",
  "m": "Abdomen · Core · Lumbares",
  "eq": "Esterilla",
  "img": [
   "img/plank-main.webp"
  ],
  "pasos": [
   "Apoya los antebrazos en el suelo con los codos bajo los hombros.",
   "Extiende las piernas hacia atrás y apóyate sobre los dedos de los pies.",
   "Mantén el cuerpo en línea recta de la cabeza a los talones.",
   "Contrae el core y aprieta los glúteos.",
   "Mantén la posición durante el tiempo deseado.",
   "Baja las rodillas para salir de la posición."
  ],
  "tips": [
   "No dejes que las caderas caigan ni se eleven.",
   "Aprieta los glúteos y los cuádriceps."
  ],
  "tipo": "tiempo"
 },
 "incline-plank-hold": {
  "n": "Plancha Inclinada Isométrica",
  "m": "Abdomen · Core · Hombro frontal · Oblicuos",
  "eq": "Mesa o encimera firme",
  "img": [
   "img/incline-plank-hold-main.webp"
  ],
  "pasos": [
   "Apoya los antebrazos en una mesa o encimera firme, con los codos justo debajo de los hombros.",
   "Lleva los pies hacia atrás hasta que el cuerpo forme una línea recta de la cabeza a los talones.",
   "Aprieta los glúteos y lleva el ombligo hacia la columna para mantener las caderas niveladas.",
   "Mantén el cuello largo y mira un punto de la mesa algo más adelante de tus manos.",
   "Mantén la posición durante el tiempo previsto respirando con regularidad.",
   "Acerca los pies para terminar."
  ],
  "tips": [
   "No dejes que las caderas se hundan hacia la mesa ni que se eleven en pico; el cuerpo debe mantenerse en una sola línea recta.",
   "Presiona los antebrazos contra la mesa y empújalo lejos de ti para mantener los omóplatos separados.",
   "Lleva los pies más atrás para hacerla más difícil, o más cerca para hacerla más fácil; asegúrate de que la mesa no pueda deslizarse."
  ],
  "tipo": "tiempo"
 },
 "side-plank": {
  "n": "Plancha Lateral",
  "m": "Oblicuos · Core · Glúteo medio · Abdomen",
  "eq": "Esterilla",
  "img": [
   "img/side-plank-main.webp"
  ],
  "pasos": [
   "Acuéstate de lado con el antebrazo en el suelo y el codo bajo el hombro.",
   "Levanta las caderas del suelo formando una línea recta de la cabeza a los pies.",
   "Mantén la posición con el core apretado.",
   "Respira con regularidad.",
   "Repite de ambos lados."
  ],
  "tips": [
   "No dejes que la cadera se hunda hacia el suelo.",
   "Alinea hombros y cadera en un mismo plano, sin rotar el torso.",
   "Empuja el suelo con el antebrazo para no colgarte del hombro."
  ],
  "tipo": "tiempo"
 },
 "lying-leg-raise": {
  "n": "Elevación de Piernas Acostado",
  "m": "Flexores de cadera · Abdomen · Oblicuos · Core",
  "eq": "Esterilla",
  "img": [
   "img/lying-leg-raise-start.webp",
   "img/lying-leg-raise-peak.webp"
  ],
  "pasos": [
   "Túmbate boca arriba con las piernas rectas y las manos bajo la zona lumbar o sujetando una superficie estable detrás de la cabeza.",
   "Con las piernas juntas y el core activado, eleva las piernas hasta la vertical.",
   "Pausa brevemente arriba.",
   "Baja las piernas despacio hacia el suelo sin llegar a apoyarlas.",
   "Repite el número de repeticiones deseado."
  ],
  "tips": [
   "Mantén la zona lumbar pegada al suelo durante todo el ejercicio.",
   "Evita el balanceo — controla el descenso para maximizar la tensión.",
   "Dobla ligeramente las rodillas si la flexibilidad de los isquiotibiales lo requiere."
  ]
 },
 "bicycle-crunch": {
  "n": "Crunch de Bicicleta",
  "m": "Oblicuos · Abdomen · Flexores de cadera",
  "img": [
   "img/bicycle-crunch-start.webp",
   "img/bicycle-crunch-peak.webp"
  ],
  "pasos": [
   "Acuéstate boca arriba con las manos detrás de la cabeza y las piernas elevadas.",
   "Acerca una rodilla al pecho mientras rotas el torso para encontrarla con el codo opuesto.",
   "Extiende esa pierna mientras traes la otra rodilla hacia adentro.",
   "Continúa alternando en un movimiento de pedaleo.",
   "Repite."
  ],
  "tips": [
   "No tires del cuello con las manos.",
   "Lleva el hombro hacia la rodilla, no solo el codo.",
   "Mantén la zona lumbar apoyada en el suelo."
  ],
  "eq": "Esterilla"
 },
 "bird-dog": {
  "n": "Bird-Dog",
  "m": "Lumbares · Core · Glúteo mayor",
  "eq": "Esterilla",
  "img": [
   "img/bird-dog-start.webp",
   "img/bird-dog-peak.webp"
  ],
  "pasos": [
   "Comienza a cuatro patas con la columna en posición neutra.",
   "Extiende el brazo derecho hacia adelante y la pierna izquierda hacia atrás simultáneamente.",
   "Aguanta un momento, luego vuelve.",
   "Repite en el otro lado.",
   "Alterna."
  ],
  "tips": [
   "Muévete lentamente y con control.",
   "Mantén las caderas niveladas en todo momento."
  ]
 },
 "walking": {
  "n": "Caminar",
  "m": "Gemelos · Cuádriceps · Glúteo mayor · Isquios",
  "eq": "Calle o pasillo, a paso rápido",
  "img": [
   "img/walking-main.webp"
  ],
  "pasos": [
   "Ponte erguido, con el peso sobre la parte media de los pies y los hombros relajados, sin llevarlos hacia atrás.",
   "Da un paso al frente y apoya primero el talón, luego rueda sobre el pie y empuja con la almohadilla y los dedos.",
   "Mantén al menos un pie en el suelo en todo momento — en cuanto ambos se despegan estás corriendo, no caminando.",
   "Deja que los brazos oscilen con naturalidad desde el hombro, brazo contrario a pierna contraria, con los codos ligeramente flexionados.",
   "Mira al frente en lugar de a los pies y respira con un ritmo constante y sostenible.",
   "Continúa el tiempo o la distancia deseados, eligiendo un ritmo al que todavía podrías mantener una conversación."
  ],
  "tips": [
   "El ritmo lo es todo aquí. Un paseo y una caminata enérgica son estímulos distintos, así que elige uno a propósito en vez de dejarte llevar.",
   "Alarga el empuje por detrás en lugar de estirar más hacia delante: la zancada larga te hace aterrizar con la pierna recta y frena cada paso.",
   "Es el único trabajo de acondicionamiento que puedes hacer a diario sin necesitar recuperarte de él, y por eso merece la pena programarlo en vez de dejarlo al azar."
  ],
  "tipo": "cardio"
 },
 "nordic-hamstring-curl": {
  "n": "Curl Nórdico de Isquiotibiales",
  "m": "Isquios · Gemelos · Glúteo mayor",
  "img": [
   "img/nordic-hamstring-curl-start.webp",
   "img/nordic-hamstring-curl-peak.webp"
  ],
  "pasos": [
   "Pon la esterilla doblada bajo las rodillas y sujeta los talones bajo algo muy pesado que no se pueda mover.",
   "Con el cuerpo recto de rodillas a cabeza, deja caer el cuerpo hacia delante lo más despacio que puedas.",
   "Cuando no puedas frenar más, cae sobre las manos con los codos flexionados.",
   "Empuja con las manos para volver arriba, sin doblar la cadera."
  ],
  "tips": [
   "Si lo que sujeta los talones se mueve, no lo hagas: usa el curl deslizante."
  ],
  "eq": "Algo muy pesado y fijo para los talones + esterilla doble"
 },
 "band-push-up": {
  "n": "Flexiones con banda",
  "m": "Pecho · Tríceps · Hombro frontal",
  "eq": "Tubo o banda larga + esterilla",
  "pasos": [
   "Pasa el tubo o la banda por la parte alta de la espalda y sujeta cada extremo bajo la palma de cada mano.",
   "Colócate en plancha, con las manos algo más anchas que los hombros.",
   "Baja en 2-3 segundos hasta casi tocar el suelo con el pecho.",
   "Empuja hasta estirar los brazos y aguanta un instante arriba."
  ],
  "tips": [
   "Empieza con el tubo: la banda de 30 kg puede ser demasiado dura.",
   "Comprueba que la banda no se pueda salir de debajo de las manos antes de cada serie."
  ],
  "img": [
   "img/push-up-start.webp",
   "img/push-up-peak.webp"
  ],
  "aviso": "La imagen es sin banda: mira el vídeo para ver cómo se coloca."
 },
 "band-chest-press": {
  "n": "Press de pecho de pie con tubo",
  "m": "Pecho · Tríceps · Hombro frontal",
  "eq": "Tubo con asas",
  "pasos": [
   "Pasa el tubo por la espalda, a la altura de las axilas, con un asa en cada mano.",
   "Ponte con un pie adelantado y los codos atrás a la altura del pecho.",
   "Empuja hacia delante hasta estirar los brazos.",
   "Vuelve en 2-3 segundos, notando el estiramiento en el pecho."
  ],
  "tips": [
   "Agarra el tubo más cerca de las asas para que cueste más."
  ],
  "img": [
   "img/cable-chest-press-start.webp",
   "img/cable-chest-press-peak.webp"
  ],
  "aviso": "La imagen es de polea: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "band-incline-press": {
  "n": "Press inclinado de pie con tubo",
  "m": "Pecho superior · Hombro frontal · Tríceps",
  "eq": "Tubo con asas",
  "pasos": [
   "Pisa el centro del tubo con el pie de atrás, en zancada, con un asa en cada mano a la altura de los hombros.",
   "Inclina un poco el cuerpo hacia delante.",
   "Empuja hacia arriba y hacia delante, en diagonal, hasta estirar los brazos.",
   "Baja en 2-3 segundos."
  ],
  "tips": [
   "Pisa con todo el pie y con suela firme.",
   "El ángulo imita un press inclinado; la ventaja para el pecho superior con bandas no está medida."
  ],
  "img": [
   "img/cable-chest-press-start.webp",
   "img/cable-chest-press-peak.webp"
  ],
  "aviso": "La imagen es de polea: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "band-fly": {
  "n": "Aperturas de pie con tubo",
  "m": "Pecho · Hombro frontal",
  "eq": "Tubo con asas",
  "pasos": [
   "Pasa el tubo por la espalda, a la altura de las axilas, con un asa en cada mano.",
   "Abre los brazos con los codos algo flexionados.",
   "Junta las manos delante del pecho, como si abrazaras un árbol.",
   "Vuelve en 2-3 segundos hasta notar el estiramiento."
  ],
  "tips": [
   "No cambies el ángulo de los codos: si los doblas, se convierte en un press."
  ],
  "img": [
   "img/cable-fly-start.webp",
   "img/cable-fly-peak.webp"
  ],
  "aviso": "La imagen es de polea: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "tube-lateral-raise": {
  "n": "Elevación lateral con tubo",
  "m": "Hombro lateral · Trapecio",
  "eq": "Tubo con asas",
  "pasos": [
   "Pisa el centro del tubo con los dos pies, con un asa en cada mano a los lados.",
   "Con los codos algo flexionados, sube los brazos hacia los lados.",
   "Para a la altura de los hombros.",
   "Baja en 2-3 segundos sin soltar la tensión."
  ],
  "tips": [
   "Inclina un poco el cuerpo hacia delante para que el trabajo vaya al hombro lateral."
  ],
  "img": [
   "img/cable-lateral-raise-start.webp",
   "img/cable-lateral-raise-peak.webp"
  ],
  "aviso": "La imagen es de polea: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "one-arm-lateral-raise": {
  "n": "Elevación lateral a un brazo con tubo",
  "m": "Hombro lateral · Trapecio",
  "eq": "Tubo con asas",
  "pasos": [
   "Pisa el tubo con el pie contrario al brazo que trabaja y sujeta un asa.",
   "Sube el brazo hacia el lado, con el codo algo flexionado.",
   "Para a la altura del hombro.",
   "Baja en 2-3 segundos, termina las reps y cambia de lado."
  ],
  "tips": [
   "Agarra el tubo más abajo para que cueste más."
  ],
  "img": [
   "img/cable-lateral-raise-start.webp",
   "img/cable-lateral-raise-peak.webp"
  ],
  "aviso": "La imagen es de polea: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "band-overhead-press": {
  "n": "Press de hombro de pie con tubo",
  "m": "Hombro frontal · Hombro lateral · Tríceps",
  "eq": "Tubo con asas",
  "pasos": [
   "Pisa el centro del tubo con los dos pies, con un asa en cada mano a la altura de los hombros.",
   "Aprieta glúteo y abdomen.",
   "Empuja hacia arriba hasta estirar los brazos.",
   "Baja en 2-3 segundos hasta los hombros."
  ],
  "tips": [
   "Si el tubo se queda corto, pisa solo con un pie en zancada."
  ],
  "img": [
   "img/dumbbell-shoulder-press-start.webp",
   "img/dumbbell-shoulder-press-peak.webp"
  ],
  "aviso": "La imagen es con mancuerna: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "band-reverse-fly": {
  "n": "Pájaros inclinado con banda",
  "m": "Hombro posterior · Espalda media",
  "eq": "Tubo con asas",
  "pasos": [
   "Pisa el centro del tubo e inclina el cuerpo hacia delante, con la espalda neutra.",
   "Con los codos algo flexionados, abre los brazos hacia los lados.",
   "Junta los omóplatos arriba.",
   "Baja en 2-3 segundos."
  ],
  "tips": [
   "Agárralo más largo si cuesta tanto que tiras con la espalda."
  ],
  "img": [
   "img/dumbbell-reverse-fly-start.webp",
   "img/dumbbell-reverse-fly-peak.webp"
  ],
  "aviso": "La imagen es con mancuerna: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "band-seated-row": {
  "n": "Remo sentado con banda en los pies",
  "m": "Dorsal · Espalda media · Bíceps",
  "eq": "Banda larga o tubo + esterilla",
  "pasos": [
   "Siéntate en la esterilla con las piernas casi rectas y pasa la banda por la planta de los dos pies.",
   "Sujeta la banda con las palmas enfrentadas y la espalda recta.",
   "Tira hacia las costillas bajas, con los codos pegados al cuerpo.",
   "Vuelve en 2-3 segundos hasta estirar los brazos."
  ],
  "tips": [
   "Usa calzado o comprueba que la banda no se puede salir de los pies antes de tirar.",
   "Cruza la banda o agárrala más corta para que cueste más."
  ],
  "img": [
   "img/seated-cable-row-start.webp",
   "img/seated-cable-row-peak.webp"
  ],
  "aviso": "La imagen es de polea: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "band-bent-row": {
  "n": "Remo inclinado con banda",
  "m": "Dorsal · Espalda media · Bíceps",
  "eq": "Banda larga o tubo",
  "pasos": [
   "Pisa la banda con los dos pies, separados como las caderas.",
   "Inclina el cuerpo con la espalda neutra y las rodillas algo flexionadas.",
   "Tira hacia las costillas bajas, con los codos pegados al cuerpo.",
   "Baja en 2-3 segundos."
  ],
  "tips": [
   "Pisa con todo el pie y suela firme: la banda no debe poder salirse."
  ],
  "img": [
   "img/bent-over-db-row-start.webp",
   "img/bent-over-db-row-peak.webp"
  ],
  "aviso": "La imagen es con mancuerna: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "tube-one-arm-row": {
  "n": "Remo a un brazo con tubo",
  "m": "Dorsal · Espalda media · Bíceps",
  "eq": "Tubo con asas",
  "pasos": [
   "Da un paso adelante y pisa el tubo con el pie delantero.",
   "Inclina el cuerpo y apoya la mano libre en el muslo.",
   "Tira del asa hacia la cadera, con el codo pegado.",
   "Baja en 2-3 segundos, termina las reps y cambia de lado."
  ],
  "tips": [
   "Agarra el tubo más cerca del pie para que cueste más."
  ],
  "img": [
   "img/single-arm-db-row-start.webp",
   "img/single-arm-db-row-peak.webp"
  ],
  "aviso": "La imagen es con mancuerna: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "band-overhead-pull-apart": {
  "n": "Separación de banda por encima de la cabeza",
  "m": "Dorsal · Espalda media · Hombro posterior",
  "eq": "Tubo con asas",
  "pasos": [
   "De pie o de rodillas, sujeta el tubo con los brazos estirados por encima de la cabeza y las manos separadas.",
   "Separa las manos y baja los codos hacia las costillas, llevando el tubo hacia la parte alta del pecho.",
   "Junta los omóplatos abajo.",
   "Sube en 2-3 segundos."
  ],
  "tips": [
   "Agarra el tubo con la separación que te deje bajar hasta el pecho.",
   "No hay estudios de este ejercicio: se usa porque no necesita atar la banda a nada."
  ],
  "img": [
   "img/lat-pulldown-start.webp",
   "img/lat-pulldown-peak.webp"
  ],
  "aviso": "La imagen es de polea: el movimiento es el mismo, con la banda. Mira el vídeo."
 },
 "sliding-leg-curl": {
  "n": "Curl deslizante con toalla",
  "m": "Isquios · Glúteo mayor",
  "eq": "Toalla o calcetines + suelo liso",
  "pasos": [
   "Túmbate boca arriba con los talones sobre una toalla, en suelo liso.",
   "Sube la cadera como en un puente de glúteo.",
   "Desliza los talones hacia delante en 3 segundos, sin bajar la cadera.",
   "Tira de los talones hacia ti para volver. Si cuesta, ayúdate con dos piernas solo a la vuelta."
  ],
  "tips": [
   "Sobre esterilla no desliza: hazlo sobre baldosa o parqué."
  ],
  "img": [
   "img/ball-leg-curl-start.webp",
   "img/ball-leg-curl-peak.webp"
  ],
  "aviso": "La imagen es con pelota: el movimiento es el mismo, con los talones sobre la toalla. Mira el vídeo."
 },
 "shadow-boxing": {
  "n": "Boxeo sin saltos",
  "m": "Cardio · Hombros · Core",
  "eq": "Peso corporal",
  "tipo": "cardio",
  "pasos": [
   "Ponte de pie con un pie adelantado y las manos a la altura de la cara.",
   "Lanza golpes rectos al aire, girando la cadera.",
   "Da pasos cortos, sin saltar.",
   "En los tramos fuertes, ve más rápido; en los suaves, marcha en el sitio."
  ],
  "tips": [
   "No estires del todo los codos."
  ],
  "img": [
   "img/walking-main.webp"
  ],
  "aviso": "Imagen orientativa: mira el vídeo para ver el movimiento."
 },
 "march-in-place": {
  "n": "Marcha en casa",
  "m": "Cardio · Piernas",
  "eq": "Peso corporal",
  "tipo": "cardio",
  "pasos": [
   "Marcha en el sitio o por el pasillo, levantando bien las rodillas.",
   "Mueve los brazos con fuerza.",
   "Apoya primero el talón o toda la planta, sin impacto."
  ],
  "tips": [
   "Sirve de sustituto de caminar si llueve o es de noche."
  ],
  "img": [
   "img/walking-main.webp"
  ]
 },
 "stair-climbing": {
  "n": "Subir escaleras",
  "m": "Cardio · Glúteo · Cuádriceps",
  "eq": "Escalera con barandilla",
  "tipo": "cardio",
  "pasos": [
   "Sube a ritmo constante, apoyando todo el pie.",
   "Baja despacio, agarrado a la barandilla.",
   "Si te duele la rodilla, baja en ascensor o cambia a caminar."
  ],
  "tips": [
   "Bajar carga la rodilla más que subir o caminar."
  ],
  "img": [
   "img/step-ups-start.webp",
   "img/step-ups-peak.webp"
  ],
  "aviso": "La imagen es de un peldaño: el movimiento es el mismo."
 },
 "miniband-lateral-raise": {
  "n": "Elevación lateral con minibanda",
  "m": "Hombro lateral · Trapecio",
  "eq": "Minibanda",
  "pasos": [
   "Pasa una minibanda suave por las dos muñecas, con los brazos a los lados.",
   "Abre los brazos hacia los lados, con los codos algo flexionados.",
   "Sube todo lo que puedas sin encoger los hombros.",
   "Baja en 2-3 segundos sin soltar la tensión."
  ],
  "tips": [
   "El recorrido es más corto que con el tubo: sirve de opción más suave."
  ],
  "img": [
   "img/lateral-raise-start.webp",
   "img/lateral-raise-peak.webp"
  ],
  "aviso": "La imagen es con mancuerna: el movimiento es el mismo, con la banda. Mira el vídeo."
 }
};
