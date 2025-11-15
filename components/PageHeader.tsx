import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

export default function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container py-12">
        <div className="flex items-center space-x-4">
          {icon && (
            <div className="p-3 bg-white/20 rounded-lg">
              {icon}
            </div>
          )}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
            {description && (
              <p className="text-primary-100 max-w-2xl">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}