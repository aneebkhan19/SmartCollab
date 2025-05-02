import React from 'react';

export default function Logo({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) {
  const brightness = variant === "dark" ? "brightness-150" : "";
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/Logo.png" 
        alt="AiVoralabs Logo" 
        className={`h-9 ${brightness}`} 
        onError={(e) => {
          e.currentTarget.onerror = null;
          // Fallback to text logo if image fails
          e.currentTarget.style.display = 'none';
          const container = e.currentTarget.parentElement;
          if (container) {
            const textLogo = document.createElement('h1');
            textLogo.className = 'text-2xl font-bold';
            textLogo.innerHTML = `<span class="${variant === "dark" ? "text-indigo-400" : "text-indigo-500"}">AiVora</span><span class="${variant === "dark" ? "text-indigo-300" : "text-indigo-600"}">labs</span>`;
            container.appendChild(textLogo);
          }
        }}
      />
    </div>
  );
}