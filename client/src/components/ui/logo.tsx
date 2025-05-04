
import React from 'react';

export default function Logo({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) {
  const brightness = variant === "dark" ? "brightness-150 contrast-125" : "";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center">
        <img 
          src="/images/ai-logo.png"
          alt="AI" 
          className={`h-8 w-auto rounded-sm ${brightness}`}
        />
      </div>
      <div className="font-display font-semibold">
        <span className={`text-xl ${variant === "dark" ? "text-white" : "text-gray-900"}`}>Aivora</span>
        <span className={`text-xl ml-1 ${variant === "dark" ? "text-indigo-300" : "text-indigo-600"}`}>Labs</span>
      </div>
    </div>
  );
}
