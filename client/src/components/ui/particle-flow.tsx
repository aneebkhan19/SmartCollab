import React, { useRef, useEffect } from 'react';

export default function ParticleFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions with high resolution
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
    
    // Define parameters
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    const noiseScale = 0.01;
    
    // Flow field parameters
    const fieldSize = 20;
    const fieldWidth = Math.ceil(canvas.width / fieldSize);
    const fieldHeight = Math.ceil(canvas.height / fieldSize);
    const field = new Array(fieldWidth * fieldHeight);
    
    // Define particle type
    type Particle = {
      x: number;
      y: number;
      size: number;
      speedMultiplier: number;
      colorBase: { r: number; g: number; b: number };
      alpha: number;
      age: number;
      lifetime: number;
      trail: Array<{ x: number; y: number }>;
      trailLength: number;
    };
    
    // Create particles
    const particleCount = 250;
    const particles: Particle[] = [];
    
    // Color palettes
    const primaryColors = [
      { r: 99, g: 102, b: 241 },  // Indigo
      { r: 59, g: 130, b: 246 },  // Blue
      { r: 16, g: 185, b: 129 },  // Emerald
      { r: 139, g: 92, b: 246 },  // Purple
    ];
    
    const secondaryColors = [
      { r: 165, g: 180, b: 252 },  // Light Indigo
      { r: 147, g: 197, b: 253 },  // Light Blue
      { r: 110, g: 231, b: 183 },  // Light Emerald
      { r: 192, g: 132, b: 252 },  // Light Purple
    ];
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const colorIndex = Math.floor(Math.random() * primaryColors.length);
      const usePrimary = Math.random() > 0.4;
      const colorBase = usePrimary ? primaryColors[colorIndex] : secondaryColors[colorIndex];
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 0.5 + Math.random() * 2.5,
        speedMultiplier: 0.2 + Math.random() * 0.8,
        colorBase,
        alpha: 0.1 + Math.random() * 0.6,
        age: Math.random() * 100,
        lifetime: 50 + Math.random() * 100,
        // Track the particle's path for trailing effect
        trail: [],
        trailLength: Math.floor(3 + Math.random() * 15)
      });
    }
    
    // Simplex noise function for flow field
    const noise = (x: number, y: number, t: number) => {
      // Simple implementation - can be replaced with a more sophisticated noise
      return Math.sin(x * noiseScale) * Math.cos(y * noiseScale) * Math.sin(t * 0.0005);
    };
    
    // Create flow field
    const updateFlowField = (time: number) => {
      for (let y = 0; y < fieldHeight; y++) {
        for (let x = 0; x < fieldWidth; x++) {
          const angle = noise(x, y, time) * Math.PI * 2;
          const index = y * fieldWidth + x;
          field[index] = { x: Math.cos(angle), y: Math.sin(angle) };
        }
      }
    };
    
    // Create a radial gradient for the background
    const createBackground = () => {
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(canvas.width, canvas.height) * 0.6
      );
      
      gradient.addColorStop(0, 'rgba(30, 41, 59, 1)');  // Slate 800
      gradient.addColorStop(0.7, 'rgba(15, 23, 42, 1)'); // Slate 900
      gradient.addColorStop(1, 'rgba(2, 6, 23, 1)');    // Slate 950
      
      return gradient;
    };
    
    // Draw a particle
    const drawParticle = (particle: any) => {
      // Draw the particle trail (fading effect)
      if (particle.trail.length > 0) {
        for (let i = 0; i < particle.trail.length; i++) {
          const point = particle.trail[i];
          const { r, g, b } = particle.colorBase;
          
          const trailOpacity = (i / particle.trail.length) * particle.alpha * 0.5;
          const trailSize = (i / particle.trail.length) * particle.size;
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${trailOpacity})`;
          ctx.fill();
        }
      }
      
      // Draw the main particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      
      const { r, g, b } = particle.colorBase;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.alpha})`;
      ctx.fill();
      
      // Add subtle glow effect
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, particle.size * 0.5,
        particle.x, particle.y, particle.size * 2
      );
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${particle.alpha * 0.5})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fill();
    };
    
    // Draw connections between close particles
    const drawConnections = () => {
      const maxDistance = 100;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Blend the colors of the two particles
            const { r: r1, g: g1, b: b1 } = p1.colorBase;
            const { r: r2, g: g2, b: b2 } = p2.colorBase;
            
            const opacity = (1 - distance / maxDistance) * 0.15; // Thin, subtle connections
            ctx.strokeStyle = `rgba(${(r1 + r2) / 2}, ${(g1 + g2) / 2}, ${(b1 + b2) / 2}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    
    // Add floating tech labels that move with the flow
    const techLabels = [
      { text: "Machine Learning", x: centerX * 0.5, y: centerY * 0.6, size: 14, color: 'rgba(96, 165, 250, 0.8)' },
      { text: "Neural Networks", x: centerX * 1.5, y: centerY * 0.7, size: 16, color: 'rgba(167, 139, 250, 0.8)' },
      { text: "Computer Vision", x: centerX * 0.6, y: centerY * 1.4, size: 14, color: 'rgba(52, 211, 153, 0.8)' },
      { text: "Data Analytics", x: centerX * 1.4, y: centerY * 1.3, size: 15, color: 'rgba(129, 140, 248, 0.8)' },
      { text: "Automation", x: centerX * 0.9, y: centerY * 0.4, size: 13, color: 'rgba(167, 139, 250, 0.7)' },
      { text: "NLP", x: centerX * 1.2, y: centerY * 1.6, size: 12, color: 'rgba(52, 211, 153, 0.7)' },
    ];
    
    // Draw a floating tech label
    const drawTechLabel = (label: any) => {
      ctx.font = `${label.size}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      
      // Draw label background - modern pill shape with glassmorphism effect
      const textWidth = ctx.measureText(label.text).width + 24;
      const labelHeight = label.size + 14;
      const labelX = label.x - textWidth / 2;
      const labelY = label.y - labelHeight / 2;
      
      // Add rounded background with subtle blur effect
      ctx.beginPath();
      ctx.roundRect(labelX, labelY, textWidth, labelHeight, labelHeight / 2);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
      ctx.fill();
      
      // Add subtle border
      ctx.strokeStyle = label.color.replace(/[^,]+(?=\))/, '0.3');
      ctx.lineWidth = 0.5;
      ctx.stroke();
      
      // Draw label text with perfect white
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.fillText(label.text, label.x, label.y + label.size / 3);
    };
    
    // Flow the tech labels according to the field
    const flowTechLabels = (time: number) => {
      techLabels.forEach(label => {
        // Get the field cell for this label
        const fieldX = Math.floor(label.x / fieldSize);
        const fieldY = Math.floor(label.y / fieldSize);
        
        // Ensure we're within bounds
        if (fieldX >= 0 && fieldX < fieldWidth && fieldY >= 0 && fieldY < fieldHeight) {
          const cellIndex = fieldY * fieldWidth + fieldX;
          const cell = field[cellIndex];
          
          if (cell) {
            // Move slightly with the flow but much slower than particles
            label.x += cell.x * 0.05 * Math.sin(time * 0.0005);
            label.y += cell.y * 0.05 * Math.sin(time * 0.0005);
            
            // Contain within canvas with padding
            const padding = 100;
            if (label.x < padding) label.x = padding;
            if (label.x > canvas.width - padding) label.x = canvas.width - padding;
            if (label.y < padding) label.y = padding;
            if (label.y > canvas.height - padding) label.y = canvas.height - padding;
          }
        }
        
        drawTechLabel(label);
      });
    };
    
    // Add central glowing orb with tech icon
    const drawCentralOrb = (time: number) => {
      // Pulsating effect
      const pulse = 1 + Math.sin(time * 0.001) * 0.1;
      const radius = 30 * pulse;
      
      // Draw glow
      const gradient = ctx.createRadialGradient(
        centerX, centerY, radius * 0.3,
        centerX, centerY, radius * 3
      );
      
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.8)');
      gradient.addColorStop(0.3, 'rgba(99, 102, 241, 0.2)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };
    
    // Animation function
    let animationFrameId: number;
    
    const animate = (time: number) => {
      // Update canvas dimensions and center point
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update flow field
      updateFlowField(time);
      
      // Draw background
      ctx.fillStyle = createBackground();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw central orb
      drawCentralOrb(time);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Get the field cell for this particle
        const fieldX = Math.floor(particle.x / fieldSize);
        const fieldY = Math.floor(particle.y / fieldSize);
        
        // Ensure we're within bounds
        if (fieldX >= 0 && fieldX < fieldWidth && fieldY >= 0 && fieldY < fieldHeight) {
          const cellIndex = fieldY * fieldWidth + fieldX;
          const cell = field[cellIndex];
          
          if (cell) {
            // Add current position to trail
            particle.trail.push({ x: particle.x, y: particle.y });
            if (particle.trail.length > particle.trailLength) {
              particle.trail.shift();
            }
            
            // Move with the flow
            particle.x += cell.x * 2 * particle.speedMultiplier;
            particle.y += cell.y * 2 * particle.speedMultiplier;
            
            // Add slight attraction to center for some particles
            if (Math.random() > 0.99) {
              const dx = centerX - particle.x;
              const dy = centerY - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              particle.x += (dx / distance) * 1;
              particle.y += (dy / distance) * 1;
            }
            
            // Particles age and fade
            particle.age++;
            if (particle.age > particle.lifetime) {
              particle.alpha *= 0.95;
              if (particle.alpha < 0.01) {
                // Reset particle
                particle.x = Math.random() * canvas.width;
                particle.y = Math.random() * canvas.height;
                particle.alpha = 0.1 + Math.random() * 0.6;
                particle.age = 0;
                particle.trail = [];
              }
            }
            
            // Wrap around screen edges with padding
            const padding = 20;
            if (particle.x < -padding) particle.x = canvas.width + padding;
            if (particle.x > canvas.width + padding) particle.x = -padding;
            if (particle.y < -padding) particle.y = canvas.height + padding;
            if (particle.y > canvas.height + padding) particle.y = -padding;
          }
        }
        
        drawParticle(particle);
      });
      
      // Draw connections between close particles
      drawConnections();
      
      // Draw and flow tech labels
      flowTechLabels(time);
      
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
      
      {/* Central icon with clean styling */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-slate-900/60 backdrop-blur-sm flex items-center justify-center border border-indigo-500/30 shadow-xl shadow-indigo-500/20">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-indigo-400" 
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