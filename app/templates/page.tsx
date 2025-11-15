import { getStudyTemplates } from '@/lib/cosmic';
import TemplateCard from '@/components/TemplateCard';
import PageHeader from '@/components/PageHeader';
import { BookOpen } from 'lucide-react';

export default async function TemplatesPage() {
  const templates = await getStudyTemplates();

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Study Templates"
        description="Pre-built AI prompts to help you study more effectively"
        icon={<BookOpen className="w-8 h-8" />}
      />
      
      <div className="container py-12">
        {templates.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No templates available yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}