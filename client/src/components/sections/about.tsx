import AnimatedBlob from "@/components/ui/animated-blob";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-primary font-medium">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Why Choose Aivora Labs?</h2>
              <p className="text-slate-700 text-lg mb-6">
                Because we're not just another dev agency. We're a team of technologists, AI engineers, designers, and innovators who care about solving problems with intelligence. We believe the future is AI-first, and we're here to help you lead it.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Expertise in AI Integration</h4>
                    <p className="text-slate-700">We specialize in applying cutting-edge AI technologies to solve real business problems.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Future-Proof Solutions</h4>
                    <p className="text-slate-700">Our solutions are designed to evolve with technology trends and your business needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">End-to-End Partnership</h4>
                    <p className="text-slate-700">We're with you from initial concept through development, launch, and beyond.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative reveal">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <div className="bg-gradient-primary p-8 text-white rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary opacity-10">
                    {/* SVG Pattern Background */}
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Let's Build Something Smart, Together</h3>
                  <p className="text-white/80 mb-6 relative z-10">
                    If you're ready to take your software to the next level, we're ready to build it. Book a free AI consultation, share your ideas, and watch us turn them into intelligent, beautiful, scalable digital products.
                  </p>
                  
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Free initial consultation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Custom AI strategy for your needs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Transparent pricing & timeline</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 relative z-10">
                    <a href="#contact" className="block w-full bg-white text-primary font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
                      Book a Free Consultation
                    </a>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mb-16 -mr-16"></div>
                </div>
              </div>
              
              {/* Background Blobs */}
              <AnimatedBlob 
                className="absolute w-40 h-40 -bottom-10 -left-10 filter blur-xl" 
                color="primary" 
                opacity={0.3} 
              />
              <AnimatedBlob 
                className="absolute w-40 h-40 -top-10 -right-10 filter blur-xl" 
                color="secondary" 
                opacity={0.2} 
                delay="2s" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
