import ServiceCard from "@/components/ui/service-card";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "AI-Enhanced Web & App Development",
      description: "Our development approach goes beyond writing code — we create smart, scalable platforms that adapt to your users and your business. From mobile apps to enterprise web systems, we integrate AI to optimize performance, personalize experiences, and reduce operational effort.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tags: ["Responsive Web", "Mobile Apps", "Enterprise Systems", "AI Integration"],
      iconBg: "bg-primary/10"
    },
    {
      id: 2,
      title: "Conversational AI & Voice Assistants",
      description: "Imagine having a 24/7 intelligent assistant that speaks like a human, thinks like an analyst, and supports your users with precision. We build advanced chatbots and voice agents powered by GPT-4, ElevenLabs, and custom-trained language models — deployed across websites, apps, and smart devices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      tags: ["Chatbots", "Voice Assistants", "GPT-4 Integration", "Custom LLMs"],
      iconBg: "bg-secondary/10"
    },
    {
      id: 3,
      title: "Intelligent UI/UX Design & Animation",
      description: "Design is no longer static. With AI in our design pipeline, we create responsive, adaptive, and visually compelling interfaces that adjust to user behavior. Animated transitions, dynamic layouts, and real-time design intelligence help us deliver experiences that truly engage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      tags: ["UI/UX Design", "Motion Design", "Adaptive Interfaces", "3D Animation"],
      iconBg: "bg-accent/10"
    },
    {
      id: 4,
      title: "AI-Powered Marketing Systems",
      description: "Our AI marketing suite helps brands generate campaigns, write content, and analyze performance in real time. Let intelligent systems plan your outreach, optimize your copy, and track what's working — while you focus on strategy and growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      tags: ["Content Generation", "Campaign Analysis", "Automated Reporting", "AI Copywriting"],
      iconBg: "bg-primary/10"
    },
    {
      id: 5,
      title: "Smart Inventory & Workflow Automation",
      description: "We develop intelligent backend systems that manage inventory, automate vendor communication, and track live stock levels — all with minimal manual input. Our solutions help reduce waste, prevent stockouts, and improve day-to-day efficiency with AI-driven alerts and recommendations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      tags: ["Inventory Management", "Workflow Automation", "Predictive Analytics", "Supply Chain Optimization"],
      iconBg: "bg-secondary/10",
      fullWidth: true
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <span className="text-primary font-medium">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">AI-Enhanced Services</h2>
          <p className="text-slate-700 text-lg">
            We combine deep tech expertise with artificial intelligence to help businesses scale smarter, faster, and more efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              tags={service.tags} 
              iconBg={service.iconBg}
              fullWidth={service.fullWidth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
