import { LightBulbIcon } from '@heroicons/react/24/outline';

const TipsSection = ({ tips }) => {
  return (
    <div className="bg-purple-50 rounded-lg p-6 mt-8">
      <div className="flex items-center gap-2 mb-4">
        <LightBulbIcon className="w-6 h-6 text-purple-600" />
        <h3 className="text-lg font-semibold text-purple-900">Consejos Importantes</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="inline-block w-5 h-5 bg-purple-200 text-purple-700 text-xs font-bold rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
              {index + 1}
            </span>
            <p className="text-sm text-purple-800 leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsSection;
