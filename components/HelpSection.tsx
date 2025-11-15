import Link from 'next/link';
import HelpArticleCard from '@/components/HelpArticleCard';
import { HelpArticle } from '@/types';
import { ArrowRight } from 'lucide-react';

interface HelpSectionProps {
  articles: HelpArticle[];
}

export default function HelpSection({ articles }: HelpSectionProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions and learn how to make the most of Claritutor
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto mb-8">
          {articles.map((article) => (
            <HelpArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/help"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
          >
            Visit Help Center
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}