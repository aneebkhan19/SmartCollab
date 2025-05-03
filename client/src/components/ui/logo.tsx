import React from 'react';

export default function Logo({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) {
  // Add brightness adjustment for dark background if needed
  const brightness = variant === "dark" ? "brightness-150 contrast-125" : "";
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/Logo.png" 
        alt="Aivora Labs" 
        className={`h-10 w-auto ${brightness}`} 
        onError={(e) => {
          e.currentTarget.onerror = null;
          // Fallback to text logo if image fails
          e.currentTarget.style.display = 'none';
          const container = e.currentTarget.parentElement;
          if (container) {
            const textLogo = document.createElement('h1');
            textLogo.className = 'text-2xl font-bold';
            textLogo.innerHTML = `<span class="${variant === "dark" ? "text-indigo-400" : "text-indigo-500"}">Aivora</span><span class="${variant === "dark" ? "text-indigo-300" : "text-indigo-600"}">Labs</span>`;
            container.appendChild(textLogo);
          }
        }}
      />
    </div>
  );
}