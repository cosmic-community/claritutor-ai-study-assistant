// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Study Template
export interface StudyTemplate extends CosmicObject {
  type: 'study-templates';
  metadata: {
    template_name?: string;
    description?: string;
    prompt_template?: string;
    subject_category?: string;
    difficulty_level?: {
      key: string;
      value: string;
    };
    tags?: string;
    is_featured?: boolean;
    usage_count?: number;
  };
}

// Announcement
export interface Announcement extends CosmicObject {
  type: 'announcements';
  metadata: {
    announcement_title?: string;
    message?: string;
    type?: {
      key: string;
      value: string;
    };
    target_audience?: {
      key: string;
      value: string;
    };
    cta_text?: string;
    cta_url?: string;
    is_active?: boolean;
  };
}

// Study Tip
export interface StudyTip extends CosmicObject {
  type: 'study-tips';
  metadata: {
    tip_title?: string;
    brief_description?: string;
    full_content?: string;
    tip_type?: {
      key: string;
      value: string;
    };
    difficulty_level?: {
      key: string;
      value: string;
    };
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    display_order?: number;
  };
}

// Help Article
export interface HelpArticle extends CosmicObject {
  type: 'help-articles';
  metadata: {
    article_title?: string;
    content?: string;
    category?: {
      key: string;
      value: string;
    };
    related_articles?: HelpArticle[];
    search_keywords?: string;
    helpful_count?: number;
  };
}

// Subject Category
export interface SubjectCategory extends CosmicObject {
  type: 'subject-categories';
  metadata: {
    category_name?: string;
    description?: string;
    icon?: string;
    color_theme?: string;
    parent_category?: SubjectCategory;
    display_order?: number;
  };
}

// Type guards
export function isStudyTemplate(obj: CosmicObject): obj is StudyTemplate {
  return obj.type === 'study-templates';
}

export function isAnnouncement(obj: CosmicObject): obj is Announcement {
  return obj.type === 'announcements';
}

export function isStudyTip(obj: CosmicObject): obj is StudyTip {
  return obj.type === 'study-tips';
}

export function isHelpArticle(obj: CosmicObject): obj is HelpArticle {
  return obj.type === 'help-articles';
}

// Error helper
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}