'use client';

import { useState } from 'react';
import { Announcement } from '@/types';
import { X, Info, Sparkles, AlertCircle, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';

interface AnnouncementBannerProps {
  announcements: Announcement[];
}

export default function AnnouncementBanner({ announcements }: AnnouncementBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || announcements.length === 0) {
    return null;
  }

  const current = announcements[currentIndex];
  if (!current) return null;

  const typeIcons = {
    info: Info,
    feature: Sparkles,
    important: AlertCircle,
    maintenance: Wrench,
  };

  const typeColors = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    feature: 'bg-green-50 border-green-200 text-green-900',
    important: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    maintenance: 'bg-orange-50 border-orange-200 text-orange-900',
  };

  const type = current.metadata?.type?.key || 'info';
  const Icon = typeIcons[type as keyof typeof typeIcons] || Info;
  const colorClass = typeColors[type as keyof typeof typeColors] || typeColors.info;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <div className={`border ${colorClass} relative`}>
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold">{current.metadata?.announcement_title}</p>
              <div 
                className="mt-1 text-sm opacity-90"
                dangerouslySetInnerHTML={{ __html: current.metadata?.message || '' }}
              />
              {current.metadata?.cta_text && current.metadata?.cta_url && (
                <a
                  href={current.metadata.cta_url}
                  className="inline-block mt-3 text-sm font-medium underline hover:no-underline"
                >
                  {current.metadata.cta_text} →
                </a>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            {announcements.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="p-1 hover:opacity-75"
                  aria-label="Previous announcement"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-sm">
                  {currentIndex + 1} / {announcements.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-1 hover:opacity-75"
                  aria-label="Next announcement"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
            <button
              onClick={() => setDismissed(true)}
              className="p-1 hover:opacity-75"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}