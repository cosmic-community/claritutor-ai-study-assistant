import { StudyTemplate } from '@/types';
import { BookOpen, Tag, BarChart } from 'lucide-react';

interface TemplateCardProps {
  template: StudyTemplate;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  const difficulty = template.metadata?.difficulty_level?.key || 'intermediate';
  const difficultyLabel = template.metadata?.difficulty_level?.value || 'Intermediate';
  const colorClass = difficultyColors[difficulty as keyof typeof difficultyColors] || difficultyColors.intermediate;

  return (
    <div className="card card-hover p-6">
      <div className="flex items-start justify-between mb-4">
        <BookOpen className="h-8 w-8 text-primary-600" />
        {template.metadata?.is_featured && (
          <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {template.metadata?.template_name || template.title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-2">
        {template.metadata?.description || 'A study template to help you learn more effectively'}
      </p>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium px-2 py-1 rounded ${colorClass}`}>
          <BarChart className="h-3 w-3 inline mr-1" />
          {difficultyLabel}
        </span>
        
        {template.metadata?.tags && (
          <div className="flex items-center text-gray-500">
            <Tag className="h-3 w-3 mr-1" />
            <span className="text-xs">{template.metadata.tags.split(',')[0]?.trim()}</span>
          </div>
        )}
      </div>

      {template.metadata?.prompt_template && (
        <details className="mt-4">
          <summary className="cursor-pointer text-sm text-primary-600 hover:text-primary-700 font-medium">
            View template
          </summary>
          <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-700 whitespace-pre-wrap">
            {template.metadata.prompt_template}
          </div>
        </details>
      )}
    </div>
  );
}