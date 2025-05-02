import AiNetworkV2 from "@/components/ui/ai-network-v2";
import AnimatedBlob from "@/components/ui/animated-blob";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <AnimatedBlob 
          className="absolute w-96 h-96 -top-20 -right-20" 
          color="primary" 
          opacity={0.4} 
        />
        <AnimatedBlob 
          className="absolute w-96 h-96 bottom-10 -left-20" 
          color="secondary" 
          opacity={0.3} 
          delay="2s" 
        />
        <AnimatedBlob 
          className="absolute w-40 h-40 top-40 left-1/4" 
          color="accent" 
          opacity={0.3} 
          delay="1s" 
        />
        <div className="grid-bg absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 animate-fade-in">
            Redefining Software Development with AI
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-in">
            Building the Future of Software with <span className="text-gradient">AI Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-3xl mx-auto animate-slide-in" style={{animationDelay: '0.2s'}}>
            We don't just build software — we build intelligent systems that learn, automate, and evolve to help businesses scale smarter, faster, and more efficiently.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-in" style={{animationDelay: '0.4s'}}>
            <a href="#contact" className="bg-gradient-primary hover:shadow-lg shadow-primary/20 text-white px-8 py-3 rounded-full font-medium transition-all">
              Book a Free AI Consultation
            </a>
            <a href="#services" className="bg-white border border-gray-200 hover:border-primary text-slate-900 px-8 py-3 rounded-full font-medium transition-all">
              Explore Our Services
            </a>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10 pointer-events-none"></div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-2xl shadow-primary/10 bg-white reveal">
            {/* Modern AI Network Animation Component */}
            <AiNetworkV2 />
          </div>
        </div>
      </div>
    </section>
  );
}
