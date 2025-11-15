import Link from 'next/link';
import TemplateCard from '@/components/TemplateCard';
import { StudyTemplate } from '@/types';
import { ArrowRight } from 'lucide-react';

interface FeaturedTemplatesProps {
  templates: StudyTemplate[];
}

export default function FeaturedTemplates({ templates }: FeaturedTemplatesProps) {
  if (templates.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Study Templates</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started quickly with our expertly crafted prompts designed to maximize your learning
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/templates"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
          >
            View all templates
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}