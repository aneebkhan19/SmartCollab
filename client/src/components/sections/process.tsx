export default function Process() {
  const processSteps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description: "We begin with deep discovery, learning your challenges and goals. We analyze your market, users, and competitors to formulate a comprehensive strategy.",
      tags: ["Requirement Analysis", "Competitive Research", "Strategy Development"],
      color: "bg-primary",
      number: "01"
    },
    {
      id: 2,
      title: "Rapid Prototyping",
      description: "Next, we rapidly prototype your ideas into wireframes and workflows. This iterative process allows us to test concepts quickly and refine them based on feedback.",
      tags: ["Wireframing", "Interactive Prototypes", "User Testing"],
      color: "bg-secondary",
      number: "02"
    },
    {
      id: 3,
      title: "Intelligent Development",
      description: "Then we bring them to life with clean code, advanced models, and intelligent logic. Our development process incorporates AI models and scalable architecture from the ground up.",
      tags: ["AI Integration", "Clean Code", "Scalable Architecture"],
      color: "bg-accent",
      number: "03"
    },
    {
      id: 4,
      title: "Launch & Continuous Learning",
      description: "Finally, we test, deploy, and monitor — ensuring your product doesn't just work, but improves over time. We implement AI-powered analytics and learning systems that help your product evolve with use.",
      tags: ["Deployment", "Analytics Integration", "Continuous Improvement"],
      color: "bg-primary",
      number: "04"
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="grid-bg absolute inset-0 opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <span className="text-primary font-medium">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-white">Our Process: Built for Intelligence</h2>
          <p className="text-gray-300 text-lg">
            We follow a comprehensive approach designed to transform your ideas into intelligent, scalable digital products.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 md:transform md:-translate-x-0.5"></div>
          
          {/* Process Steps */}
          <div className="space-y-12 md:space-y-24 relative">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col md:flex-row items-start reveal">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0">
                  <div className="flex-shrink-0 z-10">
                    <div className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center`}>
                      <span className="font-bold text-xs">{step.number}</span>
                    </div>
                  </div>
                  <div className="block md:hidden ml-4">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 ml-12 md:ml-0">
                  <div className="hidden md:block mb-2">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
