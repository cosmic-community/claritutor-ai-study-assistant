import Hero from '@/components/Hero';
import FeaturedTemplates from '@/components/FeaturedTemplates';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import StudyTipsPreview from '@/components/StudyTipsPreview';
import HelpSection from '@/components/HelpSection';
import { getStudyTemplates, getAnnouncements, getStudyTips, getHelpArticles } from '@/lib/cosmic';

export default async function HomePage() {
  // Fetch all content in parallel
  const [templates, announcements, tips, articles] = await Promise.all([
    getStudyTemplates(),
    getAnnouncements(),
    getStudyTips(),
    getHelpArticles()
  ]);

  // Filter featured templates
  const featuredTemplates = templates.filter(t => t.metadata?.is_featured);

  return (
    <>
      <Hero />
      {announcements.length > 0 && <AnnouncementBanner announcements={announcements} />}
      <FeaturedTemplates templates={featuredTemplates.length > 0 ? featuredTemplates : templates.slice(0, 3)} />
      <StudyTipsPreview tips={tips.slice(0, 2)} />
      <HelpSection articles={articles.slice(0, 4)} />
    </>
  );
}