import { getHelpArticles } from '@/lib/cosmic';
import HelpArticleCard from '@/components/HelpArticleCard';
import PageHeader from '@/components/PageHeader';
import { HelpCircle } from 'lucide-react';

export default async function HelpPage() {
  const articles = await getHelpArticles();

  // Group articles by category
  const groupedArticles = articles.reduce((acc, article) => {
    const category = article.metadata?.category?.value || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {} as Record<string, typeof articles>);

  const categoryOrder = [
    'Getting Started',
    'Features', 
    'Troubleshooting',
    'Account & Billing',
    'Privacy & Security',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Help Center"
        description="Find answers to your questions and learn how to use Claritutor"
        icon={<HelpCircle className="w-8 h-8" />}
      />
      
      <div className="container py-12">
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No help articles available yet.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {categoryOrder
              .filter(category => groupedArticles[category] && groupedArticles[category].length > 0)
              .map((category) => {
                const categoryArticles = groupedArticles[category];
                if (!categoryArticles || categoryArticles.length === 0) {
                  return null;
                }
                
                return (
                  <div key={category}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {categoryArticles.map((article) => (
                        <HelpArticleCard key={article.id} article={article} />
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}