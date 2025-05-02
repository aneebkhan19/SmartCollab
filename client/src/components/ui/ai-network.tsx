import React, { useEffect, useRef } from "react";

export default function AiNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Define central point
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    
    // Define nodes
    const centralNode = {
      x: centerX,
      y: centerY,
      radius: 16,
      color: 'rgba(99, 102, 241, 0.9)',
      pulsate: true
    };
    
    const nodes = [
      {
        id: "automation", 
        x: centerX - centerX * 0.4, 
        y: centerY - centerY * 0.4,
        radius: 8,
        color: 'rgba(99, 102, 241, 0.8)',
        label: "Automation",
        pulsate: true,
        connected: true,
        angle: 0,
        distance: Math.sqrt(Math.pow(centerX * 0.4, 2) + Math.pow(centerY * 0.4, 2))
      },
      {
        id: "neural", 
        x: centerX - centerX * 0.4, 
        y: centerY + centerY * 0.4,
        radius: 8,
        color: 'rgba(147, 51, 234, 0.8)',
        label: "Neural Networks",
        pulsate: true,
        connected: true,
        angle: 0,
        distance: Math.sqrt(Math.pow(centerX * 0.4, 2) + Math.pow(centerY * 0.4, 2))
      },
      {
        id: "ml", 
        x: centerX + centerX * 0.4, 
        y: centerY - centerY * 0.4,
        radius: 8,
        color: 'rgba(59, 130, 246, 0.8)',
        label: "Machine Learning",
        pulsate: true,
        connected: true,
        angle: 0,
        distance: Math.sqrt(Math.pow(centerX * 0.4, 2) + Math.pow(centerY * 0.4, 2))
      },
      {
        id: "data", 
        x: centerX + centerX * 0.4, 
        y: centerY + centerY * 0.4,
        radius: 8,
        color: 'rgba(16, 185, 129, 0.8)',
        label: "Data Analytics",
        pulsate: true,
        connected: true,
        angle: 0,
        distance: Math.sqrt(Math.pow(centerX * 0.4, 2) + Math.pow(centerY * 0.4, 2))
      }
    ];
    
    // Add smaller particles
    const particles = Array(20).fill(null).map(() => {
      const distance = Math.random() * centerX * 0.8;
      const angle = Math.random() * Math.PI * 2;
      
      return {
        x: centerX + distance * Math.cos(angle),
        y: centerY + distance * Math.sin(angle),
        radius: 1 + Math.random() * 3,
        color: `rgba(${Math.floor(Math.random() * 100 + 156)}, ${Math.floor(Math.random() * 100 + 156)}, ${Math.floor(Math.random() * 255)}, ${0.2 + Math.random() * 0.3})`,
        angle,
        distance,
        speed: 0.0005 + Math.random() * 0.001,
        direction: Math.random() > 0.5 ? 1 : -1
      };
    });
    
    // Create gradient background
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 1)');  // Dark blue at top
      gradient.addColorStop(0.5, 'rgba(23, 37, 84, 0.9)');  // Midnight blue in middle
      gradient.addColorStop(1, 'rgba(15, 23, 42, 1)');  // Dark blue at bottom
      return gradient;
    };
    
    // Draw lines from center to nodes with dashed effect
    const drawConnectionLines = () => {
      nodes.forEach(node => {
        if (node.connected) {
          ctx.beginPath();
          ctx.moveTo(centralNode.x, centralNode.y);
          ctx.lineTo(node.x, node.y);
          ctx.setLineDash([2, 3]);
          ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });
    };
    
    // Draw the orbital paths
    const drawOrbitalPaths = () => {
      // Draw circular orbits
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerX * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.setLineDash([2, 4]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);
    };
    
    // Draw a node
    const drawNode = (node: any, time: number) => {
      // Pulsating effect
      const pulse = node.pulsate ? 1 + Math.sin(time * 0.003) * 0.2 : 1;
      const radius = node.radius * pulse;
      
      // Draw the node
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();
      
      // Add glow effect
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius * 1.5, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(
        node.x, node.y, radius * 0.5,
        node.x, node.y, radius * 1.5
      );
      
      // Extract color components for proper gradient
      const colorMatch = node.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (colorMatch) {
        const [_, r, g, b, a = 1] = colorMatch;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${parseFloat(a) * 0.5})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      } else {
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.5)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw label for connected nodes
      if (node.label) {
        drawLabel(node);
      }
    };
    
    // Draw a label
    const drawLabel = (node: any) => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      
      // Draw label background
      const labelWidth = ctx.measureText(node.label).width + 16;
      const labelHeight = 24;
      const labelX = node.x - labelWidth / 2;
      const labelY = node.y - node.radius - labelHeight - 5;
      
      // Add rounded rectangle background
      ctx.beginPath();
      ctx.roundRect(labelX, labelY, labelWidth, labelHeight, 8);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw label text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fillText(node.label, node.x, labelY + 16);
    };
    
    // Animation variables
    let animationFrameId: number;
    const radius = Math.min(centerX, centerY) * 0.8;
    
    // Animation function
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update central point on window resize
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      centralNode.x = centerX;
      centralNode.y = centerY;
      
      // Draw background
      ctx.fillStyle = createGradient();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update particles position
      particles.forEach(particle => {
        particle.angle += particle.speed * particle.direction;
        particle.x = centerX + particle.distance * Math.cos(particle.angle);
        particle.y = centerY + particle.distance * Math.sin(particle.angle);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw orbital paths
      drawOrbitalPaths();
      
      // Draw connection lines
      drawConnectionLines();
      
      // Draw nodes
      drawNode(centralNode, time);
      nodes.forEach(node => drawNode(node, time));
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate(0);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="relative h-80 md:h-[500px] w-full overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full bg-slate-900"></canvas>
      
      {/* Central Icon/Label */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border border-indigo-500/30 shadow-lg shadow-indigo-500/30">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-indigo-400" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 22v-5"></path>
            <path d="M9 7V2"></path>
            <path d="M15 7V2"></path>
            <path d="M6 13V8"></path>
            <path d="M18 13V8"></path>
            <path d="M12 17a5 5 0 0 0 5-5c0-2.76-2.5-5-5-5s-5 2.24-5 5a5 5 0 0 0 5 5z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
