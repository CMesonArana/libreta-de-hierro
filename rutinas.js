// Rutinas en casa. Cada ejercicio: id (en EX), series, reps, descanso (s), alts (2), grupo (superserie/circuito), nota.
// Solo con esterilla, banda larga, tubo con asas, minibandas, peso corporal y muebles firmes como apoyo.
// Superseries: el primero lleva 20 s de descanso (lo que tardas en cambiar) y el segundo el descanso del par.
// Base: ver INFORME.md (2026-10-31).

const SEGURIDAD_BANDAS = "<b>Seguridad con las bandas:</b> revísalas antes y después de cada uso y tira cualquiera con un corte o grieta. Pisa con firmeza y sin nada debajo de la suela, quítate los anillos, no la sueltes con tensión y no la estires a más de 3 veces su largo. Si puedes, entrena con gafas: las lesiones de ojo publicadas son de bandas que se escapan del punto de apoyo, también de debajo de los pies. Ninguna rutina ata bandas a puertas ni muebles.";
const NIVEL_BANDAS = "<b>Columna «Nivel»:</b> apunta qué banda usas (1 = la más suave de tus minibandas; en las largas, 1 = tubo, 2 = banda de 30 kg) o qué variante. Si es solo peso corporal, déjala vacía. Dos bandas no suman kilos fijos, así que compara por banda y repeticiones.";

const ESTETICA_REGLAS = [
  "<b>Esfuerzo:</b> acaba cada serie dejando 0-3 repeticiones en reserva. Sin pesas, lo que hace crecer el músculo es llegar cerca del fallo: las series cómodas apenas sirven. No hace falta llegar al fallo total.",
  "<b>Cómo progresar sin pesas:</b> cuando llegues al número alto en todas las series, sube en este orden: banda más dura, agarrarla más corta o dos juntas → bajar en 3-4 segundos con pausa abajo → variante más difícil (a una pierna, pies en alto). La app te avisa con «¡Sube!».",
  "<b>Superseries:</b> haz el ejercicio A, cambia al B en unos 20 s y descansa después del B. Es el mismo trabajo en menos tiempo.",
  "<b>Prioridades:</b> pecho, glúteo, hombro lateral y abdomen reciben 10-16 series por semana; el resto, lo justo para que el cuerpo quede equilibrado.",
  "<b>Técnica:</b> baja en unos 2-3 segundos, busca el estiramiento completo y aguanta el final del recorrido, que es donde la banda tira más.",
  NIVEL_BANDAS,
  SEGURIDAD_BANDAS,
  "<b>Si te estancas</b> dos sesiones seguidas o vas muy cansado: una semana con la mitad de series.",
  "<b>Fuera del entreno:</b> ~1,6 g de proteína por kg al día (unos 120 g) y dormir 7-9 h hacen tanto como la rutina."
];

const PERDIDA_REGLAS = [
  "<b>Antes de empezar:</b> si tienes la tensión o el azúcar altos, alguna enfermedad del corazón o hace años que no te haces un chequeo, pásalo antes de hacer los intervalos fuertes.",
  "<b>Lo que más baja la grasa es la dieta</b> (un déficit moderado y sostenible). La fuerza sirve para no perder músculo mientras adelgazas; el cardio suma gasto.",
  "<b>Orden:</b> primero fuerza, luego cardio. Así llegas fresco a la fuerza, que es lo que protege el músculo.",
  "<b>Semanas 1-3 (por prudencia):</b> variantes cómodas, dejando 3 repeticiones en reserva, y cardio solo continuo. Desde la semana 4: deja 1-2 en reserva y empieza los intervalos.",
  "<b>Cómo progresar:</b> cuando llegues al número alto en todas las series, pasa a una banda más dura o a una variante algo más difícil (en las flexiones, un apoyo más bajo). Comiendo menos, progresar despacio es lo normal: +1 repetición ya es ganar. No añadas series.",
  "<b>Intensidad del cardio:</b> «moderado» = puedes hablar con frases completas (5-6 de 10). «Fuerte» = solo frases cortas (8 de 10).",
  "<b>Por prudencia, nada de correr ni saltar</b> las primeras 12 semanas. En escaleras, baja despacio: bajar carga la rodilla más que subir.",
  NIVEL_BANDAS,
  SEGURIDAD_BANDAS,
  "<b>Apoyos:</b> la mesa, la silla o el sofá tienen que aguantar tu peso sin moverse. Pruébalos antes y apóyalos contra la pared.",
  "<b>Fuera del entreno:</b> 7.500-8.500 pasos al día, proteína en cada comida y dormir bien. Si notas dolor en el pecho, mareo o falta de aire anormal, para y consulta a un médico."
];

const CAL_SUP = "5 min de marcha en el sitio moviendo los brazos. Después, 1-2 series fáciles del primer ejercicio, unas 10 reps con la variante más sencilla.";
const CAL_INF = "5 min de marcha en el sitio. Después, 10 puentes de glúteo en la esterilla y 1-2 series fáciles del primer ejercicio.";

const NOTA_REMO = "Tira hacia las costillas bajas con los codos pegados al cuerpo.";
const NOTA_TIEMPO = "Pulsa ▶ y aguanta: el temporizador cuenta los segundos y luego el descanso.";
const NOTA_ISQUIOS = "En baldosa o parqué, no sobre la esterilla. Baja la cadera solo al final. El curl nórdico tiene más evidencia, pero necesita sujetar los talones bajo algo muy pesado que no se mueva.";
const CONSEJO_INT = "Intervalos: 1 min fuerte (solo frases cortas) + 1:30 suave. Sin saltos. Semanas 1-3: haz 15 min continuos a ritmo moderado. Al empezar con intervalos, 4 × 30 s fuerte.";

// Carlos
const C_PUSH_A = { id: "decline-push-up", series: 4, reps: "6-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["band-push-up", "push-up"], nota: "Es la opción más parecida a un press inclinado. Si pasas de 15, añade la banda." };
const C_ROW_A = { id: "band-seated-row", series: 3, reps: "10-15", descanso: 90, grupo: "Superserie 1 · B", alts: ["band-bent-row", "tube-one-arm-row"], nota: NOTA_REMO };
const C_THRUST = { id: "single-leg-hip-thrust", series: 4, reps: "8-15", descanso: 75, alts: ["banded-hip-thrust", "banded-glute-bridge"], nota: "Reps por pierna. Pausa de 1 s arriba apretando glúteo." };
const C_FLY = { id: "band-fly", series: 3, reps: "12-20", descanso: 60, grupo: "Superserie 2 · B", alts: ["band-chest-press", "wide-grip-push-ups"] };
const C_ABD = { id: "banded-seated-hip-abduction", series: 3, reps: "15-20", descanso: 20, grupo: "Superserie 3 · A", alts: ["banded-lateral-walk", "banded-clamshell"], nota: "Inclínate un poco hacia delante para cargar más el glúteo." };
const C_CRUNCH = { id: "crunches", series: 3, reps: "12-20", descanso: 60, grupo: "Superserie 3 · B", alts: ["bicycle-crunch", "dead-bug"], nota: "Si te sobran reps, baja en 4 segundos con los brazos por encima de la cabeza." };
const C_BULG = { id: "bulgarian-split-squat", series: 3, reps: "8-15", descanso: 90, alts: ["split-squat", "bodyweight-reverse-lunge"], nota: "Reps por pierna. Torso algo inclinado hacia delante = más glúteo. Baja en 3 segundos." };
const C_RCRUNCH = { id: "reverse-crunches", series: 3, reps: "10-15", descanso: 60, grupo: "Superserie 3 · B", alts: ["lying-leg-raise", "dead-bug"] };
const lateral = (series, grupo) => ({ id: "tube-lateral-raise", series, reps: "12-20", descanso: 20, grupo, alts: ["miniband-lateral-raise", "one-arm-lateral-raise"], nota: "Pisa el tubo con los dos pies. Si cuesta poco, baja en 3 segundos o hazlo a un brazo." });

// Kevin
const K_SQUAT = { id: "box-squat", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["bodyweight-squat", "banded-squat"], nota: "Con una silla firme contra la pared. Tócala sin dejarte caer." };
const K_ROW = { id: "band-seated-row", series: 3, reps: "10-15", descanso: 90, grupo: "Superserie 1 · B", alts: ["band-bent-row", "tube-one-arm-row"], nota: NOTA_REMO };
const K_PUSH = { id: "incline-push-ups", series: 3, reps: "8-15", descanso: 20, grupo: "Superserie 2 · A", alts: ["knee-push-ups", "band-chest-press"], nota: "Empieza con las manos en la mesa o la encimera. Cuando pases de 15, usa un apoyo más bajo." };
const K_BRIDGE = { id: "banded-glute-bridge", series: 3, reps: "12-20", descanso: 75, grupo: "Superserie 2 · B", alts: ["glute-bridge", "banded-romanian-deadlift"] };
const K_PRESS = { id: "band-overhead-press", series: 2, reps: "10-15", descanso: 20, grupo: "Superserie 3 · A", alts: ["tube-lateral-raise", "band-pull-apart"] };
const K_THRUST = { id: "banded-hip-thrust", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["banded-glute-bridge", "glute-bridge"], nota: "Con la espalda en el sofá, si está contra la pared. Si no, hazlo en la esterilla." };
const K_BROW = { id: "band-bent-row", series: 3, reps: "10-15", descanso: 90, grupo: "Superserie 1 · B", alts: ["band-seated-row", "tube-one-arm-row"], nota: NOTA_REMO };
const K_STEP = { id: "step-ups", series: 3, reps: "8-12", descanso: 20, grupo: "Superserie 2 · A", alts: ["box-squat", "split-squat"], nota: "Reps por pierna. En un peldaño bajo, agarrado a la barandilla o la pared. Baja despacio." };
const K_CHEST = { id: "band-chest-press", series: 3, reps: "10-15", descanso: 90, grupo: "Superserie 2 · B", alts: ["incline-push-ups", "band-fly"] };
const K_PLANK = { id: "incline-plank-hold", tipo: "tiempo", series: 2, segundos: 30, descanso: 45, grupo: "Superserie 3 · B", alts: ["plank", "side-plank"], nota: NOTA_TIEMPO };
const K_BOX = { id: "shadow-boxing", tipo: "cardio", minutos: 15, zona: "8/10", int: { trabajo: 60, descanso: 90, rondas: 6 }, alts: ["march-in-place", "walking"], consejo: CONSEJO_INT };
const K_WALK = { id: "walking", tipo: "cardio", minutos: 18, zona: "5-6/10", alts: ["march-in-place", "stair-climbing"],
  consejo: "Ritmo moderado: puedes hablar con frases completas. Si hay una cuesta cerca, mejor. Si llueve, marcha en casa." };

const PROGRAMAS = {
  estetica: {
    titulo: "Carlos",
    quien: "32 años · 75 kg",
    objetivo: "Estética: pecho, glúteo, hombros y abdomen",
    defecto: "3",
    reglas: ESTETICA_REGLAS,
    planes: {
      "3": { dias: [
        { nombre: "Pecho y glúteo", foco: "Pecho, glúteo, espalda", minutos: 60, calentamiento: CAL_SUP, ejercicios: [
          C_PUSH_A, C_ROW_A, C_THRUST,
          lateral(3, "Superserie 2 · A"), C_FLY,
          C_ABD, C_CRUNCH
        ]},
        { nombre: "Hombro y pierna", foco: "Hombros, piernas, espalda", minutos: 59, calentamiento: CAL_INF, ejercicios: [
          { id: "band-overhead-press", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["pike-push-ups", "band-incline-press"] },
          { id: "band-bent-row", series: 3, reps: "10-15", descanso: 90, grupo: "Superserie 1 · B", alts: ["band-seated-row", "tube-one-arm-row"], nota: NOTA_REMO },
          C_BULG,
          lateral(4, "Superserie 2 · A"),
          { id: "sliding-leg-curl", series: 3, reps: "6-12", descanso: 75, grupo: "Superserie 2 · B", alts: ["nordic-hamstring-curl", "banded-romanian-deadlift"], nota: NOTA_ISQUIOS },
          { id: "band-pull-apart", series: 3, reps: "15-25", descanso: 20, grupo: "Superserie 3 · A", alts: ["band-reverse-fly", "band-overhead-pull-apart"], nota: "Hombro posterior: da forma redonda al hombro visto de lado." },
          C_RCRUNCH
        ]},
        { nombre: "Pecho, glúteo y abdomen", foco: "Pecho, glúteo, abdomen", minutos: 62, calentamiento: CAL_SUP, ejercicios: [
          { id: "band-push-up", series: 4, reps: "8-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["decline-push-up", "band-chest-press"], nota: "La banda larga puede ser demasiado dura: empieza con el tubo." },
          { id: "band-overhead-pull-apart", series: 3, reps: "10-15", descanso: 90, grupo: "Superserie 1 · B", alts: ["tube-one-arm-row", "band-seated-row"], nota: "Sin barra, es lo más parecido a un jalón sin atar la banda a nada." },
          { id: "banded-romanian-deadlift", series: 3, reps: "10-20", descanso: 90, alts: ["single-leg-romanian-deadlift", "bodyweight-good-morning"], nota: "Cadera atrás, espalda neutra; baja hasta notar tensión en los isquios." },
          { id: "split-squat", series: 3, reps: "10-15", descanso: 60, alts: ["bulgarian-split-squat", "bodyweight-reverse-lunge"], nota: "Reps por pierna." },
          { id: "band-incline-press", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 2 · A", alts: ["band-fly", "band-chest-press"] },
          lateral(3, "Superserie 2 · B"),
          { id: "bicycle-crunch", series: 3, reps: "12-20", descanso: 20, grupo: "Superserie 3 · A", alts: ["crunches", "reverse-crunches"] },
          { id: "side-plank", tipo: "tiempo", series: 3, segundos: 30, descanso: 45, grupo: "Superserie 3 · B", alts: ["plank", "incline-plank-hold"], nota: "Por lado. " + NOTA_TIEMPO }
        ]}
      ]},
      "2": { dias: [
        { nombre: "Pecho y glúteo", foco: "Pecho, glúteo, espalda", minutos: 63, calentamiento: CAL_SUP, ejercicios: [
          C_PUSH_A, C_ROW_A, C_THRUST,
          lateral(4, "Superserie 2 · A"), C_FLY,
          C_ABD, C_CRUNCH
        ]},
        { nombre: "Pecho, hombro y pierna", foco: "Pecho, hombros, piernas", minutos: 59, calentamiento: CAL_INF, ejercicios: [
          { id: "band-push-up", series: 4, reps: "8-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["decline-push-up", "band-chest-press"], nota: "La banda larga puede ser demasiado dura: empieza con el tubo." },
          { id: "band-bent-row", series: 3, reps: "10-15", descanso: 90, grupo: "Superserie 1 · B", alts: ["band-seated-row", "band-overhead-pull-apart"], nota: NOTA_REMO },
          C_BULG,
          { id: "band-overhead-press", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 2 · A", alts: ["pike-push-ups", "band-incline-press"] },
          { id: "sliding-leg-curl", series: 3, reps: "6-12", descanso: 75, grupo: "Superserie 2 · B", alts: ["nordic-hamstring-curl", "banded-romanian-deadlift"], nota: NOTA_ISQUIOS },
          lateral(4, "Superserie 3 · A"),
          { ...C_RCRUNCH }
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
          K_SQUAT, K_ROW, K_PUSH, K_BRIDGE, K_PRESS,
          { id: "dead-bug", series: 2, reps: "10-15", descanso: 60, grupo: "Superserie 3 · B", alts: ["crunches", "reverse-crunches"], nota: "Reps por lado." },
          K_BOX
        ]},
        { nombre: "Fuerza + cardio suave", foco: "Cuerpo entero + caminar", minutos: 58, calentamiento: CAL_INF, ejercicios: [
          K_THRUST, K_BROW, K_STEP, K_CHEST,
          { id: "banded-lateral-walk", series: 2, reps: "12-20", descanso: 20, grupo: "Superserie 3 · A", alts: ["banded-seated-hip-abduction", "banded-clamshell"], nota: "Reps por lado." },
          K_PLANK, K_WALK
        ]},
        { nombre: "Circuito + cardio largo", foco: "Circuito con bandas + caminar", minutos: 58, calentamiento: CAL_SUP, ejercicios: [
          { id: "banded-romanian-deadlift", series: 3, reps: "10-15", descanso: 15, grupo: "Circuito · 1", alts: ["bodyweight-good-morning", "banded-glute-bridge"], nota: "Circuito: haz 1 serie de cada ejercicio seguido (15 s entre ellos) y descansa 90 s al terminar la vuelta. 3 vueltas." },
          { id: "tube-one-arm-row", series: 3, reps: "10-12", descanso: 15, grupo: "Circuito · 2", alts: ["band-seated-row", "band-bent-row"], nota: "Reps por brazo." },
          { id: "band-overhead-press", series: 3, reps: "10-12", descanso: 15, grupo: "Circuito · 3", alts: ["tube-lateral-raise", "band-incline-press"] },
          { id: "banded-seated-hip-abduction", series: 3, reps: "15-20", descanso: 15, grupo: "Circuito · 4", alts: ["banded-lateral-walk", "banded-clamshell"] },
          { id: "bird-dog", series: 3, reps: "10-12", descanso: 90, grupo: "Circuito · 5", alts: ["dead-bug", "reverse-crunches"], nota: "Reps por lado. Al acabar, 90 s de descanso y otra vuelta." },
          { id: "walking", tipo: "cardio", minutos: 22, zona: "5-6/10", alts: ["march-in-place", "shadow-boxing"],
            consejo: "Continuo y moderado: frases completas. Si te sobra energía, busca una cuesta en vez de correr." }
        ]}
      ]},
      "2": { dias: [
        { nombre: "Fuerza + intervalos", foco: "Cuerpo entero + cardio fuerte", minutos: 58, calentamiento: CAL_INF, ejercicios: [
          K_SQUAT, K_ROW, K_PUSH, K_BRIDGE, K_PRESS,
          { id: "dead-bug", series: 2, reps: "10-15", descanso: 60, grupo: "Superserie 3 · B", alts: ["crunches", "reverse-crunches"], nota: "Reps por lado." },
          K_BOX
        ]},
        { nombre: "Fuerza + cardio suave", foco: "Cuerpo entero + caminar", minutos: 58, calentamiento: CAL_INF, ejercicios: [
          K_THRUST, K_BROW, K_STEP, K_CHEST,
          { id: "band-overhead-pull-apart", series: 2, reps: "10-15", descanso: 20, grupo: "Superserie 3 · A", alts: ["band-pull-apart", "band-reverse-fly"] },
          K_PLANK, K_WALK
        ]}
      ]}
    }
  }
};
