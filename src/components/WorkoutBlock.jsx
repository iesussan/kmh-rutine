import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, PlayIcon, ClockIcon, FireIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const ExerciseCard = ({ exercise, isExpanded, onToggle }) => {
  const handleVideoClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="exercise-card">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 mb-1">{exercise.name}</h4>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1">
              <FireIcon className="w-4 h-4" />
              {exercise.sets} series
            </span>
            <span>• {exercise.reps} reps</span>
            {exercise.rest && <span>• {exercise.rest} descanso</span>}
            {exercise.weight && <span>• {exercise.weight}</span>}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {exercise.videoUrl && (
            <button
              onClick={() => handleVideoClick(exercise.videoUrl)}
              className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors"
            >
              <PlayIcon className="w-4 h-4" />
              Ver ejercicio
            </button>
          )}
          
          <button
            onClick={onToggle}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            {isExpanded ? (
              <ChevronUpIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      
      {isExpanded && exercise.notes && (
        <div className="mt-3 p-3 bg-purple-50 rounded-md">
          <p className="text-sm text-purple-700 font-medium">💡 Nota:</p>
          <p className="text-sm text-purple-600 mt-1">{exercise.notes}</p>
        </div>
      )}
    </div>
  );
};

const WorkoutBlock = ({ block, expandedExercise, onExerciseToggle }) => {
  const [isBlockExpanded, setIsBlockExpanded] = useState(true);

  return (
    <div className="mb-6">
      <div 
        className="flex items-center justify-between cursor-pointer p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg"
        onClick={() => setIsBlockExpanded(!isBlockExpanded)}
      >
        <div>
          <h3 className="text-lg font-semibold">{block.title}</h3>
          {block.subtitle && (
            <p className="text-purple-100 text-sm font-medium">{block.subtitle}</p>
          )}
          <p className="text-purple-100 text-sm flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            {block.duration}
          </p>
        </div>
        {isBlockExpanded ? (
          <ChevronUpIcon className="w-6 h-6" />
        ) : (
          <ChevronDownIcon className="w-6 h-6" />
        )}
      </div>
      
      {isBlockExpanded && (
        <div className="bg-gray-50 rounded-b-lg p-4 space-y-3">
          {block.exercises.map((exercise, index) => {
            const exerciseKey = `${block.title}-${index}`;
            return (
              <ExerciseCard
                key={exerciseKey}
                exercise={exercise}
                isExpanded={expandedExercise === exerciseKey}
                onToggle={() => onExerciseToggle(
                  expandedExercise === exerciseKey ? null : exerciseKey
                )}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WorkoutBlock;
