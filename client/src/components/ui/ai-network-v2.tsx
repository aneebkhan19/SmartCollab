import React, { useRef, useEffect } from 'react';

export default function AiNetworkV2() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return;
      
      const devicePixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      
      ctx.scale(devicePixelRatio, devicePixelRatio);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Define central point
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    
    // Define nodes based on the reference image
    const centralNode = {
      x: centerX,
      y: centerY,
      radius: 18,
      color: 'rgba(83, 82, 237, 0.95)',
      pulsate: true
    };
    
    // Configuration for exact positioning as in the image
    const nodeDistance = Math.min(centerX, centerY) * 0.4; // Distance from center
    
    const nodes = [
      {
        id: "automation", 
        x: centerX - nodeDistance, 
        y: centerY - nodeDistance,
        radius: 10,
        color: 'rgba(129, 140, 248, 0.95)',
        label: "Automation",
        pulsate: true,
        connected: true,
        angle: -Math.PI * 0.75,
        distance: nodeDistance * 1.4
      },
      {
        id: "neural", 
        x: centerX - nodeDistance, 
        y: centerY + nodeDistance,
        radius: 10,
        color: 'rgba(167, 139, 250, 0.95)',
        label: "Neural Networks",
        pulsate: true,
        connected: true,
        angle: -Math.PI * 0.25,
        distance: nodeDistance * 1.4
      },
      {
        id: "ml", 
        x: centerX + nodeDistance, 
        y: centerY - nodeDistance,
        radius: 10,
        color: 'rgba(96, 165, 250, 0.95)',
        label: "Machine Learning",
        pulsate: true,
        connected: true,
        angle: Math.PI * 0.25,
        distance: nodeDistance * 1.4
      },
      {
        id: "data", 
        x: centerX + nodeDistance, 
        y: centerY + nodeDistance,
        radius: 10,
        color: 'rgba(52, 211, 153, 0.95)',
        label: "Data Analytics",
        pulsate: true,
        connected: true,
        angle: Math.PI * 0.75,
        distance: nodeDistance * 1.4
      }
    ];
    
    // Add small background particles for subtle movement
    const particles = Array(25).fill(null).map(() => {
      const distance = Math.random() * centerX * 0.7;
      const angle = Math.random() * Math.PI * 2;
      
      // Create subtle particles with colors matching the image
      let particleColor;
      const quadrant = Math.floor(angle / (Math.PI / 2));
      
      if (quadrant === 0) {
        // Top-right - blue
        particleColor = `rgba(79, 140, 246, ${0.1 + Math.random() * 0.15})`;
      } else if (quadrant === 1) {
        // Bottom-right - teal
        particleColor = `rgba(79, 209, 197, ${0.1 + Math.random() * 0.15})`;
      } else if (quadrant === 2) {
        // Bottom-left - purple
        particleColor = `rgba(167, 139, 250, ${0.1 + Math.random() * 0.15})`;
      } else {
        // Top-left - indigo
        particleColor = `rgba(99, 102, 241, ${0.1 + Math.random() * 0.15})`;
      }
      
      return {
        x: centerX + distance * Math.cos(angle),
        y: centerY + distance * Math.sin(angle),
        radius: 1 + Math.random() * 1.5, // Smaller particles like in the image
        color: particleColor,
        angle,
        distance,
        speed: 0.0003 + Math.random() * 0.0005, // Slower movement
        direction: Math.random() > 0.5 ? 1 : -1
      };
    });
    
    // Create the smooth gradient background seen in the image
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(40, 50, 78, 1)');    // Lighter navy at top
      gradient.addColorStop(0.3, 'rgba(15, 23, 42, 0.95)'); // Mid navy
      gradient.addColorStop(0.7, 'rgba(15, 23, 42, 0.95)'); // Mid navy
      gradient.addColorStop(1, 'rgba(40, 50, 78, 1)');    // Lighter navy at bottom
      return gradient;
    };
    
    // Draw lines from center to nodes with subtle dashed style as in the image
    const drawConnectionLines = () => {
      nodes.forEach(node => {
        if (node.connected) {
          // First draw a faint glow under the dashed line - exactly like the image
          ctx.beginPath();
          ctx.moveTo(centralNode.x, centralNode.y);
          ctx.lineTo(node.x, node.y);
          
          // Get color based on node type
          let lineColor = 'rgba(148, 163, 184, 0.3)'; // Default subtle color
          let glowColor = 'rgba(148, 163, 184, 0.05)'; // Default glow
          
          if (node.id === "ml") {
            lineColor = 'rgba(96, 165, 250, 0.4)';
            glowColor = 'rgba(96, 165, 250, 0.1)';
          } else if (node.id === "neural") {
            lineColor = 'rgba(167, 139, 250, 0.4)';
            glowColor = 'rgba(167, 139, 250, 0.1)';
          } else if (node.id === "data") {
            lineColor = 'rgba(52, 211, 153, 0.4)';
            glowColor = 'rgba(52, 211, 153, 0.1)';
          } else if (node.id === "automation") {
            lineColor = 'rgba(129, 140, 248, 0.4)';
            glowColor = 'rgba(129, 140, 248, 0.1)';
          }
          
          // Draw subtle glow
          ctx.strokeStyle = glowColor;
          ctx.lineWidth = 2;
          ctx.globalAlpha = 0.3;
          ctx.stroke();
          ctx.globalAlpha = 1.0;
          
          // Draw dashed line exactly as in the image - thin and subtle
          ctx.beginPath();
          ctx.moveTo(centralNode.x, centralNode.y);
          ctx.lineTo(node.x, node.y);
          ctx.setLineDash([2, 2]);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });
    };
    
    // Draw a node with clean appearance as in the image
    const drawNode = (node: any, time: number) => {
      // Very subtle pulsating effect - barely noticeable like in the image
      const pulse = node.pulsate ? 1 + Math.sin(time * 0.002) * 0.05 : 1;
      const radius = node.radius * pulse;
      
      // Draw the node with a clean solid fill
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      
      // Create subtle gradient fill for a slight 3D effect
      const nodeGradient = ctx.createRadialGradient(
        node.x - radius * 0.3, node.y - radius * 0.3, 0,
        node.x, node.y, radius
      );
      
      // Extract color components to create the gradient
      const baseColor = node.color.replace(/[^\d,]/g, '').split(',');
      const r = baseColor[0];
      const g = baseColor[1];
      const b = baseColor[2];
      
      nodeGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
      nodeGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.85)`);
      
      ctx.fillStyle = nodeGradient;
      ctx.fill();
      
      // Add very subtle outer glow
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius * 1.3, 0, Math.PI * 2);
      const glowGradient = ctx.createRadialGradient(
        node.x, node.y, radius,
        node.x, node.y, radius * 2
      );
      
      glowGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.2)`);
      glowGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      
      ctx.fillStyle = glowGradient;
      ctx.fill();
      
      // Draw label only when not the central node
      if (node.label) {
        drawLabel(node);
      }
    };
    
    // Draw label with styling exactly like in the image
    const drawLabel = (node: any) => {
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'center';
      
      // Draw pill-shaped label background with light glassmorphism effect as in the image
      const labelWidth = ctx.measureText(node.label).width + 20;
      const labelHeight = 22;
      const labelX = node.x - labelWidth / 2;
      const labelY = node.y - node.radius - labelHeight - 5;
      
      // Add rounded rectangle background - matching the pill style in the image
      ctx.beginPath();
      ctx.roundRect(labelX, labelY, labelWidth, labelHeight, 11);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
      ctx.fill();
      
      // Draw label text with perfect white
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fillText(node.label, node.x, labelY + 15);
    };
    
    // Animation variables
    let animationFrameId: number;
    
    // Animation function
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update central point on window resize
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      centralNode.x = centerX;
      centralNode.y = centerY;
      
      // Update node positions in a perfect diamond pattern
      nodes.forEach((node) => {
        node.x = centerX + Math.cos(node.angle) * node.distance;
        node.y = centerY + Math.sin(node.angle) * node.distance;
      });
      
      // Draw background
      ctx.fillStyle = createGradient();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw connection lines first (below nodes)
      drawConnectionLines();
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.angle += particle.speed * particle.direction;
        particle.x = centerX + particle.distance * Math.cos(particle.angle);
        particle.y = centerY + particle.distance * Math.sin(particle.angle);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw nodes on top
      nodes.forEach(node => drawNode(node, time));
      drawNode(centralNode, time);
      
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
      
      {/* Central Icon with clean styling as in the image */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-slate-900/90 backdrop-blur-sm flex items-center justify-center border border-indigo-500/30 shadow-md shadow-indigo-500/20">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-indigo-400" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
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