import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  iconBg?: string;
  fullWidth?: boolean;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  tags, 
  iconBg = "bg-primary/10",
  fullWidth = false
}: ServiceCardProps) {
  return (
    <div className={`service-card bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 ${fullWidth ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}>
      <div className="p-8">
        <div className={`w-14 h-14 ${iconBg} rounded-lg flex items-center justify-center mb-6 service-icon`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-slate-700 mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
