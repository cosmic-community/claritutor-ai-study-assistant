import { StudyTip } from '@/types';
import { Brain, Target, Clock, BookOpen, PenTool } from 'lucide-react';

interface StudyTipCardProps {
  tip: StudyTip;
}

export default function StudyTipCard({ tip }: StudyTipCardProps) {
  const typeIcons = {
    productivity: Clock,
    memory: Brain,
    focus: Target,
    'exam-prep': BookOpen,
    'note-taking': PenTool,
  };

  const typeColors = {
    productivity: 'text-blue-600',
    memory: 'text-purple-600',
    focus: 'text-green-600',
    'exam-prep': 'text-orange-600',
    'note-taking': 'text-indigo-600',
  };

  const tipType = tip.metadata?.tip_type?.key || 'productivity';
  const Icon = typeIcons[tipType as keyof typeof typeIcons] || Brain;
  const colorClass = typeColors[tipType as keyof typeof typeColors] || 'text-primary-600';

  return (
    <div className="card overflow-hidden">
      {tip.metadata?.featured_image && (
        <img
          src={`${tip.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
          alt={tip.metadata?.tip_title || tip.title}
          className="w-full h-48 object-cover"
          width={400}
          height={200}
        />
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Icon className={`h-6 w-6 ${colorClass} mr-2`} />
          <span className="text-sm font-medium text-gray-600">
            {tip.metadata?.tip_type?.value || 'Study Tip'}
          </span>
          {tip.metadata?.difficulty_level?.value && (
            <span className="ml-auto text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tip.metadata.difficulty_level.value}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {tip.metadata?.tip_title || tip.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {tip.metadata?.brief_description || 'Learn this effective study technique'}
        </p>

        {tip.metadata?.full_content && (
          <details className="mt-4">
            <summary className="cursor-pointer text-primary-600 hover:text-primary-700 font-medium">
              Learn more
            </summary>
            <div className="mt-3 prose prose-sm max-w-none">
              <div dangerouslySetInnerHTML={{ 
                __html: tip.metadata.full_content.replace(/\n/g, '<br />') 
              }} />
            </div>
          </details>
        )}
      </div>
    </div>
  );
}