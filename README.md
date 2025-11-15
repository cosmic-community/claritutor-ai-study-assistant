# Claritutor - AI Study Assistant

![Claritutor Study Assistant](https://imgix.cosmicjs.com/254ca360-c1e0-11f0-9757-a1b2350abfc3-photo-1507003211169-0a1dd7228f2d-1763190108028.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, comprehensive AI-powered study assistant application showcasing content management capabilities with Cosmic CMS. Built with Next.js 16, TypeScript, and Tailwind CSS.

## ✨ Features

- 📚 **Study Templates Library** - Pre-built AI prompts for various subjects and learning scenarios
- 📢 **Announcements System** - Stay updated with platform news and feature releases
- 🎯 **Study Tips Collection** - Evidence-based learning techniques and strategies
- ❓ **Help Center** - Comprehensive documentation organized by categories
- 🎨 **Modern UI/UX** - Clean, responsive design optimized for learning
- 🔍 **Smart Search** - Search across all content types with instant results
- 📱 **Mobile Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Optimized images and server-side rendering
- ♿ **Accessible** - WCAG compliant with keyboard navigation support

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6918081be7349beda291dca9&clone_repository=69180ab1e7349beda291dd1d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> I understand you want a comprehensive, professional prompt for building Claritutor - a complete AI-powered study PWA. Here is the detailed implementation prompt:
>
> Create a complete, production-ready Claritutor AI study assistant application with the following comprehensive specifications:
>
> **PRODUCT OVERVIEW**
> Claritutor is a free AI-powered progressive web application designed specifically for students, featuring an intuitive study companion with real-time AI tutoring, Pomodoro timer, and comprehensive study analytics. The application must be fully accessible, performant, and provide seamless offline functionality.
>
> **TECHNICAL ARCHITECTURE**
> Build using React 18 with TypeScript strict mode enabled, Vite 6 as build tool, Tailwind CSS 3.4 for styling, and Radix UI components for accessibility. Implement state management using React Context API with useReducer hooks. Use React Router v7 for client-side routing with file-based route structure. Configure Vite PWA plugin with Workbox for service worker implementation, precaching critical assets up to 5MB, and implementing background sync for queued messages. Set up comprehensive testing with Vitest and React Testing Library for unit tests achieving 80% code coverage, plus Playwright for end-to-end testing of all critical user flows.
>
> **BACKEND INFRASTRUCTURE**
> Utilize Supabase as the full backend solution with PostgreSQL database, built-in authentication, and edge functions. Implement row-level security policies on every table ensuring data isolation. Create storage buckets for user exports with public read and owner write permissions. Configure Cosmic CMS as a headless content management system for all static content including study templates, subject categories, and help articles in read-only mode.
>
> **DATABASE SCHEMA DESIGN**
> Create comprehensive table structure including profiles table with user metadata, study preferences, and usage statistics. Implement conversations table with AI chat sessions including auto-generated titles, subject categorization, and template associations. Build messages table storing all chat interactions with role differentiation, token counts, and timestamps. Design study_sessions table for Pomodoro timer tracking with duration, break intervals, and completion status. Establish proper foreign key relationships and indexes for optimal query performance.
>
> **AUTHENTICATION SYSTEM**
> Implement multi-provider authentication supporting email/password with secure password reset flow, Google OAuth 2.0 integration, and guest mode with limited functionality. Configure Supabase Auth with custom user metadata storage. Create session management with automatic token refresh and secure logout functionality.
>
> **USER INTERFACE & EXPERIENCE**
> Develop responsive, mobile-first design system with comprehensive dark/light/system theme support. Implement consistent component library using Radix UI primitives styled with Tailwind CSS. Ensure full WCAG 2.2 AA compliance with keyboard navigation, focus management, screen reader announcements, and high contrast support. Create loading states, error boundaries, and empty states throughout the application.
>
> **CORE APPLICATION FEATURES**
>
> **Onboarding & Welcome Flow**
> Build three-step onboarding carousel introducing key features with skip functionality. Implement first-time user experience with guided tour elements. Create preference collection for study subjects and initial setup.
>
> **Dashboard & Analytics**
> Design comprehensive dashboard showing recent chat sessions with quick action buttons. Implement study statistics including current streak counter, weekly study time, total tokens used, and favorite subjects visualization. Create usage metrics with progress tracking and achievement indicators.
>
> **AI Chat Interface**
> Develop real-time chat interface supporting OpenAI GPT-4o model with streaming responses. Implement conversation management with auto-title generation from first 40 characters of initial message. Create template system with quick-access drawer containing pre-built study prompts. Add voice input functionality using Web Speech API with visual waveform display. Implement message actions including copy to clipboard, regenerate response, and export options. Include character counter and typing indicators for enhanced UX.
>
> **Study Timer System**
> Build customizable Pomodoro timer with standard intervals (25-minute focus, 5-minute short break, 15-minute long break). Implement timer controls for start, pause, reset with session counter tracking. Add background noise selection with multiple ambient sound options. Create completion notifications with deep-linking to start new chat sessions based on completed timer.
>
> **Conversation History**
> Develop comprehensive history view with advanced search across conversation content. Implement multi-criteria filtering by subject category, date ranges, and favorite status. Create bulk operations for export and deletion with confirmation dialogs. Add pagination system for optimal performance with large datasets.
>
> **Profile Management**
> Build user profile with avatar upload and cropping functionality. Implement comprehensive statistics display with exportable data in JSON format. Create account deletion flow with confirmation and data purge process.
>
> **Settings & Preferences**
> Develop extensive settings panel with theme customization (light/dark/system), font size adjustment, AI temperature control, and language preferences. Implement data management with import/export functionality for user data. Create application preferences persistence.
>
> **Help & Support System**
> Build FAQ section with accordion display of common questions. Implement contact form with categorized support requests. Create bug reporting and feature request systems with attachment support. All help content managed through Cosmic CMS.
>
> **EXPORT FUNCTIONALITY**
> Implement PDF export using jsPDF and html2canvas for high-quality conversation downloads. Create plain text export in raw markdown format. Develop bulk export system for multiple conversations with progress indicators.
>
> **SECURITY & PERFORMANCE**
> Configure comprehensive security measures including Content Security Policy headers, input sanitization for markdown content, and server-side OpenAI API key management. Implement rate limiting at edge function level with 10 requests per minute per IP address and 100 daily requests per user. Set up proper CORS policies and XSS protection.
>
> **PWA CAPABILITIES**
> Implement full progressive web app features with install prompt triggering, offline fallback page, and background sync for queued messages when connectivity restores. Configure maskable icons at 192x192 and 512x512 resolutions. Ensure Lighthouse PWA score of 95 or higher with proper service worker lifecycle management.
>
> **INTEGRATION SPECIFICATIONS**
>
> **Cosmic CMS Integration**
> Create singleton Cosmic client with methods for retrieving study templates, subject categories, and help articles. Implement search functionality across help content with relevance scoring. Configure read-only access with caching strategy.
>
> **Supabase Edge Function**
> Develop /api/chat edge function handling AI conversation processing with JWT verification, message persistence, OpenAI API communication, and response streaming. Implement usage tracking and rate limiting using Redis or in-memory LRU cache.
>
> **DEPLOYMENT CONFIGURATION**
> Set up Vercel deployment configuration for edge runtime compatibility. Create Docker Compose setup for local Supabase development. Configure GitHub Actions CI/CD pipeline with automated testing, linting, and type checking. Set up environment variable management with comprehensive template.
>
> **TESTING STRATEGY**
> Implement unit tests for all React components with user interaction simulation. Create integration tests for key user flows including authentication, chat interactions, and timer functionality. Develop end-to-end tests covering critical happy paths and error scenarios. Set up visual regression testing for UI components.
>
> **ACCESSIBILITY REQUIREMENTS**
> Ensure full keyboard navigation with focus trap modals and logical tab order. Implement ARIA live regions for dynamic content updates. Create screen reader announcements for important state changes. Maintain color contrast ratios of 4.5:1 for normal text and 3:1 for large text. Provide alternative text for all meaningful images and icons.
>
> **PERFORMANCE OPTIMIZATIONS**
> Implement code splitting with lazy loading for route-based chunks. Configure image optimization with responsive sizing. Set up proper caching strategies for static assets and API responses. Optimize bundle size through tree shaking and dependency analysis.
>
> **MONITORING & ANALYTICS**
> Configure error boundary reporting with user feedback collection. Implement performance monitoring for core web vitals tracking. Set up usage analytics for feature adoption and user behavior analysis.
>
> The application must be delivered as a complete, deploy-ready codebase with all configuration files, database migrations, seed data, PWA assets, and comprehensive documentation. Include MIT license and README with one-command development setup and deployment instructions to Vercel.
>
> hide the badge of BUILT WITH COSMIC

### Code Generation Prompt

> Based on the content model I created for "I understand you want a comprehensive, professional prompt for building Claritutor - a complete AI-powered study PWA. Here is the detailed implementation prompt...", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **CMS**: [Cosmic](https://www.cosmicjs.com/docs) - Headless CMS for content management
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Deployment**: [Vercel](https://vercel.com/) - Optimized for Next.js

## 📋 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- Cosmic CMS account with configured bucket
- Environment variables (see below)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd claritutor
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Study Templates
```typescript
const templates = await cosmic.objects
  .find({ type: 'study-templates' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Announcements
```typescript
const announcements = await cosmic.objects
  .find({ 
    type: 'announcements',
    'metadata.is_active': true 
  })
  .props(['title', 'metadata'])
  .depth(1)
```

### Fetching Help Articles by Category
```typescript
const articles = await cosmic.objects
  .find({ 
    type: 'help-articles',
    'metadata.category': 'getting-started'
  })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

## 🔗 Cosmic CMS Integration

This application leverages Cosmic CMS for managing all content:

- **Study Templates**: Pre-built AI prompts for various subjects
- **Announcements**: Platform news and feature updates
- **Study Tips**: Learning techniques and strategies
- **Help Articles**: Documentation and support content
- **Subject Categories**: Organization for templates and content

All content is fetched server-side for optimal SEO and performance. The application uses the Cosmic SDK v1.5+ with proper error handling for empty results.

## 🚀 Deployment Options

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Add environment variables
4. Configure build settings:
   - Build command: `bun run build`
   - Publish directory: `.next`

### Environment Variables

Required environment variables for production:
- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket identifier
- `COSMIC_READ_KEY` - Read-only API key
- `COSMIC_WRITE_KEY` - Write API key (if needed)

## 📄 License

MIT License - feel free to use this project for your own purposes.

<!-- README_END -->