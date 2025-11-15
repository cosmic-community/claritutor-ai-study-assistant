import { Announcement } from '@/types';
import { Info, Sparkles, AlertCircle, Wrench, Users } from 'lucide-react';

interface AnnouncementCardProps {
  announcement: Announcement;
}

export default function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  const typeIcons = {
    info: Info,
    feature: Sparkles,
    important: AlertCircle,
    maintenance: Wrench,
  };

  const typeColors = {
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    feature: 'bg-green-100 text-green-800 border-green-200',
    important: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    maintenance: 'bg-orange-100 text-orange-800 border-orange-200',
  };

  const audienceIcons = {
    all: null,
    new: '🆕',
    premium: '⭐',
    students: '🎓',
  };

  const type = announcement.metadata?.type?.key || 'info';
  const audience = announcement.metadata?.target_audience?.key || 'all';
  const Icon = typeIcons[type as keyof typeof typeIcons] || Info;
  const colorClass = typeColors[type as keyof typeof typeColors] || typeColors.info;
  const audienceIcon = audienceIcons[audience as keyof typeof audienceIcons];

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${colorClass}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <span className={`text-sm font-medium px-2 py-1 rounded ${colorClass}`}>
              {announcement.metadata?.type?.value || 'Announcement'}
            </span>
            {audienceIcon && (
              <span className="ml-2 text-sm text-gray-600">
                {audienceIcon} {announcement.metadata?.target_audience?.value}
              </span>
            )}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {announcement.metadata?.announcement_title || announcement.title}
      </h3>

      <div 
        className="prose prose-sm max-w-none text-gray-600"
        dangerouslySetInnerHTML={{ __html: announcement.metadata?.message || '' }}
      />

      {announcement.metadata?.cta_text && announcement.metadata?.cta_url && (
        <div className="mt-4">
          <a
            href={announcement.metadata.cta_url}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            {announcement.metadata.cta_text}
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}