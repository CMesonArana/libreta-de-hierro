// Rutinas en casa de 20 minutos, 4-6 días por semana. Cada ejercicio: id (en EX), series, reps, descanso (s), alts (2), grupo (superserie), nota.
// Calistenia como principal; bandas y tubo como alternativa. Solo el remo y la elevación lateral van con banda de principal (sin barra no hay forma de cargarlos).
// Superseries: el primero lleva 20 s de descanso (lo que tardas en cambiar) y el segundo el descanso del par.
// Base: ver INFORME.md (2026-10-31, sesiones de 20 min añadidas el 2026-11-02).

const SEGURIDAD_BANDAS = "<b>Seguridad con las bandas:</b> revísalas antes y después de cada uso y tira cualquiera con un corte o grieta. Pisa con firmeza y sin nada debajo de la suela, quítate los anillos, no la sueltes con tensión y no la estires a más de 3 veces su largo. Si puedes, entrena con gafas: las lesiones de ojo publicadas son de bandas que se escapan del punto de apoyo, también de debajo de los pies. Ninguna rutina ata bandas a puertas ni muebles.";
const NIVEL_BANDAS = "<b>Columna «Nivel»:</b> apunta qué variante haces (por ejemplo 1 = inclinada, 2 = de rodillas, 3 = normal, 4 = pies en alto) o qué banda usas. Si no cambias nada, déjala vacía.";
const SIN_BARRA = "<b>¿Por qué el remo y la elevación lateral son con banda?</b> Sin barra no hay ningún ejercicio de calistenia seguro que cargue la espalda o el hombro lateral (el remo bajo la mesa no tiene ninguna fuente fiable). Si quieres que todo sea calistenia, una barra de dominadas de marco de puerta cambia el remo por dominadas.";

const ESTETICA_REGLAS = [
  "<b>20 minutos, 4-6 días:</b> la app rota las sesiones A → B → C → D y pasa sola a la siguiente al guardar. Lo que hace crecer el músculo es el total de series de la semana, no cuántas haces en un día: con 5 sesiones sumas unas 60 series, casi lo mismo que el plan antiguo de 3 horas. 4 días es el mínimo; 6, el máximo útil.",
  "<b>Esfuerzo:</b> acaba cada serie dejando 0-3 repeticiones en reserva. Con el peso del cuerpo, lo que hace crecer el músculo es llegar cerca del fallo: las series cómodas apenas sirven. No hace falta llegar al fallo total.",
  "<b>Cómo progresar sin pesas:</b> cuando llegues al número alto en todas las series, sube en este orden: bajar en 3-4 segundos con pausa abajo → variante más difícil (pies en alto, a una pierna) → añadir la banda (está en «¿Prefieres otra opción?»). La app te avisa con «¡Sube!».",
  "<b>Superseries:</b> haz el ejercicio A, cambia al B en unos 10 s y descansa 45 s después del B. Como A y B trabajan músculos distintos, cada uno descansa casi 2 minutos entre sus series.",
  "<b>Prioridades:</b> pecho, glúteo y abdomen salen casi en cada sesión; hombro lateral y espalda, en dos de cada cuatro.",
  "<b>Técnica:</b> baja en unos 2-3 segundos, busca el estiramiento completo y no rebotes abajo.",
  SIN_BARRA,
  NIVEL_BANDAS,
  SEGURIDAD_BANDAS,
  "<b>Si te estancas</b> dos semanas o vas muy cansado: una semana con 2 vueltas en vez de 3.",
  "<b>Fuera del entreno:</b> ~1,6 g de proteína por kg al día (unos 120 g) y dormir 7-9 h hacen tanto como la rutina."
];

const PERDIDA_REGLAS = [
  "<b>Antes de empezar:</b> si tienes la tensión o el azúcar altos, alguna enfermedad del corazón o hace años que no te haces un chequeo, pásalo antes de hacer los intervalos fuertes.",
  "<b>20 minutos, 4-6 días:</b> la app rota Fuerza A → Cardio suave → Fuerza B → Intervalos y pasa sola a la siguiente al guardar. Con 6 días salen 3 de fuerza y 3 de cardio; con 4, 2 y 2. Los pasos diarios completan el resto del cardio.",
  "<b>Lo que más baja la grasa es la dieta</b> (un déficit moderado y sostenible). La fuerza sirve para no perder músculo mientras adelgazas; el cardio suma gasto.",
  "<b>Semanas 1-3 (por prudencia):</b> variantes cómodas, dejando 3 repeticiones en reserva, y cardio solo continuo. Desde la semana 4: deja 1-2 en reserva y empieza los intervalos.",
  "<b>Cómo progresar:</b> cuando llegues al número alto en todas las series, pasa a una variante algo más difícil (en las flexiones, un apoyo más bajo; en la sentadilla, una silla más baja). Comiendo menos, progresar despacio es lo normal: +1 repetición ya es ganar. No añadas series.",
  "<b>Intensidad del cardio:</b> «moderado» = puedes hablar con frases completas (5-6 de 10). «Fuerte» = solo frases cortas (8 de 10).",
  "<b>Por prudencia, nada de correr ni saltar</b> las primeras 12 semanas. En escaleras, baja despacio: bajar carga la rodilla más que subir.",
  SIN_BARRA,
  NIVEL_BANDAS,
  SEGURIDAD_BANDAS,
  "<b>Apoyos:</b> la mesa, la silla o el sofá tienen que aguantar tu peso sin moverse. Pruébalos antes y apóyalos contra la pared.",
  "<b>Fuera del entreno:</b> 7.500-8.500 pasos al día, proteína en cada comida y dormir bien. Si notas dolor en el pecho, mareo o falta de aire anormal, para y consulta a un médico."
];

const CAL = "2 min: 30 s de marcha en el sitio moviendo los brazos, 10 sentadillas, 10 círculos de hombros y 5 flexiones fáciles. Haz la primera vuelta de cada superserie algo más suave.";

const NOTA_REMO = "Con banda porque sin barra no hay remo de calistenia seguro. Tira hacia las costillas bajas con los codos pegados al cuerpo.";
const NOTA_LATERAL = "Con tubo porque sin peso el hombro lateral no trabaja. Pisa el tubo con los dos pies. Si cuesta poco, baja en 3 segundos o hazlo a un brazo.";
const NOTA_TIEMPO = "Pulsa ▶ y aguanta: el temporizador cuenta los segundos y luego el descanso.";
const NOTA_ISQUIOS = "En baldosa o parqué, no sobre la esterilla. Baja la cadera solo al final. El curl nórdico tiene más evidencia, pero necesita sujetar los talones bajo algo muy pesado que no se mueva.";
const CONSEJO_INT = "Intervalos: 1 min fuerte (solo frases cortas) + 1:30 suave. Sin saltos. Semanas 1-3: 18 min continuos a ritmo moderado. Al empezar con intervalos, 4 × 30 s fuerte.";

const PROGRAMAS = {
  estetica: {
    titulo: "Carlos",
    quien: "32 años · 75 kg",
    objetivo: "Estética: pecho, glúteo, hombros y abdomen",
    defecto: "4-6",
    reglas: ESTETICA_REGLAS,
    planes: {
      "4-6": { dias: [
        { nombre: "Pecho y glúteo", foco: "Pecho, espalda, glúteo, abdomen", minutos: 20, calentamiento: CAL, ejercicios: [
          { id: "decline-push-up", series: 3, reps: "6-12", descanso: 20, grupo: "Superserie 1 · A", alts: ["push-up", "band-incline-press"], nota: "Pies en la silla o el sofá. Es lo más parecido a un press inclinado. Si pasas de 12, baja en 3 segundos." },
          { id: "band-seated-row", series: 3, reps: "10-15", descanso: 45, grupo: "Superserie 1 · B", alts: ["band-bent-row", "tube-one-arm-row"], nota: NOTA_REMO },
          { id: "single-leg-hip-thrust", series: 3, reps: "6-10", descanso: 20, grupo: "Superserie 2 · A", alts: ["glute-bridge", "banded-hip-thrust"], nota: "Reps por pierna. Pausa de 1 s arriba apretando glúteo." },
          { id: "crunches", series: 3, reps: "10-15", descanso: 45, grupo: "Superserie 2 · B", alts: ["bicycle-crunch", "dead-bug"], nota: "Si te sobran reps, baja en 4 segundos con los brazos por encima de la cabeza." }
        ]},
        { nombre: "Hombro y pierna", foco: "Hombros, piernas, abdomen", minutos: 20, calentamiento: CAL, ejercicios: [
          { id: "pike-push-ups", series: 3, reps: "6-12", descanso: 20, grupo: "Superserie 1 · A", alts: ["push-up", "band-overhead-press"], nota: "Cadera alta y cabeza hacia delante de las manos. Si cuesta poco, pies en la silla." },
          { id: "tube-lateral-raise", series: 3, reps: "12-15", descanso: 45, grupo: "Superserie 1 · B", alts: ["miniband-lateral-raise", "one-arm-lateral-raise"], nota: NOTA_LATERAL },
          { id: "bulgarian-split-squat", series: 3, reps: "6-10", descanso: 20, grupo: "Superserie 2 · A", alts: ["split-squat", "banded-squat"], nota: "Reps por pierna. Torso algo inclinado hacia delante = más glúteo. Baja en 3 segundos." },
          { id: "reverse-crunches", series: 3, reps: "10-15", descanso: 45, grupo: "Superserie 2 · B", alts: ["lying-leg-raise", "dead-bug"] }
        ]},
        { nombre: "Pecho e isquios", foco: "Pecho, espalda, isquios, abdomen", minutos: 20, calentamiento: CAL, ejercicios: [
          { id: "push-up", series: 3, reps: "8-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["wide-grip-push-ups", "band-push-up"], nota: "Si pasas de 15, baja en 3 segundos con pausa abajo o pon los pies en alto." },
          { id: "band-bent-row", series: 3, reps: "10-15", descanso: 45, grupo: "Superserie 1 · B", alts: ["band-seated-row", "band-overhead-pull-apart"], nota: NOTA_REMO },
          { id: "sliding-leg-curl", series: 3, reps: "6-12", descanso: 20, grupo: "Superserie 2 · A", alts: ["nordic-hamstring-curl", "banded-romanian-deadlift"], nota: NOTA_ISQUIOS },
          { id: "side-plank", tipo: "tiempo", series: 3, segundos: 30, descanso: 45, grupo: "Superserie 2 · B", alts: ["plank", "incline-plank-hold"], nota: "Por lado. " + NOTA_TIEMPO }
        ]},
        { nombre: "Glúteo y hombro", foco: "Pecho, hombros, glúteo, abdomen", minutos: 20, calentamiento: CAL, ejercicios: [
          { id: "wide-grip-push-ups", series: 3, reps: "8-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["decline-push-up", "band-fly"], nota: "Manos algo más abiertas que los hombros: más pecho. Baja hasta casi tocar el suelo." },
          { id: "tube-lateral-raise", series: 3, reps: "12-15", descanso: 45, grupo: "Superserie 1 · B", alts: ["miniband-lateral-raise", "one-arm-lateral-raise"], nota: NOTA_LATERAL },
          { id: "single-leg-romanian-deadlift", series: 3, reps: "6-10", descanso: 20, grupo: "Superserie 2 · A", alts: ["bodyweight-good-morning", "banded-romanian-deadlift"], nota: "Reps por pierna. Apóyate con una mano en la pared si te desequilibras. Cadera atrás, espalda neutra." },
          { id: "bicycle-crunch", series: 3, reps: "10-15", descanso: 45, grupo: "Superserie 2 · B", alts: ["crunches", "reverse-crunches"], nota: "Cuenta cada lado como una rep y ve despacio." }
        ]}
      ]}
    }
  },

  perdida: {
    titulo: "Kevin",
    quien: "32 años · 105 kg",
    objetivo: "Pérdida de grasa sin perder músculo",
    defecto: "4-6",
    reglas: PERDIDA_REGLAS,
    planes: {
      "4-6": { dias: [
        { nombre: "Fuerza A", foco: "Cuerpo entero", minutos: 20, calentamiento: CAL, ejercicios: [
          { id: "box-squat", series: 3, reps: "10-15", descanso: 20, grupo: "Superserie 1 · A", alts: ["bodyweight-squat", "banded-squat"], nota: "Con una silla firme contra la pared. Tócala sin dejarte caer." },
          { id: "band-seated-row", series: 3, reps: "10-15", descanso: 45, grupo: "Superserie 1 · B", alts: ["band-bent-row", "tube-one-arm-row"], nota: NOTA_REMO },
          { id: "incline-push-ups", series: 3, reps: "8-12", descanso: 20, grupo: "Superserie 2 · A", alts: ["knee-push-ups", "band-chest-press"], nota: "Empieza con las manos en la mesa o la encimera. Cuando pases de 12, usa un apoyo más bajo." },
          { id: "glute-bridge", series: 3, reps: "12-15", descanso: 45, grupo: "Superserie 2 · B", alts: ["single-leg-hip-thrust", "banded-glute-bridge"], nota: "Pausa de 1 s arriba. Cuando pases de 15, a una pierna o con la minibanda." }
        ]},
        { nombre: "Cardio suave", foco: "Caminar 20 min", minutos: 20, ejercicios: [
          { id: "walking", tipo: "cardio", minutos: 20, zona: "5-6/10", alts: ["march-in-place", "stair-climbing"],
            consejo: "Ritmo moderado: puedes hablar con frases completas. Si hay una cuesta cerca, mejor. Si llueve, marcha en casa." }
        ]},
        { nombre: "Fuerza B", foco: "Cuerpo entero", minutos: 20, calentamiento: CAL, ejercicios: [
          { id: "step-ups", series: 3, reps: "8-12", descanso: 20, grupo: "Superserie 1 · A", alts: ["split-squat", "banded-squat"], nota: "Reps por pierna. En un peldaño bajo, agarrado a la barandilla o la pared. Baja despacio." },
          { id: "band-bent-row", series: 3, reps: "10-15", descanso: 45, grupo: "Superserie 1 · B", alts: ["band-seated-row", "tube-one-arm-row"], nota: NOTA_REMO },
          { id: "knee-push-ups", series: 3, reps: "8-12", descanso: 20, grupo: "Superserie 2 · A", alts: ["incline-push-ups", "band-chest-press"], nota: "Si aún no salen 8, vuelve a la flexión inclinada." },
          { id: "incline-plank-hold", tipo: "tiempo", series: 3, segundos: 30, descanso: 45, grupo: "Superserie 2 · B", alts: ["plank", "side-plank"], nota: NOTA_TIEMPO }
        ]},
        { nombre: "Intervalos", foco: "Boxeo sin saltos", minutos: 20, calentamiento: "2 min de marcha en el sitio subiendo poco a poco el ritmo.", ejercicios: [
          { id: "shadow-boxing", tipo: "cardio", minutos: 18, zona: "8/10", int: { trabajo: 60, descanso: 90, rondas: 7 }, alts: ["march-in-place", "walking"], consejo: CONSEJO_INT }
        ]}
      ]}
    }
  }
};
