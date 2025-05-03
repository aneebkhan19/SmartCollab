
import React from 'react';

export default function Logo({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) {
  const brightness = variant === "dark" ? "brightness-150 contrast-125" : "";

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <img 
          src="/images/logo.png"
          alt="Aivora Labs" 
          className={`h-8 w-auto object-contain ${brightness}`}
          style={{ maxWidth: '200px' }}
        />
      </div>
    </div>
  );
}
