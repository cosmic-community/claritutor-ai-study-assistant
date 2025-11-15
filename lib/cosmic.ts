import { createBucketClient } from '@cosmicjs/sdk';
import type { StudyTemplate, Announcement, StudyTip, HelpArticle, CosmicObject } from '@/types';
import { hasStatus } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

// Fetch study templates
export async function getStudyTemplates(): Promise<StudyTemplate[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'study-templates' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    return response.objects as StudyTemplate[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching study templates:', error);
    throw new Error('Failed to fetch study templates');
  }
}

// Fetch active announcements
export async function getAnnouncements(): Promise<Announcement[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'announcements',
        'metadata.is_active': true 
      })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    return response.objects as Announcement[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching announcements:', error);
    throw new Error('Failed to fetch announcements');
  }
}

// Fetch study tips
export async function getStudyTips(): Promise<StudyTip[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'study-tips' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    // Sort by display order
    const tips = response.objects as StudyTip[];
    return tips.sort((a, b) => {
      const orderA = a.metadata?.display_order ?? 999;
      const orderB = b.metadata?.display_order ?? 999;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching study tips:', error);
    throw new Error('Failed to fetch study tips');
  }
}

// Fetch help articles
export async function getHelpArticles(category?: string): Promise<HelpArticle[]> {
  try {
    const query: Record<string, any> = { type: 'help-articles' };
    if (category) {
      query['metadata.category'] = category;
    }
    
    const response = await cosmic.objects
      .find(query)
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    
    return response.objects as HelpArticle[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching help articles:', error);
    throw new Error('Failed to fetch help articles');
  }
}

// Search across all content
export async function searchContent(query: string): Promise<CosmicObject[]> {
  if (!query || query.trim() === '') {
    return [];
  }

  try {
    const response = await cosmic.objects
      .find({ $text: { $search: query } })
      .props(['id', 'slug', 'title', 'metadata', 'type'])
      .depth(1)
      .limit(20);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error searching content:', error);
    return [];
  }
}