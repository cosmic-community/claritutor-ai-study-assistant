import Link from 'next/link';
import StudyTipCard from '@/components/StudyTipCard';
import { StudyTip } from '@/types';
import { ArrowRight } from 'lucide-react';

interface StudyTipsPreviewProps {
  tips: StudyTip[];
}

export default function StudyTipsPreview({ tips }: StudyTipsPreviewProps) {
  if (tips.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Study Techniques</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn evidence-based methods to improve your focus, retention, and understanding
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-8">
          {tips.map((tip) => (
            <StudyTipCard key={tip.id} tip={tip} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tips"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
          >
            Explore all study tips
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}