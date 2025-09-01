import { useState } from 'react';
import RoutineHeader from './components/RoutineHeader';
import WorkoutBlock from './components/WorkoutBlock';
import SimpleSection from './components/SimpleSection';
import TipsSection from './components/TipsSection';
import InfoSection from './components/InfoSection';
import { DocumentTextIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { routineData } from './data/routine';
import './index.css';

function App() {
  const [expandedExercise, setExpandedExercise] = useState(null);

  const handleExerciseToggle = (exerciseKey) => {
    setExpandedExercise(exerciseKey);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <RoutineHeader routine={routineData} />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Calentamiento */}
        <SimpleSection 
          section={routineData.warmUp}
          title={routineData.warmUp.title}
          bgColor="bg-yellow-50"
        />
        
        {/* Entrenamiento Principal */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {routineData.mainWorkout.title}
            </h2>
            <p className="text-gray-600">
              {routineData.mainWorkout.duration} • {routineData.mainWorkout.blocks.length} bloques principales
            </p>
          </div>
          
          {routineData.mainWorkout.blocks.map((block, index) => (
            <WorkoutBlock
              key={index}
              block={block}
              expandedExercise={expandedExercise}
              onExerciseToggle={handleExerciseToggle}
            />
          ))}
        </div>
        
        {/* Finisher */}
        {routineData.finisher && (
          <SimpleSection 
            section={routineData.finisher}
            title={routineData.finisher.title}
            bgColor="bg-green-50"
          />
        )}
        
        {/* Notas de ejecución */}
        {routineData.executionNotes && (
          <InfoSection 
            section={routineData.executionNotes}
            icon={DocumentTextIcon}
            bgColor="bg-blue-50"
          />
        )}
        
        {/* Progresión */}
        {routineData.progression && (
          <InfoSection
            section={routineData.progression}
            icon={ChartBarIcon}
            bgColor="bg-green-50"
          />
        )}
        
        {/* Tips */}
        <TipsSection tips={routineData.tips} />
        
        {/* Footer */}
        <footer className="mt-12 text-center py-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            KMH Rutina • Upper Body • {new Date().getFullYear()}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Consulta siempre con un profesional antes de comenzar cualquier rutina de ejercicios
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
