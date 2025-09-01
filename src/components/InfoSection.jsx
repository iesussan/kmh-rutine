import { DocumentTextIcon } from '@heroicons/react/24/outline';

const InfoSection = ({ section, icon: IconComponent = DocumentTextIcon, bgColor = "bg-gray-50" }) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 mb-6`}>
      <div className="flex items-center gap-2 mb-4">
        <IconComponent className="w-6 h-6 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
      </div>
      
      <div className="space-y-3">
        {section.points.map((point, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="inline-block w-5 h-5 bg-purple-200 text-purple-700 text-xs font-bold rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
              {index + 1}
            </span>
            <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
