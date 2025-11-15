import { getStudyTips } from '@/lib/cosmic';
import StudyTipCard from '@/components/StudyTipCard';
import PageHeader from '@/components/PageHeader';
import { Lightbulb } from 'lucide-react';

export default async function TipsPage() {
  const tips = await getStudyTips();

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Study Tips"
        description="Evidence-based techniques to improve your learning"
        icon={<Lightbulb className="w-8 h-8" />}
      />
      
      <div className="container py-12">
        {tips.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No study tips available yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {tips.map((tip) => (
              <StudyTipCard key={tip.id} tip={tip} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}