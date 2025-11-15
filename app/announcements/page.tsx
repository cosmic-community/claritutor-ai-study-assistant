import { getAnnouncements } from '@/lib/cosmic';
import AnnouncementCard from '@/components/AnnouncementCard';
import PageHeader from '@/components/PageHeader';
import { Megaphone } from 'lucide-react';

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements();

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Announcements"
        description="Latest updates and news about Claritutor"
        icon={<Megaphone className="w-8 h-8" />}
      />
      
      <div className="container py-12">
        {announcements.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No announcements at this time.</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}