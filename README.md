# KMH Rutina - Upper Body ≤ 90min

Una landing page responsive para visualizar una rutina completa de entrenamiento de tren superior optimizada con superseries. Pensada para una semana con 3 días de entrenamiento donde 2 se dedican a pierna.

## 🚀 Características

- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Responsive**: Se adapta perfectamente a cualquier tamaño de pantalla
- **Enlaces directos a ExRx.net**: Acceso rápido a demostraciones técnicas verificadas de cada ejercicio
- **Superseries organizadas**: Estructura clara de bloques con superseries para optimizar tiempo
- **Interfaz intuitiva**: Navegación sencilla con bloques expandibles
- **Colores**: Paleta de colores blanco, lila y negro para una experiencia visual atractiva

## 🏋️‍♂️ Contenido de la Rutina

- **Calentamiento** (8-10 min): Movilidad y activación
- **Entrenamiento Principal** (70-80 min):
  - **Bloque A**: Dominante vertical + Press de hombros (3-4 vueltas)
  - **Bloque B**: Remo horizontal + Deltoide posterior (3-4 vueltas) 
  - **Bloque C**: Aislamiento hombro lateral + Bíceps (3 vueltas)
  - **Bloque D**: Tríceps + Bíceps (2-3 vueltas)
- **Finisher** (3-5 min): Pulldown con brazos rectos (opcional)

## 💪 Músculos Objetivo

- **Espalda**: Jalones, remos, face pulls
- **Hombros**: Press de hombros, elevaciones laterales, face pulls
- **Bíceps**: Curls inclinados, work complementario
- **Tríceps**: Extensiones en polea y sobre cabeza

## 🎯 Metodología

- **Superseries**: Optimización del tiempo de entrenamiento
- **RIR 1-2**: Deja 1-2 repeticiones en recámara para intensidad óptima
- **Descansos**: 60-90s dentro de superseries, 90s entre vueltas
- **Progresión**: 4-6 semanas con incrementos del 2-5% del peso
- **Volumen**: ~20-26 series efectivas para no interferir con días de pierna

##  Características de la Interfaz

- **Bloques expandibles**: Cada bloque de superseries se puede expandir/contraer
- **Enlaces directos a ExRx.net**: Botones "Ver ejercicio" que abren técnicas verificadas
- **Información completa**: Series, repeticiones, descansos y notas técnicas
- **Superseries marcadas**: Estructura clara de A1+A2, B1+B2, etc.
- **Claves generales**: Información sobre ritmo, intensidad y descansos
- **Notas de ejecución**: Tips específicos para cada grupo muscular
- **Progresión estructurada**: Guía para avanzar de forma segura
- **Diseño intuitivo**: Navegación sin complicaciones, información accesible

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Tailwind CSS 3.4** - Framework de CSS utilitario
- **Vite** - Build tool moderno y rápido
- **Heroicons** - Iconos consistentes y profesionales
- **clsx** - Utilidad para clases CSS condicionales
- **ExRx.net** - Base de datos técnica de ejercicios verificada

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/kmh-rutine.git
   cd kmh-rutine
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

## 🌐 Despliegue en GitHub Pages

El proyecto está configurado para ser desplegado en GitHub Pages:

1. **Build automático**: El proyecto se construye automáticamente
2. **URL base configurada**: `/kmh-rutine/` para GitHub Pages
3. **Despliegue**: Sube los archivos de `dist/` a tu repositorio

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── RoutineHeader.jsx     # Header con información general y claves
│   ├── WorkoutBlock.jsx      # Bloques de superseries principales
│   ├── SimpleSection.jsx     # Calentamiento y finisher
│   ├── TipsSection.jsx       # Sección de consejos importantes
│   └── InfoSection.jsx       # Notas de ejecución y progresión
├── data/
│   └── routine.js           # Datos completos de la rutina con enlaces ExRx
├── App.jsx                  # Componente principal de la aplicación
├── main.jsx                # Punto de entrada de React
└── index.css              # Estilos globales con Tailwind
```

## 🏋️‍♂️ Características de Entrenamiento

### Superseries Inteligentes
- **Bloque A**: Jalón + Press hombros (vertical pull + push)
- **Bloque B**: Remo + Face pull (horizontal pull + posterior)
- **Bloque C**: Lateral + Curl inclinado (hombro + bíceps)
- **Bloque D**: Tríceps pushdown + Overhead (cabezas diferentes)

### Metodología RIR (Repeticiones en Recámara)
- **RIR 1-2**: Mantén 1-2 repeticiones en reserva
- **Progresión controlada**: Aumenta peso solo cuando domines el rango alto
- **Volumen óptimo**: 20-26 series efectivas semanales

### Enlaces Técnicos Verificados
Todos los ejercicios enlazan a **ExRx.net**, la base de datos más confiable de:
- ✅ Técnica correcta ilustrada
- ✅ Músculos primarios y secundarios
- ✅ Instrucciones paso a paso
- ✅ Variantes y progresiones

## ⚠️ Importante

- **Consulta profesional**: Siempre consulta con un profesional antes de comenzar
- **Técnica primero**: Domina la técnica antes de aumentar peso
- **RIR 1-2**: Deja siempre 1-2 repeticiones en recámara
- **Descanso adecuado**: 48-72h entre sesiones de upper body
- **Complemento de pierna**: Esta rutina complementa 2 días fuertes de pierna
- **Progresión gradual**: Sube peso solo 2-5% cuando domines el rango alto
- **Escucha tu cuerpo**: Para inmediatamente si sientes dolor

## 📊 Tabla Resumen - Enlaces Verificados

| Bloque | Ejercicio | Series × Reps | Enlace ExRx |
|:------:|-----------|:-------------:|:------------|
| A | Jalón al pecho en polea | 3–4 × 8–12 | [Ver técnica](https://exrx.net/WeightExercises/LatissimusDorsi/CBFrontPulldown) |
| A | Press de hombros con mancuernas | 3–4 × 8–12 | [Ver técnica](https://exrx.net/WeightExercises/DeltoidAnterior/DBShoulderPress) |
| B | Remo con mancuerna a una mano | 3–4 × 8–12 | [Ver técnica](https://exrx.net/WeightExercises/BackGeneral/DBBentOverRow) |
| B | Remo en polea sentado | 3–4 × 8–12 | [Ver técnica](https://exrx.net/WeightExercises/BackGeneral/CBSeatedRow) |
| B | Face pull (cuerda) | 3–4 × 12–15 | [Ver técnica](https://exrx.net/WeightExercises/DeltoidPosterior/CBStandingRearDeltRowRope) |
| C | Elevación lateral con mancuernas | 3 × 12–15 | [Ver técnica](https://exrx.net/WeightExercises/DeltoidLateral/DBLateralRaise) |
| C | Curl inclinado con mancuernas | 3 × 8–12 | [Ver técnica](https://exrx.net/WeightExercises/Biceps/DBInclineCurl) |
| D | Extensión tríceps en polea | 2–3 × 10–15 | [Ver técnica](https://exrx.net/WeightExercises/Triceps/CBPushdown) |
| D | Extensión tríceps sobre cabeza | 2–3 × 10–15 | [Ver técnica](https://exrx.net/WeightExercises/Triceps/CBStandingTricepsExtensionRope) |
| Finisher | Pulldown brazos rectos | 2 × 12–15 | [Ver técnica](https://exrx.net/WeightExercises/LatissimusDorsi/CBBentoverPullover) |

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

💪 **¡Entrena con seguridad y constancia!**
