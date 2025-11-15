import { HelpArticle } from '@/types';
import { FileText, ChevronRight } from 'lucide-react';

interface HelpArticleCardProps {
  article: HelpArticle;
}

export default function HelpArticleCard({ article }: HelpArticleCardProps) {
  return (
    <div className="card p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3">
        <FileText className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {article.metadata?.article_title || article.title}
          </h3>
          
          {article.metadata?.content && (
            <div 
              className="text-sm text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{ 
                __html: article.metadata.content
                  .replace(/<[^>]*>/g, ' ')
                  .substring(0, 150) + '...'
              }}
            />
          )}

          <button className="mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            Read article
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>

      {article.metadata?.search_keywords && (
        <div className="mt-4 flex flex-wrap gap-2">
          {article.metadata.search_keywords.split(',').slice(0, 3).map((keyword, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {keyword.trim()}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}