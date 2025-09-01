import { useState } from 'react';
import { PlayIcon, ClockIcon } from '@heroicons/react/24/outline';

const SimpleSection = ({ section, title, bgColor = 'bg-gray-50' }) => {
  const [expandedExercise, setExpandedExercise] = useState(null);

  const handleVideoClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mb-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className={`${bgColor} px-4 py-3 border-b border-gray-200`}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <ClockIcon className="w-4 h-4" />
              {section.duration}
            </div>
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          {section.exercises.map((exercise, index) => {
            const isExpanded = expandedExercise === index;
            return (
              <div key={index} className="exercise-card">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{exercise.name}</h4>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span>{exercise.sets} series</span>
                      <span>• {exercise.reps}</span>
                      {exercise.rest && <span>• {exercise.rest} descanso</span>}
                    </div>
                  </div>
                  
                  {exercise.videoUrl && (
                    <button
                      onClick={() => handleVideoClick(exercise.videoUrl)}
                      className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors"
                    >
                      <PlayIcon className="w-4 h-4" />
                      Ver
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SimpleSection;
