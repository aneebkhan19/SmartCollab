import React from 'react';

export default function Logo({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <h1 className="text-2xl font-bold">
        <span className={variant === "dark" ? "text-indigo-400" : "text-indigo-500"}>AiVora</span>
        <span className={variant === "dark" ? "text-indigo-300" : "text-indigo-600"}>labs</span>
      </h1>
    </div>
  );
}