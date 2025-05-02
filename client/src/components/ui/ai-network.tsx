import React from "react";

export default function AiNetwork() {
  return (
    <div className="relative h-80 md:h-96 bg-slate-900 p-4 overflow-hidden">
      {/* Central Node */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-slow">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/40 flex items-center justify-center">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* SVG Animation - Connection Lines and Orbital Nodes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        {/* Animated Connection Lines */}
        <g className="connection-lines opacity-30">
          <path d="M400,300 L150,150" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse-slow"></path>
          <path d="M400,300 L650,150" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse-slow" style={{animationDelay: '0.5s'}}></path>
          <path d="M400,300 L650,450" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse-slow" style={{animationDelay: '1s'}}></path>
          <path d="M400,300 L150,450" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse-slow" style={{animationDelay: '1.5s'}}></path>
          <path d="M400,300 L400,100" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse-slow" style={{animationDelay: '2s'}}></path>
          <path d="M400,300 L400,500" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse-slow" style={{animationDelay: '2.5s'}}></path>
        </g>
        
        {/* Orbital Paths */}
        <circle cx="400" cy="300" r="200" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" className="opacity-10"></circle>
        <circle cx="400" cy="300" r="150" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3,3" className="opacity-10"></circle>
        <circle cx="400" cy="300" r="100" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" className="opacity-10"></circle>
        
        {/* Orbital Nodes */}
        {/* Outer Orbit */}
        <circle cx="150" cy="150" r="10" fill="#6366f1" className="animate-pulse-slow" style={{animationDelay: '0.2s'}}></circle>
        <circle cx="650" cy="150" r="10" fill="#6366f1" className="animate-pulse-slow" style={{animationDelay: '0.7s'}}></circle>
        <circle cx="650" cy="450" r="10" fill="#6366f1" className="animate-pulse-slow" style={{animationDelay: '1.2s'}}></circle>
        <circle cx="150" cy="450" r="10" fill="#6366f1" className="animate-pulse-slow" style={{animationDelay: '1.7s'}}></circle>
        
        {/* Middle Orbit - Animated Movement */}
        <circle cx="0" cy="0" r="8" fill="#0ea5e9" className="animate-pulse-slow">
          <animateMotion 
            path="M0,0 a150,150 0 1,0 1,0 z" 
            dur="20s" 
            repeatCount="indefinite" 
            rotate="auto"
          />
        </circle>
        <circle cx="0" cy="0" r="8" fill="#0ea5e9" className="animate-pulse-slow" style={{animationDelay: '1s'}}>
          <animateMotion 
            path="M0,0 a150,150 0 1,0 1,0 z" 
            dur="20s" 
            repeatCount="indefinite" 
            rotate="auto"
            begin="5s"
          />
        </circle>
        <circle cx="0" cy="0" r="8" fill="#0ea5e9" className="animate-pulse-slow" style={{animationDelay: '2s'}}>
          <animateMotion 
            path="M0,0 a150,150 0 1,0 1,0 z" 
            dur="20s" 
            repeatCount="indefinite" 
            rotate="auto"
            begin="10s"
          />
        </circle>
        
        {/* Inner Orbit - Animated Movement */}
        <circle cx="0" cy="0" r="6" fill="#10b981" className="animate-pulse-slow">
          <animateMotion 
            path="M0,0 a100,100 0 1,1 1,0 z" 
            dur="12s" 
            repeatCount="indefinite" 
            rotate="auto"
          />
        </circle>
        <circle cx="0" cy="0" r="6" fill="#10b981" className="animate-pulse-slow" style={{animationDelay: '0.5s'}}>
          <animateMotion 
            path="M0,0 a100,100 0 1,1 1,0 z" 
            dur="12s" 
            repeatCount="indefinite" 
            rotate="auto"
            begin="4s"
          />
        </circle>
      </svg>
      
      {/* Floating Data Labels */}
      <div className="absolute top-1/4 right-1/4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-xs text-white border border-white/20 animate-float">
        Machine Learning
      </div>
      <div className="absolute bottom-1/4 left-1/4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-xs text-white border border-white/20 animate-float" style={{animationDelay: '2s'}}>
        Neural Networks
      </div>
      <div className="absolute top-1/3 left-1/4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-xs text-white border border-white/20 animate-float" style={{animationDelay: '1s'}}>
        Automation
      </div>
      <div className="absolute bottom-1/3 right-1/4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-xs text-white border border-white/20 animate-float" style={{animationDelay: '3s'}}>
        Data Analytics
      </div>
    </div>
  );
}
