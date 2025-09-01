import { ClockIcon, FireIcon } from '@heroicons/react/24/outline';

const RoutineHeader = ({ routine }) => {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-shadow">
            {routine.title}
          </h1>
          {routine.subtitle && (
            <h2 className="text-xl md:text-2xl text-purple-100 mb-2">
              {routine.subtitle}
            </h2>
          )}
          <p className="text-purple-100 text-lg mb-2">{routine.description}</p>
          <div className="inline-flex items-center gap-1 mt-2 text-purple-200">
            <span className="text-sm">Duración:</span>
            <span className="bg-purple-500/30 px-2 py-1 rounded text-sm font-medium">
              {routine.version}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <ClockIcon className="w-8 h-8 mx-auto mb-2 text-purple-200" />
            <div className="text-2xl font-bold">{routine.duration}</div>
            <div className="text-sm text-purple-200">Duración total</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <FireIcon className="w-8 h-8 mx-auto mb-2 text-purple-200" />
            <div className="text-2xl font-bold">{routine.mainWorkout.blocks.length}</div>
            <div className="text-sm text-purple-200">Bloques principales</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              <span className="text-2xl">💪</span>
            </div>
            <div className="text-2xl font-bold">{routine.targetMuscles.length}</div>
            <div className="text-sm text-purple-200">Grupos musculares</div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-purple-200 mb-2">Músculos objetivo:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {routine.targetMuscles.map((muscle, index) => (
              <span 
                key={index}
                className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
              >
                {muscle}
              </span>
            ))}
          </div>
        </div>
        
        {/* Claves generales */}
        {routine.generalKeys && (
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-center">{routine.generalKeys.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {routine.generalKeys.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-purple-300">•</span>
                    <span className="text-purple-100">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoutineHeader;
