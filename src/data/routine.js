// Datos de la rutina Upper Body 90min v3
export const routineData = {
  title: "Rutina Upper Body",
  subtitle: "Espalda, Hombros, Bíceps, Tríceps",
  version: "≤ 90 min",
  duration: "≤ 90 min",
  targetMuscles: ["Espalda", "Hombros", "Bíceps", "Tríceps"],
  description: "Pensada para una semana con 3 días de entrenamiento donde 2 se dedican a pierna. Esta sesión optimiza tiempo con superseries.",
  
  generalKeys: {
    title: "Claves generales",
    points: [
      "Ritmo: 2 s bajar / 1 s subir",
      "Intensidad: deja 1–2 repeticiones en recámara (RIR 1–2)",
      "Descanso: 90-120 segundos entre ejercicios dentro de la superserie; 90 s entre vueltas del bloque",
      "Rondas: completa todas las vueltas del bloque antes de pasar al siguiente"
    ]
  },

  warmUp: {
    title: "Calentamiento",
    duration: "8–10 min",
    exercises: [
      {
        name: "Cardio suave + movilidad de hombros/escápulas",
        sets: "1",
        reps: "5 min",
        rest: "-"
      },
      {
        name: "Serie ligera del primer ejercicio de cada bloque (A–D)",
        sets: "1",
        reps: "15 rep",
        rest: "Según necesidad"
      }
    ]
  },

  mainWorkout: {
    title: "Entrenamiento Principal",
    duration: "70-80 min",
    blocks: [
      {
        title: "Bloque A — Dominante vertical + press de hombros",
        subtitle: "Superserie",
        duration: "3–4 vueltas",
        exercises: [
          {
            name: "A1. Jalón al pecho en polea",
            sets: "3–4",
            reps: "8–12",
            rest: "60–90s dentro superserie",
            videoUrl: "https://exrx.net/WeightExercises/LatissimusDorsi/CBFrontPulldown",
            notes: "Piensa en llevar los codos a los 'bolsillos traseros'. Deprime y retrae escápulas antes de tirar."
          },
          {
            name: "A2. Press de hombros con mancuernas (sentado)",
            sets: "3–4",
            reps: "8–12",
            rest: "90s entre vueltas del bloque",
            videoUrl: "https://exrx.net/WeightExercises/DeltoidAnterior/DBShoulderPress"
          }
        ]
      },
      {
        title: "Bloque B — Remo horizontal + deltoide posterior",
        subtitle: "Superserie",
        duration: "3–4 vueltas",
        exercises: [
          {
            name: "B1. Remo con mancuerna a una mano (apoyado en banco plano o rack)",
            sets: "3–4",
            reps: "8–12",
            rest: "60–90s dentro superserie",
            videoUrl: "https://exrx.net/WeightExercises/BackGeneral/DBBentOverRow",
            notes: "Elige 1 variante SIN banco especial. Alternativa: Remo en polea sentado"
          },
          {
            name: "B1. Remo en polea sentado (alternativo)",
            sets: "3–4",
            reps: "8–12",
            rest: "60–90s dentro superserie",
            videoUrl: "https://exrx.net/WeightExercises/BackGeneral/CBSeatedRow",
            notes: "Usar como alternativa al remo con mancuerna"
          },
          {
            name: "B2. Face pull (remo posterior con cuerda)",
            sets: "3–4",
            reps: "12–15",
            rest: "90s entre vueltas del bloque",
            videoUrl: "https://exrx.net/WeightExercises/DeltoidPosterior/CBStandingRearDeltRowRope",
            notes: "Codos altos; termina con la cuerda a la altura de la cara/cuello para cargar deltoide posterior y manguito rotador."
          }
        ]
      },
      {
        title: "Bloque C — Aislamiento hombro lateral + bíceps",
        subtitle: "Superserie",
        duration: "3 vueltas",
        exercises: [
          {
            name: "C1. Elevación lateral con mancuernas",
            sets: "3",
            reps: "12–15",
            rest: "60–90s dentro superserie",
            videoUrl: "https://exrx.net/WeightExercises/DeltoidLateral/DBLateralRaise",
            notes: "Codos ligeramente por encima de las muñecas; sube hasta la altura de los hombros."
          },
          {
            name: "C2. Curl inclinado con mancuernas",
            sets: "3",
            reps: "8–12",
            rest: "90s entre vueltas del bloque",
            videoUrl: "https://exrx.net/WeightExercises/Biceps/DBInclineCurl",
            notes: "Mantén los codos un poco detrás del torso para mayor estiramiento."
          }
        ]
      },
      {
        title: "Bloque D — Tríceps + bíceps",
        subtitle: "Superserie",
        duration: "2–3 vueltas",
        exercises: [
          {
            name: "D1. Extensión de tríceps en polea (pushdown)",
            sets: "2–3",
            reps: "10–15",
            rest: "60–90s dentro superserie",
            videoUrl: "https://exrx.net/WeightExercises/Triceps/CBPushdown",
            notes: "Alternar pushdown y sobre-cabeza cubre las 3 cabezas del tríceps."
          },
          {
            name: "D2. Extensión de tríceps sobre la cabeza (cuerda)",
            sets: "2–3",
            reps: "10–15",
            rest: "90s entre vueltas del bloque",
            videoUrl: "https://exrx.net/WeightExercises/Triceps/CBStandingTricepsExtensionRope",
            notes: "La sobre-cabeza enfatiza la cabeza larga del tríceps."
          }
        ]
      }
    ]
  },

  finisher: {
    title: "Finisher (opcional)",
    duration: "3–5 min",
    exercises: [
      {
        name: "Pulldown con brazos rectos (cable bent-over pullover)",
        sets: "2",
        reps: "12–15",
        rest: "60s",
        videoUrl: "https://exrx.net/WeightExercises/LatissimusDorsi/CBBentoverPullover"
      }
    ]
  },

  executionNotes: {
    title: "Notas rápidas de ejecución",
    points: [
      "Espalda: en jalones y remos, piensa en llevar los codos a los 'bolsillos traseros'. Deprime y retrae escápulas antes de tirar.",
      "Hombros: en elevaciones laterales, codos ligeramente por encima de las muñecas; sube hasta la altura de los hombros.",
      "Face pull: codos altos; termina con la cuerda a la altura de la cara/cuello para cargar deltoide posterior y manguito rotador.",
      "Bíceps: en curl inclinado, mantén los codos un poco detrás del torso para mayor estiramiento.",
      "Tríceps: alternar pushdown y sobre-cabeza cubre las 3 cabezas (la sobre-cabeza enfatiza la cabeza larga)."
    ]
  },

  progression: {
    title: "Progresión (4–6 semanas)",
    points: [
      "Cuando alcances el rango alto de repeticiones con RIR 1–2 en todas las vueltas, sube 2–5% el peso la semana siguiente.",
      "Mantén el total en ~20–26 series efectivas para no interferir con los días fuertes de pierna."
    ]
  },

  tips: [
    "Mantén una técnica correcta en todos los ejercicios",
    "Respeta los tiempos de descanso: 60–90s dentro de superseries, 90s entre vueltas",
    "RIR 1-2: deja 1-2 repeticiones en recámara para mantener intensidad óptima",
    "Completa todas las vueltas de un bloque antes de pasar al siguiente",
    "Si sientes dolor, detén el ejercicio inmediatamente",
    "Esta rutina está pensada para complementar 2 días fuertes de pierna",
    "Realiza esta rutina 1-2 veces por semana con al menos 48h de descanso"
  ]
};
