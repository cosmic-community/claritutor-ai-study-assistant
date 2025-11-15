import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Clock, Target } from 'lucide-react';

export default function Hero() {
  const features = [
    {
      icon: BookOpen,
      title: 'Study Templates',
      description: 'Pre-built AI prompts for every subject',
    },
    {
      icon: Brain,
      title: 'Smart Learning',
      description: 'Evidence-based study techniques',
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Built-in Pomodoro timer for focus',
    },
    {
      icon: Target,
      title: 'Track Progress',
      description: 'Monitor your learning journey',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Your AI-Powered Study Companion
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 animate-slide-up">
            Learn smarter, not harder. Claritutor helps you master any subject with
            personalized AI assistance and proven study techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/templates"
              className="btn btn-primary bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 text-lg"
            >
              Explore Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/help"
              className="btn btn-secondary bg-primary-700 text-white hover:bg-primary-900 px-8 py-3 text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
              >
                <Icon className="h-10 w-10 text-primary-200 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-primary-100">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}