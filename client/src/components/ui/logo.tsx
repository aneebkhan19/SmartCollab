import React from 'react';

export default function Logo({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) {
  const brightness = variant === "dark" ? "brightness-150 contrast-125" : "";

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png"
        alt="Aivora Labs" 
        className={`h-10 w-auto ${brightness}`} 
      />
    </div>
  );
}