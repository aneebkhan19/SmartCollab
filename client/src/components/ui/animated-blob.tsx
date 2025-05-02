import React from 'react';

interface AnimatedBlobProps {
  className?: string;
  color: 'primary' | 'secondary' | 'accent';
  opacity: number;
  delay?: string;
}

export default function AnimatedBlob({ 
  className = '', 
  color = 'primary', 
  opacity = 0.3,
  delay = '0s'
}: AnimatedBlobProps) {
  const getColorClass = () => {
    switch(color) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'accent':
        return 'bg-accent';
      default:
        return 'bg-primary';
    }
  };
  
  return (
    <div 
      className={`rounded-full blob-animation ${getColorClass()} ${className}`} 
      style={{ 
        opacity: opacity,
        animationDelay: delay
      }}
    ></div>
  );
}
