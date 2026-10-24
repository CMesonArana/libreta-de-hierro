// Rutinas. Cada ejercicio: id (en EX), series, reps, descanso (s), alts (hasta 3), grupo (superserie/circuito), nota.
// Superseries: el primero lleva 20 s de descanso (lo que tardas en cambiar de máquina) y el segundo el descanso del par.
// Base: ver informe sota (2026-10-24) en README.md.

const ESTETICA_REGLAS = [
  "<b>Esfuerzo:</b> acaba cada serie dejando 1-2 repeticiones en reserva (0-3 vale). Llegar al fallo no da más músculo y cansa más.",
  "<b>Progresión doble:</b> trabaja dentro del rango (p. ej. 8-12). Cuando llegues al número alto en todas las series, sube el peso y vuelve al número bajo. La app te avisa con «¡Sube!».",
  "<b>Superseries:</b> haz el ejercicio A, cambia al B en unos 20 s y descansa después del B. Es el mismo músculo en menos tiempo: por eso cabe todo en una hora.",
  "<b>Prioridades:</b> pecho, glúteo, hombro lateral y abdomen reciben 10-16 series por semana; el resto, lo justo para que el cuerpo quede equilibrado.",
  "<b>Técnica:</b> baja en unos 2 segundos y busca el estiramiento completo; sube controlado.",
  "<b>Si te estancas</b> dos sesiones seguidas o vas muy cansado: una semana con la mitad de series y el mismo peso.",
  "<b>Fuera del gym:</b> ~1,6 g de proteína por kg al día (unos 120 g) y dormir 7-9 h hacen tanto como la rutina."
];

const PERDIDA_REGLAS = [
  "<b>Antes de empezar:</b> si tienes la tensión o el azúcar altos, alguna enfermedad del corazón o hace años que no te haces un chequeo, pásalo antes de hacer los intervalos fuertes.",
  "<b>Lo que más baja la grasa es la dieta</b> (un déficit moderado y sostenible). Las pesas sirven para no perder músculo mientras adelgazas; el cardio suma gasto.",
  "<b>Orden:</b> primero pesas, luego cardio. Así llegas fresco a las pesas, que es lo que protege el músculo.",
  "<b>Semanas 1-3 (por prudencia):</b> pesos cómodos, dejando 3 repeticiones en reserva, y cardio solo continuo. Desde la semana 4: deja 1-2 en reserva y empieza los intervalos.",
  "<b>Progresión doble:</b> cuando llegues al número alto de repeticiones en todas las series, sube un poco el peso. Comiendo menos, progresar despacio es lo normal: +1 repetición o el salto de peso más pequeño ya es ganar. No añadas series.",
  "<b>Intensidad del cardio:</b> «moderado» = puedes hablar con frases completas (5-6 de 10). «Fuerte» = solo frases cortas (8 de 10).",
  "<b>Por prudencia, nada de correr ni saltar</b> las primeras 12 semanas: bici, cinta inclinada y elíptica cuidan rodillas y tobillos.",
  "<b>Fuera del gym:</b> 7.500-8.500 pasos al día, proteína en cada comida y dormir bien. Si notas dolor en el pecho, mareo o falta de aire anormal, para y consulta a un médico."
];

const CAL_SUP = "5 min de bici o elíptica suave. Después, 1-2 series ligeras del primer ejercicio (unas 10 reps con la mitad del peso).";
const CAL_INF = "5 min de bici suave. Después, 1-2 series ligeras del primer ejercicio y 10 puentes de glúteo en el suelo.";

const PROGRAMAS = {
  estetica: {
    titulo: "Carlos",
    quien: "32 años · 75 kg",
    objetivo: "Estética: pecho, glúteo, hombros y abdomen",
    defecto: "3",
    reglas: ESTETICA_REGLAS,
    planes: {
      "3": { dias: [
        { nombre: "Pecho y glúteo", foco: "Pecho superior, glúteo, espalda", minutos: 55, calentamiento: CAL_SUP, ejercicios: [
          { id: "smith-machine-incline-bench-press", series: 4, reps: "6-10", descanso: 20, grupo: "Superserie 1 · A", alts: ["incline-db-press", "incline-bench-press", "chest-press-machine"], nota: "Banco a 30-45°. Baja la barra a la parte alta del pecho." },
          { id: "lat-pulldown", series: 3, reps: "8-12", descanso: 90, grupo: "Superserie 1 · B", alts: ["one-arm-lat-pulldown", "assisted-pull-ups", "v-bar-lat-pulldown"] },
          { id: "plate-loaded-glute-drive", series: 4, reps: "8-12", descanso: 120, alts: ["smith-machine-hip-thrust", "hip-thrust", "dumbbell-hip-thrust"], nota: "Pausa de 1 s arriba apretando glúteo." },
          { id: "cable-lateral-raise", series: 3, reps: "12-20", descanso: 20, grupo: "Superserie 2 · A", alts: ["lateral-raise", "plate-loaded-lateral-raise", "seated-dumbbell-lateral-raise"] },
          { id: "pec-deck", series: 3, reps: "10-15", descanso: 60, grupo: "Superserie 2 · B", alts: ["machine-chest-fly", "cable-fly", "db-fly"] },
          { id: "hip-abduction", series: 3, reps: "15-20", descanso: 20, grupo: "Superserie 3 · A", alts: ["banded-seated-hip-abduction", "side-lying-hip-abduction", "cable-kickback"], nota: "Inclínate un poco hacia delante para cargar más el glúteo." },
          { id: "cable-crunch", series: 3, reps: "10-15", descanso: 60, grupo: "Superserie 3 · B", alts: ["machine-seated-crunch", "decline-crunch", "crunches"] }
        ]},
        { nombre: "Hombro y pierna", foco: "Hombros, piernas, espalda", minutos: 55, calentamiento: CAL_INF, ejercicios: [
          { id: "machine-shoulder-press", series: 3, reps: "8-12", descanso: 20, grupo: "Superserie 1 · A", alts: ["seated-db-press", "smith-machine-shoulder-press", "landmine-press"] },
          { id: "chest-supported-machine-row", series: 3, reps: "8-12", descanso: 90, grupo: "Superserie 1 · B", alts: ["seated-cable-row", "chest-supported-db-row", "single-arm-db-row"] },
          { id: "leg-press", series: 3, reps: "10-15", descanso: 120, alts: ["hack-squat", "smith-machine-squat", "goblet-squat"], nota: "Pies altos y anchos en la plataforma y baja hondo: más glúteo." },
          { id: "lateral-raise", series: 4, reps: "12-20", descanso: 20, grupo: "Superserie 2 · A", alts: ["cable-lateral-raise", "plate-loaded-lateral-raise", "side-lying-lateral-raise"] },
          { id: "seated-leg-curl", series: 3, reps: "10-15", descanso: 60, grupo: "Superserie 2 · B", alts: ["leg-curl", "dumbbell-romanian-deadlift", "back-extension"] },
          { id: "face-pull", series: 3, reps: "12-15", descanso: 20, grupo: "Superserie 3 · A", alts: ["machine-reverse-fly", "cable-reverse-fly", "dumbbell-reverse-fly"], nota: "Hombro posterior: da forma redonda al hombro visto de lado." },
          { id: "captains-chair-leg-raise", series: 3, reps: "10-15", descanso: 60, grupo: "Superserie 3 · B", alts: ["hanging-leg-raise", "reverse-crunches", "lying-leg-raise"] }
        ]},
        { nombre: "Pecho, glúteo y abdomen", foco: "Pecho, glúteo, abdomen", minutos: 58, calentamiento: CAL_SUP, ejercicios: [
          { id: "chest-press-machine", series: 4, reps: "8-12", descanso: 20, grupo: "Superserie 1 · A", alts: ["db-bench-press", "smith-machine-bench-press", "bench-press"] },
          { id: "seated-cable-row", series: 3, reps: "10-12", descanso: 90, grupo: "Superserie 1 · B", alts: ["chest-supported-machine-row", "wide-grip-seated-cable-row", "t-bar-row"] },
          { id: "dumbbell-romanian-deadlift", series: 3, reps: "8-12", descanso: 120, alts: ["romanian-deadlift", "back-extension", "cable-pull-through"], nota: "Cadera atrás, espalda neutra; baja hasta notar tensión en los isquios." },
          { id: "bulgarian-split-squat", series: 3, reps: "8-12", descanso: 60, alts: ["smith-machine-bulgarian-split", "reverse-lunge", "step-ups"], nota: "Reps por pierna. Torso algo inclinado hacia delante = más glúteo." },
          { id: "cable-fly", series: 3, reps: "12-15", descanso: 20, grupo: "Superserie 2 · A", alts: ["pec-deck", "machine-chest-fly", "incline-dumbbell-fly"] },
          { id: "plate-loaded-lateral-raise", series: 3, reps: "12-20", descanso: 60, grupo: "Superserie 2 · B", alts: ["cable-lateral-raise", "lateral-raise", "seated-dumbbell-lateral-raise"] },
          { id: "machine-seated-crunch", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 3 · A", alts: ["cable-crunch", "decline-crunch", "ab-wheel-rollout"] },
          { id: "cable-pallof-press", series: 3, reps: "10-12", descanso: 45, grupo: "Superserie 3 · B", alts: ["side-plank", "dumbbell-side-bend", "dead-bug"], nota: "Reps por lado. Oblicuos: que el cable no te gire." }
        ]}
      ]},
      "2": { dias: [
        { nombre: "Pecho y glúteo", foco: "Pecho superior, glúteo, espalda", minutos: 57, calentamiento: CAL_SUP, ejercicios: [
          { id: "smith-machine-incline-bench-press", series: 4, reps: "6-10", descanso: 20, grupo: "Superserie 1 · A", alts: ["incline-db-press", "incline-bench-press", "chest-press-machine"], nota: "Banco a 30-45°. Baja la barra a la parte alta del pecho." },
          { id: "lat-pulldown", series: 3, reps: "8-12", descanso: 90, grupo: "Superserie 1 · B", alts: ["one-arm-lat-pulldown", "assisted-pull-ups", "v-bar-lat-pulldown"] },
          { id: "plate-loaded-glute-drive", series: 4, reps: "8-12", descanso: 120, alts: ["smith-machine-hip-thrust", "hip-thrust", "dumbbell-hip-thrust"], nota: "Pausa de 1 s arriba apretando glúteo." },
          { id: "cable-lateral-raise", series: 4, reps: "12-20", descanso: 20, grupo: "Superserie 2 · A", alts: ["lateral-raise", "plate-loaded-lateral-raise", "seated-dumbbell-lateral-raise"] },
          { id: "pec-deck", series: 3, reps: "10-15", descanso: 60, grupo: "Superserie 2 · B", alts: ["machine-chest-fly", "cable-fly", "db-fly"] },
          { id: "hip-abduction", series: 3, reps: "15-20", descanso: 20, grupo: "Superserie 3 · A", alts: ["banded-seated-hip-abduction", "side-lying-hip-abduction", "cable-kickback"] },
          { id: "cable-crunch", series: 3, reps: "10-15", descanso: 60, grupo: "Superserie 3 · B", alts: ["machine-seated-crunch", "decline-crunch", "crunches"] }
        ]},
        { nombre: "Pecho, hombro y pierna", foco: "Pecho, hombros, piernas", minutos: 58, calentamiento: CAL_INF, ejercicios: [
          { id: "chest-press-machine", series: 4, reps: "8-12", descanso: 20, grupo: "Superserie 1 · A", alts: ["db-bench-press", "smith-machine-bench-press", "bench-press"] },
          { id: "chest-supported-machine-row", series: 3, reps: "8-12", descanso: 90, grupo: "Superserie 1 · B", alts: ["seated-cable-row", "chest-supported-db-row", "single-arm-db-row"] },
          { id: "leg-press", series: 3, reps: "10-15", descanso: 120, alts: ["hack-squat", "smith-machine-squat", "goblet-squat"], nota: "Pies altos y anchos en la plataforma y baja hondo: más glúteo." },
          { id: "machine-shoulder-press", series: 3, reps: "8-12", descanso: 20, grupo: "Superserie 2 · A", alts: ["seated-db-press", "smith-machine-shoulder-press", "landmine-press"] },
          { id: "seated-leg-curl", series: 3, reps: "10-15", descanso: 75, grupo: "Superserie 2 · B", alts: ["leg-curl", "dumbbell-romanian-deadlift", "back-extension"] },
          { id: "lateral-raise", series: 4, reps: "12-20", descanso: 20, grupo: "Superserie 3 · A", alts: ["cable-lateral-raise", "plate-loaded-lateral-raise", "side-lying-lateral-raise"] },
          { id: "captains-chair-leg-raise", series: 3, reps: "10-15", descanso: 60, grupo: "Superserie 3 · B", alts: ["hanging-leg-raise", "reverse-crunches", "lying-leg-raise"] }
        ]}
      ]}
    }
  },

  perdida: {
    titulo: "Kevin",
    quien: "32 años · 105 kg",
    objetivo: "Pérdida de grasa sin perder músculo",
    defecto: "3",
    reglas: PERDIDA_REGLAS,
    planes: {
      "3": { dias: [
        { nombre: "Fuerza + intervalos", foco: "Cuerpo entero + cardio fuerte", minutos: 58, calentamiento: CAL_INF, ejercicios: [
          { id: "leg-press", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["horizontal-leg-press", "hack-squat", "goblet-squat"] },
          { id: "lat-pulldown", series: 3, reps: "10-12", descanso: 90, grupo: "Superserie 1 · B", alts: ["assisted-pull-ups", "one-arm-lat-pulldown", "v-bar-lat-pulldown"] },
          { id: "chest-press-machine", series: 3, reps: "10-12", descanso: 20, grupo: "Superserie 2 · A", alts: ["db-bench-press", "smith-machine-bench-press", "incline-push-ups"] },
          { id: "seated-leg-curl", series: 3, reps: "10-15", descanso: 75, grupo: "Superserie 2 · B", alts: ["leg-curl", "dumbbell-romanian-deadlift", "back-extension"] },
          { id: "machine-shoulder-press", series: 2, reps: "10-12", descanso: 20, grupo: "Superserie 3 · A", alts: ["seated-db-press", "smith-machine-shoulder-press", "landmine-press"] },
          { id: "cable-crunch", series: 2, reps: "12-15", descanso: 60, grupo: "Superserie 3 · B", alts: ["machine-seated-crunch", "dead-bug", "crunches"] },
          { id: "stationary-bike", tipo: "cardio", minutos: 15, zona: "8/10", int: { trabajo: 60, descanso: 90, rondas: 6 }, alts: ["air-bike", "rowing-machine", "elliptical-trainer"],
            consejo: "Intervalos: 1 min fuerte (solo frases cortas) + 1:30 suave. Semanas 1-3: haz 15 min continuos a ritmo moderado. Al empezar con intervalos, 4 × 30 s fuerte." }
        ]},
        { nombre: "Fuerza + cardio suave", foco: "Cuerpo entero + caminar en cuesta", minutos: 58, calentamiento: CAL_INF, ejercicios: [
          { id: "plate-loaded-glute-drive", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["smith-machine-hip-thrust", "dumbbell-hip-thrust", "glute-bridge"] },
          { id: "seated-cable-row", series: 3, reps: "10-12", descanso: 90, grupo: "Superserie 1 · B", alts: ["chest-supported-machine-row", "chest-supported-db-row", "single-arm-db-row"] },
          { id: "goblet-squat", series: 3, reps: "10-12", descanso: 20, grupo: "Superserie 2 · A", alts: ["leg-press", "smith-machine-squat", "step-ups"], nota: "Si cuesta bajar, siéntate en un banco y levántate (sentadilla al banco)." },
          { id: "incline-db-press", series: 3, reps: "10-12", descanso: 90, grupo: "Superserie 2 · B", alts: ["chest-press-machine", "smith-machine-incline-bench-press", "incline-push-ups"] },
          { id: "leg-extension", series: 2, reps: "12-15", descanso: 20, grupo: "Superserie 3 · A", alts: ["reverse-lunge", "step-ups", "leg-press"] },
          { id: "plank", tipo: "tiempo", series: 2, segundos: 30, descanso: 45, grupo: "Superserie 3 · B", alts: ["dead-bug", "side-plank", "cable-pallof-press"], nota: "Pulsa ▶ y aguanta: el temporizador cuenta los segundos y luego el descanso." },
          { id: "incline-treadmill-walk", tipo: "cardio", minutos: 18, zona: "5-6/10", alts: ["elliptical-trainer", "stationary-bike", "stair-climber"],
            consejo: "Ritmo moderado: puedes hablar con frases completas. Inclinación 4-8 % y velocidad de paseo rápido; sin agarrarte a la barra." }
        ]},
        { nombre: "Circuito + cardio largo", foco: "Circuito de máquinas + elíptica", minutos: 58, calentamiento: CAL_SUP, ejercicios: [
          { id: "dumbbell-romanian-deadlift", series: 3, reps: "10-12", descanso: 15, grupo: "Circuito · 1", alts: ["back-extension", "cable-pull-through", "seated-leg-curl"], nota: "Circuito: haz 1 serie de cada ejercicio seguido (15 s entre ellos) y descansa 90 s al terminar la vuelta. 3 vueltas." },
          { id: "chest-supported-machine-row", series: 3, reps: "10-12", descanso: 15, grupo: "Circuito · 2", alts: ["seated-cable-row", "lat-pulldown", "chest-supported-db-row"] },
          { id: "seated-db-press", series: 3, reps: "10-12", descanso: 15, grupo: "Circuito · 3", alts: ["machine-shoulder-press", "landmine-press", "smith-machine-shoulder-press"] },
          { id: "hip-abduction", series: 3, reps: "15-20", descanso: 15, grupo: "Circuito · 4", alts: ["banded-seated-hip-abduction", "side-lying-hip-abduction", "cable-kickback"] },
          { id: "cable-pallof-press", series: 3, reps: "10-12", descanso: 90, grupo: "Circuito · 5", alts: ["side-plank", "dead-bug", "plank"], nota: "Reps por lado. Al acabar, 90 s de descanso y otra vuelta." },
          { id: "elliptical-trainer", tipo: "cardio", minutos: 22, zona: "5-6/10", alts: ["stationary-bike", "incline-treadmill-walk", "rowing-machine"],
            consejo: "Continuo y moderado: frases completas. Si te sobra energía, sube la resistencia, no la velocidad." }
        ]}
      ]},
      "2": { dias: [
        { nombre: "Fuerza + intervalos", foco: "Cuerpo entero + cardio fuerte", minutos: 58, calentamiento: CAL_INF, ejercicios: [
          { id: "leg-press", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["horizontal-leg-press", "hack-squat", "goblet-squat"] },
          { id: "lat-pulldown", series: 3, reps: "10-12", descanso: 90, grupo: "Superserie 1 · B", alts: ["assisted-pull-ups", "one-arm-lat-pulldown", "v-bar-lat-pulldown"] },
          { id: "chest-press-machine", series: 3, reps: "10-12", descanso: 20, grupo: "Superserie 2 · A", alts: ["db-bench-press", "smith-machine-bench-press", "incline-push-ups"] },
          { id: "seated-leg-curl", series: 3, reps: "10-15", descanso: 75, grupo: "Superserie 2 · B", alts: ["leg-curl", "dumbbell-romanian-deadlift", "back-extension"] },
          { id: "machine-shoulder-press", series: 2, reps: "10-12", descanso: 20, grupo: "Superserie 3 · A", alts: ["seated-db-press", "smith-machine-shoulder-press", "landmine-press"] },
          { id: "cable-crunch", series: 2, reps: "12-15", descanso: 60, grupo: "Superserie 3 · B", alts: ["machine-seated-crunch", "dead-bug", "crunches"] },
          { id: "stationary-bike", tipo: "cardio", minutos: 15, zona: "8/10", int: { trabajo: 60, descanso: 90, rondas: 6 }, alts: ["air-bike", "rowing-machine", "elliptical-trainer"],
            consejo: "Intervalos: 1 min fuerte (solo frases cortas) + 1:30 suave. Semanas 1-3: haz 15 min continuos a ritmo moderado. Al empezar con intervalos, 4 × 30 s fuerte." }
        ]},
        { nombre: "Fuerza + cardio suave", foco: "Cuerpo entero + caminar en cuesta", minutos: 58, calentamiento: CAL_INF, ejercicios: [
          { id: "plate-loaded-glute-drive", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["smith-machine-hip-thrust", "dumbbell-hip-thrust", "glute-bridge"] },
          { id: "seated-cable-row", series: 3, reps: "10-12", descanso: 90, grupo: "Superserie 1 · B", alts: ["chest-supported-machine-row", "chest-supported-db-row", "single-arm-db-row"] },
          { id: "goblet-squat", series: 3, reps: "10-12", descanso: 20, grupo: "Superserie 2 · A", alts: ["leg-press", "smith-machine-squat", "step-ups"], nota: "Si cuesta bajar, siéntate en un banco y levántate (sentadilla al banco)." },
          { id: "incline-db-press", series: 3, reps: "10-12", descanso: 90, grupo: "Superserie 2 · B", alts: ["chest-press-machine", "smith-machine-incline-bench-press", "incline-push-ups"] },
          { id: "seated-db-press", series: 2, reps: "10-12", descanso: 20, grupo: "Superserie 3 · A", alts: ["machine-shoulder-press", "landmine-press", "smith-machine-shoulder-press"] },
          { id: "plank", tipo: "tiempo", series: 2, segundos: 30, descanso: 45, grupo: "Superserie 3 · B", alts: ["dead-bug", "side-plank", "cable-pallof-press"], nota: "Pulsa ▶ y aguanta: el temporizador cuenta los segundos y luego el descanso." },
          { id: "incline-treadmill-walk", tipo: "cardio", minutos: 18, zona: "5-6/10", alts: ["elliptical-trainer", "stationary-bike", "stair-climber"],
            consejo: "Ritmo moderado: puedes hablar con frases completas. Inclinación 4-8 % y velocidad de paseo rápido; sin agarrarte a la barra." }
        ]}
      ]}
    }
  }
};
